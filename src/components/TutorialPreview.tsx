import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TutorialPreview = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [step, setStep] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  // 画面サイズの検出
  useEffect(() => {
    const checkMobile = () => {
      // ユーザーエージェントと画面幅の両方で判定し、モバイル判定の精度を上げる
      const ua = navigator.userAgent;
      const mobileByUa = /iPhone|iPad|iPod|Android/i.test(ua);
      const mobileByWidth = window.innerWidth < 768;
      const isMobileView = mobileByUa || mobileByWidth;
      console.log('画面幅', window.innerWidth, 'UAによるモバイル判定', mobileByUa, 'isMobile:', isMobileView);
      setIsMobile(isMobileView);
    };
    
    // 初期実行
    checkMobile();
    
    // リサイズイベントリスナーを追加
    window.addEventListener('resize', checkMobile);
    
    // クリーンアップ
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  
  // アプリの操作フローステップ
  const steps = [
    {
      title: "しゃべるノートをはじめる",
      description: "アプリを起動してスタートしましょう",
      buttonText: "次へ：ノートを作成",
      image: "/images/tutorial1.png",
      mobileImage: "/images/tutorial1-mobile.png",
    },
    {
      title: "ノートを作成",
      description: "新しいノートを作成します",
      buttonText: "次へ：ノートに文字を書く",
      image: "/images/tutorial-step2.png",
      mobileImage: "/images/tutorial-step2-mobile.png",
    },
    {
      title: "ノートに文字を書く",
      description: "ノートアプリとして使用できます",
      buttonText: "次へ：音声への変換",
      image: "/images/tutorial-step4.png",
      mobileImage: "/images/tutorial-step3-mobile.png",
    },
    {
      title: "音声への変換",
      description: "AIが文字を認識して自然な音声で読み上げます",
      buttonText: "チュートリアルを終了",
      video: "/images/tutorial-step5.mp4",
      mobileVideo: "/images/tutorial-step5-mobile.mp4",
    },
  ];

  // SVGアニメーション
  useEffect(() => {
    if (svgRef.current) {
      // SVGのパスを取得
      const path = svgRef.current.querySelector('path');
      if (path) {
        // パスの全長を取得
        const pathLength = path.getTotalLength();
        
        // 初期状態ではパス全体を非表示に
        path.style.strokeDasharray = `${pathLength}`;
        path.style.strokeDashoffset = `${pathLength}`;
        
        // アニメーションの設定
        path.animate(
          [
            { strokeDashoffset: pathLength },
            { strokeDashoffset: 0 }
          ],
          {
            duration: 5000,
            fill: 'forwards',
            easing: 'ease-in-out'
          }
        );
      }
    }
  }, []);

  // 動画の再生制御
  useEffect(() => {
    if (step === 3 && videoRef.current) {
      const videoElement = videoRef.current;

      // デバイスに応じてミュート設定を変更
      videoElement.muted = isMobile; // モバイルはミュート、PC はアンミュート
      videoElement.volume = 1; // PC では音量最大

      const tryPlay = () => {
        const playPromise = videoElement.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => console.log('動画の自動再生成功'))
            .catch(err => {
              console.log('自動再生に失敗:', err);
              // 自動再生が失敗した場合、ミュートにして再試行
              if (!videoElement.muted) {
                videoElement.muted = true;
                videoElement.play().catch(err2 => {
                  console.log('ミュートでも再生失敗:', err2);
                  alert('動画を再生するには、画面をタップ/クリックしてください');
                });
              }
            });
        }
      };

      // iOS Safari では load() してから play() しないと表示されないことがある
      videoElement.load();
      tryPlay();
    }
  }, [step, isMobile]);

  // 次のステップに進む
  const handleNextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      // 最後のステップの場合はチュートリアルをリセット
      setStep(0);
      setShowWelcome(true);
    }
  };

  // 特定のステップに移動
  const goToStep = (index: number) => {
    setStep(index);
  };

  // ウェルカムポップアップを表示
  const WelcomePopup = () => (
    <motion.div 
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg border border-slate-200 z-20 ${isMobile ? 'p-1 w-[40%] max-w-[120px]' : 'p-2 md:p-3 w-[70%] sm:w-[60%] md:w-[50%] max-w-[200px]'}`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{ maxHeight: isMobile ? '30%' : '50%', overflow: 'auto' }}
    >
      {isMobile ? (
        // スマホ版シンプル表示
        <button 
          className="w-full bg-primary text-white font-medium py-1.5 px-2 rounded-lg flex items-center justify-center text-xs"
          onClick={() => setShowWelcome(false)}
        >
          しゃべるノートをはじめる
        </button>
      ) : (
        // デスクトップ版通常表示
        <>
          <div className="text-center mb-1 md:mb-2">
            <div className="inline-block bg-primary/10 p-1 md:p-1.5 rounded-full mb-1 md:mb-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 md:h-4 md:w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
              </svg>
            </div>
            <h3 className="text-sm md:text-base font-semibold mb-0.5 md:mb-1">しゃべるノートへようこそ</h3>
            <p className="text-[10px] md:text-xs text-slate-600 mb-1 md:mb-2">
              基本機能をここで体験いただけます。<br />
              操作はシンプルで、すぐに効果を体感できます。
            </p>
          </div>
          <button 
            className="w-full bg-primary text-white font-medium py-1 px-2 rounded-lg flex items-center justify-center text-[10px] md:text-xs"
            onClick={() => setShowWelcome(false)}
          >
            しゃべるノートをはじめる
          </button>
        </>
      )}
    </motion.div>
  );

  // ステップに応じたコンテンツを表示
  const renderStepContent = () => {
    const currentStep = steps[step];
    // ステップが動画表示のステップ（新しいインデックスでは3）か確認
    if (step === 3) { 
      return (
        <div className="w-full h-full flex items-center justify-center">
          <video
            ref={videoRef}
            key={isMobile ? currentStep.mobileVideo : currentStep.video} // キーを変えて再レンダリングを促す
            src={isMobile ? currentStep.mobileVideo : currentStep.video}
            className="w-full h-full object-contain rounded shadow"
            loop
            playsInline
            controls
            autoPlay
            muted={isMobile}
          />
        </div>
      );
    } else {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <img
            key={isMobile ? currentStep.mobileImage : currentStep.image} // キーを変えて再レンダリングを促す
            src={isMobile ? currentStep.mobileImage : currentStep.image}
            alt={currentStep.title}
            className="max-w-full max-h-full object-contain rounded shadow"
            // onErrorハンドラを追加してデバッグ
            onError={(e) => console.error(`画像の読み込みエラー: ${e.currentTarget.src}`)}
          />
        </div>
      );
    }
  };

  return (
    <section id="tutorial-preview" className="py-12 md:py-24 px-4 md:px-12 bg-gradient-to-br from-primary/20 via-secondary/20 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary">しゃべるノート</span>の機能を実際に体験
          </motion.h2>
          <motion.p 
            className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            下のデモをタップして、直感的な操作を体験してみましょう
          </motion.p>
        </div>
        
        <div className="relative">
          {/* 以前のSVG背景を削除し、シンプルな色背景のみとします */}
          
          {/* アプリのスクリーンショットとアニメーション */}
          <div className="relative z-10 mx-auto max-w-4xl">
            {/* ベースとなるアプリ画面 */}
            <motion.div
              className="bg-white rounded-lg md:rounded-xl overflow-hidden shadow-lg border border-slate-200 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {/* ブラウザのヘッダー部分 */}
              <div className="bg-slate-100 p-1.5 md:p-2 flex items-center border-b border-slate-200">
                <div className="flex space-x-1.5 md:space-x-2 mr-3 md:mr-4">
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-red-400"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-white rounded-full h-4 md:h-6 mx-8 md:mx-16"></div>
              </div>
              
              {/* アプリのインターフェース */}
              <div className="p-3 md:p-4 bg-white">
                <div className="grid grid-cols-1 gap-3 md:gap-4">
                  {/* メインエリア - ステップに応じて内容が変わる */}
                  <div className="bg-slate-50 rounded-lg p-2 md:p-3 h-[350px] sm:h-[400px] md:h-[500px] relative flex items-center justify-center">
                    {/* コンテンツを表示 */}
                    <AnimatePresence mode="wait">
                      {showWelcome ? (
                        <motion.div
                          key="welcome-preview"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex items-center justify-center relative"
                        >
                          <div className="relative w-full h-full flex items-center justify-center">
                            <div className="w-full h-full p-4 flex items-center justify-center">
                              <div className="w-full max-w-md">
                                <h3 className="text-lg font-semibold mb-3 text-center">ノート一覧</h3>
                                <div className="border border-slate-200 rounded-lg p-4 bg-white">
                                  <div className="flex justify-between items-center mb-4">
                                    <span className="text-sm font-medium">マイノート</span>
                                    <span className="text-xs text-slate-500">すべて</span>
                                  </div>
                                  <div className="space-y-2">
                                    <div className="p-2 border border-slate-100 rounded bg-slate-50 flex justify-between">
                                      <span className="text-sm">マインドセット記録</span>
                                      <span className="text-xs text-slate-500">2023/4/15</span>
                                    </div>
                                    <div className="p-2 border border-slate-100 rounded bg-slate-50 flex justify-between">
                                      <span className="text-sm">会議で字が読めない</span>
                                      <span className="text-xs text-slate-500">2023/5/3</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute inset-0 bg-slate-100/60 flex items-center justify-center">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <WelcomePopup />
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`content-${step}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex flex-col items-center justify-center"
                        >
                          <div className="relative w-full h-full flex items-center justify-center">
                            {/* ステップに応じたコンテンツを表示 */}
                            {renderStepContent()}
                            
                            {/* 次のステップへのボタン */}
                            <motion.div
                              className="absolute bottom-4 right-4 bg-primary/10 p-2 rounded-lg"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                            >
                              <button
                                className="bg-primary text-white text-xs md:text-sm px-3 py-1.5 rounded-lg"
                                onClick={handleNextStep}
                              >
                                {steps[step].buttonText}
                              </button>
                            </motion.div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* ステップインジケーター */}
            {!showWelcome && (
              <div className="flex justify-center mt-4 md:mt-8 space-x-1.5 md:space-x-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${step === index ? 'bg-primary' : 'bg-slate-300'} cursor-pointer transition-colors duration-200 hover:bg-primary/70`}
                    onClick={() => goToStep(index)}
                  />
                ))}
              </div>
            )}
            
            {/* 現在のステップの説明 */}
            {!showWelcome && (
              <motion.div
                key={step}
                className="text-center mt-3 md:mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-base md:text-lg font-semibold text-primary">{steps[step].title}</h3>
                <p className="text-xs md:text-sm text-slate-600">{steps[step].description}</p>
              </motion.div>
            )}
          </div>
          
          {/* 機能ハイライト */}
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mt-8 md:mt-12">
            {[
              {
                title: "直感的な操作",
                description: "シンプルなインターフェースで、誰でも簡単に使えます",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
                  </svg>
                )
              },
              {
                title: "カスタマイズ可能",
                description: "音声の種類やスピードを自分好みに調整できます",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                )
              },
              {
                title: "学習をサポート",
                description: "ディスレクシアや学習障害があっても効果的に学べます",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                  </svg>
                )
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-100 relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + (index * 0.1) }}
              >
                <div className="bg-primary/10 p-3 rounded-full inline-block mb-4">
                  <div className="text-primary">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorialPreview;

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TutorialPreview = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [step, setStep] = useState(0);
  const [showWelcome, setShowWelcome] = useState(true);
  
  // アプリの操作フローステップ
  const steps = [
    { 
      title: "ノート一覧", 
      description: "作成したノートの一覧を確認できます",
      buttonText: "次へ：ノートを作成",
      image: "/images/tutorial1.png"
    },
    { 
      title: "ノートの作成", 
      description: "新しいノートを作成します",
      buttonText: "次へ：文字を書く",
      image: "/images/tutorial-step2.png"
    },
    { 
      title: "文字を書く", 
      description: "キャンバスに文字や図形を自由に書き込めます",
      buttonText: "次へ：書き終える",
      image: "/images/tutorial-step3.png"
    },
    { 
      title: "ノートの完成", 
      description: "書いた内容がノートとして保存されます",
      buttonText: "次へ：音声に変換",
      image: "/images/tutorial-step4.png"
    },
    { 
      title: "音声への変換", 
      description: "AIが文字を認識して自然な音声で読み上げます",
      buttonText: "チュートリアルを終了",
      video: "/images/tutorial-step5.mp4"
    }
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
    if (step === 4 && videoRef.current) {
      // 動画の自動再生を確実に行うため、mutedを追加して再生
      videoRef.current.muted = true;
      videoRef.current.play()
        .then(() => {
          // 自動再生成功後、ミュートを解除
          setTimeout(() => {
            if (videoRef.current) {
              videoRef.current.muted = false;
              console.log('動画の再生開始、ミュート解除');
            }
          }, 500);
        })
        .catch(e => {
          console.log('動画の自動再生に失敗しました:', e);
          // 失敗時はユーザーに通知
          alert('動画を再生するには、画面をクリックしてください');
        });
    }
  }, [step]);

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
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg border border-slate-200 p-4 w-[85%] max-w-none md:w-[65%] md:max-w-xs z-20"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{ maxHeight: '80%', overflow: 'auto' }}
    >
      <div className="text-center mb-3">
        <div className="inline-block bg-primary/10 p-2 rounded-full mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
          </svg>
        </div>
        <h3 className="text-lg font-semibold mb-1">しゃべるノートへようこそ</h3>
        <p className="text-slate-600 text-xs mb-3">
          基本機能をここで体験いただけます。<br />
          操作はシンプルで、すぐに効果を体感できます。
        </p>
      </div>
      <button 
        className="w-full bg-primary text-white font-medium py-1.5 px-3 rounded-lg flex items-center justify-center text-sm"
        onClick={() => setShowWelcome(false)}
      >
        はじめる
      </button>
    </motion.div>
  );

  return (
    <section id="tutorial-preview" className="py-24 px-6 md:px-12 bg-gradient-to-br from-primary/20 via-secondary/20 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary">しゃべるノート</span>の機能を実際に体験
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            下のデモをタップして、直感的な操作を体験してみましょう
          </motion.p>
        </div>
        
        <div className="relative">
          {/* 背景のSVGアニメーション */}
          <svg 
            ref={svgRef}
            className="absolute inset-0 w-full h-full z-0"
            viewBox="0 0 2854 1239" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M47 338.746c31.833 63.334 138 181.1 308 145.5 212.5-44.5 375.5-276 512-357.5s246-105 326-45.5 63.5 164-17 310.5-202 344.5-241.5 448-27 206.154 80.5 239.504c93.5 29 206 0 343.5-185.004 138.72-186.646 256.5-218 224.5-50-21.5 110.333-64.3 334.204-63.5 347.004 1 16 234-386.004 574-524.004 313.17-127.11 622.5 7 712.5 242" 
              stroke="#3164FF" 
              strokeWidth="4" 
              strokeLinecap="round"
            />
          </svg>
          
          {/* アプリのスクリーンショットとアニメーション */}
          <div className="relative z-10 mx-auto max-w-4xl">
            {/* ベースとなるアプリ画面 */}
            <motion.div
              className="bg-white rounded-xl overflow-hidden shadow-xl border border-slate-200 relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              {/* ブラウザのヘッダー部分 */}
              <div className="bg-slate-100 p-2 flex items-center border-b border-slate-200">
                <div className="flex space-x-2 mr-4">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-white rounded-full h-6 mx-16"></div>
              </div>
              
              {/* アプリのインターフェース */}
              <div className="p-4 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  {/* メインエリア - ステップに応じて内容が変わる */}
                  <div className="bg-slate-50 rounded-lg p-3 h-[450px] md:h-[500px] relative flex items-center justify-center">
                    {/* 実際のスクリーンショットまたは動画を表示 */}
                    <AnimatePresence mode="wait">
                      {showWelcome ? (
                        <motion.div
                          key="welcome-preview"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="w-full h-full flex items-center justify-center"
                        >
                          <img
                            src="/images/tutorial1.png"
                            alt="ノート一覧"
                            className="w-full h-full object-cover rounded-lg shadow-md opacity-50"
                          />
                          <WelcomePopup />
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
                            {/* 画像または動画表示 */}
                            {steps[step].video ? (
                              <video
                                ref={videoRef}
                                src={steps[step].video}
                                className="w-full h-full object-cover rounded-lg shadow-md"
                                controls
                                loop
                                muted
                                autoPlay
                                playsInline
                              />
                            ) : (
                              <img
                                src={steps[step].image}
                                alt={steps[step].title}
                                className="w-full h-full object-cover rounded-lg shadow-md"
                              />
                            )}
                            
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
              
              {/* ウェルカムポップアップをアプリ画面の上にオーバーレイ表示 */}
              <AnimatePresence>
                {/* ウェルカムポップアップは上のコンテンツ内に移動したため、ここでは表示しない */}
              </AnimatePresence>
            </motion.div>
            
            {/* ステップインジケーター */}
            {!showWelcome && (
              <div className="flex justify-center mt-8 space-x-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${step === index ? 'bg-primary' : 'bg-slate-300'} cursor-pointer transition-colors duration-200 hover:bg-primary/70`}
                    onClick={() => goToStep(index)}
                  />
                ))}
              </div>
            )}
            
            {/* 現在のステップの説明 */}
            {!showWelcome && (
              <motion.div
                key={step}
                className="text-center mt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-lg font-semibold text-primary">{steps[step].title}</h3>
                <p className="text-sm text-slate-600">{steps[step].description}</p>
              </motion.div>
            )}
          </div>
          
          {/* 機能ハイライト */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
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

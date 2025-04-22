import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, Brain, HeadphonesIcon } from 'lucide-react';

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // 画面サイズの検出
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <section className="pt-16 sm:pt-20 md:pt-28 md:pb-24 lg:pt-40 lg:pb-32 px-4 md:px-6 lg:px-12 hero-gradient relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">
        {/* モバイル版でのみ画像を先に表示 */}
        {isMobile && (
          <div className="relative animate-slide-in-right mt-0 md:mt-0 order-first">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-xl md:rounded-[2.5rem] transform rotate-3 scale-[0.97]"></div>
            <div className="glass rounded-xl md:rounded-[2.5rem] overflow-hidden border-t border-l border-white/50 shadow-xl transform -rotate-3">
              <img 
                src="https://jikkenpro.netlify.app/images/note.jpg" 
                alt="しゃべるノートのイメージ - 学習障害・ディスレクシアの方向けのAI音声対応ノートアプリ" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-6 md:-right-6 glass p-1.5 sm:p-2 md:p-4 rounded-lg md:rounded-xl animate-floating shadow-sm">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 md:h-3 md:w-3 bg-primary rounded-full"></div>
                <p className="text-[9px] sm:text-xs md:text-sm font-medium whitespace-nowrap">AI音声で学習をサポート中...</p>
              </div>
            </div>
          </div>
        )}

        <div className="animate-fade-in-up">
          <div className="inline-block bg-secondary px-2 py-1 sm:px-3 sm:py-1.5 rounded-full text-[10px] xs:text-xs sm:text-sm font-medium text-primary mb-2 md:mb-6 max-w-full overflow-hidden text-ellipsis">
            <span className="line-clamp-2">学習障害・ディスレクシアに悩む方に寄り添う音声読み上げ対応ノートアプリ</span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-6 leading-tight">
            文字の壁を超えて、<br />
            <span className="text-primary">学ぶ喜び</span>を取り戻す。
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mb-4 md:mb-8 max-w-xl">
            「読めない」「書けない」そんな悩みを抱える方へ。手書き文字や入力した文章をAIが音声化し、見る・聞く・触れるマルチセンソリーな学習体験で、あなたの可能性を広げます。
          </p>
          
          {/* モバイル版では詳しく見るボタンとサービスの特長ボタンを後に表示 */}
          {!isMobile && (
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <Button 
                className="btn-primary flex items-center group text-sm sm:text-base py-4 sm:py-5 w-full sm:w-auto justify-center"
                onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
              >
                詳しく見る
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                variant="outline" 
                className="btn-secondary text-slate-800 hover:text-slate-900 text-sm sm:text-base py-4 sm:py-5 w-full sm:w-auto justify-center mt-2 sm:mt-0"
                onClick={() => document.getElementById('benefits').scrollIntoView({ behavior: 'smooth' })}
              >
                サービスの特長
              </Button>
            </div>
          )}
        </div>
        
        {/* PC版でのみ画像を右側に表示 */}
        {!isMobile && (
          <div className="relative animate-slide-in-right mt-6 md:mt-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-xl md:rounded-[2.5rem] transform rotate-3 scale-[0.97]"></div>
            <div className="glass rounded-xl md:rounded-[2.5rem] overflow-hidden border-t border-l border-white/50 shadow-xl transform -rotate-3">
              <img 
                src="https://jikkenpro.netlify.app/images/note.jpg" 
                alt="しゃべるノートのイメージ - 学習障害・ディスレクシアの方向けのAI音声対応ノートアプリ" 
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-6 md:-right-6 glass p-1.5 sm:p-2 md:p-4 rounded-lg md:rounded-xl animate-floating shadow-sm">
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 md:h-3 md:w-3 bg-primary rounded-full"></div>
                <p className="text-[9px] sm:text-xs md:text-sm font-medium whitespace-nowrap">AI音声で学習をサポート中...</p>
              </div>
            </div>
          </div>
        )}

        {/* モバイル版では詳しく見るボタンとサービスの特長ボタンを後に表示 */}
        {isMobile && (
          <div className="flex flex-col gap-3 mt-6 relative z-10">
            <Button 
              className="btn-primary flex items-center group text-sm py-4 w-full justify-center"
              onClick={() => document.getElementById('features').scrollIntoView({ behavior: 'smooth' })}
            >
              詳しく見る
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <a href="#benefits" className="w-full">
              <Button 
                variant="outline" 
                className="bg-white hover:bg-gray-100 border border-gray-200 shadow-sm text-slate-800 hover:text-slate-900 text-sm py-4 w-full justify-center"
                type="button"
              >
                サービスの特長
              </Button>
            </a>
          </div>
        )}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-12 md:h-24 bg-gradient-to-t from-background to-transparent pointer-events-none z-0"></div>
    </section>
  );
};

export default Hero;

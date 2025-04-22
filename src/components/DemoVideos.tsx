import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

const DemoVideos = () => {
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLVideoElement;
          if (entry.isIntersecting) {
            // 再生 & 音声ON (ミュート解除)
            if (target.paused) {
              target.muted = false;
              target.play().catch(() => {});
            }
          } else {
            // ビューポート外では停止してミュート
            if (!target.paused) {
              target.pause();
              target.muted = true;
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((v) => {
      if (v) observer.observe(v);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="demo" className="py-12 md:py-20 px-4 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-12 animate-fade-in-up">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            使用感をご確認ください
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-6">
            学習障害やディスレクシアのある方でも、直感的に使えるシンプルな操作性を実現しました
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-5 md:gap-8">
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 animate-fade-in-up">
            <div className="relative pb-[56.25%] overflow-hidden">
              <video 
                ref={(el) => (videoRefs.current[0] = el)}
                className="absolute inset-0 w-full h-full object-cover"
                controls
                muted
                loop
              >
                <source src="https://jikkenpro.netlify.app/videos/speaking-note-demo1.mp4" type="video/mp4" />
                お使いのブラウザはビデオタグをサポートしていません。
              </video>
            </div>
            <div className="p-3 md:p-5">
              <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">ノートに書いた文字を音声に</h3>
              <p className="text-slate-600 text-xs md:text-sm">
                文字の認識が難しくてもも大丈夫。キャンバスに書いた文章をAIが正確にに音声化。耳から学ぶことで、文字の読み取りに悩む方も学習内容を理解できます。
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-md border border-slate-100 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            <div className="relative pb-[56.25%] overflow-hidden">
              <video 
                ref={(el) => (videoRefs.current[1] = el)}
                className="absolute inset-0 w-full h-full object-cover"
                controls
                muted
                loop
              >
                <source src="https://jikkenpro.netlify.app/videos/speaking-note-demo2.mp4" type="video/mp4" />
                お使いのブラウザはビデオタグをサポートしていません。
              </video>
            </div>
            <div className="p-3 md:p-5">
              <h3 className="font-semibold text-base md:text-lg mb-1 md:mb-2">メモに入力したテキストを音声に</h3>
              <p className="text-slate-600 text-xs md:text-sm">
                気になったwebサイトやニュースの記事をコピーしてメモ帳に貼り付け。
                それをAIが音声化してくれるので、電車の中などの移動時間でも繰り返しリピートして聞くことができます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoVideos;

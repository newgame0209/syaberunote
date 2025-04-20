import React from 'react';
import FeatureCard from './FeatureCard';
import { BookOpen, Ear, Brain, Speech, LayoutGrid, Settings } from 'lucide-react';

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            学習の<span className="text-primary">ハードル</span>を取り除く
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            ディスレクシアや学習障害で文字の読み書きに困難を感じる方のために、多感覚を活用した学習方法で「わかる」「できる」体験を提供します。
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard 
            title="書いた文字を音声に変換"
            description="ノートのキャンバスに書いた文字やメモに入力したテキストをAIが理解し自然な音声で読み上げ。文字を目で追うことが難しい方でも内容を耳から理解できます。"
            icon={<Speech className="h-8 w-8" />}
            delay={100}
          />
          
          <FeatureCard 
            title="複数感覚で学ぶ"
            description="「見る・聞く・触れる」を組み合わせたマルチセンソリー学習で、ディスレクシアの方でも効果的に学習内容を記憶できます。"
            icon={<Brain className="h-8 w-8" />}
            delay={200}
          />
          
          <FeatureCard 
            title="自分に合った速さで"
            description="読み上げのスピードや音声を自分の理解度に合わせて調整可能。焦らずに自分のペースで学習を進められます。"
            icon={<Settings className="h-8 w-8" />}
            delay={300}
          />
          
          <FeatureCard 
            title="読みやすさ重視"
            description="ディスレクシア対応フォントや文字間隔、背景色などを調整して、より文字を認識しやすい環境を提供します。"
            icon={<LayoutGrid className="h-8 w-8" />}
            delay={400}
          />
          
          <FeatureCard 
            title="音で確認しながら"
            description="入力や書き込みをリアルタイムで音声化。「今何を書いたか」を即座に確認でき、学習の自信につながります。"
            icon={<Ear className="h-8 w-8" />}
            delay={500}
          />
          
          <FeatureCard 
            title="学びの達成感を実感"
            description="小さな成功体験の積み重ねで自己肯定感を育む。「できない」から「できた！」への変化を実感できます。"
            icon={<BookOpen className="h-8 w-8" />}
            delay={600}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

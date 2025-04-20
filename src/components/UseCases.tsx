import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { School, Home, BookOpen, Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

const UseCases = () => {
  const [activeTab, setActiveTab] = useState(0);
  
  const useCases = [
    {
      title: "授業中の活用",
      icon: <School className="h-6 w-6" />,
      description: "授業内容を音声で記録し、後から復習できます。書くことに集中せず、先生の話に集中できるので、理解度が高まります。",
      features: [
        "ノートを取る負担を軽減",
        "授業内容を正確に記録",
        "重要ポイントをマーカーでハイライト",
        "復習時に音声で確認可能"
      ],
      image: "/images/image4.png"
    },
    {
      title: "家庭学習での活用",
      icon: <Home className="h-6 w-6" />,
      description: "教科書や参考書の内容を音声で聞きながら学習できます。読むことが苦手でも、耳から情報を取り入れることで学習効率が上がります。",
      features: [
        "教科書の内容を音声化",
        "自分のペースで学習可能",
        "読み上げスピードの調整",
        "繰り返し聞いて記憶の定着"
      ],
      image: "/images/image3.png"
    },
    {
      title: "テスト勉強での活用",
      icon: <BookOpen className="h-6 w-6" />,
      description: "重要ポイントを音声メモで記録し、繰り返し聞くことでテスト対策ができます。移動中や寝る前など、様々なシーンで学習を継続できます。",
      features: [
        "重要ポイントを音声でまとめ",
        "カテゴリ分けで科目別に整理",
        "スキマ時間を活用した学習",
        "聞きながら記憶の定着"
      ],
      image: "/images/image.png"
    },
    {
      title: "創造的活動での活用",
      icon: <Lightbulb className="h-6 w-6" />,
      description: "アイデアやひらめきを素早く音声メモとして記録。書く手間なく思考を整理できるので、創造的な活動をサポートします。",
      features: [
        "ひらめきを即座に記録",
        "アイデアの整理と発展",
        "プロジェクト管理への活用",
        "チーム内での共有が簡単"
      ],
      image: "/images/image2.png"
    }
  ];

  return (
    <section id="use-cases" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            様々な<span className="text-primary">学習シーン</span>で活用
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            「しゃべるノート」は、学校や家庭など様々な場面で学習をサポート。
            ディスレクシアや学習障害があっても、効果的に学ぶことができます。
          </p>
        </div>
        
        <div className="bg-slate-50 rounded-2xl p-6 md:p-8 shadow-sm">
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {useCases.map((useCase, index) => (
              <button
                key={index}
                className={cn(
                  "flex items-center px-4 py-2 rounded-full text-sm md:text-base transition-colors",
                  activeTab === index 
                    ? "bg-primary text-white" 
                    : "bg-white text-slate-700 hover:bg-slate-100"
                )}
                onClick={() => setActiveTab(index)}
              >
                <span className="mr-2">{useCase.icon}</span>
                {useCase.title}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              key={`content-${activeTab}`}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <span className="bg-primary/10 p-2 rounded-full mr-3 text-primary">
                  {useCases[activeTab].icon}
                </span>
                {useCases[activeTab].title}
              </h3>
              <p className="text-slate-600 mb-6">
                {useCases[activeTab].description}
              </p>
              <div className="space-y-3">
                <h4 className="font-semibold">おすすめ機能</h4>
                <ul className="space-y-2">
                  {useCases[activeTab].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 mr-3 text-primary mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            
            <motion.div
              key={`image-${activeTab}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="order-1 md:order-2"
            >
              <div className="bg-white p-4 rounded-xl shadow-md">
                {useCases[activeTab].image ? (
                  <img 
                    src={useCases[activeTab].image} 
                    alt={useCases[activeTab].title} 
                    className="w-full rounded-lg"
                    style={{ height: '300px', objectFit: 'contain' }}
                  />
                ) : (
                  <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center text-slate-400">
                    <span className="text-sm">画像: {useCases[activeTab].title}</span>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;

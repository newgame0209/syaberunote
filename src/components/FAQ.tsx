import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "しゃべるノートはどんな人に向いていますか？",
      answer: "ディスレクシアや学習障害があり、読み書きに困難を感じている方に特に適しています。また、効率的に学習したい学生や、情報を音声で取り入れたい方にもおすすめです。"
    },
    {
      question: "どのような機能がありますか？",
      answer: "手書きノートの音声読み上げ、選択テキストの音声変換、音声設定のカスタマイズ（男性・女性の声、スピード調整）、カテゴリ分類とフィルタリング、ページ追加機能、各種ツール操作（手書きペン、マーカー、消しゴムなど）があります。今後も機能拡張を予定しています。"
    },
    {
      question: "利用料金はいくらですか？",
      answer: "現在、基本機能は無料でご利用いただけます。今後、より高度な機能を備えたプレミアムプランの提供を予定していますが、詳細は決まり次第お知らせします。"
    },
    {
      question: "どの端末で利用できますか？",
      answer: "現在はウェブブラウザからアクセスできるため、パソコン、タブレット、スマートフォンなど様々な端末でご利用いただけます。今後、専用アプリの開発も検討しています。"
    },
    {
      question: "音声認識の精度はどれくらいですか？",
      answer: "最新のAI技術を活用しており、高い精度で文字の認識と音声変換を行います。ただし、手書き文字の読みやすさや書き方によって精度が変わることがあります。"
    },
    {
      question: "学校や教育機関での導入は可能ですか？",
      answer: "はい、学校や教育機関での導入も可能です。複数ユーザーでの利用や特別な設定についてはお問い合わせください。"
    }
  ];

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4">
            よくある<span className="text-primary">ご質問</span>
          </h2>
          <p className="text-sm sm:text-lg text-slate-600">
            「しゃべるノート」についてよくいただくご質問をまとめました。
            その他のご質問はお問い合わせフォームからお気軽にどうぞ。
          </p>
        </div>
        
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index}
              className={cn(
                "bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-sm border border-slate-100",
                openIndex === index ? "shadow-md" : ""
              )}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <button
                className="w-full text-left p-4 sm:p-6 flex justify-between items-center"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-sm sm:text-lg font-semibold pr-8">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  openIndex === index ? "max-h-96" : "max-h-0"
                )}
              >
                <p className="px-4 pb-4 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-600">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

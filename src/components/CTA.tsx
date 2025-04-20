import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpen, HeadphonesIcon, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const MotionButton = motion(Button);

const CTA = () => {
  return (
    <section id="cta" className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-primary/90 to-accent/90 rounded-3xl overflow-hidden relative">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgzMCkiPjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiNmZmZmZmYxMCIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNwYXR0ZXJuKSIvPjwvc3ZnPg==')]"></div>
          <div className="relative z-10 py-16 px-8 md:py-20 md:px-16 text-white">
            <motion.div 
              className="max-w-3xl mx-auto text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
                variants={fadeInUp}
              >
                「読みづらい」「書きづらい」から<br />
                「わかった！」「できた！」へ
              </motion.h2>
              <motion.p 
                className="text-xl mb-8 opacity-90"
                variants={fadeInUp}
              >
                ディスレクシアや学習障害があっても、あなたの可能性は無限大。「しゃべるノート」で学ぶ楽しさを再発見しませんか？
              </motion.p>
              
              <motion.div 
                className="flex flex-col md:flex-row justify-center gap-4 mb-10"
                variants={fadeInUp}
              >
                {[
                  { icon: <BookOpen className="h-5 w-5" />, text: "お問い合わせ" },
                  { icon: <Brain className="h-5 w-5" />, text: "学校や施設での導入相談" },
                  { icon: <HeadphonesIcon className="h-5 w-5" />, text: "専門スタッフによるサポート" }
                ].map((step, index) => (
                  <div key={index} className="flex items-center bg-white/10 rounded-full px-4 py-2">
                    <div className="bg-white/20 rounded-full p-1 mr-2 flex-shrink-0">
                      {step.icon}
                    </div>
                    <span className="text-sm md:text-base">{`${index + 1}. ${step.text}`}</span>
                    {index < 2 && (
                      <ArrowRight className="h-4 w-4 mx-2 hidden md:block" />
                    )}
                  </div>
                ))}
              </motion.div>
              
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-4"
                variants={fadeInUp}
              >
                <Button 
                  className="bg-white text-primary hover:bg-white/90 text-base py-6 px-8 rounded-full group"
                  onClick={() => document.getElementById('feedback').scrollIntoView({ behavior: 'smooth' })}
                >
                  お問い合わせ
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  className="border-white/30 bg-white/10 hover:bg-white/20 text-white text-base py-6 px-8 rounded-full"
                  onClick={() => document.getElementById('features-detail').scrollIntoView({ behavior: 'smooth' })}
                >
                  機能一覧を見る
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Brain, Ear, Pencil } from 'lucide-react';

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

const ProblemSolution = () => {
  const solutions = [
    {
      problem: "教科書の文字が読みづらい",
      solution: "AIが音声で読み上げてくれる",
      description: "文字の認識が苦手でも、AIが正確に読み上げるので内容理解に集中できます。",
      icon: <BookOpen className="h-6 w-6" />
    },
    {
      problem: "ノートを取るのが遅れがち",
      solution: "音声メモで素早く記録できる",
      description: "書くことに集中せず、授業や学習内容に集中できます。後から音声で確認できるので安心です。",
      icon: <Pencil className="h-6 w-6" />
    },
    {
      problem: "学習内容を覚えられない",
      solution: "複数感覚で効率的に記憶",
      description: "視覚と聴覚を同時に使うマルチセンソリー学習で、記憶の定着率が高まります。",
      icon: <Brain className="h-6 w-6" />
    },
    {
      problem: "自分のペースで学べない",
      solution: "読み上げスピードを自由に調整",
      description: "速すぎず、遅すぎない、自分に最適なペースで学習を進められます。",
      icon: <Ear className="h-6 w-6" />
    }
  ];

  return (
    <section id="problem-solution" className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            variants={fadeInUp}
          >
            お悩みを<span className="text-primary">しゃべるノート</span>で解決
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            ディスレクシアや学習障害による「読めない」「書けない」の壁を取り払い、
            学ぶ楽しさを取り戻すためのソリューションをご提供します。
          </motion.p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-md border border-slate-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <div className="text-primary">
                    {item.icon}
                  </div>
                </div>
                <div>
                  <div className="text-slate-500 mb-1 text-sm">
                    {item.problem}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {item.solution}
                  </h3>
                  <p className="text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;

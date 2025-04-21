import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-12 sm:py-16 md:py-24 px-6 md:px-12 bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="relative animate-fade-in-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-[2.5rem] transform rotate-2 scale-[0.98]"></div>
            <div className="bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl transform -rotate-2 p-4 sm:p-6">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="col-span-2 bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <h4 className="font-semibold mb-2">文字の壁を超える音声機能</h4>
                  <p className="text-sm text-slate-600">文字が読みづらくても、AIが正確に音声化</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <h4 className="font-semibold mb-2">聞きながら理解</h4>
                  <p className="text-sm text-slate-600">視覚と聴覚で学習内容を深く理解</p>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <h4 className="font-semibold mb-2">自分のペースで</h4>
                  <p className="text-sm text-slate-600">速度調整で無理なく学習</p>
                </div>
                <div className="col-span-2 bg-primary/10 rounded-xl p-4 border border-primary/20">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-primary/20 rounded-full flex items-center justify-center mr-4">
                      <svg className="h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 8c-3.28 0-6 2.43-6 6H2c0-6.31 4.48-8 10-8Z"></path>
                        <path d="M17 6h1c1.66 0 3 1.34 3 3v1"></path>
                        <path d="M14 3h1c2.76 0 5 2.24 5 5v1"></path>
                        <circle cx="9" cy="17" r="3"></circle>
                        <path d="m21 13-3 3-2-2"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold">マルチセンソリー学習</h4>
                      <p className="text-sm text-slate-600">見て・聞いて・触れて学ぶ</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              お悩みを<br />しゃべるノートで解決
            </h2>
            <p className="text-base sm:text-lg text-slate-600 mb-6">
              「読めない」「書けない」という悩みを抱える学習障害やディスレクシアの方々の声に応えて開発された専用ツールです。読み書きの壁を取り払い、本来の学ぶ力を引き出します。
            </p>
            
            <div className="space-y-4 mb-6">
              {[
                "文字の認識が苦手でも音声で内容理解をサポート",
                "読み上げスピードを調整して無理なく学習"
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="h-5 w-5 mr-3 text-primary mt-0.5">
                    <Check className="h-5 w-5" />
                  </div>
                  <p className="text-slate-700">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center">
              <Button 
                className="btn-primary flex items-center group"
                onClick={() => document.getElementById('features-detail').scrollIntoView({ behavior: 'smooth' })}
              >
                機能詳細を見る
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;

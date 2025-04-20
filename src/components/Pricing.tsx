import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Pricing = () => {
  return (
    <section 
      id="pricing" 
      className="py-16 md:py-24 px-4 md:px-12 bg-gradient-to-b from-white to-secondary/30"
      aria-labelledby="pricing-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 id="pricing-heading" className="text-2xl md:text-4xl font-bold mb-3 md:mb-4">
            β版限定公開中
          </h2>
          <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto">
            現在、学習障害やディスレクシアのある方を対象に、β版を限定公開しています。
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 border border-slate-200 shadow-sm">
          <div className="text-center">
            <div className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
              β版ユーザー募集中
            </div>
            <h3 className="text-xl font-bold mb-4">無料トライアル実施中</h3>
            <p className="text-slate-600 mb-6">
              β版期間中は全ての機能を無料でご利用いただけます。
              フィードバックを通じて、より良いサービスの開発に
              ご協力ください。
            </p>
            <Button 
              className="w-full md:w-auto bg-primary hover:bg-primary/90"
              onClick={() => {}}
            >
              β版に参加する
            </Button>
          </div>
        </div>

        <div className="mt-16 max-w-3xl mx-auto" id="faq">
          <h3 className="text-xl md:text-2xl font-bold mb-6 text-center">よくある質問</h3>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>β版はいつまで利用できますか？</AccordionTrigger>
              <AccordionContent>
                正式リリースまでの期間中、継続してご利用いただけます。正式リリースの時期や料金プランについては、決定次第ご案内させていただきます。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>β版で作成したデータは正式版でも使えますか？</AccordionTrigger>
              <AccordionContent>
                はい、β版で作成したすべてのデータは正式版でもそのまま継続してご利用いただけます。
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>誰でもβ版を利用できますか？</AccordionTrigger>
              <AccordionContent>
                学習障害やディスレクシアをお持ちの方、またはその支援者（教育者、保護者など）を対象とした限定公開となっております。
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

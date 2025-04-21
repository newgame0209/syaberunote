import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { 
  Bookmark, 
  TextSelect, 
  Settings2, 
  FolderKanban, 
  FilePlus, 
  Pen, 
  Mic, 
  ImagePlus, 
  FileText, 
  MessageSquareText, 
  FileDigit,
  ChevronRight
} from 'lucide-react';

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
      staggerChildren: 0.1
    }
  }
};

// 既存機能データ
const existingFeatures = [
  {
    icon: <Bookmark className="h-6 w-6" />,
    title: "しおり機能",
    description: "ノートに複数のしおりを挟んで、重要なページにすぐにアクセスできます。学習の効率化に役立ちます。"
  },
  {
    icon: <TextSelect className="h-6 w-6" />,
    title: "選択テキスト音声変換",
    description: "メモ内の特定の部分だけを選択して音声に変換できます。必要な箇所だけを繰り返し聞くことができます。"
  },
  {
    icon: <Settings2 className="h-6 w-6" />,
    title: "音声設定カスタマイズ",
    description: "男性・女性の声を選択でき、読み上げスピードも調整可能。自分に合った聞きやすい設定で学習できます。"
  },
  {
    icon: <FolderKanban className="h-6 w-6" />,
    title: "カテゴリ分類",
    description: "ノート・メモをカテゴリごとに整理してフィルタリングできます。科目や内容ごとに管理して探しやすく。"
  },
  {
    icon: <FilePlus className="h-6 w-6" />,
    title: "ページ追加機能",
    description: "必要に応じてノートにページを追加できます。学習内容の量に合わせて柔軟に対応できます。"
  },
  {
    icon: <Pen className="h-6 w-6" />,
    title: "ツール操作",
    description: "手書きペン、マーカー、消しゴム、一個前に戻す機能を搭載。直感的な操作で思考を妨げません。"
  }
];

// 今後追加予定の機能データ
const upcomingFeatures = [
  {
    icon: <Mic className="h-6 w-6" />,
    title: "音声の文字起こし機能",
    description: "話した内容を自動的にテキスト化。口頭での学習内容もノートとして残せます。"
  },
  {
    icon: <ImagePlus className="h-6 w-6" />,
    title: "ツール拡張",
    description: "画像アップロード、多様なペンの種類、色の追加など、表現の幅が広がります。"
  },
  {
    icon: <FileText className="h-6 w-6" />,
    title: "用紙カスタマイズ",
    description: "用紙サイズ、用紙タイプの追加。方眼紙や罫線など、用途に合わせた使い分けが可能に。"
  },
  {
    icon: <MessageSquareText className="h-6 w-6" />,
    title: "AIチャット機能",
    description: "キャンバス上でAIに質問、辞書引き、校正、リサーチなどができ、学習をサポートします。"
  },
  {
    icon: <FileDigit className="h-6 w-6" />,
    title: "メモ要約機能",
    description: "書いたメモの内容をAIが分析し、要点をまとめた要約を提案。復習が効率的になります。"
  }
];

const FeaturesDetail = () => {
  const [activeTab, setActiveTab] = useState('existing');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const FeatureCard = ({ icon, title, description, delay, showTabButton = false }) => (
    <motion.div
      className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm"
      variants={fadeInUp}
      custom={delay}
    >
      <div className="flex items-start">
        <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-sm text-slate-600">{description}</p>
          {showTabButton && (
            <Button
              variant="ghost"
              className="mt-4 text-primary hover:text-primary/90 p-0 h-auto font-medium text-sm flex items-center"
              onClick={() => setActiveTab(activeTab === 'existing' ? 'upcoming' : 'existing')}
            >
              {activeTab === 'existing' ? '今後追加予定の機能を見る' : '既存の機能を見る'}
              <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="features-detail" className="py-24 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            機能紹介
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            学習障害・ディスレクシアの方々の学びをサポートする多彩な機能を搭載しています
          </p>
        </div>

        {!isMobile && (
          <Tabs defaultValue="existing" className="w-full">
            <TabsList className="mx-auto flex justify-center mb-8 p-1 bg-secondary">
              <TabsTrigger value="existing" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                既存の機能
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="rounded-md data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                今後追加予定の機能
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="existing">
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {existingFeatures.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    delay={index * 100}
                  />
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="upcoming">
              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {upcomingFeatures.map((feature, index) => (
                  <FeatureCard
                    key={index}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    delay={index * 100}
                  />
                ))}
              </motion.div>
              <div className="text-center mt-8 text-sm text-slate-500">
                ※ 上記の機能は今後のアップデートで順次追加予定です
              </div>
            </TabsContent>
          </Tabs>
        )}

        {isMobile && (
          <motion.div 
            className="grid gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {(activeTab === 'existing' ? existingFeatures : upcomingFeatures).map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
                showTabButton={index === 0}
              />
            ))}
            {activeTab === 'upcoming' && (
              <div className="text-center mt-4 text-sm text-slate-500">
                ※ 上記の機能は今後のアップデートで順次追加予定です
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default FeaturesDetail;

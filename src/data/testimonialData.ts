export interface Testimonial {
  name: string;
  title: string;
  quote: string;
  avatar: string;
  usage: string;
  result: string;
}

// Use a more specific interface with only string literal properties
export interface TestimonialCategories {
  students: Testimonial[];
  parents: Testimonial[];
  educators: Testimonial[];
  // We're keeping the string index signature for flexibility,
  // but our components will only use the specific string literals
  [key: string]: Testimonial[];
}

// テスティモニアルデータを学習障害・ディスレクシア関連に特化
export const testimonialsByCategory: TestimonialCategories = {
  students: [
    {
      name: "佐藤 健太",
      title: "高校2年生・ディスレクシア",
      quote: "文字を読むのが苦手で教科書を読むだけで疲れていましたが、しゃべるノートを使い始めてから勉強が楽しくなりました。耳で聞くと理解できることが多く、初めて「自分は勉強ができるんだ」と自信がつきました。",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      usage: "使用期間: 8ヶ月",
      result: "成果: 成績が下位から中位に上昇"
    },
    {
      name: "山本 裕子",
      title: "大学生・学習障害",
      quote: "講義のノートが取れず、内容も頭に入らなくて悩んでいました。しゃべるノートで教科書やスライドを写真に撮って音声化することで、復習が格段にやりやすくなりました。自分のペースで何度も聞けるのが助かります。",
      avatar: "https://randomuser.me/api/portraits/women/22.jpg",
      usage: "使用期間: 1年2ヶ月",
      result: "成果: 単位取得率が100%に"
    }
  ],
  parents: [
    {
      name: "田中 美咲",
      title: "小学3年生の母親",
      quote: "息子はディスレクシアで学校の宿題に毎日苦労していました。しゃべるノートを導入してからは、問題文を音声で聞けるようになり、本来の能力を発揮できるようになりました。何より「勉強が嫌い」と言わなくなったことが一番の変化です。",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      usage: "使用期間: 6ヶ月",
      result: "成果: 宿題の時間が半分に短縮"
    },
    {
      name: "中村 拓也",
      title: "中学1年生の父親",
      quote: "娘は字を書くのが遅く、授業についていくのに苦労していました。このアプリのおかげで、板書を写真に撮って重要部分だけメモするという効率的な勉強法を身につけられました。自己肯定感も上がり、前向きに学習に取り組めるようになりました。",
      avatar: "https://randomuser.me/api/portraits/men/42.jpg",
      usage: "使用期間: 10ヶ月",
      result: "成果: テスト勉強の効率が大幅に向上"
    }
  ],
  educators: [
    {
      name: "鈴木 大輔",
      title: "特別支援教育コーディネーター",
      quote: "学習障害の生徒たちにしゃべるノートを紹介したところ、学習意欲が大きく向上しました。文字の壁に阻まれずに学べる環境を整えることで、本来の知的好奇心や能力を引き出せることを実感しています。",
      avatar: "https://randomuser.me/api/portraits/men/62.jpg",
      usage: "使用期間: 1年5ヶ月",
      result: "成果: 支援クラス全体の学習意欲が向上"
    },
    {
      name: "伊藤 さくら",
      title: "放課後等デイサービス指導員",
      quote: "ディスレクシアのお子さんたちの学習支援に活用しています。「読めない」「書けない」という壁を超えて、内容理解に集中できるようになったことで、学習が楽しいと感じる子どもたちが増えました。保護者からの評判も非常に良いです。",
      avatar: "https://randomuser.me/api/portraits/women/62.jpg",
      usage: "使用期間: 1年",
      result: "成果: 利用者の学習継続率が95%に向上"
    }
  ]
};

// 統計データ
export const testimonialStats = {
  users: "1,000+",
  schools: "80+",
  supportCenters: "50+",
  satisfaction: "97%"
};

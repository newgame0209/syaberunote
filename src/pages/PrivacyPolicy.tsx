
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = "プライバシーポリシー - しゃべるノート";
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-6 py-12 max-w-3xl">
        <Link to="/">
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="h-4 w-4 mr-2" />
            戻る
          </Button>
        </Link>
        
        <h1 className="text-3xl font-bold mb-8">プライバシーポリシー</h1>
        
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. 個人情報の収集について</h2>
            <p className="mb-4">当サービスは、サービスの提供にあたり、必要最小限の個人情報を収集する場合があります。収集する情報は以下の通りです：</p>
            <ul className="list-disc pl-6 mb-4">
              <li>メールアドレス</li>
              <li>ユーザー名</li>
              <li>学習データ</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. 個人情報の利用目的</h2>
            <p className="mb-4">収集した個人情報は、以下の目的で利用します：</p>
            <ul className="list-disc pl-6 mb-4">
              <li>サービスの提供・運営</li>
              <li>ユーザーサポート</li>
              <li>サービスの改善・新機能の開発</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. 個人情報の管理</h2>
            <p>当サービスは、収集した個人情報の漏洩、紛失、改ざんを防ぐため、適切なセキュリティ対策を実施します。</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;

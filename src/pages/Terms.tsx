
import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  useEffect(() => {
    document.title = "利用規約 - しゃべるノート";
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
        
        <h1 className="text-3xl font-bold mb-8">利用規約</h1>
        
        <div className="prose prose-slate max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. はじめに</h2>
            <p className="mb-4">本規約は、しゃべるノート（以下「当サービス」）の利用条件を定めるものです。</p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. サービスの利用</h2>
            <p className="mb-4">当サービスは、学習障害やディスレクシアのある方々の学習をサポートすることを目的としています。</p>
            <ul className="list-disc pl-6 mb-4">
              <li>ベータ版の利用は事前に承認された方のみに限定されます</li>
              <li>サービスの利用にあたっては、本規約に同意いただく必要があります</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. 禁止事項</h2>
            <ul className="list-disc pl-6 mb-4">
              <li>不正アクセスやシステムに負荷をかける行為</li>
              <li>他のユーザーへの迷惑行為</li>
              <li>当サービスの運営を妨げる行為</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Terms;

import React from 'react';
import { Pencil } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 md:gap-24">
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Pencil className="h-5 w-5 text-primary" />
              <span className="font-bold text-xl">しゃべるノート</span>
            </div>
            <p className="text-slate-600 mb-8">
              文字の壁を超えて、学ぶ喜びを。<br />
              学習障害・ディスレクシアの方に寄り添う音声ノートアプリ。
            </p>
          </div>
          
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-6">サービス</h4>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-slate-600 hover:text-primary transition-colors">
                  機能紹介
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-slate-600 hover:text-primary transition-colors">
                  導入メリット
                </a>
              </li>
              <li>
                <a href="#demo" className="text-slate-600 hover:text-primary transition-colors">
                  デモ動画
                </a>
              </li>
            </ul>
          </div>
            
          <div className="md:col-span-1">
            <h4 className="font-semibold text-lg mb-6">お問い合わせ</h4>
            <ul className="space-y-4">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  プライバシーポリシー
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-slate-600 hover:text-primary transition-colors"
                >
                  利用規約
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-200 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} しゃべるノート - 学習障害・ディスレクシアをサポートするAI音声ノートアプリ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

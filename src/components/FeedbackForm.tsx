import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiry_type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 必須フィールドの検証
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: '必須項目を入力してください'
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://talknote.site/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'お問い合わせを受け付けました。担当者からの返信をお待ちください。'
        });
        // フォームをリセット
        setFormData({
          name: '',
          email: '',
          organization: '',
          inquiry_type: '',
          message: ''
        });
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || 'エラーが発生しました。しばらく経ってからもう一度お試しください。'
        });
      }
    } catch (error) {
      console.error('送信エラー:', error);
      setSubmitStatus({
        success: false,
        message: '通信エラーが発生しました。インターネット接続を確認してください。'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="feedback" className="py-8 md:py-12 px-4 md:px-8 bg-slate-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-5 md:p-6 rounded-xl shadow-sm border border-slate-200"
        >
          <div className="text-center mb-4">
            <h2 className="text-xl md:text-2xl font-bold mb-1">資料請求・お問い合わせ</h2>
            <p className="text-xs md:text-sm text-slate-600">
              学習障害やディスレクシアでお悩みの方、教育機関や支援団体の皆様からのご相談を承っております。お気軽にお問い合わせください。
            </p>
          </div>
          
          {submitStatus.message && (
            <div className={`mb-4 p-3 rounded-md text-sm ${submitStatus.success ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
              {submitStatus.message}
            </div>
          )}
          
          <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label htmlFor="name" className="block text-xs font-medium text-slate-700 mb-1">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <Input
                  type="text"
                  id="name"
                  placeholder="山田 太郎"
                  className="h-9 text-sm"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-medium text-slate-700 mb-1">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <Input
                  type="email"
                  id="email"
                  placeholder="your@email.com"
                  className="h-9 text-sm"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="organization" className="block text-xs font-medium text-slate-700 mb-1">
                所属（任意）
              </label>
              <Input
                type="text"
                id="organization"
                placeholder="学校名・団体名・会社名など"
                className="h-9 text-sm"
                value={formData.organization}
                onChange={handleChange}
              />
            </div>
            
            <div>
              <label htmlFor="inquiry_type" className="block text-xs font-medium text-slate-700 mb-1">
                お問い合わせ内容
              </label>
              <select 
                id="inquiry_type" 
                className="w-full h-9 text-sm rounded-md border border-slate-300 px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                value={formData.inquiry_type}
                onChange={handleChange}
              >
                <option value="">お問い合わせ内容を選択してください</option>
                <option value="資料請求">資料請求</option>
                <option value="導入相談">導入相談</option>
                <option value="機能について">機能について</option>
                <option value="学習障害サポートについて">学習障害サポートについて</option>
                <option value="その他">その他</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-xs font-medium text-slate-700 mb-1">
                詳細内容 <span className="text-red-500">*</span>
              </label>
              <Textarea
                id="message"
                rows={4}
                placeholder="ご質問やご要望、お困りの状況などを詳しくお聞かせください。学習障害やディスレクシアに関するお悩みもお気軽にご相談いただけます。"
                className="resize-none text-sm"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="pt-1">
              <Button
                type="submit"
                className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white px-6 py-1.5 rounded-md transition-colors text-sm h-9"
                disabled={isSubmitting}
              >
                {isSubmitting ? '送信中...' : '送信する'}
              </Button>
              <p className="mt-1 text-xs text-slate-500 text-center md:text-left">
                ※いただいた情報は、お問い合わせへの回答及び資料送付の目的以外には使用いたしません
              </p>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default FeedbackForm;

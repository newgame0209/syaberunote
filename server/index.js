const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// ミドルウェアの設定
app.use(cors());
app.use(express.json());

// メール送信用のトランスポーター設定
const transporter = nodemailer.createTransport({
  host: 'mail1005.onamae.ne.jp', // お名前.comのSMTPサーバー
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: 'support@talknote.site', // メールアドレス
    pass: process.env.EMAIL_PASSWORD // パスワード（環境変数から取得）
  }
});

// お問い合わせフォーム用のエンドポイント
app.post('/api/contact', async (req, res) => {
  const { name, email, organization, inquiry_type, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: '必須項目が入力されていません' });
  }

  try {
    // メール本文の作成
    const mailOptions = {
      from: 'support@talknote.site',
      to: 'support@talknote.site',
      subject: `【お問い合わせ】${inquiry_type || '未選択'} - ${name}様より`,
      text: `
お名前: ${name}
メールアドレス: ${email}
所属: ${organization || '未入力'}
お問い合わせ内容: ${inquiry_type || '未選択'}

【詳細内容】
${message}
      `,
      replyTo: email
    };

    // メール送信
    await transporter.sendMail(mailOptions);
    
    res.status(200).json({ success: true, message: 'お問い合わせを受け付けました' });
  } catch (error) {
    console.error('メール送信エラー:', error);
    res.status(500).json({ success: false, message: 'メール送信に失敗しました' });
  }
});

// サーバー起動
app.listen(PORT, () => {
  console.log(`サーバーが起動しました: http://localhost:${PORT}`);
});

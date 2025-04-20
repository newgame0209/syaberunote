const nodemailer = require('nodemailer');

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

module.exports = async function(req, res) {
  // CORSヘッダーの設定
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // OPTIONSリクエスト（プリフライトリクエスト）への対応
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // POSTリクエスト以外は受け付けない
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

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
};

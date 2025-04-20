const nodemailer = require('nodemailer');

// サーバーレス関数のハンドラー
module.exports = async (req, res) => {
  // CORSヘッダー設定
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // プリフライトリクエストへの対応
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // POSTリクエスト以外は拒否
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    const { name, email, organization, inquiry_type, message } = req.body;
    
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: '必須項目が入力されていません' });
    }
    
    // Nodemailerのトランスポート設定
    const transporter = nodemailer.createTransport({
      host: 'mail1005.onamae.ne.jp',
      port: 465,
      secure: true,
      auth: {
        user: 'support@talknote.site',
        pass: process.env.EMAIL_PASSWORD
      }
    });

    // メール送信オプション
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

    // メール送信実行
    const info = await transporter.sendMail(mailOptions);
    console.log('メール送信成功:', info.messageId);
    
    return res.status(200).json({ 
      success: true, 
      message: 'お問い合わせを受け付けました',
      messageId: info.messageId
    });
  } catch (error) {
    console.error('メール送信エラー:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'メール送信に失敗しました', 
      error: error.message 
    });
  }
};

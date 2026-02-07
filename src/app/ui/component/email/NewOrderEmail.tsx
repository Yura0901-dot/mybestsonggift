import * as React from 'react';

interface AdminEmailProps {
  customerName: string;
  customerEmail: string;
  genre: string;
  occasion: string;
  recipient: string;
  story: string;
  orderId: string;
  referenceLink: string;
  amount: string;
  lang: string
}

export const AdminNewOrderEmail: React.FC<AdminEmailProps> = ({
  customerName,
  customerEmail,
  genre,
  occasion,
  recipient,
  story,
  orderId,
  amount,
  lang,
  referenceLink
}) => (
  <div style={{ fontFamily: 'Arial, sans-serif', color: '#333', maxWidth: '600px' }}>
    <h1 style={{ color: '#D4AF37' }}>🔥 New Order Received!</h1>
    <p><strong>Amount:</strong> {amount}</p>
    
    <div style={{ background: '#f9f9f9', padding: '20px', borderRadius: '10px', margin: '20px 0' }}>
      <h3 style={{ marginTop: 0 }}>Client Details</h3>
      <p><strong>Name:</strong> {customerName}</p>
      <p><strong>Email:</strong> <a href={`mailto:${customerEmail}`}>{customerEmail}</a></p>
      <p><strong>Order ID:</strong> {orderId}</p>
    </div>

    <div style={{ background: '#fff', border: '1px solid #ddd', padding: '20px', borderRadius: '10px' }}>
      <h3 style={{ marginTop: 0 }}>Song Requirements</h3>
      <ul style={{ paddingLeft: '20px' }}>
        <li><strong>Genre:</strong> {genre}</li>
        <li><strong>For:</strong> {recipient}</li>
        <li><strong>Occasion:</strong> {occasion}</li>
         <li><strong>Langueage:</strong> {lang}</li>
         <li><strong>Refernce:</strong> {referenceLink}</li>
      </ul>
      
      <h4 style={{ marginBottom: '5px' }}>The Story:</h4>
      <div style={{ background: '#eee', padding: '15px', borderRadius: '5px', fontStyle: 'italic' }}>
        "{story}"
      </div>
    </div>

    <div style={{ marginTop: '20px', fontSize: '12px', color: '#888' }}>
      Sent automatically from your Website Webhook.
    </div>
  </div>
);
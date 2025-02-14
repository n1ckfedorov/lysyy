import * as React from 'react';

type EmailTemplateProps = {
  name: string;
  email: string;
  message: string;
  productName?: string;
  type: 'order' | 'workshop' | 'contact';
};

const getTitle = (type: EmailTemplateProps['type'], productName?: string) => {
  switch (type) {
    case 'order':
      return `New order for ${productName}`;
    case 'workshop':
      return `New workshop order for ${productName}`;
    case 'contact':
      return 'New contact request';
  }
};

export const EmailTemplate = ({
  name,
  email,
  message,
  productName,
  type,
}: EmailTemplateProps) => (
  <div style={{
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  }}
  >
    <h1 style={{ color: '#333' }}>
      {getTitle(type, productName)}
    </h1>
    <div style={{ marginTop: '20px' }}>
      <p>
        <strong>From:</strong>
        {' '}
        {name}
      </p>
      <p>
        <strong>Email:</strong>
        {' '}
        {email}
      </p>
      <p><strong>Message:</strong></p>
      <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
    </div>
  </div>
);

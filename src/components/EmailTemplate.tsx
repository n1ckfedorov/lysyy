import * as React from 'react';

type EmailTemplateProps = {
  name: string;
  email: string;
  message: string;
  workName: string;
};

export const EmailTemplate = ({
  name,
  email,
  message,
  workName,
}: EmailTemplateProps) => (
  <div style={{
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  }}
  >
    <h1 style={{ color: '#333' }}>
      New Order:
      {workName}
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

'use client';

import NextError from 'next/error';

export default function GlobalError(props: { params: { locale: string } }) {
  return (
    <html lang={props.params.locale}>
      <body>
        <NextError statusCode={0} />
      </body>
    </html>
  );
}

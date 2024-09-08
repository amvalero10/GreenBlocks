import React from 'react';
import Link from 'next/link';

const NotAvailablePage = () => {
  return (
    <div>
      <h1>This endpoint is no longer available.</h1>
      <p>Please use the <code>/api-doc/{'{version}'}</code> endpoint instead.</p>
      <p>For example: <code><Link href="/api-doc/v4">/api-doc/v4</Link></code></p>
    </div>
  );
};

export default NotAvailablePage;
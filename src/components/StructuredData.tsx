import React from 'react';
import Head from '@docusaurus/Head';

interface StructuredDataProps {
  data: Record<string, any>;
}

/**
 * Component to add JSON-LD structured data for better SEO and AI indexing
 * Helps search engines and AI agents (ChatGPT, Claude, etc.) understand the content
 */
export default function StructuredData({ data }: StructuredDataProps): JSX.Element {
  return (
    <Head>
      <script type="application/ld+json">
        {JSON.stringify(data)}
      </script>
    </Head>
  );
}

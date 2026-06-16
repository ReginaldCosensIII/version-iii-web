import React from 'react';
import { Helmet } from 'react-helmet-async';

interface GoogleAnalyticsProps {
  measurementId?: string;
}

const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ 
  measurementId = 'G-XXXXXXXXXX'
}) => {
  if (!measurementId || measurementId === 'G-XXXXXXXXXX' || import.meta.env.DEV) {
    return null;
  }

  return (
    <Helmet>
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} />
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: true
          });
        `}
      </script>
    </Helmet>
  );
};

export default GoogleAnalytics;

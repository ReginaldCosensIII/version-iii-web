import React, { useEffect } from 'react';

interface PerformanceOptimizerProps {
  children: React.ReactNode;
}

const PerformanceOptimizer: React.FC<PerformanceOptimizerProps> = ({ children }) => {
  useEffect(() => {
    const deferredScripts = () => {
      console.log('Performance optimization loaded');
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(deferredScripts);
    } else {
      setTimeout(deferredScripts, 1);
    }

    const preloadCriticalResources = () => {
      const linkElements = [
        { href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap', as: 'style' },
      ];

      linkElements.forEach(({ href, as }) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = as;
        link.href = href;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      });
    };

    preloadCriticalResources();

    if ('performance' in window && 'PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        console.log('LCP:', lastEntry.startTime);
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.processingStart) {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        });
      });
      
      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        console.log('First Input Delay monitoring not supported');
      }

      const clsObserver = new PerformanceObserver((list) => {
        let clsValue = 0;
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (entry.hadRecentInput !== undefined && !entry.hadRecentInput && entry.value) {
            clsValue += entry.value;
          }
        });
        if (clsValue > 0) {
          console.log('CLS:', clsValue);
        }
      });
      
      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        console.log('Cumulative Layout Shift monitoring not supported');
      }
    }

    const addResourceHints = () => {
      const hints = [
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      ];

      hints.forEach(({ rel, href, crossOrigin }) => {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        if (crossOrigin) link.crossOrigin = crossOrigin;
        document.head.appendChild(link);
      });
    };

    addResourceHints();

    return () => {
      // Cleanup observers
    };
  }, []);

  return <>{children}</>;
};

export default PerformanceOptimizer;

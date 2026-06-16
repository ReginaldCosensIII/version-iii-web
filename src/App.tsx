import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Index from '@/pages/Index';
import Services from '@/pages/Services';
import Portfolio from '@/pages/Portfolio';
import Blog from '@/pages/Blog';
import BlogArticle from '@/pages/BlogArticle';
import Contact from '@/pages/Contact';
import ProjectBriefGenerator from '@/pages/ProjectBriefGenerator';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import TermsOfService from '@/pages/TermsOfService';
import NotFound from '@/pages/NotFound';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="flex min-h-screen flex-col bg-webdev-bg text-wdp-text">
          {/* Clean Header Navigation */}
          <Header />
          
          {/* Main Content Area */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogArticle />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/project-brief" element={<ProjectBriefGenerator />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          
          {/* Footer */}
          <Footer />
        </div>
      </BrowserRouter>
      <Toaster />
    </ThemeProvider>
  );
}

export default App;


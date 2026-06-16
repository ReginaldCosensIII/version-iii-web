import SEOHead from '../components/SEOHead';
import HeroSection from '../components/HeroSection';

const Index = () => {
  return (
    <>
      <SEOHead 
        title="Version III Web Services | Web Development & AI Solutions"
        description="Version III Web Services builds modern websites, custom web tools, and practical AI-powered solutions for small to mid-sized businesses ready to improve their digital presence."
        keywords="version iii web services, web development, custom websites, ai solutions, custom web tools, small business websites, modern website design, ai chatbot, knowledge base assistant, workflow automation"
        canonicalUrl="https://webdevpro.io/"
        ogImage="https://webdevpro.io/og-home.jpg"
        twitterImage="https://webdevpro.io/twitter-home.jpg"
        noIndex={true}
      />
      <HeroSection />
    </>
  );
};

export default Index;

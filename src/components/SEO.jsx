import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords }) => {
  const location = useLocation();

  useEffect(() => {
    const baseTitle = 'IHECF - Indian Higher Education & Career Fairs';
    document.title = title ? `${title} | ${baseTitle}` : baseTitle;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'Connecting 30,000+ students with top Indian universities worldwide through education fairs, school visits, and recruitment events.');
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || 'IHECF, Indian Higher Education, Career Fairs, Student Recruitment');
    }
    
    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://ihecf.info${location.pathname}`);

  }, [title, description, keywords, location]);

  return null;
};

export default SEO;

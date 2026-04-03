import { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';

export default function SEOHead({ title, description, path = '' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} - ${SITE_CONFIG.name}` : SITE_CONFIG.name;
    document.title = fullTitle;

    const setMeta = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    const descText = description || SITE_CONFIG.description;
    setMeta('og:title', fullTitle);
    setMeta('og:description', descText);
    setMeta('og:url', `${SITE_CONFIG.url}${path}`);
    setMeta('og:type', 'website');
    setMeta('og:image', `${SITE_CONFIG.url}/og/default.png`);
    setMeta('og:site_name', SITE_CONFIG.name);

    let descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', descText);
  }, [title, description, path]);

  return null;
}

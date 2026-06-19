import { useEffect } from "react";

interface SeoProps {
  title: string;
  description: string;
}

/**
 * Lightweight SEO helper: sets the document title and meta description
 * for each page without pulling in an extra dependency.
 */
const Seo = ({ title, description }: SeoProps) => {
  useEffect(() => {
    const fullTitle = `${title} | For The People`;
    document.title = fullTitle;

    const setMeta = (name: string, content: string, attr: "name" | "property" = "name") => {
      let tag = document.querySelector(`meta[${attr}="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    setMeta("description", description);
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
  }, [title, description]);

  return null;
};

export default Seo;
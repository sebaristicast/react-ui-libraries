import { useEffect } from "react";
import { useTranslation } from "react-i18next";

// se debe agregar una imagen og-image.png en la carpeta public

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
}

export const SEO = ({
  title,
  description,
  keywords = [],
  image = "/og-image.jpg",
  url = "https://react-ui-libraries.com",
}: SEOProps) => {
  const { t, i18n } = useTranslation();

  const defaultTitle = t("header.title");
  const defaultDescription = t("seo.description");
  const defaultKeywords = t("seo.keywords", {
    returnObjects: true,
  }) as string[];

  const finalTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalKeywords = [...defaultKeywords, ...keywords].join(", ");

  useEffect(() => {
    // Update basic meta tags
    document.title = finalTitle;
    document.documentElement.lang = i18n.language;

    // Update meta tags
    const metaTags = {
      description: finalDescription,
      keywords: finalKeywords,
      robots: "index, follow",
      language: i18n.language,
      "og:title": finalTitle,
      "og:description": finalDescription,
      "og:image": image,
      "og:url": url,
      "og:type": "website",
      "twitter:card": "summary_large_image",
      "twitter:title": finalTitle,
      "twitter:description": finalDescription,
      "twitter:image": image,
    };

    // Update or create meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      let meta =
        document.querySelector(`meta[name="${name}"]`) ||
        document.querySelector(`meta[property="${name}"]`);

      if (!meta) {
        meta = document.createElement("meta");
        if (name.startsWith("og:")) {
          meta.setAttribute("property", name);
        } else {
          meta.setAttribute("name", name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute("content", content);
    });

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // Update JSON-LD
    let script = document.querySelector('script[type="application/ld+json"]');
    if (!script) {
      script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: finalTitle,
      description: finalDescription,
      url: url,
      image: image,
    });

    // Cleanup function
    return () => {
      // Optional: remove meta tags on unmount if needed
    };
  }, [finalTitle, finalDescription, finalKeywords, image, url, i18n.language]);

  return null;
};

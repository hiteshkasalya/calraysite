import { useEffect } from "react";
import { faqItems, siteDescription, siteKeywords, siteTitle } from "../seo";

function upsertMeta(selector, attributes) {
  let element = document.querySelector(selector);

  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function upsertLink(selector, attributes) {
  let element = document.querySelector(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });
}

function getCurrentUrl() {
  if (typeof window === "undefined") {
    return "";
  }

  const url = new URL(window.location.href);
  url.hash = "";
  return url.toString();
}

export default function SeoHead() {
  const currentUrl = getCurrentUrl();

  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    document.title = siteTitle;

    upsertMeta('meta[name="description"]', {
      name: "description",
      content: siteDescription,
    });
    upsertMeta('meta[name="keywords"]', {
      name: "keywords",
      content: siteKeywords,
    });
    upsertMeta('meta[name="author"]', {
      name: "author",
      content: "Hitesh Kasalya",
    });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    });
    upsertMeta('meta[property="og:title"]', {
      property: "og:title",
      content: siteTitle,
    });
    upsertMeta('meta[property="og:description"]', {
      property: "og:description",
      content: siteDescription,
    });
    upsertMeta('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });
    upsertMeta('meta[property="og:site_name"]', {
      property: "og:site_name",
      content: "Calray AI",
    });
    upsertMeta('meta[property="og:url"]', {
      property: "og:url",
      content: currentUrl || "/",
    });
    upsertMeta('meta[property="og:image"]', {
      property: "og:image",
      content: "/og-image.svg",
    });
    upsertMeta('meta[property="og:image:width"]', {
      property: "og:image:width",
      content: "1200",
    });
    upsertMeta('meta[property="og:image:height"]', {
      property: "og:image:height",
      content: "630",
    });
    upsertMeta('meta[name="twitter:card"]', {
      name: "twitter:card",
      content: "summary_large_image",
    });
    upsertMeta('meta[name="twitter:title"]', {
      name: "twitter:title",
      content: siteTitle,
    });
    upsertMeta('meta[name="twitter:description"]', {
      name: "twitter:description",
      content: siteDescription,
    });
    upsertMeta('meta[name="twitter:image"]', {
      name: "twitter:image",
      content: "/og-image.svg",
    });
    upsertLink('link[rel="canonical"]', {
      rel: "canonical",
      href: currentUrl || "/",
    });
  }, [currentUrl]);

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Calray AI",
    alternateName: "Calray",
    url: currentUrl || "/",
    description: siteDescription,
    publisher: {
      "@type": "Organization",
      name: "Calray AI",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Calray AI",
    alternateName: "Calray",
    url: currentUrl || "/",
    description: siteDescription,
    founder: {
      "@type": "Person",
      name: "Hitesh Kasalya",
    },
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hitesh Kasalya",
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: "Calray AI",
    },
    url: currentUrl || "/",
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Calray AI",
    alternateName: "Calray",
    applicationCategory: "HealthApplication",
    operatingSystem: "Web",
    url: currentUrl || "/",
    description: siteDescription,
    creator: {
      "@type": "Person",
      name: "Hitesh Kasalya",
    },
    publisher: {
      "@type": "Organization",
      name: "Calray AI",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <>
      {[webSiteSchema, organizationSchema, personSchema, softwareApplicationSchema, faqSchema].map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}

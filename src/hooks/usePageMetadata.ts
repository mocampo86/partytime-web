import { useEffect } from 'react';

export type PageMetadata = {
  title: string;
  description: string;
  openGraphTitle?: string;
  openGraphDescription?: string;
  openGraphImage?: string;
};

function setMeta(
  attribute: 'name' | 'property',
  key: string,
  content: string,
) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.append(element);
  }

  element.setAttribute('content', content);
}

function removeMeta(attribute: 'name' | 'property', key: string) {
  document.head
    .querySelector(`meta[${attribute}="${key}"]`)
    ?.remove();
}

export function usePageMetadata({
  title,
  description,
  openGraphTitle,
  openGraphDescription,
  openGraphImage,
}: PageMetadata) {
  useEffect(() => {
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', openGraphTitle ?? title);
    setMeta('property', 'og:description', openGraphDescription ?? description);

    if (openGraphImage) {
      setMeta(
        'property',
        'og:image',
        new URL(openGraphImage, window.location.origin).href,
      );
    } else {
      removeMeta('property', 'og:image');
    }
  }, [
    title,
    description,
    openGraphTitle,
    openGraphDescription,
    openGraphImage,
  ]);
}

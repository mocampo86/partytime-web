import type { ServiceImage } from '../types/service';

type ResponsiveImageProps = {
  image: ServiceImage;
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
};

export function ResponsiveImage({
  image,
  className,
  loading = 'lazy',
  fetchPriority,
}: ResponsiveImageProps) {
  const imageElement = (
    <img
      className={className}
      src={image.src}
      srcSet={image.srcSet}
      sizes={image.sizes}
      alt={image.alt}
      style={{ objectPosition: image.objectPosition ?? 'center' }}
      width={image.width}
      height={image.height}
      loading={loading}
      decoding="async"
      fetchPriority={fetchPriority}
    />
  );

  if (!image.sources?.length) {
    return imageElement;
  }

  return (
    <picture>
      {image.sources.map((source) => (
        <source
          key={`${source.srcSet}-${source.media ?? 'default'}`}
          srcSet={source.srcSet}
          type={source.type}
          media={source.media}
          sizes={source.sizes}
        />
      ))}
      {imageElement}
    </picture>
  );
}

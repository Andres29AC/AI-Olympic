type ImageDisplayProps = {
  src: string;
  alt: string;
  width?: number;
};

export default function ImageDisplay({ src, alt, width = 300 }: ImageDisplayProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      className="my-2"
    />
  );
}

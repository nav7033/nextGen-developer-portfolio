import Image from "next/image";

interface SvgIconProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function SvgIcon({
  src,
  alt,
  width = 24,
  height = 24,
  className = "",
}: SvgIconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
import { PixelImage } from "../components/ui/pixel-image";

export function Gambar() {
  return (
    <PixelImage
      src="/2023(1).jpg"
      customGrid={{ rows: 4, cols: 6 }}
      grayscaleAnimation
    />
  );
}

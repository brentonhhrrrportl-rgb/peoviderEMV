/// <reference types="vite/client" />

declare module "qrcode" {
  const QRCode: {
    toDataURL(text: string, options?: Record<string, unknown>): Promise<string>;
  };
  export default QRCode;
}

declare module "piexifjs" {
  const piexif: any;
  export default piexif;
}

interface ImportMetaEnv {
  readonly VITE_APP_FIREBASE_API: string;
  readonly VITE_APP_FIREBASE_DOMAIN: string;
  readonly VITE_APP_FIREBASE_DB_URL: string;
  readonly VITE_APP_FIREBASE_PROJECT: string;
  readonly VITE_APP_FIREBASE_STORAGE_BUCKET: string;
  readonly VITE_APP_FIREBASE_MESSAGING: string;
  readonly VITE_APP_FIREBASE_APP_ID: string;
  readonly VITE_APP_FIREBASE_MEASUREMENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}
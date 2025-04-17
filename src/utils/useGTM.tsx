import { useEffect } from 'react';

interface DataLayerObject {
  event?: string;
  [key: string]: any;
}

declare global {
  interface Window {
    dataLayer: DataLayerObject[];
  }
}

export const useGTM = () => {
  const pushToDataLayer = (dataLayerObject: DataLayerObject) => {
    if (window.dataLayer) {
      window.dataLayer.push(dataLayerObject);
      console.log('Data pushed to GTM:', dataLayerObject);
    } else {
      console.warn('GTM Data Layer not found!');
    }
  };

  // 可以添加其他與 GTM 相關的輔助函數，例如初始化檢查等

  return { pushToDataLayer };
};

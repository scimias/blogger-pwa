import type { Config } from './types';

export default {
  version: '1.0',
  id: '/',
  name: 'AoiCyber',
  shortName: 'AoiCyber',
  description: 'AoiCyber.com adalah website teknologi berbahasa Indonesia yang menyajikan informasi gadget, game Android, iOS, film, teknologi.',
  direction: 'auto',
  language: 'en-US',
  backgroundColor: '#fff',
  themeColor: '#fff',
  display: 'standalone',
  orientation: 'any',
  scope: '/',
  startUrl: '/?utm_source=homescreen',
  appleStatusBarStyle: 'black-translucent',
  preferRelatedApplications: false,
  shortcuts: [
    {
      name: 'Blogger',
      shortName: 'Blogger',
      description: 'Shortcut 1 description goes here...',
      url: '/search/label/Blogger?utm_source=homescreen',
    },
    {
      name: 'Wordpress',
      shortName: 'Wordpress',
      description: 'Shortcut 2 description goes here...',
      url: '/search/label/Wordpress?utm_source=homescreen',
    },
  ],
  pwa: {
    logs: true,
    // OneSignal is not available if you are not using cloudflare workers
    oneSignalEnabled: false,
    oneSignalConfig: {
      appId: '********-****-****-****-************',
      allowLocalhostAsSecureOrigin: true,
    },
  },
  // Please replace with your blog url if you are using CDN (JsDelivr)
  origin: 'https://aokicyber.blogspot.com',
} satisfies Config;

import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.yaman.securitydemo',
  appName: 'Yaman Mobile Security',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;

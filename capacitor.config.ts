import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'de.mide.ionic.wuerfel',
  appName: 'WuerfelApp',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;

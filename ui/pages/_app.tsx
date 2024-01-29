// pages/_app.tsx
import { AppProps } from 'next/app';
import '../public/css/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

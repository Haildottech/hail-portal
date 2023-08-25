import MainLayout from '@/Components/Shared/MainLayout';
import Router, { useRouter } from 'next/router';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import "aos/dist/aos.css";
const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {

  const router = useRouter();

  return (
  <div className={`${inter.className}`}>
    {(router.pathname =='/login' || router.pathname =='/')?
      <Component {...pageProps} />:
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    }
  </div>
  )
}

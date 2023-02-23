import '@/styles/globals.css'
import {Provider} from 'react-redux';
import {store} from '@/store/store';
import Router, {useRouter} from "next/router";
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import {resetError, resetSuccess} from "@/store/slices/alertSlice";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  Router.events.on('routeChangeStart', () => {
      NProgress.start();
      store.dispatch(resetSuccess());
      store.dispatch(resetError());
  });
  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());

  return (
      <Provider store={store}>
          <Component {...pageProps} />
      </Provider>
  );
}

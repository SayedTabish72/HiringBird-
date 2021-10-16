import GlobalStyle from "../styles/globalStyles";
import { SessionProvider } from "next-auth/react";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <SessionProvider session={pageProps.session}>
        <GlobalStyle />
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;

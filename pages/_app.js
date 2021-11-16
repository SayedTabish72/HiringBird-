import GlobalStyle from "../styles/globalStyles";
import { SessionProvider } from "next-auth/react";
import { InternshipProvider } from "../context/internship.context";
import useAuth from "../hooks/useAuth";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <InternshipProvider>
        <SessionProvider session={pageProps.session}>
          <GlobalStyle />
          <Component {...pageProps} />
        </SessionProvider>
      </InternshipProvider>
    </>
  );
}

export default MyApp;

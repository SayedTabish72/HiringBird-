import GlobalStyle from "../styles/globalStyles";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "styled-components";

// redux
import { Provider } from "react-redux";
import { useStore } from "../redux/store";
import useAuth from "../hooks/useAuth";

// swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MyApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);

  useAuth(store.dispatch);

  const theme = {
    colors: {
      primary: {
        1: "#F26A7E",
        2: "#F8F8F8",
        3: "#FFFFF",
        4: "#E88D9A",
      },
      secondary: {
        1: "#69DE5D",
        2: "#FF5C5C",
        3: "#395185",
      },
    },
    fontSize: {
      h1: "42px",
      h2: "32px",
      h3: "28px",
      h4: "20px",
      h5: "18px",
      h6: "16px",
      h7: "14px",
      h8: "12px",
    },
  };

  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SessionProvider session={pageProps.session}>
            <GlobalStyle />
            <Component {...pageProps} />
          </SessionProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default MyApp;

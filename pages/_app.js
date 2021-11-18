import GlobalStyle from "../styles/globalStyles";
import { SessionProvider } from "next-auth/react";
import { InternshipProvider } from "../context/internship.context";
import { ThemeProvider } from "styled-components";

function MyApp({ Component, pageProps }) {
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
      <ThemeProvider theme={theme}>
        <InternshipProvider>
          <SessionProvider session={pageProps.session}>
            <GlobalStyle />
            <Component {...pageProps} />
          </SessionProvider>
        </InternshipProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

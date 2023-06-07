import theme from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
// import theme from

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} theme={theme} />
    </ChakraProvider>
  );
}

export default MyApp;
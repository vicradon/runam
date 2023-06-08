import theme from "@/styles/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  console.log(theme);
  return (
    <ChakraProvider>
      <Component {...pageProps} theme={theme} />
    </ChakraProvider>
  );
}

export default MyApp;

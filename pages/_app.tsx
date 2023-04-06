import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { ReactQueryDevtools } from "react-query/devtools";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import theme from "@/theme";
import { PageTitle } from "@/utils";
import { useState } from "react";
import { AppLayout } from "@/shared";
import "../public/fonts/style.css";

export default function App({ Component, pageProps }: AppProps) {
  const title = PageTitle(Component);
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ChakraProvider theme={theme}>
          <DefaultSeo title={`${title} | Mainstack®︁`} />
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} />
        <Toaster
          toastOptions={{
            position: "top-right",
            style: {
              fontSize: "16px",
            },

            success: {
              position: "top-center",
              duration: 10000,
              style: {
                padding: "10px 15px",
              },
            },
          }}
        />
      </Hydrate>
    </QueryClientProvider>
  );
}

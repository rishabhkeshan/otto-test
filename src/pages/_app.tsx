import "src/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ReactQueryProvider } from "src/providers/ReactQueryProvider";

const FuelsProvider = dynamic(
  () => import("src/providers/fuels-provider").then((mod) => mod.FuelsProvider),
  { ssr: false }
);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReactQueryProvider>
      <FuelsProvider>
        <section className="flex-1 space-y-4 p-4 lg:p-8 pt-6">
          <Component {...pageProps} />
        </section>
      </FuelsProvider>
    </ReactQueryProvider>
  );
}

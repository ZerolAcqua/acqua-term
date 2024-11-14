import React from "react";

import Head from "next/head";
import localFont from "next/font/local";
import "@/styles/global.css";

// Font files can be colocated inside of `pages`
const hack = localFont({
  src: "../assets/fonts/Hack-NF.ttf",
  fallback: ["monospace"],
});

import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const onClickAnywhere = () => {
    inputRef.current?.focus();
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="initial-scale=1.0, width=device-width"
          key="viewport"
          maximum-scale="1"
        />
        <link rel="icon" href={`${process.env.BASE_PATH || ""}/favicon.ico`} />
      </Head>

      <div
        className={`${hack.className} text-light-foreground dark:text-dark-foreground min-w-max text-xs md:min-w-full md:text-base`}
        onClick={onClickAnywhere}
      >
        <main className="bg-light-background dark:bg-dark-background w-full h-full p-2">
          <Component {...pageProps} inputRef={inputRef} />
        </main>
      </div>
    </>
  );
};

export default App;

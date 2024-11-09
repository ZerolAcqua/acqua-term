// app/page.tsx
"use client";

import React from "react";
import Head from "next/head";
import config from "root/config.json";
import { Input } from "@/components/input";
import { useHistory } from "@/components/history/hook";
import { History } from "@/components/history/History";
import { banner } from "@/utils/bin";

interface PageProps {
  inputRef?: React.MutableRefObject<HTMLInputElement>;
}

const Page: React.FC<PageProps> = ({ inputRef }) => {
  const containerRef = React.useRef(null);
  const internalInputRef = React.useRef<HTMLInputElement>(null);
  const {
    history,
    command,
    lastCommandIndex,
    setCommand,
    setHistory,
    clearHistory,
    setLastCommandIndex,
  } = useHistory([]);

  const init = React.useCallback(() => setHistory(banner()), []);

  React.useEffect(() => {
    init();
  }, [init]);

  React.useEffect(() => {
    const ref = inputRef || internalInputRef;
    if (ref.current) {
      ref.current.scrollIntoView();
      ref.current.focus({ preventScroll: true });
    }
  }, [history, inputRef]);

  return (
    <>
      <Head>
        <title>{config.title}</title>
      </Head>

      <div className="p-8 overflow-hidden h-full border-2 rounded border-light-yellow dark:border-dark-yellow">
        <div ref={containerRef} className="overflow-y-auto h-full">
          <History history={history} />

          <Input
            inputRef={inputRef || internalInputRef}
            containerRef={containerRef}
            command={command}
            history={history}
            lastCommandIndex={lastCommandIndex}
            setCommand={setCommand}
            setHistory={setHistory}
            setLastCommandIndex={setLastCommandIndex}
            clearHistory={clearHistory}
          />
        </div>
      </div>
    </>
  );
};

export default Page;

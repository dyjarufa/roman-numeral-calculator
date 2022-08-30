import { useEffect, useRef, useState } from "react";

import Head from "next/head";
import InputField from "src/components/InputField/InputField";

import styles from "./index.module.css";

import { convertToRoman } from "src/utils/romanNumberCalculator";

export default function Home() {
  const [romanNumber, setRomanNumber] = useState("");
  const inputFieldRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputFieldRef.current?.focus();
  });

  const handleConvertNumber = () => {
    let numberConverted = convertToRoman(Number(inputFieldRef.current?.value));
    if (numberConverted) return setRomanNumber(numberConverted);
    setRomanNumber("");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Roman Numeral Calculator</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>
        <InputField
          name="number"
          label="Type a number"
          ref={inputFieldRef}
          onChange={handleConvertNumber}
        />
        <p>{romanNumber}</p>
      </main>
    </div>
  );
}

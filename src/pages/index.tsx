import { useEffect, useRef } from "react";

import Head from "next/head";
import InputField from "src/components/InputField/InputField";

import styles from './index.module.css'
import { convertToRoman } from "src/utils/romanNumberCalculator";

export default function Home() {

  const inputFieldRef = useRef<HTMLInputElement>(null)

  
  useEffect(() => {
    inputFieldRef.current?.focus()
  },
  )

  const handleConvertNumber = () => {
    // console.log(inputFieldRef.current?.value)
    convertToRoman(inputFieldRef.current?.value)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Roman Numeral Calculator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.content}>
        <InputField 
          name="number" 
          label="Type a number"
          ref={inputFieldRef}
          onChange={handleConvertNumber}
          type="number"
        />
      </div>
      <p>
        
      </p>
    </div>
  );
}

"use client";

import { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/components/MousePointerIcon.module.scss";

export default function MousePointerIcon(): JSX.Element {
  const [showFocus, setShowFoucs] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowFoucs(true), console.log("after five seconds");
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [showFocus]);

  return (
    <>
      <div className={styles.pointer}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 24 24"
          stroke="#ffffff"
          fill="#000000"
          strokeWidth="1.3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4l7.07 17 2.51-7.39L21 11.07z" />
        </svg>
      </div>
      <div className={styles.pointer__circle}></div>
      <div className={styles.pointer__cursor}></div>
    </>
  );
}

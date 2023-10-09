"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../styles/components/CreateForm.module.scss";

export default function CreateForm(): JSX.Element {
  const router = useRouter();
  const [name, setName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [message, setMessage] = useState<String>("");
  const [company, setCompany] = useState<String>("");
  const [jobTitle, setJobTitle] = useState<String>("");
  const [phone, setPhone] = useState<String>("");
  const [region, setRegion] = useState<String>("Please select an option");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    //post request
    e.preventDefault();
    setIsLoading(true);

    const response = await fetch("http://localhost:4000/presentations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form__container}>
          <div className={styles.form__box}>
            <input
              placeholder="My name is"
              required
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.form__box}>
            <select
              placeholder="I am based in"
              onChange={(e) => setRegion(e.target.value)}
            >
              <option value="APAC">APAC</option>
              <option value="US">US</option>
              <option value="Europe">Europe</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>
        <div className={styles.form__container}>
          <div className={styles.form__box}>
            <input
              placeholder="I work at"
              required
              type="text"
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className={styles.form__box}>
            <input
              placeholder="Job title"
              required
              type="text"
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.form__container}>
          <div className={styles.form__box}>
            <input
              placeholder="Email"
              required
              type="text"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.form__box}>
            <input
              placeholder="Phone number"
              required
              type="text"
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.form__container}>
          <div className={styles.form__box}>
            <textarea
              placeholder="Message"
              required
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.form__container}>
          <button disabled={isLoading}>
            {isLoading && <span>Sending...</span>}
            {!isLoading && <span>Send Now &#8599;</span>}
          </button>
        </div>
      </form>
    </div>
  );
}

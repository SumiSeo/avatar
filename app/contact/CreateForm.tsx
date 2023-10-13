"use client";

import styles from "../styles/components/CreateForm.module.scss";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { INSERT_CONTACT_MESSAGE } from "../utilities/mutations/InsertContactMessage";
import { useMutation } from "@apollo/client";

export default function CreateForm(): JSX.Element {
  const [name, setName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [message, setMessage] = useState<String>("");
  const [company, setCompany] = useState<String>("");
  const [jobTitle, setJobTitle] = useState<String>("");
  const [phone, setPhone] = useState<String>("");
  const [region, setRegion] = useState<String>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();
  const userUuid = uuidv4();

  const [insertContactMessage, { data, loading, error }] = useMutation(
    INSERT_CONTACT_MESSAGE
  );

  const handleSubmit = (e: any) => {
    e.preventDefault();
    insertContactMessage({
      variables: {
        contact_name: name,
        contact_email: email,
        contact_message: message,
        contact_company: company,
        contact_jobTitle: jobTitle,
        contact_region: region,
        contact_phone: phone,
        id: userUuid,
      },
    });

    if (error === undefined) {
      setIsLoading(true);
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
              <option value="APAC">I am based in...</option>
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

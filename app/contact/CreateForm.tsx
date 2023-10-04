"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "../styles/components/CreateForm.module.scss";

export default function CreateForm(): JSX.Element {
  const router = useRouter();
  const [name, setName] = useState<String>("");
  const [email, setEmail] = useState<String>("");
  const [message, setMessage] = useState<String>("");
  const [region, setRegion] = useState<String>("Please select an option");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    //post request
    e.preventDefault();
    setIsLoading(true);
    const ticket = {
      title,
      body,
      priority,
      user_email: "mario@netnija.dev",
    };
    const response = await fetch("http://localhost:4000/presentations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ticket),
    });
    if (response.status === 201) {
      router.refresh();
      router.push("/");
    }
  };

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          <span>Name: </span>
          <input
            required
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          <span>Email: </span>
          <input
            required
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Body: </span>
          <textarea required onChange={(e) => setMessage(e.target.value)} />
        </label>
        <label>
          <span>Prioirty: </span>
          <select onChange={(e) => setRegion(e.target.value)}>
            <option value="APAC">APAC</option>
            <option value="US">US</option>
            <option value="Europe">Europe</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <button disabled={isLoading}>
          {isLoading && <span>Adding...</span>}
          {!isLoading && <span>Add Ticket</span>}
        </button>
      </form>
    </div>
  );
}

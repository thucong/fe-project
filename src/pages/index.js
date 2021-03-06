import Image from "next/image";
import styles from "../../styles/Home.module.css";
export default function Home() {
  async function onCallApi() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "devdeploytest6@gmail.com",
        password: "password123",
        name: "conganh",
        lastname: "tran",
      }),
    };
    await fetch(
      `${process.env.NEXT_PUBLIC_URL_API}/api/users/register`,
      requestOptions
    )
      .then((response) => console.log(response.json()))
      .catch((err) => {
        throw err;
      });
    console.log(process.env.NEXT_PUBLIC_URL_API);
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>React-project</h1>
        <button onClick={onCallApi}> Call api </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>NeuroLens – AI Cognitive Assistant</title>
        <meta name="description" content="Empowering neurodiverse individuals with personalized cognitive support." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to NeuroLens 👓</h1>

        <p className={styles.description}>
          An AI & AR-powered platform for cognitive assistance and focus support.
        </p>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h2>Start Support 🧠 →</h2>
            <p>Launch the assistant to get personalized guidance for daily tasks.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Smart Space Setup 🧭 →</h2>
            <p>Organize your digital environment to reduce distractions.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Learning Paths 📚 →</h2>
            <p>Explore interactive programs tailored to different cognitive styles.</p>
          </a>

          <a href="#" className={styles.card}>
            <h2>Give Feedback 🔄 →</h2>
            <p>Share your experience to help improve NeuroLens for everyone.</p>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;

import styles from '../styles/Home.module.scss'
import { NextSeo } from 'next-seo';

const seo = {
  "title": "Home Page",
  "description": "description of home page",
  "canonical": "https://www.example.com",
  "openGraph": {
    "url": "https://www.example.com",
    "title": "Home Page",
    "description": "description of home page",
    "site_name": "Page Name",
    "images": [
      {
        "url": "https://www.example.ie/og-image-01.jpg",
        "width": 800,
        "height": 600,
        "alt": "Og Image Alt"
      },
      {
        "url": "https://www.example.ie/og-image-02.jpg",
        "width": 900,
        "height": 800,
        "alt": "Og Image Alt Second"
      },
      { "url": "https://www.example.ie/og-image-03.jpg" },
      { "url": "https://www.example.ie/og-image-04.jpg" }
    ]
  }
};

const Home = () => {
  return (
    <div className={styles.container}>
      <NextSeo {...seo} />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}

export default Home

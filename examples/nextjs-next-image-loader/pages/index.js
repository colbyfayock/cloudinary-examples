import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import images from '../images.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js Image Component &amp; Cloudinary</title>
        <meta name="description" content="Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.container}>
          <h1 className={styles.title}>
            Next.js Image Component &amp; Cloudinary
          </h1>
          <h2 className={styles.subtitle}>
            Using the Cloudinary Loader
          </h2>
        </div>

        <div className={styles.container}>
          <h2>Quality: Auto</h2>
          <p>Automatically determine best quality. Default option.</p>
          <p><code>q_auto</code></p>
          <ul className={styles.images}>
            {images.slice(0,4).map(image => {
              return (
                <li key={image.id}>
                  <a href={image.link} rel="noreferrer">
                    <div className={styles.imageImage}>
                      <Image width={image.width} height={image.height} src={image.image} alt={image.title} />
                    </div>
                    <h3 className={styles.imageTitle}>
                      { image.title }
                    </h3>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className={styles.container}>
          <h2>Quality: Auto Best</h2>
          <p>Use auto with preferred setting.</p>
          <p><code>q_auto:best</code></p>
          <ul className={styles.images}>
            {images.slice(0,4).map(image => {
              return (
                <li key={image.id}>
                  <a href={image.link} rel="noreferrer">
                    <div className={styles.imageImage}>
                      <Image width={image.width} height={image.height} src={image.image} alt={image.title} quality="auto:best" />
                    </div>
                    <h3 className={styles.imageTitle}>
                      { image.title }
                    </h3>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className={styles.container}>
          <h2>Quality: 10</h2>
          <p>Specify your own quality level.</p>
          <p><code>q_10</code></p>
          <ul className={styles.images}>
            {images.slice(0,4).map(image => {
              return (
                <li key={image.id}>
                  <a href={image.link} rel="noreferrer">
                    <div className={styles.imageImage}>
                      <Image width={image.width} height={image.height} src={image.image} alt={image.title} quality="10" />
                    </div>
                    <h3 className={styles.imageTitle}>
                      { image.title }
                    </h3>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>

        <div className={styles.container}>
          <h2>Learn More</h2>
          <p>View the documention to find out what settings are available for the quality parameter and other URL transformations.</p>
          <p>
            <a href="https://cloudinary.com/documentation/transformation_reference#q_quality">
              https://cloudinary.com/documentation/transformation_reference#q_quality
            </a>
          </p>
        </div>

      </main>
    </>
  )
}

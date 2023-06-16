/* eslint-disable react/style-prop-object */
/* eslint-disable react/jsx-no-target-blank */
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.hero__left}>
          <h2 className={styles.hero__title}>Covid ID</h2>
          <h3 className={styles.hero__genre}>
            Monitoring Perkembangan Covid
          </h3>
          <p className={styles.hero__description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.
          </p>
          <a className={styles.hero__button} href="https://vaksinonline.com/" target="_blank"> Vaccine  </a>
        </div>
        <div className="hero__right">
          <img
            className={styles.hero__image}
            src={`${process.env.PUBLIC_URL}/img/undraw_medical_care_movn.png`}
            alt="placeholder"
          />
        </div>
      </section>
    </div>
  );
}

export default Hero;
import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div>
          <div style={{ fontSize: "50px", fontWeight: "900", width: "650px" }}>
            Simplifying API <span>Mocking</span> for Developers
          </div>
          <div className={styles["login-container"]}>
            <button>Login with Github</button>
            <button>Login with Google</button>
          </div>
        </div>
      </main>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles["demo-container"]}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </div>
      </div>
    </>
  );
}

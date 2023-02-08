import styles from "./page.module.css";
import NotionForm from "./Notion-Form";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <NotionForm />
      </div>
    </main>
  );
}

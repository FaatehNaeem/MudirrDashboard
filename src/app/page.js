import styles from "./page.module.css";
import Dashboard from "./components/dashboard";
import SidePanel from "./components/sidePanel";


export default function Home() {
  return (
    <div className={styles.page}>
      <SidePanel/>
      <Dashboard />
    </div>
  );
}

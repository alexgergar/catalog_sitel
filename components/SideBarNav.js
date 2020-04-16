import Link from "next/link";
import styles from "./SideBarNav.module.css";

// TODO change alexandra and instead dynamically load a name

const SideBarNav = () => (
  <nav className={styles.sidebarcontainer}>
    <img src="/medstar-health.png" className="img-fluid p-3" alt="Medstar Health logo" />
    <ul className="nav-links">
      <Link href="/">
        <a>Your Hosptial</a>
      </Link>
      <Link href="/">
        <a>Activity</a>
      </Link>
      <Link href="/">
        <a>Alexandra</a>
      </Link>
      <Link href="/search">
        <a>Search</a>
      </Link>
      <Link href="/">
        <a>Courses</a>
      </Link>
      <Link href="/">
        <a>Calander</a>
      </Link>
      <Link href="/">
        <a>Messages</a>
      </Link>
    </ul>
  </nav>
);

export default SideBarNav;


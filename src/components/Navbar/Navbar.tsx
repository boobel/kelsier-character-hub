import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";

const links = [
  { to: "/", label: "Sheet", end: true },
  { to: "/gear", label: "Gear" },
  { to: "/spells", label: "Spells" },
  { to: "/infusions", label: "Infusions" },
  { to: "/inventory", label: "Inventory" },
  { to: "/features", label: "Features" },
  { to: "/subclass", label: "Subclass" },
  { to: "/rp-guide", label: "RP Guide" },
  { to: "/looks", label: "Looks" },
];

const Navbar = () => {
  return (
    <nav className={styles.nav} aria-label="Character sections">
      {links.map(({ to, label, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            `${styles.navTab}${isActive ? ` ${styles.active}` : ""}`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  );
};

export { Navbar };

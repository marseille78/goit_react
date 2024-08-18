import { memo } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav>
    <NavLink to="/skip-first-render" className={styles.link}>
      Пропуск первого рендера
    </NavLink>

    <NavLink to="/pokemon" className={styles.link}>
      Покемоны с хуками
    </NavLink>

    <NavLink to="/counter" className={styles.link}>
      useReducer
    </NavLink>

    <NavLink to="/notes" className={styles.link}>
      useMemo
    </NavLink>
  </nav>
);

export default memo(Navigation);

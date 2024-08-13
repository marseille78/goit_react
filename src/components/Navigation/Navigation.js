import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav>
    <NavLink to="/signup" className={styles.link}>
      Форма
    </NavLink>

    <NavLink to="/colorpicker" className={styles.link}>
      Колорпикер
    </NavLink>

    <NavLink to="/counter" className={styles.link}>
      Счётчик
    </NavLink>

    <NavLink to="/clock" className={styles.link}>
      Часы
    </NavLink>

    <NavLink to="/pokemon" className={styles.link}>
      Покемоны
    </NavLink>
  </nav>
);

export default Navigation;

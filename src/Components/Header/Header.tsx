"use client";

import Logo from "../../../public/icons/logo.svg";
import style from "./Header.module.css";
import Container from "../Container/Container";
import CheckBox from "../CheckBox/CheckBox";
import GlobalSearch from "../GlobalSearch/GlobalSearch";
import Button from "../Button/Button";
import { useStore } from "zustand";
import RequestStore from "@/Store/requestStore";
import { useEffect, useState } from "react";
import LogIn from "../LogIn/LogIn";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = () => {
  const [user, setUser] = useState(false);
  const [isLogInActive, setIsLogInActive] = useState(false);
  const { isActive, setIsActive, isPromo, setIsPromo } = useStore(RequestStore);

  return (
    <>
      {isLogInActive && (
        <LogIn
          setIsActive={() => {
            setIsLogInActive(false);
            setUser(true);
          }}
        />
      )}
      <Container className={style.header}>
        <Logo />
        <div className={style.menu}>
          <CheckBox
            checked={isActive}
            label="Active"
            onChange={() => setIsActive(!isActive)}
          />
          <CheckBox
            checked={isPromo}
            label="Promo"
            onChange={() => setIsPromo(!isPromo)}
          />
          <GlobalSearch />
        </div>
        {user ? (
          <Button
            view="primary"
            title="Log Out"
            size="normal"
            disabled={false}
            onClick={() => setUser(false)}
          />
        ) : (
          <Button
            view="primary"
            title="Log In"
            size="normal"
            disabled={false}
            onClick={() => setIsLogInActive(true)}
          />
        )}
      </Container>
    </>
  );
};

export default Header;

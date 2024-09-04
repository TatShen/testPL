"use client";

import Logo from "../../../public/icons/logo.svg";
import style from "./Header.module.css";
import Container from "../Container/Container";
import CheckBox from "../CheckBox/CheckBox";
import GlobalSearch from "../GlobalSearch/GlobalSearch";
import Button from "../Button/Button";
import { useStore } from "zustand";
import RequestStore from "@/Store/requestStore";

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = () => {
  const { isActive, setIsActive, isPromo, setIsPromo } = useStore(RequestStore);
  return (
    <>
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
        <Button view="primary" title="Log In" size="normal" disabled={false} />
      </Container>
    </>
  );
};

export default Header;

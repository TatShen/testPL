"use client"

import Logo from '../../../public/icons/logo.svg';
import style from "./Header.module.css"
import Container from "../Container/Container"
import CheckBox from '../CheckBox/CheckBox';
import GlobalSearch from '../GlobalSearch/GlobalSearch';
import Button from '../Button/Button';

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <Container className={style.header}>
      <Logo/>
      <div className={style.menu}>
        <CheckBox checked={false} label='Active' onChange={() => console.log("active")}/>
        <CheckBox checked={false} label='Promo' onChange={() => console.log("promo")}/>
        <GlobalSearch/>
      </div>
      <Button view='primary' title='Log In' size='normal' disabled={false}/>
      
      </Container>

    </>
  )
}

export default Header

"use client"

import React, { useEffect, useState } from "react";
import style from "./LogIn.module.css";
import Button from "../Button/Button";
import Input from "../Input/Input";

type LogInProps = {
    setIsActive: () => void
}

const LogIn: React.FC<LogInProps> = ({setIsActive}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisable, setIsDisable] = useState(true)

  useEffect(() => {
    if(email && password){
      setIsDisable(false)
    }
  }, [email, password])
  
  const onFormSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsActive()
  }

  return (
    <div className={style.mask}>
      <div className={style.modal}>
        <form className={style.form} onSubmit={onFormSubmitHandler}>
          <p className={style.title}>Log In</p>
          <Input
            type="text"
            className={style.input}
            placeholder="E-mail"
            name={"E-mail"}
            width="100%"
            updateState={setEmail}
          />
          <Input
            type="password"
            className={style.input}
            placeholder="Password"
            name={"Password"}
            width="100%"
            updateState={setPassword}
          />
          <Button
            type="submit"
            title="Log In"
            className={style.button}
            disabled={isDisable}
          />
        </form>
      </div>
    </div>
  );
};

export default LogIn;

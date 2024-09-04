"use client";

import style from "./GlobalSearch.module.css";
import Input from "../Input/Input";
import Search from "../../../public/icons/search.svg";
import { useStore } from "zustand";
import RequestStore from "@/Store/requestStore";

const GlobalSearch: React.FC = () => {
  const { setValue } = useStore(RequestStore);

  return (
    <>
      <div className={style.searchInputContainer}>
        <Input
          type="text"
          className={style.inputStyle}
          placeholder="Search"
          name={"search"}
          width="100%"
          icon={<Search />}
          iconPosition={"right"}
          updateState={setValue}
        />
      </div>
    </>
  );
};

export default GlobalSearch;

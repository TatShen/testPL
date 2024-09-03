import type { SetStateAction } from "react"
import { useState } from "react"

import style from "./GlobalSearch.module.css"
import Input from "../Input/Input"
import Search from "../../../public/icons/search.svg"
import debounce from "@/Utils/debounce"



const GlobalSearch: React.FC = () => {
 
  const [value, setValue] = useState("")
  const [autoCompleteSet, setAutoCompleteSet] = useState(false)
  const debounceUpdate = debounce((value: SetStateAction<string>) => {
    setValue(value)
  }, 1000)

  const handlerCloseSearchInput = () => {
    setValue("")
    setAutoCompleteSet(false)
  }

  return (
    <>
        <div className={style.searchInputContainer}>
          <Input
            type="text"
            className={style.inputStyle}
            placeholder="Search"
            name={"search"}
            width="100%"
            icon={
              <Search/>
            }
            iconPosition={"right"}
            updateState={debounceUpdate}
          />
          </div>
    </>
  )
}

export default GlobalSearch

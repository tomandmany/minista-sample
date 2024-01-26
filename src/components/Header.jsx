import React from "react"
import { css } from "../../styled-system/css"

const Header = () => {
  console.log("a")

  return (
    <header
      className={css({
        color: "red",
      })}
    >
      Header
    </header>
  )
}

export default Header

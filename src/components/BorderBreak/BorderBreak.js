import * as React from "react"
import "./BorderBreak.scss"

const BorderBreak = ({height = "10px", backgroundColor = "info"}) => {
  return (
    <div className={`break-border ${backgroundColor}`} style={{ height }}></div>
  )
}

export default BorderBreak

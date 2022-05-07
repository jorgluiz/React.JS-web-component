import React from "react"

import "./Content.css"

const Content = ({ children }) => {
  return (
    <main className="mainContent">
      {children}
    </main>
  )
}
export default Content
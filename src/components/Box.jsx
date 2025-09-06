import React, { createElement } from 'react'

const BoxElements = {
    div: "div",
    main: "main",
    aside: "aside",
    footer: "footer",
    nav: "nav",
}

function Box({ as = 'div', ...props}) {
  return (
    createElement (BoxElements[as] || "div", props)
  )
}

export default Box
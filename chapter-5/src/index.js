import React from 'react'
import { render } from 'react-dom'
// import Menu from "./components/Menu"
import Menu from "./components/Summary"
import data from '../data/recipes'

window.React = React
// render(
//    <Menu recipes={data} />,
//    document.getElementById("react-container")
// )
render(
  <Summary title="Peanut Butter and Jelly"
           ingredients="peanut butter, jelly, bread"
           steps="spread peanut butter and jelly between bread" />,
   document.getElementById("react-container")
)

import React from 'react'
import './SideDrawer.css'

const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open'
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Загальне навантаження</a>
        </li>
        <li>
          <a href="/">Зведене навантаження</a>
        </li>
        <li>
          <a href="/">Викладачі</a>
        </li>
        <li>
          <a href="/">Вийти</a>
        </li>
      </ul>
    </nav>
  )
}


export default SideDrawer

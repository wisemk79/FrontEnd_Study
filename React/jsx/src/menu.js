import React from 'react'
import './menu.css'

export default function menu() {
  return (
    <div>
      <nav>
  <a href="#">Primary</a>
  <a href="#">Secondary</a>
  <a href="#" class="is-current">Tertiary</a>
  <a href="#">Quaternary</a>
  <a href="#">Quinary</a>
  <div class="nav-underline"></div>
</nav>
    </div>
  )
}

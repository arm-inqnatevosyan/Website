import React from 'react'
import { useCallback } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const Navbar = () => {

  const [pc,setPc] = useState(false)

  const p = useCallback(() => {
    setPc(true)
  },[])

  let body = document.querySelector(".body")
  return (
    <nav>
        <ul>
            <li><a href='#' value={pc} onClick={(e) => {
              body.classList.add("body")
              body.classList.remove('laptop')
              body.classList.remove('phone')
            }}><i class="fa-solid fa-desktop"></i></a></li>
            <li><a href='#' value={pc} onClick={(e) => {
              p()
              e.preventDefault()
              body.classList.remove("body")
              body.classList.remove('phone')
              body.classList.add('laptop')
            }}><i class="fa-solid fa-laptop"></i></a></li>
            <li><a href='#' value={pc} onClick={(e) => {
              p()
              e.preventDefault()
              body.classList.remove('body')
              body.classList.remove('laptop')
              body.classList.add("phone")
            }}><i class="fa-solid fa-mobile-screen-button"></i></a></li>
        </ul>
    </nav>
  )
}

export default Navbar

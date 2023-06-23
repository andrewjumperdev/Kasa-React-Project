import React from 'react'
import './styles.scss'

const logo = '/logo-white.png'

const Footer = () => {
  return (
    <footer className='footer-container'>
        <img src={logo} alt="logo" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
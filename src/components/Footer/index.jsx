import React from 'react'
import './FooterStyles.scss'

const logo = '/logo-white.png'

const Footer = () => {
  return (
    <div className='footer-container'>
        <img src={logo} alt="logo" />
        <p>© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
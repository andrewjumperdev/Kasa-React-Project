import React from 'react'
import '../Home/styles.scss'
import Card from '../../components/Card'

function Home() {
  return (
    <div className="container">
      <div class="hero-image">
        <div class="hero-text">
          <h1>Chez vous,partout et ailleurs</h1>
        </div>
      </div>
      <Card />
    </div>
  )
}

export default Home
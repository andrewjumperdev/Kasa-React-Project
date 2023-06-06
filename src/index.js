import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import'./Styles/main.scss'
import Home from './pages/Home/index'
import Header from './components/Header'
import CardDetail from './components/CardDetail'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/logement/:id" element={<CardDetail />} />
            </Routes>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)
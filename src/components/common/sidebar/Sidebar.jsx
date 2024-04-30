import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'


const Sidebar = () => {
  return (
    <header className='head-side'>
        <div className="logo">LOGO</div>
        <div className="views">
            <nav>
                <ul>
                    <li><Link to="/"><p className='name-side'>Home</p></Link></li>
                    <li><Link to="/view1"><p className='name-side'>Vista 1</p></Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Sidebar
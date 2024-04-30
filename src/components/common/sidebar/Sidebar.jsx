import React from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'


const Sidebar = () => {
  return (
    <header className='head-side'>
        <div className="logo"><img className='logo1' src="./logo.png"/><img className='logo2' src="./logoicon.png"/></div>
        <div className="views">
            <nav>
                <ul>
                    <Link to="/"><li><img src="./home.png" alt="" /><p className='name-side'>Home</p></li></Link>
                    <Link to="/view1"><li><img src="./view.png" alt="" /><p className='name-side'>Vista 1</p></li></Link>
                    <Link to="/view2"><li><img src="./view.png" alt="" /><p className='name-side'>Vista 2</p></li></Link>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Sidebar
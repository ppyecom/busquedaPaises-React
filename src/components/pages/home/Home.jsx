import React, { useEffect, useState } from 'react'
import "./home.css"
import DisplayCountries from '../../countries/DisplayCountries'
import FilterContienetPopUp from '../../popup/filterContinent/FilterContienetPopUp'

const Home = () => {

  const [inputt, setinput] = useState('')
  const [popup, setpopUp] = useState(false)
  const [continentSelect, setcontinentSelect] = useState([])

  const changeInput = ({target}) => {
    setinput(target.value)
  }

  const handlePopUp = (e) =>{
    e.preventDefault()
    setpopUp(!popup)
  }

  return (
    <div className='container-home'>
        <div className="box-complete">
                <div className="pais">
                    <label>País</label>
                    <input type="text" placeholder='Escribe el pais que deseas ver' onChange={changeInput} onClick={handlePopUp} value={inputt}/>
                    {popup && (
                      <FilterContienetPopUp trigger={popup} setTrigger={setpopUp} nombreContinent={setcontinentSelect}/>
                    )}
                </div>
                <button className='search-button'><img src="./lupa.png" className='lupa' /><p className='buscar'>Buscar</p></button>
        </div>

        <div className="countries-search">
          <DisplayCountries search={inputt} continentSelect={continentSelect}/>
        </div>
    </div>
  )
}

export default Home
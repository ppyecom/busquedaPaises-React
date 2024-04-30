import React, { useState } from 'react'

const CardContinent = ({nombre, imag, onClick}) => {

    const [clickContinent, setclickContinent] = useState(false)

    const clicked = () => {
        setclickContinent(true)
        onClick()
    }

  return (
    <div className={`continent ${clickContinent ? 'click' : ''}`} onClick={clicked} >
        <img src={imag} />
        <label>{nombre}</label>
    </div>
  )
}

export default CardContinent
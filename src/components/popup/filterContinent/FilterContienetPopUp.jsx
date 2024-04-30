import React, { useState } from 'react'
import './filterContinentPop.css'
import CardContinent from './cardsContinent/CardContinent'

const FilterContienetPopUp = ({trigger,setTrigger, nombreContinent}) => {

    const continents = [
        {
            "id": "1",
            "nombre": "europe",
            "imagen" : "./europa.jpg"
        },
        {
            "id": "2",
            "nombre": "america",
            "imagen" : "./america.svg"
        },
        {
            "id": "3",
            "nombre": "asia",
            "imagen" : "./asia.jpg"
        },
        {
            "id": "4",
            "nombre": "oceania",
            "imagen" : "./oceania.jpg"
        },
        {
            "id": "5",
            "nombre": "africa",
            "imagen" : "./africa.jpg"
        },
    ]

    const handleContinent = (names) => {
        if(names === 'america'){
            nombreContinent((continentList) => ['south america','north america', ...continentList])
        }else{
            nombreContinent((continentList) => [names, ...continentList])
        }
    }

    const cleanListContinent = () => {
        nombreContinent([])
    }


  return (trigger) ? (
    <>
        <div className="popup-filter">
            <div className="popup-head">
                <span className='pop-filtro-text'>Filtrar por Continentes</span>
                <span className='pop-filtro-limpiar' onClick={() => cleanListContinent()}>Limpiar</span>
            </div>
            <div className="continents">

                {/*
                <div className={`continent ${clickContinent ? 'click' : ''}`} onClick={() => handleContinent('europe')}>
                    <img src="./europa.jpg" />
                    <label>Europa</label>
                </div>
                */}

                {continents.map((cont,index) => {
                    return (
                        <CardContinent key={index} nombre={cont.nombre} imag={cont.imagen} onClick={() => handleContinent(cont.nombre)}/>
                    )
                })}
            </div>
        </div>
    </>
  ):""
}

export default FilterContienetPopUp
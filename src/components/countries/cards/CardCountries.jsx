import React, { useEffect, useState } from 'react'
import "./cardCountries.css"
import FetchPhoto from '../../hooks/FetchPhoto'
import CountriePopUp from '../../popup/countrie/CountriePopUp'
import FetchCountrieRest from '../../hooks/FetchCountrieRest'

const CardCountries = ({name,capital,languages,currency,continent}) => {

    const replacePlusName = name ? name.replace(/ /g, "+") : name
    const replacePlusNameCountries = name ? name.replace(/ /g, "%20") : name

    const {datos: datos1, isLoading: isLoading1} = FetchPhoto(replacePlusName)
    const {datos: datos2, isLoading: isLoading2} = FetchCountrieRest(replacePlusNameCountries)

    const [foto1, setfoto1] = useState('')
    const [foto2, setfoto2] = useState('')
    const [population, setPopulation] = useState('')
    const [sregion, setsregion] = useState('')

    const [popUp, setpopUp] = useState(false)
    const handlePopUp = (e) =>{
        e.preventDefault
        setpopUp(!popUp)
      }

      useEffect(() => {
        if(datos1.hits && datos1.hits.length > 0){
            setfoto1(datos1.hits[0].webformatURL)
        }else{
            setfoto1('./paisaje.jpg')
        }

        if(datos2 && datos2.length > 0){
            if(datos2[0].flags && datos2[0].flags.png){
                setfoto2(datos2[0].flags.png)
                setPopulation(datos2[0].population)
                setsregion(datos2[0].subregion)
            }else{
                setfoto2('./eeuu.png')
                setPopulation('unknow')
                setsregion('unknow')
            }
        }else{
            setfoto2('./eeuu.png')
            setPopulation('unknow')
            setsregion('unknow')
        }

      }, [datos1,datos2])
      

    if(isLoading1) return <>Cargando..</>
    if(isLoading2) return <>Cargando..</>

  return (
    <div className='card-countrie' onClick={handlePopUp}>
        <div className="imagen-countrie">
            {
                datos1.hits && datos1.hits.length > 0 ? (
                    <img src={foto1} alt={capital} />
                ):(<img src={foto1}/>)
            }
        </div>
        <div className="sub">
            <div className="icon">
            {
                datos2.hits && datos2.hits.length > 0 ? (
                    <img src={foto2} alt={name} />
                ):(<img src={foto2}/>)
            }
            </div>
            <div className="titles">
                <p className='names'>{name}</p>
                <p className='capitals'>{continent.name}</p>
            </div>
        </div>

        {popUp && (
          <CountriePopUp trigger={popUp} setTrigger={setpopUp} capitalc={capital} population={population} sregion={sregion} namec={name} priphoto={foto1} icon={foto2} languages={languages} currency={currency} continent={continent}/>
        )}
    </div>
  )
}

export default CardCountries
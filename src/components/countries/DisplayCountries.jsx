import React, { useEffect, useState } from 'react'

import { useQuery, gql } from '@apollo/client';
import CardCountries from './cards/CardCountries';

const LIST_COUNTRIES = gql`
  query{
    countries {
      name
      native
      capital
      emoji
      code
      languages{
        name
      }
      currency
      continent{
        name
      }
    }
  }`

const DisplayCountries = ({search, continentSelect}) => {
  
  const {data, loading, error} = useQuery(LIST_COUNTRIES)
  const [filtroData, setfiltroData] = useState([])
    
  
  useEffect(() => {
    if(data && data.countries){

      let filtroGen = data.countries

      if(search){
        filtroGen = filtroGen.filter((datos) => (datos.name).toLowerCase().includes(search.toLowerCase()))
      }

      if(continentSelect && continentSelect.length > 0){
        filtroGen = filtroGen.filter((datos) => continentSelect.includes(datos.continent && datos.continent.name.toLowerCase()))
      }

      setfiltroData(filtroGen)

    }
  }, [data,search,continentSelect])
  

  if(loading) return <>Cargando...</>
  if(error) return <p>Error: {error.message}</p>

  return(
      <>
       {filtroData.map(({name,languages,currency,capital,emoji,continent})=> (
            
            <CardCountries key={name} name={name} capital={capital} continent={continent} languages={languages} currency={currency}/>
        )
    )}
      </>
    )
  
}

export default DisplayCountries
import React, { useEffect, useState } from 'react'
import getCountrieExternApi from '../helper/getCountrieExternApi'

const FetchCountrieRest = (countrie) => {
    const [datos, setdata] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getApi = async() => {
        const newPhoto = await getCountrieExternApi(countrie)
        setdata(newPhoto)
        setisLoading(false)
    }

    useEffect(() => {
      getApi()
    }, [])
    

  return {
    datos,
    isLoading
  }
}

export default FetchCountrieRest
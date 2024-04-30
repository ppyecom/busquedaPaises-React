import React, { useEffect, useState } from 'react'
import getPhoto from '../helper/getPhoto'

const FetchPhoto = (object) => {

    const [datos, setdata] = useState([])
    const [isLoading, setisLoading] = useState(true)

    const getApi = async() => {
        const newPhoto = await getPhoto(object)
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

export default FetchPhoto
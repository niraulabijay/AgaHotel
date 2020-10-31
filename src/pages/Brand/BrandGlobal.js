import React, {useState, useEffect} from 'react'
import axiosInstance from '../../helpers/axios'
import {useParams, useRouteMatch} from 'react-router-dom'
import Axios from 'axios'
import AgaBrand from '../AgaHotel/AgaBrand'
import LyfeBrand from '../LyfeInn/LyfeBrand'
import HotelBluBrand from '../HotelBlu/HotelBluBrand'

function BrandGlobal() {
let {slug} = useParams()
  const[brandName, setBrandName] = useState(slug)
  const [logo, setLogo] = useState()
  const [brand, setBrand] = useState()

  console.log(slug)

    useEffect(() => {
        let source = Axios.CancelToken.source();
        const loadData = async()=>{
        try{
            const response =  axiosInstance.get(`/brand/front/${slug}`,{
                cancelToken: source.token
            });
        console.log((await response).data)
        // setLogo((await response).data.brand.logo)
        setBrand((await response).data)
        }catch(error){
            if(!Axios.isCancel(error)){
                throw error
            }
        }return () => {
          source.cancel();
        }
      }
      loadData();
      }, [brandName])
    
    return (
        <div>
            { brand && brand.brand.slug == "lifeinn" ?
                <LyfeBrand data={brand} /> :
                brand && brand.brand.slug === "hotel-blu" ?
                <HotelBluBrand data={brand} /> :
                null
        }   
        </div>
    )
}

export default BrandGlobal

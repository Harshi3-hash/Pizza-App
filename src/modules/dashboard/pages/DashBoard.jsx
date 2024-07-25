import React, { useEffect } from 'react'
import Products from '../components/Products'
import Header from '../../../shared/components/header'
import { getApi } from '../../../shared/services/api-client';

const DashBoard = () => {
    useEffect(()=>{
        getProducts();

    },[]);//Mounting
    const getProuducts=async ()=>{
        const data=await getApi();
    }
  return (
    <div>
      <Header/>
      {Loading?<p>Loading...</p>:<Products/>}
    </div>
  )
}

export default DashBoard

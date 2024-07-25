import React, { useEffect, useState } from 'react'
import { Header } from '../../../shared/components/Header'
import Product from './Product'
import { Products } from './Products';
import { getApiCall } from '../../../shared/services/api-client';

const DashBoard = () => {
    const [loading,setLoading]=useState(true);
    const[pizzas, setPizzas]=useState([]);
    const[errors,setErrors]=useState(null);
    useEffect(()=>{
        getPizzas();


    },[])
    const getPizzas= async ()=>{
        try{
            const PRODUCT_ENDPOINT=import.meta.env.VITE_PRODUCT_URL;
            const pizzas=await getApiCall(PRODUCT_ENDPOINT);
            console.log('Pizzas are',pizzas);
            setPizzas(pizzas["Vegeterian"]);
            setLoading(false);
        }
        catch(err){
            setErrors(err);

        }
        

    }
  return (
    <div>
      <Header/>
      <div className='row'>
        <div className='col-8'>
            <div className='row'>
                {loading?<p>loading.... </p>:<Products pizzas={pizzas}/>}
                {/* <Product/>
                <Product/>
                <Product/> */}

            </div>

        </div>
        <div className='col-4'>

        </div>

      </div>
    </div>
  )
}

export default DashBoard

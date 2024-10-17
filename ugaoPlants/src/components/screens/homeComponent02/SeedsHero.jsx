import React, { useEffect, useState } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import seedsHero from '../../../assets/summersaleSeeds.webp'
import { Link, useParams } from 'react-router-dom';
// import SummaryApi from '../../../common/Index';
import ProductCategory from '../../../helper/ProductCategory';
const SeedsHero = ()=>  {







  return (
    <>
    <div className="  mt-5">
        
       <Breadcrumb className='pt-5'>
      <Breadcrumb.Item><Link to="/" className="text-dark ">Home</Link></Breadcrumb.Item>
      <Breadcrumb.Item active className='text-success'>{product?.category}</Breadcrumb.Item>
    </Breadcrumb>
      
    </div>
    <img src={seedsHero} alt="" className='img-fluid w-100'/>
    <div className="container my-3">
        <h2>{product?.category}</h2>
       
    </div>
    </>
  )
}

export default SeedsHero

import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, Link } from 'react-router-dom'
import productCategory from '../../../helper/ProductCategory'
import VerticalCard from '../homeComponent02/VerticalCard'
import SummaryApi from "../../../common/Index";
import seedsHero from '../../../assets/summersaleSeeds.webp'
import Breadcrumb from 'react-bootstrap/Breadcrumb';


import SeedsHero from './SeedsHero';
// import HorizontalCardProduct from './HorizontalCardProduct';
// import SeedsHero from "./SeedsHero"


const CategoryProduct = () => {
    const [data,setData] = useState([])
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const location = useLocation()
    const urlSearch = new URLSearchParams(location.search)
    const urlCategoryListinArray = urlSearch.getAll("category")

    const urlCategoryListObject = {}
    urlCategoryListinArray.forEach(el =>{
      urlCategoryListObject[el] = true
    })

    const [selectCategory,setSelectCategory] = useState(urlCategoryListObject)
    const [filterCategoryList,setFilterCategoryList] = useState([])

    const [sortBy,setSortBy] = useState("")

    const fetchData = async()=>{
      const response = await fetch(SummaryApi.filterProduct.url,{
        method : SummaryApi.filterProduct.method,
        headers : {
          "content-type" : "application/json"
        },
        body : JSON.stringify({
          category : filterCategoryList
        })
      })

      const dataResponse = await response.json()
      setData(dataResponse?.data || [])
    }

    const handleSelectCategory = (e) =>{
      const {name , value, checked} =  e.target

      setSelectCategory((preve)=>{
        return{
          ...preve,
          [value] : checked
        }
      })
    }

    useEffect(()=>{
      fetchData()
    },[filterCategoryList])

    useEffect(()=>{
      const arrayOfCategory = Object.keys(selectCategory).map(categoryKeyName =>{
        if(selectCategory[categoryKeyName]){
          return categoryKeyName
        }
        return null
      }).filter(el => el)

      setFilterCategoryList(arrayOfCategory)

      //format for url change when change on the checkbox
      const urlFormat = arrayOfCategory.map((el,index) => {
        if((arrayOfCategory.length - 1 ) === index  ){
          return `category=${el}`
        }
        return `category=${el}&&`
      })

      navigate("/product-category?"+urlFormat.join(""))
    },[selectCategory])


    const handleOnChangeSortBy = (e)=>{
      const { value } = e.target

      setSortBy(value)

      if(value === 'asc'){
        setData(preve => preve.sort((a,b)=>a.sellingPrice - b.sellingPrice))
      }

      if(value === 'dsc'){
        setData(preve => preve.sort((a,b)=>b.sellingPrice - a.sellingPrice))
      }
    }

    useEffect(()=>{

    },[sortBy])
    
  return (
    <div className='container-fluid mt-5 pt-5' >
    <div className="  mt-5">
       
       
     </div>
       {/***desktop version */}
       <div className='row pt-3'>
           {/***left side */}
           <div className='bg-color text-white col-md-2 py-3'>
                {/**sort by */}
                <div className=''>
                    <h3 className=''>Sort by</h3>

                    <form className=''>
                        <div className='d-flex align-items-center gap-3'>
                          <input type='radio' name='sortBy' checked={sortBy === 'asc'} onChange={handleOnChangeSortBy} value={"asc"}/>
                          <label>Price - Low to High</label>
                        </div>

                        <div className='d-flex align-items-center gap-3'>
                          <input type='radio' name='sortBy' checked={sortBy === 'dsc'} onChange={handleOnChangeSortBy} value={"dsc"}/>
                          <label>Price - High to Low</label>
                        </div>
                    </form>
                </div>


                {/**filter by */}
                <div className='py-3'>
                    <h3 className=''>Category</h3>

                    <form className=''>
                        {
                          productCategory.map((categoryName,index)=>{
                            return(
                              <div className='flex items-center gap-3'>
                                 <input type='checkbox' name={"category"} checked={selectCategory[categoryName?.value]} value={categoryName?.value} id={categoryName?.value} onChange={handleSelectCategory} />
                                 <label htmlFor={categoryName?.value}>{categoryName?.label}</label>
                              </div>
                            )
                          })
                        }
                    </form>
                </div>


           </div>


            {/***right side ( product ) */}
            <div className=' col-md-10 '>
              <div className='h4'>Search Results : {data.length}</div>

             <div className=''>
              {
                  data.length !== 0 && !loading && (
                    <VerticalCard data={data} loading={loading}/>
                  )
              }
             </div>
         </div>
       </div>
       
    </div>
  )
}

export default CategoryProduct
import React, {useState, useEffect} from 'react'
import {Spinner} from 'react-bootstrap'
import ProductList from '../ProductComponents/ProductList'
import product_img from './images/Product/product1.png'
import queryString from 'query-string'
import axios from 'axios'

export default function NewProductPage({location, history}) {
    const [productItems, setProductItems] = useState(null)
    const query = queryString.parse(location.search);
    const [page, setPage] = useState(1)
    const [size, setSize] = useState(9)
    const [list, setList] = useState(1)
    

    const getAxiosData = (uri) =>{
        axios.get("http://localhost:3000/"+ uri)
        .then(res=> setProductItems(res.data))
    }

    useEffect(()=>{
        if(!query.category_id){
            if(query.newproduct_id){
                getAxiosData("articles")
            }else if(query.saleproduct_id){
                getAxiosData("articles")
            }else{
                history.push("/category")
            }
        }


        if(!productItems){
            getAxiosData()
        }
    })


    return (
        <>
          {productItems ? <ProductList productItems={productItems}/> :  <Spinner animation="border" variant="danger" />}  
        </>
    )
}

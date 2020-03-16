import React, {useState, useEffect} from 'react'
import {Spinner} from 'react-bootstrap'
import ProductList from '../ProductComponents/ProductList'
import product_img from './images/Product/product1.png'

export default function ProductListPage() {
    const [productItems, setProductItems] = useState(null)
    
    if(productItems === null){
        setProductItems(
        [
            {
                img:product_img,
                title:"[퓨어스펙] 블랙라벨 고당도 오렌지 4입",
                price:"8,800원"
            },
            {
                img:product_img,
                title:"[라메르풀라르] 프랑스 전통쿠키(틴케이스)",
                price:"15,900원"
            },
            {
                img:product_img,
                title:"MY FIRST 처음 만나는 진짜 식빵",
                price:"4,900원"
            },
            {
                img:product_img,
                title:"[My little recipe] 안동에서 올라온 전통찜닭 대용량(3~4안용)",
                price:"23500원"
            },
            {
                img:product_img,
                title:"[My little recipe] 안동에서 올라온 전통찜닭 대용량(3~4안용)",
                price:"23500원"
            },
            {
                img:product_img,
                title:"[My little recipe] 안동에서 올라온 전통찜닭 대용량(3~4안용)",
                price:"23500원"
            }
        ])
    }
    useEffect(()=>{
        
    })


    return (
        <>
          {productItems ? <ProductList productItems={productItems}/> :  <Spinner animation="border" variant="danger" />}  
        </>
    )
}

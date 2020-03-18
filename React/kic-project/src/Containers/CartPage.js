import React, {useState, useEffect} from 'react'
import Cart from '../ProductComponents/Cart'
import cart_img from './images/Cart/cart_img.png'

export default function BasketPage() {
    const [cartSamples, setCartSamples] = useState(null)
    
    const handleData = (data)=>{
        console.log(data)
    }

    if(cartSamples ===null){
        setCartSamples([
            {
                id:1,
                img:cart_img,
                name:"냉동 바밤 단호박 250g",
                price:"2950"
            },
            {
                id:2,
                img:cart_img,
                name:"모르는 단호박 250g",
                price:"3450"
            }]
        )
    }

    return (
        <>
            {cartSamples && <Cart onSubmit={handleData} cartSamples={cartSamples}/>}        
        </>
    )
}

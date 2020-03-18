import React, {useState, useEffect} from 'react'
import {Spinner} from 'react-bootstrap'
import Main from '../MainComponents/Main'
import axios from 'axios'
import host from './local'
//이미지 테스트용
import slide1 from './images/Main/slide1.png'
import slide2 from './images/Main/slide1.png'
import slide3 from './images/Main/slide1.png'
import contents_1 from './images/Main/Item1.png'
import contents_2 from './images/Main/item2.png'
import contents_3 from './images/Main/item3.png'
import contents_4 from './images/Main/item4.png'
import eventImg_1 from './images/Main/eventImg1.png'
import eventImg_2 from './images/Main/eventImg2.png'
import eventImg_3 from './images/Main/eventImg3.png'

export default function MainPage() {
    const [mainItems, setMainItems] = useState(null)

    const getMainItemsAxios = (url) => {
        console.log('호출')
        axios.get(url)
        .then((res)=>{
            console.log("데이터가져옴",res.data)
        })
    }
    
    if(mainItems === null){
        setMainItems(
            {
            body_slide_img:[slide1,slide2,slide3],
            body_contents1:[
                {
                    img:contents_1,
                    title:"[퓨어스펙] 블랙라벨 고당도 오렌지 4입",
                    price:"8,800원"
                },
                {
                    img:contents_2,
                    title:"[라메르풀라르] 프랑스 전통쿠키(틴케이스)",
                    price:"15,900원"
                },
                {
                    img:contents_3,
                    title:"MY FIRST 처음 만나는 진짜 식빵",
                    price:"4,900원"
                },
                {
                    img:contents_4,
                    title:"[My little recipe] 안동에서 올라온 전통찜닭 대용량(3~4안용)",
                    price:"23500원"
                }
            ],
            body_contents2:[
                {
                    img:eventImg_1,
                    title:"[퓨어스펙] 블랙라벨 고당도 오렌지 4입",
                    price:"8,800원"
                },
                {
                    img:eventImg_2,
                    title:"[라메르풀라르] 프랑스 전통쿠키(틴케이스)",
                    price:"15,900원"
                },
                {
                    img:eventImg_3,
                    title:"MY FIRST 처음 만나는 진짜 식빵",
                    price:"4,900원"
                }
            ]
            }
        )}
    useEffect(()=>{
        getMainItemsAxios(host + '/articles?size=10&page=1')
    })

    return (
        <>
        {
        mainItems &&
            <Main
                mainItems={mainItems}
            />
        }
        </>
    )
}

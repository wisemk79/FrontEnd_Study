import React, {useState, useEffect} from 'react'
import CheckBoxList from './CheckBoxList'

export default function Test() {
    const [box, setBox] = useState(        {
        isAllSelected: false,
        checkList:[
            {
                name:"city",
                value:"bangalore",
                checked:false
            },
            {
                name:"city",
                value:"chennai",
                checked:false
            },
            {
                name:"city",
                value:"delhi",
                checked:false
            }
        ]
    })

    // setBox(

    //     )
   
    console.log(box)

    const onCheckBoxChange = (checkName, isChecked)=>{
        let isAllChecked = (checkName === 'all' && isChecked)
        let isAllUnChecked = (checkName === 'all' && !isChecked)
        const checked = isChecked
    
    const checkList = box.checkList.map((city, index)=>{
        if(isAllChecked || city.value === checkName){
            return Object.assign({}, city, {
                checked,
            })
        }else if(isAllUnChecked){
            return Object.assign({}, city, {
                checked : false,
            })
        }
        return city
    })

    let isAllSelected = (checkList.findIndex((item)=> item.checked === false) === -1) || isAllChecked;

    setBox({
            checkList,
            isAllSelected
        })
    }


    return (
        <>
            <div className="city-list">
                <CheckBoxList
                    options={box.checkList}
                    isCheckedAll={box.isAllSelected}
                    onCheck={onCheckBoxChange}
                />
            </div>
        </>
    )
}

import React from 'react'
import CheckBox from './CheckBox'

export default function CheckBoxList({options, isCheckedAll, onCheck}) {

    const checkBoxOptions = (
        <div className="checkbox-list">
            {options.map((option, index)=>{//옵션 갯수에 따라서 체크 박스 만들기
                return(
                    <CheckBox 
                        key={index} 
                        name={option.name} 
                        value={option.value}
                        tick={option.checked}
                        onCheck={e=> onCheck(option.value, e.target.checked)}
                    />
                )
            })}
        </div> 
    )

    return (
        <div className="checkbox-list">
            {/* 전체선택 */}
            <CheckBox
                name="select-all"
                value="ALL"
                tick={isCheckedAll}
                onCheck={e=> onCheck('all',e.target.checked)}
            />
            {checkBoxOptions}
        </div>
    )
}

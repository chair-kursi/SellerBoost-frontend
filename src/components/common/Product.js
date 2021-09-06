import React from 'react'
import '../../css/home.css'


export default function Product(props) {
    const { ele } = props
    return (
        <div className="main-product-card"> 
                <img src={ele.frontImgUrl} alt="" />  
                <p>{ele.styleCode}</p>
        </div>
    )
}

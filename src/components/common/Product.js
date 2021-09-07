import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/home.css'


export default function Product(props) {
    const { ele } = props
    return ( 
            <div className="main-product-card"> 
                <Link to={`/style/edit/${ele._id}`}> 
                    <img src={ele.frontImgUrl} alt="" />
                    <p>{ele.styleCode}</p>
                </Link>
            </div> 
    )
}

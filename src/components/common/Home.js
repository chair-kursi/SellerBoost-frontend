import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Product from './Product';


export default function Home() {

    const [styles, setStyles] = useState(null)

    const getStyles = async () => {
        const stylesArr = await axios({
            method: "get",
            url: "http://localhost:3002/style"
        })
        setStyles(stylesArr.data)
    }

    useEffect(() => {
        getStyles();
    }, [])

    return (
        <div>
            <div className="banner-page">
                <p>Introducing the New Revolution in Fashion - <span>StyloBug</span> </p>
            </div>
            <div className="products">
                {styles ?
                    styles.map((ele) => {
                        return <Product key={ele._id} ele={ele} />
                    }) : null
                }
            </div>
        </div>
    )
}

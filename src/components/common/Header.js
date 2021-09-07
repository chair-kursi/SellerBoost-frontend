import React, { useState } from 'react'
import '../../css/header.css'
import { Link } from "react-router-dom"


export default function Header() {

    const [toggle, setToggle] = useState(false)


    return ( 
            <div className="header-main">
                <nav className="navbar navbar-light fixed-top navbar-expand-md navbar-no-bg">
                    <Link className="navbar-brand" to="/"> StyloBug</Link>
                    <button className={`navbar-toggler ${!toggle ? "collapsed" : ""}`} type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" onClick={() => { console.log("clicked"); setToggle(!toggle) }}></span>
                    </button>
                    <div className={`collapse navbar-collapse ${toggle ? "nav-top-ul-li-text-align show" : ''}`} id="navbarNav">
                        <ul className="navbar-nav ml-auto nav-top-ul">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/register">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/style/add">+ STYLE</Link>
                            </li>

                        </ul>
                    </div>
                </nav>
            </div>  
    )
}

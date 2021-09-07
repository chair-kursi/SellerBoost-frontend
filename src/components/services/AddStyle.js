import axios from 'axios'
import React, { useState } from 'react'
import "../../css/services/addStyle.css" 
import { nameValidator, styleCodeValidator } from '../validators/validation'
import { Link } from 'react-router-dom'


export default function AddStyle() {

    const [styleCode, setStyleCode] = useState(null)
    const [styleCodeErr, setStyleCodeErr] = useState(null)
    const [frontImg, setFrontImg] = useState(null)
    const [backImg, setBackImg] = useState(null)
    const [zoomImg, setZoomImg] = useState(null)
    const [color, setColor] = useState(null)
    const [name, setName] = useState(null)
    const [nameErr, setNameErr] = useState(null)
    const [success, setSuccess] = useState(null)
    const [noSuccess, setNoSuccess] = useState(null) 

    const saveNewStyle = async () => {
        setSuccess(null);
        setNoSuccess(null);
        if (!styleCode || !frontImg || !backImg || !zoomImg || !color || !name) {
            setNoSuccess("Please fill all details to proceed.")
            return;
        }
        let data = {
            styleCode: styleCode,
            frontImg: frontImg,
            backImg: backImg,
            zoomImg: zoomImg,
            color: color,
            name: name,
        };
        const savedData = await axios({
            method: "post",
            url: "http://localhost:3002/style/add",
            data: data
        })
        if (savedData.data) {
            setSuccess(savedData.data)
        }
    }

    return (
        <div className="add-style">
            <div className="new-style-inputs">
                <h2>Add Style To Fashion</h2>
                <p>{noSuccess}</p>
                {
                    success ?
                        <p>New Style Added Successfully. <Link to={`/style/add/${success._id}`}>Add SKUs</Link></p> : null
                }
                <div className="new-style-code new-style-fields">
                    <label htmlFor="styleCode">Style Code: </label>
                    <input type="text" id="styleCode" placeholder="Style Code" onChange={(e) => {
                        if (!styleCodeValidator(e.target.value) && e.target.value.length) {
                            setStyleCodeErr("Invalid Style Code!!")
                            setStyleCode(null)
                        }
                        else setStyleCodeErr(null)
                        setStyleCode(e.target.value)
                    }} />
                </div>
                {
                    styleCodeErr ?
                        <p>{styleCodeErr}</p> : null
                }

                <div className="new-style-name new-style-fields">
                    <label htmlFor="styleName">Name: </label>
                    <input type="text" id="styleName" placeholder="Name" onChange={(e) => {
                        if (e.target.value && !nameValidator(e.target.value)) {
                            setNameErr("Enter Valid Name")
                            setName(null)
                        }
                        else setNameErr(null)
                        setName(e.target.value)
                    }} />
                </div>
                {
                    nameErr ?
                        <p>{nameErr}</p> : null
                }
                <div className="new-style-color new-style-fields">
                    <label htmlFor="styleName">Color: </label>
                    <input type="text" id="styleColor" placeholder="Color" onChange={(e) => setColor(e.target.value)} />
                </div>

                <div className="new-style-front-img new-style-fields">
                    <label htmlFor="frontImg">Front Image: </label>
                    <input type="text" id="frontImg" placeholder="Front Image" onChange={(e) => setFrontImg(e.target.value)} />
                </div>

                <div className="new-style-back-img new-style-fields">
                    <label htmlFor="backImg">Back Image: </label>
                    <input type="text" id="backImg" placeholder="Back Image" onChange={(e) => setBackImg(e.target.value)} />
                </div>

                <div className="new-style-zoom-img new-style-fields">
                    <label htmlFor="zoomImg">Zoom Image: </label>
                    <input type="text" id="zoomImg" placeholder="Zoom Image" onChange={(e) => setZoomImg(e.target.value)} />
                </div>
                <button className="new-style-fields" onClick={saveNewStyle}>Add Style</button>
            </div>
        </div> 

    )
}

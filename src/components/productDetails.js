import React from 'react'
import {useParams} from "react-router-dom"
export const ProductDetails = () => {

const {id} = useParams();
const shoe = shoes[id];


const { name, img } = shoe;
    return (
        <div>
        Details of {id}    
    <h1>{name}</h1>
    <img src={img}/>
        </div>
    )
}

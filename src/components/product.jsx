import React from 'react'
import { useState, useEffect } from 'react'

function Product({item})
{
    return (
        <>
        <div className="product">{item.price}</div>
        </>
    )
}

export default Product;
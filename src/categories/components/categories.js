import React from 'react'
import Category from './category'
import './categories.css';

function Categories(props) {
    console.log("--> " + props.categories.length)
    return (
        <div className="Categories" >
         {
             props.categories.map((item) => <Category key={item.id} {...item}/>
             )
         }
        </div>
    )
}

export default Categories
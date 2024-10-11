import React, { useEffect, useState } from 'react'

function ListItems() {

    const [items, setItems] = useState([])
    const getItems = async()=>{
        const response = await fetch('https://geekchic.onrender.com/demo',{
            method:'GET',
          })
          const data = await response.json()
          setItems(data)
    }

    useEffect(()=>{
        getItems()
    },[])
        
    

  return (
    <div>
        <ul>
            {items.map(item=><li key={item._id}>{item.title}<img src={item.image}/><br/>{item.price} Rs <br /></li>)}
        </ul>
    </div>
  )
}

export default ListItems
import React,{useEffect,useState} from 'react';
import {Link} from 'react-router-dom';

import './App.css';


function Shop() {
  useEffect(()=>{
    fetchItems();
  },[]);

  const [items, setItems]= useState([]);

  const fetchItems= async () =>{
    const response = await fetch('https://fortnite-api.com/v2/cosmetics/br/new');
    const items = await response.json();
    console.log(items.data.items);
    setItems(items.data.items)
  }


  return (
    <div className="App">
      {items.map(item=>(
        <h3 key={item.id}>
          <Link to={`shop/${item.id}`}> {item.name}</Link>
          </h3>
      ))}
    </div>
  );
}



export default Shop;

import React,{useEffect,useState} from 'react';


import './App.css';

function ItemDetail({match}) {

  useEffect(()=>{
    fetchItem();
    console.log(match);
  },[]);

  const [item, setItem]= useState({
      images:{}
  });

  const fetchItem= async () =>{
    const response = await fetch(`https://fortnite-api.com/v2/cosmetics/br/${match.params.id}`);
    const item = await response.json();
    setItem(item.data)
    console.log(item.data)
  }

  return (
    <div className="App">
     <h1>{item.name}</h1>
     <img src={item.images.icon} alt=""/>
    </div>
  );
}



export default ItemDetail;

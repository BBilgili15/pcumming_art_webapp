import React from 'react'
import { useState, useEffect } from 'react';
import { getCeramics } from '../services/CeramicsServices';




const ShopCeramicsPage = () => {

  // All Ceramics State
  const [allCeramics, setAllCeramics] = useState([])

  // On mount, retrieve ceramics
  useEffect(() => {
    getCeramics()
    .then((ceramics) => {
      setAllCeramics(ceramics)
    })
  }, [])

  // Map ceramics as components
  const ceramicComponent = allCeramics.map((ceramic) => {
    return (
      <p>{ceramic.name}</p>
    )
  })

  return (
    <div className='page-container'>
      <h1>Ceramics</h1>
      {ceramicComponent}
    </div>
  );
}

export default ShopCeramicsPage
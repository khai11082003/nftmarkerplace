import React from 'react'
import "./create.scss"
export default function TopHeader () {
  return (
 <div className='createNft'>
    <div className="positionCreate">
      <div className="inner-li">
        <li>Home</li>
        <li>Sellers</li>
        <li>Collectibles</li>
        <li>Owner</li>
        <li>About</li>
        <li>List to Market</li>
      </div>
      <div className="innet__button--create">
        <button>Create NFT & 1155</button>
        <button>Connect Wallet</button>
      </div>
    </div>
 </div>
  )
}

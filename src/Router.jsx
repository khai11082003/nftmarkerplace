import React from 'react'
import {BrowserRouter,Routes as ReactRoute,Route} from "react-router-dom"
import MainPage from './pages/MainPage'
import Azuki from './pages/AzukiPage/Azuki'
import BuyNft from './pages/BuyNft/BuyNft'
import CreateNft from './pages/CreateNft/CreateNft'
import Create from './pages/CreateNft/Create'
export default function Routers() {
  return (
    <div>
        <BrowserRouter>
            <ReactRoute>
                <Route path='/' element = {<MainPage/>}/>
                <Route path='/2' element = {<Azuki/>}></Route>
                <Route path='/Buy' element = {<BuyNft/>}/>
                <Route path='/create' element = {<CreateNft/>}/>
                <Route path='/create/adidas' element = {<Create/>}/>
            </ReactRoute>
        </BrowserRouter>
    </div>
  )
}

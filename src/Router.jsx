import React from 'react'
import {BrowserRouter,Routes as ReactRoute,Route} from "react-router-dom"
import MainPage from './pages/MainPage'
import Azuki from './pages/AzukiPage/Azuki'
export default function Routers() {
  return (
    <div>
        <BrowserRouter>
            <ReactRoute>
                <Route path='/' element = {<MainPage/>}/>
                <Route path='/1' element = {<Azuki/>}></Route>
            </ReactRoute>
        </BrowserRouter>
    </div>
  )
}

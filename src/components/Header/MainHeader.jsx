import React, { useState } from 'react'
import "./Header.scss"
import { Link } from 'react-router-dom'
export default function MainHeader() {
    const [active,setActive] = useState(true);
    return (
        <header>
            <div className='Main__Header container'>
                <div className='Top sub__container'>
                    <div className='disc' style={
                        {
                            fontSize: "17px",
                            fontWeight: "400",
                        }
                    }>
                        Discover, find and sell extraordinary NFT with us.
                    </div>
                    <div className="create__nft">
                        <div className="list__item">
                            
                        </div>
                        <Link className="button__nft" to="/create">
                            CREATE NFT
                        </Link>
                    </div>
                </div>
                <div className="row"></div>
            </div>
            <div className="Bottom__header container">
                <div className="Bottom sub__container" style={{
                    position: "relative"
                }}>
                 <div className='inner__logo'>   <div className="logo" 
                 >
                        <svg style={{
                                marginTop: "8px"
                        }} width="50" height="42" viewBox="0 0 50 42" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_d_2459_747)">
                                <path d="M37.3141 33.75H12.6606C11.1902 33.75 9.61288 32.587 9.13556 31.1508L4.13738 16.0992C3.66005 14.663 4.46657 13.5 5.93694 13.5H30.5904C32.0608 13.5 33.6382 14.663 34.1155 16.0992L39.1137 31.1508C39.5882 32.587 38.7845 33.75 37.3141 33.75Z" fill="#C26028" />
                                <path opacity="0.9" d="M40.3131 27H15.6604C14.19 27 12.6127 25.837 12.1354 24.4008L7.13737 9.34924C6.66006 7.91296 7.46655 6.75 8.93688 6.75H33.5896C35.06 6.75 36.6373 7.91296 37.1146 9.34924L42.1126 24.4008C42.5899 25.8344 41.7834 27 40.3131 27Z" fill="#EEC141" />
                                <path opacity="0.9" d="M44.1043 20.25H19.9761C18.5371 20.25 16.9933 19.087 16.5261 17.6508L11.6345 2.59925C11.1673 1.16296 11.9566 0 13.3957 0H37.5239C38.963 0 40.5067 1.16296 40.9739 2.59925L45.8656 17.6508C46.3327 19.087 45.5434 20.25 44.1043 20.25Z" fill="#EEC141" />
                            </g>
                            <defs>
                                <filter id="filter0_d_2459_747" x="0" y="0" width="50" height="41.75" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="4" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2459_747" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2459_747" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                        <Link className="brand" to = "/" style={{
      
                        }}>FIDEC</Link></div>
           
                        <div className="icon__bar hidden">   
                                  <div class="mobile_only_icon_group account hidden" style={{display: "flex", alignItems: "center"}}>
<a href="https://enefti.modeltheme.com/my-account/">
<i class="fa fa-user-circle"></i>

</a>
<div className="fix" > <Link to = "Buy">  <i class="fa-solid fa-cart-shopping" style={
                        {
                            fontSize: "28px"
                            ,marginLeft: "10px",marginRight: "10px",cursor: 'pointer'
                        }
                    }></i></Link></div>
</div><i class="fa-solid fa-bars" onClick={() => setActive(!active)}></i></div>
                    </div>
       
             <div className="list__item--sign" style={{marginLeft: "20px", alignItems: "center"}}>
                   <div className={`list__item ${active === true ? "active" : null}`} >
                        <ul style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                        alignItems: "center"
                        
                    }}>
                            <li className="item">Home</li>
                            <li className="item">Collectors</li>
                            <li className="item">NFT Marketplace</li>
                            <li className="item">Features</li>
                            <li className="item">Pages</li>
                            <li className="item">Help</li>
                            <li className="item">Purchase</li>
                        </ul>
                    </div>
                    <div className="fix hidd" >  <Link to = "Buy">  <i class="fa-solid fa-cart-shopping" style={
                        {
                            fontSize: "28px",
                         
                        }
                    }></i></Link></div></div>

                   </div>
                    </div>      
        </header>
    )
}

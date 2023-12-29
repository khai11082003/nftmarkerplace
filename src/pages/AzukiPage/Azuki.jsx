import React, { useState, useEffect } from 'react'
import TopHeader from '../../components/Header/TopHeader'
import MainHeader from '../../components/Header/MainHeader'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import './index.scss'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { increment,decrement } from '../../action'
import store from '../../store'
export default function Azuki () {
  const [review, setReview] = useState(true)
  const [sell, setSell] = useState(false)
  const [trait, setTrait] = useState(false)
  const data = useSelector((state) => state.list)
  const currentURL = window.location.href
  const index = currentURL.indexOf('locolhost1000-khai11082003.vercel.app')
  const result = currentURL.substring(index + 15)
  const dispatch = useDispatch();
  const dataRender = data.find((data) => data.id === result)
  const handleIncrement = (id) => {
    // Dispatch the 'increment' action
    dispatch(increment(id));
  };
  const handleDecrement = (id) => {
    // Dispatch the 'increment' action
    if (dataRender.quality > 0) {
      dispatch(decrement(id));
    }else alert('can not decrement!')
  };
  function handle (content) {
    switch (content) {
      case 'review':
        setReview(true)
        setSell(false)
        setTrait(false)
        break
      case 'sell':
        setReview(false)
        setSell(true)
        setTrait(false)
        break
      case 'trait':
        setReview(false)
        setSell(false)
        setTrait(true)
        break
    }
  }


  return (
    <div className='Azuki'>
      <TopHeader />
      <MainHeader />
      <div className='container'>
        <div className='sub__container'>
          <div className='title'>
            <h1
              style={{
                color: '#000',
                fontSize: '40px'
              }}
            >
              Azuki #9990
            </h1>
            <div className='sub__title'>
              <Link
                to='/'
                className='a'
                style={{
                  color: 'rgb(0 0 0 / 54%)'
                }}
              >
                Home{' '}
              </Link>
              <span
                style={{
                  color: 'rgb(0 0 0 / 54%)'
                }}
              >
                / Azuki #9990
              </span>
            </div>
          </div>
          <div className='infor detail'>
            <div className='image'>{dataRender && <img src={dataRender.image} alt='' />}</div>
            <div className='content__detail'>
              <div className='title' style={{ color: '#000' }}>
                Azuki #9990
                <br />
                <span>Azuki Collection</span>
              </div>
              {dataRender && (
                <div className='price' style={{ color: '#000' }}>
                  ${dataRender.Price*dataRender.quality}
                </div>
              )}
              <div className='row__1'></div>
              <div className='sub__title' style={{ color: '#000' }}>
                collection
              </div>
              <div className='sub__image'>
                {dataRender && <img src={dataRender.image} alt='' />}
              </div>
              <div className='button__detail'>
                <div className='inner__button'>
                  <button onClick={() => handleDecrement(dataRender.id)}>-</button>{' '}
                  {dataRender && (
                    <div className='counter' style={{ color: '#000' }}>
                      {dataRender.quality}
                    </div>
                  )}{' '}
                  <button onClick={() => handleIncrement(dataRender.id)}>+</button>
                </div>
                <button className='add'>ADD TO CARD</button>
              </div>
              <p
                style={{
                  color: '#8b8b8a',
                  marginTop: '20px',
                  lineHeight: '25px',
                  fontSize: "15px"
                
                }}
              >
                SKU: 223145873
                <br />
                Category: <b style={{
                  color: '#8b8b8a',
                  marginTop: '20px',
                  lineHeight: '25px',
                  fontSize: "15px"
                
                }}>Azuki</b>
                <br />
                Presale: No
                <br />
                Sales: 0
              </p>
              <div className='review__container'>
                <div className='select__review'>
                  <div
                    className='box'
                    style={review ? { color: 'red' } : {}}
                    onClick={() => handle('review')}
                  >
                    review
                  </div>
                  <div
                    className='box'
                    style={sell ? { color: 'red' } : {}}
                    onClick={() => handle('sell')}
                  >
                    Sell Orders
                  </div>
                  <div
                    className='box'
                    style={trait ? { color: 'red' } : {}}
                    onClick={() => handle('trait')}
                  >
                    Traits
                  </div>
                </div>
                <div
                  className='content__riview'
                  style={{ color: '#000', marginTop: '25px' }}
                >
                  {review ? (
                    <div
                      className='r'
                      style={{
                        color: '#000',
                        fontSize: '16px',
                        lineHeight: '25px',
                        fontWeight: '300'
                      }}
                    >
                      There are no reviews yet.
                      <br />
                      <span style={{ fontWeight: 'bold', color: '#000' }}>
                        Be the first to review “Azuki #9990”
                      </span>
                      <br />
                      Your email address will not be published. Required fields
                      are marked *<br />
                      <br />
                      <span style={{ color: '#000', fontWeight: 'bold' }}>
                        Your rating
                      </span>
                      <ul className='rate'>
                        <li>
                          <i class='fa-regular fa-star'></i>
                        </li>
                        <li>
                          <i class='fa-regular fa-star'></i>
                        </li>
                        <li>
                          <i class='fa-regular fa-star'></i>
                        </li>
                        <li>
                          <i class='fa-regular fa-star'></i>
                        </li>
                        <li>
                          <i class='fa-regular fa-star'></i>
                        </li>
                      </ul>
                      <span style={{ color: '#000', fontWeight: 'bold' }}>
                        Your review
                      </span>
                      <textarea
                        style={{
                          color: 'black',
                          width: '40vw',
                          height: '100px'
                        }}
                      ></textarea>
                      <span style={{ color: '#000', fontWeight: 'bold' }}>
                        Name
                      </span>
                      <input
                        style={{
                          color: 'black',
                          width: '40vw',
                          height: '40px'  ,                        height: '40px',marginTop: "10px"

                        }}
                      ></input>
                       <span style={{ color: '#000', fontWeight: 'bold',marginTop: "5px"}}>
                        Email
                      </span>
                      <input
                        style={{
                          color: 'black',
                          width: '40vw',
                          height: '40px',marginTop: "10px"
                        }}
                      ></input>
                     <div className="inner" style={{display:"flex",alignItems:"flex-start",marginTop: "15px"}}> <input type="checkbox" style={{margin: "0px",marginTop: "5px",marginRight:"5px"}}/>  <div style={{color:"#000",display:"inline-block"}}>Save my name, email, and website in this browser for the next time I comment.</div></div>
                      <button className='btn'>SUBMIT</button>
                    </div>
                  ) : null}
                  {sell ? 'loi tren template' : null}
                  {trait ? <table style={{width:"100%"}}>
<tbody><tr>
<th>Hair</th>
<th>Maroon Short Spiky</th>
</tr>
<tr>
<th>Face</th>
<th>Black Glasses</th>
</tr>
<tr>
<th>Eyes</th>
<th>Suspicious</th>
</tr>
<tr>
<th>Clothing</th>
<th>Bumblebee Jacket</th>
</tr>
<tr>
<th>Background</th>
<th>Off White D</th>
</tr>
<tr>
<th>Offhand</th>
<th>Skateboard</th>
</tr>
<tr>
<th>Type</th>
<th>Human</th>
</tr>
<tr>
<th>Mouth</th>
<th>Closed</th>
</tr>
</tbody></table> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

import React from 'react'
import TopHeader from '../components/Header/TopHeader'
import './index.scss'
import MainHeader from '../components/Header/MainHeader'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer/Footer'
import { buy, increment } from '../action'
export default function MainPage () {
  const list = useSelector(state => state.list)
  const New = useSelector(state => state.new)
  const dispatch = useDispatch()
  function handleBuy(id) {
    setTimeout(() => {
      dispatch(buy(id));
    dispatch(increment(id));
    },1000)
  }
  const listhot = list.length === 0 ? null : list.filter((data) =>  data.hot === true)
  return (
    <div className="HomePage">
      <div className='MainPage'>
      <MainHeader />
      <div className='brands container'>
        <div className='content sub__container'>
          <img
            decoding='async'
            fetchpriority='high'
            class='alignleft wp-image-6694 entered lazyloaded'
            src='https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic-300x208.jpg'
            alt=''
            width='740'
            height='513'
            data-lazy-srcset='https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic-300x208.jpg 300w, https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic-700x485.jpg 700w, https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic-1024x710.jpg 1024w, https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic-768x532.jpg 768w, https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic-1536x1065.jpg 1536w, https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic-144x100.jpg 144w, https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic.jpg 1686w'
            data-lazy-sizes='(max-width: 740px) 100vw, 740px'
            data-lazy-src='https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic-300x208.jpg'
            data-ll-status='loaded'
            sizes='(max-width: 740px) 100vw, 740px'
            srcset='https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic-300x208.jpg 300w, https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic-700x485.jpg 700w, https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic-1024x710.jpg 1024w, https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic-768x532.jpg 768w, https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic-1536x1065.jpg 1536w, https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic-144x100.jpg 144w, https://enefti.modeltheme.com/wp-content/uploads/2022/02/Main-slider_pic.jpg 1686w'
          />
          <div className='text__content'>
            <div className='wpb_wrapper'>
              <h2>
                Discover,<br/> Collect &amp; Sell <br/> <strong>Extraordinary</strong><br/>NFTs
              </h2>
            </div>
            <p>
            The Crypto Monkey is a high-quality collection<br/>of 100 unique monkeys on the NFTMart<br/>marketplace.
            </p>
            <div className="button">
              DISCOVER
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="Nft">
      <div className="container">
        <div className="sub__container title">
        <h2>Explore NFTs</h2>
        <div className="list__item--cart">
        {list.length === 0 ? (<div>Loading...</div>) : list.map((data) => {
          return <div className='text'>
                  <div className="image">
                   <Link to = {data.id}> <img src= {data.image}/></Link>
                  </div>
                  <Link className="content__nft" to = {data.id}>
                      {data.title}
                    </Link>
                    <div className="price">
                      Receive Price:<br/>${data.Price}
                    </div>
                    <div className="button__container">
                    <button style={{
                      color: "#fff",
                    }} >
                    <i class="fa-solid fa-cart-shopping" style={{
                      color: "#fff",
                    }}></i>
                                     {data.Buy ? <Link to = "Buy" style={{color: "#fff"}}>VIEW CARD</Link> :<span onClick={() => handleBuy(data.id)} style={{color: "#fff"}}>ADD TO CARD</span>}
                    </button>
                    </div>
                </div>
        })}
        </div>
        </div>
      </div>
    </div>
    <div className="section__three container">
      <div className="three-title  sub__container">
        <h3>
        Create and Sell Your NFTs
        </h3>
        <div className="list__box">
          <div className="box">
            <div className="icon">
              <div className="circle">
              <i class="fa-solid fa-book"></i>
              </div>
            </div>
            <div className="box__title">Set up your Wallet

</div>
            <div className="description">Et ligula ullamcorper malesuada proin libero nunc consequat. Sagittis aliquam malesuada bibendum arcu.</div>
          </div>
          <div className="box">
            <div className="icon">
            <div className="circle">
            <i class="fa-regular fa-image"></i>              </div>
            </div>
            <div className="box__title">Create your Collection

</div>
            <div className="description">At in tellus integer feugiat scelerisque varius morbi enim nunc. Faucibus ornare suspendisse sed nisi lacus.</div>
          </div>
          <div className="box">
            <div className="icon">
            <div className="circle">
            <i class="fa-solid fa-tv"></i>
              </div>
            </div>
            <div className="box__title">Add your NTFs

</div>
            <div className="description">Varius sit amet mattis vulputate enim nulla. Pulvinar mattis nunc sed blandit libero volutpat sed. In nulla.</div>
          </div>
          <div className="box">
            <div className="icon">
            <div className="circle">
            <i class="fa-regular fa-paper-plane"></i>              </div>
            </div>
            <div className="box__title">List item for Sale

</div>
            <div className="description">Placerat vestibulum lectus mauris ultrices eros. Cursus vitae congue mauris rhoncus aenean vel.</div>
          </div>
        </div>
      </div>
    </div>
    <div className="Nft">
      <div className="container">
        <div className="sub__container title">
        <h2>Hottest Bids</h2>
        <div className="list__item--cart" style={{
          height: "auto",
        }}>
        {listhot.length === 0 ? (<div>Loading...</div>) : listhot.map((data) => {
          return <div className='text'>
                  <div className="image">
                    <img src= {data.image}/>
                  </div>
                  <Link className="content__nft" to = {data.id}>
                      {data.title}
                    </Link>
                    <div className="price">
                      Receive Price:<br/>${data.Price}
                    </div>
                    <div className="button__container">
                    <button style={{
                      color: "#fff",
                    }}>
                    <i class="fa-solid fa-cart-shopping" style={{
                      color: "#fff",
                    }}></i>
                    {data.Buy ? <Link to = "Buy" style={{color: "#fff"}}>VIEW CARD</Link> : <span style={{color: "#fff"}} onClick={() => handleBuy(data.id)}>ADD TO CARD</span>}
                    </button>
                    </div>
                </div>
        })}
        </div>
        </div>
      </div>
    </div>
    <div className="New">
      <div className="container">
        <div className="sub__container">
          <h3 style={{
            fontSize: "30px",
            fontWeight: "500",
            margin: "0px",
          }}>Lasest News</h3>
          <div className="list__new">
          {New.length === 0 ? (<div>Loading...</div>) : New.map((data) => {
          return <div className='new__item'>
                  <div className="image__item">
                    <img src= {data.image}/>
                  </div>
                  <h3>{data.title}</h3>
                  <p>{data.desc}</p>
                  <a className='btn' href = {data.src} target='blank'>READ MORE</a>
                </div>
        })}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

import React from 'react'
import MainHeader from '../../components/Header/MainHeader'
import Footer from '../../components/Footer/Footer'
import { increment,decrement, remove } from '../../action'
import "./index.scss"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
export default function BuyNft() {
  let total = 0;
  const sum = (price) => {
    total += parseFloat(price)
  }
    const dispatch = useDispatch()
   const  MyCart = useSelector(state => state.list);
   const removeProduct = (id) => {
      dispatch(remove(id))
   };
   const handleIncrement = (id) => {
    // Dispatch the 'increment' action
    dispatch(increment(id));
  };
  const handleDecrement = (id) => {
    // Dispatch the 'increment' action
      dispatch(decrement(id));
  };
   console.log(MyCart);
   let Cart = [];
   Cart = MyCart.filter(
    (data) => data.Buy
   )
  return (
    <div className='BuyNft'>
        <MainHeader/>
        <div className='container'>
        <div className='sub__container'>
          <div className='title'>
            <h1
              style={{
                color: '#000',
                fontSize: '40px',
                marginBottom: "10px",
                marginTop: "20px"
              }}
            >
Cart
            </h1>
            <div className='sub__title'>
              <Link
                to='/'
                className='a'
                style={{
                  color: 'rgb(0 0 0 / 54%)',
                  fontWeight: "500"
                }}
              >
               FIDEC{' '}
              </Link>
              <span
                style={{
                  color: 'rgb(0 0 0 / 54%)',
                  fontWeight: "500"

                }}
              >
                / Cart

              </span>
            </div>
          </div>
          </div>
    </div>
    <div style={{marginTop: "5px",borderBottom: " 1px solid #ddd"}}/>
    <div className="container">
        <div className="sub__container">
            {Cart.length === 0 ? 
            <div className='status' style={{
                paddingLeft: "49px",
                paddingTop: "14px",
                paddingBottom: "14px",
                height: "68px",
                display: "flex",
                alignItems: "center",
                position: "relative"
            }}>
                <div style={{
                    position: "absolute",
                    width: "18px",
                    height: "18px",
                    border: "2px solid #a46497",
                    borderTop: "5px solid #a46497",
                    left: "16px"
                }}></div>
                <div className="cont" style={{
                    color: "#000",
                    fontSize: "18px",
                    fontWeight: "300"
                }}>Your cart is currently empty</div>
            </div>
            :
            Cart.map((data) => {
              sum(data.Price)
                return(
                    <div className='product__item'>
                        <img src={data.image}/>
                        <div className="name__product">{data.title}</div>
                        <div className='inner__button'>
                  <button onClick={() => data.quality === 1 ? removeProduct(data.id): handleDecrement(data.id)}>-</button>{' '}
                  { (
                    <div className='counter' style={{ color: '#000' }}>
                      {data.quality}
                    </div>
                  )}{' '}
                  <button onClick={() => handleIncrement(data.id)}>+</button>
                </div>
                <div className='inner__price'>${parseFloat(data.Price) * data.quality}</div>
                <div className="remove__card" onClick={() => removeProduct(data.id)}>x</div>
                    </div>
                )
            })
            }
       
            {Cart.length === 0 ? null :           <> <hr/><div className='total' style={{color: "#000"}}
            >Total<br/>{total.toFixed(2)}</div><br/><div style={{display:"flex",flexDirection:"row-reverse",width:"92%",}}><div className='payment' style={{fontWeight:"bold",backgroundColor:"#000",width: "100px",height: "30px",justifyContent: "center",alignItems: "center",display: "flex ",cursor: "pointer",border: "1px solid #000"}}>Payment</div></div></>}
        </div>
    </div>
    <Footer/>

    </div>
  )
}

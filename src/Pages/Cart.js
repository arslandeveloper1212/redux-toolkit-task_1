import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import "./Cart.css"
import { increment, removecart } from '../Redux/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart)

  const onRemove = (itemID) => {
    dispatch(removecart(itemID))
  }


  return (
    <div className='container'>
      <div className='row mt-5 mx-3'>
        <div className='text-center'>
          <h4>Your Cart detail: {items.length}
          </h4>
        </div>
        <div className='row  mt-4 shadow '>
          <div className='cart_card mt-4'>
            {
            items && items.map((item, index) => {
                return (
                  <div key={index} className='d-flex gap-30 align-items-center justify-content-between' style={{ padding: "30px" }}>
                    <img src={item.url} alt='img' className='img-fluid'
                      style={{ height: "70px" }}
                    />
                    <p>{item.title}</p>
                   <div className='d-flex gap-10'>
                    <p className='bg-success py-1 px-1'>+</p>
                    <p>0</p>
                    <p className='bg-success py-1 px-1'>-</p>
                    </div>
                  <button className='btn btn-danger' onClick={()=>onRemove(item.id)}>Delete</button>
                  
                  </div>

                )
              })
            }

          </div>
        </div>
      </div>
    </div>


  )
}

export default Cart

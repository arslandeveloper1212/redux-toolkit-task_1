import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchproduct } from '../Redux/productslice';
import { useSelector, useDispatch } from 'react-redux';
import { addcart } from '../Redux/cartSlice';
const Home = () => {
  const items = useSelector((state) => state.product);
 
  const dispatch = useDispatch();

  const onCart = (item)=>{
    dispatch(addcart(item))
  }

  useEffect(() => {
    dispatch(fetchproduct()) // eslint-disable-next-line;
  }, []) // eslint-disable-next-line;

  if (items.isLoading) {
    return <h1>Loading....</h1>

  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='card_setter mt-5 d-flex gap-10 flex-wrap justify-content-center align-items-center'>
          {
         items.data &&  items.data.map((item,index) => {
              return (
                <div key = {index}>
                <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={item.url} alt='image_all' />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                  <Link to="" className="btn btn-primary col-12" onClick={()=>onCart(item)}>Add to Cart</Link>
                </div>
              </div>
                </div>
              )
            })
          }

          

        </div>
      </div>

    </div>
  )
}

export default Home

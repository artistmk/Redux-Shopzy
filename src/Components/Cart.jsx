import { useSelector, useDispatch } from 'react-redux'
import {clearCart, selectCartItem} from '../redux/cartSlice/cartSlice'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
    
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItem)

    let myStyle = {
      minHeight: "70vh",
      margin: "40px auto"
    }

  return (
    <>
    <ToastContainer/>
     <div style={myStyle}>

       <div className="container text-center" style={{width: "700px"}}>
         
          {cartItem.length === 0 ? (
             <>
       <div className='text-center my-5'>
          <h1> Your Cart is Empty :{"("} </h1>
          <Link to={"/"} className="btn btn-dark my-3" style={{fontSize: "15px"}}>Continue Shopping...</Link>
        </div>
        </>
      ) :
      cartItem.map((item) => {
         return (
            <div key={item.id} className="container my-5">
                         
                        <div className="card mb-3 text-center" style={{width: "650px"}}>
                <div className="row g-0">
               <div className="col-md-4">

            <div className='p-3'>
         <img src={item.imgSrc} className="img-fluid rounded-start" alt="..."/>
          </div>
    </div>

               <div className="col-md-8">
             <div className="card-body my-3">
            <h5 className="card-title">{item.title}</h5>
         <p className="card-text">{item.description}</p>

     <div className='container text-center my-4 flexi1' style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "3rem"}}>
        <button className='btn btn-dark'>{item.price} ₹</button>
        <button className="btn btn-primary">BUY NOW</button>
         <button className='btn btn-danger'>Remove</button>
            </div>

              </div>
           </div>
       </div>
         </div>
     </div>
                )
               })
            }

          {cartItem.length !=0 && (
             <div className="container text-center my-5" style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "3rem"}}>
           <div className="btn btn-dark">Check Out</div>
           <div onClick={() => {dispatch(clearCart())
               toast.success('Cart Cleared!', {
                  position: "top-right",
                  autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  });
               }} className="btn btn-danger">Clear All</div>
       </div>
     )}
    </div>
     </div>
    </>
  )
}

export default Cart

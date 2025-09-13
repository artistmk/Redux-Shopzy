import { Products } from "./Data"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, selectCartItem } from "../redux/cartSlice/cartSlice"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = () => {
    
    const dispatch = useDispatch();
    const cartItem = useSelector(selectCartItem)

    const handleAddToCart = (item) => {
           dispatch(addToCart(item))

        toast.success('Great choice! Your item is Added', {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    
    let myStyle = {
      minHeight: "70vh",
      margin: "40px auto",
  }
  
  return (
     <>
     <ToastContainer/>
          <div className="container mt-4" style={myStyle}>
                  
                  <div className="row justify-content-center">

                      {Products.map((item) => {
                           return (
                                <div key={item.id} className="col-12 col-md-6 col-lg-4 my-4 d-flex justify-content-center">

                                   <div className="card" style={{width: "18rem"}}>
                           
                           <div className='p-2 d-flex justify-content-center align-items-center'>
                           <img src={item.imgSrc} className="card-img-top" alt="..."/>
                           </div>

               <div className="card-body text-center d-flex flex-column">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">{item.description.slice(0, 60)}...</p>
        <div className="mt-auto d-flex justify-content-center align-items-center gap-3">
             <div className="btn btn-success">{item.price} ₹</div>
            <div className="btn btn-warning" onClick={() => handleAddToCart(item)}>Add To Cart</div>
        </div>
                          </div>
                            </div>

                                </div>
                           )
                      })}
                  </div>
          </div>
     </>
  )
}

export default Product

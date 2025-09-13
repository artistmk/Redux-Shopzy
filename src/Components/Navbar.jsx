import '../responsive/Navbar.css'
import { Link } from 'react-router-dom'
import { FaOpencart } from "react-icons/fa";
import { useSelector } from "react-redux"
import { selectCartItem, selectCartTotalPrice } from "../redux/cartSlice/cartSlice"

const Navbar = () => {

    const cartItem = useSelector(selectCartItem)

    const totalPrice = useSelector(selectCartTotalPrice)

  return (
        <div className="navbar sticky-top">

            <Link to={"/"} className="brand">Redux Shopzy</Link>

             <div className="middle d-flex justify-content-center my-3">
              <span className="badge text-dark bg-warning fs-5 px-4 py-2">
                 🛍 Total: {totalPrice} ₹
            </span>
                </div>

            <Link to={"/cart"} className="cart">
                <button type="button" className="btn btn-warning position-relative">

                     <FaOpencart style={{fontSize: "1.7rem"}}/>

  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
       {cartItem.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
            </Link>
        </div>
  )
}

export default Navbar

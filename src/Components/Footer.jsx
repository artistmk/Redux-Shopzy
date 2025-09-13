import '../responsive/Footer.css'

const Footer = () => {
  return (
    <>
      <footer>
        <div className="panel2">
          <div className="footer-content">
            <ul>
              <p>Terms & Condition</p>
              <a href="#">About Us</a>
              <a href="#">Carrers</a>
              <a href="#">Articles</a>
              <a href="#">Our Terms</a>
            </ul>

            <ul>
              <p>Connect With Us</p>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
              <a href="#">Youtube</a>
            </ul>

            <ul>
              <p>Make Money With Us</p>
              <a href="#">Protection on Purchase</a>
              <a href="#">Sell On Shopzy</a>
              <a href="#">Shopzy Selling</a>
              <a href="#">Advertise Your Product</a>
            </ul>

            <ul>
              <p>Help & Support</p>
              <a href="#">Your Account</a>
              <a href="#">100% Protection</a>
              <a href="#">Recalls & Product Safety</a>
              <a href="#">Help</a>
            </ul>
          </div>
        </div>

        <div className="panel3">
          <p>ReduxShopzy.com &copy; Buy Now</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;


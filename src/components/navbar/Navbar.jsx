import "./navbar.css"

const Navbar = () => {
  return (
    <>
    <nav className='Navbar__nav'>

        <div className="Navbar__room">
            <img src="../public/roomlogo/Vector.png" alt="Vector" />
            <img src="../public/roomlogo/Vector (1).png" alt="Vector" />
            <img src="../public/roomlogo/Vector (2).png" alt="Vector" />
            <img src="../public/roomlogo/Vector (3).png" alt="Vector" />
        </div>

       
            <ul className="Navbar__menu">
                <li>PRODUCTS</li>
                <li>EXPLORE</li>
                <li>SHOP</li>
            </ul>

            <div className="Navbar__showrooms">
                <img src="../public/roomlogo/Frame.png" alt="Frame" />
                <p>SHOWROOMS</p>

            </div>
      


    
    </nav>
    </>
  )
}

export default Navbar
import "./navbar.css"

const navData = [
    {tittle:"PRODUCTS",id:1},
    {tittle:"EXPLORE",id:2},
    {tittle:"SHOP",id:3}
]

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
                {navData.map((elem)=>{
                    return <li key={elem.id}>{elem.tittle}</li>
                })}
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
import { Link } from "react-router-dom";
import './Header.css';
import { useState } from "react";
// Componente Header
const Header = () => {
    const[mobile, setMobile] = useState(false)
    return (
        <>
           <header>
            <div className="container flexSB">
                 <nav className="flexSB">
                    <div className="logo">
                        <img src="./assets/logo.jpeg" alt=""/>
                    </div>
                    <ul className={mobile ? "navMenu-list" : 'flexSB'} onClick={() => setMobile(false)}>
                        <Link to='/'>Home</Link>
                        <Link to='/'>Comece aqui</Link>
                        <Link to='/'>Instagram</Link>
                        <Link to='/'>Ajuda</Link>
                    </ul>
                    <button className="toggle"  onClick={() => setMobile(!mobile)}>
                       {mobile ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i> } 
                    </button>
                 </nav>
                 <div className="account flexSB">
                    <i className="fa fa-search"></i>
                    <i className="fa fa-bell"></i>
                    <i className="fa fa-user"></i>
                    <button>Subscribe Now</button>
                 </div>
            </div>
           </header>
        </>
    );
  }
  
  export default Header;  // Exportando o componente Header
  
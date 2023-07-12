import {Link} from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className='header'  >
        
        <Link to="/" classNmae="title">
            
        <h1>SENIOR QUIZ HUB</h1>
        </Link>
        <hr className="divider" />
     
    </div>
  );
};

export default Header;

import { NavLink } from "react-router-dom";
const Header = () => {
    
    return (
        <div className="flex gap-3 justify-center text-red-400 text-2xl font-bold text p-8">
    <NavLink to="/about" >About</NavLink>
       <NavLink to="/contact">contact</NavLink>
      <NavLink to="/food">food</NavLink>
     <NavLink to='/Customer'>customers</NavLink>
    <NavLink to="/post">post</NavLink>
     
        </div>
    );
};

export default Header;
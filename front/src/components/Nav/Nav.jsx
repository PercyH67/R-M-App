
import SearchBar from "../Search/SearchBar"
import { Link } from "react-router-dom"

const Nav = (props) =>{
    return (
        <div className="flex bg-gray-700 h-20 justify-center items-center">
        <Link to="/about" className="text-white text-lg px-10 py-2 hover:text-gray-300 transition-colors duration-300 hover:text-xl font-bold">
            About
        </Link>
        <Link to="/home" className="text-white text-lg px-10 py-2 hover:text-gray-300 transition-colors duration-300 hover:text-xl font-bold">
            Home
        </Link>
        <Link to="/favorites" className="text-white text-lg px-10 py-2 hover:text-gray-300 transition-colors duration-300 hover:text-xl font-bold">
            Favorites
        </Link>
        <SearchBar onSearch={props.onSearch} />
        <Link to="/">
           <button className="text-white bg-primary-500 text-lg px-10 py-2 hover:text-gray-300 transition-colors hover:text-md rounded-lg font-bold">Sign off</button> 
        </Link>
        </div>

    )
}

export default Nav
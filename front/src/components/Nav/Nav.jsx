
import SearchBar from "../Search/SearchBar"
import { Link } from "react-router-dom"

const Nav = (props) =>{
    return (
        <div className="flex bg-gray-700 h-20 justify-center items-center">
        <Link to="/about" className="text-white text-lg px-10 py-2 hover:text-gray-300 transition-colors duration-300 hover:text-xl">
            About
        </Link>
        <Link to="/home" className="text-white text-lg px-10 py-2 hover:text-gray-300 transition-colors duration-300 hover:text-xl">
            Home
        </Link>
        <Link to="/favorites" className="text-white text-lg px-10 py-2 hover:text-gray-300 transition-colors duration-300 hover:text-xl">
            Favorites
        </Link>
        <SearchBar onSearch={props.onSearch} />
        </div>

    )
}

export default Nav
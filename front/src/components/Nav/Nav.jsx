
import SearchBar from "../Search/SearchBar"
import { Link } from "react-router-dom"

const Nav = (props) =>{
    return (
        <div className="flex bg-gray-700 h-20 justify-center items-center">
            <Link to="/About" className="text-white text-lg px-10 py-2">About</Link>
            <Link to="/Home" className="text-white text-lg px-10 py-2">Home</Link>
            <Link to="/Favorites" className="text-white text-lg px-10 py-2 ">Favorites</Link>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}

export default Nav
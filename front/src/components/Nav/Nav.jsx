
import SearchBar from "../Search/SearchBar"
import { Link } from "react-router-dom"

const Nav = (props) =>{
    return (
        <div>
            <Link to="/About"> About</Link>
            <Link to="/Home"> Home</Link>
            <Link to="/Favorites"> Favorites</Link>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}

export default Nav
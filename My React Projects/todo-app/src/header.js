import { Link } from "react-router-dom"

function Header() {
    return (

        <ul className="flex justify-between px-30 bg-blue-400 p-4 border border-black" >
            <Link to="/Add" > <li className="hover:bg-blue-600 rounded-lg p-3 px-5 bg-yellow-300" >Add</li>   </Link>
            <Link to="Show" > <li className="hover:bg-blue-600 rounded-lg p-3 px-5 bg-red-400" >Show</li>    </Link>
            <Link to="Done" > <li className="hover:bg-blue-600 rounded-lg p-3 px-5 bg-violet-700" >Done</li>   </Link>
        </ul>

    )
}

export default Header
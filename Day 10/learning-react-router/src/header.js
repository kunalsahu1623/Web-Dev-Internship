import { Link } from 'react-router-dom'
function Headers() {
    return (
        <div className="flex p-3 bg-blue-400 border border-black hover:bg-blue-600 ">
               <Link to="/Home">
                    Home
                </Link>
        

            <ul className="flex ml-auto">
                <Link to="/Profile" >
                    Profile
                </Link>
                <Link className="ml-10" to="/Friends" >
                    My Friend 
                </Link>
            </ul>
        </div>
    )
}

export default Headers
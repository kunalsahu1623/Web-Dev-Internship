{/* import { Link } from 'react-router-dom'*/}
function Headers() {
    return (
        <div className="flex p-3 bg-blue-400 border border-black hover:bg-blue-600 ">
               <a href="/Home">
                    Home
                </a>
        

            <ul className="flex ml-auto">
                <li> <a href="/Profile" >
                    Profile </a>
                </li>
                <li className="ml-10"> <a href="/Friends" >
                    My Friend  </a>
                </li>
            </ul>
        </div>
    )
}

export default Headers

{/* <Link to="/Friends"  className="ml-10">My Friend</Link> */}
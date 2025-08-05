function Header() {
    return (
    
        <ul className="flex justify-between px-30 bg-blue-400 p-4 border border-black" >
            <li className="hover:bg-blue-600 rounded-lg p-3 px-5 bg-yellow-300" >Add</li>
            <li className="hover:bg-blue-600 rounded-lg p-3 px-5 bg-red-400" >Show</li>
            <li className="hover:bg-blue-600 rounded-lg p-3 px-5 bg-violet-700" >Done</li>
        </ul>
    
    )
}

export default Header
import { useState } from "react"

function Search(){
    const [search, setSearch] = useState('')
    return(
        <div className="form">
            <input onChange={(e)=>setSearch(e.target.value)} value={search} placeholder="search..."/>
            <button>Advanced Search</button>
            <input onChange={(e)=>setSearch(e.target.value)} value={search} placeholder="search..."/>            
        </div>

    )
}
export default Search
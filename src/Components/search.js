import { useState } from "react"
import { addRocket } from "../utils/RocketSlice"
import { useSelector } from "react-redux";


function Search(){
    const [search, setSearch] = useState('')
    const [advanced, setadvanced] = useState(false)
    const searchFrom  = useSelector(store => store.rockets.items)[0]
    const [searchfilter, setSearchFilter] = useState(searchFrom)


    function handleSearch(){
        console.log(searchFrom.filter((i)=>(i.rocket_name.match(search))))
        // searchFrom.map((i)=>{
        //     console.log(i.rocket_name.match(search));
            // i.rocket_name.matches(search)
        
    }


    return(
        <div className="search-form">
            <input onChange={(e)=>setSearch(e.target.value)} value={search} placeholder="search..."/>
            <button onClick={handleSearch} className="btn">Submit</button>
            <button onClick={()=>setadvanced(!advanced)} className="btn">Advanced Search</button>
            {advanced && <input onChange={(e)=>setSearch(e.target.value)} value={search} placeholder="search..."/>}
        </div>
    )
}
export default Search
import { useState } from "react"
import './search.css'
import { addRocket } from "../utils/RocketSlice"
import { useSelector, useDispatch } from "react-redux"


function Search(){
    const [search, setSearch] = useState('')
    const [advanced, setadvanced] = useState(false)
    const searchFrom  = useSelector(store => store.rockets.items)
    const [searchfilter, setSearchFilter] = useState(searchFrom)

    const dispatch = useDispatch();
    function handleSearch(){
        dispatch(addRocket(searchFrom.filter((i)=>(i.rocket_name.match(search)))));
    }


    return(
        <div className="search-form">
            <div className="form">
                <div className="searchbox">
                    <input onChange={(e)=>setSearch(e.target.value)} value={search} placeholder="search..."/>
                    <button onClick={handleSearch} className="btn">Submit</button>
                </div>
                <button onClick={()=>setadvanced(!advanced)} className="btn">Advanced Search</button>
                {advanced && <input onChange={(e)=>setSearch(e.target.value)} value={search} placeholder="search..."/>}
            </div>
        </div>
    )
}
export default Search
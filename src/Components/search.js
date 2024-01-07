import { useState } from "react"
import './search.css'
import { addRocket } from "../utils/RocketSlice"
import { useSelector, useDispatch } from "react-redux"


function Search(){
    const [search, setSearch] = useState('')
    const [adsearch, setAdSearch] = useState({})
    const [advanced, setadvanced] = useState(false)
    const searchFrom  = useSelector(store => store.rockets.items)

    const dispatch = useDispatch();
    function handleSearch(){
        dispatch(addRocket(searchFrom.filter((i)=>(i.rocket_name.match(search)))));
    }

    const handleAdvanced = (val, key)=>{
        let arr = adsearch
        arr[key] = val
        setAdSearch(arr)
        console.log(adsearch)
    }

    function submitAdvanced(){
        let Data_filter = searchFrom
        if(adsearch.active.length>1){
            Data_filter = Data_filter.filter((i)=>(adsearch.active.match(i.active)))
            dispatch(addRocket(searchFrom))
        }
        if(adsearch.cost.length>1){
            Data_filter = Data_filter.filter((i)=>(i.cost_per_launch>=adsearch.cost))
            dispatch(addRocket(Data_filter))
        }
    }
    const Filters = (
        <>
            <select value={adsearch.active} onChange={(e)=>handleAdvanced(e.target.value, "active")} className="link">
                <option value="true">Active</option>
                <option value="false">InActive</option>
            </select>
            <label className="link filter" style={{color:"white"}}>search by Cost value {adsearch.cost}</label>
            <input type="range" onInput={(e)=>handleAdvanced(e.target.value,"cost")} min="100000" max="90000000" step="1000000"/>
            {/* <input onChange={(e)=>handleAdvanced(e.target.value,2)} value={adsearch[2]} placeholder="search..."/> */}
            <button onClick={submitAdvanced} className="btn">Go</button>
        </>
    )

    return(
        <div className="search-form">
            <div>
                <div className="searchbox">
                    <input onChange={(e)=>setSearch(e.target.value)} value={search} placeholder="search..."/>
                    <button onClick={handleSearch} className="btn">Submit</button>
                </div>
                <button onClick={()=>setadvanced(!advanced)} className="btn" style={{margin: "1rem",width: "-webkit-fill-available"}}>Advanced Search</button>
                <div className="searchbox">
                    {advanced && Filters}
                </div>
            </div>
        </div>
    )
}
export default Search
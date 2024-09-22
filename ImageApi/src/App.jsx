import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
const API_KEY="q_HNmzVEZdWSL-LQruQxCCGFLRZ1Llc7mNAJWyrqRNo"

function App() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState();
  const [total_pages, setTotalPage] = useState(0);
  const [user, setUser] = useState("")

  useEffect(()=>{
    if(search.trim()!== ""){
      fetchedData();
    }
    else{
      setData([]);
    }

  },[search,page])


// async function fetchedData(){
//   const res = await fetch(`https://api.unsplash.com/search/photos?query=${search}&page=${page}&per_page=10&client_id=${API_KEY}`)
//   const data=await res.json();
//   setData(data.results);
//   setTotalPage(data.total_pages);
// }


function fetchedData(){
   axios.get(`https://api.unsplash.com/search/photos?query=${search}&page=${page}&per_page=10&client_id=${API_KEY}`)
   .then((response)=>{
    setData(response.data.results)
    setTotalPage(response.data.total_pages)
   })
   .catch((err)=>{
    console.error('There was an error!', err);
   })
}
function handlePrev(){
  if(page>1){
  setPage(page-1);
  }
}
function handleNext(){
  if(page<total_pages){
    setPage(page+1);
  }
}

  return (
   <>
      <input type="text" onChange={(e)=>{setSearch(e.target.value), setPage(1)}}/>
      <div style={{display:'flex', justifyContent:"center", alignItems:"center", gap:"2rem"}}>
        {data.map((item)=>(
          <div>
          <img src={item.urls.full} style={{width:"200px", height:"150px"}} />
          <p>{item.user.username}</p></div>
        ))}
      </div>
      <button onClick={handlePrev} disabled={page===1}>prev</button>
      <span>{page}</span>
      <button onClick={handleNext} disabled={page===total_pages}>Next</button>
   </>
  )
}

export default App

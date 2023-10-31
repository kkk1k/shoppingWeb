import React from 'react'
import { useSearchParams } from 'react-router-dom'
function Productpage() {
    let [query,setQuery] = useSearchParams();
    const code = query.get("q");
    console.log(code)
  return (
    <div>"show All Product"</div>
  )
}

export default Productpage
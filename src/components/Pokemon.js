import React, {useState, useEffect } from "react";
import axios from "axios";

// 1. Get pokemon id from the route > params ID
//2. useEffect hook/Async func to update when ID changes
//3. <h1>{id}</h1> to display name
//4. Img to display pokemon dude
function Pokemon({
    match: {
        params: { id}
    }
}){

    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
    async function fetchData(){
        setIsLoading(true)
        const result = await axios(`https://pokeapi.co/api/v2/pokemon/${id}`)
        console.log(result)
        setData(result.data)
        setIsLoading(false)
    }
    fetchData();
}, [id])
if (isLoading || !data.sprites) {
    return <div>LOADING POKEMON...</div>
}  
    return(
        <div>
            <h1>{id}</h1>
            <img src={data.sprites.front_default} alt={data.name}/>
        </div>
    )
}

export default Pokemon
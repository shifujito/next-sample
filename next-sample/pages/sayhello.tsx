import { useEffect, useState } from "react";


function Sayhello(){
    const [data, setDate] = useState({name: ''})
    useEffect(() => {
        fetch('api/hello').then((res) => {
            res.json()
            console.log(res)
        })
    },[])

    return (
        <div>
            hello
        </div>
    )
}

export default Sayhello

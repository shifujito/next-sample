import { useEffect, useState } from "react";


function Sayhello(){
    const [data, setDate] = useState({name: ''})
    useEffect(() => {
        fetch('api/hello').then((res) => {
            res.json()
            console.log(res.json())
        }).then((profile) => {
            console.log(profile)
            setDate(profile)
        })
    },[])

    return (
        <div>
            hello {data.name}
        </div>
    )
}

export default Sayhello

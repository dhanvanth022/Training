import { use, useState } from "react";

function MemoDemo(){
    const [countByOne,setCountByOne] = useState(0);
    const [countByTwo,setCountByTwo] = useState(0);
    const [countByFive,setCountByFive] = useState(0);

    return(
        <div>
            <h3>Rerendering of Child Components Issues fixing with memo</h3>
            <h3>Increment By 1 Result is : {countByOne}</h3>
            <h3>Increment By 2 Result is : {countByTwo}</h3>
            <h3>Increment By 5 Result is : {countByFive}</h3>
            <div>
                <button onClick={()=>setCountByOne(countByOne+1)}>Increment By 1</button>
                <button onClick={()=>setCountByTwo(countByTwo+2)}>Increment By 2</button>
                <button onClick={()=>setCountByFive(countByFive+5)}>Increment By 5</button>
            </div>
            
        </div>
    )
}

export default MemoDemo;
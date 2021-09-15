import Horizontal from "./Horizontal";
import {useEffect, useState} from "react";
import Vertical from "./Vertical";

function MainBox(props){

    const [information, setInformation]= useState([]);

    async function fetchInformation(){
        var data= await fetch("https://jsonplaceholder.typicode.com/posts");
        var result= await data.json();
        setInformation(result);
    }

    useEffect(function(){
        fetchInformation();
    }, [])

    return(<div style={{display:"flex",flexWrap:"wrap" , background:"#bdc3c7", width:"80%",}}>
        {information.map(function(item,index){
            return !props.view ?
            <Horizontal key={index} title={item.title} body={item.body}></Horizontal>
            :<div style={{width:400}}>
                <Vertical key={index} title={item.title} body={item.body}></Vertical>
            </div>
        })}
    </div>)
}

export default MainBox;
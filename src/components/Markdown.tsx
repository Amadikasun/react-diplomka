import { useState, useEffect } from 'react';
import { marked } from 'marked';


function Markdown(props :{ children: string; } ) {
    let text :string;
    let html = "Loading...";
    function LoadFile(){
    const [post, setPost] = useState('');
    useEffect(() => {
        fetch(process.env.REACT_APP_API_URL + props.children)
            .then(res => res.text())
            .then(res => setPost(res))
            .catch(err => console.log(err));
            
    });
    let condition = post;
    console.log( condition[0])
    if (condition[0] === undefined){
        text = 'Loading...'
    } else{
        text = post
    }
    return text
    }
    
    function createHTML(){
     html = marked(LoadFile());  
     return {__html: html} 
    }
    return <div dangerouslySetInnerHTML= {createHTML()}/>
}


export default Markdown
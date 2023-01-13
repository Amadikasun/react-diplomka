import { useState, useEffect } from 'react';
import { marked } from 'marked';


function Markdown(props :{ children: string; } ) {
    let html ="Loading";
    const [post, setPost] = useState('');
    useEffect(() => {
        fetch(props.children)
            .then(res => res.text())
            .then(res => setPost(res))
            .catch(err => console.log(err));
            
    });
    
    
    function createHTML(){
     html = marked(post);  
     return {__html: html} 
    }
    return <div dangerouslySetInnerHTML= {createHTML()}/>
}


export default Markdown
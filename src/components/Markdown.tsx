import { useState, useEffect } from 'react';
import { marked } from 'marked';


function Markdown(props: string) {
  const [post, setPost] = useState('');
  useEffect(() => {  
              fetch(props)
                  .then(res => res.text())
                  .then(res => setPost(res))
                  .catch(err => console.log(err));   
  });
 const file_name = marked(post);
 return file_name
}


export default Markdown
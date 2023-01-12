import React, { useState, useEffect } from 'react';
import { marked } from 'marked';


function Markdown(props: string) {
  const [post, setPost] = useState('');
  useEffect(() => {
      import(`${props}`)
          .then(res => {
              fetch(res.default)
                  .then(res => res.text())
                  .then(res => setPost(res))
                  .catch(err => console.log(err));
          })
          .catch(err => console.log(err));
  });
 const file_name = marked(post);
 return file_name
}


export default Markdown
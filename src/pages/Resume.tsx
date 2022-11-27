import React, {useState, useEffect} from 'react';
import { Layout } from '../layout';
import MarkdownDisplay from 'markdown-to-jsx';

function Resume() {
    const file_name = 'resume.md';
 const [post, setPost] = useState('');
    useEffect(() => {
         import(`./Markdown/${file_name}`)
             .then(res => {
                 fetch(res.default)
                    .then(res => res.text())
                    .then(res => setPost(res))
                     .catch(err => console.log(err));
             })
            .catch(err => console.log(err));
    });

     
    return (
    <Layout> 
    <div className='container  w-100 bg-light'>
        <div className='col row  ps-5  bg-light  ' id='center-frame'>
        <div className='col border '>
            
            <MarkdownDisplay>
                        {post}
                    </MarkdownDisplay> 
                    </div>  
                </div>
                </div>
    </Layout>
    );
}

export default Resume;

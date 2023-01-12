import React, { useState, useEffect } from 'react';
import { Layout } from '../layout';
import MarkdownDisplay from 'markdown-to-jsx';


const MiniGame = () => {
    const file_name = 'ruleplay.md'
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
            <div className='container bg-light w-100 '>
                <div className="bg-light w-100 p-3 border">

                    <iframe className="w-100" src="https://minigamesdiplomka.netlify.app/index.html" title="Tic Tac Toe Game"></iframe>

                    
                        <MarkdownDisplay >
                            {post}
                        </MarkdownDisplay>
                    
                </div>
            </div>
        </Layout>
    );
}


export default MiniGame;

import React, {useState, useEffect} from 'react';
import { Layout } from '../layout';
import Markdown from 'markdown-to-jsx';

function Home() {
const [post, setPost] = useState('');
    useEffect(() => {
        import(`./Markdown/home.md`)
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
        <div className='container  w-100'>
            <div className='row p-3 border bg-light  ' id='center-frame'>
                <div className='col-lg-8 border indigo'>
                    <div className='justify-content-center  p-5 lh-base'>  
                    <Markdown>
                        {post}
                    </Markdown>		         
                    </div>
                </div>
                
                <div className='col-lg-4 border '>
                    
                    <div className='container justify-content-center p-3 border bg-white ' id='center-frame'>

                        <div className='row justify-content-center align-self-center text-center text-wrap fs-7 p-2' >
                            <img className='card-img-top w-60'  src='https://previews.123rf.com/images/melnikof/melnikof1704/melnikof170400174/76760411-nature-spring-blooming-poppy-concept-close-up-on-massed-display-of-blooming-red-poppies-on-a-sunny-s.jpg'></img>
                            <div className='card-text'> added last photo of nature</div>
                        </div>

                        <div className='row justify-content-center align-self-center text-center text-wrap fs-7 p-2' >
                            <img className='card-img-top w-60'  src='https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_779/https://www.adequatetravel.com/blog/wp-content/uploads/2020/02/Astronomical-Clock.jpg'></img>
                            <div className='card-text'> added last photo of monuments</div>
                        </div>

                    </div>

                </div>

            </div>
        
    </div>
  </Layout>
	);
}

export default Home;

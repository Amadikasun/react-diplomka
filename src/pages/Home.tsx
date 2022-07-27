import React, {useState, useEffect} from 'react';
import { Layout } from '../layout';
import Markdown from 'markdown-to-jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';

function Home() {
    const file_name = 'home.md'
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
            <div className=' col row  ps-5  bg-light  ' id='center-frame'>
                <div className='col-lg-8 border'>
                    <div className='justify-content-center  p-5 lh-base'>  
                    <Markdown>
                        {post}
                    </Markdown>	    
                    </div>
                </div>
                
                <div className='col-lg-4 bg-white border '>
                    
                    <div className=' justify-content-center p-3  ' id='center-frame'>

                        <div className='row justify-content-center align-self-center text-center text-wrap fs-7 p-2' >
                            <img className='card-img-top w-75'  src='https://previews.123rf.com/images/melnikof/melnikof1704/melnikof170400174/76760411-nature-spring-blooming-poppy-concept-close-up-on-massed-display-of-blooming-red-poppies-on-a-sunny-s.jpg' alt="poppies"></img>
                            <div className='card-text'> added last photo of nature</div>
                        </div>

                        <div className='row justify-content-center align-self-center text-center text-wrap fs-7 p-2' >
                            <img className='card-img-top w-75 '  src='https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_779/https://www.adequatetravel.com/blog/wp-content/uploads/2020/02/Astronomical-Clock.jpg' alt="Clock"></img>
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

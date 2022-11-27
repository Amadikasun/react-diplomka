import React, {useState, useEffect} from 'react';
import { Layout } from '../layout';
import { Card, Button } from 'react-bootstrap';
import MarkdownDisplay from 'markdown-to-jsx';

function Gallery(props:any) {
   const file_name = 'gallery.md'
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
     
  // const [Images, setImages] = useState([]);
 
  // useEffect(() => {
  //  if (props.detail.images && props.detail.images.length > 0) {
  //   let images:any[] = [];
  //   console.log(images);

  //   props.detail.images.map((item:any) => {
  //    images.push({
  //     original: `http://localhost:5000/${item}`,
  //     thumbnail: `http://localhost:5000/${item}`,
  //    });
  //   });
  //   setImages(images);
  //  }
  // }, [props.detail]);
 

 return (
<Layout>
  
      <div className='container  w-100 bg-light'>
        <div className='col row  ps-5  bg-light  ' id='center-frame'>
        <div className='col border '>
                    <div className='justify-content-center  p-5 lh-base'>  
                    <MarkdownDisplay>
                        {post}
                    </MarkdownDisplay>
                     
                    </div>
                </div>


<div>
    {/* <iframe title={Images?.name} 
    src={Images?}/> */}
   </div>


            </div>
        </div>
        </Layout>
          );
} ;

export default Gallery;

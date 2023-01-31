
import { Layout } from '../layout';
import Markdown from '../components/Markdown';
import ImageList from '../components/Images';



function Gallery(props:any) {
   const fileName = `./Markdown/gallery.md`;
  

 return (
<Layout>
  
      <div className='container  w-100 bg-light'>
        <div className='col row  ps-5  bg-light  ' id='center-frame'>
        <div className='col border h-100'>
                    <div className='justify-content-center  p-5 lh-base'>  
                    <Markdown>{fileName}</Markdown>
                     
                    </div>
                    <ImageList/>
                </div>


<div>
   </div>


            </div>
        </div>
        </Layout>
          );
} ;

export default Gallery;

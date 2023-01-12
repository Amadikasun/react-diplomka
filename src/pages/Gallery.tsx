
import { Layout } from '../layout';
import Markdown from '../components/Markdown';
// import { Card, Button } from 'react-bootstrap';


function Gallery(props:any) {
   const fileName = `./Markdown/gallery.md`;
   function MarkdownInsert(){
    function createMarkup() {
        return {
            __html: `${Markdown(fileName)}`
        }
    }

    return <div dangerouslySetInnerHTML={createMarkup()} />;
}

 

 return (
<Layout>
  
      <div className='container  w-100 bg-light'>
        <div className='col row  ps-5  bg-light  ' id='center-frame'>
        <div className='col border '>
                    <div className='justify-content-center  p-5 lh-base'>  
                    <MarkdownInsert></MarkdownInsert>
                     
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

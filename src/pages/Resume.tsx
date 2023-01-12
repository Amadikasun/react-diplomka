
import { Layout } from '../layout';
import Markdown from '../components/Markdown';

function Resume() {
    const fileName = `./Markdown/resume.md`;
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
            
        <MarkdownInsert></MarkdownInsert>
                    </div>  
                </div>
                </div>
    </Layout>
    );
}

export default Resume;

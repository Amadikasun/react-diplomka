
import { Layout } from '../layout';
import Markdown from '../components/Markdown';

function Resume() {
    let fileName = `/markdown/resume.md`;
     
    return (
    <Layout> 
    <div className='container  w-100 bg-light'>
        <div className='col row  ps-5  bg-light  ' id='center-frame'>
        <div className='col border '>
            
        <Markdown>{fileName}</Markdown>
                    </div>  
                </div>
                </div>
    </Layout>
    );
}

export default Resume;

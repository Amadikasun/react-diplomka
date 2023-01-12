
import { Layout } from '../layout';
import Markdown from '../components/Markdown';


const MiniGame = () => {
    const fileName = `./Markdown/ruleplay.md`;

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
            <div className='container bg-light w-100 '>
                <div className="bg-light w-100 p-3 border">

                    <iframe className="w-100" src="https://minigamesdiplomka.netlify.app/index.html" title="Tic Tac Toe Game"></iframe>

                    
                    <MarkdownInsert></MarkdownInsert>
                    
                </div>
            </div>
        </Layout>
    );
}


export default MiniGame;

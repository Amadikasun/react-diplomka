
import { Layout } from '../layout';
import Markdown from '../components/Markdown';


const MiniGame = () => {
    let fileName = `./Markdown/ruleplay.md`;



    return (
        <Layout>
            <div className='container bg-light w-100 '>
                <div className="bg-light w-100 p-3 border">

                    <iframe className="w-100" src="https://minigamesdiplomka.netlify.app/index.html" title="Tic Tac Toe Game"></iframe>

                    
                    <Markdown>{fileName}</Markdown>
                    
                </div>
            </div>
        </Layout>
    );
}


export default MiniGame;

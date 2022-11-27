import axios from 'axios';
import React, {useState, useEffect} from 'react';
import { useQuery } from 'react-query';
import { Layout } from '../layout';
import MarkdownDisplay from 'markdown-to-jsx';

interface GameData {
    name: string,
    url: string,
}

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
    const [selectedGame, setSelectedGame] = useState<GameData>();

    useQuery(
        ['fetchGames'],
        async () => {
            const res = await axios.get('http://localhost:5000/games');
            setSelectedGame(res.data.games.filter((x: GameData) => x.name === 'tictactoe')[0]);
        }
    );

    return (
        <Layout> 
            <div className='container bg-light w-100 '>
                <iframe
                    height={600}
                    width={600}
                    title={selectedGame?.name}
                    src={selectedGame?.url}
                />
           

                    <MarkdownDisplay>
                        {post}
                    </MarkdownDisplay>
                    
                     </div>
        </Layout>
    );
}


export default MiniGame;

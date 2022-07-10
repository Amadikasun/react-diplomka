import React, {useState, useEffect} from 'react';
import { Layout } from '../layout';
import { Card, Button } from 'react-bootstrap';
import Markdown from 'markdown-to-jsx';
import 'react-bootstrap';

function Gallery() {
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
        <div className='col row  ps-5  bg-light  ' id='center-frame'>
        <Markdown>
                        {post}
                    </Markdown>	
{/*
    <section className='section'>
  <h2 className='h2'>Table of content</h2>
  <div className='container'>
    
     <img src='https://previews.123rf.com/images/melnikof/melnikof1704/melnikof170400174/76760411-nature-spring-blooming-poppy-concept-close-up-on-massed-display-of-blooming-red-poppies-on-a-sunny-s.jpg'> </img> 
    
  </div>
</section>
*/}
{/* <div className='col m-0 p-3 '  > 
<Card  style={{ width: '25rem'}}>
  <Card.Img variant="top" src="https://previews.123rf.com/images/melnikof/melnikof1704/melnikof170400174/76760411-nature-spring-blooming-poppy-concept-close-up-on-massed-display-of-blooming-red-poppies-on-a-sunny-s.jpg" />
  <Card.Body>
    <Card.Title>Pernštejsnské jestřabí a okolí</Card.Title>
    <Card.Text>
      Fotky přírody a historických památek z Pernštejského jestřabí a blízkého okolí.
    </Card.Text>
    <Button variant="primary">Chci vidět víc</Button>
  </Card.Body>
</Card>     
</div>

<div className='col p-3'  > 
<Card  style={{ width: '25rem' }}>
  <Card.Img variant="top" src="https://previews.123rf.com/images/melnikof/melnikof1704/melnikof170400174/76760411-nature-spring-blooming-poppy-concept-close-up-on-massed-display-of-blooming-red-poppies-on-a-sunny-s.jpg" />
  <Card.Body>
    <Card.Title>Pernštejsnské jestřabí a okolí</Card.Title>
    <Card.Text>
      Fotky přírody a historických památek z Pernštejského jestřabí a blízkého okolí.
    </Card.Text>
    <Button variant="primary">Chci vidět víc</Button>
  </Card.Body>
</Card>     
</div>
<div className='col p-3'  > 
<Card  style={{ width: '25rem' }}>
  <Card.Img variant="top" src="https://previews.123rf.com/images/melnikof/melnikof1704/melnikof170400174/76760411-nature-spring-blooming-poppy-concept-close-up-on-massed-display-of-blooming-red-poppies-on-a-sunny-s.jpg" />
  <Card.Body>
    <Card.Title>Pernštejsnské jestřabí a okolí</Card.Title>
    <Card.Text>
      Fotky přírody a historických památek z Pernštejského jestřabí a blízkého okolí.
    </Card.Text>
    <Button variant="primary">Chci vidět víc</Button>
  </Card.Body>
</Card>     
</div>
<div className='col p-3'  > 
<Card  style={{ width: '25rem' }}>
  <Card.Img variant="top" src="https://previews.123rf.com/images/melnikof/melnikof1704/melnikof170400174/76760411-nature-spring-blooming-poppy-concept-close-up-on-massed-display-of-blooming-red-poppies-on-a-sunny-s.jpg" />
  <Card.Body>
    <Card.Title>Pernštejsnské jestřabí a okolí</Card.Title>
    <Card.Text>
      Fotky přírody a historických památek z Pernštejského jestřabí a blízkého okolí.
    </Card.Text>
    <Button variant="primary">Chci vidět víc</Button>
  </Card.Body>
</Card>     
</div>

<div className='col p-3'  > 
<Card  style={{ width: '25rem' }}>
  <Card.Img variant="top" src="https://previews.123rf.com/images/melnikof/melnikof1704/melnikof170400174/76760411-nature-spring-blooming-poppy-concept-close-up-on-massed-display-of-blooming-red-poppies-on-a-sunny-s.jpg" />
  <Card.Body>
    <Card.Title>Pernštejsnské jestřabí a okolí</Card.Title>
    <Card.Text>
      Fotky přírody a historických památek z Pernštejského jestřabí a blízkého okolí.
    </Card.Text>
    <Button variant="primary">Chci vidět víc</Button>
  </Card.Body>
</Card>     
</div>

<div className='col p-3 w-50'  > 
<Card  style={{ width: '25rem' }}>
  <Card.Img variant="top" src="https://previews.123rf.com/images/melnikof/melnikof1704/melnikof170400174/76760411-nature-spring-blooming-poppy-concept-close-up-on-massed-display-of-blooming-red-poppies-on-a-sunny-s.jpg" />
  <Card.Body>
    <Card.Title>Pernštejsnské jestřabí a okolí</Card.Title>
    <Card.Text>
      Fotky přírody a historických památek z Pernštejského jestřabí a blízkého okolí.
    </Card.Text>
    <Button variant="primary">Chci vidět víc</Button>
  </Card.Body>
</Card>     
</div> */}



            </div>
        </div>
        
        </Layout>);
}
export default Gallery;

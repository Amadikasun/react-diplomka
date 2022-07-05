import React from 'react';
import { Layout } from '../layout';
import { Card, Button } from 'react-bootstrap';

const Recipes = () => 
<Layout>
    <div className='container bg-light w-100 '>
    <div className='row p-3 border bg-light ' id='center-frame'>

<div className='col p-3'  > 
<Card style={{ width: '20rem'}}>
  <Card.Body>
    <Card.Title>Pizza </Card.Title>
    <Card.Img variant="top" src="https://www.arhavirestaurantbatumi.com/wp-content/uploads/2021/05/classic-homemade-pizza-dough-close.jpg" />
    <Card.Text>
      Nejlepší pizza do 90 minut i s přípravou.
    </Card.Text>
    <Button variant="primary">Chci vidět víc</Button>
  </Card.Body>
</Card>     
</div>

<div className='col p-3'  > 
<Card style={{ width: '20rem' }}>
  <Card.Body>
    <Card.Title>Bublanina</Card.Title>
    <Card.Img variant="top" src="https://www.klasicke-recepty.cz/wp-content/uploads/2021/09/bublanina-recept.jpg" />
    <Card.Text>
      Velmi chutná bublanina jako od babičky.
    </Card.Text>
    <Button variant="primary">Chci vidět víc</Button>
  </Card.Body>
</Card>     
</div>


            </div>
        </div>
        </Layout>;
export default Recipes;

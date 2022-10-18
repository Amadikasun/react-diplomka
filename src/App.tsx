import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Home, Gallery, MiniGame, Resume } from './pages';
import { Nav } from './layout';

function App() {
  return (
		<div className='apps'>
			<Router>
				<header>
					<div className='col-2 align-self-center '>
						<img src={logo} className=' App-logo' alt='logo' />
					</div>

					<div className='col-3 text-center align-self-center '>
						Amadikasun
					</div>

					<div className='col-6 text-center'>
						<Nav />
						{/* <li className="d-flex d-lg-block justify-content-center p-3 nav-link">
        <div className="toggle"></div>
      </li> */}
					</div>
				</header>
			<Routes>
					<Route  path='/MiniGame' element={<MiniGame />}>
						{' '}
					</Route>
					<Route  path='/Gallery' element={<Gallery />}>
					</Route>
					
					<Route  path='/Resume' element={<Resume />}>
					</Route>
					<Route  path='/' element={<Home />}>	
					</Route>
				</Routes>
			</Router>
			<footer className=' bg-indido text-center text-lg-start text-white'>
        <div className="container p-2">
            <section className="mb-1">
                <p>
                    
                </p>
            </section>
        </div>
        
        <div className="text-center p-2 bg-dark">
            © 2022 Copyright: Jana Turoňová
        </div>
       
			</footer>







	</div>
	
  );
}

export default App;

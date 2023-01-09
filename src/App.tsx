import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Home, Gallery, MiniGame, Resume } from './pages';
import { Nav } from './layout';
import { QueryClient, QueryClientProvider } from 'react-query';

function App() {
	const queryClient = new QueryClient()
  return (
	<QueryClientProvider client={queryClient}>
		<div className='apps'>
			<Router>
				<header>
					<div className='col-3 align-self-center '>
						<img src={logo} className=' App-logo' alt='logo' />
					</div>

					

					<div className='col-9 text-center'>
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
			<footer className='d-flex flex-column  bg-indido text-center text-lg-start text-white'>
				<div className="text-center">
			<a className="  d-inline col-4 text-decoration-none button" href='https://github.com/Amadikasun'>Github </a>
        <a className=" d-inline col-4 p-2 text-decoration-none button" href='https://github.com/Amadikasun'>Instagram </a>
        <a className="d-inline col-4  text-decoration-none button" href="https://www.linkedin.com/in/jana-turonova/">LinkedIn </a>
        </div>
        <div className="text-center p-2 bg-dark">
            © 2022 Copyright: Jana Turoňová
        </div>
       
			</footer>


	</div>
	</QueryClientProvider>
	
  );
}

export default App;

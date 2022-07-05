import React, { Children } from 'react';
import Nav from './Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
const Layout = (props: any) => (
	<div className=' text-black'>{props.children}</div> /* create toggle*/
);
export { Layout, Nav };

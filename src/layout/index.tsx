import React from 'react';
import Nav from './Nav';
const Layout = (props: any) => (
	<div className=' text-black heightmain ' id='main-bg'>{props.children}</div> /* create toggle*/
);
export { Layout, Nav };

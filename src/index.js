import React from 'react';
import reactDom from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import Profile from './components/profile'

const element = <h1>Hello world</h1>;

reactDom.render(<Profile/>, document.getElementById('root'));
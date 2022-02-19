import React from 'react';

import './homepage.style.scss';
import Directory from '../../components/directory/directory.component.jsx';

// Here I can pass history to child components of homepage and so on
const HomePage = ({ history }) => (
	<div className='homepage'>
		<Directory></Directory>
	</div>
);

export default HomePage;

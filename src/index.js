import React from 'react';
import { render } from 'react-dom';
import './index.css';
import {Provider} from './context/context'

import App from './App';

render( <Provider> <App /> </Provider>, document.getElementById('root'));

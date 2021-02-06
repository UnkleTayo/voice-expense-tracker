import React from 'react';
import { render } from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import './index.css';
import { Provider } from './context/context';

import App from './App';

render(
  <SpeechProvider appId='88efcccf-de83-4cd4-8c77-d1367c6188f7' language='en-US'>
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);

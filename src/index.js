import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store'
import { Provider } from 'react-redux'
import App from './components/App';
import {QueryClient, QueryClientProvider} from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'


const queryClient = new QueryClient()
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={configureStore}>
      <App />
    </Provider>
    <ReactQueryDevtools initialIsOpen={true} />
  </QueryClientProvider>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


//function to delay fetch responses 
if (process.env.NODE_ENV === 'development') {
  const delay = 2000;
  let oldFetch = fetch;

  // eslint-disable-next-line
  fetch = async (url, options) => {
    let promise = await oldFetch(url, options);

    return await new Promise(resolve => setTimeout(() => resolve(promise), delay));
  }
}
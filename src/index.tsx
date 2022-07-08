import * as React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Link, Routes  } from 'react-router-dom'
import TypeAsseryion from './concepts/typeAsseryion';
import NotFound from './notFound/notFound';
import './App.css';
// import {AsyncAwait} from './concepts/asyncAwait';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render( 
  <Router>
     <Routes >
            <Route path="/typeAssertion" element={<TypeAsseryion />} />
            {/* <Route path="/async" element={<AsyncAwait />} /> */}
            <Route path="/" element={<App />} />
            <Route path="*" element={<NotFound/>}/>
            {/* <Route  path="/bar" component={Bar} /> */}
          </Routes >
    </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// const minute = currentDate.getMinutes();
// const second = currentDate.getSeconds();
// const millisecond = currentDate.getMilliseconds();
// console.log(`Current Date: ${currentDate}`);
// console.log(`Timestamp: ${timestamp}`);
// console.log(`Day of Month: ${dayOfMonth}`);
// console.log(`Month: ${month}`);
// console.log(`Year: ${year}`);
// console.log(`Hour: ${hour}`);
// console.log(`Minute: ${minute}`);
// console.log(`Second: ${second}`);
// console.log(`Millisecond: ${millisecond}`);
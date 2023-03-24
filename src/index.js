import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BookStoreContext } from './Components/BookStoreContext/BookStoreContext';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import ErrorBoundry from './Components/ErrorBoundry/ErrorBoundry';
import BookstoreService from './Services/bookstore-service';
import store from './store';

const bookstoreService = new BookstoreService();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundry >
        <BookStoreContext.Provider value={bookstoreService}>
          {/* <Router>
            <Routes>
              <Route path="/" element={<App />} />
            </Routes>
          </Router> */}
          <App />
        </BookStoreContext.Provider>
      </ErrorBoundry >
    </Provider>
  </React.StrictMode>
);



import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

function App() {
  const routes = useRoutes();

  return (
    <Router>
      <Header />
      <main className='main'>{routes}</main>
      <Footer />
    </Router>
  );
}

export default App;

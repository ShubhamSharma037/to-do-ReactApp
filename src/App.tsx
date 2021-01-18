import React from 'react';
import './App.css';
import ListBody from './Components/ListBody/ListBody';
import Layout from './UI/Layout/Layout';


const App : React.FC = () => {
  return (
    <div className="App">
      <Layout>
        <ListBody/>
      </Layout>
    </div>
  );
}

export default App;

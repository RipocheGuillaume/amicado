import React from 'react';
import './App.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DataProvider } from '../../dataContext/dataContext';
import Header from '../elements/Header';
import Home from '../elements/Home';
import Songs from '../Pages/Songs/Songs';
import Pictures from '../elements/Pictures';

const queryClient = new QueryClient();

function App() {
  const [menuChoice, setMenuChoice] = React.useState('pageHome');
  const renderContent = () => {
    if (menuChoice === 'pageHome') {
      return <Home />;
    }
    if (menuChoice === 'pageSongs') {
      return <Songs />;
    }
    if (menuChoice === 'pagePictures') {
      return <Pictures />;
    }
    return 'Erreur';
  };
  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider>
        <div className="App">
          <Header SetMenuChoice={setMenuChoice} />
          {renderContent()}
        </div>
      </DataProvider>
    </QueryClientProvider>
  );
}

export default App;

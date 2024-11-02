import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// Crée le contexte
const DataContext = createContext();

// Déclare le DataProvider comme une fonction classique
export function DataProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('src/data/data.json')
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error('Erreur de chargement du JSON:', error));
  }, []);

  if (!data) return <div>Chargement...</div>;

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

// Validation des props pour `DataProvider`
DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContext;

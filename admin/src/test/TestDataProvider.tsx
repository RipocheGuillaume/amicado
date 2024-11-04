import React, { useEffect } from "react";
import { dataProvider } from "../dataProvider";

const TestDataProvider = () => {
  useEffect(() => {
    dataProvider
      .getList("years", {
        pagination: { page: 1, perPage: 10 },
        sort: { field: "id", order: "ASC" },
        filter: {},
      })
      .then((response) => {
        console.log("Total:", response.total); // Vérifiez que `total` est un entier
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des données:", error);
      });
  }, []);

  return <div>Vérifiez la console pour voir le total des résultats.</div>;
};

export default TestDataProvider;

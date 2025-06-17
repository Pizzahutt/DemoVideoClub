import React, { useEffect, useState } from "react";
import data from "../../../data/sample.json";

// Esto normalmente lo manejaria una slice de redux con un fetch pero en este caso
// lo hacemos asi para simplificar y no tener que configurar redux ni nada por el estilo

const DataLoader = ({ programType, children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(false);

    const timeout = setTimeout(() => {
      if (Math.random() < 0.2) {
        setError(true);
        setLoading(false);
      } else {
        const filtered = data.entries
          .filter(
            (entry) =>
              entry.programType === programType && entry.releaseYear >= 2010
          )
          .sort((a, b) => a.title.localeCompare(b.title))
          .slice(0, 20);
        setFilteredData(filtered);
        setLoading(false);
      }
    }, 1200);

    return () => clearTimeout(timeout);
  }, [programType]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div> Oops, something went wrong ... </div>;

  return children(filteredData);
};

export default DataLoader;

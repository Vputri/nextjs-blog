import React from "react";  
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query }) => {  
  const { data, loading, error, fetchMore } = useQuery(query);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Artikel tidak tersedia</p>;
  return children({ data, fetchMore });
};

export default Query;
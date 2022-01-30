import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query }) => {  
  const { data, loading, error, fetchMore } = useQuery(query);

  if (loading) return (
  	<div className="mx-3 px-5">
  		<p className="mx-4 px-5">Loading</p>
  	</div>
  )

  if (error) return (
  	<div className="mx-3 px-5">
  		<p className="mx-4 px-5">Artikel tidak tersedia</p>
  	</div>
  )

  return children({ data, fetchMore });
};

export default Query;
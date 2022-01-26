import PropTypes from "prop-types";
import Card from "./card";

const Articles = ({ articles }) => {
  const displayArticle = articles.edges.map((edge) => {
    return <Card article={edge.node} key={`article__${edge.node.id}`} />;
  });

  return (
    <div className="row g-4 filter-container overflow-hidden"
    	data-isotope='{"layoutMode": "masonry"}'>
    	{displayArticle}
    </div>
  );
};

export default Articles;
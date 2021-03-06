import Moment from "react-moment";

const Card = ({ article }) => {
  const imageUrl = article.image;
  if (imageUrl === '')
    return (
      <div className="col-sm-6 col-lg-4 grid-item">
        <div className="card bg-light p-3">
          <div className="card-body">
            <a href="#" className="badge bg-success text-white mb-2">{article.Category.name}</a>
            <h5 className="card-title"><a href="#">{article.title}</a></h5>
            <p>{article.description}</p>
            <div className="d-flex justify-content-between">
              <h6 className="mb-0"><a href="#">{article.author.name}</a></h6>
              <span className="small">{article.published_at}</span>
            </div>
          </div>
        </div>
      </div>
  )

  return (
      <div className="col-sm-6 col-lg-4 grid-item">
        <div className="card">
          <div className="overflow-hidden rounded-3">
            <img src={imageUrl} 
              className="card-img" 
              alt="course image"
              onError={(e) => 
                      {e.target.src = '/assets/images/event/02.jpg'; 
                        e.target.onError = null;}}
            />

            <div className="bg-overlay bg-dark opacity-4"></div>
            <div className="card-img-overlay d-flex align-items-start p-3">

              <a href="#" className="badge bg-danger text-white">{article.Category.name}</a>
            </div>
          </div>

          <div className="card-body px-3">

            <h5 className="card-title"><a href="#">{article.title}</a></h5>
            <p className="text-truncate-2">{article.description}</p>

            <div className="d-flex justify-content-between">
              <h6 className="mb-0"><a href="#">{article.author.name}</a></h6>
              <span className="small">
                <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
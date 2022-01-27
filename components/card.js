import Moment from "react-moment";

const Card = ({ article }) => {
  const imageUrl = article.image;
  if (imageUrl === '')
    return (
      <div class="col-sm-6 col-lg-4 grid-item">
        <div class="card bg-light p-3">
          <div class="card-body">
            <a href="#" class="badge bg-success text-white mb-2">{article.Category.name}</a>
            <h5 class="card-title"><a href="#">{article.title}</a></h5>
            <p>{article.description}</p>
            <div class="d-flex justify-content-between">
              <h6 class="mb-0"><a href="#">{article.author.name}</a></h6>
              <span class="small">{article.published_at}</span>
            </div>
          </div>
        </div>
      </div>
  )

  return (
      <div class="col-sm-6 col-lg-4 grid-item">
        <div class="card">
          <div class="overflow-hidden rounded-3">
            <img src={imageUrl} 
              class="card-img" 
              alt="course image"
              onError={(e) => 
                      {e.target.src = '/assets/images/event/02.jpg'; 
                        e.target.onError = null;}}
            />

            <div class="bg-overlay bg-dark opacity-4"></div>
            <div class="card-img-overlay d-flex align-items-start p-3">

              <a href="#" class="badge bg-danger text-white">{article.Category.name}</a>
            </div>
          </div>

          <div class="card-body px-3">

            <h5 class="card-title"><a href="#">{article.title}</a></h5>
            <p class="text-truncate-2">{article.description}</p>

            <div class="d-flex justify-content-between">
              <h6 class="mb-0"><a href="#">{article.author.name}</a></h6>
              <span class="small">
                <Moment format="MMM Do YYYY">{article.published_at}</Moment>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Card;
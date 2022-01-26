import Head from 'next/head'
import Layout from '../components/layout'
import Articles from "../components/articles";
import Query from "../components/query";
import ARTICLES_QUERY from "../queries/article/articles";
import { useQuery } from '@apollo/client';

const Home = () => {
  const { error, data, loading, fetchMore } = useQuery(ARTICLES_QUERY)

  if (error) {
    console.error(error);
    return (
    <Layout home>
      <section className="py-5">
        <div className="container">
          <div className="row position-relative">
            <figure className="position-absolute top-0 start-0 d-none d-sm-block">  
              <svg width="22px" height="22px" viewBox="0 0 22 22">
                <polygon className="fill-purple" points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7 "></polygon>
              </svg>
            </figure>
            
            <div className="col-lg-10 mx-auto text-center position-relative">
              <figure className="position-absolute top-50 end-0 translate-middle-y">
                <svg width="27px" height="27px">
                  <path className="fill-orange" d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z"></path>
                </svg>
              </figure>

              <h1>Blog Masonry</h1>
              <div className="d-flex justify-content-center">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                  </ol>
                </nav>

              </div>
            </div>
          </div>
          <p className="py-2">Artikel tidak tersedia</p>
        </div>
      </section>
    </Layout>
    );
  }

  return (
    <Layout home>
      <section className="py-5">
        <div className="container">
          <div className="row position-relative">
            <figure className="position-absolute top-0 start-0 d-none d-sm-block">  
              <svg width="22px" height="22px" viewBox="0 0 22 22">
                <polygon className="fill-purple" points="22,8.3 13.7,8.3 13.7,0 8.3,0 8.3,8.3 0,8.3 0,13.7 8.3,13.7 8.3,22 13.7,22 13.7,13.7 22,13.7 "></polygon>
              </svg>
            </figure>
            
            <div className="col-lg-10 mx-auto text-center position-relative">
              <figure className="position-absolute top-50 end-0 translate-middle-y">
                <svg width="27px" height="27px">
                  <path className="fill-orange" d="M13.122,5.946 L17.679,-0.001 L17.404,7.528 L24.661,5.946 L19.683,11.533 L26.244,15.056 L18.891,16.089 L21.686,23.068 L15.400,19.062 L13.122,26.232 L10.843,19.062 L4.557,23.068 L7.352,16.089 L-0.000,15.056 L6.561,11.533 L1.582,5.946 L8.839,7.528 L8.565,-0.001 L13.122,5.946 Z"></path>
                </svg>
              </figure>

              <h1>Blog Masonry</h1>
              <div className="d-flex justify-content-center">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Library</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative pt-0">
        <div className="container">
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles articles={articles} />
            }}
          </Query>


          <div className="text-center mt-4">
            {data.articles.pageInfo.hasNextPage && (<button
              className="btn btn-primary-soft mb-0"
                onClick={() => {
                  const { endCursor } = data.articles.pageInfo;
                  fetchMore({
                    variables: { after: endCursor },
                    updateQuery: (prevResult, { fetchMoreResult }) => {
                      fetchMoreResult.articles.edges = [
                        ...prevResult.articles.edges,
                        ...fetchMoreResult.articles.edges
                      ];
                      return fetchMoreResult;
                    }
                  });
                }}
              >Load more
                <i className="fas fa-sync ms-2"></i>
              </button>
            )}
          </div>

        </div>
      </section>
    </Layout>
  );
};

export default Home;
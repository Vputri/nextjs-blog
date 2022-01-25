import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
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
          <div className="row g-4 filter-container overflow-hidden" data-isotope='{"layoutMode": "masonry"}'>

          {allPostsData.map(({ id, date, title }) => (
            <div className="col-sm-6 col-lg-4 grid-item">
              <div className="card">
                <div className="overflow-hidden rounded-3">
                  <img src="/assets/images/event/02.jpg" className="card-img" alt="course image"/>

                  <div className="bg-overlay bg-dark opacity-4"></div>
                  <div className="card-img-overlay d-flex align-items-start p-3">

                    <a href="#" className="badge bg-danger text-white">{id}</a>
                  </div>
                </div>


                <div className="card-body px-3">

                  <h5 className="card-title"><a href="#">{title}</a></h5>
                  <p className="text-truncate-2">Affronting imprudence do he he everything. Offered chiefly farther of my no colonel shyness. Such on help ye some door if in. Laughter proposal laughing any son law consider. Needed except up piqued an.  </p>

                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0"><a href="#">Frances Guerrero</a></h6>
                    <span className="small">{date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          </div>

          <div className="text-center mt-4">
            <a href="#" className="btn btn-primary-soft mb-0">Load more<i className="fas fa-sync ms-2"></i></a>
          </div>

        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

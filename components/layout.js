import Head from 'next/head'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <meta charset="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"/>
        
        <link rel="stylesheet" type="text/css" href="assets/vendor/font-awesome/css/all.min.css"/>
        <link rel="stylesheet" type="text/css" href="assets/vendor/bootstrap-icons/bootstrap-icons.css"/>
        <link rel="stylesheet" type="text/css" href="assets/vendor/glightbox/css/glightbox.css"/>
      </Head>

      <header className="navbar-light navbar-sticky">
        <nav className="navbar navbar-expand-xl">
          <div className="container">
            <a className="navbar-brand" href="index.html">
              <img 
                className="light-mode-item navbar-brand-item" 
                src="/assets/images/logo.svg"/ >
              <img
                className="dark-mode-item navbar-brand-item" 
                src="/assets/images/logo-light.svg" 
                alt="logo"/>
            </a>

            <button className="navbar-toggler ms-auto" 
              type="button" 
              data-bs-toggle="collapse" 
              data-bs-target="#navbarCollapse" 
              aria-controls="navbarCollapse" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
              <span className="navbar-toggler-animation">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            <div className="navbar-collapse w-100 collapse" id="navbarCollapse">

              <ul className="navbar-nav navbar-nav-scroll mx-auto">

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" 
                    href="#" 
                    id="demoMenu" 
                    data-bs-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false">Demos
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="demoMenu">
                    <li> <a className="dropdown-item" href="index.html">Home Default</a></li>
                    <li> <a className="dropdown-item" href="index-2.html">Home Education</a></li>
                    <li> <a className="dropdown-item" href="index-3.html">Home Academy</a></li>
                    <li> <a className="dropdown-item" href="index-4.html">Home Course</a></li>
                    <li> <a className="dropdown-item" href="index-5.html">Home University</a></li>
                    <li> <a className="dropdown-item" href="index-6.html">Home Kindergarten</a></li>
                    <li> <a className="dropdown-item" href="index-7.html">Home Landing</a></li>
                    <li> <a className="dropdown-item" href="index-8.html">Home Tutor</a></li>
                    <li> <hr className="dropdown-divider"/></li>
                    <li> <a className="dropdown-item" href="request-demo.html">Request a demo</a></li>
                    <li> <a className="dropdown-item" href="book-className.html">Book a Class</a></li>
                    <li> <a className="dropdown-item" href="request-access.html">Free Access</a></li>
                    <li> <a className="dropdown-item" href="university-admission-form.html">Admission Form</a></li>

                    <li> <hr className="dropdown-divider"/></li>
                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Dropdown levels</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">

                        <li className="dropdown-submenu dropend">
                          <a className="dropdown-item dropdown-toggle" href="#">Dropdown (end)</a>
                          <ul className="dropdown-menu" data-bs-popper="none">
                            <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                            <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                          </ul>
                        </li>
                        <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>

                        <li className="dropdown-submenu dropstart">
                          <a className="dropdown-item dropdown-toggle" href="#">Dropdown (start)</a>
                          <ul className="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                            <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                            <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                          </ul>
                        </li>
                        <li> <a className="dropdown-item" href="#">Dropdown item</a> </li>
                      </ul>
                    </li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <ul className="dropdown-menu" aria-labelledby="pagesMenu">

                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Course</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="course-grid.html">Course Grid Classic</a></li>
                        <li> <a className="dropdown-item" href="course-grid-2.html">Course Grid Minimal</a></li>
                        <li> <hr className="dropdown-divider"/></li>
                        <li> <a className="dropdown-item" href="course-list.html">Course List Classic</a></li>
                        <li> <a className="dropdown-item" href="course-list-2.html">Course List Minimal</a></li>
                        <li> <hr className="dropdown-divider"/></li>
                        <li> <a className="dropdown-item" href="course-detail.html">Course Detail Classic</a></li>
                        <li> <a className="dropdown-item" href="course-detail-min.html">Course Detail Minimal</a></li>
                        <li> <a className="dropdown-item" href="course-detail-adv.html">Course Detail Advance</a></li>
                        <li> <a className="dropdown-item" href="course-video-player.html">Course Full Screen Video</a></li>
                      </ul>
                    </li>

                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">About</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="about.html">About Us</a></li>
                        <li> <a className="dropdown-item" href="contact-us.html">Contact Us</a></li>
                        <li> <a className="dropdown-item" href="blog-grid.html">Blog Grid</a></li>
                        <li> <a className="dropdown-item" href="blog-masonry.html">Blog Masonry</a></li>
                        <li> <a className="dropdown-item" href="blog-detail.html">Blog Detail</a></li>
                        <li> <a className="dropdown-item" href="pricing.html">Pricing</a></li>
                      </ul>
                    </li>

                    <li> <a className="dropdown-item" href="instructor-list.html">Instructor List</a></li>
                    <li> <a className="dropdown-item" href="instructor-single.html">Instructor Single</a></li>
                    <li> <a className="dropdown-item" href="become-instructor.html">Become an Instructor</a></li>

                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#">Authentication</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="sign-in.html">Sign In</a></li>
                        <li> <a className="dropdown-item" href="sign-up.html">Sign Up</a></li>
                        <li> <a className="dropdown-item" href="forgot-password.html">Forgot Password</a></li>
                      </ul>
                    </li>

                    <li> <a className="dropdown-item" href="faq.html">FAQs</a></li>
                    <li> <a className="dropdown-item" href="error-404.html">Error 404</a></li>
                    <li> <a className="dropdown-item" href="coming-soon.html">Coming Soon</a></li>
                    <li> <a className="dropdown-item" href="cart.html">Cart</a></li>
                    <li> <a className="dropdown-item" href="checkout.html">Checkout</a></li>
                    <li> <a className="dropdown-item" href="empty-cart.html">Empty Cart</a></li>
                    <li> <a className="dropdown-item" href="wishlist.html">Wishlist</a></li>
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="accounntMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Accounts</a>
                  <ul className="dropdown-menu" aria-labelledby="accounntMenu">

                    <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#"><i className="fas fa-user-tie fa-fw me-1"></i>Instructor</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="instructor-dashboard.html"><i className="bi bi-grid-fill fa-fw me-1"></i>Dashboard</a> </li>
                        <li> <a className="dropdown-item" href="instructor-manage-course.html"><i className="bi bi-basket-fill fa-fw me-1"></i>Courses</a> </li>
                        <li> <a className="dropdown-item" href="instructor-create-course.html"><i className="bi bi-file-earmark-plus-fill fa-fw me-1"></i>Create Course</a> </li>
                        <li> <a className="dropdown-item" href="course-added.html"><i className="bi bi-file-check-fill fa-fw me-1"></i>Course Added</a> </li>
                        <li> <a className="dropdown-item" href="instructor-earning.html"><i className="fas fa-chart-line fa-fw me-1"></i>Earnings</a> </li>
                        <li> <a className="dropdown-item" href="instructor-studentlist.html"><i className="fas fa-user-graduate fa-fw me-1"></i>Students</a> </li>
                        <li> <a className="dropdown-item" href="instructor-order.html"><i className="bi bi-cart-check-fill fa-fw me-1"></i>Orders</a> </li>
                        <li> <a className="dropdown-item" href="instructor-review.html"><i className="bi bi-star-fill fa-fw me-1"></i>Reviews</a> </li>
                        <li> <a className="dropdown-item" href="instructor-payout.html"><i className="fas fa-wallet fa-fw me-1"></i>Payout</a> </li>
                      </ul>
                    </li>

                      <li className="dropdown-submenu dropend">
                      <a className="dropdown-item dropdown-toggle" href="#"><i className="fas fa-user-graduate fa-fw me-1"></i>Student</a>
                      <ul className="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                        <li> <a className="dropdown-item" href="student-dashboard.html"><i className="bi bi-grid-fill fa-fw me-1"></i>Dashboard</a> </li>
                        <li> <a className="dropdown-item" href="student-subscription.html"><i className="bi bi-card-checklist fa-fw me-1"></i>My Subscriptions</a> </li>
                        <li> <a className="dropdown-item" href="student-course-list.html"><i className="bi bi-basket-fill fa-fw me-1"></i>Courses</a> </li>
                        <li> <a className="dropdown-item" href="student-payment-info.html"><i className="bi bi-credit-card-2-front-fill fa-fw me-1"></i>Payment Info</a> </li>
                        <li> <a className="dropdown-item" href="student-bookmark.html"><i className="fas bi-cart-check-fill fa-fw me-1"></i>Wishlist</a> </li>
                      </ul>
                    </li>
                    
                    <li> <a className="dropdown-item" href="#"><i className="fas fa-user-cog fa-fw me-1"></i>Admin (Coming Soon)</a> </li>
                    <li> <hr className="dropdown-divider"/></li>
                    <li> <a className="dropdown-item" href="instructor-edit-profile.html"><i className="fas fa-fw fa-edit me-1"></i>Edit Profile</a> </li>
                    <li> <a className="dropdown-item" href="instructor-setting.html"><i className="fas fa-fw fa-cog me-1"></i>Settings</a> </li>
                    <li> <a className="dropdown-item" href="instructor-delete-account.html"><i className="fas fa-fw fa-trash-alt me-1"></i>Delete Profile</a> </li>
                  </ul>
                </li>

                <li className="nav-item"><a className="nav-link" href="docs/alerts.html">Components</a></li>

                <li className="nav-item dropdown">
                  <a className="nav-link" href="#" id="advanceMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i className="fas fa-ellipsis-h"></i>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-end min-w-auto" data-bs-popper="none">
                    <li> 
                      <a className="dropdown-item" href="https://support.webestica.com/" target="_blank">
                        <i className="text-warning fa-fw bi bi-life-preserver me-2"></i>Support
                      </a> 
                    </li>
                    <li> 
                      <a className="dropdown-item" href="docs/index.html" target="_blank">
                        <i className="text-danger fa-fw bi bi-card-text me-2"></i>Documentation
                      </a> 
                    </li>
                    <li> <hr className="dropdown-divider"/></li>
                    <li> 
                      <a className="dropdown-item" href="https://eduport.webestica.com/rtl/" target="_blank">
                        <i className="text-info fa-fw bi bi-toggle-off me-2"></i>RTL demo
                      </a> 
                    </li>
                    <li> 
                      <a className="dropdown-item" href="https://themes.getbootstrap.com/store/webestica/" target="_blank">
                        <i className="text-success fa-fw bi bi-cloud-download-fill me-2"></i>Buy Eduport!
                      </a> 
                    </li>
                  </ul>
                </li>
              </ul>

              <div className="nav my-3 my-xl-0 px-4 flex-nowrap align-items-center">
                <div className="nav-item w-100">
                  <form className="position-relative">
                    <input className="form-control pe-5 bg-transparent" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn bg-transparent px-2 py-0 position-absolute top-50 end-0 translate-middle-y" type="submit"><i className="fas fa-search fs-6 "></i></button>
                  </form>
                </div>
              </div>

            </div>

            <div className="dropdown ms-1 ms-lg-0">
              <a className="avatar avatar-sm p-0" href="#" id="profileDropdown" role="button" data-bs-auto-close="outside" data-bs-display="static" data-bs-toggle="dropdown" aria-expanded="false">
                <img
                  className="avatar-img rounded-circle" 
                  src="/assets/images/avatar/01.jpg" 
                  alt="avatar"/>
              </a>
              <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3" aria-labelledby="profileDropdown">

                <li className="px-3">
                  <div className="d-flex align-items-center">

                    <div className="avatar me-3">
                      <img 
                        className="avatar-img rounded-circle shadow" 
                        src="/assets/images/avatar/01.jpg"
                        alt="avatar"
                        />
                    </div>
                    <div>
                      <a className="h6" href="#">Lori Ferguson</a>
                      <p className="small m-0">example@gmail.com</p>
                    </div>
                  </div>
                  <hr/>
                </li>

                <li><a className="dropdown-item" href="#"><i className="bi bi-person fa-fw me-2"></i>Edit Profile</a></li>
                <li><a className="dropdown-item" href="#"><i className="bi bi-gear fa-fw me-2"></i>Account Settings</a></li>
                <li><a className="dropdown-item" href="#"><i className="bi bi-info-circle fa-fw me-2"></i>Help</a></li>
                <li><a className="dropdown-item bg-danger-soft-hover" href="#"><i className="bi bi-power fa-fw me-2"></i>Sign Out</a></li>
                <li> <hr className="dropdown-divider"/></li>

                <li>
                  <div className="modeswitch-wrap" id="darkModeSwitch">
                    <div className="modeswitch-item">
                      <div className="modeswitch-icon"></div>
                    </div>
                    <span>Dark mode</span>
                  </div>
                </li> 
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="pt-5 bg-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-3">
              <a className="me-0" href="index.html">
                <img className="light-mode-item h-40px" src="/assets/images/logo.svg" alt="logo"/>
                <img className="dark-mode-item h-40px" src="/assets/images/logo-light.svg" alt="logo"/>
              </a>
              <p className="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

              <ul className="list-inline mb-0 mt-3">
                <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-facebook" href="#"><i className="fab fa-fw fa-facebook-f"></i></a> </li>
                <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-instagram" href="#"><i className="fab fa-fw fa-instagram"></i></a> </li>
                <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-twitter" href="#"><i className="fab fa-fw fa-twitter"></i></a> </li>
                <li className="list-inline-item"> <a className="btn btn-white btn-sm shadow px-2 text-linkedin" href="#"><i className="fab fa-fw fa-linkedin-in"></i></a> </li>
              </ul>
            </div>

            <div className="col-lg-6">
              <div className="row g-4">

                <div className="col-6 col-md-4">
                  <h5 className="mb-2 mb-md-4">Company</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item"><a className="nav-link" href="#">About us</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Contact us</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">News and Blogs</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Library</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Career</a></li>
                  </ul>
                </div>
                        
                <div className="col-6 col-md-4">
                  <h5 className="mb-2 mb-md-4">Community</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item"><a className="nav-link" href="#">Documentation</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Faq</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Forum</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Sitemap</a></li>
                  </ul>
                </div>

                <div className="col-6 col-md-4">
                  <h5 className="mb-2 mb-md-4">Teaching</h5>
                  <ul className="nav flex-column">
                    <li className="nav-item"><a className="nav-link" href="#">Become a teacher</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">How to guide</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Terms &amp; Conditions</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-3">
              <h5 className="mb-2 mb-md-4">Contact</h5>

              <p className="mb-2">
                Toll free:<span className="h6 fw-light ms-2">+1234 568 963</span>
                <span className="d-block small">(9:AM to 8:PM IST)</span>
              </p>

              <p className="mb-0">Email:<span className="h6 fw-light ms-2">example@gmail.com</span></p>

              <div className="row g-2 mt-2">

                <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                  <a href="#"> 
                    <img src="/assets/images/client/google-play.svg" alt=""/> 
                  </a>
                </div>

                <div className="col-6 col-sm-4 col-md-3 col-lg-6">
                  <a href="#"> <img src="/assets/images/client/app-store.svg" alt="app-store"/> </a>
                </div>
              </div>
            </div> 

          </div>

          <hr className="mt-4 mb-0"/>

          <div className="py-3">
            <div className="container px-0">
              <div className="d-md-flex justify-content-between align-items-center py-3 text-center text-md-left">

                <div className="text-primary-hover"> Copyrights <a href="#" className="text-body">©2022</a>. All rights reserved. </div>

                <div className=" mt-3 mt-md-0">
                  <ul className="list-inline mb-0">
                    <li className="list-inline-item">

                      <div className="dropup mt-0 text-center text-sm-end">
                        <a className="dropdown-toggle nav-link" href="#" role="button" id="languageSwitcher" data-bs-toggle="dropdown" aria-expanded="false">
                          <i className="fas fa-globe me-2"></i>Language
                        </a>
                        <ul className="dropdown-menu min-w-auto" aria-labelledby="languageSwitcher">
                          <li>
                            <a className="dropdown-item me-4" href="#">
                              <img className="fa-fw me-2" src="/assets/images/flags/uk.svg" alt=""/>English
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item me-4" href="#">
                              <img className="fa-fw me-2" src="/assets/images/flags/gr.svg" alt=""/>German 
                            </a>
                          </li>
                          <li>
                            <a className="dropdown-item me-4" href="#">
                              <img className="fa-fw me-2" src="/assets/images/flags/sp.svg" alt=""/>French
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-inline-item"><a className="nav-link" href="#">Terms of use</a></li>
                    <li className="list-inline-item"><a className="nav-link pe-0" href="#">Privacy policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <div className="back-top"><i className="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle"></i></div>

      <script src="assets/vendor/bootstrap/dist/js/bootstrap.bundle.min.js"></script>

      <script src="assets/vendor/isotope/isotope.pkgd.min.js"></script>
      <script src="assets/vendor/imagesLoaded/imagesloaded.js"></script>

      <script src="assets/js/functions.js"></script>
    </div>
  )
}

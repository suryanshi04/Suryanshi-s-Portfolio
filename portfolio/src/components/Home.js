import React from "react";
import { Link } from "react-router-dom";
import Forum from './Forum'; 
import Professors from './Professors';
import Projects from "./Projects";
import Register from './Register';
import About from './About';
import Contact from './Contact';
import News from './News'
import { useNavigation } from 'react-router-dom';
import SingleProf from "./SingleProf";
import Navbar from './Navbar.js';
function Home(){

  return(
    <body>
    <>


    <Navbar/>

    <div className="untree_co-hero overlay" style={{backgroundColor: '#f0f0f0' }}>


      <div className="container">
        <div className="row align-items-center justify-content-center">

          <div className="col-12">

            <div className="row justify-content-center ">

              <div className="col-lg-6 text-center ">
                <Link to={'/'} href="https://vimeo.com/342333493" data-fancybox data-aos="fade-up" data-aos-delay="0" className="caption mb-4 d-inline-block">ShopBuddy!</Link>

                <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay="100"><em>How many shopping carts does it take to find happiness? Just one, filled with all your favorite quirks!</em></h1>
              </div>


            </div>

          </div>

        </div>
      </div>

    </div>


    <div className="untree_co-section">
      <div className="container">
        <div className="row justify-content-center mb-3">
          <div className="col-lg-7 text-center" data-aos="fade-up" data-aos-delay="0">
            <h2 className="line-bottom text-center mb-4">What would you like to shop today?</h2>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="0">
            <button onClick={() => window.open("https://en.wikipedia.org/wiki/Artificial_intelligence", "_blank", "noopener,noreferrer")} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-atom"></i>
              </div>
              <div>
                <h3>Woman Clothes</h3>
                <span></span>
              </div>
            </button>

          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
          <button onClick={() => window.open("https://en.wikipedia.org/wiki/Data_mining", "_blank", "noopener,noreferrer")} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-briefcase"></i>
              </div>
              <div>
                <h3>Accesories</h3>
                <span></span>
              </div>
            </button>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
            <button onClick={() => window.open("https://en.wikipedia.org/wiki/Health_informatics", "_blank", "noopener,noreferrer")} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-chart-pie"></i>
              </div>
              <div>
                <h3>Skincare</h3>
                <span></span>
              </div>
            </button>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <button onClick={() => window.open("https://en.wikipedia.org/wiki/Theory_of_computation", "_blank", "noopener,noreferrer")} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-calculator"></i>
              </div>
              <div>
                <h3>Kurtas</h3>
                <span></span>
              </div>
            </button>
          </div>

          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="0">
            <button onClick={() => window.open("https://en.wikipedia.org/wiki/Scientific_Computer_Applications", "_blank", "noopener,noreferrer")} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-pen"></i>
              </div>
              <div>
                <h3>Home appliances</h3>
                <span></span>
              </div>
            </button>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="100">
          <button onClick={() => window.open("https://en.wikipedia.org/wiki/Database", "_blank", "noopener,noreferrer")} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-atom"></i>
              </div>
              <div>
                <h3>Home decor</h3>
                <span></span>
              </div>
            </button>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="200">
            <button onClick={() => window.open("https://en.wikipedia.org/wiki/Human%E2%80%93computer_interaction", "_blank", "noopener,noreferrer")} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-camera"></i>
              </div>
              <div>
                <h3>Men's Section</h3>
                <span></span>
              </div>
            </button>
          </div>
          <div className="col-sm-6 col-md-6 col-lg-3 mb-4" data-aos="fade-up" data-aos-delay="300">
            <button onClick={() => window.open("https://en.wikipedia.org/wiki/Software_engineering", "_blank", "noopener,noreferrer")} className="category d-flex align-items-start h-100">
              <div>
                <i className="uil uil-circle-layer"></i>
              </div>
              <div>
                <h3>Kid's Section</h3>
                <span></span>
              </div>
            </button>
          </div>


        </div>

        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="400">
          <div className="col-lg-8 text-center">
            <p> Explore more on your own? <Link to="Applications">Browse all</Link></p>
          </div>
        </div>
      </div>
    </div>

    <div className="untree_co-section bg-light" id="Home_concrete">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-lg-7 text-center" data-aos="fade-up" data-aos-delay="0">
            <h2 className="line-bottom text-center mb-4">Latest deals here!</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="custom-media">
              <Link to={'/'}><img src="https://www.firstforwomen.com/wp-content/uploads/sites/2/2020/10/womens-clothing-store.jpg" alt="Image" className="img-fluid"/></Link>
              <div className="custom-media-body">
                <div className="d-flex justify-content-between pb-3">
                  <div className="text-primary"><span className="uil uil-book-open"></span> <span></span></div>
                  <div className="review"><span className=""></span> <span></span></div>
                </div>
                <h3>SHOP FOR BRAND NEW DEALS!</h3>
                <p className="mb-4">50-60% OFF</p>
                <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                  <div><Link to={'Application'}>Learn More</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="custom-media">
              <Link to={'/'}><img src="https://th.bing.com/th/id/OIP.kUkQ3RP7nBQfiYg2-hWrowHaHa?rs=1&pid=ImgDetMain" alt="Image" className="img-fluid"/></Link>
              <div className="custom-media-body">
                <div className="d-flex justify-content-between pb-3">
                  <div className="text-primary"><span className="uil uil-book-open"></span> <span></span></div>
                  <div className="review"><span className=""></span> <span></span></div>
                </div>
                <h3>EXPLORE NEW DEALS ON SKINCARE PRODUCTS</h3>
                <p className="mb-4">FROM OURS TO YOURS!</p>
                <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                  <div><Link to={'Application'}>Learn More</Link></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="custom-media">
              <Link to={'/'}><img src="https://th.bing.com/th/id/OIP.jWPlH_ltEUz5ZysvSa9d-wHaFj?rs=1&pid=ImgDetMain" alt="Image" className="img-fluid"/></Link>
              <div className="custom-media-body">
                <div className="d-flex justify-content-between pb-3">
                  <div className="text-primary"><span className="uil uil-book-open"></span> <span></span></div>
                  <div className="review"><span className=""></span> <span></span></div>
                </div>
                <h3></h3>
                <p className="mb-4">FOR YOUR KIDS ALSO</p>
                <div className="border-top d-flex justify-content-between pt-3 mt-3 align-items-center">
                  <div><Link to={'Application'}>Learn More</Link></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
    <div className="untree_co-section bg-light">


      <div className="container">
        <div className="row">
          <div className="col-lg-5 mr-auto mb-5 mb-lg-0"  data-aos="fade-up" data-aos-delay="0">
            <img src="https://th.bing.com/th/id/OIP.O_OO67V9T6AE8MmbzyWvzwAAAA?rs=1&pid=ImgDetMain" alt="image" className="img-fluid"/>
          </div>
          <div className="col-lg-7 ml-auto" data-aos="fade-up" data-aos-delay="100">
            <h2 className="line-bottom mb-4">The mission behind ShopBuddy is to revolutionize and elevate the online shopping experience for consumers worldwide.</h2>
            <p>Many reasons are as follows: </p>

            <div className="custom-accordion" id="accordion_1">
              <div className="accordion-item">
                <h2 className="mb-0">
                  <button className="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Enhanced Convenience</button>
                </h2>

                <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion_1">
                  <div className="accordion-body">
                    <div className="d-flex">
                      <div>
                        <p>ShopBuddy seeks to make online shopping more convenient and efficient for users by offering advanced search functionality, personalized recommendations, and a simplified checkout process. The platform aims to streamline the entire shopping journey, from product discovery to purchase completion.</p>
            
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="mb-0">
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Empowering Consumers</button>
                </h2>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion_1">
                  <div className="accordion-body">
                    <div className="d-flex">
                      <div>
                        <p> ShopBuddy is committed to empowering consumers by equipping them with the information and resources they need to shop with confidence. This includes providing price tracking features to help users monitor price trends and make informed decisions about when to buy.</p>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="mb-0">
                  <button className="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Building Trust</button>
                </h2>

                <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion_1">
                  <div className="accordion-body">
                    <div className="d-flex">
                      <div>
                        <p> Trust and security are paramount in online shopping. ShopBuddy prioritizes the security and privacy of its users, ensuring that their transactions are protected and their personal information is safeguarded at all times.</p>
                        
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>

    <div className="site-footer">


      <div className="container">

        <div className="row">
          <div className="col-lg-3 mr-auto">
            <div className="widget">
              <h3>About Us<span className="text-primary"></span> </h3>
              <p>A group of Bennett students.</p>
            </div>
          </div>

          

          

          <div className="col-lg-3">
            <div className="widget">
              <h3>Get in Touch</h3>
              <address>Bennett University</address>
              <ul className="list-unstyled links mb-4">
                <li><a href="tel://4047276123">+919305792979</a>- Suryanshi Sharma</li>
                <li><a href="tel://4047276123">+919391602491</a>- Afzaal Ahmed Khan</li>
                <li><a href="email://jeff.epstein@emory.edu">ShopBuddy@gmail.com</a></li>
              </ul>
            </div>
          </div>

        </div>

        <div className="row mt-5">
          <div className="col-12 text-center">
            <p>Copyright &copy;<script>document.write(new Date().getFullYear());</script>. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </>
    </body>
  )
}

export default Home

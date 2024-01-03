import './App.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosArrowDown } from 'react-icons/io';
function App() {
  return (
    <>
      <div className="nav-wrapper">
        <nav>
          <div className="nav-inner">
            <img src="https://www.linkup.com/static/img/linkup-logo.svg" />
            
            <GiHamburgerMenu size="1.8rem" id="hamburgerIcon" />
            <div className="right-nav">
              <div>
                <div>Products</div>
                <IoIosArrowDown />
              </div>
              <div>
                <div>Industry Solutions</div>
                <IoIosArrowDown />
              </div>
              <div>
                <div>Our Data</div>
                <IoIosArrowDown />
              </div>
              <div>
                <div>Insights</div>
                <IoIosArrowDown />
              </div>
              <div>
                <div>About Us</div>
                <IoIosArrowDown />
              </div>
              <button id="requestDemoBtn">Request a Demo</button>
            </div>
          </div>
        </nav>
      </div>
      <div className="grid-container">
        <div className="background">
          <div></div>
          <div></div>
        </div>
        <div className="main-wrapper">
          <main>
            <div className="main-text-wrapper">
              <p>
                Global job market data from hundreds of millions of job listings
                and counting.
              </p>
              <p>
                LinkUp is the leading provider of deep, accurate, actionable
                labor market data, updated daily and sourced directly from
                employer websites globally.
              </p>
              <button id="requestDemoBtn">Request a Demo</button>
            </div>

            <div className="main-img-wrapper">
              <div className="hundreds-text-wrapper">
                <p>
                  Hundreds of millions of job postings wield deep predictive
                  power.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default App;

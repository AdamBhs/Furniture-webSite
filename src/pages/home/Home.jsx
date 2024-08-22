import "./homeStyle.css";
import arrow from "../../assets/pictures/arrow.png";
import sketch from "../../assets/pictures/sketch.png";
import { CiSearch } from "react-icons/ci";
import Benefits from "./components/Benefits";

function Home() {
  return (
    <div className="home">
      {/* Present Section */}
      <div className="container-global">
        
        <div className="present">
          <img className="arrow" src={arrow} alt="arrow" />
          <h1 className="p-title">
            Discover Furniture With
            High Quality Wood
          </h1>
          <img className="sketch-arrow" src={sketch} alt="sketch" />
          <p className="p-p1">
            Pellentesque etiam blandit in tincidunt at donec.
             Eget ipsum dignissim placerat nisi, adipiscing mauris non.
              Purus parturient viverra nunc, tortor sit laoreet.
               Quam tincidunt aliquam adipiscing tempor.
          </p>
        

          <div className="p-bg-img">
            <div className="search">
              <CiSearch className="search-icon"/>
              <input title="" type="text" className="search-input" placeholder="Search property"></input>
              <button>Search</button>
            </div>
          </div>
        </div>

        <Benefits />
      </div>
    </div>
  )
}

export default Home;

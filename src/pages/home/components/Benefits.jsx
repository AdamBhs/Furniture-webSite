import "./benefitStyle.css";
import Card from "./Card";
import squares from "../../../assets/pictures/3square.png";
import calendar from "../../../assets/pictures/calendar-tick.png";
import money from "../../../assets/pictures/money-tick.png";

function Benefits() {
  return (
    <div className="benefits">
        <div className="b-desc">
            <div>
                <h4>Benefits</h4>
                
            </div>
            <div className="title-p">
              <h1>Benefits when using our services</h1>

              <p>
                Pellentesque etiam blandit in tincidunt at donec. Eget ipsum
                dignissim placerat nisi, adipiscing mauris non purus parturient.
              </p>
            </div>
        </div>

        <div className="cards-benefits">
            <Card img={squares} title="Many Choices" 
              paragraph={`Pellentesque etiam blandit in tincidunt at donec.
                 Eget ipsum dignissim placerat nisi, adipiscing mauris non. `}
            />

            <Card img={calendar} title="Fast and On Time" 
              paragraph={`Pellentesque etiam blandit in tincidunt at donec.
                 Eget ipsum dignissim placerat nisi, adipiscing mauris non. `}
            />

            <Card img={money} title="Affordable Price" 
              paragraph={`Pellentesque etiam blandit in tincidunt at donec.
                 Eget ipsum dignissim placerat nisi, adipiscing mauris non. `}
            />

        </div>
    </div>
  )
}

export default Benefits;

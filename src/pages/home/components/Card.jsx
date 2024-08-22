/* eslint-disable react/prop-types */
import "./benefitStyle.css"

function Card(props) {
  return (
    <div className="card">
        <div>
            <img src={props.img} alt="" />
        </div>
        <h3>{props.title}</h3>
        <p>{props.paragraph}</p>
        
    </div>
  )
}
export default Card;
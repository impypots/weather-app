import logo from './logo.svg';
import './App.css';


function DayForcast(props) {
  return (
    <div className="day-forcast">
      <h3>{props.day}</h3>
      <img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="" />
      <p>
        <span>{props.high}&#176;</span>
        <span>{props.low}&#176;</span>  
      </p>
    </div>
  );
}
export default DayForcast;
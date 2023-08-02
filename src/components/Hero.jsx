import './Hero.css';
import '../App.css';

function Hero(props) {

    return (
      <>
          <div className="hero-item">
            <h2 className="bold h2-hero">{props.name}</h2>
            <p><span className='bold'>Вселенная:</span> {props.universe}</p>
            <p><span className='bold'>Альтер эго:</span> {props.alterego}</p>
            <p><span className='bold'>Род деятельности:</span> {props.occupation}</p>
            <p><span className='bold'>Друзья:</span> {props.friends}</p>
            <p><span className='bold'>Супер-сила:</span> {props.superpowers}</p>
            <div className="hero-text">{props.info}</div>
            <div><img className="hero-img" src={props.url}/></div>
          </div>
      </>
    );
  }
  
  export default Hero;
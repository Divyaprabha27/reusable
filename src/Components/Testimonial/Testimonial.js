import './Testimonial.css';

const Testimonial = (props) => {
  const { testi } = props;
    return (
        <div className="testimonial-container">
          {props.testi.map((testi, index) => (
            <div className="testi-container">
       
            <img src={testi.imgUrl} alt={testi.name} />
            <h3>{testi.name} </h3>
            <p>{testi.description}</p>
          </div>
          ))}
        </div>
    )
}

export default Testimonial;
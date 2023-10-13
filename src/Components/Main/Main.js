import './main.css';

const Main = (props) => {
  const { item } = props;
    return (
        <div className="home-container">
        <div className="course-container">
          {props.items.map((item, index) => (
            <div className="product-container">
       
            <img src={item.imgUrl} alt={item.name} />
            <h3>{item.name} </h3>
            <p>{item.description}</p>
          </div>
          ))}
        </div>
      </div>
    )
}

export default Main;
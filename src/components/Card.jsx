import '../index.css';
    
const Card = ({ name, img, p }) => { 
    return (
      
        <div className='card'>
          <img src={img} alt="profile" />
          <h1>{name}</h1>
          <p>{p}</p>
          <button>View Details</button>
        </div>
     
    );
};

export default Card; 
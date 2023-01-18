import "./CardDulces.css"

export default function CardDulces(props) {
  return (
    
      <div className="card">
        <div className="card-header">
          <img
            src={props.img}
            alt="rover"
          />
        </div>
        <div className="card-body">
          <span className="tag tag-teal">Picositos</span>
          <h4>{props.name}</h4>
          <p>{props.desc}</p>
          <button>Detalles</button>
        </div>
      </div>

  );
}

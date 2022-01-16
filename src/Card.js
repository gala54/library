const Card = (props) => {
  return (
    <div className="col">
      <div className="card h-100" id="info-card">
        <div className="card-body">
          <h6 className="card-title">{props.title}</h6>
          <div style={{"marginBottom": "12px"}}>
            {props.tags.map(tag => 
              <div key={tag} id="tag">{tag}</div>
            )}
          </div>
          <a href={props.name} className="btn btn-outline-secondary">View</a>
        </div>
      </div>
    </div>
  )
}

export default Card
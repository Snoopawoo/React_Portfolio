function Project(props) {
    return (
        <div className = 'projectcard'>
  <img src = {props.image} className ="card-img-top" alt="..."/>
  <div className ="card-body">
    <h5 className ="card-title">{props.title}</h5>
    <p className ="card-text">{props.description}</p>
  </div>
  <div className ="card-body linkstorage">
    <a href="#" className ="card-link">{props.site}</a>
    <a href="#" className ="card-link">{props.repo}</a>
  </div>
</div>

    )
}

export default Project;
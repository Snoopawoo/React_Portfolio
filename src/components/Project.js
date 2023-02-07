function Project(props) {
    return (

        <div className = 'projectcard'>
  <img src = {props.image} className ="card-img-top" alt="..."/>
  <div className ="card-body">
    <h5 className ="card-title">{props.title}</h5>
    <p className ="card-text">{props.description}</p>
  </div>
  <div className ="card-body linkstorage">
    <a href={props.site} className ="card-link">Site</a>
    <a href={props.repo} className ="card-link">Repo</a>
  </div>
</div>

    )
}

export default Project;
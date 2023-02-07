import Project from "../components/Project";

import dData from '../data.json'
import dData2 from '../data2.json' 

function Gallery() {
    return (
        <div className = 'Gbg'>
        <section className = 'gallerybox'>
            {dData.map((project, i) => (
                <Project title={project.title} image={project.image} repo={project.repo} site={project.site} description={project.description}/>
            
            ))}
        </section>
        <section className = 'gallerybox'>
        {dData2.map((project, i) => (
                <Project title={project.title} image={project.image} repo={project.repo} site={project.site} description={project.description}/>
            
            ))}
        </section>
        </div>
    )
}

export default Gallery;
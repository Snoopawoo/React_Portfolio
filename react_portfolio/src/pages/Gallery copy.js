import Project from "../components/Project";

function Gallery() {
    return (
        <div className = 'Gbg'>
        <section className = 'gallerybox'>
            <Project />
            <Project />
            <Project />
        </section>
        <section className = 'gallerybox'>
            <Project />
            <Project />
            <Project />
        </section>
        </div>
    )
}

export default Gallery;
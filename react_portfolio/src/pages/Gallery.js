import Project from "../components/Project";

function Gallery() {
    return (
        <div class = 'Gbg'>
        <section class = 'gallerybox'>
            <Project />
            <Project />
            <Project />
        </section>
        <section class = 'gallerybox'>
            <Project />
            <Project />
            <Project />
        </section>
        </div>
    )
}

export default Gallery;
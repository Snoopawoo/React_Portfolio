function Home() {
    return (
        <div className = 'home'>
            <h1>Csaba Rektenwald</h1>
            <a class = 'aboutmelink' href = '#aboutme'>About Me &#8681;</a>
            <div className = 'image'></div>
            <section className = 'brand'>
                <h2 id = 'aboutme'>About Me</h2>
                <p className = 'statement'>
                    I was born in Hungary where I spent my early years and have finished my studies as a Graphic and Multimedia Designer.
                    Right after this accomplishment, I moved to the UK and started working on some projects.
                    I appreciate art and design, and have a great passion to compete. Let it be art, work or games.
                    I aspire to become a better designer, and learn all the odds and ends of web development.
                    I have a lot of attention to detail, and I'm not affraid to put in the extra work to reach the resoult I desire.
                </p>
                <h3>
                    You can find my work on the following sites:
                </h3>
                    <div>
                        <a className = 'link' href = 'https://github.com/Snoopawoo'>Github</a>
                        <a className = 'link' href = 'https://www.linkedin.com/in/csaba-rektenwald-9301541b5/'>LinkedIn</a>
                        <a className = 'link' href = '#'>CV</a>
                    </div>
                        <footer className =" foot py-3 my-4">
                            <p className ="text-center align-middle">© 2023 Csaba Rektenwald</p>
                        </footer>

            </section>
            
        </div>
    )
}

export default Home;
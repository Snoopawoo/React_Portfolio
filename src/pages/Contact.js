function Contact() {
    return (
        <div className = 'contactpage'>
            <h1 className = 'ContactTitle'>Contact Information</h1>

            <ul className ="list-group groupb">
                <li className ="list-group-item"><a href = 'https://github.com/Snoopawoo'>Github</a><p>https://github.com/Snoopawoo</p></li>
                <li className ="list-group-item"><a href = 'https://www.linkedin.com/in/csaba-rektenwald-9301541b5/'>LinkedIn</a><p>https://www.linkedin.com/in/csaba-rektenwald-9301541b5/</p></li>
                <li className ="list-group-item"><a href = '#'>E-mail</a><p>reki.csaba@gmail.com</p></li>
                <li className ="list-group-item"><a href = '#'>Phone UK</a><p>+44 7546 616255</p></li>
                <li className ="list-group-item"><a href = '#'>Phone HU</a><p>+36 30 811 2690</p></li>
            </ul>
        <div className = 'contform'>
        <h1 className = 'ContactTitle2'>Reach out to me:</h1>
            <div className ="mb-3">
                <label for="exampleFormControlInput1" className ="form-label">Email address</label>
                <input type="email" className ="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className ="mb-3">
                <label for="exampleFormControlTextarea1" className ="form-label">Message</label>
                <textarea className ="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div className ="col-auto">
                 <button type="submit" className ="btn btn-primary mb-3">Send message</button>
            </div>
        </div>
        </div>


    )
}

export default Contact;
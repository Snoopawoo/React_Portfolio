function Contact() {
    return (
        <div class = 'contactpage'>
            <h1 class = 'ContactTitle'>Contact Information</h1>

            <ul class="list-group groupb">
                <li class="list-group-item"><a href = 'https://github.com/Snoopawoo'>Github</a><p>https://github.com/Snoopawoo</p></li>
                <li class="list-group-item"><a href = 'https://www.linkedin.com/in/csaba-rektenwald-9301541b5/'>LinkedIn</a><p>https://www.linkedin.com/in/csaba-rektenwald-9301541b5/</p></li>
                <li class="list-group-item"><a href = '#'>E-mail</a><p>reki.csaba@gmail.com</p></li>
                <li class="list-group-item"><a href = '#'>Phone UK</a><p>+44 7546 616255</p></li>
                <li class="list-group-item"><a href = '#'>Phone HU</a><p>+36 30 811 2690</p></li>
            </ul>
        <div class = 'contform'>
        <h1 class = 'ContactTitle2'>Reach out to me:</h1>
            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="col-auto">
                 <button type="submit" class="btn btn-primary mb-3">Send message</button>
            </div>
        </div>
        </div>


    )
}

export default Contact;
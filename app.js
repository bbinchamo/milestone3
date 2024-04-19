const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(express.static(__dirname));




app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html'); // send HTML file on GET request
});



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/style.css'); // send HTML file on GET request
});




app.post('/submit-form', (req, res) => {
    const fname = req.body.fname; // access form data
    const lname = req.body.lname;
    const Email = req.body.Email;
    const subject = req.body.subject;

    console.log({fname, lname, Email, subject})
    
    res.send(`
        <h1>Form Data Submitted Successfully:</h1>
        <p>First Name: ${fname}</p>
        <p>Last Name: ${lname}</p>
        <p>Email: ${Email}</p>
        <p>Message: ${subject}</p>
    `);
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});

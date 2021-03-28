const express = require('express');

// Create express app.
const app = express();

// Listen for requests.
app.listen(3000);

app.get('/', (req, res) => {
    //res.send('<p>Home page</p>');
    res.sendFile('./views/index.html', { root: __dirname });
});

app.get('/about', (req, res) => {
    //res.send('<p>About page</p>');
    res.sendFile('./views/about.html', { root: __dirname });
});

// redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

// 404 pages
// how it works?
// if the functions of the top not matches express runs the function bottom.
// that means there are no matches and the response should be a 404 page.
// the 404 method should be last of the methods because if a function sends
// response to the browser, the remain functions are not triggered.
app.use((req, res) => {
    res.status(404).sendFile('./views/404.html', { root: __dirname });
});
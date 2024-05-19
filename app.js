const express = require('express');
const morgan = require('morgan');
const mongoose =  require('mongoose');
const blogRoutes =  require('./routes/blogRoutes');

// express app
const app = express();
const uri = 'mongodb+srv://1by16cs107:IJtKln7kt5I1n1w9@cluster0.lvjd0qp.mongodb.net/node-course?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri) .then((result) =>{
    // listen for requests
    app.listen(3000);
}).catch((err) => {
  console.log('cannot make connection ',err);
})

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded( { extended : true } ));
app.use(morgan('dev'));

// app.use((req, res, next) => {
//   res.locals.path = req.path;
//   next();
// });

app.get('/', (req, res) => {
  res.redirect('/blog');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// blog routes
app.use('/blog',blogRoutes.route);

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});

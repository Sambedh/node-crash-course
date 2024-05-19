const Blog = require('../models/blog');

const indexblog = (req,res)=>{
    Blog.find().sort({createdAt : -1})
    .then(result => {
        res.render('blog/index', { title : 'All Blogs', blogs : result})
    }).catch(err=>{
        console.log(err);
    })
    }

const insertblog = (req,res)=>{
    const blog = new Blog(req.body);
    blog.save()
    .then(result =>{
        res.redirect('/');
    }).catch(err=>{
        console.log(err);
    })
    }

const createblog = (req, res) => {
    res.render('blog/create', { title: 'Create a new blog' });
    }

const singleblog = (req,res) => {
    const blog_id = req.params.id;
    Blog.findById(blog_id)
    .then(result => {
    res.render('blog/details', {title : result.title , blog : result})
    }).catch(err=>{
    res.status(404).render('404',{title : '404'})
    })
    }

const deleteblog = (req,res) =>{
    const blog_id = req.params.id;
    Blog.findByIdAndDelete(blog_id)
    .then(result => {
    res.json({ redirect : '/blog'});
    }).catch(err=>{
    console.log(err);
    })
    }

module.exports = {indexblog,insertblog,createblog,singleblog,deleteblog};
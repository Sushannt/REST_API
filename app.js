`//jshint esverion: 6`

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const dBName = 'wiki_DB';
const url = `mongodb://127.0.0.1:27017/${dBName}`;

app.use(bodyParser.urlencoded({
    extended: true
}));

mongoose.connect(url);

const articleSchema = new mongoose.Schema({
    title : String,
    content : String 
});

const Article = new mongoose.model('Article', articleSchema);


app.set('view engine', 'ejs');
app.use(express.static('public'));

//////////////////////////////////// REQUEST TARGETING ALL ARTICLES ///////////////////////////////////////////////////////////
app.route('/articles')

.get((req, res)=>{
    Article.find({}, (err, result)=>{
        (err)
        ? console.log(err)
        : res.send(result)
    });
})


.post((req, res)=>{

    const newArticle = new Article({
        title : req.body.title,
        content: req.body.content
    });
    newArticle.save( err => {
        !err
        ? res.send('Successfully added a new article.')
        : console.log(err)  
    });
})

.delete((req, res) => {
    Article.deleteMany({}, (err)=>{
        !err
        ? res.send('Successfully deleted all articles.')
        : console.log(err)
    });
})


//////////////////////////////////// REQUEST TARGETING A SPECIFIC ARTICLE ///////////////////////////////////////////////////////////
app.route('/articles/:keyword')
.get((req, res) => {
    Article.findOne({title : req.params.keyword}, (err, foundArticle) => {
        foundArticle
        ? res.send(foundArticle)
        : res.send("NO ARTICLE FOUND that matches the title.")
    });
})

.put((req, res) => {
    Article.updateOne(
        {title : req.params.keyword},
        { $set: {
            title : req.body.title,
            content : req.body.content
        }},
        {overwrite : true},
        function(err){
            if (!err){
                res.send('Successfully updated article');
            }
        }
        );
})

.patch((req, res) => {
    Article.updateOne(
        {title: req.params.keyword},
        {$set : req.body},
        (err) => !err ? res.send('Successfully updated article!') : console.log(err)
    );
})

.delete((req, res) => {
    Article.deleteOne(
        {title : req.params.keyword},
        (err, deletedArtcile) => !err ? res.send(`Article is deleted Successfully!`) : console.log(err)
    )
})


app.listen(3000, ()=> console.log(`server started listening at https://localhost:3000`));
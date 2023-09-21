import { Router } from "express";
import Article from "../Model/model.js";

const router = Router();

//---------------------------------Request Targetting all articles---------------------------------
router
  .route("/")

  .get(async (req, res) => {
    try {
      const allArticles = await Article.find();
      res.status(200).json({ allArticles });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  })

  .post(async (req, res) => {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });

    try {
      const createdArticle = await newArticle.save();
      res.status(201).json(createdArticle);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  })

  .delete(async (req, res) => {
    try {
      Article.deleteMany({});
      res.status(204).json("All articles successfully deleted");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

//---------------------------------Request Targetting specific article---------------------------------

// middleware for finding article by Id
async function findArticleById(req, res, next) {
  let requestedArticle;
  try {
    requestedArticle = await Article.findById(req.params.id);

    if (requestedArticle == null) {
      return res.status(404).json({ message: "No such article found" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

  res.requestedArticle = requestedArticle;
  next();
}

router
  .route("/:id")
  .all(findArticleById)

  .get(async (req, res) => {
    res.status(200).json(res.requestedArticle);
  })

  .patch(async (req, res) => {
    if (req.body.title !== null) {
      res.requestedArticle.title = req.body.title;
    }

    if (req.body.content !== null) {
      res.requestedArticle.content = req.body.content;
    }

    try {
      const updatedArtcile = await res.requestedArticle.save();
      res.json(updatedArtcile);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  })

  .delete(async (req, res) => {
    try {
      await res.requestedArticle.remove();
      res.json("requested article deleted");
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

export default router;

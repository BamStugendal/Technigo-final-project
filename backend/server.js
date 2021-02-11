import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"

import posterData from './data/posters.json'

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/posters"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = Promise

const Poster = mongoose.model("Poster", {
  title: {
    type: String,
  },
  illustartor: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  width: {
    type: Number,
  },
  height: {
    type: Number,
  },
  image: {
    type: String,
  },
  category: {
    type: String,
  },
  tags: {
    type: Array,
  },
  widthSpan: {
    type: String,
  },
  heightSpan: {
    type: String,
  },
})

if (process.env.RESET_DATABASE) {
  const seedDatabase = async () => {
    await Poster.deleteMany()
  
    posterData.forEach(item => {
      new Poster(item).save()
    })
  
  }
  seedDatabase()
} 

const port = process.env.PORT || 8080;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello world')
})

app.get('/posters', async (req, res) => {
  const posters = await Poster.find(req.query)
  const portrait = req.query.portrait
  const landscape = req.query.square
  const square = req.query.square

  if (portrait) {
    const posterPortait = posterData.filter(item => item.width < item.height)
    res.status(200).res.json(posterPortait)
  } 

  if (square) {
    const posterSquare = posterData.filter(item => item.width === item.height)
    res.status(200).res.json(posterSquare)
  }

  if (landscape) {
    const posterLandscape = posterData.filter(item => item.width > item.height)
    res.status(200).res.json(posterLandscape)
  } 

  res.json(posters)
})

app.get('/posters/:id', async (req, res) => {
  try {
    const poster = await Poster.findOne({ _id: req.params.id })
    res.status(200).json(poster)
  } catch (err) {
    console.log('error')
    res.status(404).json({ error: 'Poster not found' })
  }
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

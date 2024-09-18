import Movie from "../models/movie.schema.js";


export const createMovie = async (req, res) => {
  try {
    const {
      name,
      language,
      director,
      releaseDate,
      runtime,
      cast,
      description,
      rating,
      image,
      about
    } = req.body;

    if (
      !name ||
      !language ||
      !releaseDate ||
      !runtime ||
      !cast ||
      !image
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields.",
      });
    }

    const movie = await Movie.findOne({name});
    
    if(movie){
      return res.status(400).json({
        message : 'Movie Already Exist',
        success : false,
      })
    }

    const createdMovie = await Movie.create({
      name,
      language,
      director,
      releaseDate,
      runtime,
      cast,
      description,
      rating,
      image,
      about
    });

    res.status(201).json({
      message: "Movie Created Successfully",
      createdMovie,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const updateMovie = async (req, res) => {
  try {
    const {
      name,
      language,
      director,
      releaseDate,
      runtime,
      cast,
      description,
      rating,
      image,
    } = req.body;
    const {id} = req.params;

    const movie = await Movie.findById(id);

    if (name) movie.name = name;
    if (language) movie.language = language;
    if (director) movie.director = director;
    if (releaseDate) movie.releaseDate = releaseDate;
    if (runtime) movie.runtime = runtime;
    if (cast) movie.cast = cast;
    if (description) movie.description = description;
    if (rating) movie.rating = rating;
    if (image) movie.image = image;

    await movie.save();

    res.status(200).json({
      message: "Movie Updated Successfully",
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAllMovies = async(req, res)=>{
  try {
    const movies = await Movie.find({});

    res.status(200).json({
      movies,
      success : true,
    })
  } catch (error) {
    console.log(error);
    
  }
}

export const getMovieById = async(req, res)=>{
  try {
    const {id} = req.params;

    const movie = await Movie.findById(id);

    if(!movie){
      return res.status(200).json({
        message : 'movie does not exist',
        success : false,
      })
    }
    res.status(200).json({
      movie,
      success : true,
    })
  } catch (error) {
    console.log(error);
    
  }
}
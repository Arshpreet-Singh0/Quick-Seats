import Theater, { Movie } from "../models/theater.schema.js";

export const createMovie = async (req, res) => {
  try {
    const {
      theater,
      movieName,
      audi,
      language,
      director,
      releaseDate,
      runtime,
      cast,
      description,
      rating,
      images,
    } = req.body;

    if (
      !theater ||
      !movieName ||
      !audi ||
      !language ||
      !releaseDate ||
      !runtime ||
      !cast
    ) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields.",
      });
    }

    const th = await Theater.findById(theater);

    if (!th || th.user != req.id) {
      return res.status(400).json({
        success: false,
        message: "Theater does not exist or not belongs to you.",
      });
    }

    const createdMovie = await Movie.create({
      theater,
      movieName,
      audi,
      language,
      director,
      releaseDate,
      runtime,
      cast,
      description,
      rating,
      images,
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
      theater,
      movieName,
      audi,
      language,
      director,
      releaseDate,
      runtime,
      cast,
      description,
      rating,
      images,
    } = req.body;
    const {id} = req.params;

    const th = await Theater.findById(theater);

    if (!th || th.user != req.id) {
      return res.status(400).json({
        success: false,
        message: "Theater does not exist or not belongs to you.",
      });
    }
    const movie = await Movie.findById(id);

    if (theater) movie.theater = theater;
    if (movieName) movie.movieName = movieName;
    if (audi) movie.audi = audi;
    if (language) movie.language = language;
    if (director) movie.director = director;
    if (releaseDate) movie.releaseDate = releaseDate;
    if (runtime) movie.runtime = runtime;
    if (cast) movie.cast = cast;
    if (description) movie.description = description;
    if (rating) movie.rating = rating;
    if (images) movie.images = images;

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
    const movies = await Movie.find({}).populate({
      path : 'theater',
    });;

    res.status(200).json({
      movies,
    })
  } catch (error) {
    console.log(error);
    
  }
}

export const getMovieById = async(req, res)=>{
  try {
    const {id} = req.params;
    console.log(id);
    

    const movie = await Movie.findById(id).populate({
      path : 'theater',
    });
    if(!movie){
      return res.status(200).json({
        message : 'movie does not exist',
        success : false,
      })
    }
    res.status(200).json({
      movie,
    })
  } catch (error) {
    console.log(error);
    
  }
}
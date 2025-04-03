async function createMovie() {}

async function getAllMovies(req,res,next) {

    console.log("all movie")

    res.status(200).send("all movie present")
}

async function getSingleMovie() {}

async function deleteMovie() {}

async function updateMovie() {}

export { createMovie, updateMovie, deleteMovie, getAllMovies, getSingleMovie };

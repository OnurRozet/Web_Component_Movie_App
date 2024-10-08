let movies = [
  {
    title: "The Man From Earth 1",
    description: `John üniversiteden ayrılıp, başka bir yere gitmeye karar vermiş, akademisyen arkadaşları da ona veda etmek için evine gelmişlerdir. Arkadaşları John'u kalması için ikna etmeye çalışırken, John büyük sırrını ortaya dökecek ve herkesi büyük bir şaşkınlığa sürükleyecekti`,
    poster:
      "https://m.media-amazon.com/images/I/614sO5Qwg3L._AC_UF350,350_QL50_.jpg",
    isFavourite: true,
  },
  {
    title: "The Man From Earth 2",
    description: `John üniversiteden ayrılıp, başka bir yere gitmeye karar vermiş, akademisyen arkadaşları da ona veda etmek için evine gelmişlerdir. Arkadaşları John'u kalması için ikna etmeye çalışırken, John büyük sırrını ortaya dökecek ve herkesi büyük bir şaşkınlığa sürükleyecekti`,
    poster:
      "https://m.media-amazon.com/images/I/614sO5Qwg3L._AC_UF350,350_QL50_.jpg",
    isFavourite: false,
  },
  {
    title: "The Man From Earth 3",
    description: `John üniversiteden ayrılıp, başka bir yere gitmeye karar vermiş, akademisyen arkadaşları da ona veda etmek için evine gelmişlerdir. Arkadaşları John'u kalması için ikna etmeye çalışırken, John büyük sırrını ortaya dökecek ve herkesi büyük bir şaşkınlığa sürükleyecekti`,
    poster:
      "https://m.media-amazon.com/images/I/614sO5Qwg3L._AC_UF350,350_QL50_.jpg",
    isFavourite: true,
  },
];


async function searchMovie(search_text) {
  const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=739091df&s=${search_text}`);
  const data = await response.json()
  if(data.Response === "True"){
    let result = data.Search.map((movie)=>{
      return {
        title:movie.Title,
        poster:movie.Poster === "N/A" ? "/assets/images/default.png" : movie.Poster,
        description:`${movie.Year}/${movie.Type}`,
        isFavourite:false,
        imdbID:movie.imdbID
      }
    })

    prepareMovies(result)

  }else{
    document.querySelector("#movies").innerHTML = data.Error
  }
}

//filmleri hazırla...

function prepareMovies(movies) {
  document.querySelector("#movies").innerHTML = ""
  movies.forEach((movie) => {
    const movie_card = document.createElement("movie-card");
    movie_card.setAttribute("title", movie.title);
    movie_card.setAttribute("poster", movie.poster);
    movie_card.setAttribute("isFavourite", movie.isFavourite);
    movie_card.setAttribute("imdbID",movie.imdbID)
    movie_card.innerHTML = movie.description;

    document.querySelector("#movies").append(movie_card);
  });
}

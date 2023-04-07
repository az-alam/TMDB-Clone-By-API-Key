const form = document.querySelector("form");
const moviename = document.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault()
    fetch("https://api.themoviedb.org/3/search/movie?api_key=9600d9a3bcd52f86c4f65924813b03bb&language=en-US&query=" + moviename.value + "&page=1&include_adult=false")

        .then((Response) => { return Response.json() })
        .then((showmovie) => {
            console.log(showmovie);
            displaymovie(showmovie.results)
        })
}

function displaymovie(moviedata) {
    const resultsdiv = document.querySelector("#results");
    resultsdiv.innerHTML = "";

    moviedata.forEach((movie) => {
        const moviediv = document.createElement("div");
        moviediv.classList.add("movie");
        const poster = document.createElement("img");
        const title = document.createElement("h3");

        poster.src = (movie.poster_path) ? "https://image.tmdb.org/t/p/original" + movie.poster_path : "no-poster-available.jpg";
        title.innerHTML = movie.original_title;



        moviediv.append(poster);
        moviediv.append(title);
        resultsdiv.append(moviediv)

    })
}












// function displaymovie(moviedata){
//     for(let i=0; i<moviedata.length; i++){

//     const head=document.createElement("h1");
//     head.innerHTML=moviedata[i].title;
//     document.querySelector("#results").append(head);


//         const image=document.createElement("img");
//         image.src="https://image.tmdb.org/t/p/original"+moviedata[i].poster_path;
//         document.querySelector("#results").append(image);
//     }
// }
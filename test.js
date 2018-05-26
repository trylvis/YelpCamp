var movies = [
 {
 title: "In Bruges",
 rating: 5,
 isWatched: true
 }, 
 {
 title: "Frozen",
 rating: 4.5,
 isWatched: false
 }, 
 {
 title: "Mad Max Fury Road",
 rating: 5,
 isWatched: true
 }, 
 {
 title: "Les Miserables",
 rating: 3.5,
 isWatched: false
 }
 
]
for  
 (var i = 0; i < movies.length; i++)
 {
 if (movies[i].isWatched === true) 
 console.log("You have watched " + "\"" + movies[i].title + "\" - " + movies[i].rating + " stars");
 else
 console.log("You have not seen " + "\"" + movies[i].title + "\" - " + movies[i].rating + " stars")
 }
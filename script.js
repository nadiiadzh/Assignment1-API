document.addEventListener("DOMContentLoaded",function(){
    console.log("works!");

    const factEl = document.getElementById("fact")
    const numberEl = document.getElementById("number")
    const getRandomBtn = document.getElementById("getRandomBtn")
    const getDateFactBtn = document.getElementById("getDateFactBtn")
    const getMathFactBtn = document.getElementById("getMathFactBtn")
    const getTriviaFactBtn = document.getElementById("getTriviaFactBtn")
    const getYearFactBtn = document.getElementById("getYearFactBtn")

    getRandomBtn.addEventListener("click", function(){
        getFact("year");

    });
    getDateFactBtn.addEventListener("click", function(){
        getDateFact("12","1");

    });
    getMathFactBtn.addEventListener("click", function(){
        getMathFact("1729");

    });
    getTriviaFactBtn.addEventListener("click", function(){
        getTriviaFact("42");

    });
    getYearFactBtn.addEventListener("click", function(){
        getYearFact("1492");

    });
    function createFact(response){
        console.log(response);
        factEl.innerHTML = `<p> ${response.text} </p>`;
        numberEl.innerHTML = `<p> ${response.number} </p>`;
    }

    function getFact(type){
        fetch(`https://numbersapi.p.rapidapi.com/random/${type}?max=20&fragment=true&min=10&json=true`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "bfedd34141msh8906e4917f64faap1045cfjsnc02d70e6c5a9",
                "x-rapidapi-host": "numbersapi.p.rapidapi.com"
                }
            })
            .then((response) => response.json())
            .then((response) => createFact(response))
            .catch(err => {
                console.error(err);
    
            });
    }

    function getDateFact(month,day){
        fetch(`https://numbersapi.p.rapidapi.com/${month}/${day}/date?fragment=true&json=true`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "bfedd34141msh8906e4917f64faap1045cfjsnc02d70e6c5a9",
                    "x-rapidapi-host": "numbersapi.p.rapidapi.com"
                }
            })
            .then((response) => response.json())
            .then((response) => createFact(response))
            .catch(err => {
                console.error(err);
            });
    }  
    function getMathFact(num){
        fetch(`https://numbersapi.p.rapidapi.com/${num}/math?fragment=true&json=true`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "bfedd34141msh8906e4917f64faap1045cfjsnc02d70e6c5a9",
                "x-rapidapi-host": "numbersapi.p.rapidapi.com"
            }
        })
            .then((response) => response.json())
            .then((response) => createFact(response))
            .catch(err => {
                console.error(err);
            });
    }   
    function getTriviaFact(n){
        fetch(`https://numbersapi.p.rapidapi.com/${n}/trivia?fragment=true&notfound=floor&json=true`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "bfedd34141msh8906e4917f64faap1045cfjsnc02d70e6c5a9",
                "x-rapidapi-host": "numbersapi.p.rapidapi.com"
            }
        })
            .then((response) => response.json())
            .then((response) => createFact(response))
            .catch(err => {
                console.error(err);
            });
    }    
    function getYearFact(year){
        fetch(`https://numbersapi.p.rapidapi.com/${year}/year?fragment=true&json=true`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "bfedd34141msh8906e4917f64faap1045cfjsnc02d70e6c5a9",
                "x-rapidapi-host": "numbersapi.p.rapidapi.com"
            }
        })
    
            .then((response) => response.json())
            .then((response) => createFact(response))
            .catch(err => {
                console.error(err);
            });
    } 


    
   /* getJokeByIdBtn.addEventListener("click", function(){
        getJokeById("2d6c37fc75bc42f383864555f0b8f110");

    });
    upvoteBtn.addEventListener("click", function(){
        voteJoke("2d6c37fc75bc42f383864555f0b8f110","upvote");
    });
    downvoteBtn.addEventListener("click", function(){
        voteJoke("2d6c37fc75bc42f383864555f0b8f110","downvote");
    });
    function createJoke(response){
           console.log(response);
          jokeEl.innerHTML = `<p> ${response.content} </p>`;
          upvotes.innerHTML =`<span>Upvotes: ${response.upvotes}</span>`;
          downvotes.innerHTML =`<span>Downvotes: ${response.downvotes}</span>`;
    }

    function getJoke(){
        fetch("https://joke3.p.rapidapi.com/v1/joke", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "bfedd34141msh8906e4917f64faap1045cfjsnc02d70e6c5a9",
		"x-rapidapi-host": "joke3.p.rapidapi.com"
	    },
    })
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        if(response.nsfw){
            getJoke();
        }else{
            //jokeEl.innerHTML = "<p>" + response.content + "</p>";
          
            createJoke(response);
        }
        
    }
    )

    .catch(err => {
        console.error(err);

    });
    }

    function getJokeById(id){
    fetch(
        `https://joke3.p.rapidapi.com/v1/joke/${id}`, 
        {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "bfedd34141msh8906e4917f64faap1045cfjsnc02d70e6c5a9",
            "x-rapidapi-host": "joke3.p.rapidapi.com"
            },
        })
        .then((response) => response.json())
        .then((response) => createJoke(response))
        .catch(err => {
            console.error(err);
    
        });
        }
    function voteJoke(id,vote){
        fetch(
            `https://joke3.p.rapidapi.com/v1/joke/${id}/${vote}`, 
            {
            "method": "POST",
            "headers": {
                "x-rapidapi-key": "bfedd34141msh8906e4917f64faap1045cfjsnc02d70e6c5a9",
                "x-rapidapi-host": "joke3.p.rapidapi.com"
                },
            })
            .then((response) => response.json())
            .then((response) => createJoke(response))
            .catch(err => {
                console.error(err);
        
            });

    }
     getJoke();
   // getJokeById("2d6c37fc75bc42f383864555f0b8f110");
   */
 // getFact();
});

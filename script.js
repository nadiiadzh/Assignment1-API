document.addEventListener("DOMContentLoaded",function(){
    console.log("works!");

    const factEl = document.getElementById("fact") 
    const triviaFactEl = document.getElementById("trivia-fact")
    const mathFactEl = document.getElementById("math-fact")
    const dateFactEl = document.getElementById("date-fact")
    const yearFactEl = document.getElementById("year-fact")

    const triviaNumberEl = document.getElementById("trivia-number")
    const mathNumberEl = document.getElementById("math-number")
    const yearNumberEl = document.getElementById("year-number")
    const monthNumberEl = document.getElementById("month-number")
    const dayNumberEl = document.getElementById("day-number")

    const getRandomBtn = document.getElementById("getRandomBtn")
    const getDateFactBtn = document.getElementById("getDateFactBtn")
    const getMathFactBtn = document.getElementById("getMathFactBtn")
    const getTriviaFactBtn = document.getElementById("getTriviaFactBtn")
    const getYearFactBtn = document.getElementById("getYearFactBtn")

    getTriviaFactBtn.addEventListener("click", function(){ // add event listener for the button "get trivia fact"
        if(triviaNumberEl.value ===""){
            triviaFactEl.style.color='red';
            triviaFactEl.innerHTML = `<p>Please enter the number! </p>`;
           // alert("Please enter the number!")
        }else{
            triviaFactEl.style.color='black';
            getTriviaFact(triviaNumberEl.value); 
        }
    });

    getMathFactBtn.addEventListener("click", function(){ // add event listener for the button "get math fact"

        if(mathNumberEl.value ===""){
            mathFactEl.style.color='red';
            mathFactEl.innerHTML = `<p>Please enter the number! </p>`;
           // alert("Please enter the number!")
        }else{
            mathFactEl.style.color='black';
            getMathFact(mathNumberEl.value);
        }
 
     }); 

    getDateFactBtn.addEventListener("click", function(){
        if(monthNumberEl.value ==="" || dayNumberEl.value ==="" ){
            dateFactEl.style.color='red';
            dateFactEl.innerHTML = `<p>Please enter the month and/or the day! </p>`;
           // alert("Please enter the date!")
        }else{
            dateFactEl.style.color='black';
            getDateFact(monthNumberEl.value, dayNumberEl.value);
        }

    });
    
    getYearFactBtn.addEventListener("click", function(){

        if(yearNumberEl.value ===""){
            yearFactEl.style.color='red';
            yearFactEl.innerHTML = `<p>Please enter the number! </p>`;
           // alert("Please enter the year!")
        }else{
            yearFactEl.style.color='black';
            getYearFact(yearNumberEl.value);
        }
    });

  
        
        const factType = ["trivia", "math", "date", "year"];
        const random = Math.floor(Math.random() * factType.length);
        console.log(random, factType[random]);
    
    

    getRandomBtn.addEventListener("click", function(){
        //console.log(random, factType[random]);
        
        getFact(factType[random]);

    });

    function createTriviaFact(response){ // creates trivia fact  
        console.log(response);
        triviaFactEl.innerHTML = `<p> ${response.number} is ${response.text}. </p>`;

    }
    function createMathFact(response){
        console.log(response);
        mathFactEl.innerHTML = `<p> ${response.number} is ${response.text}. </p>`;

    }
    function createYearFact(response){
        console.log(response);
        yearFactEl.innerHTML = `<p> ${response.number} is ${response.text}. </p>`;

    }
    function createDateFact(response){
        console.log(response);
        dateFactEl.innerHTML = `<p>It is ${response.text}. </p>`;

    }
    function createFact(response){
        console.log(response);
        factEl.innerHTML = `<p> ${response.number} is ${response.text}. </p>`;

    }


    function getTriviaFact(n){ // function, what gets trivia fact using fetch()  

        fetch(`https://numbersapi.p.rapidapi.com/${n}/trivia?fragment=true&notfound=floor&json=true`, {
             "method": "GET",
            "headers": {
                 "x-rapidapi-key": "bfedd34141msh8906e4917f64faap1045cfjsnc02d70e6c5a9",
                "x-rapidapi-host": "numbersapi.p.rapidapi.com"
                }
            })
            .then((response) => response.json())
            .then((response) => createTriviaFact(response)) 
            .catch(err => {
                 console.error(err);
            });
        } 
    function getMathFact(num){ // function, what gets math fact using fetch()
        fetch(`https://numbersapi.p.rapidapi.com/${num}/math?fragment=true&json=true`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "bfedd34141msh8906e4917f64faap1045cfjsnc02d70e6c5a9",
                "x-rapidapi-host": "numbersapi.p.rapidapi.com"
            }
        })
            .then((response) => response.json())
            .then((response) => createMathFact(response))
            .catch(err => {
                console.error(err);
            });
    }
    function getDateFact(month,day){ // function, what gets date fact using fetch()
        fetch(`https://numbersapi.p.rapidapi.com/${month}/${day}/date?fragment=true&json=true`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "bfedd34141msh8906e4917f64faap1045cfjsnc02d70e6c5a9",
                    "x-rapidapi-host": "numbersapi.p.rapidapi.com"
                }
            })
            .then((response) => response.json())
            .then((response) => createDateFact(response))
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
            .then((response) => createYearFact(response))
            .catch(err => {
                console.error(err);
            });
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

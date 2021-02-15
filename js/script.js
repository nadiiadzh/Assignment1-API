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
            triviaFactEl.style.visibility='visible';
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
            mathFactEl.style.visibility='visible';
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
            dateFactEl.style.visibility='visible';
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
            yearFactEl.style.visibility='visible';
            yearFactEl.innerHTML = `<p>Please enter the number! </p>`;
           // alert("Please enter the year!")
        }else{
            yearFactEl.style.color='black';
            getYearFact(yearNumberEl.value);
        }
    });

  
        
    let factType = ["trivia", "math", "date", "year"]; 

    function getRandomFactType() { // this function return random type of fact
           
            return Math.floor(Math.random() * factType.length)
    }  
    getRandomBtn.addEventListener("click", function(){
        let random = getRandomFactType()
        console.log(random,factType[random]);
        getFact(factType[random]);
        factEl.style.visibility='visible';
        factEl.classList.add("random-fact");

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
});

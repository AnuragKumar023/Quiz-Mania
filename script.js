const fque = document.getElementById('fque1');
let qname = "";
fque.addEventListener('click',(Event)=>{
    qname = Event.target.innerHTML;
    console.log(qname);
    const bg2 = document.querySelectorAll('.fff');
    bg2.forEach((e2)=>{
        e2.style.boxShadow = "";
        // e2.style.backgroundColor = "";
        // e2.style.color = "";
    })
    Event.target.style.boxShadow = '0px 0px 3px 5px red';
    // Event.target.style.backgroundColor = 'red';
    // Event.target.style.color = '#ffcc30';
})


const sque = document.getElementById('sque1');
let qvalue = 0;
sque.addEventListener('click',(Event)=>{
    qvalue = Event.target.innerHTML;
    const bg = document.querySelectorAll('.sss');
    bg.forEach((e)=>{
        e.style.boxShadow = "";
        // e.style.backgroundColor = "";
        // e.style.color = "";
    })
    Event.target.style.boxShadow = '0px 0px 3px 5px red';
    // Event.target.style.backgroundColor = 'red';
    // Event.target.style.color = '#ffcc30';
});

// qvalue = Number(qvalue);

// console.log(timevalue);


const button1 = document.getElementById('button1');
button1.addEventListener('click',()=>{
    const timer = document.getElementById('timer1');
    const startminut = qvalue;
        let time = startminut * 60;
        function countdown(){
        const minuts = Math.floor(time/60);
        const second = time % 60;
        timer.innerHTML = `${minuts} Minute : ${second} Second`;
        time--;
    }
    setInterval(countdown, 1000);
    button1.style.backgroundColor = 'red';



    function RandomQuestion(){
      //     const data = new Set();
      
      //     while(data.size!=5){
      //         const index = Math.floor(Math.random()*questionBank.length);
      //         data.add(questionBank[index]);
      //     }
      
      //     return [...data];
            questionBank.sort(()=>Math.random(),0.15);
      
            return questionBank.slice(0,`${qvalue}`);
      
      };


      const problem = RandomQuestion();
      
      // for(let [key,value] of problem.entries()){
      //     console.log(key, value);
      // }
      
      
      // Select form and create it;
      
      const form = document.querySelector('form');
      
      const org = {};
      
      problem.forEach((obj,index)=>{
          const div1 = document.createElement('div');
          div1.className = 'question';
      
          org[`que${index+1}`] = obj['answer'];
      
          const para = document.createElement('p');
          para.innerHTML = `${index+1}. ${obj['question']} -> `;
          div1.appendChild(para);
      
      
          obj['options'].forEach((data)=>{
              const label = document.createElement('label');
              const input = document.createElement('input');
              input.type = 'radio';
              input.name = `que${index+1}`;
              input.value = data;
      
              label.appendChild(input);
              label.appendChild(document.createTextNode(data));
              div1.appendChild(label);
              div1.appendChild(document.createElement('br'));
      
          })
      
          form.appendChild(div1);
      });
      
      const button = document.createElement('button');
      button.textContent = 'Submit';
      form.appendChild(button);
      
      
      // Check 
      
      
      form.addEventListener('submit',(Event)=>{
          Event.preventDefault();
          
          const data = new FormData(form);
      
          console.log(data,org);
      
          let res = 0;
          for(let [key,value] of data.entries()){
              if(value === org[key]) res++;
          };
      
          console.log(res);
      
          const out = document.getElementById('out');
          out.innerHTML=`Congratulation : <br> ${res} is Correct of ${qvalue}`;
          out.style.fontSize = "50px";
          out.style.fontWeight = 'bold';
          out.style.fontFamily = 'sens-serif';
          out.style.backgroundColor = 'purple';
          out.style.color = 'white';
    });
});


// function quiztype(massage){
//     return massage;
// }

// console.log(quiztype());




//  *********** Cricket Quiz ************

const questionBank = [
    {
      question: "Who won the ICC Cricket World Cup 2011?",
      options: ["Australia", "India", "Sri Lanka", "England"],
      answer: "India"
    },
    {
      question: "Which player has the most runs in international cricket?",
      options: ["Ricky Ponting", "Virat Kohli", "Sachin Tendulkar", "Brian Lara"],
      answer: "Sachin Tendulkar"
    },
    {
      question: "How many balls are there in an over?",
      options: ["5", "6", "8", "10"],
      answer: "6"
    },
    {
      question: "What is the nickname of AB de Villiers?",
      options: ["Mr. Cricket", "Mr. 360", "Captain Cool", "Boom Boom"],
      answer: "Mr. 360"
    },
    {
      question: "Which country won the first ever World Cup in 1975?",
      options: ["India", "West Indies", "Australia", "England"],
      answer: "West Indies"
    },
    {
      question: "Which Indian bowler is famous for the yorker?",
      options: ["Bumrah", "Ashwin", "Harbhajan", "Shami"],
      answer: "Bumrah"
    },
    {
      question: "Which cricketer has hit 6 sixes in an over?",
      options: ["MS Dhoni", "Yuvraj Singh", "Chris Gayle", "Ben Stokes"],
      answer: "Yuvraj Singh"
    },
    {
      question: "Who is known as the Wall of Indian cricket?",
      options: ["Virat Kohli", "Rahul Dravid", "Ganguly", "Tendulkar"],
      answer: "Rahul Dravid"
    },
    {
      question: "Which team is known as the Proteas?",
      options: ["Australia", "South Africa", "Pakistan", "New Zealand"],
      answer: "South Africa"
    },
    {
      question: "Where is Eden Gardens located?",
      options: ["Delhi", "Kolkata", "Mumbai", "Chennai"],
      answer: "Kolkata"
    },
    {
      question: "Who was the captain of India in the 2007 T20 World Cup?",
      options: ["Dravid", "Dhoni", "Kohli", "Tendulkar"],
      answer: "Dhoni"
    },
    {
      question: "Which cricketer is known as Boom Boom?",
      options: ["Afridi", "Gayle", "Dhoni", "Sehwag"],
      answer: "Afridi"
    },
    {
      question: "Who has taken the most wickets in Test cricket?",
      options: ["Shane Warne", "Anil Kumble", "Muralitharan", "James Anderson"],
      answer: "Muralitharan"
    },
    {
      question: "What is the maximum number of overs in an ODI match per team?",
      options: ["20", "40", "50", "60"],
      answer: "50"
    },
    {
      question: "Who won the ICC Champions Trophy in 2013?",
      options: ["India", "England", "Australia", "Sri Lanka"],
      answer: "India"
    },
    {
      question: "Which Indian player is famous for the 'Helicopter Shot'?",
      options: ["Kohli", "Sehwag", "Dhoni", "Yuvraj"],
      answer: "Dhoni"
    },
    {
      question: "Which country is famous for its bouncy pitches?",
      options: ["India", "Australia", "Sri Lanka", "Bangladesh"],
      answer: "Australia"
    },
    {
      question: "Who is the highest run scorer in IPL history?",
      options: ["Rohit Sharma", "Virat Kohli", "Suresh Raina", "David Warner"],
      answer: "Virat Kohli"
    },
    {
      question: "How many players are on the field from one team during play?",
      options: ["10", "11", "12", "9"],
      answer: "11"
    },
    {
      question: "What color ball is used in Test matches?",
      options: ["White", "Red", "Pink", "Blue"],
      answer: "Red"
    }
];






// ********** GK/GS **********


const questionBank2 = [
    {
      question: "What is the capital of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      answer: "Canberra"
    },
    {
      question: "Who is known as the Father of the Nation in India?",
      options: ["Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose", "Mahatma Gandhi"],
      answer: "Mahatma Gandhi"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      answer: "Mars"
    },
    {
      question: "What is the largest organ in the human body?",
      options: ["Heart", "Skin", "Liver", "Lungs"],
      answer: "Skin"
    },
    {
      question: "Who invented the light bulb?",
      options: ["Albert Einstein", "Isaac Newton", "Thomas Edison", "Nikola Tesla"],
      answer: "Thomas Edison"
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Hydrogen", "Carbon Dioxide", "Nitrogen"],
      answer: "Carbon Dioxide"
    },
    {
      question: "Which is the longest river in the world?",
      options: ["Amazon", "Nile", "Yangtze", "Ganga"],
      answer: "Nile"
    },
    {
      question: "Which continent is the largest by area?",
      options: ["Africa", "Asia", "Europe", "North America"],
      answer: "Asia"
    },
    {
      question: "What is the national animal of India?",
      options: ["Lion", "Tiger", "Elephant", "Leopard"],
      answer: "Tiger"
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Thailand", "Japan"],
      answer: "Japan"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Au", "Ag", "Gd", "Go"],
      answer: "Au"
    },
    {
      question: "Which is the smallest continent by area?",
      options: ["Europe", "Australia", "South America", "Antarctica"],
      answer: "Australia"
    },
    {
      question: "Who was the first President of the United States?",
      options: ["Thomas Jefferson", "John Adams", "George Washington", "Abraham Lincoln"],
      answer: "George Washington"
    },
    {
      question: "Which is the tallest mountain in the world?",
      options: ["K2", "Kangchenjunga", "Everest", "Lhotse"],
      answer: "Everest"
    },
    {
      question: "What is H2O commonly known as?",
      options: ["Oxygen", "Hydrogen", "Water", "Salt"],
      answer: "Water"
    },
    {
      question: "Who wrote the Indian National Anthem?",
      options: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Subhash Chandra Bose"],
      answer: "Rabindranath Tagore"
    },
    {
      question: "Which planet is the hottest in the solar system?",
      options: ["Mercury", "Venus", "Mars", "Jupiter"],
      answer: "Venus"
    },
    {
      question: "Which language has the most native speakers in the world?",
      options: ["English", "Hindi", "Spanish", "Mandarin Chinese"],
      answer: "Mandarin Chinese"
    },
    {
      question: "In which year did India gain independence?",
      options: ["1945", "1946", "1947", "1950"],
      answer: "1947"
    },
    {
      question: "Which vitamin is produced when the human body is exposed to sunlight?",
      options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
      answer: "Vitamin D"
    }
];





// *********** Bollywood *************



const questionBank3 = [
    {
      question: "Who is known as the King of Bollywood?",
      options: ["Salman Khan", "Aamir Khan", "Shah Rukh Khan", "Hrithik Roshan"],
      answer: "Shah Rukh Khan"
    },
    {
      question: "Which was the first Bollywood film?",
      options: ["Raja Harishchandra", "Alam Ara", "Sholay", "Mughal-e-Azam"],
      answer: "Raja Harishchandra"
    },
    {
      question: "Which Bollywood actress is also known as 'Desi Girl'?",
      options: ["Kareena Kapoor", "Priyanka Chopra", "Deepika Padukone", "Katrina Kaif"],
      answer: "Priyanka Chopra"
    },
    {
      question: "Which movie is the highest-grossing Bollywood film of all time (as of 2024)?",
      options: ["Pathaan", "Jawan", "Dangal", "Baahubali 2"],
      answer: "Jawan"
    },
    {
      question: "Who played the role of Rancho in '3 Idiots'?",
      options: ["Sharman Joshi", "Aamir Khan", "R. Madhavan", "Boman Irani"],
      answer: "Aamir Khan"
    },
    {
      question: "Which actor is famous for the dialogue 'Mogambo Khush Hua'?",
      options: ["Amjad Khan", "Amrish Puri", "Anupam Kher", "Anil Kapoor"],
      answer: "Amrish Puri"
    },
    {
      question: "Which movie featured the song 'Chaiyya Chaiyya'?",
      options: ["Dil Se", "Kabhi Khushi Kabhie Gham", "Raees", "Devdas"],
      answer: "Dil Se"
    },
    {
      question: "Who directed the movie 'Lagaan'?",
      options: ["Karan Johar", "Farhan Akhtar", "Ashutosh Gowariker", "Rakesh Roshan"],
      answer: "Ashutosh Gowariker"
    },
    {
      question: "Which actress starred in 'Queen'?",
      options: ["Alia Bhatt", "Kangana Ranaut", "Anushka Sharma", "Vidya Balan"],
      answer: "Kangana Ranaut"
    },
    {
      question: "In which movie does the character 'Simran' appear?",
      options: ["Kuch Kuch Hota Hai", "Kabir Singh", "Dilwale Dulhania Le Jayenge", "Kal Ho Naa Ho"],
      answer: "Dilwale Dulhania Le Jayenge"
    },
    {
      question: "Which actor is known for playing 'Munna Bhai'?",
      options: ["Aamir Khan", "Sanjay Dutt", "Akshay Kumar", "Ajay Devgn"],
      answer: "Sanjay Dutt"
    },
    {
      question: "Who sang the popular song 'Tum Hi Ho' from Aashiqui 2?",
      options: ["Atif Aslam", "Arijit Singh", "Sonu Nigam", "KK"],
      answer: "Arijit Singh"
    },
    {
      question: "Which movie is based on the life of Milkha Singh?",
      options: ["Sultan", "Bhaag Milkha Bhaag", "Mary Kom", "M.S. Dhoni"],
      answer: "Bhaag Milkha Bhaag"
    },
    {
      question: "What is the real name of Big B in Bollywood?",
      options: ["Amitabh Srivastava", "Amitabh Khan", "Amitabh Bachchan", "Amit Srivastav"],
      answer: "Amitabh Bachchan"
    },
    {
      question: "Which movie marked the debut of Ranbir Kapoor?",
      options: ["Rockstar", "Ajab Prem Ki Ghazab Kahani", "Saawariya", "Barfi"],
      answer: "Saawariya"
    },
    {
      question: "In which movie is the dialogue 'Pushpa, I hate tears' from?",
      options: ["Sholay", "Amar Prem", "Deewaar", "Pakeezah"],
      answer: "Amar Prem"
    },
    {
      question: "Which Bollywood film had the character 'Geet'?",
      options: ["Tamasha", "Jab We Met", "Yeh Jawaani Hai Deewani", "Love Aaj Kal"],
      answer: "Jab We Met"
    },
    {
      question: "Who composed music for 'Dilwale Dulhania Le Jayenge'?",
      options: ["AR Rahman", "Jatin-Lalit", "Pritam", "Anu Malik"],
      answer: "Jatin-Lalit"
    },
    {
      question: "Which was India's official entry to the Oscars in 2002?",
      options: ["Lagaan", "Devdas", "Black", "Mother India"],
      answer: "Lagaan"
    },
    {
      question: "Which actor is known as the Khiladi of Bollywood?",
      options: ["Salman Khan", "Akshay Kumar", "Ajay Devgn", "Tiger Shroff"],
      answer: "Akshay Kumar"
    }
];









// function RandomQuestion(){
//   //     const data = new Set();
  
//   //     while(data.size!=5){
//   //         const index = Math.floor(Math.random()*questionBank.length);
//   //         data.add(questionBank[index]);
//   //     }
  
//   //     return [...data];
//         questionBank.sort(()=>Math.random()-0.10);
  
//         return questionBank.slice(0,10);
  
//   };
  
  
  
//   const problem = RandomQuestion();
  
//   // for(let [key,value] of problem.entries()){
//   //     console.log(key, value);
//   // }
  
  
//   // Select form and create it;
  
//   const form = document.querySelector('form');
  
//   const org = {};
  
//   problem.forEach((obj,index)=>{
//       const div1 = document.createElement('div');
//       div1.className = 'question';
  
//       org[`que${index+1}`] = obj['answer'];
  
//       const para = document.createElement('p');
//       para.innerHTML = `${index+1}. ${obj['question']} -> `;
//       div1.appendChild(para);
  
  
//       obj['options'].forEach((data)=>{
//           const label = document.createElement('label');
//           const input = document.createElement('input');
//           input.type = 'radio';
//           input.name = `que${index+1}`;
//           input.value = data;
  
//           label.appendChild(input);
//           label.appendChild(document.createTextNode(data));
//           div1.appendChild(label);
//           div1.appendChild(document.createElement('br'));
  
//       })
  
//       form.appendChild(div1);
//   });
  
//   const button = document.createElement('button');
//   button.textContent = 'Submit';
//   form.appendChild(button);
  
  
//   // Check 
  
  
//   form.addEventListener('submit',(Event)=>{
//       Event.preventDefault();
      
//       const data = new FormData(form);
  
//       console.log(data,org);
  
//       let res = 0;
//       for(let [key,value] of data.entries()){
//           if(value === org[key]) res++;
//       };
  
//       console.log(res);
  
//       const out = document.getElementById('out');
//       out.innerHTML=`${res} is Correct of 10`;
//       out.style.fontSize = "50px";
//       out.style.fontWeight = 'bold';
//       out.style.fontFamily = 'sens-serif';
//       out.style.backgroundColor = 'purple';
//       out.style.color = 'red';
  
// });


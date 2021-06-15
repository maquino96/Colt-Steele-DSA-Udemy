
**Semantic HTML**

<form>
  <label for="fname">First name:</label><br>
  <input type="text" id="fname" name="fname"><br>
  <label for="lname">Last name:</label><br>
  <input type="text" id="lname" name="lname">
</form>

**Controlled Form**

import {useState} from 'react';

const [formData, setFormData] = useState('')

const handleUpdate = (e) => {
    e.preventDefault();
    setFormData(e.target.value)
}

  <input type="text" value={formData} onChange={(e)=>{handleUpdate(e)}} alt='text input'/>

**Fetch Requests**

// default get request 

fetch(`${process.env.REACT_APP_BACKEND_URL}/stocks/${symbol}`)
      .then(handleError)
      .then(r => r.json())
      .then(data => { 
        dispatch(updateStockInfo(data)) 
        })

fetch(`${process.env.REACT_APP_BACKEND_URL}/newlist/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
})
    .then((r) => r.json())
    .then((userRender) => {
    dispatch(updateUser(userRender));
    });

/*

React Technical Interview Notes



SDLC - Software Development Life Cycle
Agile Methodology 
	- Fast failure 
	- Ongoing release cycles, each featuring small, incremental changes from the previous release. 
	- Each iteration the product is thoroughly tested to address small issues before they evolve into more significant problems down the line
		- business stakeholders can provide input throughout the process
	- Scrum, teams work in sprints (2-4 weeks) to complete assigned tasks. Daily scrum meetings held by a scrum master monitor the progress throughout the project.
        - which means lots of quick meetings and a steady stream of feedback from fellow team members


Selenium - Webdriver used for automating web browsing and used to automate testing.
	— some app ideas include, e-commerce bot or even simpler creating a bot to beat a typing speediest website like 10 fast fingers. 


Why do you want to work at JP Morgan Chase?
Other than JP being a well known investment bank and financial services firm I have talked with peers and done my own due diligence to come to the conclusion that JP Morgan is a place to grow and also sharpen your own skills surrounded by highly intelligent and motivated individuals. I am a firm believer in personal development (as that is how I ended up taking a non-traditional path to becoming a software engineer) and I believe JP Morgan supports employees that wish to constantly improve themselves. I know JP also participates in community events and encourages employees to volunteer as well as hold Code for Good Hackathons. Overall I believe the company is a good fit for my future goals and I believe I can provide a lot of value as a member and hopefully someday a leader. 


What skills or characteristics make someone an effective remote worker? 
This is an important question to ask given the ongoing impact of the COVID-19 pandemic. Remote workers must be self-starters who are able to work with little supervision. They need excellent communication abilities as well as self-discipline and stellar time-management skills. Not everyone has those qualities, and not everyone thrives working outside an office. You want to be sure your new hire will be both productive and comfortable if working off-site. 

I am a self starter, willing to communicate and reach out to individuals if I am in need of assistance. When approaching a deadline I tend to work with a buffer because nothing ever goes perfectly, I have found that having a buffer allows me to finish just on time. 



Good Questions:

Can you expand on what your day to day is like at JPM?

What tech stack do you primarily use? 
	version control software? Specific IDE (integrated development environment)

What’s the size of the team you’re working on and how often do you deploy?

Typically how long you do you work on a project? 

I’m not sure if you have any off the top of your head but can you please provide any feedback from the interview we just completed? I’m not sure if I’ll be able to contact you after our session.



JavaScript:

JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.\\

In JS prototypes are the mechanism by which JavaScript objects inherit features from one another. Proto-typed based language, to provide inheritance, objects can have a prototype object which acts as a template object that it inherits methods and properties from… Prototypes can have instances and have prototype chains, if you were to look at the ___proto___ property you can see down the chain.

Mutable vs immutable — mutable, is a type of variable that can be changed e.g. arrays and objects
Primitive values (str, ints, boolean, bigint, undefined, symbols) are immutable
	- make the connection between let & const

Difference between var, let, and const
Var is globally scoped
Let and const came with ES6 and are block scoped
	as in you don’t need to place them in a function to limit their scope but as long as they’re put between curly braces they’ll be kept in the scope of that loop / conditional
Let is used when the variables needs to be reassigned, constant variables cannot be reassigned e.g. (an array variable has to remain an array but the contents of the array can be manipulated. Same with an object.)


A microservice is a small, independent, application that performs a highly focused service as well as possible. A web service is an internet-based interface that makes the “services” of one application available to applications running on different platforms.

The monolithic architecture is considered to be a traditional way of building applications. A monolithic application is built as a single and indivisible unit. Usually, such a solution comprises a client-side user interface, a server side-application, and a database. It is unified and all the functions are managed and served in one place.

https://www.n-ix.com/microservices-vs-monolith-which-architecture-best-choice-your-business/#:~:text=While%20a%20monolithic%20application%20is,process%20as%20a%20separate%20service.&text=Each%20service%20covers%20its%20own,%2C%20deployed%2C%20and%20scaled%20independently.

That “local only” paradigm is the most significant difference between cookies and local storage. Cookies can be read both server-side and client-side, local storage only on client-side. That’s all there is to it. If your app heavily depends on reading cookies server-side and generating content based on it then switching to local storage will mean rewriting the app. If you only use cookies to store settings such as which tab is active in the interface, then local storage is an ideal replacement.
- Cookies deleted after a specified time, smaller data size, useful when you need to communicate between the client and server.
- Local storage only deleted once user deletes it, communicates only on the client-side.
- Session deleted once a tab or window is closed

Arrow functions, introduced in ES6, provides a concise way to write functions in JavaScript.
	- Another significant advantage it offers is the fact that it does not bind its own this. In other words, the context inside arrow functions is lexically or statically defined.
	- depending on where it’s defined, the functions context (this keyword) will be bound to the function that encapsulates it, if no function encloses it then it this points to the global context

A promise is an object that may produce a single value some time in the future : either a resolved value, or a reason that it's not resolved (e.g., a network error occurred). ... Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.
- An example would be a fetch, we want to sidestep and continue with the rest of the program and will manipulate the value returned from the fetch request. 
    - .then() allows us attach callbacks once the promise has been fulfilled

Promise >> await

Async / await - These features basically act as syntactic sugar on top of promises, making asynchronous code easier to write and to read afterwards.
- This is one of the traits of async functions — their return values are guaranteed to be converted to promises.


If you are applying to Fullstack/Frontend positions, make sure you understand the Javascript fundamentals (arrow functions, ES6/ES7, JSON objects, promises/async await, CSS styling, CORS, React/Redux).

Hoisting is JavaScript's default behavior of moving declarations to the top.
- You can make use of variables before they are declared
- Good rule of thumb is is declare variables at the top of each scope
- Declaring a variable is not the same as initializing a variable


React:

￼

React - JavaScript library used for building user interfaces
	- you write it in JSX (combination of JavaScript + HTML)
	- Can make reusable components
	- Manages the flow of information by managing state via hooks or a state management library called Redux
		- example would be checking a box, true vs false state, or submitting a form 
	- Increased performance because re-rendering is done in the virtual DOM before being completed on the real DOM.
React allows for a much more efficient and interactive website building, removes the html chains we traverse when we go down trees as we can just import components and plug and play. 

￼

8. Why can’t browsers read JSX?
Browsers can only read JavaScript objects but JSX in not a regular JavaScript object. Thus to enable a browser to read JSX, first, we need to transform JSX file into a JavaScript object using JSX transformers like Babel and then pass it to the browser.

15. What is a state in React and how is it used?
States are the source of data (truth) in React. They’re objects that determine component rendering and behavior, they should be kept as simple as possible. Libraries like redux can be used to manage multiple states across your application.

JSX - JavaScript XML, makes us of JS + HTML template. 

CORS - Cross-Origin Resource Sharing, in layman’s terms it’s a mechanism that prevents unwanted domains from sending requests to your server.
- When I was creating the backend for my app I specified the CORS to only allow my frontend requests to be sent in and processed. 
- There are some malicious developers who make use of CORs to make requests that the user may not know about.



I had a few interviews today for a UI ReactJS position and these were the questions / topics covered.
The following link basically covers all these topics. Main advice, LEARN React class components. 

Also keep this LINK saved to review a day or two before your React based interviews!

JavaScript topics:

Difference between var, lets, const (don’t use var anymore)
Do you know the spread operator and discuss use cases
	- deconstructing objects 
	- use in React forms
	- use in Redux

What are promises?
	Asynchronous processes
		- used fetch() as an example

Generator function
	- Used in conjunction API Calls /
	- used in Redux Saga

What is an arrow function? What is it’s significance?

React topics
- Class components :(
- What is state
- What are props
- Describe real DOM v Virtual DOM
- Lifecycle methods in React Components
- What are refs?
- Controlled components vs uncontrolled components
- Higher Order Components
- Significance of Keys
- What do you know about React Router

Redux
- Know Redux Saga
- What are the components of Redux?
- What is a reducer?

CSS Frameworks 
	- Use of Semantic + Bootstrap
	- Some companies have their own internal libraries



*/



# Node.js Winter Solstice Magic ✨

![image](/src/Christmas_Coding_Challenge_2024.png)

This is a repo for the Women Coding Community 2024 Christmas Coding Challenge. 

This December (2024), I'll be working through an online course covering Node.js while also practicing my JavaScript with LeetCode Problems. This is the first time I've taken on this sort of coding challenge. Let's see how it goes? 

## Goals

- Feel more confident working with Node.js 
- Improve my JavaScript knowledge

## Day 1

In a bit of a rush (because I forgot the challenge started today!!!), I set up my code challenge repo and made an initial commit with a small Node.js program that generated a text file. I revisited the idea that Node.js is a JavaScript runtime. It's always hard for me to remember what runtime means. 

Essentially, Node.js is a software environment that allows JavaScript code to be executed on a server, providing a platform to run JavaScript outside of a web browser. This enables server-side development using the JavaScript language. Rather than being considered a language itself, Node.js is a runtime environment because it takes JavaScript code and executes it. Hopefully all of this will make a bit more sense by the end of the challenge. 

## Day 2 

Today in my Node.js course, I completed a small JavaScript refresher and created a basic Node.js server in the `app.js` file. The course had a small `Intro to Javascript` section, and I enjoyed the review of primitive and reference types as well as object destructuring and the spread and rest operators. I also enjoyed revisiting request and response Node.js basics. It felt good to run the server and have something happen in the browser. One Node.js topic I'm interested in learning more about tomorrow is the Event Loop. 

## Day 3 

The focus today in the course I'm following was on the Event Loop that Node.js sets up to handle event callbacks. I moved yesterday's routes out of the `app.js` file and created a `routes.js` file. 

Here's a summary of the Introduction to Node.js module: 

- How the Web Works: Client => Request => Server => Response => Client
- Node.js Program Lifecycle & Event Loop: Node.js runs non-blocking JS code and uses the Event Loop for running the program logic
- Asynchronous Code => Code doesn't run until it's needed
- Requests and Responses => Request data is parsed in chunks 
- Node.js and Core Modules => Node.js ships with core modules (ex. http, fs, path...) and can be imported into any file using `require('module')`
- Node Module System => import modules via `require('module')` and export via `module.exports` or `exports.` for multiple exports


## Day 4 

Today I practiced what I learned over the last few days. I spun up a up a server and add a couple routes. This was just practice for what I learned over the last co

## Day 5

Yesterday I didn't get up early enough to code in the morning, but today I'm up and going for it before heading to the gym. I'm having a great time with the `christmas_coding_challenge` and feel inspired by all the contributions being shared in the Slack channel. 

Today's modules I'm trying to work through cover 
- Development Workflow in Node.js and Debugging
- Working with Express.js

I deleted my work so far and made a new Node.js package using Express.js as a third party dependency. 

## Day 6

Worked with Express Router today to set up two routes files: one for admin and one for the shop that I'm building. I also added `body-parser` as a 3rd party dependency. `body-parser`, parses the response body. 

What is Express.js? Express.js allows you to build fast and scalable server-side applications using JavaScript by leveraging the power of Node.js. 

It simplifies routing and offers middleware support. Middleware are functions that have access to request and response objects, which facilitate the following: 

- Parsing requst bodies
- Handling cookies and sessions
- Implementing authentication and authorization
- Loggin and error handling

Express.js has a vast ecosystem of, you guessed it, third-party packages and middleware. This include the following: 

- Templating engines
- Database integrations
- Security enhancements
- Real-time communication


## Day 7

Today I've updated my README.md and gone over what I learned this week. 

One of my goals during the `christmas_coding_challenge` is to start to work on data structure and algorithm problems on Leetcode. I've added a `leetcode-practice` folder to this repo and will add the problems I solve on Leetcode. 

## Day 8 

Another Leetcode problem today: String Compression. 

## Day 9 

Today I was able to get up early and code. It feels good to be coding consistently on a project. 

But here I am, coding every day for the last week. Today I worked at going more deeply into Express.js routing. I deleted my work again and made a new node package: `rip-it-up-and-start-again` with a fresh `package.json`, `routes` folder, `views` folder, `util` folder for the `path.js` file. There is also now a `public` folder which contains a css file. 

## Day 10

Today I'm learing about using **dynamic content** and **templating engines** with Node.js. The course covered **EJS**, **Pug** and **Handlebars** as templating engines to use with Node.js. Each seems to have its own philosophy. **Pug**

The assignment at the end of the section was to create a new node package that uses Express.js and one of the Template Engines covered in the course material. 

Last but not least, I watched a watched the lectures covering the MVC pattern. This is a pattern I'm familiar with, but it never hurts to go back over the basics. 😄

## Day 11

Today in the Node.js course is a review of dynamic routing. Without a database set up for the project, data writes and reads are to a JSON file for the moment. 

I also watched lectures that cover SQL and NoSQL databases and the advantages and disadvantages of each type of database when it comes to both vertical and horizontal scaling capabilities. The two companies I've worked for use SQL databases, so it's great to have a small refresher of NoSQL databases and their potential scaling capabilities. 

## Day 12

After two longer days working with the Node.js course material, I’m taking a small break and just submitting work on a LeetCode problem that I’ve solved previously in Python3 but wanted to have a go at with JavaScript: [Longest Subarray of 1’s after deleting one element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/description/). 

## Day 13 

Today I hooked an SQL database up to my naisent Node.js app using the Sequelize ORM library. ORM? Object-relational mapping. In my previous roles, I've had the opportunity to use Active Record (Ruby) and the SQLAlchemy (Python). Neither of the latter were ever introduced to me. They just lived in the code bases I was working in, and I tended to learn enough to be dangerous using them.  Sequelize carries out this ORM functionality in JavaScript. 

Ultimately, the course I'm following will be using a NoSQL database, but it was nice to have this SQL refresher and Sequelize introduction.


## Day 14

Leetcode problem today. 

## Day 15

Today I reviewed NoSQL databases and set up a MongoDB database that is connected to my online shop app. 

## Day 16

What I'm working on today is using Mongoose, the Object-document mapping library that is to MongoDB what Sequelize is to SQL databases.  

## Day 17

There was no coding today. I just watched a lecture on REST APIs and took notes. Like the JavaScript refresher in the course I'm following, it felt good to review some of the foundational principles of REST APIs. 

## Day 18

Leetcode problem today. Also, I attended the final session of the Women Coding Community Design Pattern's course today. It felt like great synchronicity covering the MVC pattern on the last session of that course on patterns. 

With 7 days left to the challenge, I'm realizing I won't be completely finishing the Node.js course I'm following on Udemy, so I'm trying to make some decisions about what I can get done in the time remaining. 

## Day 19

Over the course of this week, with the course that I'm following in Node.js, I've reviewed the basics for REST APIs. Today I'll be working on decoupling the frontend from the backend of the application. What I've enjoyed about this process over the last few weeks is the practice and repetition of creating a new Node.js package each time. 

## Day 20

Day 20...the final push to finish the challente! It's a leetcode problem today. With the holiday season, I think the last few days of the challenge will be Leetcode problems, because it's proving to be a bit hard to continue working on my Node.js project. I do feel like I'm moving towards my initial goals of being more comfortable with Node.js and increasing my JavaScript knowledge by practicing data structure and algorithm problems in JavaScript. 

I might still work a little bit on the Node.js course but won't pressure myself to make commits that might be hard to make. 
#Developer Workshop
##Using Node.js and MongoDB
######Presented on March 26, 2014
######Hosted by the Hallmark Digital Innovation Lab 
######Presented by Dywayne Johnson - Digital Innovation Development Director
######Email: dywayne.johnson@hallmark.com

Agenda
--------------

In today’s workshop, we’ll use Node.js to build a simple Web app that serves a web page(s), exposes a REST API and persists data to a MongoDB database - all in “the cloud”. For the web pages, we’ll use jQuery to make AJAX calls to our REST API. We’ll create a source code repository at GitHub.com and we’ll use Git to push changes to our source code repository. We’ll also use Git to deploy our app to Heroku, which will make our app publically accessible in “the cloud”. 

Preparation
--------------

- Create a free user account at GitHub.com (for source control) 
- Create a free user account at MongoHQ.com (for a database) 
- Create a free user account at Heroku.com (for hosting our app)
- Install Node.js (http://http://nodejs.org)
- Install Git (http://git-scm.com/downloads)
- If using Windows, TortoiseGit is an additional tool that you can use to enable easy right-click features to check in your code and push it to your repository: https://code.google.com/p/tortoisegit/


Create a MongoDB database
--------------

- At MongoHQ.com, create a new database called “workshop1”
- Add a new user to our database (Admin, Users tab)

Setting up our local project workspace
--------------

We’ll use Git to create a local copy of a repository on GitHub. This will provide a fully functional example of the project that will run locally and we can start with and make enhancements to.

- Create a local project directory as our workspace - C:\sites\node.js\
- Git clone https://github.com/hmkdig/workshop1.git. This will create a new workshop1 folder with the source code.
- Install Node modules (npm install express, npm install mongoose, npm install moment). Note, this will create a /node_modules directory within your project workspace. Note, these are not included in the repository as they can always be easily reinstalled locally.


Whew! Glad that’s over. Now, let’s start writing some code!
--------------

Using any HTML editor (I recommend Sublime Text), open the server.js file


Our app will serve these pages
--------------

http://localhost:3000/
http://localhost:3000/register
http://localhost:3000/login

Our API endpoints that we have exposed
--------------

- GET /v1/accounts/ (get all)
- GET /v1/accounts/:id (get specific)
- POST /v1/accounts/
- PUT /v1/accounts/:id
- DELETE /v1/accounts/:id

You can access these endpoints from your browser (since they respond to GET requests). The PUT and DELETE endpoints must be called from script

- http://localhost:3000/v1/accounts
- http://localhost:3000/v1/accounts/{some id here}



Suggestions for Continued Learning After the Workshop
--------------

Adding unit tests for the Node.js app is an area of importance. There are many choices for unit testing tools. Mocha seems to be a popular Node module
AngularJS is becoming a popular framework for client-side development, and supports unit testing (http://angularjs.org/). Follow the tutorial under Learn/Tutorial. 


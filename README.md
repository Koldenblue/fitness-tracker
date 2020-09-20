# Fitness Tracker


## Table of Contents

1. <a href="#description">Description</a>
2. <a href="#usage">Usage</a>
3. <a href="#questions">Issues and Questions</a>
<hr><h3 id='description'>Description</h3>
This app keeps track of a user's workout statistics - relevant statistics such as workout duration and type are tracked from day to day. This is accomplished through the use of mongoDB. The deployed app may be accessed at https://dashboard.heroku.com/apps/fitness-tracker-db. 

![image](https://user-images.githubusercontent.com/64618290/93720035-5e2ef780-fb3b-11ea-99c8-74bc59cfa6df.png)

The purpose of this app is to demonstrate the use of the Mongoose Library for manipulation of a mongoDB database. Currently, may be entered and accessed by anyone with the app link. This project concentrated on database work, with the front-end design previously written. 

MongoDB provides a powerful database alternative to the more common Structured Query Library (SQL) database type. MongoDB and similar NoSQL databases are often considered to be more easily horizontally scalable than their SQL counterparts. The database structure can be spread across many servers, instead of being housed in a single, large server. This is especially useful for big data applications, in which single vertically scaled servers holding entire SQL databases become less and less practical. 

Additionally, the information in a mongoDB database and similar NoSQL databases are stored in 'documents', rather than the tables found in a SQL server. In this program, the the schema for the model of the workout document structure may be found in "models/workoutModel.js". Queries to the workout database are written in "routes/api-routes.js". Documents can be easier to work with than SQL tables, given that they have the familiar structure of a JavaScript object. For example, in this fitness tracker program, the database keeps track of an array of exercises. With the help of the Mongoose library, the exercises array can be manipulated simarly to how a basic JavaScript array is manipulated. In other words, familiar JavaScript programming techniques are used for database manipulation. 

<h3 id='usage'>Usage</h3>
Simply visit the website at https://dashboard.heroku.com/apps/fitness-tracker-db. The 'Fitness Tracker' at the top allows new workouts to be updated and completed. A 'workout' consists of several exercises in an array, so that statistics like total duration and total reps can be tracked per workout. The 'Dashboard' link at the top will show charts of statistics for workouts.

<h3 id='questions'>Issues and Questions</h3>
Issues and questions can be emailed to 'kmillergit' at the domain 'outlook.com'. The author's GitHub profile may be found at https://github.com/Koldenblue.<p><sub><sup>This readme was generated with the help of the readme generator program at https://github.com/Koldenblue/readme-generator.</sup></sub></p>
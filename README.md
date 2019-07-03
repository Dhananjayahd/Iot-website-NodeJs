##A website for controlling home ligths and other application from any where in the world using iot 

In this project i have used a rasbperry pi as a microprocessor which controls the lights of the home 
using iot through a website. And i used nodejs for backend . And mongodb for database i have used 
mongodb atlas which is free online database. when a on button is pressed for a particular light
it makes a query to the database as 'on' and also this action deletes the documents which as a key value pairs as state : 'off' and in the rasbperry pi i have used pymongo a python library which is used for connecting to the mongodb database and in the if statement i always checks for the on state in the database if that is true then i will turn on the light. When the off button is pressed this also makes a query to the database as 'off' and also this query delets all the documents which has the key value pairs as state : 'on' thus this action  makes false in the if condition in the processor thus turning off the light. In this a relay is connected to the gpio pins of pi and this relay is used to controll the
lights.

This website is live at :
[https://homeiotapp.herokuapp.com/](https://homeiotapp.herokuapp.com/)

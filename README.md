# Petful Client

## Introduction

- This shelter is based on a first come first server basis, FOR THE ANIMALS NOT YOU YOU GREEDY HUMAN. You're adopiton options are limited to the pets that have had the longest stay at the shelter out of all the pets in the shelter at the time you are visiting. Please move onto the adoption page and decide if you would like to adopt one of the wonderful pets we currently have available to you. Additionally, you must wait your turn in line before you will be presented with the ability to adopt.

## heroku link:

https://petful-server-bv.herokuapp.com/
##link to live app:
https://petful-client-liard.now.sh/
##link to server repo:
https://github.com/thinkful-ei-macaw/DSA-petful-VB-server
##link to client repo:
https://github.com/thinkful-ei-macaw/DSA-petful-VB-client

## Partners: Vendy Prum and Brannen Petit

### Tech-Stack:

- ReactJs
- NodeJs
- Express
- HTML
- JSX
- CSS
- queue, linkedlist
- heroku

### API Docs:

- POST
  - REQUEST: https://petful-server-bv.herokuapp.com/people
  - allows user's to be added to the end of the line
  - RESPONSE: 201 OK
- GET
  - REQUEST: https://petful-server-bv.herokuapp.com/pets
  - Shows the two most current animals up for adopiton from the queue
  - RESPONSE: [ {dog:{
    age: 3,
    breed: 'Golden Retriever',
    description: 'A smiling golden-brown golden retreiver listening to music.',
    gender: 'Male',
    imageURL: 'https://images.pexels.com/photos/33053/dog-young-dog-small-dog-maltese.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Zim',
    story: 'Owner Passed away'
    }}, {cat: {
    age: 2,
    breed: 'Bengal',
    description: 'Orange bengal cat with black stripes lounging on concrete.',
    gender: 'Female',
    imageURL:'https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: 'Steve French',
    story: 'Thrown on the street'
    },}]
- GET

  - REQUEST: https://petful-server-bv.herokuapp.com/people
  - Retrieves and updates the current people in line to adopt pets
  - RESPONE: ["Randy","Bubbles","Etc"]

- DELETE
  - REQUEST: https://petful-server-bv.herokuapp.com/pets
  - removes the most recently adopted pet from it's queue
  - RESPONSE: 204 No content

### Summary

- This app allows users to view the current animals up for adoption
- This apps allows users to add their name to the list
- This app simulates the adoption process before the user can adopt an animal
- This app provides the user feedback on the animal they chose to adopt
- Once at the front of line, the user can see other's line up behind them in the queue

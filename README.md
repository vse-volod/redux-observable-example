React implementation of [alyce cart](http://hrtest.alycedev.com/) for  Alyce

<!-- [Demo]() -->

## Usage
1. clone repo
2. npm i
3. npm start

## Tech stack
* Create-React-App
* Redux-Observable
* Styled Components
* Jest

## API Used
Back-end endpoints (base http://hrtest.alycedev.com):

/users - list of all users

/users/1 - user by id

/basket - current basket state

/users/1/grab - grab apple from basket for user 1

/apples/free - free all apples from users

## Project structure
```
src
│   App
│   index.js   
│
└───components
│   │   Basket
│   │   UserList
│   │   ...
│   
└───store
│   │   actions
│   │   actionTypes
│   │   epics
│   │   store
│   
└───folder2
│   │   main
```
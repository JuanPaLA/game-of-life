# GAME OF LIFE

## Motivations
A few days ago I searched for some react challenges in order to stay sharp, and I found a very interesting one: recreate Game of Life in a web app. 

## What do we have here?
This game is "cell automation" mechanism that requires just one initial input: set a distribution of dead and alive cells that simultaneously mutates into new states according to 3 rules. A cell dies in the next state with less than 2 alive neighbours, or more than 3. And becomes alive if it has 3 living neighbours.

## Why this is a good challenge?
This is a good challenge not only because it forces you to device an algortihm to control the grid regenaration, cycle by cycle, but also because it forces you to ideate a propper data structure to hold such mutable state.

In terms of react, this is a very good exercise because it requires to handle the UI based on this algorithm and data structure. For that you will need a neat distribution of responsibilities and good practices. 

## Summing my experience
It took me a few hours over 3 days to finally finish it. Along the way I understood, once again:
- The importance of don't duplicate state in children. Just send them the props they need. In this case, from the grid to the cell.
- The special care you need to use setInterval within useEffects, and the "async" nature of useState. 
- Use propper methods to mutate your state based on arrays[objects] (like array.map() and spread operator). 

I used Next JS and Styled Component. I can't believe how easy and powerful this library is to build reusable components! 

You can take a look <a href="https://game-of-life-one-virid.vercel.app/">here</a>!

## Instructions
1. In the controls modals (first thing to see when accessing the app) you are going to be able to set the initial paramaters:
- x and y axis, to indicate their extension.
- delay, to compute the cycle grid regenation time
- random or empty start. If empty, you can assign living cells by clicking on them. If random, a random distribution will be generated for you.
<img src="controls.png"/>
2. game view:
- at the top you will have button to stop, resume and access settings.
<img src="view.png"/>


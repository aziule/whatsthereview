# What's the review

Source code of [http://whatsthe.review](http://whatsthe.review).

## Everything starts with a story
I have always enjoyed movies. And by "movies", I mean **good** movies. I also use Netflix a lot.

But the following typical scenario comes when I want to watch a movie with my girlfriend:
- Dinner is ready, waiting to be eaten
- Start Netflix and start browsing movies
- As Netflix's rating is not very good, open the Mac and, for every interesting movie synopsis, manually check for it on Rotten Tomatoes 
(which is the most reliable source for movies rating IMO)
- If the movie is below 60-70% (which happens often), check another movie

As a result:
- We end up looking for movies for 10 minutes
- We have to manually check for tens of movies - how annoying...
- We are desperate and finally select a random movie
- Dinner is cold!

So, from all this laziness and frustration, I quickly prototyped [http://whatsthe.review](http://whatsthe.review) to solve:
- How not to have to manually check for movies ratings
- How to be quicker when looking for this rating
- How to eat hot

## Technologies
- NodeJS server for simple static files serving
- VueJS + VueX
- SASS
- Jest for testing

## Install
```
git clone git@github.com:Aziule/whatsthereview.git
npm install
npm run dev
```

## Test
```
npm test
```
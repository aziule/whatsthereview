# What's the review

Use speech recognition to find, in an easy and fast way, ratings about a movie. See the project live at [http://whatsthe.review/](http://whatsthe.review/)

## Everything starts with a story
I have always enjoyed movies, and by "movies" I mean **good** movies.

I mainly use Netflix to find what show to watch, but it does not provide, in my opinion, a good rating to know if a movie
was appreciated by the public or not. Hence, the following typical scenario comes when I want to watch a movie:

- Dinner is ready, waiting to be eaten
- I start Netflix and look for movies
- As Netflix does not provide rating for its movies, I go to my Mac and, for every interesting movie synopsis,
 I manually check for its rating on Rotten Tomatoes - which is the most reliable source for movies rating IMO
- If the movie is below 60-70%, I check another movie and start again

As a result:
- Finding a decent movie takes ages
- I usually have to check for tens of movies and switch between my Mac and the remote control
- I end up desperate and finally select a random movie
- Most importantly: dinner is cold!

So, from all this laziness and frustration, I quickly prototyped [http://whatsthe.review](http://whatsthe.review) to solve:
- How not to have to manually check for movies ratings
- How to get ratings quicker
- How to eat hot!

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

## Roadmap
- [ ] Manage different languages
- [ ] Store searches in internal storage for pseudo-offline use
- [ ] Handle SSL
- [ ] Add some mobile app-like navigation
- [ ] Make it a progressive web app
- [ ] Add tests on VueJS components
- [ ] Better splash screen
- [ ] Create and split dev / prod webpack config

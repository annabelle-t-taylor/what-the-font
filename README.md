# What the Font

What the Font (stylized as *What the F\*NT?!*) is a browser-based trivia game testing the user on their knowledge of various font faces. Users are untimed, and incorrect answers do not dock points. The questions get progressively more challenging as you go, and each correct answer gives the user 10 points. Users can run through two decks of ten fonts each: one for serif fonts and another for sans-serif fonts.

### Installing

To play online, simply visit the project's GitHub Pages link at [annabelle-t-taylor.github.io/what-the-font](annabelle-t-taylor.github.io/what-the-font). If you'd like a local version, you can visit [the original repo](https://github.com/annabelle-t-taylor/what-the-font) and click "Clone or download." In your terminal, navigate to the directory you want to copy the project into and run the following command:

```
git clone https://github.com/annabelle-t-taylor/what-the-font
```

Go into the main project directory:

```
cd what-the-font
```

And run the following command to open the game in your browser (replace "Chrome" with your browser of choice, if applicable):

```
chrome index.html
```

## Technologies Used

* HTML5 (including local storage)
* CSS3 (including CSS animations and keyframes)
* JavaScript
* [Canva](https://www.canva.com/) - Used to create the sample sentence cards

## Development Process
I approach programming the same way I approach writing: get some part working, *then* make it pretty. This is best demonstrated in my function design. In my earlier commits, you can see that I had some really long, broad functions: resetScore(), for instance, set the score to zero, displayed that new score, reset the board, and updated the CSS styles on the answers grid. It worked, but it was difficult to read.

Once a section worked as expected (I don't dare say "done," as that seems to be how you get bugs to crawl out from their hiding places), it came time to refactor. My goal is to always make each function to one single thing, then nest functions to achieve the final product. As a result, this makes some of my main, more abstract functions read a bit like English: startGame() calls a buildDeck() function and the presentQuestion() function, which in turn calls setString() and setAnswers() to update the DOM. Generally, functions that don't call anything are only a few lines long.

This abstraction built on itself, and eventually adding new features (like the "Play Again" screen) simply involved creating a new function that called a different combination of smaller, pre-existing functions.

## Key Features
### Local Storage: Selecting a deck to play
There is only one gameplay file (game.html), but there are currently two versions of the game: serif and sans-serif. They follow the same exact logic and only differ in what questions they present. Rather than write separate files and logics for these versions, I used HTML5's local storage capabilities to pass information between pages. I attached an event listener to both of the homepage's play buttons and wrote an appropriate Storage object based on the user's selection. Assuming that the user hasn't restarted their browser session, the object is still accessible when they go on to the next page. My game's JavaScript file, gameLogic.js, reads the object and creates the game's deck based on its value.

### Prefers-reduced-motion: A media query for accessibility
I'll admit it: I had a little too much fun learning CSS3 animations. However, with my focus on accessibility, I know that there are plenty of folks who would be much happier if the text *weren't* bouncing all over the place. I found the [prefers-reduced-motion media feature on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) and was able to attach it to my game's stylesheet, gameStyles.css. If someone has the prefered-reduced-motion attribute set to "reduce" in their browser, then they'll be presented with an animation-less (but still otherwise usable) version of my project.

### Skip Link: Tab navigation on the homepage
On the topic of accessibility, I recognize that some folks rely on keyboard navigation to get around the web. I haven't built out tab navigation for the entire game (see next section), but I did start out with a Skip Link on the homepage to allow users to toggle between the two deck options with their Tab key.

## Potential Additions and Future Goals
### Accessibility
* Add WAI-ARIA attributes to both HTML files to improve accessibility
⋅⋅⋅Web accessibility is a major passion of mine, and I'm just skimming the surface of all that is currently possible in building out more accessible applications. WAI-ARIA attributes would make scanning the project easier for screen readers, thus allowing for a broader audience.
* Expand tab navigation to the main game
⋅⋅⋅I currently have keyboard navigation enabled on the homepage in a simple tab-to-toggle function. However, I'm not currently sure how to best approach adding adding keyboard navigation to the game. I could expand my current function to allow users to tab between the four answer choices for each question, but that doesn't provide access to the Reset and Home buttons in the header. On the other hand, simply scrolling through every link on the page on a single loop seems inefficient.

### Responsive Design
* Change explicit pixel measurements in CSS to relative measurements
⋅⋅⋅In my free time, I spend more time accessing the web on my phone than I do on my desktop, but as it stands this application is not terribly mobile friendly (at least in portrait mode). I could write out a series of media queries, but I think that a lot of my design woes would be resolved with relative measurements; don't take up 650 pixels, just take up "most of the screen!"
* Create a mobile-friendly header for the game
⋅⋅⋅Even with these measurements exchanged, the header would still be terribly crowded on mobile. I think that displaying the score and a burger bar (containing the Reset and Home buttons within the bar) would make it appear less cluttered on mobile devices.

### Game Design
* Load font families into the application instead of using images of text
⋅⋅⋅As a general rule, I am against using images to represent text. I broke this rule in creating this game, though, because it dawned on me that some users may not have every font used in the game installed on their computer. There has to be a way to install the fonts directly into the program as an asset to account for this, but so far I haven't figured out how to accomplish this.
* More deck options
⋅⋅⋅Less technical and more whimsy: I'd like to expand the existing decks to include more fonts, but I'd also like to create more decks. One of my instructors, Hammad (link to GitHub in acknowledgements), suggested adding an emoji deck where users match the idea with the Linux command to generate it; I think that this would be :100:.

## Acknowledgments
* Thanks to [Hammad Malik](https://github.com/tomatohammado) for his guidance on this project, particularly as I struggled with figuring out local storage to let users select a deck.
* Snaps for [Billie Thompson](https://github.com/PurpleBooth), whose [README.md template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) is a real lifesaver (and timesaver!) for us new to markup.
* Additional kudos to the fine folks in [this appleinsider forum discussion](https://forums.appleinsider.com/discussion/57707/a-better-font-sentence) for the expansive list of pangrams used in the sample sentences.

### Skip Link: Tab navigation on the homepage
On the topic of accessibility, I recognize that some folks rely on keyboard navigation to get around the web. I haven't built out tab navigation for the entire game (see next section), but I did start out with a Skip Link on the homepage to allow users to toggle between the two deck options with their Tab key.

## Potential Addtions and Future Goals
### Accessibility
* Add WAI-ARIA attributes to both HTML files to improve accessibility
⋅⋅⋅Web accessibility is a major passion of mine, and I'm just skimming the surface of all that is currently possible in building out more accessible applications. WAI-ARIA attributes would make scanning the project easier for screen readers, thus allowing for a broader audience.
* Expand tab navigation to the main game
⋅⋅⋅I currently have keyboard navigation enabled on the homepage in a simple tab-to-toggle function. However, I'm not currently sure how to best approach adding adding keyboard navigation to the game. I could expand my current function to allow users to tab between the four answer choices for each question, but that doesn't provide access to the Reset and Home buttons in the header. On the other hand, simply scrolling through every link on the page on a single loop seems ineffecient.

### Responsive Design
* Change explicit pixel measurements in CSS to relative measurements
⋅⋅⋅In my free time, I spend more time accessing the web on my phone than I do on my desktop, but as it stands this application is not terribly mobile friendly (at least in portrait mode). I could write out a series of media queries, but I think that a lot of my design woes would be resolved with relative measurements; don't take up 650p pixels, just take up "most of the screen!"
* Create a mobile-friendly header for the game
⋅⋅⋅Even with these measurements exchanged, the header would still be terribly crowded on mobile. I think that displaying the score and a burger bar (containing the Reset and Home buttons within the bar) would make it appear less cluttered on mobile devices.

### Game Design
* Load font families into the application instead of using images of text
⋅⋅⋅As a general rule, I am against using images to represent text. I broke this rule in creating this game, though, because it dawned on me that some users may not have every font used in the game installed on their computer. There has to be a way to install the fonts directly into the program as an asset to account for this, but so far I haven't figured out how to accomplish this.
* More deck options
⋅⋅⋅Less technical and more whimsy: I'd like to expand the existing decks to include more fonts, but I'd also like to create more decks. One of my instructors, Hammad (link to GitHub in acknowledgements), suggested adding an emoji deck where users match the idea with the Linux command to generate it; I think that this would be :100:.

## Acknowledgments
* Thanks to [Hammad Malik](https://github.com/tomatohammado) for his guidance on this project, particularly as I struggled with figuring out local storage to let users select a deck.
* Snaps for [Billie Thompson](https://github.com/PurpleBooth), whose [README.md template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2) is a real lifesaver (and timesaver!) for us new to markup.
* Additional kudos to the fine folks in [this appleinsider forum discussion](https://forums.appleinsider.com/discussion/57707/a-better-font-sentence) for the expansive list of pangrams used in the sample sentences.
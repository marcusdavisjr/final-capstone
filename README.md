# BOT*SHOT
A local game development studio has decided to create a new pc game that's similar to Whack-A-Mole called **BOT*SHOT**. This game takes place in the wastelands of a post-apocalyptic future where killer robots rove the outskirts of a ruined city they destroyed in years long passed. The object of the game is to shoot as many robots as possible within the time limit as they pop in and out of vision from the rubble.

*This is a browser based game developed with JavaScript, HTML, and CSS.*

![botshot](./assets/alt/BOT-SHOT.png)

## Project Plan

### 1. Basic Feature Requirements
*Complete the code in the provided repository for the following features.*

| Feature | Action Plan |
| :--- | :--- |
| Game title | Use `h1` tag with `title` set as `id` |
| Game play grid | Use `div` elements to create a 9x9 grid for game play |
| Start Button | Add a `button` element in the HTML to start the game |
| Difficulty Settings | Use `setDelay()` to set behavior for each difficulty |
| Hard Difficulty | Use `randomInteger()` to set random timing for `Hard` difficulty |
| Moles | Use `classlist.add()` and `classlist.remove()` to show and hide "moles" |
|| Use `randomInteger()` to randomly select which mole is shown |
|| Use `forEach()` and `.addEventListener` on "moles" to track score on click |
| Game Over | Provide JS function to stop game when `timer` reaches 0 |  
| Game Start | Provide JS function to start game when `start` button is clicked |
| Score | Use `document.querySelector` and `.textContent` to update score on "mole" click event |
| Clear score | Use `document.querySelector` and `.textContent` to set score to zero on game restart |
| Timer | Add `document.querySelector` for `timer` |
|| Use `setInterval()` and `.textContent` to start and update `timer` |

### 2. Functional Enchancements 

*Additions to the functionality beyond the initial feature requirements.* 

| Feature | Action Plan |
| :--- | :--- |
| Difficulty selector | Add a `select` element and `.addEventListener` to control game difficulty | 
| Button toggle | Add `stop` button state and create JS functions to switch between `start` and `stop` states |
| Stop button | Update `stopGame()` so the `stop` button stops the game when clicked |
| Laptop breakpoint | Use `@media` query to resize the `grid` and `h1` for smaller viewport size |


### 3. Theme Overhaul

*Re-theme the existing **Whack-a-Mole!** styling with the new* **BOT*SHOT** *theme.*

| Colors |
| :--- |
| `#000000` |
| `#ffffff` |
| `#ffe591` |

| Font |
| :--- |
| `Tomorrow` *(Imported from Google Font)* |

| Audio file | Action plan |
| :--- | :--- |
| shot.mp3 | Set sound effect for succesful `click` on robot with `play()` |
| 05-reactor.mp3 | Set optional background music with `audio` tag and  `controls` attribute |

**Images:**

![botshot-assets](./assets/alt/bot-shot-images.png)

**Scoreboard:**

*Add a `scoreboard` container to house `controls`, `timer`, and `score` for the game.*

![scoreboard-wireframe](./assets/alt/scoreboard-wire.png)

## Implementation Plan
1. Fork and clone the existing **Whack-a-Mole!** repository to local machine and install the appropriate packages.
2. Reference User Stories in `README` file and use VSCode to complete code beginning with HTML structure.
3. Move on to implement functionality with Javascript.
4. Implement new theme using CSS. Create new image assets using Nano Banana, Figma, and Affinty Photo. Import new font from Google fonts. 
5. Implement addtional enhancements once User Stories have been completed.
6. Add audio elements and functions.
7. Test the game with Jest.

## Decisions, Trade-offs, & Challenges

### 1. Scoreboard Container
The background image for the new theme is a lot busier than the original **Whack-a-Mole!** image. Due to this, I placed the game controls, timer, and score, within a `div` and gave it a mostly opaque background to ensure legibility of the text. I also added a border for visual appeal.

### 2. Difficulty Selector
The original repo did not provide a way to control the difficulty of the game within the browser UI. To achieve this, I included a `select` element and looked up how to listen for the dropdown `change` event. I first placed this new listener in the `setEventListeners()` function with the `mole` event listener. However, this did not work because that listener is not called until the game begins. The difficulty needs to be changed before that the game starts. Therefore, I needed to create a separate event listener for this.   

### Button toggle 
While testing the game, I decided that I wanted the ability to stop the game manually. To do this, I decided make the `start` button a toggle button. Using GitHub Copilot, which I have installed on another machine, I vibe-coded a simple example prototype and analyzed the code. After doing this I implemented the code into this project. However it required me to completelty refactor the `stopGame()` and update the `startGame` function to get it to work.

### Audio control
I did not want to include auto-playing background audio in the game as many gamers these days listen to there own music whilst gaming. Instead I include an `audio controls` element that is fixed to the lower left corner of the viewport—-allowing the player full control of the audio experience.

### Laptop Breakpoint
While testing the game on my laptop I noticed that the bottom three `holes` of the grid were invisible. I set a breakpoint at a height of `895px` to shrink the title and the grid so that game can be playable on smaller screens. Due to time restrains, I was unable to make it adaptive for mobile.


## AI Tools Disclosure
| AI Tool | Utility |
| :--- | :--- |
| Google Gemini | Used for brainstorming and trouble-shooting |
| GitHub Copilot | Used for brainstorming |
| CodeGPT | Used for inline code suggestions and autocomplete |
| Nano Banana | Used for image generation |  

## Project Process Summary
The development of **BOT*SHOT** involves converting a standard browser-based Whack-A-Mole clone into a post-apocalyptic themed game using HTML, CSS, and JavaScript. The process requires implementing core features, enhancing functionality with a start/stop toggle, applying a thematic overhaul, and using AI tools to navigate technical challenges such as layout adjustments for smaller screens and scoreboard readability. The implementation plan focuses on repository management, code enhancement, styling, and testing to produce the final interactive experience.

## Commit History

![commits1](./assets/screenshots/Screenshot%202026-07-24%20at%206.04.48 PM.png)
![commits2](./assets/screenshots/Screenshot%202026-07-24%20at%206.04.09 PM.png)

## VSCode Screenshots *(Did not use Replit)*

![variables](./assets/screenshots/Screenshot%202026-07-24%20at%205.41.48 PM.png)

![difficulty](./assets/screenshots/Screenshot%202026-07-24%20at%205.42.08 PM.png)

![score](./assets/screenshots/Screenshot%202026-07-24%20at%205.44.27 PM.png)

![whack](./assets/screenshots/Screenshot%202026-07-24%20at%205.44.51 PM.png)

![listener](./assets/screenshots/Screenshot%202026-07-24%20at%205.45.05 PM.png)

![toggle](./assets/screenshots/Screenshot%202026-07-24%20at%205.45.23 PM.png)

![stop](./assets/screenshots/Screenshot%202026-07-24%20at%205.45.48 PM.png)

![start](./assets/screenshots/Screenshot%202026-07-24%20at%205.46.40 PM.png)




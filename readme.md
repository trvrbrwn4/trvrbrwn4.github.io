# What is this?
This site is the home of my web portfolio and various web tools I have created.

And ***this***, specifcally? This is just my documentation of it all.

Feed your curiosity and look around- you never know what you might find. :)


<br /><br /><br />


### CSS
---
[tab-style.css](css/tab-style.css) where I house sitewide styles.

Then, each page will use inline CSS for page specific features.

My main font is [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans). My heading(s) font is [Open Sans](https://fonts.google.com/specimen/Open+Sans).


<br />


## Animations

1. *twinkling*

    `.star` div elements.

    <details>
    <summary>Fade in, then out.</summary>

    ```css
    @keyframes twinkling {
        0%, 100%{
            opacity: 0;
        }
        50% {
            opacity: 1;
        }
    }
    ```
    </details>

2. *floating*

    Header elements.

    <details>
    <summary>Element drifts down, then back up.</summary>

    ```css
    @keyframes floating {
        0%, 60%, 100%  {
            transform: translateY(0);
        }
        20% {
            transform: translateY(4px);
        }
    }
    ```
    </details>

3. *rainbowSlide*

    `.rainbow` span elements.
    
    <details>
    <summary>Slide the the rainbow gradient to the left.</summary>

    ```css
    @keyframes rainbowSlide {
        0%, 100% {
            border-image: repeating-linear-gradient(135deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3) 1;
        }
        11% {
            border-image: repeating-linear-gradient(135deg, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3, #ff2400) 1;
        }
        22% {
            border-image: repeating-linear-gradient(135deg, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3, #ff2400, #e81d1d) 1;
        }
        33% {
            border-image: repeating-linear-gradient(135deg, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3, #ff2400, #e81d1d, #e8b71d) 1;
        }
        44% {
            border-image: repeating-linear-gradient(135deg, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3, #ff2400, #e81d1d, #e8b71d, #e3e81d) 1;
        }
        55% {
            border-image: repeating-linear-gradient(135deg, #1ddde8, #2b1de8, #dd00f3, #dd00f3, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840) 1;
        }
        66% {
            border-image: repeating-linear-gradient(135deg, #2b1de8, #dd00f3, #dd00f3, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8) 1;
        }
        77% {
            border-image: repeating-linear-gradient(135deg, #dd00f3, #dd00f3, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8) 1;
        }
        88% {
            border-image: repeating-linear-gradient(135deg, #dd00f3, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3) 1;
        }
        99% {
            border-image: repeating-linear-gradient(135deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3) 1;
        }
    }
    ```
    </details>

4. *highlight*

    `<section>` elements.

    <details>
    <summary>For nav, when option is clicked, highlight the corresponding page area.</summary>

    ```css
    @keyframes highlight {
        0%, 100% {
            border-color: #000;
            transform: scale(1);
        }
        50% {
            border-color: #888;
            transform: scale(1.01);
        }
    }
    ```
    </details>

5. *jiggle*

    `#workslist li` elements.

    <details>
    <summary>Rotate to the right, then the left.</summary>

    ```css
    @keyframes jiggle {
        0%, 30%, 100%  {
            transform: rotate(0);
        }
        10% {
            transform: rotate(.5deg);
        }
        20% {
            transform: rotate(-.5deg);
        }
    }
    ```
    </details>


6. *softHover*

    `#workslist li` elements.

    <details>
    <summary>While hovered, softly oscillate.</summary>

    ```css
    @keyframes softHover {
        0%, 100% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.02);
        }
    }
    ```
    </details>

7. *imgPulse*

    `#workslist img` elements.

    <details>
    <summary>Pulse the saturation level.</summary>

    ```css
    @keyframes imgPulse {
        0% {
            filter: saturate(1);
        }
        10%, 20% {
            filter: saturate(3);
        }
        30%, 100% {
            filter: saturate(1);
        }
    }
    ```
    </details>

8. *pulse*

    `#Bio img` elements.

    <details>
    <summary>Pulse the saturation level and border size.</summary>

    ```css
    @keyframes pulse {
        0%, 100% {
            filter: saturate(1);
            border-color: #000;
            box-shadow: none;
        }
        50% {
            filter: saturate(1.2);
            border-color: #00f;
            /* a four way box shadow that grows in all directions */
            box-shadow: 8px 8px 8px 8px #004, -8px 8px 8px 8px #004, 8px -8px 8px 8px #004, -8px -8px 8px 8px #004;
        }
    }
    ```
    </details>

9. *wave*

    `.wave` p elements.

    <details>
    <summary>Make element wave at you.</summary>

    ```css
    @keyframes wave {
        0%, 17% {
            transform: rotate(0);
        }
        3% {
            transform: rotate(4deg);
        }
        5% {
            transform: rotate(-4deg);
        }
        7% {
            transform: rotate(1deg);
        }
        10% {
            transform: rotate(-1deg);
        }
        12% {
            transform: rotate(.5deg);
        }
        15% {
            transform: rotate(-.5deg);
        }
    }
    ```
    </details>


<br /><br /><br />


### JavaScript
---
[tab-lib.js](js/tab-lib.js) where I house sitewide code.

Then, each page will use inline JavaScript for page specific features.


<br /><br /><br />


### Personal Portfolio
---
This site is the home of my personal brand in order to showcase my ability and style.

## Projects Section

Projects are loaded client-side during site load by parsing them through the [works.json](works.json) file.

<details>
<summary>Project json format</summary>

```json
"works": [
    {
        "title": "Project Title",
        "category": "Project Category (sets default color)",
        "tags": ["Some", "Tags", "For", "Filtering"],
        "image": "../Path/To/Image.png (512x512)",
        "description": "Short blurb.",                                              // optional
        "link": "Wrap the title, image, description in an <a> tag to this URL.",    // optional
        "iframe": "Display an iframe in this project. (SoundCloud embed)"           // optional
    },
    {},
    {}
]
```
</details>

<details>
<summary>Tags are what get used for the project filtering functionality</summary>

```javascript
"tags": [
    "Developer",
    "SoundDesign",
    "Composition",
    "Mixing",
    "SoundImplementation",
    "Mastering", // unused
    "BoomMixer"
]
```
</details>

More info later: [Project Filtering](https://github.com/trvrbrwn4/trvrbrwn4.github.io#project-filtering)


<br />


Project specific auto scroll is started upon project's insertion into `#worksList`.

More info later: [Auto-Scroll Feature](https://github.com/trvrbrwn4/trvrbrwn4.github.io#auto-scroll-feature)


<br />


## Site Specific

<details>
<summary>Star animation</summary>

```javascript
function createStar() {
    const star = createElement('div');
    star.classList.add('star');
    star.style.top = Math.floor(Math.random() * (window.innerHeight - 20)) + 10 + 'px';
    star.style.left = Math.floor(Math.random() * (window.innerWidth - 20)) + 10 + 'px';

    // document.body.appendChild(star);
    document.querySelector("main").insertBefore(star, document.querySelector("main").firstChild);

    setTimeout(() => {
        star.remove();
    }, 1000);
}
setInterval(function() {
    for (let i = 0; i < 10; i++) {
        createStar();
    }
}, 50);
```
</details>

<details>
<summary>Attach scrollIntoView and highlight animation to the `nav a` elements</summary>

```javascript
document.querySelectorAll("nav a").forEach((navSpot) => {
    const currentURL = window.location.href;
    navSpot.addEventListener("click", (e) => {
        e.preventDefault();
        history.pushState(null, null, currentURL);

        const target = document.querySelector(navSpot.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

        // wait .5 seconds, then highlight
        setTimeout(() => {
            target.classList.add('highlight');
            setTimeout(() => {
                target.classList.remove('highlight');
            }, 1200);
        }, 300);
        
    });
});
```
</details>


<br />


## Auto-Scroll Feature

<details>
<summary>The project section and each project get a auto-scroll function applied to them</summary>

```javascript
startHorizontalScroll(box, container, timer); // Project Section
startVerticalScroll(box, container, timer);   // Per Project

stopScroll(container, timer);
```
</details>

The auto-scroll is disabled while the mouse is inside of it: `mouseenter` & `touchstart`.
The auto-scroll timer resets and starts again on: `mouseleave`.

Each project already has its auto-scroll timer started by now.

<details>
<summary>So just start it for the Project Section</summary>

```javascript
// initializes scrolling on worksList
 timerContainer["works"] = null;
 worksBox.scrollTo(0, 0);
 worksBox.addEventListener('mouseenter', () => stopScroll(timerContainer, "works"));
 worksBox.addEventListener('mouseleave', () => startHorizontalScroll(worksBox, timerContainer, "works"));
 worksBox.addEventListener('touchstart', () => stopScroll(timerContainer, "works"));
 startHorizontalScroll(worksBox, timerContainer, "works");
```
</details>


<br />


## Project Filtering

For each `#menuProjects li`, on `click` or `touchstart`, run filter logic.

Basic rundown:
1. Remove `#active` from the current `#active` option.
2. Set target as `#active`.
3. For each project:
   - reset auto-scroll.
   - replace current classes with original parsed classes.
   - if `project.classList.contains(filterTag)`, show. Otherwise, hide.
4. Reset auto-scroll of project section.


<br />


## Dynamic Site Title

After 30s of inactivity, the `document.title`, or tab name, will change.

Format is: `> TAB [...]`, where a chosen title gets put inserted into the square brackets.

Once a title is chosen, periods are added on every 10s until `currentTitle.includes("..........]")`, then a new title will be chosen, and periods reset back to `...` .

Title options depend on whether the tab has focus, `document.hasFocus()`, or not.
<details>
<summary>Title options</summary>

```javascript
const activeChoices = "Awaiting : Listening : Observing".split(" : ");
const inactiveChoices = "Communicating : Pinging".split(" : ");
```
</details>
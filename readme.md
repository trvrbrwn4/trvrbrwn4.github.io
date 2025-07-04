# What is this?
This site is the home of my web portfolio and various web tools I have created.

And ***this***, specifcally? This is just my documentation of it all.

Feed your curiosity and look around- you never know what you might find. :)


<br /><br /><br />


## CSS

[tab-style.css](css/tab-style.css) where I house sitewide styles.

Then, each page will use inline CSS for page specific features.

My main font is [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans). My heading(s) font is [Open Sans](https://fonts.google.com/specimen/Open+Sans).


<br />


### Animations
---

<details>
<summary>View all animations</summary>

<table>
  <tr>
    <td> Targets </td>
    <td> CSS Code </td>
  </tr>
  <tr>
    <td>

`.star` div elements

</td>
    <td>

```css
/* star flash */
@keyframes twinkling {
    0%, 100%{
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}
```

</td>
  </tr>
  <tr>
    <td>

Header elements

</td>
    <td>

```css
/* drift down, then back up */
@keyframes floating {
    0%, 60%, 100%  {
        transform: translateY(0);
    }
    20% {
        transform: translateY(4px);
    }
}
```

</td>
  </tr>
  <tr>
    <td>

`.rainbow` span elements

</td>
    <td>

```css
/* slide the rainbow divider */
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

</td>
  </tr>
  <tr>
    <td>

`<section>` elements

</td>
    <td>

```css
/* flash a page section */
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

</td>
  </tr>
  <tr>
    <td>

`#workslist li` elements

</td>
    <td>

```css
/* subtle jiggle of project elements */
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

</td>
  </tr>
  <tr>
    <td>

`#workslist li` elements

</td>
    <td>

```css
/* subtle pulse of project element */
@keyframes softHover {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.02);
    }
}
```

</td>
  </tr>
  <tr>
    <td>

`#workslist img` elements

</td>
    <td>

```css
/* subtle image flash for projects */
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

</td>
  </tr>
  <tr>
    <td>

`#Bio img` elements

</td>
    <td>

```css
/* subtle glowing effect of headshot */
@keyframes pulse {
    0%, 100% {
        filter: saturate(1);
        border-color: #000;
        box-shadow: none;
    }
    50% {
        filter: saturate(1.2);
        border-color: #00f;
        box-shadow: 8px 8px 8px 8px #004, -8px 8px 8px 8px #004, 8px -8px 8px 8px #004, -8px -8px 8px 8px #004;
    }
}
```

</td>
  </tr>
  <tr>
    <td>

`.wave` p elements

</td>
    <td>

```css
/* wave animation for bio title */
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

</td>
  </tr>
</table>

</details>



<br /><br /><br />


## JavaScript

[tab-lib.js](js/tab-lib.js) where I house sitewide code.

Then, each page will use inline JavaScript for page specific features.


<br /><br /><br />


## Personal Portfolio

This site is the home of my personal brand in order to showcase my ability and style.

### Projects Section
---

Projects are loaded client-side during site load by parsing them through the [works.json](works.json) file.

<details>
<summary>Project json format</summary>

```javascript
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


Project specific auto-scroll is started upon project's insertion into `#worksList`.

More info later: [Auto-Scroll Feature](https://github.com/trvrbrwn4/trvrbrwn4.github.io#auto-scroll-feature)


<br />


### Site Specific
---

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


### Auto-Scroll Feature
---

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


### Project Filtering
---

For each `#menuProjects li`, on `click` & `touchstart`, 
1. Remove `#active` from the current `#active` element.
2. Set clicked element as `#active`.
3. For each project:
   - reset auto-scroll.
   - replace current classes with original parsed classes.
   - if `project.classList.contains(filterTag)`, show. Otherwise, hide.
4. Reset auto-scroll of project section.


<br />


### Dynamic Site Title
---

After 30s of inactivity, the `document.title`, or tab name, will change.

Format is: `> TAB [...]`, where a chosen title gets inserted after the first square bracket.

Once a title is chosen, periods are added on every 10s until `currentTitle.includes("..........]")`, then a new title will be chosen, and periods reset back to `...` . This cycle is 70s.

Title options depend on whether the tab has focus, `document.hasFocus()`, or not.
<details>
<summary>Title options</summary>

```javascript
const activeChoices = "Awaiting : Listening : Observing".split(" : ");
const inactiveChoices = "Communicating : Pinging".split(" : ");
```
</details>


<br /><br /><br />


## MusiCalc

This site is a webtool for musica calculations.

The main module section houses the Key Selector + Mode Selector, and the Tempo Calculator + Note Selector.

The extra module section houses many modules, which are loaded in from the [modules.json](modules.json) file.

### Main Module Section
---
4 main modules:
1. **Key Selector**: Select a key ~~and mode~~, then see the corresponding scale.
2. **Mode Selector**: Select a ~~key and~~ mode, then see the corresponding scale.
3. **Tempo Calculator**: Calculate time + note values given a BPM.
4. **Note Selector**: Select a note and see its note + time values.
   

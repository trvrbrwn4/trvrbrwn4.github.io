# What is this?
This site is the home of my web portfolio and various web tools I have created.

And ***this***, specifcally? This is just my documentation of it all.

Feed your curiosity and look around- you never know what you might find. :)





## CSS
[tab-style.css](css/tab-style.css) where I house sitewide styles.

Then, each page will use inline CSS for page specific features.

My main font is [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans).

My heading(s) font is [Open Sans](https://fonts.google.com/specimen/Open+Sans).

### Animations

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

<br />

1. *floating*

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

<br />

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

<br />

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

<br />

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

<br />

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

<br />

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

<br />

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

<br />

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





## JavaScript
[tab-lib.js](js/tab-lib.js) where I house sitewide code.

Then, each page will use inline JavaScript for page specific features.

### Portfolio

<details>
<summary>View Portfolio Details</summary>

</details>
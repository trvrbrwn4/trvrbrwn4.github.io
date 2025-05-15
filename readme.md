# Personal Portfolio
Welcome to the nitty gritty of my portfolio! This is where I have documentation about my portfolio- mainly for personal use, but thought it would be cool to make a readme file for GitHub.

## CSS
[tab-style.css](css/tab-style.css) where I house sitewide styles.

My main font is [IBM Plex Sans](https://fonts.google.com/specimen/IBM+Plex+Sans).

My heading(s) font is [Open Sans](https://fonts.google.com/specimen/Open+Sans).

### Animations
1. twinkling
    `.star` div elements.

    Fade in, then out.

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

<br />

1. floating
    Header elements.

    Element drifts down, then back up.

<br />

3. rainbowSlide
    `.rainbow` span elements.

<br />

4. highlight
    `<section>` elements.
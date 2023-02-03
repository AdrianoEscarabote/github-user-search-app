import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}
/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}
/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}
/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
  line-height: 0;
}
/* this fixes the error in the animation that was displaying the scrollbar */
// html,
// body {
//   max-width: 100%;
//   overflow: hidden;
// }
/* remove all button styles */
button {
  all: unset;
  cursor: pointer;
}
/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}
/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

#root {
  width: 100%;
  max-width: 730px;
}

body {
  min-height: 100vh;
  line-height: 1.3;
  text-rendering: optimizeSpeed;
  background-color: gray;
  color: white;
  font-family: 'Space Mono', monospace;
  display: flex;
  align-items: center;
  justify-content: center;
}`;
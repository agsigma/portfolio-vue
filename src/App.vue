<template>
  <div id="app">
    <header id="masthead" class="site-header" role="banner">
      <h1 class="site-title">
        <span>Andrew Grzywocz</span>
      </h1>
      <h2 class="site-description">
        <span>Portfolio</span>
      </h2>
    </header>
    <div id="nav">
      <router-link to="/category/portfolio">Portfolio</router-link>
      <router-link to="/category/other">Other</router-link>
      <router-link to="/tag/codility">Codility</router-link>
      <router-link to="/page/contact">Contact</router-link>
    </div>
    <div id="wrapper">
      <router-view />
    </div>
    <div id="footer">
      <p class="copyright">Based on Theme designed by <a href="https://www.gavick.com/">GavickPro.com</a></p>
      <p class="poweredby">Proudly powered by Vue</p>
    </div>
  </div>
</template>

<style>
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}


#wrapper {
  max-width: 1260px;
  margin: 0px auto;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #777;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.8;
}

#nav {
  padding: 30px 0px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #5cc1a9;
  padding: 0px 15px;
  font-weight: 400;
  font-size: 14px;
}

@media (min-width: 360px) {
  #nav a {
    font-size: 16px;
  }
}

#nav .router-link-active {
  font-weight: 600;
}

#masthead span {  
  color: #5cc1a9;
  padding: 0px 15px;  
}


#nav a:hover {
  color: #777;
}

#footer {
  margin-top: 25px;
  text-align: center;
  padding: 20px 0px;
  background: white;
}

body {
  background: #f1f1f1;
  color: #777;
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.8;
  padding-bottom: 100px;
}

a {
  color: #5cc1a9;
  text-decoration: none;
  transition: color 0.15s ease-in-out;
}
a:hover {
  color: #777;
}

.site-header {
  background: #fff;
  color: #000;
  height: 64px;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}
.site-title {
  font-size: 16px;
  font-weight: 700;
  padding-top: 15px;
  margin: 0;
  text-transform: uppercase;
}
.site-description {  
  font-size: 13px;
  font-family: Arial, sans-serif;
  font-weight: 300;
  margin: -5px 0 0 0;
  line-height: 20px;
  opacity: 1;
  text-transform: uppercase;
  text-align: center;
}
</style>

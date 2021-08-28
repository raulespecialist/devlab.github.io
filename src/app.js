import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
  return (
    <Router>
      <div>
     

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div class="center" id="index">
        <figure class="ampstart-image-fullpage-hero m0 relative mb4">
        <amp-img width="404" height="720" alt="Welcome to DevLab.World Development lab" layout="responsive" src="" media="(max-width: 415px)"></amp-img>
        <amp-img height="720" alt="Welcome to DevLab.World Development lab" layout="fixed-height" src="" media="(min-width: 416px)"></amp-img>
        <figcaption class="absolute top-0 right-0 bottom-0 left-0">
        <header class="p3">
          <h1 class="ampstart-fullpage-hero-heading mb3">
            <span class="ampstart-fullpage-hero-heading-text">
              <span class="h6 block caps"></span><span class="h1 block bold caps my1">Dev 🌡 Lab</span><span class="h6 block caps1">Software Development</span>
            </span>
          </h1>

        </header>
        <div class="fakeMenu">
        <div class="fakeButtons fakeClose"></div>
        <div class="fakeButtons fakeMinimize"></div>
        <div class="fakeButtons fakeZoom"></div>
        </div>
        <div class="fakeScreen">
        <p class="line1">$ developments<span class="cursor1">_</span></p>
        <p class="line2">Out of the box I include NodeJS, React, Python, Php, to build your app.<span class="cursor2">_</span></p>
        <p class="line3">[?] What more would you like? (hi@devlab.world)<span class="cursor3">_</span></p>
        <p class="line4">><span class="cursor4">_</span></p>
        </div>
        <footer class="absolute left-0 right-0 bottom-0">
        <a className="ampstart-btn inline-block ampstart-fullpage-hero-cta h5 m3 text-decoration-none" href="/about">Projects</a>
        </footer>
        </figcaption>
        </figure>
      </div>
  );
}

function About() {
  return (
    <main id="content" role="main">
      <article class="px3">
            <h2 id="story" class="my4 theme2-anchored">Software solutions</h2>
            <p class="mb1 ampstart-dropcap">We develop all kinds of high-level solutions, in an agile and efficient way in the field of cloud computing, 
            at the infrastructure and platform layers. To achieve this objective, 
            we have a team of professionals with long experience in the application of the main OpenSource solutions, 
            for the generation and automation of Cloud platforms.</p>
      </article>
    </main>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

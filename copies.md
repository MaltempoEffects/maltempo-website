body, h1, p, a {
    margin: 0;
    padding: 0;
}

body {
    background-color: #030303;

    box-sizing: border-box;
    font-family: "Noto Sans", Arial, Helvetica, sans-serif;
    font-size: 1.125rem;
}

main {
    height: 20px;
}

/***** TYPOGRAPHY *****/
/**********************/

h1,
.nav-bar {
    color: #fff;
    text-transform: uppercase;
}

h1 {
    font-size: 1.4rem;
    letter-spacing: 1px;
}

.logo {
    width: 45px;
}

.navbar-list-item {
    list-style-type: none;
    font-size: 1rem;
    letter-spacing: 0.15em; 
}

@media (min-width: 439px) {
    h1 {
        font-size: 1.75rem;
        letter-spacing: 2px;
    }
    .logo {
        width: 60px;
    }
    .navbar-list-item {
        font-size: 1rem;
        letter-spacing: 0.25em; 
    }
}

@media (min-width: 769px) {
    h1 {
        font-size: 2rem;
        letter-spacing: 4px;
    }
    .logo {
        width: 80px;
    }
    .navbar-list-item {
        font-size: 1rem; 
    }
}

@media (min-width: 1024px) {
    h1 {
        font-size: 2.5rem;
        letter-spacing: 8px;
    }
    .logo {
        width: 110px;
    }

    .navbar-list-item {
        font-size: 1.3rem; 
    }
}


/***** LAYOUT *****/
/******************/

/***** HEADER *****/

.background {
    background-color: #030303;
}

.content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1400px;
    width: 90%;
    margin: 0 auto; 
    padding-block: 1em;
}

.banner {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-block-end: 1em;
    border-bottom: 1px solid #fff;
}

@media (min-width: 619px) {
    .content {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #fff;
    }
    .banner {
        width: 75%;
        justify-content: flex-start;
        padding-block-end: 0;
        border-bottom: none;
    }
}

.main-title {
    order: 2;
}

.img-link {
    order: 1;
    margin-inline-start: 0.5em;
}

@media (min-width: 439px) {
    .img-link {
        margin-inline-start: 0.2em;
    }
}

.main-title {
    margin-inline-start: 0.5em;
}

.nav-bar {
    width: 100%;

}

.navbar-list {
    display: flex;
    justify-content: flex-start; 
    padding: 0;
    margin: 0; 
}

.navbar-link,
.navbar-link:visited {
    display: inline-block;
    background-color: #030303;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
}

.navbar-link:hover, 
.navbar-link:focus {
    background-color: #fff;
    color: #030303;
}

.navbar-link:active {
    background-color: #767676;
    color: #fff;
}

@media (min-width: 619px) {
    .nav-bar {
        width: 20%;
    }
    .navbar-list {
        justify-content: flex-end;
    }
    .navbar-link {
        padding-inline: 0.7em;
        border: 1px solid #fff;
        border-radius: 2em;
        margin-inline-start: 0.5em;
    }
}

@media (min-width: 699px) {
    .navbar-link {
        padding-inline: 1em;
        border: 1px solid #fff;
        border-radius: 2em;
    }
}


/***** FOOTER *****/

.ctnt-footer {
    display: flex;
    flex-direction: column;
    border-block-start: 1px solid #fff;
    padding: 0;
}

.footer-links {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start; 
}

.footer-page-links {

}

.footer-nav-list {
    width: 100%;
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 0
}

.footer-nav-list-item {
    color: white;
    font-size: 0.75rem;
}

.footer-link {
    color: #fff;
    text-decoration: none;
}
.footer-link:hover,
.footer-link:focus {
    text-decoration: underline;
}


.footer-social-links {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-block: 1em;
    border-block-start: 1px solid #fff;
    border-block-end: 1px solid #fff;  
}

.link-social {
    width: 1.5em;
}
.img-social {
    display: block;
    width: 100%;
}

.cc-message,
.cc-link {
    color: #fff;
    letter-spacing: 1px;  
}
.cc-message {
    font-size: 0.5rem;
    text-transform: uppercase;
}
.cc-link {
    width: 0.1em;
    text-decoration: none;
}
.cc-image {
    width: 1em;
}

@media (min-width: 619px) {

}

@media (min-width: 1024px) {

}








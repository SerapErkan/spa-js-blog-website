
const router = (event) => {
    let route = event.target.dataset.route;

    if (route === "/" || route === "/home") {
        setHomePage();
        console.log("home");
    } else if (route === "/projects") {
        setProjectsPage();
    } else if (route === "/ability") {
        setAbilityPage();
    } else if (route === "/contact") {
        setContactPage();
    } else {
        setNotFoundPage();
    }
};

let root = document.getElementById("root");
let rooteElements = document.querySelectorAll("*[data-route]");
for (let x in rooteElements) {
    rooteElements[x].onclick = router;
}
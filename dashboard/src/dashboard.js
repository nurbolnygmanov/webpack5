import NavigationBar from "./components/navigation-bar";
import "./dashboard.scss";
const url = window.location.pathname;

const navItems = [
  {
    url: "/home",
    title: "Home",
  },
  {
    url: "/about",
    title: "About",
  },
];

const navBar = new NavigationBar();
navBar.render(navItems);

if (url === "/home") {
  import("HomePageApp/HomePage").then((module) => {
    const HomePage = module.default;
    const homePage = new HomePage();
    homePage.render();
  });
  const button = document.createElement("button");
  button.innerHTML = "dashboard button";
  document.querySelector("body").appendChild(button);
} else if (url === "/about") {
  import("AboutPageApp/AboutPage").then((module) => {
    const AboutPage = module.default;
    const aboutPage = new AboutPage();
    aboutPage.render();
  });
}

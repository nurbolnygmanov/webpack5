import "./heading.scss";

export class Heading {
  render(pageName) {
    const h1 = document.createElement("h1");
    h1.innerHTML = `${pageName}`;
    h1.classList.add("heading");

    document.querySelector("body").appendChild(h1);
  }
}

if (process.env.NODE_ENV === "production") {
  console.log("production");
} else {
  console.log("dev");
}

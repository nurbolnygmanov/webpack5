import "./caption.scss";

export class Caption {
  render(text) {
    const p = document.createElement("p");
    p.innerHTML = text;

    document.querySelector("body").appendChild(p);
  }
}

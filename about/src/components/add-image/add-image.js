import jslogo from "./jslogo.jpg";
import "./add-image.scss";

export class AddImg {
  render() {
    const img = document.createElement("img");
    img.src = jslogo;
    img.alt = "js logo";
    img.classList.add("image");

    document.querySelector("body").appendChild(img);
  }
}

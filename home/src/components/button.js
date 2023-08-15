import "./button.scss";

export class Button {
  render() {
    const body = document.querySelector("body");
    const btn = document.createElement("button");
    btn.innerHTML = "Click ME";

    btn.onclick = function () {
      const p = document.createElement("p");
      p.innerHTML = "Text created";
      p.classList.add("paragraph");

      body.appendChild(p);
    };

    body.appendChild(btn);
  }
}

// console.log(test);

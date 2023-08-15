export default class NavigationBar {
  render(navigationItems) {
    const listItems = navigationItems.map((n) => {
      return `
       <li>
        <a href="${n.url}">${n.title}</a>
       </li>
        `;
    });
    const list = document.createElement("ul");
    list.innerHTML = listItems.join("");

    document.querySelector("body").appendChild(list);
  }
}

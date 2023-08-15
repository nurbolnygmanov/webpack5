import { Button } from "../button";
import { Heading } from "../heading/heading";

export default class HomePage {
  render() {
    const btn = new Button();
    btn.render();

    const heading = new Heading();
    heading.render("home");
  }
}

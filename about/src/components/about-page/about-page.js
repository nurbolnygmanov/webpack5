import { Heading } from "../heading/heading";
import { AddImg } from "../add-image/add-image";
import _ from "lodash";

export default class AboutPage {
  render() {
    const heading = new Heading();
    heading.render(_.upperFirst("About"));

    const jsImg = new AddImg();
    jsImg.render();

    import("CaptionApp/Caption").then((module) => {
      const Caption = module.Caption;
      const captionElement = new Caption();
      captionElement.render("JS is awesome federated");
    });
  }
}

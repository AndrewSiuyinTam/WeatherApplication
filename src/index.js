import { renderHeader } from "./header";
import {display} from "./api";

const component = () => {
    const content = document.getElementById('content');
//     content.appendChild(renderHeader);
//     return content;
// }
// document.body.appendChild(component);

// content.appendChild(renderHeader);
// return content;
renderHeader();
display();
// fetchAPI();
}
component();
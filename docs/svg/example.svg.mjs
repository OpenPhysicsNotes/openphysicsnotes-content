/*
File "docs/svg/example.svg.mjs"

Steps to run this example:
 1. Install Node.js >= 18.0.0
 6. run `node docs/svg/example.svg.mjs` and the output will be in `docs\svg\example.svg`

Steps to run this example and edit the code in a "live" mode:
 1. Install Node.js >= 18.0.0
 3. run `npm i -g nodemon` if you don't have nodemon installed
 4. run `nodemon docs/svg/example.svg.mjs` and the output will be in `docs\svg\example.svg`
 5. if you are using VSCode, you can see the the output in the "SVG Preview" tab
    and it will update automatically when you save the file!

Steps to run this example and edit both the code and other utils in a "live" mode:
 1. Install Node.js >= 18.0.0
 2. on a separate terminal, run `tsc --watch`
 3. run `npm i -g nodemon` if you don't have nodemon installed
 4. run `nodemon docs/svg/example.svg.mjs` and the output will be in `docs\svg\example.svg`
 5. if you are using VSCode, you can see the the output in the "SVG Preview" tab
    and it will update automatically when you save the file or any other dependency!
 6. Try for exmaple to edit `src/modules/SVG.ts` and see the changes in the output! TODO CHECK THIS PATH!!!

*/

// we import some stuff from the SVG module
import {
    SVG,
    SvgCircle,
    SvgElement,
    svgFilename,
    SvgGroup,
    SvgImage,
    SvgLine,
    SvgPolyline,
    SvgRectangle,
    SvgText,
    SvgTextSpan,
    SvgUse
} from '../../scripts/SVG.js'

// you can also import the whole module and use it as `SVG.SVG` or `SVG.SvgCircle` etc.
// import * as SVG from '../../scripts/SVG.js'

// while running single module scripts, __filename and __dirname are not defined
// we have to define them manually
import path from 'path'
import { fileURLToPath } from 'url';
import fs from 'fs'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// now we create a new SVG object with shape 200x200 pixels
var svg = new SVG(200, 200);

// we can define a viewbox for the SVG
// in this way if we change the resolution of the SVG, the content will be scaled accordingly
svg.viewBox = [0, 0, 100, 100];

// we can also define a title and a description for the SVG
svg.title = 'Example SVG';
svg.description = 'This is an example SVG';

// we can add a background color to the SVG
svg.background = 'white';

// you can add a border to the SVG as a visual reference/aid
//svg.squared = true;

let line = svg.line(5, 20, 5, 95);
svg.add(line);

let y = 90;
line = new SvgLine(0, y, 90, y);
line.strokeDashArray = [2,2,4,2];
line.stroke = "red";
svg.add(line);

// now we create a group
let group = (() => {
    let g = new SvgGroup();

    let x = 7;
    let text = new SvgText(x, 13, 'Hello');
    let tspan = new SvgTextSpan("world!");
    tspan.x = x;
    text.children.push(tspan);
    g.children.push(text);
    text.fontSize = 5;
    text.fontType = 'italic';

    let rect = new SvgRectangle(0, 0, 30, 30);
    g.children.push(rect);
    rect.stroke = 'blue';
    rect.fill = 'none';

    return g;
})();
svg.children.push(group);

// we duplicate the group
let group2 = group.clone();
svg.children.push(group2);

group.transform = 'translate(10, 10)';
group2.transform = `translate(50, 30) rotate(45, 15, 15)`;

// The above clone() method is not advised because it will
// duplicate the group code inside the svg
// Another way is using a "define" group
{
    // we create a group that we will use as a define
    let group_def = group.clone();
    group_def.transform = "";
    group_def.id = 'my_group_def';

    // we add the group to the svg def section
    // so it will be defined but not rendered,
    // placing it inside the children array is also valid
    // and will render it
    svg.defs.push(group_def);

    // now we can reference the group using the `use` element
    // as many times as we want and the code written inside the
    // svg will be minimized

    let use = new SvgUse('#my_group_def');
    use.attributes["transform"] = "translate(10, 60) scale(0.5)";
    svg.children.push(use);

    use = new SvgUse('#my_group_def');
    use.attributes["transform"] = "translate(25, 60) scale(0.5) rotate(90, 15, 15)";
    svg.children.push(use);
}

// Now we will display an image
{
    const FAVICON_PATH = path.join(__dirname, '../../favicon2.svg');

    // create an image element
    let image = new SvgImage(FAVICON_PATH);
    svg.children.push(image)
    image.width = 20
    image.height = 20

    image.y = 70;
    image.x = 60;

    // By default, the image ulr will be transformed into a base64 string
    // so that the resulting SVG is self contained. You can disable this
    // behavior by setting the `try_convert_base64` property to false:
    //image.try_convert_base64 = false;

    const GOOGLE_FAVICON = "//google.com/favicon.ico";

    //image = new SvgImage("https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png");
    image = new SvgImage(GOOGLE_FAVICON);
    svg.children.push(image)
    image.width = 10
    image.height = 10
    image.x = 85;
    image.y = 75;
}


// finally, we render the SVG to a file
let code = svg.render2String().then(txt => {
    let file = svgFilename(__filename);
    fs.writeFileSync(file, txt);

    let execution_dir = process.cwd()
    console.log(`SVG file saved to ${path.relative(execution_dir, file)}`);
});
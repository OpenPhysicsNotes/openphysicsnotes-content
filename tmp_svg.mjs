

import { SVG, SvgCircle, SvgElement, SvgGroup, SvgImage, SvgLine, SvgPolyline, SvgRectangle, SvgText } from './src/SVG.js'

import fs from 'fs'


var svg = new SVG(100, 100);

let c = new SvgLine(0, 50, 50, 50);
svg.squared = true;
c.strokeDashArray = [1,2,4];

let p = new SvgPolyline([[50, 50], [0, 50]]);
svg.children.push(p);
p.stroke = 'red';
p.fill = 'none';

let text = new SvgText(20, 20, 'Hello World');
svg.children.push(text);
text.fontSize = 5;
text.fontType = 'italic';

let rect = new SvgRectangle(10, 10, 50, 50);
svg.children.push(rect);
rect.stroke = 'blue';
rect.fill = 'none';

let group = new SvgGroup();
group.children.push(rect);
group.children.push(text);
svg.children.push(group);
//group.
group.transform = 'translate(10, 10) rotate(45 30 30)';
text.fontSize = 10;

let image = new SvgImage("./favicon2.svg");
svg.children.push(image)
image.width = 100
image.height = 30
//image.try_convert_base64 = false;

//let imageData = new ImageData(100, 100);

let code = svg.render2String().then(txt => {
    // console.log(txt);
    fs.writeFileSync('tmp_svg.svg', txt);
});

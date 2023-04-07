

import * as SVG from '../../../../../../scripts/SVG.js'

import path from 'path'
import { fileURLToPath } from 'url';
import fs from 'fs'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

var svg = new SVG.SVG(200, 100);
svg.viewBox = [0, 0, 100, 50];
svg.background = 'white';

let image = new SVG.SvgImage("https://upload.wikimedia.org/wikipedia/commons/e/ec/SchrodingerEquation.svg");
svg.add(image);
//image.try_convert_base64 = false;
image.width = 100;
image.height = 25;
image.y = 10;

let N = 100;
let xx = Array.from({length: N}, (_, i) => {
    let t = i/(N - 1);
    let x = -1 * (1 - t) + 1 * t;
    return {
        x: t * 100,
        y: 50 -(Math.cos(x * 20) + 1) * Math.exp(-(x*2)*(x*2)) * 25
    }
});

let p = new SVG.SvgPolyline;
p.points = [...xx, {x:100, y:200}, xx[0]];
p.stroke = 'red';
p.fill = SVG.rgba(255, 0, 0, 0.25);
svg.add(p);

xx = Array.from({length: N}, (_, i) => {
    let t = i/(N - 1);
    let x = -1 * (1 - t) + 1 * t;
    return {
        x: t * 100,
        y: 50 -(Math.sin(x * 20) + 1) * Math.exp(-(x*2)*(x*2)) * 25
    }
});

p = new SVG.SvgPolyline;
p.points = [...xx, {x:100, y:200}, xx[0]];
p.stroke = 'blue';
p.fill = SVG.rgba(0, 0, 255, 0.25);
svg.add(p);

svg.squared = true;



let code = svg.render2String().then(txt => {
    fs.writeFileSync(SVG.svgFilename(__filename), txt);
});
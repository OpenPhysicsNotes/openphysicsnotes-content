

import * as S from '../../../../../../../scripts/SVG.js'
import { svgFilename } from '../../../../../../../scripts/SVG.js';


import path from 'path'
import { fileURLToPath } from 'url';
import fs from 'fs'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


let svg = new S.SVG(200, 200);
svg.viewBox = [0, 0, 100, 100];

svg.background = 'white';
svg.squared = true;

let marker = svg.makeArrowMarker("arrow");

let sdr = (x, y) => {
    let ml = 10;
    let L = 70;
    let line = svg.line(x-ml, y, x+L, y);
    line.markerEnd = marker.id;
    line = svg.line(x, y+ml, x, y-L);
    line.markerEnd = marker.id;
}

sdr(15, 80);

svg.text("x", 80, 90);
svg.text("t", 20, 20);

let hr = (y) => {
    svg.line(5, y, 90, y).stroke = "rgba(128, 128, 128, 0.75)";
}

hr(70);
hr(55);
hr(40);
hr(25);

svg.circle(30, 55, 2).fill = "red";
svg.circle(70, 55, 2).fill = "red";

svg.text("simult.", 35, 50).fontSize = 10;

// TODO \vec{x}

let code = svg.render2String().then(txt => {
    let file = svgFilename(__filename);
    fs.writeFileSync(file, txt);

    let execution_dir = process.cwd()
    console.log(`SVG file saved to ${path.relative(execution_dir, file)}`);
});
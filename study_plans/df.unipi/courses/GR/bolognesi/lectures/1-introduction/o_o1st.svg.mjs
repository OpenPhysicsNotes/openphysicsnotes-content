

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
    let L = 50;
    let line = svg.line(x-ml, y, x+L, y);
    line.markerEnd = marker.id;
    line = svg.line(x, y+ml, x, y-L);
    line.markerEnd = marker.id;
}

sdr(15, 80); svg.text("O'", 20, 40);
sdr(45, 60); svg.text("O", 50, 20);

//let line = svg.line(5, 20, 5, 95);

let code = svg.render2String().then(txt => {
    let file = svgFilename(__filename);
    fs.writeFileSync(file, txt);

    let execution_dir = process.cwd()
    console.log(`SVG file saved to ${path.relative(execution_dir, file)}`);
});
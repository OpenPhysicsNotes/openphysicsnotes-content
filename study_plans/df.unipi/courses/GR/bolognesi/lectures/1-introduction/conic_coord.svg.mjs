

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

let arrow = (x, y, dx, dy) => {
    let line = svg.line(x, y, x+dx, y+dy);
    line.markerEnd = marker.id;
    return line;
}

arrow(10, 60, 80, 0);
arrow(50, 90, 0, -80);

arrow(25, 85, 70, -70).stroke="red";
arrow(75, 85, -70, -70).stroke="red";

//let line = svg.line(5, 20, 5, 95);

let code = svg.render2String().then(txt => {
    let file = svgFilename(__filename);
    fs.writeFileSync(file, txt);

    let execution_dir = process.cwd()
    console.log(`SVG file saved to ${path.relative(execution_dir, file)}`);
    return txt;
});

export default async function main() {
    return code;
}
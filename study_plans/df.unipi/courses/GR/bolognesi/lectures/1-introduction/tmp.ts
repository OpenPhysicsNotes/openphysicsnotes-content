
// https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
// arg[0] is the node executable
// arg[1] is the script name
// arg[2] is the first argument

import path from "path";

import fs from "fs";

const SVG_GENERATOR = path.resolve(process.argv[2]);

if (!SVG_GENERATOR) {
    console.error("Missing SVG generator script!");
    process.exit(1);
}

console.log(fs.existsSync(SVG_GENERATOR));

if (!fs.existsSync(SVG_GENERATOR)) {
    console.error(`SVG generator script does not exist: ${SVG_GENERATOR}`);
    process.exit(1);
}

//const GENERATOR = import('./tmp2');
//import GENERATOR from './tmp2.mjs';
// TODO or require? (not promise)
import(`./` + path.relative(__dirname, SVG_GENERATOR)).then((module) => {
    const GENERATOR = module.default as () => Promise<string>;

    if (!GENERATOR) {
        console.error(`Unable to load SVG generator script: ${SVG_GENERATOR}`);
        process.exit(1);
    }
    
    let _svg = GENERATOR();
    
    if (!(_svg instanceof Promise<string>)) {
        console.error("SVG generator script must return a string promise!");
        process.exit(1);
    }
    
    let svgPromise = (_svg as Promise<string>).then(svg => {
        if (!svg) {
            console.error("SVG generator script returned an empty string!");
            //process.exit(1);
        }
        
        console.log(svg);
    });
});
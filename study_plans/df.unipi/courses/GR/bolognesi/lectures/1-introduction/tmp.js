"use strict";
// https://nodejs.org/en/knowledge/command-line/how-to-parse-command-line-arguments/
// arg[0] is the node executable
// arg[1] is the script name
// arg[2] is the first argument
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const SVG_GENERATOR = path_1.default.resolve(process.argv[2]);
if (!SVG_GENERATOR) {
    console.error("Missing SVG generator script!");
    process.exit(1);
}
console.log(fs_1.default.existsSync(SVG_GENERATOR));
if (!fs_1.default.existsSync(SVG_GENERATOR)) {
    console.error(`SVG generator script does not exist: ${SVG_GENERATOR}`);
    process.exit(1);
}
//const GENERATOR = import('./tmp2');
//import GENERATOR from './tmp2.mjs';
// TODO or require? (not promise)
Promise.resolve().then(() => __importStar(require(`./` + path_1.default.relative(__dirname, SVG_GENERATOR)))).then((module) => {
    const GENERATOR = module.default;
    if (!GENERATOR) {
        console.error(`Unable to load SVG generator script: ${SVG_GENERATOR}`);
        process.exit(1);
    }
    let _svg = GENERATOR();
    if (!(_svg instanceof (Promise))) {
        console.error("SVG generator script must return a string promise!");
        process.exit(1);
    }
    let svgPromise = _svg.then(svg => {
        if (!svg) {
            console.error("SVG generator script returned an empty string!");
            //process.exit(1);
        }
        console.log(svg);
    });
});

"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const promises_1 = require("node:fs/promises");
const path = __importStar(require("node:path"));
async function init(loggerGetter) {
    const modules = [];
    const logger = loggerGetter();
    const info = (s) => logger.info(`[store] ${s}`);
    const dir = await (0, promises_1.opendir)(path.join(__dirname, 'modules'));
    for await (const dirent of dir) {
        if (dirent.isDirectory()) {
            info(`Loading store module ${dirent.name}`);
            try {
                const module = require(dirent.path);
                modules.push(module.default);
                info(`Loaded store module ${dirent.name}`);
            }
            catch (e) {
                logger.error(`Failed to load store module ${dirent.name}: ${e}`);
            }
        }
    }
    let root = Promise.resolve();
    for (const module of modules) {
        info(`Initializing store module ${module.name}`);
        root = root.then(() => module.init())
            .then(() => {
            info(`Initialized store module ${module.name}`);
        })
            .catch(reason => {
            logger.error(`Failed to initialize store module ${module.name}: ${reason}`);
        });
    }
    return root;
}
exports.init = init;

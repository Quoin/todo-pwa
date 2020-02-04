import fs from 'fs-extra';
import path from 'path';

import { CORDOVA_ROOT, CORDOVA_WWW, PUBLIC_FOLDER } from './../constants';
import content from './../server/ssr/content';

const ROOT_PATH = path.resolve(__dirname, '..', '..');

const CORDOVA_FOLDER = path.join(ROOT_PATH, CORDOVA_ROOT);
const CORDOVA_WWW_FOLDER = path.join(CORDOVA_FOLDER, CORDOVA_WWW);

const html = content();

fs.removeSync(CORDOVA_WWW_FOLDER);
fs.mkdirSync(CORDOVA_WWW_FOLDER);
fs.writeFileSync(path.join(CORDOVA_WWW_FOLDER, 'index.html'), html, { encoding: 'utf8' });
fs.copySync(path.join(ROOT_PATH, PUBLIC_FOLDER), CORDOVA_WWW_FOLDER);

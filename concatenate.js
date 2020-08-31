const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
const files = [
'./dist/Custom-element-project/runtime-es2015.js',
'./dist/Custom-element-project/polyfills-es2015.js',
'./dist/Custom-element-project/scripts.js',
'./dist/Custom-element-project/main-es2015.js',
]
await fs.ensureDir('elements')
await concat(files, 'elements/custom-element-es2015.js');
await fs.copyFile('./dist/Custom-element-project/styles.css', 'elements/styles.css')
//await fs.copy('./dist/Custom-element-project/assets/', 'elements/assets/' )
})()
import fs from 'fs'
import path from 'path'
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pdfParse = require('pdf-parse')

/**
 * Get The Path of the Report File
 * @returns {string} Return the path of the first file available in the PICK Folder
 */
function getFilePath() {
    return new Promise((resolve, reject) => {

        fs.readdir('./CIIProject/pick/', (err, files) => {
            const __dirname = path.resolve();
            // resolve(`${__dirname}\\pick\\${files[0]}`)
            // console.log(__dirname)
            // resolve("Path Resolved")
            
            resolve('C:/Users/2113487/Desktop/Skill Up/Workspace-03/CIIProject/pick/DemoWebShop.pdf')
        })
    }
    )
}

/**
 * 
 * @param {string} filePath take file path
 * @returns {Array<string>} Array of String of Content
 */
function getRawTextDataOfPDF(filePath) {
    return new Promise((resolve, reject) => {

        const pdfFile = fs.readFileSync(filePath)
        pdfParse(pdfFile).then((data) => {
            resolve(getStringArray(data.text))
        })
    }
    )
}

/**
 * 
 * @param {string} rawTextData Take Raw Text Data
 * @returns {Array<string>} Return String Array 
 */
function getStringArray(rawTextData) {
    let stringArray = rawTextData.split(/\r?\n/);
    return stringArray
}

export { getFilePath, getRawTextDataOfPDF }
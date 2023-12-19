import { createRequire } from "module";
import path, { resolve } from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const require = createRequire(import.meta.url);
const muhammara = require('muhammara')

async function splitReport(inpFilePath, testCaseDetailObj){
    const pdfStream = await readPdfFile(inpFilePath)
    await splitFile(pdfStream, testCaseDetailObj)
    console.log("-------------------------------")

}

function readPdfFile(filePath){
    return new Promise((resolve, reject)=>{
        let pdfReader = muhammara.createReader(filePath)
        resolve(pdfReader)
    })
}

function splitFile(pdfStream , testCaseDetailObj){
    return new Promise((resolve, reject)=>{

        for(let i = 0 ;i< testCaseDetailObj.length ; i++){
            let start = testCaseDetailObj[i].start
            let end = testCaseDetailObj[i].end

            // Point out splitted file to the drop folder 
            let outputName = path.join(__dirname,'..','..','drop',`${testCaseDetailObj[i].name}.pdf`)
            console.log(outputName)

            let pdfWriter = muhammara.createWriter(outputName)

            // Udating the endPage number in the last testCase
            testCaseDetailObj[testCaseDetailObj.length-1].end = pdfStream.getPagesCount()
            for(let i = start-1; i < end; i++){
                pdfWriter.createPDFCopyingContext(pdfStream).appendPDFPageFromPDF(i)
            }
            pdfWriter.end();
        }

    })
}

export {splitReport}
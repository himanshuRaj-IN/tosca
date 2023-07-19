import { createRequire } from "module";
import { resolve } from "path";
const require = createRequire(import.meta.url);
const muhammara = require('muhammara')

async function splitReport(inpFilePath, testCaseDetailObj){
    const pdfStream = await readPdfFile(inpFilePath)
    await splitFile(pdfStream, testCaseDetailObj, 'output dir')
    console.log("-------------------------------")

}

function readPdfFile(filePath){
    return new Promise((resolve, reject)=>{
        let pdfReader = muhammara.createReader(filePath)
        resolve(pdfReader)
    })
}

function splitFile(pdfStream , testCaseDetailObj , OutputDir){
    return new Promise((resolve, reject)=>{

        for(let i = 0 ;i< testCaseDetailObj.length ; i++){
            let start = testCaseDetailObj[i].start
            let end = testCaseDetailObj[i].end

            let pdfWriter = muhammara.createWriter(`${testCaseDetailObj[i].name}.pdf`)

            // Udating the endPage number in the last testCase
            testCaseDetailObj[testCaseDetailObj.length-1].end = pdfStream.getPagesCount()
            console.log(testCaseDetailObj)

            for(let i = start-1; i < end; i++){
                pdfWriter.createPDFCopyingContext(pdfStream).appendPDFPageFromPDF(i)
            }
            pdfWriter.end();
        }

    })
}

// function splitReport(testCaseDetailObj){
//     return new Promise((resolve, reject)=>{
//         console.log(testCaseDetailObj)
//         resolve({"Status" : "Sucessfully Generated"})
        
//     })
// }

export {splitReport}
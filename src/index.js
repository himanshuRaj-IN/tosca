/**
 * TOSCA TESTREPORT SPLITTER
 */

/******** Configuration Parameter ********/
const ExecutionListName = 'EXecutionlist1'

/******** Importing the Dependency ********/
import { getFilePath, getRawTextDataOfPDF } from "./utils/readReport.js"
import { getTestCaseDetail } from "./utils/processRawData.js"
import { splitReport } from "./utils/splitReport.js"

/**
 * It Split the One Report into the multiple Report files Test Case wise
 * @param {String} ExecutionListName  Name of the Execution list 
 */

async function splitTestReport(ExecutionListName){
    
    const  filePath       = await getFilePath()
    console.log("Reading Test Report File Sucessfull .................!")
    const  rawTextData    = await getRawTextDataOfPDF(filePath)
    console.log("Extract Raw Data form Report Sucessfull .............!")
    const  testCaseDetail = await getTestCaseDetail(rawTextData, ExecutionListName)
    console.log(testCaseDetail)
    console.log("Extracting test case details form the raw textData...!")
    const  msg            = await splitReport(filePath, testCaseDetail)
    console.log("Splitting Sucessfully................................!")    
}

/******** Calling splitTEST Report  *******/
splitTestReport(ExecutionListName)
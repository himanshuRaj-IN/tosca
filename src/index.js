/**
 * TOSCA TESTREPORT SPLITTER
 */

/******** Configuration Parameter ********/
const ExecutionListName = 'EXecutionlist1'

/******** Importing the Dependency ********/
import { getFilePath, getRawTextDataOfPDF } from "./utils/readReport.js"


/**
 * It Split the One Report into the multiple Report files Test Case wise
 * @param {String} ExecutionListName  Name of the Execution list 
 */

async function splitTestReport(ExecutionListName){

    const  filePath  =  await getFilePath()
    const  rawTextData = await getRawTextDataOfPDF(filePath)

    console.log(rawTextData)
    console.log("Splitting Sucessfully !!!!")    
}

/******** Calling splitTEST Report  *******/
splitTestReport(ExecutionListName)
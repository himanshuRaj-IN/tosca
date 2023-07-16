/**
 * TOSCA TESTREPORT SPLITTER
 */

/******** Configuration Parameter ********/
const ExecutionListName = 'EXecutionlist1'

/******** Importing the Dependency ********/
import { getFilePath } from "./utils/readReport.js"


/**
 * It Split the One Report into the multiple Report files Test Case wise
 * @param {String} ExecutionListName  Name of the Execution list 
 */

async function splitTestReport(ExecutionListName){

    const  filePath  =  await getFilePath()

    console.log("Splitting Sucessfully !!!!" + filePath)    
}

/******** Calling splitTEST Report  *******/
splitTestReport(ExecutionListName)
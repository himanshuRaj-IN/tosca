import {TestCase} from './TestCase.js'

function getTestCaseDetail(dataArray,ExecutionListName ){
    return new Promise((resolve,reject)=>{

        let testCaseDetail = []
        for(let  i = 0 ; i < dataArray.length ; i++){
            let name = ''
            let start = 1
            let end = 1

            if(dataArray[i].includes(ExecutionListName)){
                name = dataArray[i+1]
                
                // Filling  
                if(dataArray[i-2].includes('Execution')){
                    start = 1
                }else{
                    start = dataArray[i-2]
                    start = start.split(" ")[1].split("/")[0]
                    start = parseInt(start)
                    start++

                }

                let testObj = new TestCase(name,start,end)
                testCaseDetail.push(testObj)
            }
           
           
        }

        // Adding end page number inthe test case each object 
        for(let i = 0 ; i < testCaseDetail.length-1 ; i++){
            testCaseDetail[i].end = testCaseDetail[i+1].start -1
        }
        resolve(testCaseDetail)
    })
}
export {getTestCaseDetail}
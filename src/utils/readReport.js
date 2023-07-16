import fs from 'fs'
import path from 'path'

/**
 * Get The Path of the Report File
 * @returns {string} Return the path of the first file available in the PICK Folder
 */
function getFilePath() {
    return new Promise((resolve, reject) => {

        fs.readdir('../CIIProject/pick', (err, files) => {
            const __dirname = path.resolve();
            resolve(`${__dirname}\\pick\\${files[0]}`)
        })
    }
    )
}


export { getFilePath }
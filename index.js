const fs = require('fs')
const util = require('util')
const path = require('path')
const writeFile = util.promisify(fs.writeFile)
const readFile = util.promisify(fs.readFile)
const readdir = util.promisify(fs.readdir)
const PATH_DIR_INPUT = './input'
const PATH_DIR_OUTPUT = './output'
const PREFIX_LOG = '-------'
const regexp = new RegExp('(([0-9])\\n)(([0-9])\\w+)', 'g')
const whiteSpace = new RegExp(' ','g')
const extenstion = '.srt'
function isEmptyDirectory(inputFileList){
  if(inputFileList === null || inputFileList === undefined){
    throw new Error('isEmptyDirectory function invalid parameter(inputFileList). inputFileList should not null or undefined')
  }
  return inputFileList.length === 0
}
function convertString(src){
  let tempString = src
  const term = 2
  while (regexp.exec(tempString) !== null) {
    const slicedString = tempString.slice(regexp.lastIndex - term, regexp.lastIndex + 26)
    const removedWhiteSpaceString = slicedString.replace(whiteSpace, '')
    const convertResultString = removedWhiteSpaceString.replace('->', '-->')
    const start = tempString.match(slicedString).index
    const end = start + slicedString.length
    const cursor = regexp.lastIndex - 4
    let agoString = ''
    if(cursor !== 0){
      agoString = tempString.slice(0, cursor)
    }
    const preFixStr = tempString.slice(cursor, start)
    const postFixStr = tempString.slice(end, tempString.length)
    tempString = agoString + preFixStr + convertResultString + postFixStr
  }
  return tempString
}
async function start(){
  const inputFileList = await readdir(PATH_DIR_INPUT)
  if(isEmptyDirectory(inputFileList)){
    throw new Error('You must provide File or Files in input directory')
  }
  const contents = await Promise.all(inputFileList.map((file) => readFile(path.join(PATH_DIR_INPUT, file),{encoding: 'utf-8'})))
  const convert_Contents = contents.map((content) => convertString(content))
  const outpufFilesList = inputFileList.map((file) => path.join(PATH_DIR_OUTPUT, file.slice(0, file.length - 4) + '_convert' + '_' + Date.now() + extenstion))
  await Promise.all(inputFileList.map((file, index) => writeFile(outpufFilesList[index], convert_Contents[index])))
  return outpufFilesList
}

start()
.then((FileNameList) => {
  const fileNameListString = FileNameList.join('\n')
  console.log(`${PREFIX_LOG}Result Block Start${PREFIX_LOG}`)
  console.log(`${fileNameListString}`)
  console.log(`${PREFIX_LOG}Result Block End${PREFIX_LOG}`)
})
.catch((error) => console.log(error.toString()))
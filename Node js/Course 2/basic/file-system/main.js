let path = require("path");
let fs = require("fs");
let fileDir = path.dirname(`${__dirname}`);
const folderName = path.join(fileDir, "/Course 2/file_system");

function createFolder() {
  try {
    if (!fs.existsSync(`${folderName}/file4`)) {
      fs.mkdir(path.join(`${folderName}`, "file4"), (err) => {
        if (err) {
          return console.error(err);
        }
        console.log("folder created");
      });
    }else{

        console.log("file exists")
    }
  } catch (err) {
    console.error(err);
  }
}

createFolder();

function createFile() {

    fs.writeFile(path.join(`${folderName}/file/sample.txt`),"hello world", (err) => {
        if (err) {
            return console.error(err)
        }
        console.log("file created")
      });

}

createFile()

//read file 



// let readfileContentsync= fs.readFileSync("../Course 2/file_system/file/sample.txt","utf-8")

fs.readFile("../Course 2/file_system/file/sample.txt","utf-8",(err,data)=>{

    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})

// console.log(readfileContent)


console.log("after reading sync 2nd read ")


// let readfileContent2= fs.readFileSync("../Course 2/file_system/file/sample.txt","utf-8")

fs.readFile("../Course 2/file_system/file/sample.txt","utf-8",(err,data)=>{
    
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})
console.log("first all the content load first ")

// console.log(readfileContent2)

import fs from "fs";

// promised based file read

function readText(path) {
  return new Promise((resolved, rejected) =>
    resolved(fs.readFileSync(path, "utf-8"))
  );
}

// readText("./file_system/file/sample.txt").then((data)=>{

//     console.log(data)

// }).catch((err)=>{
//         console.log(err)
// })

async function getValue() {
  let readData = await readText("./file_system/file/sample.txt");

  console.log(readData);
}

getValue();

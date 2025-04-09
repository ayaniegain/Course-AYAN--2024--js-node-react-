import express from "express";
const app = express();

function isLogin(req,res,next) {
    console.log("login true")    
    next()
}


export default isLogin
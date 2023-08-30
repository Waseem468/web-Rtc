const express = require("express");
const {userRecording}=require("../Controller/recordController")

const router = express.Router();
router.post('/recording', userRecording);

module.exports=router;
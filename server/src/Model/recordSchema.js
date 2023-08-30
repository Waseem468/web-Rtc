const mongoose = require("mongoose");

const recordSchema = new mongoose.Schema({
    userId: { type: String },
    videoChunks: [{ type: Buffer }],
    audioChunks: [{ type: Buffer }],
},
    {
        timestamps: true
    }
)

const RecordModel= new mongoose.model("recording", recordSchema);
module.exports= RecordModel;
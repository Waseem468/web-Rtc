const RecordModel = require('../Model/recordSchema');

const userRecording = async (req, res) => {
    try {
        const { userId, videoChunks, audioChunks } = req.body;
        console.log("hello")

        // Decode base64-encoded video and audio chunks back to buffers
        const videoBuffers = videoChunks.map(chunk => Buffer.from(chunk, 'base64'));
        const audioBuffers = audioChunks.map(chunk => Buffer.from(chunk, 'base64'));

        // Concatenate the buffers
        const videoBuffer = Buffer.concat(videoBuffers);
        const audioBuffer = Buffer.concat(audioBuffers);

        // Create a new recording document
        const newRecording = new RecordModel({
            userId,
            videoChunks: videoBuffer,
            audioChunks: audioBuffer,
        });

        // Save the recording to the database
        await newRecording.save();

        res.status(200).json({ message: 'Recording saved successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error saving recording' });
    }
}

module.exports = { userRecording };

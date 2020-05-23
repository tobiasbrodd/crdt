var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io')(server);

var notes = {
    "note1": "",
    "note2": "",
    "note3": ""
};

app.get('/', (req, res) => {
    res.send("Server");
});

io.on('connection', (socket) => {
    console.log("A user connected");

    socket.on('join', (noteID, callback) => {
        console.log("Join: " + noteID);

        return callback(notes[noteID]);
    });

    socket.on('leave', (noteID, callback) => {
        console.log("Leave: " + noteID);

        return callback(notes[noteID]);
    });

    socket.on('edit', (message, callback) => {
        const noteID = message.noteID;
        const note = message.note;

        console.log(noteID + ": " + note);

        notes[noteID] = note;

        io.emit('note', { noteID, note });

        return callback(notes[noteID]);
    });

    socket.on('disconnect', () => {
        console.log("A user disconnected");
    });

    socket.on('error', (err) => {
        console.log(err);
    });
});

server.listen(3000, () => {
    console.log("Listening on *:3000");
});
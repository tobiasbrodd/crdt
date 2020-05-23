const io = require('socket.io-client');

export default function () {
    const socket = io.connect('localhost:3000');

    function registerHandler(handler) {
        socket.on('note', handler);
    }

    function join(noteID, callback) {
        socket.emit('join', noteID, callback);
    }

    function leave(noteID, callback) {
        socket.emit('leave', noteID, callback);
    }

    function edit(noteID, note, callback) {
        console.log(note);
        socket.emit('edit', { noteID, note }, callback);
    }

    return {
        join,
        leave,
        edit,
        registerHandler
    };
}
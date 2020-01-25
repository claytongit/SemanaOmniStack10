import socketio from 'socket.io-client';

const socket = socketio('http://192.168.100.7:3333', {
    autoConnect: false,
});

function connect(latidude, longitude, techs){

    socket.io.opts.query = {
        latidude,
        longitude,
        techs,
    };

    socket.connect();
}

function disconnect(){
    if(socket.connected){
        socket.disconnect();
    }
}

export { 
    connect,
    disconnect,
};
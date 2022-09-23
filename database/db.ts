import mongoose from 'mongoose';

/*

* 0 = disconnected
* 1 = connected
* 2 = connecting
* 3 = disconnecting

*/

const mongooConection = {
    isConnected: 0
}

export const connect = async() => {
    if(mongooConection.isConnected) {
        console.log('Ya estamos conectados');
        return;
    }

    if(mongoose.connections.length > 0){
        mongooConection.isConnected = mongoose.connections[0].readyState;

        if(mongooConection.isConnected === 1){
            console.log('Usando conexión anterior');
            return;
        }

        await mongoose.disconnect();
        mongooConection.isConnected = 1;

    }
    await mongoose.connect('....')
    mongooConection.isConnected = 1;
    console.log('Conectado a mongoDB', '.....');

}

export const disconnected = async() => {

    await mongoose.disconnect();
    if(mongooConection.isConnected !==0) return;
    console.log('Desconectado de mongoDB');
}       
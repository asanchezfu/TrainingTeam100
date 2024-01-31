const { MongoClient, ObjectId } = require('mongodb');

let client;
const connect = async () => {
  try {
    //const uri = 'mongodb://localhost:27017';
    const uri = 'mongodb+srv://jramirezle:Milo.2020@cluster0.aecvodh.mongodb.net/?retryWrites=true&w=majority';
    client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // ... otras opciones de configuración si es necesario
    });

    await client.connect();
    console.log('Conexión exitosa a la base de datos');
    _db = client.db("Music_Store"); // Reemplaza "tuNombreDeDB" con el nombre real de tu base de datos
    
  } catch (error) {
    console.error('Error de conexión a la base de datos:', error.message);
  }
};

var _db;

module.exports = {
   connect,
   getDb: function () {
    return _db;
  },
  ObjectId: ObjectId, // Asegúrate de exportar ObjectId desde aquí
};

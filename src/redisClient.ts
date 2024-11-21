import redis from 'redis';

const client = redis.createClient({
    socket: {
        host: '127.0.0.1', // Endereço do Redis
        port: 6379         // Porta padrão
    }
});

client.on('error', (err: Error) => {
    console.error('Erro no Redis:', err);
});

(async () => {
    try {
        await client.connect();
        console.log('Conectado ao Redis com sucesso!');
    } catch (err) {
        console.error('Erro ao conectar ao Redis:', (err as Error).message);
    }
})();

export default client;

import client from './client';



//BLOCK MANAGER
//SERVERS
export const block_manager_servers = async () => {
    return await client.get('/dle/v1/network/server');
};




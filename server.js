import { WebSocket } from 'ws';
import { generateInitialiserPacket, ping } from './protocol.js';

let count = 0;

const instantiate = async () => {
    let hasShook = false;
    
    const websocket = new WebSocket('wss://51-91-214-104.brutal.io:9080/', {
        rejectUnauthorized: false,
        headers: {
            'Accept-Encoding': 'gzip, deflate, br',
            'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
            'Cache-Control': 'no-cache',
            Connection: 'Upgrade',
            Host: '51-91-214-104.brutal.io:9080',
            Origin: 'https://brutal.io',
            Pragma: 'no-cache',
            'Sec-Websocket-Extensions': 'permessage-deflate; client_max_window_bits',
            'Sec-Websocket-Key': 'fFz9Ix2JTQpmPyhF98e5Kw==',
            'Sec-Websocket-Version': '13',
            Upgrade: 'websocket',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
    });
    
    await new Promise(r => websocket.addEventListener('open', r, { once: true }));
    ['error', 'close'].forEach(x => websocket.addEventListener(x, () => hasShook && console.log(--count)));
    
    websocket.send(generateInitialiserPacket());
    websocket.send(ping());
    
    websocket.addEventListener('message', ({ data }) => console.log(data));
    
    websocket.send(new Uint8Array([5, 198, 29, 46, 223, 167, 186, 17, 64, 0]));
    
    count++;
    hasShook = true;
    console.log(count);
};

instantiate();

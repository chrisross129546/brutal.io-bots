export const generateInitialiserPacket = () => {
    const buffer = new ArrayBuffer(5);
    const view = new DataView(buffer);
    
    view.setUint8(0, 1);
    view.setUint16(1, 960 / 10, true);
    view.setUint16(3, 540 / 10, true);
    
    return buffer;
};

export const ping = () => {
    const buffer = new ArrayBuffer(1);
    const view = new DataView(buffer);
    
    view.setUint8(0, 0);
    
    return buffer;
};
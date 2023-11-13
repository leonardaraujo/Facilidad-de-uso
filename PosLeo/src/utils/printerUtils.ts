/// <reference types="web-bluetooth" />
import usePrinterStore from '../store/printerStore';
export const connectToPrinter = async () => {
  return new Promise((resolve, reject) => {
    navigator.bluetooth
      .requestDevice({
        filters: [
          {
            services: ['000018f0-0000-1000-8000-00805f9b34fb'],
          },
        ],
      })
      .then((device) => device.gatt?.connect())
      .then((server) =>
        server?.getPrimaryService('000018f0-0000-1000-8000-00805f9b34fb')
      )
      .then((service) =>
        service?.getCharacteristic('00002af1-0000-1000-8000-00805f9b34fb')
      )
      .then((toggleChar) => {
        usePrinterStore.getState().connect(toggleChar);
        resolve(toggleChar);
      })
      .catch((err) => {
        usePrinterStore.getState().disconnect();
        reject(err);
      });
  });
};

export const writeData = async (
  arrayBytes: Uint8Array,
  toggleCharacteristic: any
) => {
  return new Promise((resolve, reject) => {
    const writeStrToCharacteristic = (arrayBytes: Uint8Array) => {
      toggleCharacteristic?.writeValue(arrayBytes).catch((err: any) => {
        usePrinterStore.getState().disconnect();
        reject(err);
      });
    };

    let j = 0;
    let maxChunk = 300;
    let chunk;
    if (arrayBytes.byteLength >= maxChunk) {
      for (let i = 0; i <= arrayBytes.byteLength; i += maxChunk) {
        if (i + maxChunk <= arrayBytes.byteLength) {
          chunk = arrayBytes.slice(i, i + maxChunk);
        } else {
          chunk = arrayBytes.slice(i, arrayBytes.byteLength);
        }
        setTimeout(writeStrToCharacteristic, j * 300, chunk);
        j++;
      }
    } else {
      writeStrToCharacteristic(arrayBytes);
    }
    resolve(true);
  });
};

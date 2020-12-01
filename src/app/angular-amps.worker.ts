/// <reference lib="webworker" />

import {Client, Command} from 'amps';

console.log('Amps Web Worker Started');

addEventListener('message', (event) => {
  const params = event.data;
  console.log('Params = ', params);

  const client = new Client('HelloAmps');
  client.connect('ws://localhost:9007/amps/json').then(value => {
    client.sowAndDeltaSubscribe((message: any) => {
      const header = message.header.command();
      if (header === 'p'){
       postMessage({data: message.data});

      }

    }, params.topic);
  });



});

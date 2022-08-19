const cached = {};

Bun.serve({
 
  async fetch(req) {

    if (req.method == 'GET') { 

      return new Response(
        JSON.stringify({
          pending  : this.pendingRequests,
          hostname : this.hostname
        })
      );

    } else {
      let checkSum = 0, data = new DataView(await req.arrayBuffer());

      for (let i = 0; i < data.byteLength; i++) {
        checkSum = checkSum ^ data.getUint8(i);
      }
  
      if (!cached[checkSum]) {
        let response     = await fetch('http://localhost:3005', { body: data.buffer } );
  
        cached[checkSum] = await response.text();
      }
  
      return new Response(cached[checkSum]);
    }

  },

  port: 3000
});
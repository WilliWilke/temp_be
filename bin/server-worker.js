Bun.serve({

  async fetch(req) {
    let data = await req.json(),
        fb   = {text: 'Where data?'};

    if (data instanceof Array) {
      let e    = data instanceof Array ? data[0] ?? fb : fb,
          c    = 100;
    
      while (data.length < c) {
        data.push(e);
      }

    }

    await new Promise((r) => setTimeout(r, 5000));

    return new Response(JSON.stringify(data));
  },

  port : 3005
});
import { nanoid } from 'nanoid';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const { pathname } = url;
    
    // console.log('pathname: ', pathname);
    // console.log(nanoid(7));
    
    return new Response('Hello World!');
  },
};

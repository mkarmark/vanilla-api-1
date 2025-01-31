module.exports = async function (context, req) {
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: { text: "Hello Mitali!! 5/17/22 10:04AM" },
    cookies: [{
        name: 'HelloWorld',
        value: 'abc',
        path: '/',
        sameSite: 'Lax',
    },
             {
        name: 'HelloWorld2',
        value: 'abc2',
        path: '/',
        sameSite: 'Strict',
    },
             {
        name: 'HelloWorld3',
        value: 'abc3',
        path: '/',
        sameSite: 'None',
               secure: true
    },
             {
        name: 'HelloWorld4',
        value: 'abc4',
        path: '/',
    }]
  };
};

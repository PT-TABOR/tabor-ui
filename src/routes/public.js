module.exports = [
  {
      
    route: 'Welcome',
      name: 'welcome',
      moduleId: './welcome',
      nav: false,
      title: 'Home',
      auth: true,
      settings: { roles: ["*"] }
    },
    {
        route:['', 'Home'],
        name: 'Home',
        moduleId: './login',
        nav: true,
        title: 'Home'
    },
    {
        route: 'samples',
        name: 'samples',
        moduleId: './samples/index',
        nav: false,
        title: 'samples'
    },
    {
        route: 'forbidden',
        name: 'forbidden',
        moduleId: './forbidden',
        nav: false,
        title: 'forbidden'
    }]

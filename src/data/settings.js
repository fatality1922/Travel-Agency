const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3133' : ''),
    endpoint: {
      orders: 'orders',
    },
  },
};

export default settings;
const secrets = {
  dbUri: 'mongodb://jeremy:Car10men!@ds143603.mlab.com:43603/hn1'
};

export const getSecret = key => secrets[key];


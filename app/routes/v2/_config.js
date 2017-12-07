module.exports = {
  port: 4100,
  mongourl: 'mongodb://username:password@localhost/pm-t',
  jwt: {
    secret: 'qaf',
    expires: '720h'
  },
  AdminLevel: 100,
  wilddog_msg_key: 'wilddog_msg_key',
  wilddog_appId: 'wilddog_appId',
  qiniu: {
    AccessKey: 'AccessKey-QUjpi',
    SecretKey: 'SecretKey',
    bucket: 'bucketname'
  },
  productNo: 1
}

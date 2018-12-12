import superagent from 'superagent'
import Cookies from 'universal-cookie'
import Config from 'config'

const cookies = new Cookies()

const methods = ['get', 'post', 'put', 'patch', 'delete']

const formatUrl = (path) => (
  path.search(/^https?:\/\/(.*)/) === -1 ?
    { url: `${Config.TWITCH_URL}/${path}`, external: false }
    :
    { url: path, external: true }
)

export default class client {
  constructor(req) {
    methods.forEach(method => {
      this[method] = (path, { params, data, headers, files, fields } = {}) => new Promise((resolve, reject) => {
        const urlData = formatUrl(path)

        const request = superagent[method](urlData.url);

        if (params) {
          request.query(params);
        }
        if (headers) {
          request.set(headers);
        }

        request.set('Accept', 'application/vnd.twitchtv.v5+json');
        request.set('Client-ID', 'vawgt0x864f006ldz1ef0yw40lz3md');

        if (files) {
          files.forEach(file => request.attach(file.key, file.value));
        }

        if (fields) {
          fields.forEach(item => request.field(item.key, item.value));
        }

        if (data) {
          request.send(data);
        }
        request.end((err, { body } = {}) => (err ? reject(body || err) : resolve(body)));
      });
    }
  )};
}

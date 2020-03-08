const wtf = require('../01-document')

// flip response object into proper Doc objs
const parseDoc = function(res) {
  let docs = res.map(o => {
    return wtf(o.wiki, o.meta)
  })
  if (docs.length === 1) {
    return docs[0]
  }
  return docs
}
module.exports = parseDoc

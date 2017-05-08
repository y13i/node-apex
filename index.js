
// much λ, much UX.
module.exports = function λ(fn) {
  return function(e, ctx, cb) {
    if (e.debug) {
      console.log(JSON.stringify({
        event:   e,
        context: ctx,
      }));
    }

    try {
      var v = fn(e, ctx, cb)

      if (v && typeof v.then == 'function') {
        v.then(function (val) {
            cb(null, val)
        }).catch(cb)
        return
      }

      cb(null, v)
    } catch (err) {
      console.error(JSON.stringify({
        error: err,
      }));

      cb(err)
    }
  }
}

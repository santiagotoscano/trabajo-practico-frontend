import getAll from './getAll'
import del from './delete'
import create from './create'
import get from './get'
import update from './update'


export default host => ({
  getAll: getAll(host),
  delete: del(host),
  create: create(host),
  get: get(host),
  update: update(host),
})

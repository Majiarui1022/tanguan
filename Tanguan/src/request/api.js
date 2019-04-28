import {get,post} from './http'


// let api = '10.102.24.55/'
export const ParstList = p => get('../../static/data/PartList.json', p);
export const ScriptList = p => get('../../static/data/ScriptList.json', p);

export default {
  ParstList,
  ScriptList,
}

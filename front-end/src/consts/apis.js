import { isNodeEnv } from '../util/common'

let API_ROOT_URL
if (isNodeEnv() || document.domain === 'localhost') {
    API_ROOT_URL = '//localhost:8000/api/'
}
else {
    API_ROOT_URL = '//121.40.224.83:8000/api/'
}
export { API_ROOT_URL }
export const TAGS_URL = 'tags/'
export const ARTICLES_URL = 'articles/'

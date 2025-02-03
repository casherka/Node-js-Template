import views from './views.js'

function include (url, func, name){
    return {url, 'func': views[func], name}}

const urls = [
    include('/', 'home', 'name'),
    include('/things/', 'minhome', 'name')
]

export default urls
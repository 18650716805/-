
 export function check(){ 

var  logined=['home','shop','cats','catsdetail','homemainshow']
var  nologin=['login','register']
     var href = window.location.href

var hrefSplitArr = href.split('.')[0].split('/')
var currentpathname=hrefSplitArr[hrefSplitArr.length-1]
// let currentpathname=''
// if(location.pathname=='/'){
//    currentpathname='index'
// }else{
//     currentpathname=/(.*)\/(.*)\.html/.exec(window.location.href)[2]
// }

if (localStorage.token) {
    if (logined.includes(currentpathname)) {
        return
    } else {   
        
        that.$router.push('/')
     
    }


} else {
    if (nologin.includes(currentpathname)) {
        return
    } else {
        window.location.href = '/'
    //    this.$router.push('/')
    }



}}
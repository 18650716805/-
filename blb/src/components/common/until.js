export  function loginsuccess(data,fn,time=1500) {
    var div = document.createElement('div')
    div.style = `width:200px;
    height:50px;
    background-color:rgba(0,0,0,.5);position:fixed;top:50%;left:50%;transform:translateX(-50%) translateY(-50%);color:#fff;
    padding:15px 20px;font-size:16px;z-index:999;text-align:center;border-radius:4px;`
    div.innerText = data
    document.body.append(div)
    setTimeout(function () {
        div.parentElement.removeChild(div)
        if(fn){
            fn()
        }
    }, time)
}
// function get(id){
//     return Qs.parse(location.search.substr(1))[id]
// }
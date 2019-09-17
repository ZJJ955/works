export default {
     SetStorage(name, val){
        return new Promise((resolve, reject) =>{
            if(localStorage.hasOwnProperty(name)){
                resolve(false);
            }else{
                localStorage.setItem(`username${name}`,name+'@#'+val);
                resolve(true)
            }
        })
    },

     GetStorage(name, val){
        let username = localStorage.hasOwnProperty(`username${name}`);
        let psd = '';
        if(localStorage.getItem(`username${name}`)){
            psd = localStorage.getItem(`username${name}`).split('@#')[1];
        }
        
        return new Promise((resolve, reject) =>{
            if(username){
                if(psd == val){
                    resolve(1);
                }else{
                    resolve(2);
                }
            }else{
                resolve(0)
            }
        })
    },
    
     token(){
        let num = generateMixed(5);
        const date = new Date();
        let data = `${date.getDate()}/${date.getHours()}/${date.getMinutes()}/${date.getSeconds()}`;
        localStorage.setItem('token',num+data);
    },
    
}

//随机生成5个（字母+数字）
function   generateMixed(n) {
    var chars = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

     var res = "";
     for(var i = 0; i < n ; i ++) {
         var id = Math.ceil(Math.random()*35);
         res += chars[id];
     }
     return res;
}
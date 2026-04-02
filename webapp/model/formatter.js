
sap.ui.define([],function(){
    "use  strict";
    return {
        onReturnAgeMessage:function(age){
            var msg ="";
            if(age>=18){
                msg="is elihle for voting";
            }else{
                msg= "not eligible"
            }
            return msg;
        }
    };
});

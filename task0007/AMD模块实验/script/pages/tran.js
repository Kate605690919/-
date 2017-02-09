/*
 *点击转换事件
 */
    function tran() {
        var pass = document.getElementById('password').value;
        require(['passTran'],function (passTran){
            alert(passTran.pT(pass));
        });
    };
    //按下鼠标显示密码事件
    var input = document.querySelector('input');
    input.onmousedown = function () {
        input.setAttribute("type","text");
    }
    input.onmouseup = function () {
        input.setAttribute("type","password");
    }

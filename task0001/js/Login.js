$(document).ready(function () {
    //点击获取验证码
    $("#validatecode_pic").click(function () {
        this.src = "/Login/GetValidateCode?" + Math.random();
        //this.src = "/Home/GetValidateCode?time=" + (new Date()).getTime();
    });
    //表单输入有效性验证
    $('#form-login').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            userName: {
                validators:{
                    notEmpty: {
                        message: '用户名不能为空'
                    }
                }                
            },
            password: {
                validators:{
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        message: '最小长度为6'
                    }
                }
            },
            ValidateCode: {
                validators:{
                    notEmpty: {
                        message: '验证码不能为空'
                    },
                    stringLength: {
                        min: 4,
                        max: 4,
                        message: '验证码长度为4'
                    }
                }
            }
        }
    });
});

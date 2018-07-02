function redirect(){
	window.location.href="http://www.jd.com";
}
function agree(){
	document.getElementById("infoDv").style.display="none";
	document.getElementById("coverDv").style.display="none";
}

//ajax校验用户名是否唯一
var xmlHttpRequest;
function createHttpXml(){
	if(window.XMLHttpRequest != null){
		xmlHttpRequest = new XMLHttpRequest();
	}else{
		xmlHttpRequest = new ActiveXObject("microsoft.XMLHTTP");//兼容性处理
	}
}
function callBack(){
	if(xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200){
		var result = xmlHttpRequest.responseText;
		if(result == 0){
			var usernameDv = document.getElementById("check-username");
			var usernameBorder = document.getElementById("usernameborder");
			usernameDv.innerHTML = "用户名已存在";
			usernameborder.style.border = "2px solid red";
		}else if(result == 1){
			var usernameDv = document.getElementById("check-username");
			var usernameBorder = document.getElementById("usernameborder");
			usernameDv.innerHTML = "";
			usernameborder.style.border = "1px solid #999999";
		}
	}
}
function checkUserUnique(){
	createHttpXml();
	xmlHttpRequest.onreadystatechange = callBack;
	var user = document.getElementById("username").value;
	xmlHttpRequest.open("get","../php/index.php?username="+user);
	xmlHttpRequest.send();
}

//CheckForm
function CheckForm(){
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    var repassword=document.getElementById('repassword').value;
    var test=document.getElementById('test').value;
    var phone=document.getElementById('phone').value;
    if(CheckPassword(password,repassword)){
        if(CheckNull(username,password,repassword,test)){
            if(CheckPhone(phone)){
            	if(CheckCode(test)){
                    window.location.href='result.html';
            	}
            }
        }
    }
   else{
   		alert("注册失败！");
    }
}


function CheckPassword(password,repassword){
    if(password==repassword){
        document.getElementById('Check').innerHTML="";
        return true;
    }
    else{
        document.getElementById('Check').innerHTML="密码与确认密码不同";
        return false;
    }
}
function CheckNull(username,password,repassword,test){
    if(username==""||password==""||repassword==""){
        document.getElementById('Check').innerHTML="用户名或密码为空";
        return false;
    }
    else if(test==""){
        document.getElementById('Check').innerHTML="验证码为空";
        return false;
    }
    else{
        document.getElementById('Check').innerHTML="";
        return true;
    }
}
function CheckPhone(phone){
    if(phone.length==11){
        document.getElementById('Check').innerHTML="";
        return true;
    }
    else{
        document.getElementById('Check').innerHTML="手机号格式有误";
        return false;
    }
}

//判断验证码
function CheckCode(test){
    if(test==validate){
        document.getElementById('check-yzm').innerHTML="";
        return true;
    }
    else{
        document.getElementById('check-yzm').innerHTML="验证码输入错误";
        return false;
    }
}
//正则表达式验证
function checkUser(){
	if(/^[a-zA-Z0-9]{4,20}$/.test(document.getElementById('username').value)){
		document.getElementById('check-username').innerHTML="";
	}else{
		document.getElementById('check-username').innerHTML="长度只能在4-20个字符之间";
	}
}
function checkPsw(){
	if(/^(?!^(\d+|[a-zA-Z]+|[!@#$%^&*?_])$)^[\w!@#$%^&*?]{6,20}$/.test(document.getElementById('password').value)){
		document.getElementById('check-password').innerHTML="";
	}else{
		document.getElementById('check-password').innerHTML="长度只能在6-20个字符之间且至少含有两种字符";
	}
}
function checkRePsw(){
	if(/^(?!^(\d+|[a-zA-Z]+|[!@#$%^&*?_])$)^[\w!@#$%^&*?]{6,20}$/.test(document.getElementById('repassword').value)){
		document.getElementById('check-repassword').innerHTML="";
	}else{
		document.getElementById('check-repassword').innerHTML="长度只能在6-20个字符之间且至少含有两种字符";
	}
}
function checkphone(){
	if(/^1[34578]\d{9}$/.test(document.getElementById('phone').value)){
		document.getElementById('check-phone').innerHTML="";
	}else{
		document.getElementById('check-phone').innerHTML="手机格式有误";
	}
}
function checkphoneyzm(){
	if(/^[a-zA-Z0-9]{4}$/.test(document.getElementById('phoneyzm').value)){
		document.getElementById('check-phoneyzm').innerHTML="";
	}else{
		document.getElementById('check-phoneyzm').innerHTML="长度为4位";
	}
}

//随机验证码
var validate
function rand(){
	var str="abcdefghigklmnopqrstuvwxyz0123456789";
	var arr=str.split("");

	validate="";
	var ranNum;
	for(var i=0;i<4;i++){
		ranNum=Math.floor(Math.random()*36);  //随机数在[0,35]之间,并向下取整
		validate+=arr[ranNum];
	}
	return validate;
}
//点击改变验证码
function clickChange(){
	var mycanvas=document.getElementById('canvasImg');
	var cxt=mycanvas.getContext('2d');
	cxt.clearRect(0,0,mycanvas.width,mycanvas.height);

	cxt.fillStyle='red';
	cxt.font='bold 100px Arial';
	cxt.fillText(rand(),38,108);
}
clickChange();


function on(value){
		switch(value){
			case 1:
				{
					document.getElementById('lsk1').style.visibility="visible";
					document.getElementById('lsk1').style.background="#AE0000";
					document.getElementById('xf-1').style.background="#AE0000";
					break;
				}
			case 2:
				{
					document.getElementById('lsk2').style.visibility="visible";
					document.getElementById('lsk2').style.background="#AE0000";
					document.getElementById('xf-2').style.background="#AE0000";
					break;
				}
			case 3:
				{
					document.getElementById('lsk3').style.visibility="visible";
					document.getElementById('lsk3').style.background="#AE0000";
					document.getElementById('xf-3').style.background="#AE0000";
					break;
				}
			case 4:
				{
					document.getElementById('lsk4').style.visibility="visible";
					document.getElementById('lsk4').style.background="#AE0000";
					document.getElementById('xf-4').style.background="#AE0000";
					break;
				}
			case 5:
				{
					document.getElementById('lsk5').style.visibility="visible";
					document.getElementById('lsk5').style.background="#AE0000";
					document.getElementById('xf-5').style.background="#AE0000";
					break;
				}
			case 6:
				{
					document.getElementById('lsk6').style.visibility="visible";
					document.getElementById('lsk6').style.background="#AE0000";
					document.getElementById('xf-6').style.background="#AE0000";
					break;
				}
			}
		}
	function out(value){
		switch(value){
			case 1:
				{
					document.getElementById('lsk1').style.visibility="hidden";
					document.getElementById('xf-1').style.background="#7a6e6e";
					break;
				}
				case 2:
				{
					document.getElementById('lsk2').style.visibility="hidden";
					document.getElementById('xf-2').style.background="#7a6e6e";
					break;
				}
				case 3:
				{
					document.getElementById('lsk3').style.visibility="hidden";
					document.getElementById('xf-3').style.background="#7a6e6e";
					break;
				}
				case 4:
				{
					document.getElementById('lsk4').style.visibility="hidden";
					document.getElementById('xf-4').style.background="#7a6e6e";
					break;
				}
				case 5:
				{
					document.getElementById('lsk5').style.visibility="hidden";
					document.getElementById('xf-5').style.background="#7a6e6e";
					break;
				}
				case 6:
				{
					document.getElementById('lsk6').style.visibility="hidden";
					document.getElementById('xf-6').style.background="#7a6e6e";
					break;
				}
		}
	}
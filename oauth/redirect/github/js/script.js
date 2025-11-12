







function getUrlParams(url) {
  const paramsRegex = /[?&]+([^=&]+)=([^&]*)/gi;
  const params = {};
  let match;
  while (match = paramsRegex.exec(url)) {
    params[match[1]] = match[2];
  }
  return params;
}

let TheURL = window.location.href;

let TheURLArray = getUrlParams(TheURL);


function get_cookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
	return unescape(arr[2]);
	else
	return null;
}

let session_id = get_cookie("PHPSESSID");

function DoLoginFunction(){

	let TheAPIURL = "https://c34a02aaeb0d6.cname.frontwize.com/php/v4/oauth_github";

	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			let ResultJSON = JSON.parse(xmlhttp.responseText);
			if(ResultJSON["status"]){

				window.location.href = "https://www.yunzhongzhuan.com/#files";
				return false;

				swal({
					title: "登录成功",
					text: ResultJSON["message"],
					icon: "success",
					dangerMode: true,
					closeOnClickOutside: false,
				}).then((willDelete) => {
					// pass
					window.location.href = "https://www.yunzhongzhuan.com/#files";
					return false;
				});
				
			}else{

				swal({
					title: "错误提示",
					text: ResultJSON["message"],
					icon: "error",
					dangerMode: true,
					closeOnClickOutside: false,
				}).then((willDelete) => {
					// pass
					window.location.href = "https://www.yunzhongzhuan.com/#login";
					return false;
				});

				
			}
		}
	}
	xmlhttp.open("POST",TheAPIURL,true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;
	xmlhttp.send("code=" + TheURLArray["code"] + "&session_id=" + session_id);


}

function DoLogin(){

	if(
		session_id == "undefined"
		||
		session_id == undefined
	){
		// can not get session id
		// show laert to user see
		swal({
			title: "无效访问",
			text: "无效访问，返回首页！",
			icon: "error",
			dangerMode: true,
			closeOnClickOutside: false,
		}).then((willDelete) => {
			// pass
			window.location.href = "https://www.yunzhongzhuan.com/#login";
			return false;
		});
		return false;
	}else{
		// pass
	}


	if(
		TheURLArray["code"] != undefined
		&&
		TheURLArray["code"] != ""
	){

		DoLoginFunction();

	}

}


window.onload = function(){

	setTimeout(DoLogin,100);

}

/*

let xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange=function(){
	if(xmlhttp.readyState==4 && xmlhttp.status==200){
		let ResultJSON = JSON.parse(xmlhttp.responseText);
		if(ResultJSON["status"]){
			
		}else{
			
		}
	}
}
xmlhttp.open("POST",api_server_url+"/php/v4/files_delete",true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xmlhttp.withCredentials = true;
xmlhttp.send("folders_id="+folders_id+"&files_id="+files_id+"&parent_folder_id="+parent_folder_id+"&session_id="+userinfo["session_id"]);


*/

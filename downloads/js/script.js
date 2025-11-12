
// qq 1070892573
// qq 1070892255
// email admin@yunzhongzhuan.com
// email 1070892573@qq.com


// 当前页数
var pageIndex = 0;


// 获取 软件 下载 列表
function getList(){
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){

			var ResultJSON = JSON.parse(xmlhttp.responseText);

			for(var i=0;i<ResultJSON.length;i++){

				var div = document.createElement('div');

				div.className="download-li";

				div.innerHTML = '<div class="download-li-header"><div class="download-li-icon"><img src="' + ResultJSON[i]["Icon"] + '"></div><div class="download-li-title">' + ResultJSON[i]["Title"] + '</div><div class="download-li-title-little">' + ResultJSON[i]["TitleMini"] + '</div></div><div class="download-li-main"><div class="download-li-description">' + ResultJSON[i]["Description"] + '</div><div class="download-li-buttons"><div class="download-li-button download-li-button-parent"><a href="' + ResultJSON[i]["Link"] + '" target="_blank"><i class="fa fa-link"></i>官方网站</a></div><div class="download-li-button download-li-button-download"><a href="' + ResultJSON[i]["DownloadLink"] + '" target="_blank"><i class="fa fa-download"></i>本地下载</a></div></div></div>';

				document.getElementsByClassName('download-list-main')[0].append(div);

			}

		}
	}
	let xmlhttp_api_url = "https://c34a02aaeb0d6.cname.frontwize.com/php/v4/download_links";
	if(navigator.language.toLowerCase().indexOf('cn')==-1){
		// xmlhttp_api_url = "https://apiyunzhongzhuancom.vercel.app/php/v4/download_links";
		xmlhttp_api_url = "https://apiyunzhongzhuancom.vercel.app/php/v4/download_links";
		// xmlhttp_api_url = "https://mfm.yunzhongzhuan.com/php/v4/download_links";
	}
	xmlhttp.open("POST",xmlhttp_api_url,true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;
	xmlhttp.send("page=" + pageIndex);
}



// 请求
getList();



/*
swal({
	title: "欢迎光临！",
	text: "这是下载测速页面，快来试一下我们云盘的文件下载速度吧！",
	icon: "success",
	closeOnClickOutside: false,
});
*/







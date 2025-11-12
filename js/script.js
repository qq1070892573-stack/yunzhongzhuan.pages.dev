/*
距离屏幕位置
getElementTop(document.getElementsByClassName('sharecenter-content-item-comment-submit-element')[1])

window.innerHeight

*/




//alert('紧急通知：2023年9月25日发现在Google Chrome浏览器最新版本Chrome/117.0.0.0中无法正常上传文件至云中转，该问题云中转团队正在紧急修复，建议正在使用Google Chrome浏览器最新版本且无法正常上传文件的用户切换使用Firefox、Microsoft Edge、Safari等浏览器访问云中转官方网站yunzhongzhuan.com、yzzpan.com，或者在Windows系统中使用云中转客户端，紧急情况正在寻找问题根源并解决。');

if(navigator.language.toLowerCase().indexOf('cn')!=-1){
//alert("3周年通知！2023年12月10日是云中转3周年成立日，打开手机微信搜索“云中转”关注公众号，留言发送您的云中转账号或QQ账号，有机会优先获得提升最大单个文件60GB上传权限。目前最高仅支持单个文件30GB，可最高支持上传60GB单文件大小权限内测中，老用户请在微信公众号“云中转”留言云中转账号或账号所绑定的QQ。明年会推出“盘友圈”功能，全系统用户都是您的朋友圈好友，一人分享文件，所有人都可以看见并点赞/评论/转存/下载等，敬请期待。");
}

document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

// email admin@yunzhongzhuan.com
// if(window.location.href.split("#").length==1&&document.referrer!='')window.location.href="/welcome/";
// try{document.domain="yunzhongzhuan.com";}catch(e){};
/*if(document.domain!=="yunzhongzhuan.com"){
	window.location.href=window.location.href.replace(/www./,'');
}*/

// 2023/3/10 20:12 1
let js_script_js_update_version = 2023031020120001;

function to_dev_version_or_main_version(){
	window.location.href = window.location.href.replace(/www.yunzhongzhuan.com/,'http.yunzhongzhuan.com').replace('https://','http://');
}


// 获取小数点位数
function getDecimalPlaces(num) {
  const str = num.toString();
  const decimalIndex = str.indexOf('.');
  if (decimalIndex !== -1) {
    return str.length - decimalIndex - 1;
  }
  return 0;
}

// JS去掉整数第一位

function removeFirstDigit(number) {
  // 将数字转换为字符串
  var numberStr = number.toString();
  // 去掉第一位字符
  var newNumberStr = numberStr.slice(1);
  // 将新字符串转换回数字
  return parseInt(newNumberStr, 10);
}
/*
// 示例
var originalNumber = 12345;
var newNumber = removeFirstDigit(originalNumber);
console.log(newNumber); // 输出: 2345
*/


/*
window.history.pushState(null,null,"/");
//地址变动不刷新
文件按照大小排序
let files_items = files_items_files_items.getElementsByClassName('files-item');
for(let i=0;i<files_items.length;i++){
let file_item = files_items[i];
//alert(i + ' --');
for(let i2=0;i2<i;i2++){
let file_item_i2 = files_items[i2];
//alert(i2 + ' ---');
//alert(file_item.size + '---' + file_item_i2.size);
//alert(file_item.size<file_item_i2.size);
if(parseInt(file_item.size)<parseInt(file_item_i2.size)){
//alert('小于');
// let insert_before_element = files_items_files_items.getElementsByClassName('files-item')[0];
// insert_before_element.parentNode.insertBefore(file_item,insert_before_element);
file_item_i2.parentNode.insertBefore(file_item,file_item_i2);
//alert(i + ' -' + i2);
i2--;
i--;
}
}
}
*/


// 排序代码来自 https://www.cnblogs.com/sanrenblog/p/16623040.html 我十分致敬作者的水平！
/**
 * 比较字符串
 * @param str1
 * @param str2
 */
function strCompare(str1, str2) {
    // 处理数据为null的情况
    if (str1 == undefined && str2 == undefined) {
        return 0;
    }
    if (str1 == undefined) {
        return -1;
    }
    if (str2 == undefined) {
        return 1;
    }

    // 比较字符串中的每个字符
    let c1;
    let c2;

    let regexArr = ['-', '_', '—', '~', '·'], canRegex = /[^0-9\.]/g;
    // 如果都不是数字格式（含有其它内容）
    if (canRegex.test(str1) && canRegex.test(str2)) {
        for (let i = 0; i < regexArr.length; i++) {
            let regex = eval('(/[^0-9\\' + regexArr[i] + '\\.]/g)');
            // 去除后缀
            let tps1 = str1.replace(/\.[0-9a-zA-Z]+$/, '');
            let tps2 = str2.replace(/\.[0-9a-zA-Z]+$/, '');
            // 如果在名字正则要求范围内（没有正则以外的值）
            if (!regex.test(tps1) && !regex.test(tps2)) {
                // 转换为字符串数组
                let numberArray1 = tps1.split(regexArr[i]);
                let numberArray2 = tps2.split(regexArr[i]);
                return compareNumberArray(numberArray1, numberArray2);
            }
        }
    }

    // 逐字比较返回结果
    for (let i = 0; i < str1.length; i++) {
        c1 = str1[i];
        if (i > str2.length - 1) { // 如果在该字符前，两个串都一样，str2更短，则str1较大
            return 1;
        }
        c2 = str2[i];
        // 如果都是数字的话，则需要考虑多位数的情况，取出完整的数字字符串，转化为数字再进行比较
        if (isNumber(c1) && isNumber(c2)) {
            let numStr1 = "";
            let numStr2 = "";
            // 获取数字部分字符串
            for (let j = i; j < str1.length; j++) {
                c1 = str1[j];
                if (!isNumber(c1) && c1 !== '.') { // 不是数字则直接退出循环
                    break;
                }
                numStr1 += c1;
            }
            for (let j = i; j < str2.length; j++) {
                c2 = str2[j];
                if (!isNumber(c2) && c2 !== '.') {
                    break;
                }
                numStr2 += c2;
            }
            // 将带小数点的数字转换为数字字符串数组
            let numberArray1 = numStr1.split('.');
            let numberArray2 = numStr2.split('.');
            return compareNumberArray(numberArray1, numberArray2);
        }

        // 不是数字的比较方式
        if (c1 != c2) {
            return c1 - c2;
        }
    }
    return 0;
}

/**
 * 判断是否为数字
 * @param obj
 * @returns
 */
function isNumber(obj) {
    if (parseFloat(obj).toString() == "NaN") {
        return false;
    }
    return true;
}

/**
 * 比较两个数字数组
 *
 * @param numberArray1
 * @param numberArray2
 */
function compareNumberArray(numberArray1, numberArray2) {
    for (let i = 0; i < numberArray1.length; i++) {
        if (numberArray2.length < i + 1) { // 此时数字数组2比1短，直接返回
            return 1;
        }
        let compareResult = parseInt(numberArray1[i]) - parseInt(numberArray2[i]);
        if (compareResult != 0) {
            return compareResult;
        }
    }
    // 说明数组1比数组2短，返回小于
    return -1;
}

/*
let arr = ["5栋", "7栋", "4栋", "4.5栋", "4.1栋", "4栋", "15栋", "24栋"];
arr.sort(function(str1, str2) {
    return strCompare(str1, str2)
});
*/

// 是否从文件名排序，可能对非英语文字文本无效
let files_order_by_name_function_order_is_123 = true; // 是否正序
function files_order_by_name_function(){
	let files_items = files_items_files_items.getElementsByClassName('files-item');
	let files_items_json_info_array = new Array();
	for(let i=0;i<files_items.length;i++){
		let item = files_items[i];
		files_items_json_info_array.push({
			"name":item.name,
			"size":item.size,
			"id":item.item_id
		});
	}
	// alert(JSON.stringify(files_items_json_info_array));
	//[{"name":"01.mp4","size":"313207866","id":"176132"},{"name":"13.mp4","size":"203651797","id":"176120"},{"name":"08.mp4","size":"304623668","id":"176127"},{"name":"04.mp4","size":"280701895","id":"176126"},{"name":"10.mp4","size":"262996367","id":"176129"},{"name":"02.mp4","size":"238375914","id":"176128"},{"name":"03.mp4","size":"274166392","id":"176131"},{"name":"11.mp4","size":"215385843","id":"176121"},{"name":"06.mp4","size":"254527332","id":"176130"},{"name":"07.mp4","size":"219882772","id":"176125"},{"name":"12.mp4","size":"197584877","id":"176122"},{"name":"05.mp4","size":"231547172","id":"176124"},{"name":"09.mp4","size":"210474913","id":"176123"},{"name":"17.mp4","size":"187836470","id":"176119"},{"name":"15.mp4","size":"99511843","id":"176118"},{"name":"16.mp4","size":"52202176","id":"176117"},{"name":"18.mp4","size":"41405850","id":"176116"}]
	let files_items_json_info_array_for_name = new Array();
	for(let i=0;i<files_items_json_info_array.length;i++){
		let item = files_items_json_info_array[i];
		files_items_json_info_array_for_name.push(item["name"]);
	}
	let name_order_result = files_items_json_info_array_for_name.sort(function(str1, str2) {
		if(files_order_by_name_function_order_is_123){
			return strCompare(str1, str2)
		}else{
			return strCompare(str2, str1)
		}
	});
	for(let i=0;i<name_order_result.length;i++){
		let item = name_order_result[i];
		// 开始查看哪些文件名称是这个，是的话，放到第一位
		for(let i2=0;i2<files_items.length;i2++){
			let item2 = files_items[i2];
			if(item2.name == item){
				files_items[0].parentNode.insertBefore(item2,files_items[0]);
			}
		}
	}
	files_order_by_name_function_order_is_123 = !files_order_by_name_function_order_is_123;
}
let files_order_name_button = document.getElementById('files-order-name-button');
if(files_order_name_button!=undefined){
	files_order_name_button.onclick = files_order_by_name_function;
}



// 是否从大到小排序？
let files_order_by_size_by_max = true;
function files_order_by_size_function(){
	let files_items = files_items_files_items.getElementsByClassName('files-item');
	for(let i=0;i<files_items.length;i++){
		let file_item = files_items[i];
		//alert(i + ' --');
		for(let i2=0;i2<i;i2++){
			let file_item_i2 = files_items[i2];
			//alert(i2 + ' ---');
			//alert(file_item.size + '---' + file_item_i2.size);
			//alert(file_item.size<file_item_i2.size);
			// 判断排序方法
			if(files_order_by_size_by_max){
				if(parseInt(file_item.size)>parseInt(file_item_i2.size)){
					//alert('小于');
					// let insert_before_element = files_items_files_items.getElementsByClassName('files-item')[0];
					// insert_before_element.parentNode.insertBefore(file_item,insert_before_element);
					file_item_i2.parentNode.insertBefore(file_item,file_item_i2);
					//alert(i + ' -' + i2);
					i2--;
					i--;
				}
			}else{
				if(parseInt(file_item.size)<parseInt(file_item_i2.size)){
					//alert('小于');
					// let insert_before_element = files_items_files_items.getElementsByClassName('files-item')[0];
					// insert_before_element.parentNode.insertBefore(file_item,insert_before_element);
					file_item_i2.parentNode.insertBefore(file_item,file_item_i2);
					//alert(i + ' -' + i2);
					i2--;
					i--;
				}
			}

		}
	}
}
let files_order_size_button = document.getElementById('files-order-size-button');
files_order_size_button.onclick = function(){
	files_order_by_size_function();
	files_order_by_size_by_max=!files_order_by_size_by_max;
}

let login_content_logo = document.getElementById('login-content-logo');
login_content_logo.onclick = function(){
	// window.open('http://yunzhongzhuan.com/welcome/');
}

// 是否从新到旧排序？
let files_order_by_date_by_int_max = true;
function files_order_by_date_int_function(){
	let files_items = files_items_files_items.getElementsByClassName('files-item');
	for(let i=0;i<files_items.length;i++){
		let file_item = files_items[i];
		//alert(i + ' --');
		for(let i2=0;i2<i;i2++){
			let file_item_i2 = files_items[i2];
			//alert(i2 + ' ---');
			//alert(file_item.size + '---' + file_item_i2.size);
			//alert(file_item.size<file_item_i2.size);
			// 判断排序方法
			if(files_order_by_date_by_int_max){
				if(parseInt(file_item.date_int)>parseInt(file_item_i2.date_int)){
					//alert('小于');
					// let insert_before_element = files_items_files_items.getElementsByClassName('files-item')[0];
					// insert_before_element.parentNode.insertBefore(file_item,insert_before_element);
					file_item_i2.parentNode.insertBefore(file_item,file_item_i2);
					//alert(i + ' -' + i2);
					i2--;
					i--;
				}
			}else{
				if(parseInt(file_item.date_int)<parseInt(file_item_i2.date_int)){
					//alert('小于');
					// let insert_before_element = files_items_files_items.getElementsByClassName('files-item')[0];
					// insert_before_element.parentNode.insertBefore(file_item,insert_before_element);
					file_item_i2.parentNode.insertBefore(file_item,file_item_i2);
					//alert(i + ' -' + i2);
					i2--;
					i--;
				}
			}

		}
	}

	// 文件夹
	let folders_items = files_items_folders_items.getElementsByClassName('files-item');
	for(let i=0;i<folders_items.length;i++){
		let folder_item = folders_items[i];
		//alert(i + ' --');
		for(let i2=0;i2<i;i2++){
			let folder_item_i2 = folders_items[i2];
			//alert(i2 + ' ---');
			//alert(file_item.size + '---' + file_item_i2.size);
			//alert(file_item.size<file_item_i2.size);
			// 判断排序方法
			if(files_order_by_date_by_int_max){
				if(parseInt(folder_item.date_int)>parseInt(folder_item_i2.date_int)){
					//alert('小于');
					// let insert_before_element = files_items_files_items.getElementsByClassName('files-item')[0];
					// insert_before_element.parentNode.insertBefore(file_item,insert_before_element);
					folder_item_i2.parentNode.insertBefore(folder_item,folder_item_i2);
					//alert(i + ' -' + i2);
					i2--;
					i--;
				}
			}else{
				if(parseInt(folder_item.date_int)<parseInt(folder_item_i2.date_int)){
					//alert('小于');
					// let insert_before_element = files_items_files_items.getElementsByClassName('files-item')[0];
					// insert_before_element.parentNode.insertBefore(file_item,insert_before_element);
					folder_item_i2.parentNode.insertBefore(folder_item,folder_item_i2);
					//alert(i + ' -' + i2);
					i2--;
					i--;
				}
			}

		}
	}

}
let files_order_date_button = document.getElementById('files-order-date-button');
files_order_date_button.onclick = function(){
	files_order_by_date_int_function();
	files_order_by_date_by_int_max=!files_order_by_date_by_int_max;
}




let free_or_mini_or_big_vip = document.getElementById('free-or-mini-or-big-vip');

let ad_items = document.getElementsByClassName('sharefile-ad-only-one');
if(navigator.language.toLowerCase().indexOf('cn')==-1){
	
	for(let i=0;i<ad_items.length;i++){let item = ad_items[i];item.remove();i--;}
	
	free_or_mini_or_big_vip.remove();
}

let download_media_locked = false;
if(window.location.href.indexOf('/download/media/')!=-1){
	download_media_locked = true;
	let download_media_url = window.location.href.split('#')[0];
	let download_media_uri = download_media_url.split('yunzhongzhuan.com')[1];
	let download_media_uri_array = download_media_uri.split('/');
	if(
		download_media_uri_array.length==5
		&&
		download_media_uri_array[0]==""
		&&
		download_media_uri_array[1]=="download"
		&&
		download_media_uri_array[2]=="media"
		&&
		download_media_uri_array[3].length==38
		&&
		download_media_uri_array[4]!=""
	){
		// let file_name = download_media_uri_array[4].split('#')[0];
		// file_name = file_name.split('?')[0];
		swal({
			title: "下载文件？",
			text: "下载（" + decodeURIComponent(download_media_uri_array[4]) + "）文件？",
			icon: "warning",
			buttons: true,
			dangerMode: true,
			closeOnClickOutside: false,
		}).then((willDelete) => {
			if(willDelete){
				// download_media_url = download_media_url.split('#')[0];
				// download_media_url = download_media_url.split('?')[0];
				window.open(download_media_url);
			}
			setTimeout(function(){
				window.location.href="/";
			},100);
		});

	}

}
if(window.location.href.split('#').length<2){
	// window.location.href="#login";
	if(window.location.href.indexOf("#sharecenter")==-1){ // 默认显示社区页面 SHARECENTER
		window.location.href="#sharecenter";
	}
}

function getTopLevelDomain(hostname) {
    const parts = hostname.split('.');
    if (parts.length >= 2) {
        return parts.slice(-2).join('.');
    }
    return hostname; // fallback
}





document.domain=getTopLevelDomain(window.location.hostname);
let upload_window_iframe_element = document.getElementById('upload-window-iframe-element');
// 是否已经开始进行文件上传了
let upload_window_iframe_element_src_locked = false;
let show_upload_full_screen_mask = false;
// 获取 cookie
function get_cookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))
	return unescape(arr[2]);
	else
	return null;
}
// 保存用户信息的数组
let userinfo = {};
let session_id = get_cookie("PHPSESSID");
if( session_id != undefined && session_id != null && session_id != "" ){
	userinfo["session_id"] = session_id;
}
// 首页顶部应用列表
let top_apps = [
	{
		"name":"云中转",
		"link":"https://www.yunzhongzhuan.com/welcome/",
		"description":"云中转-全球网络传文件不限速",
		"icon":"/img/logo.png",
		// "icon":"//tva1.sinaimg.cn/mw2000/005CbWF8gy1h16lkvt5ubj30go0goq4h.jpg",
		"new_open":true
	}/*,
	{
		"name":"括彩云CDN",
		"link":"https://www.kuocaicdn.com/?un=1070892255&ref=yunzhongzhuan.com",
		"description":"括彩云智能CDN-企业级智能CDN服务商,专业的国内外内容分发加速服务平台",
		"icon":"//kuocaicdn.com/image/2ebe72b4548cd2220476726067c9058c.PNG",
		// "icon":"//tva1.sinaimg.cn/mw2000/005CbWF8gy1h16lkvt5ubj30go0goq4h.jpg",
		"new_open":true
	}
	{
		"name":"中国移动",
		"link":"https://www.10086.cn",
		"description":"中国移动-全球第三大电信运营商",
		"icon":"//gimg2.baidu.com/gimg/app=2011&src=bkimg.cdn.bcebos.com/pic/64380cd7912397dda14425d493d7a5b7d0a20df4299f",
		"new_open":true
	},
	{
		"name":"中国联通",
		"link":"https://www.10010.com",
		"description":"中国联通-中国第三大电信运营商",
		"icon":"//gimg2.baidu.com/gimg/app=2011&src=bkimg.cdn.bcebos.com/pic/203fb80e7bec54e736d1578e56728c504fc2d5623c42",
		"new_open":true
	},{
		"name":"中国电信",
		"link":"https://www.189.cn",
		"description":"中国电信-全球第十大电信运营商",
		"icon":"//gimg2.baidu.com/gimg/app=2011&src=bkimg.cdn.bcebos.com/pic/0b55b319ebc4b74543a9a7e170ad09178a82b801bfb1",
		"new_open":true
	}*/
];
// 首页顶部应用列表
let top_applications_items = document.getElementById('top-applications-items');
// 循环把首页顶部应用列表输出
for(let i=0;i<top_apps.length;i++){
	let item = top_apps[i];
	let div = document.createElement('div');
	div.className = "top-applications-item";
	div.style.backgroundImage = "url('" + item["icon"] + "')";
	div.title = item["description"];
	div.new_open = item["new_open"];
	div.onclick = function(){
		if(this.new_open){
			window.open(item["link"]);
		}else{
			window.location.href=item["link"];
		}
		
		return false;
		/*
		swal({
			title: "访问应用",
			text: "准备访问" + item["name"] + "！",
			icon: "success",
			buttons: true,
			closeOnClickOutside: false,
			dangerMode: true,
		}).then((willDelete) => {
			if (willDelete) {
				window.open(item["link"]);
			}
		});
		*/
	}
	top_applications_items.append(div);
}
// 搜索输入框
let files_search_input = document.getElementById('files-search-input');
files_search_input.placeholder = "搜索文件";
// 导航栏元素
let nav = document.getElementById('nav');
nav.show = false;
// 隐藏导航栏元素
let hide_nav_button = document.getElementById('hide-nav-button');
hide_nav_button.onclick = nav_hide();
function nav_hide(){
	nav.show = false;
	// nav.style.left = "-" + nav.offsetWidth + "px";
	nav.style.left = "";
}
let show_nav_button = document.getElementById('show-nav-button');
show_nav_button.onclick = function(){

	if(
		nav.show == true
	){
		nav_hide();
		return false;
	}
	nav.show = true;
	nav.style.left = "-0px";	
}
// 是否按下 CTRL 键
let keyon_ctrl = false;
// 监听 visibility change 事件 
document.addEventListener('visibilitychange',function(){

  var isHidden = document.hidden;
   if(isHidden){
	keyon_ctrl = false;
   }
	
	if (document.visibilityState == 'hidden') {
		keyon_ctrl = false;
	}
	
  }
	
);
// 搜索内容老的输入内容
let files_search_input_value_old = "";
// 键盘按下
document.onkeydown = function (e) {
	e = e || window.event;
	if ((e.ctrlKey && e.keyCode == 82) || // ctrl+R
		e.keyCode == 116) {
		// F5刷新，禁止
		// return false;
	}
	if (e.keyCode == 27){ // esc
		// console.log('esc');
		wechat_verify_clear_timeout();
	}
	if (e.ctrlKey && e.keyCode == 17) {// CTRL 按下
		keyon_ctrl = true;
		return false;
	}
	// 如果按下回车键
	if (e.keyCode == 13){
		if(document.activeElement.id=="files-search-input"){
			if(document.activeElement.value==files_search_input_value_old){
				return false;
			}
			// console.log('搜索');
			try{clearTimeout(files_search_function_timeout);}catch(e){};
			files_search_function_timeout = setTimeout(function(){
				folders_items_selected_array = [];
				files_items_selected_array = [];
				get_files_folders_index = 0;
				files_reload();
			},2);
		}
	}
}
// 放开键盘
document.onkeyup = function (e){
	e = e || window.event;
	let keycode = e.keyCode;
	if (keycode == 17)
	{
		keyon_ctrl = false;
		return false;
	}
}
// 保存文件夹的列表
let files_items_folders_items = document.getElementById('files-items-folders-items');
// 保存文件的列表
let files_items_files_items = document.getElementById('files-items-files-items');
// 已经选中的文件和文件夹数组
let folders_items_selected_array = [];
let files_items_selected_array = [];
// 取消选中文件或文件夹
function unselected_files(){
	let folders = files_items_folders_items.getElementsByClassName('files-item');
	folders_items_selected_array = [];
	for(let i=0;i<folders.length;i++){
		let item = folders[i];
		if(item.selected){
			item.name_element.click();
		}
	}
	let files_items = files_items_files_items.getElementsByClassName('files-item');
	files_items_selected_array = [];
	for(let i=0;i<files_items.length;i++){
		let item = files_items[i];
		if(item.selected){
			item.name_element.click();
		}
	}
}
// 关闭所有展开的文件或文件夹右侧菜单操作
function unshowmenu_files(){
	let folders = files_items_folders_items.getElementsByClassName('files-item');
	for(let i=0;i<folders.length;i++){
		let item = folders[i];
		if(item.menu!=undefined&&item.menu.show!=undefined&&item.menu.items!=undefined&&item.menu.show){
			// console.log(item);
			item.menu.show = false;
			item.menu.items.className = "files-item-menu-items files-item-menu-items-hide";
		}
	}
	let files_items = files_items_files_items.getElementsByClassName('files-item');
	for(let i=0;i<files_items.length;i++){
		let item = files_items[i];
		if(item.menu!=undefined&&item.menu.show!=undefined&&item.menu.items!=undefined&&item.menu.show){
			// console.log(item);
			item.menu.show = false;
			item.menu.items.className = "files-item-menu-items files-item-menu-items-hide";
		}
	}
	let sharecenter_content_item_files = document.getElementsByClassName('sharecenter-content-item-files');
	for(let i=0;i<sharecenter_content_item_files.length;i++){
		let sharecenter_content_item_files_items = sharecenter_content_item_files[i].getElementsByClassName('files-item');
		for(let i2=0;i2<sharecenter_content_item_files_items.length;i2++){
			// console.log(sharecenter_content_item_files_items[i2].menu.show);
			if(
				sharecenter_content_item_files_items[i2].menu!=undefined
				&&
				sharecenter_content_item_files_items[i2].menu.show!=undefined
				&&
				sharecenter_content_item_files_items[i2].menu.items!=undefined
				&&
				sharecenter_content_item_files_items[i2].menu.show
			){
				sharecenter_content_item_files_items[i2].menu.show == false;
				sharecenter_content_item_files_items[i2].menu.items.className = "files-item-menu-items files-item-menu-items-hide";
			}
		}
	}
}
// 清空文件列表
let remove_files_items_running = false;
function remove_files_items(){
	remove_files_items_running = true;
	page_scroll_height_function_locked = true;
	// 如果位于第一层 隐藏返回上一级按钮
	if(get_files_folders_index==0){
		back_parent_folder_button.className = "files-item files-item-hide";
	}else{
		back_parent_folder_button.className = "files-item";
	}
	// 文件和文件夹总数
	let folders = files_items_folders_items.getElementsByClassName('files-item');
	let files_items = files_items_files_items.getElementsByClassName('files-item');
	let files_num = files_items.length + folders.length;
	// 先移除当前目录的文件夹和文件
	for(let i=0;i<folders.length;i++){
		let item = folders[i];
		setTimeout(function(){
			item.className = "files-item files-item-hide";
			setTimeout(function(){
				item.remove();
			},310);
		},(i+1)*20);
	}
	// 先移除当前目录的文件夹和文件
	for(let i=0;i<files_items.length;i++){
		let item = files_items[i];
		setTimeout(function(){
			item.className = "files-item files-item-hide";
			setTimeout(function(){
				item.remove();
			},310);
		},(i+1)*20);
	}
	setTimeout(function(){
		remove_files_items_running = false;
	},((files_num*20)+60) );
	return files_num;
}
// 返回上一级按钮
let back_parent_folder_button = document.getElementById('back-parent-folder-button');
back_parent_folder_button.ondblclick = function(){
	folders_items_selected_array = [];
	files_items_selected_array = [];
	get_files_folders_index--;
	if(get_files_folders_index<0){get_files_folders_index=0};
	// get_files_folders_array.pop();
	let files_num = remove_files_items();
	setTimeout(function(){
		get_files_page = 0;
		get_folders_page = 0;
		get_folders_loadover = false;
		get_files_loadover = false;
		page_scroll_height_function_locked = false;
		get_files();
	},( ( files_num + 3) * 10 / 2 ) + 30 );
}
back_parent_folder_button.getElementsByClassName('files-item-name')[0].getElementsByTagName('span')[0].onclick = back_parent_folder_button.ondblclick;





// 加载文件夹到列表中
function push_folders_to_files_page(folders_items,isPrepend){
	// 文件夹数据
	/*
	let folders_items = [
		{
			"name":"古天乐电影全集",
			"date":"2021-11-06 13:29:05",
			"id":"31",
			"parent":"0"
		},
		{
			"name":"成龙电影系列",
			"date":"2021-11-09 22:00:31",
			"id":"65",
			"parent":"0"
		},
		{
			"name":"古天乐电影全集",
			"date":"2021-11-06 13:29:05",
			"id":"31",
			"parent":"0"
		},
		{
			"name":"成龙电影系列",
			"date":"2021-11-09 22:00:31",
			"id":"65",
			"parent":"0"
		},
		{
			"name":"古天乐电影全集",
			"date":"2021-11-06 13:29:05",
			"id":"31",
			"parent":"0"
		},
		{
			"name":"成龙电影系列",
			"date":"2021-11-09 22:00:31",
			"id":"65",
			"parent":"0"
		}
	];
	*/
	// 输出文件夹
	for(let i=0;i<folders_items.length;i++){
		let item = folders_items[i];
		let div = document.createElement('div');
		div.className = "files-item files-item-hide";
		div.name = item["name"];
		div.date = item["date"];
		div.date_int = item["date_int"];
		div.item_id = item["id"];
		div.parent = item["parent"];
		div.innerHTML = '<div class="files-item-icon"><i class="fa fa-folder"></i></div><div class="files-item-name"><span>' + div.name + '</span></div><div class="files-item-date"><span>' + div.date + '</span></div><div class="files-item-size"><span>文件夹</span></div><div class="files-item-menu" title="菜单"><i class="fa fa-bars"></i><div class="files-item-menu-items files-item-menu-items-hide"><div class="files-item-menu-item files-item-menu-item-rename-button"><i class="fa fa-pencil"></i>命名</div><div class="files-item-menu-item files-item-menu-item-delete-button"><i class="fa fa-trash"></i>删除</div></div></div>';
		div.selected = false;
		div.name_element = div.getElementsByClassName('files-item-name')[0];
		div.name_element.title = div.name;
		div.name_element.parent = div;
		div.name_element.onclick = function(){
			if(!this.parent.selected){
				// 如果未按下 CTRL 先清空其他的选中文件或文件夹
				if(!keyon_ctrl){
					unselected_files();
				}
				if(this.parent.offline_id!=undefined){
					this.parent.className = "files-item files-item-offline-item files-item-selected";
				}else{
					this.parent.className = "files-item files-item-selected";
				}
			}else{
				if(this.parent.offline_id!=undefined){
					this.parent.className = "files-item files-item-offline-item";
				}else{
					this.parent.className = "files-item";
				}
				
				this.parent.selected = false;
				if(!keyon_ctrl){
					unselected_files();
				}
				return false;
			}
			this.parent.selected = !this.parent.selected;
			folders_items_selected_array.push(this.parent);
		}
		div.date_element = div.getElementsByClassName('files-item-date')[0];
		div.date_element.parent = div;
		div.date_element.onclick = div.name_element.onclick;
		div.size_element = div.getElementsByClassName('files-item-size')[0];
		div.size_element.parent = div;
		div.size_element.onclick = div.name_element.onclick;
		div.icon_element = div.getElementsByClassName('files-item-icon')[0];
		div.icon_element.parent = div;
		div.icon_element.onclick = div.name_element.onclick;
		div.menu = div.getElementsByClassName('files-item-menu')[0];
		div.menu.items = div.menu.getElementsByClassName('files-item-menu-items')[0];
		div.menu.show = false;
		div.menu.onclick = function(){
			if(files_options_items.show){
				files_options.click();
			}
			if(!this.show){
				unshowmenu_files();
				this.show = !this.show;
				this.items.className = "files-item-menu-items";
				return false;
			}else{
				this.items.className = "files-item-menu-items files-item-menu-items-hide";
			}
			this.show = !this.show;
		}
		div.ondblclick = function(){
			while( get_files_folders_index < get_files_folders_array.length-1 ){
				get_files_folders_array.pop();
			}
			get_files_folders_index++;
			get_files_folders_array.push(this.item_id);
			let files_num = remove_files_items();
			setTimeout(function(){
				folders_items_selected_array = [];
				files_items_selected_array = [];
				get_files_page = 0;
				get_folders_page = 0;
				get_folders_loadover = false;
				get_files_loadover = false;
				page_scroll_height_function_locked = false;
				files_search_input.value="";
				get_files();
			},( ( files_num + 3) * 10 / 2 ) + 30 );
		}
		div.name_span_element = div.name_element.getElementsByTagName('span')[0];
		div.name_span_element.item_id = div.item_id;
		div.name_span_element.onclick = div.ondblclick;
		div.menu_rename_element = div.getElementsByClassName('files-item-menu-item-rename-button')[0];
		div.menu_rename_element.parent = div;
		div.menu_rename_element.onclick = function(){
			folders_items_selected_array = [];
			files_items_selected_array = [];
			unselected_files();
			folders_items_selected_array[0] = this.parent;
			if(this.parent.offline_id!=undefined){
				this.parent.className = "files-item files-item-offline-item files-item-selected";
			}else{
				this.parent.className = "files-item files-item-selected";
			}
			
			this.parent.selected = true;
			files_rename_button.onclick();
		}
		div.menu_delete_element = div.getElementsByClassName('files-item-menu-item-delete-button')[0];
		div.menu_delete_element.parent = div;
		div.menu_delete_element.onclick = function(){
			folders_items_selected_array = [];
			files_items_selected_array = [];
			unselected_files();
			folders_items_selected_array[0] = this.parent;
			if(this.parent.offline_id!=undefined){
				this.parent.className = "files-item files-item-offline-item files-item-selected";
			}else{
				this.parent.className = "files-item files-item-selected";
			}
			this.parent.selected = true;
			files_delete_items();
		}
		if(isPrepend!=undefined&&isPrepend){
			files_items_folders_items.prepend(div);
		}else{
			files_items_folders_items.append(div);
		}
		setTimeout(function(){
			div.className = "files-item";
		},(i+1)*50);
	}
}
// 网站首页添加文件等任务操作
let files_options_items = document.getElementById('files-options-items');
let files_options_item_client_download_button = document.getElementById('files-options-item-client-download-button');
if(files_options_item_client_download_button!=undefined){
files_options_item_client_download_button.onclick = function(){
	setTimeout(function(){
		files_options_items.show=false;
		files_options_items.className="files-options-items files-options-items-hide";
	},10);
	window.open('/downloads/');
}
}
let files_client_download_button = document.getElementById('files-client-download-button');
files_client_download_button.onclick = function(){
	window.open('/downloads/');
}
let nav_client_for_windows_button = document.getElementById('nav-client-for-windows-button');
if(nav_client_for_windows_button!=undefined){
	nav_client_for_windows_button.onclick = function(){
		window.open('/downloads/');
	}
}
files_options_items.style.height = ( ( 45 * files_options_items.getElementsByClassName('files-options-item').length ) + 0 ) + "px";
files_options_items.className = "files-options-items files-options-items-hide";
files_options_items.show = false;
let files_options = document.getElementById('files-options');
files_options.onclick = function(){
	unshowmenu_files();
	files_options_items.show = !files_options_items.show;
	if(files_options_items.show){
		files_options_items.className = "files-options-items";
	}else{
		files_options_items.className = "files-options-items files-options-items-hide";
	}
}
// 根据大小返回单位和大小
function get_size_unit(size){
	let unit = 'B';
	if(size >= 1024){
		size /= 1024;
		unit = 'KB';
	}
	if(size >= 1024){
		size /= 1024;
		unit = 'MB';
	}
	if(size >= 1024){
		size /= 1024;
		unit = 'GB';
	}
	if(size >= 1024){
		size /= 1024;
		unit = 'TB';
	}
	if(size >= 1024){
		size /= 1024;
		unit = 'PB';
	}
	try{
		size = size.toFixed(2);
	}catch(e){};
	return size + unit;
}
// 删除文件或文件夹
function files_delete_items(){
	let folders_id = [];
	let folders_will_delete_element = [];
	for(let i=0;i<folders_items_selected_array.length;i++){
		folders_id.push(folders_items_selected_array[i].item_id);
		folders_will_delete_element.push(folders_items_selected_array[i]);
	}
	folders_id = folders_id.toString();
	// console.log(folders_id);
	let files_id = [];
	let files_will_delete_element = [];
	for(let i=0;i<files_items_selected_array.length;i++){
		files_id.push(files_items_selected_array[i].item_id);
		files_will_delete_element.push(files_items_selected_array[i]);
	}
	files_id = files_id.toString();
	// console.log(files_id);
	let parent_folder_id = get_files_folders_array[get_files_folders_index];
	// console.log(parent_folder_id);
	
	swal({
		title: "危险操作",
		text: "是否删除文件？",
		icon: "warning",
		buttons: true,
		dangerMode: true,
		closeOnClickOutside: false,
	}).then((willDelete) => {
		if (willDelete) {
			
			swal({
				title: "正在删除",
				text: '正在删除。',
				icon: "warning",
				dangerMode: true,
				closeOnClickOutside: false,
			});
			let xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4 && xmlhttp.status==200){
					let ResultJSON = JSON.parse(xmlhttp.responseText);
					if(ResultJSON["status"]){
						files_unpaste_button.click();
						swal({
							title: "删除成功",
							text: '删除成功！',
							icon: "success",
							dangerMode: true,
							closeOnClickOutside: false,
						});
						for(let i=0;i<folders_will_delete_element.length;i++){
							let item = folders_will_delete_element[i];
							setTimeout(function(item){
								item.className = "files-item files-item-hide";
								setTimeout(function(item){
									item.remove();
								},300,item);
							},(i+1)*50,item);
						}
						for(let i=0;i<files_will_delete_element.length;i++){
							let item = files_will_delete_element[i];
							setTimeout(function(item){
								item.className = "files-item files-item-hide";
								setTimeout(function(item){
									item.remove();
								},300,item);
							},(i+1)*50,item);
						}
					}else{
						swal({
							title: "删除失败",
							text: ResultJSON["message"],
							icon: "error",
							// buttons: true,
							// dangerMode: true,
							closeOnClickOutside: false,
						});
					}
					get_usedsize_function();
				}
			}
			xmlhttp.open("POST",api_server_url+"/php/v4/files_delete",true);
			xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			xmlhttp.withCredentials = true;
			xmlhttp.send("folders_id="+folders_id+"&files_id="+files_id+"&parent_folder_id="+parent_folder_id+"&session_id="+userinfo["session_id"]);
			
			
		}

	});
	
}



// 测试
// 创建文件到资源分享 CreateFileToShareCenterItemsItem
function TestCreateFileItem(){
	let aaaaa = document.getElementsByClassName('sharecenter-content-item-files')[0];
	let bbbbb = {
		"date": "2024-06-12 19:34:48",
		"date_int": "1718192088",
		"hash": "123",
		"id": "2891703",
		"mirror": false,
		"name": "秘密园天空之城.mp3",
		"parent": "0",
		"share": "/#sharefile=ljw2LGnr_2830111",
		"size": "1024427",
		"url": "/download/2865573/N8FeQBOX/%E7%A7%98%E5%AF%86%E5%9B%AD%E5%A4%A9%E7%A9%BA%E4%B9%8B%E5%9F%8E.mp3?t=1718606558&t2=-1",
	}
	let ccccc = createFileItem(bbbbb);
	ccccc.name_element = ccccc.getElementsByClassName('files-item-name')[0].getElementsByTagName('span')[0];
	ccccc.name_element.onclick = function(){
		window.location.href = bbbbb["share"];
	}
	ccccc.menu_delete_element.remove();
	ccccc.menu_rename_element.remove();
	aaaaa.append(ccccc);
	ccccc.className = "files-item";
}
// 测试创建文件
/*
setTimeout(function(){
	TestCreateFileItem();
	TestCreateFileItem();
},100);
*/

// 创建评论到评论区









// 是否因Sharecenter分享资源文件选择文件而更改了SWAL窗口
let SWAL_Lock_of_Sharecenter_Status = false;

// 一直保持SWAL更改样式

function SetTheSWALBUG(){
	if(document.getElementsByClassName('swal-overlay--show-modal')[0]!=undefined){
		try{
			if(
				true
				||
				document.getElementsByClassName('sharecenter-content-new-sharefile-search-files-input-swal')[0]!=undefined
			){
				// pass
			}else{
				if(SWAL_Lock_of_Sharecenter_Status==true){
					document.getElementsByClassName('swal-overlay--show-modal')[0].getElementsByClassName('swal-modal')[0].style="";
					SWAL_Lock_of_Sharecenter_Status == false;
				}
			}

		}catch(e){
			// pass
		}
	}
	if(
		document.getElementsByClassName('swal-overlay--show-modal')[0]==undefined
		&&
		document.getElementsByClassName('swal-overlay')[0]!=undefined
		&&
		(true || document.getElementsByClassName('sharecenter-content-new-sharefile-search-files-input-swal')[0]==undefined)
	){
		if(SWAL_Lock_of_Sharecenter_Status==true){
			document.getElementsByClassName('swal-overlay')[0].getElementsByClassName('swal-modal')[0].style = "";
			SWAL_Lock_of_Sharecenter_Status = false;
		}
		// pass
	}else{

	}
	setTimeout(SetTheSWALBUG,100);
}
SetTheSWALBUG();




function CountTheSharecenterUserSelectedFilesCount(){

	// console.log('选择！！');

	let Files_Items = document.getElementsByClassName('sharecenter-content-new-sharefile-search-files-input-swal')[0].getElementsByClassName('files-items')[0].getElementsByClassName('files-item');


	let Selected_Files_Count = 0;
	let Selected_Files_Array = [];

	for(
		let i = 0;
		i < Files_Items.length;
		i++
	){
		if(
			Files_Items[i]!=undefined
			&&
			Files_Items[i].selected!=undefined
			&&
			Files_Items[i].selected == true
		){
			Selected_Files_Count = Selected_Files_Count + 1;
			Selected_Files_Array.push(Files_Items[i].item_id);
		}

	}

	if(Selected_Files_Count>0){
		document.getElementsByClassName('swal-button--confirm')[0].parentElement.style.display = "block";
		document.getElementsByClassName('swal-button--confirm')[0].parentElement.style.float = "right";
	}else{
		document.getElementsByClassName('swal-button--confirm')[0].parentElement.style.display = "none";
	}

	console.log('选择了 ' + Selected_Files_Count + ' 个文件。');
	console.log(Selected_Files_Array);
	return Selected_Files_Array;


}


// Sharecenter Content Submit
// 资源分享 发布按钮
let sharecenter_content_new_sharefile_button_submit = document.getElementsByClassName('sharecenter-content-new-sharefile-button-submit')[0];

let sharecenter_content_new_sharefile_title_input = document.getElementsByClassName('sharecenter-content-new-sharefile-title-input')[0];

let sharecenter_content_new_sharefile_areatext_element = document.getElementsByClassName('sharecenter-content-new-sharefile-areatext-element')[0];

let sharecenter_content_new_sharefile_button_submit_locked = false;

sharecenter_content_new_sharefile_button_submit.onclick = function(){


	if(
		sharecenter_content_new_sharefile_button_submit_locked == true
	){


		swal({
			title: "正在提交",
			text: "正在提交",
			icon: "info",
			// buttons: true,
			dangerMode: true,
			button: "了解",
			closeOnClickOutside: false,
		}).then((willDelete) => {
			// 
		});


		return false;

	}








	if(userinfo["id"]!=undefined&&userinfo["id"]!=null&&userinfo["id"]!=''&&userinfo["qq"]!=undefined&&userinfo["qq"]!=null&&userinfo["qq"]!=''&&userinfo["username"]!=undefined&&userinfo["username"]!=null&&userinfo["username"]!=''){


	}else{




		swal({
			title: "请先登录",
			text: "请先登录。",
			icon: "info",
			buttons: true,
			// dangerMode: true,
			// button: "继续",
			closeOnClickOutside: false,
		}).then((willDelete) => {
			if (willDelete) {
				if(login.className.indexOf('login-hide')!=-1){
					pages_hide();
				}
				login_show();
			}
		});


		return false;



	}








	let new_content_title_value = sharecenter_content_new_sharefile_title_input.value;

	if(
		sharecenter_content_new_sharefile_title_input == undefined
		||
		sharecenter_content_new_sharefile_title_input.value == ""
		||
		sharecenter_content_new_sharefile_title_input.value == null
	){


		swal({
			title: "没有标题",
			text: "没有标题！",
			icon: "info",
			// buttons: true,
			dangerMode: true,
			button: "了解",
			closeOnClickOutside: false,
		}).then((willDelete) => {
			// 
		});


		return false;

		
	}

	let new_content_textarea_value = sharecenter_content_new_sharefile_areatext_element.value;

	while(true){
		if( new_content_textarea_value.split('\n\n').length > 1  ){
			new_content_textarea_value = new_content_textarea_value.replace(/\r\r/g,'\r');
			new_content_textarea_value = new_content_textarea_value.replace(/\n\n/g,'\n');
			new_content_textarea_value = new_content_textarea_value.replace(/\r\n\r\n/g,'\r\n');
		}else{
			break;
		}
	}


	// console.log(new_content_textarea_value);

	if(
		new_content_textarea_value == ""
		||
		new_content_textarea_value == null
		||
		new_content_textarea_value == undefined
	){

		swal({
			title: "没有内容",
			text: "没有内容！\r\n有什么新鲜事想分享给大家？？？",
			icon: "info",
			// buttons: true,
			dangerMode: true,
			button: "了解",
			closeOnClickOutside: false,
		}).then((willDelete) => {
			// 
		});


		return false;

	}






	// PASS
	let Sharecenter_Content_New_Content_Files_List_Array = document.getElementsByClassName('sharecenter-content-new-sharefile-files-items')[0].getElementsByClassName('files-item');
	let Sharecenter_Content_New_Content_Files_List_Array_Of_ID = [];
	for(
		let i=0;
		i<Sharecenter_Content_New_Content_Files_List_Array.length;
		i++
	){
		Sharecenter_Content_New_Content_Files_List_Array_Of_ID.push(Sharecenter_Content_New_Content_Files_List_Array[i].item_id);
	}

	//console.log(Sharecenter_Content_New_Content_Files_List_Array_Of_ID);

	if(
		Sharecenter_Content_New_Content_Files_List_Array_Of_ID.length < 1
	){

		swal({
			title: "没选文件",
			text: "添加文件！",
			icon: "info",
			// buttons: true,
			dangerMode: true,
			button: "了解",
			closeOnClickOutside: false,
		}).then((willDelete) => {
			// 
		});

		return false;

	}


	let Data = {
		"Files":Sharecenter_Content_New_Content_Files_List_Array_Of_ID,
		"Title":new_content_title_value,
		"Content":new_content_textarea_value,
	}

	// console.log(Data);



	sharecenter_content_new_sharefile_button_submit_locked = true;

	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			let ResultJSON = JSON.parse(xmlhttp.responseText);
			if(ResultJSON["status"]){
				
				// pass
				sharecenter_content_new_sharefile_areatext_element.value = "";
				sharecenter_content_new_sharefile_title_input.value = "";

				let sharecenter_content_new_sharefile_files_items = document.getElementsByClassName('sharecenter-content-new-sharefile-files-items')[0].getElementsByClassName('files-item');
				for(
					let i = 0;
					i < sharecenter_content_new_sharefile_files_items.length;
					i++
				){
					if(
						sharecenter_content_new_sharefile_files_items[i]!=undefined
						&&
						sharecenter_content_new_sharefile_files_items[i].getElementsByClassName('files-item-menu')[0]!=undefined
						&&
						sharecenter_content_new_sharefile_files_items[i].getElementsByClassName('files-item-menu')[0].getElementsByTagName('i')[0]!=undefined
					){
						sharecenter_content_new_sharefile_files_items[i].getElementsByClassName('files-item-menu')[0].getElementsByTagName('i')[0].click();
						i--;
					}
				}

				swal({
					title: "发布成功",
					text: ResultJSON["message"],
					icon: "success",
					// buttons: true,
					dangerMode: true,
					closeOnClickOutside: false,
				});

				if(
					ResultJSON["new_content_id"] != undefined
					&&
					ResultJSON["new_content_id"] > 0
				){
					function DoDoDo(){
						GetSharecenterContents(ResultJSON["new_content_id"]);
					}
					setTimeout(DoDoDo,2233);
				}

			}else{
				swal({
					title: "错误消息",
					text: ResultJSON["message"],
					icon: "error",
					// buttons: true,
					dangerMode: true,
					closeOnClickOutside: false,
				});
			}
			sharecenter_content_new_sharefile_button_submit_locked = false;
		}
	}
	xmlhttp.open("POST",api_server_url+"/php/v4/sharecenter_new_content_submit",true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;
	xmlhttp.send("files=" + window.encodeURIComponent(Data.Files.toString()) + "&title=" + window.encodeURIComponent( Data.Title)  + "&content=" + window.encodeURIComponent(  Data.Content )  + "&session_id=" + userinfo["session_id"] );








}


// Sharecenter 文件列表
let sharecenter_content_new_sharefile_files_items = document.getElementsByClassName('sharecenter-content-new-sharefile-files-items')[0];

// 发布文件 搜索文件 选择文件
function SharecenterContentNewContentSelectFileOfSearchFunction(){
	files_search_input.value = document.getElementsByClassName('sharecenter-content-new-sharefile-search-files-input')[0].value;
	files_reload();
	return false;
}

let SharecenterContentNewFileShareShowSelectFileWindowLock = false;
let SharecenterContentNewFileShareShowSelectFileWindowSetTimeoutLock;
let SharecenterContentNewFileShareShowSelectFileWindowDeleteingListLock = false;
// test
function SharecenterContentNewFileShareShowSelectFileWindow(){


	if(userinfo["id"]!=undefined&&userinfo["id"]!=null&&userinfo["id"]!=''&&userinfo["qq"]!=undefined&&userinfo["qq"]!=null&&userinfo["qq"]!=''&&userinfo["username"]!=undefined&&userinfo["username"]!=null&&userinfo["username"]!=''){

	}else{


		swal({
			title: "请先登录",
			text: "请先登录。",
			icon: "info",
			buttons: true,
			// dangerMode: true,
			// button: "继续",
			closeOnClickOutside: false,
		}).then((willDelete) => {
			if (willDelete) {
				if(login.className.indexOf('login-hide')!=-1){
					pages_hide();
				}
				login_show();
			}
		});

		return false;

	}

	if(window.location.href.indexOf('/#sharecenter')==-1){
		try{clearTimeout(SharecenterContentNewFileShareShowSelectFileWindowSetTimeoutLock);}catch(e){};
		SharecenterContentNewFileShareShowSelectFileWindowSetTimeoutLock = setTimeout(SharecenterContentNewFileShareShowSelectFileWindow,10);
		return false;
	}


	if(
		files_reload_locked
		&&
		document.getElementsByClassName('swal-overlay--show-modal')[0]!=undefined
		&&
		document.getElementsByClassName('swal-overlay--show-modal')[0].getElementsByClassName('sharecenter-content-new-sharefile-search-files-input-swal')[0] == undefined
	){ // 正在加载文件 等文件加载完成
		try{clearTimeout(SharecenterContentNewFileShareShowSelectFileWindowSetTimeoutLock);}catch(e){};
		SharecenterContentNewFileShareShowSelectFileWindowSetTimeoutLock = setTimeout(SharecenterContentNewFileShareShowSelectFileWindow,10);
		return false;
	}



	if( // 正在更新列表
		SharecenterContentNewFileShareShowSelectFileWindowDeleteingListLock == true
	){
		try{clearTimeout(SharecenterContentNewFileShareShowSelectFileWindowSetTimeoutLock);}catch(e){};
		SharecenterContentNewFileShareShowSelectFileWindowSetTimeoutLock = setTimeout(SharecenterContentNewFileShareShowSelectFileWindow,10);
		return false;
	}


	if(SharecenterContentNewFileShareShowSelectFileWindowLock){
		return false;
	}

	SharecenterContentNewFileShareShowSelectFileWindowLock = true;




	let html_element2 = document.createElement('div');
	html_element2.className = "sharecenter-content-new-sharefile-search-files-input-swal";
	let search_files_input = document.createElement('input');
	// search_files_input.onsubmit = SharecenterContentNewContentSelectFileOfSearchFunction; cuowu errpr no!!
	search_files_input.className = "sharecenter-content-new-sharefile-search-files-input";
	search_files_input.placeholder = files_search_input.placeholder;
	search_files_input.value = files_search_input.value;
	let search_files_input_form = document.createElement('form');
	search_files_input_form.onsubmit = SharecenterContentNewContentSelectFileOfSearchFunction;
	search_files_input_form.append(search_files_input);
	html_element2.insertBefore(search_files_input_form, html_element2.nextSibling);
	let clone = files_items_files_items.cloneNode(true);

	clone.id = "";
	// clone.getElementById('files-items-files-items').id = "";


	// 处理一下
	let clone_files_items = clone.getElementsByClassName('files-item');

	for(
		let i2 = 0;
		i2 < clone_files_items.length;
		i2++
	){
		clone_files_items[i2].getElementsByClassName('files-item-menu')[0].getElementsByTagName('i')[0].className = "fa fa-square-o";
		clone_files_items[i2].item_id = clone_files_items[i2].getElementsByClassName('files-item-file-info-id')[0].innerText;
		clone_files_items[i2].selected = false;
		clone_files_items[i2].onclick = function(){
			if (this.selected == false) {
				this.selected = true;
				this.getElementsByClassName('files-item-menu')[0].getElementsByTagName('i')[0].className = "fa fa-check-square-o";
			}else{
				this.selected = false;
				this.getElementsByClassName('files-item-menu')[0].getElementsByTagName('i')[0].className = "fa fa-square-o";
			}


			// 触发选择计算/统计函数
			CountTheSharecenterUserSelectedFilesCount();

		}
	}



	html_element2.insertBefore(clone, html_element2.nextSibling);

	// 搜索按钮
	let sharch_files_input_button = document.createElement('div');
	sharch_files_input_button.className = "files-reload-button-items";
	sharch_files_input_button.innerHTML = '<i class="fa fa-search"></i>';
	sharch_files_input_button.onclick = function(){
		files_search_input.value = document.getElementsByClassName('sharecenter-content-new-sharefile-search-files-input')[0].value;
		files_reload();
	};
	search_files_input_form.append(sharch_files_input_button);


	// 如果窗口没有打开的话，就直接出现。
	if(

		document.getElementsByClassName('swal-overlay--show-modal')[0] == undefined

		||

		(
			(document.getElementsByClassName('swal-overlay--show-modal')[0]!=undefined && document.getElementsByClassName('sharecenter-content-new-sharefile-search-files-input-swal')[0] == undefined)
			||
			(document.getElementsByClassName('swal-overlay--show-modal')[0].getElementsByClassName('sharecenter-content-new-sharefile-search-files-input-swal')[0] == undefined)
		)
	){
		swal({
					title: "选择文件",
					content: html_element2,
					// icon: "warning",
					buttons: true,
					closeOnClickOutside: false,
		}).then((willDelete) => {



			if (willDelete) {
				console.log('分享');
				let Selected_Files_Array_Demo = CountTheSharecenterUserSelectedFilesCount();
				console.log('分享文件：');
				console.log(Selected_Files_Array_Demo);


				if(Selected_Files_Array_Demo.length>0){

					if(
						document.getElementsByClassName('sharecenter-content-new-sharefile-search-files-input-swal')[0]!=undefined
						&&
						document.getElementsByClassName('sharecenter-content-new-sharefile-search-files-input-swal')[0].getElementsByClassName('files-items')[0]!=undefined
					){

						let Sharecenter_Content_Item_Files = document.getElementsByClassName('sharecenter-content-new-sharefile-search-files-input-swal')[0].getElementsByClassName('files-items')[0].getElementsByClassName('files-item');

						for(
							let i=0;
							i<Selected_Files_Array_Demo.length;
							i++
						){

							for(
								let i2 = 0;
								i2 < Sharecenter_Content_Item_Files.length;
								i2++
							){

								if(Sharecenter_Content_Item_Files[i2].item_id == Selected_Files_Array_Demo[i]){


									// 查看是否已存在
									let Files_Item_File_ID_In_Sharecenter_Content_New_Content_Files_List_Status = false;
									let Sharecenter_Content_New_Content_Files_List_Array = document.getElementsByClassName('sharecenter-content-new-sharefile-files-items')[0].getElementsByClassName('files-item');
									for(
										let i3 = 0;
										i3 < Sharecenter_Content_New_Content_Files_List_Array.length;
										i3++
									){
										if(
											Sharecenter_Content_New_Content_Files_List_Array[i3].item_id == Sharecenter_Content_Item_Files[i2].item_id
											&&
											Sharecenter_Content_New_Content_Files_List_Array[i3].item_id == Selected_Files_Array_Demo[i]
										){
											Files_Item_File_ID_In_Sharecenter_Content_New_Content_Files_List_Status = true;
										}
										if(
											Files_Item_File_ID_In_Sharecenter_Content_New_Content_Files_List_Status == true
										){
											break;
										}
									}

									if(
										Files_Item_File_ID_In_Sharecenter_Content_New_Content_Files_List_Status == true
									){

										// pass

										// File is in The Sharecenter Content Files List

									}else{

										// console.log('找到！');
										// console.log(Sharecenter_Content_Item_Files[i2]);
										let clone = Sharecenter_Content_Item_Files[i2].cloneNode(true);
										clone.item_id = clone.getElementsByClassName('files-item-file-info-id')[0].innerText;
										clone.getElementsByClassName('files-item-menu')[0].getElementsByTagName('i')[0].className = "fa fa-times-circle";
										clone.getElementsByClassName('files-item-menu')[0].getElementsByTagName('i')[0].parent = clone;
										clone.getElementsByClassName('files-item-menu')[0].getElementsByTagName('i')[0].onclick = function(){
											this.parent.remove();
										}
										sharecenter_content_new_sharefile_files_items.prepend(clone);

									}



								}

							}


						}


					}

				}









			}else{
				console.log('取消了');
			}
		});
	}else{

		SharecenterContentNewFileShareShowSelectFileWindowDeleteingListLock = true;
		// 删除+替换，千万不要直接显示，影响体验！
		let html_element2_files = document.getElementsByClassName('sharecenter-content-new-sharefile-search-files-input-swal')[0].getElementsByClassName('files-item');
		for(let i=0;i<html_element2_files.length;i++){
			// console.log(html_element2_files[i].getElementsByClassName('files-item-name')[0].getElementsByTagName('span')[0].innerText);
			if(
				(
					files_search_input.value!=""
					&&
					html_element2_files[i]!=undefined
					&&
					html_element2_files[i].getElementsByClassName('files-item-name')[0].getElementsByTagName('span')[0].innerText.toLowerCase().split(files_search_input.value.toLowerCase()).length<2
				)

			){
				html_element2_files[i].remove();
				i--;
			}
		}
		SharecenterContentNewFileShareShowSelectFileWindowDeleteingListLock = false;

		CountTheSharecenterUserSelectedFilesCount(); // 统计已选择的文件 Sharecenter


		// 匹配剩下的文件ID 不要塞进去重复的ID
		let clone_files_items = clone.getElementsByClassName('files-item');

		for(
			let i2 = 0;
			i2 < clone_files_items.length;
			i2++
		){
			clone_files_items[i2].className = "files-item";
		}

		for(let i=0;i<html_element2_files.length;i++){

			let html_element2_files_item = html_element2_files[i];
			let html_element2_files_item_id = html_element2_files_item.getElementsByClassName('files-item-file-info-id')[0].innerText;

			for(
				let i2 = 0;
				i2 < clone_files_items.length;
				i2++
			){
				clone_files_items[i2].className = "files-item";
				let for_item = clone_files_items[i2];
				let for_item_id = for_item.getElementsByClassName('files-item-file-info-id')[0].innerText;

				if(
					for_item_id == html_element2_files_item_id
				){
					clone_files_items[i2].remove();
					i2--;
				}


			}


		}


		// console.log(clone_files_items.length);
		for(
			let i2 = 0;
			i2 < clone_files_items.length;
			i2++
		){
			let for_item = clone_files_items[i2];
			document.getElementsByClassName('sharecenter-content-new-sharefile-search-files-input-swal')[0].getElementsByClassName('files-items')[0].prepend(for_item);
		}



		/*
		// 匹配剩下的文件ID 不要塞进去重复的ID
		let clone_files_items = clone.getElementsByClassName('files-item');
		for(
			let i = 0;
			i < clone_files_items.length;
			i++
		){
			let for_item = clone_files_items[i];
			let for_item_id = for_item.getElementsByClassName('files-item-file-info-id')[0].innerText;


		}*/



	}



	setTimeout(function(){
		/*document.getElementsByClassName('swal-overlay--show-modal')[0].style.overflow = "hidden";
		setTimeout(function(){
			document.getElementsByClassName('swal-overlay--show-modal')[0].style.overflow = "";
		},306);*/
		try{
			// ((document.getElementsByClassName('swal-overlay--show-modal')[0].scrollTop+document.getElementsByClassName('swal-overlay--show-modal')[0].clientHeight)>document.getElementsByClassName('swal-overlay--show-modal')[0].scrollHeight-2)
			// -2 // -10
			if(((document.getElementsByClassName('swal-overlay--show-modal')[0].scrollTop+document.getElementsByClassName('swal-overlay--show-modal')[0].clientHeight)>document.getElementsByClassName('swal-overlay--show-modal')[0].scrollHeight-2)){
				// document.getElementsByClassName('swal-overlay--show-modal')[0].scrollTop=0;
				// 显示 搜索文件 页面 以后 默认他被定位到底部 这里可以跳到顶部 SHARECENTER PAGE
				// console.log('NO TO TOP 0');
			}
	    }catch(e){
			// pass
		};
		try{
	    	document.getElementsByClassName('swal-overlay--show-modal')[0].getElementsByClassName('swal-modal')[0].style.width = "100%";
	    	SWAL_Lock_of_Sharecenter_Status = true;
	    }catch(e){
			// pass
		};
		try{
	    	document.getElementsByClassName('swal-overlay--show-modal')[0].getElementsByClassName('swal-modal')[0].style.minHeight = "calc(100vh + 1px)";
	    	SWAL_Lock_of_Sharecenter_Status = true;
	    }catch(e){
			// pass
		};
	    try{
	    	document.getElementsByClassName('swal-overlay--show-modal')[0].getElementsByClassName('swal-modal')[0].style.margin = "0";
	    	SWAL_Lock_of_Sharecenter_Status = true;
	    }catch(e){
			// pass
		};
	    try{
	    	// document.getElementsByClassName('swal-overlay--show-modal')[0].getElementsByClassName('swal-modal')[0].getElementsByClassName('swal-button--confirm')[0].parentElement.remove();
	    	// 不要删除
	    	if(
	    		document.getElementsByClassName('swal-overlay--show-modal')[0].getElementsByClassName('swal-modal')[0].getElementsByClassName('swal-button--confirm')[0].parentElement.style.display==undefined
	    		||
	    		document.getElementsByClassName('swal-overlay--show-modal')[0].getElementsByClassName('swal-modal')[0].getElementsByClassName('swal-button--confirm')[0].parentElement.style.display==""
	    	){
	    		document.getElementsByClassName('swal-overlay--show-modal')[0].getElementsByClassName('swal-modal')[0].getElementsByClassName('swal-button--confirm')[0].parentElement.style.display = "none";
	    	}
		}catch(e){
			// pass
		};
	    /*document.getElementsByClassName('swal-overlay--show-modal')[0].onscrollend = function(){
	    	if(
	    		document.getElementsByClassName('swal-overlay--show-modal')[0].scrollTop!=0
	    	){
	    		// document.getElementsByClassName('swal-overlay--show-modal')[0].scrollTop=document.getElementsByClassName('swal-overlay--show-modal')[0].scrollHeight-1000;
	    		document.getElementsByClassName('swal-overlay--show-modal')[0].scrollTop=document.getElementsByClassName('swal-overlay--show-modal')[0].scrollHeight-document.getElementsByClassName('swal-overlay--show-modal')[0].clientHeight-1;
	    	}
		}*/
		if(document.getElementsByClassName('swal-overlay--show-modal')[0]!=undefined){

			document.getElementsByClassName('swal-overlay--show-modal')[0].onscroll = function(){
		        // console.log(1);
		    	if(
		    		document.getElementsByClassName('swal-overlay--show-modal')[0]!=undefined
		    		&&
		    		document.getElementsByClassName('swal-overlay--show-modal')[0].scrollTop!=undefined
		    		&&
		    		document.getElementsByClassName('swal-overlay--show-modal')[0].clientHeight!=undefined
		    		&&
		    		document.getElementsByClassName('swal-overlay--show-modal')[0].scrollHeight!=undefined
		    		&&
		    		document.getElementsByClassName('swal-overlay--show-modal')[0].scrollTop!=0
		            &&
		            ((document.getElementsByClassName('swal-overlay--show-modal')[0].scrollTop+document.getElementsByClassName('swal-overlay--show-modal')[0].clientHeight)==document.getElementsByClassName('swal-overlay--show-modal')[0].scrollHeight)
		    	){
		    		// scrollTop + clientHeight == scrollHeight
		    		// document.getElementsByClassName('swal-overlay--show-modal')[0].scrollTop=document.getElementsByClassName('swal-overlay--show-modal')[0].scrollHeight-1000;
		    		document.getElementsByClassName('swal-overlay--show-modal')[0].scrollTop=document.getElementsByClassName('swal-overlay--show-modal')[0].scrollHeight-document.getElementsByClassName('swal-overlay--show-modal')[0].clientHeight-1;
		    	}
			}

		}
	    
	},1);

	SharecenterContentNewFileShareShowSelectFileWindowLock = false;



}


// getElementTop(document.getElementsByClassName('sharecenter-content-item-comment-submit-element')[1])
// 元素距离屏幕顶部的距离
function getElementTop(element) {
  var rect = element.getBoundingClientRect();
  return rect.top;
}


function Auto_Load_More_Contents(){

	if(
		getElementTop(document.getElementsByClassName('sharecenter-content-items-load-more-items-mark')[0]) < window.innerHeight
	){

		if(
			window.location.href.indexOf('/#sharecenter')!=-1
		){
			if(
				Sharecenter_Contents_Loadover == true
			){
				setTimeout(Auto_Load_More_Contents,1000);
				return false;
			}else{
				GetSharecenterContents();
				setTimeout(Auto_Load_More_Contents,1500);
				return false;
			}
			return false;
			
		}else{
			setTimeout(Auto_Load_More_Contents,1000);
			return false;
		}

	}else{
		setTimeout(Auto_Load_More_Contents,1000);
		return false;
	}
}

setTimeout(Auto_Load_More_Contents,1000);

// 元素是否出现在窗口中
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}





// 根据QQ号返回头像地址
function get_github_or_qq_or_other_userinfo_profile(sharefile_user_id){

		// sharefile_user_id
		// ==
		// QQ



		// is QQ or Github


		// 如果有我的话，把我放前面

		let ResultJSON = {};
		ResultJSON["Type"] = "QQ";
		ResultJSON["PROFILEURL"] = "https://q1.qlogo.cn/g?b=qq&nk=" + sharefile_user_id + "&s=640";

		if(
			sharefile_user_id%1!=0
			&&
			parseInt(sharefile_user_id)==1
		){

			ResultJSON["Type"] = "GITHUB";

			// Github User

			let github_user_id_decimal_len = getDecimalPlaces(parseFloat(sharefile_user_id));
			let github_user_id = sharefile_user_id;
			for(
				let i3=0;
				i3<github_user_id_decimal_len-1;
				i3++
			){
				github_user_id = github_user_id * 10;
			}
			github_user_id = parseInt(github_user_id);
			sharefile_user_id = removeFirstDigit(github_user_id);

			ResultJSON["PROFILEURL"] = "https://avatars.githubusercontent.com/u/" + sharefile_user_id;

			ResultJSON["GITHUBID"] = sharefile_user_id;

		}

		ResultJSON["NEWID"] = sharefile_user_id;
		

		return ResultJSON;



}




// Sharecenter Content Delete
// 删除分享
function SharecenterContentDeleteByCommentElement(TheParentElement){

	swal({
		title: "WARNING",
		text: "MOVE TO THE TRASH CAN?",
		icon: "warning",
		buttons: ["NO","YES"],
		dangerMode: true,
		closeOnClickOutside: false,
	}).then((willDelete) => {

		if(
			willDelete == true
		){
			// delete




			/*swal({
				title: "暂不支持",
				text: "目前暂不支持删除操作。",
				icon: "error",
				// buttons: true,
				dangerMode: true,
				closeOnClickOutside: false,
			});*/


			if(
				TheParentElement.moveinglock == true
			){
				return false;
			}

			TheParentElement.moveinglock = true;


			
			doActionMove = 1;


			let xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4){
					TheParentElement.moveinglock = false;
				}
				if(xmlhttp.readyState==4 && xmlhttp.status==200){
					let ResultJSON = JSON.parse(xmlhttp.responseText);
					if(ResultJSON["status"]){


						TheParentElement.remove();


					}else{
						swal({
							title: "错误消息",
							text: ResultJSON["message"],
							icon: "error",
							// buttons: true,
							dangerMode: true,
							closeOnClickOutside: false,
						});
					}

				}
			}
			xmlhttp.open("POST",api_server_url+"/php/v4/sharecenter_content_move_to_trash_can_submit",true);
			xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			xmlhttp.withCredentials = true;
			xmlhttp.send("datetimeint="+TheParentElement.datetimeint+"&qq="+TheParentElement.qq+"&username=" + encodeURIComponent( TheParentElement.username ) + "&user_id=" + TheParentElement.user_id + "&content_id=" + TheParentElement.item_id + "&action=" + doActionMove + "&session_id=" + userinfo["session_id"] );









		}

	});

}










// QQ账号对应信息组
let UserinfoArrayOfUsername = {};
let UserinfoArrayOfUserID = {};
let UserinfoArrayOfQQ = {};

// 获取用户分享的文件内容
let Sharecenter_Contents_Page = 0;
let Sharecenter_Contents_Num = 20;
let Sharecenter_Contents_Loading = false;
let Sharecenter_Contents_Loadover = false;
function GetSharecenterContents(JustGetContentID){






	if(
		JustGetContentID != undefined
		&&
		!isNaN(JustGetContentID)
		&&
		JustGetContentID>0
	){

	}else{
		JustGetContentID = -1;
	}



	if(Sharecenter_Contents_Loading){
		if(
			JustGetContentID!=undefined
		){

		}else{
			return false;
		}
	}

	if(
		Sharecenter_Contents_Loadover
	){
		if(
			JustGetContentID!=undefined
		){

		}else{
			return false;
		}		
	}


	Sharecenter_Contents_Loading = true;
	let internal_Sharecenter_Contents_Page = encodeURIComponent( Sharecenter_Contents_Page );
	let internal_Sharecenter_Contents_Num = encodeURIComponent( Sharecenter_Contents_Num )
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4){
			setTimeout(function(){
				Sharecenter_Contents_Loading = false;	
			},2233);
		}
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			let ResultJSON = JSON.parse(xmlhttp.responseText);
			if(ResultJSON["status"]){

				if(
					ResultJSON["data"].length < Sharecenter_Contents_Num
				){
					Sharecenter_Contents_Loadover = true;
				}else{
					Sharecenter_Contents_Page = Sharecenter_Contents_Page + 1;
				}

				// console.log(ResultJSON);

				// 获得sharecenter内容


				for(
					let i=0;
					i<ResultJSON["userinfoarray"].length;
					i++
				){
					let UserinfoArrayItem = ResultJSON["userinfoarray"][i];
					UserinfoArrayOfQQ[UserinfoArrayItem["qq"]] = UserinfoArrayItem;
					UserinfoArrayOfUserID[UserinfoArrayItem["id"]] = UserinfoArrayItem;
					UserinfoArrayOfUsername[UserinfoArrayItem["username"]] = UserinfoArrayItem;
				}




				// ResultJSON["data"] = ResultJSON["data"].reverse();

				// 生成内容到页面中
				for(
					let i = 0;
					i < ResultJSON["data"].length;
					i++
				){

					let SharecenterContentDataItem = ResultJSON["data"][i];


					let div = document.createElement('div');
					div.className = "sharecenter-content-item";
					div.item_id = SharecenterContentDataItem["id"];  // Content ID
					div.user_id = SharecenterContentDataItem["userid"]; // Content User ID
					div.qq = SharecenterContentDataItem["qq"]; // Content User QQ
					div.username = SharecenterContentDataItem["username"]; // Content Username
					div.thetitle = SharecenterContentDataItem["title"]; // Content Title
					div.datetimeint = SharecenterContentDataItem["datetimeint"]; // Content Datetimeint
					div.countlikes = SharecenterContentDataItem["countlikes"]; // Content Likes Count
					div.countcomments = SharecenterContentDataItem["countcomments"]; // Content Comment Count
					div.content = SharecenterContentDataItem["content"]; // Content Content
					div.files = SharecenterContentDataItem["files"]; // Content Files
					div.datetime = SharecenterContentDataItem["datetime"]; // Content Datetimeint
					if(
						SharecenterContentDataItem["iamlikeit"] == true
					){
						div.iamlikeit = true;
					}else{
						div.iamlikeit = false;
					}

					// div.datetimeint < 0 = Police Warning


					// Default Demo HTML Element
					let sharecenter_content_item_locked_default_demo = document.getElementsByClassName('sharecenter-content-item-locked-default-demo')[0];
					let clone_html_element = sharecenter_content_item_locked_default_demo.cloneNode(true);
					div.innerHTML = clone_html_element.innerHTML;


					// 修改头像 修改用户头像
					// div.getElementsByClassName('sharecenter-content-item-userinfo-profile')[0].getElementsByTagName('img')[0].src = "https://q1.qlogo.cn/g?b=qq&nk=" + div.qq + "&s=640";


					let Content_Item_Github_info = get_github_or_qq_or_other_userinfo_profile( UserinfoArrayOfUserID[SharecenterContentDataItem["userid"]]["qq"] );
					div.getElementsByClassName('sharecenter-content-item-userinfo-profile')[0].getElementsByTagName('img')[0].src = Content_Item_Github_info["PROFILEURL"];





					// 修改用户名
					div.getElementsByClassName('sharecenter-content-item-userinfo-username')[0].getElementsByTagName('span')[0].innerText = div.username;
					div.getElementsByClassName('sharecenter-content-item-userinfo-username')[0].getElementsByTagName('i')[0].className = "fa fa-qq";

					if(
						Content_Item_Github_info["GITHUBID"] != undefined
					){

						div.getElementsByClassName('sharecenter-content-item-userinfo-username')[0].getElementsByTagName('span')[0].innerText = div.username.replace('Github.' + Content_Item_Github_info["GITHUBID"] + '.','');
						div.getElementsByClassName('sharecenter-content-item-userinfo-username')[0].getElementsByTagName('i')[0].className = "fa fa-github";
					}


					// 修改标题
					div.getElementsByClassName('sharecenter-content-item-content-title')[0].getElementsByTagName('storage')[0].innerText = div.thetitle;

					div.getElementsByClassName('sharecenter-content-item-content')[0].getElementsByTagName('div')[0].innerHTML = div.content;
					div.getElementsByClassName('sharecenter-content-item-content')[0].getElementsByTagName('span')[0].innerText = div.datetime;



					// 创建文件
					for(
						let i2 = 0;
						i2 < SharecenterContentDataItem["files"].length;
						i2++
					){
						// SharecenterContentDataItem["files"][i2]

						let aaaaa = div.getElementsByClassName('sharecenter-content-item-files')[0];
						let bbbbb = {
							"date": SharecenterContentDataItem["files"][i2]["createdatetime"],
							"date_int": SharecenterContentDataItem["files"][i2]["createdatetimeint"],
							"hash": "123",
							"id":  SharecenterContentDataItem["files"][i2]["id"],
							"mirror": false,
							"name":  SharecenterContentDataItem["files"][i2]["name"],
							"parent": "0",
							"share": SharecenterContentDataItem["files"][i2]["share"],
							"size": SharecenterContentDataItem["files"][i2]["size"],
							"url": SharecenterContentDataItem["files"][i2]["url"],
							"ftp": SharecenterContentDataItem["files"][i2]["ftp"],
						}
						let ccccc = createFileItem(bbbbb);
						ccccc.className = "files-item files-item-hide";
						ccccc.name_element = ccccc.getElementsByClassName('files-item-name')[0].getElementsByTagName('span')[0];
						ccccc.name_element.onclick = function(){
							// alert("预览功能暂时关闭。");
							window.location.href = bbbbb["share"];
							window.open( bbbbb["ftp"]);
						}
						ccccc.menu_delete_element.remove();
						ccccc.menu_rename_element.remove();
						aaaaa.append(ccccc);


						function ShowSharecenterContentFile(THIS){



							if( isInViewport(THIS) || THIS.ShowWaitTime>20 ){
								THIS.className = "files-item";
							}else{
								THIS.ShowWaitTime = THIS.ShowWaitTime + 1;
								setTimeout(ShowSharecenterContentFile,THIS.ShowWaitTime*200,THIS);
							}

						}

						ccccc.ShowWaitTime = 0;
						setTimeout(ShowSharecenterContentFile,i2*200,ccccc);
						



					}


					


					let THISContentLikesMyInHere = false;
					if(SharecenterContentDataItem["iamlikeit"] == true){
						// 哪些人点赞了？
						for(
							let i2 = 0;
							i2 < SharecenterContentDataItem["likes"].length;
							i2++
						){
							if(
								userinfo!=undefined
								&&
								userinfo["id"]!=undefined
								&&
								SharecenterContentDataItem["likes"][i2].userid == userinfo["id"]
							){
								
								let internal_item = SharecenterContentDataItem["likes"].splice( i2 , 1)[0];
								SharecenterContentDataItem["likes"].unshift(internal_item);
								THISContentLikesMyInHere = true;
								break;
							}
						}
					}





					// 哪些人点赞了？
					for(
						let i2 = 0;
						i2 < SharecenterContentDataItem["likes"].length;
						i2++
					){
						// SharecenterContentDataItem["likes"][i2]

						


						let sharefile_user_id = UserinfoArrayOfUserID[SharecenterContentDataItem["likes"][i2]["userid"]]["qq"]; // QQ or Github or Others


						// is QQ or Github


						// 如果有我的话，把我放前面





						if(
							UserinfoArrayOfUserID[SharecenterContentDataItem["likes"][i2]["userid"]]["qq"]%1!=0
							&&
							parseInt(UserinfoArrayOfUserID[SharecenterContentDataItem["likes"][i2]["userid"]]["qq"])==1
						){


							// Github User
							


							let github_user_id_decimal_len = getDecimalPlaces(parseFloat(sharefile_user_id));
							let github_user_id = sharefile_user_id;
							for(
								let i3=0;
								i3<github_user_id_decimal_len-1;
								i3++
							){
								github_user_id = github_user_id * 10;
							}
							github_user_id = parseInt(github_user_id);
							sharefile_user_id = removeFirstDigit(github_user_id);

						}




						let clone_sharecenter_content_item_likes_userinfo_profile_item = div.getElementsByClassName('sharecenter-content-item-likes-userinfo-profile-locked-default-demo')[0].cloneNode(true);

						clone_sharecenter_content_item_likes_userinfo_profile_item.className = "sharecenter-content-item-likes-userinfo-profile sharecenter-content-item-likes-userinfo-profile-hide";

						clone_sharecenter_content_item_likes_userinfo_profile_item.qq = UserinfoArrayOfUserID[SharecenterContentDataItem["likes"][i2]["userid"]]["qq"];
						clone_sharecenter_content_item_likes_userinfo_profile_item.user_id = SharecenterContentDataItem["likes"][i2]["userid"];

						clone_sharecenter_content_item_likes_userinfo_profile_item.getElementsByClassName('sharecenter-content-item-likes-userinfo-profile-img')[0].src = "https://q1.qlogo.cn/g?b=qq&nk=" + sharefile_user_id + "&s=640";

						setTimeout(function(){
							clone_sharecenter_content_item_likes_userinfo_profile_item.className = "sharecenter-content-item-likes-userinfo-profile";
						},100*i2,clone_sharecenter_content_item_likes_userinfo_profile_item);


						if(
							UserinfoArrayOfUserID[SharecenterContentDataItem["likes"][i2]["userid"]]["qq"]%1!=0
							&&
							parseInt(UserinfoArrayOfUserID[SharecenterContentDataItem["likes"][i2]["userid"]]["qq"])==1
						){
							// Github User
							clone_sharecenter_content_item_likes_userinfo_profile_item.getElementsByClassName('sharecenter-content-item-likes-userinfo-profile-img')[0].src = "https://avatars.githubusercontent.com/u/" + sharefile_user_id ;
						}




						// console.log(clone_sharecenter_content_item_likes_userinfo_profile_item);

						div.getElementsByClassName('sharecenter-content-item-likes')[0].append(clone_sharecenter_content_item_likes_userinfo_profile_item);

						// console.log(div.getElementsByClassName('sharecenter-content-item-likes')[0]);

					}


					// 更新点赞数
					div.getElementsByClassName('sharecenter-content-item-likes-count')[0].innerText = SharecenterContentDataItem["countlikes"];


					// 我是否已经点赞
					if(SharecenterContentDataItem["iamlikeit"]){
						div.getElementsByClassName('sharecenter-content-item-likes-like-button-submit')[0].className = "sharecenter-content-item-likes-like-button-submit sharecenter-content-item-likes-like-button-submit-success";
						div.getElementsByClassName('sharecenter-content-item-likes-like-button-submit')[0].iamlikeit = true;
					}else{
						div.getElementsByClassName('sharecenter-content-item-likes-like-button-submit')[0].className = "sharecenter-content-item-likes-like-button-submit";
						div.getElementsByClassName('sharecenter-content-item-likes-like-button-submit')[0].iamlikeit = false;
					}


					// 点赞和取消点赞


					div.iamlikeitlock = false;
					div.getElementsByClassName('sharecenter-content-item-likes-like-button-submit')[0].TheParentElement = div;
					div.getElementsByClassName('sharecenter-content-item-likes-like-button-submit')[0].onclick = function(){

						if(
							div.iamlikeitlock == true
						){
							return false;
						}

						div.iamlikeitlock = true;


						let TheParentElement = this.TheParentElement;
						let doActionLike = true;
						if(
							TheParentElement.iamlikeit == false
						){
							doActionLike = 1;
						}else{
							doActionLike = 0;
						}


						let xmlhttp = new XMLHttpRequest();
						xmlhttp.onreadystatechange=function(){
							if(xmlhttp.readyState==4){
								div.iamlikeitlock = false;
							}
							if(xmlhttp.readyState==4 && xmlhttp.status==200){
								let ResultJSON = JSON.parse(xmlhttp.responseText);
								if(ResultJSON["status"]){

									if( // mysql server tell me need to like it
										ResultJSON["iamlikeit"] == true
									){
										TheParentElement.getElementsByClassName('sharecenter-content-item-likes-like-button-submit')[0].className = "sharecenter-content-item-likes-like-button-submit sharecenter-content-item-likes-like-button-submit-success";
										TheParentElement.getElementsByClassName('sharecenter-content-item-likes-like-button-submit')[0].iamlikeit = true;
										TheParentElement.getElementsByClassName('sharecenter-content-item-likes-count')[0].innerText = parseInt(TheParentElement.getElementsByClassName('sharecenter-content-item-likes-count')[0].innerText)+1;
										TheParentElement.iamlikeit = true;
										// 如果我的头像不在这里，我要加入！





									}else{
										TheParentElement.getElementsByClassName('sharecenter-content-item-likes-like-button-submit')[0].className = "sharecenter-content-item-likes-like-button-submit";
										TheParentElement.getElementsByClassName('sharecenter-content-item-likes-like-button-submit')[0].iamlikeit = false;
										TheParentElement.getElementsByClassName('sharecenter-content-item-likes-count')[0].innerText = parseInt(TheParentElement.getElementsByClassName('sharecenter-content-item-likes-count')[0].innerText)-1;
										TheParentElement.iamlikeit = false;
									}

									let sharecenter_content_item_likes_items = TheParentElement.getElementsByClassName('sharecenter-content-item-likes')[0].getElementsByClassName('sharecenter-content-item-likes-userinfo-profile');
									let my_profile_in_the_list = false;
									for(
										let i = 0;
										i < sharecenter_content_item_likes_items.length;
										i++
									){

										if(
											sharecenter_content_item_likes_items[i].user_id == userinfo["id"]
										){
											my_profile_in_the_list = true;
											if(
												TheParentElement.iamlikeit == false
											){
												sharecenter_content_item_likes_items[i].remove();
												// pass
												break;
											}
										}

									}
									if(
										my_profile_in_the_list == false
										&&
										TheParentElement.iamlikeit == true
									){

										let internal_json = get_github_or_qq_or_other_userinfo_profile(userinfo["qqdecimal"]);
										// console.log(internal_json);

										let clone_html_element = TheParentElement.getElementsByClassName('sharecenter-content-item-likes')[0].getElementsByClassName('sharecenter-content-item-likes-userinfo-profile sharecenter-content-item-likes-userinfo-profile-locked-default-demo')[0].cloneNode(true);
										clone_html_element.className = "sharecenter-content-item-likes-userinfo-profile sharecenter-content-item-likes-userinfo-profile-hide";
										clone_html_element.getElementsByClassName('sharecenter-content-item-likes-userinfo-profile-img')[0].src = internal_json["PROFILEURL"];
										clone_html_element.user_id = userinfo["id"];
										clone_html_element.qq = userinfo["qqdecimal"];
										TheParentElement.getElementsByClassName('sharecenter-content-item-likes')[0].append(clone_html_element);
										setTimeout(function(){
											clone_html_element.className = "sharecenter-content-item-likes-userinfo-profile";
										},10);



									}



								}else{
									swal({
										title: "错误消息",
										text: ResultJSON["message"],
										icon: "error",
										// buttons: true,
										dangerMode: true,
										closeOnClickOutside: false,
									});
								}

							}
						}
						xmlhttp.open("POST",api_server_url+"/php/v4/sharecenter_content_like_unlike_submit",true);
						xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
						xmlhttp.withCredentials = true;
						xmlhttp.send("datetimeint="+TheParentElement.datetimeint+"&qq="+TheParentElement.qq+"&username=" + encodeURIComponent( TheParentElement.username ) + "&user_id=" + TheParentElement.user_id + "&content_id=" + TheParentElement.item_id + "&action=" + doActionLike + "&session_id=" + userinfo["session_id"] );



					}

					div.warninglock = false;
					div.getElementsByClassName('sharecenter-content-item-likes-warning-button-submit')[0].TheParentElement = div;
					div.getElementsByClassName('sharecenter-content-item-likes-warning-button-submit')[0].onclick = function(){


						let TheParentElement = this.TheParentElement;


						swal({
							title: "确认举报",
							text: "是否提交举报？",
							icon: "warning",
							buttons: ["返回","举报"],
							dangerMode: true,
							closeOnClickOutside: false,
						}).then((willDelete) => {

							if(
								willDelete == true
							){
								// delete



								if(
									TheParentElement.warninglock == true
								){
									return false;
								}

								TheParentElement.warninglock = true;


								
								let doActionLike = 1;



								let xmlhttp = new XMLHttpRequest();
								xmlhttp.onreadystatechange=function(){
									if(xmlhttp.readyState==4){
										TheParentElement.warninglock = false;
									}
									if(xmlhttp.readyState==4 && xmlhttp.status==200){
										let ResultJSON = JSON.parse(xmlhttp.responseText);
										if(ResultJSON["status"]){


											swal({
												title: "提交成功",
												text: ResultJSON["message"],
												icon: "success",
												// buttons: true,
												// dangerMode: true,
												closeOnClickOutside: false,
											});



										}else{

											swal({
												title: "错误消息",
												text: ResultJSON["message"],
												icon: "error",
												// buttons: true,
												dangerMode: true,
												closeOnClickOutside: false,
											});

										}

									}
								}
								xmlhttp.open("POST",api_server_url+"/php/v4/sharecenter_content_warning_submit",true);
								xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
								xmlhttp.withCredentials = true;
								xmlhttp.send("datetimeint="+TheParentElement.datetimeint+"&qq="+TheParentElement.qq+"&username=" + encodeURIComponent( TheParentElement.username ) + "&user_id=" + TheParentElement.user_id + "&content_id=" + TheParentElement.item_id + "&action=" + doActionLike + "&session_id=" + userinfo["session_id"] );





							}

						});




					}



					// 这个内容是我发布的吗？
					if(
						SharecenterContentDataItem["userid"] == userinfo["id"]
						&&
						(
							UserinfoArrayOfUserID[SharecenterContentDataItem["userid"]]["username"] == userinfo["username"]
							||
							userinfo["username"].indexOf(UserinfoArrayOfUserID[SharecenterContentDataItem["userid"]]["username"])!=-1
						)
						&&
						(
							UserinfoArrayOfUserID[SharecenterContentDataItem["userid"]]["qq"] == userinfo["qqdecimal"]
							||
							UserinfoArrayOfUserID[SharecenterContentDataItem["userid"]]["qq"] == userinfo["qq"]
						)
					){



						// 隐藏举报按钮
						div.getElementsByClassName('sharecenter-content-item-likes-warning-button-submit')[0].className = "sharecenter-content-item-likes-warning-button-submit sharecenter-content-item-likes-warning-button-submit-hide";





						// 是自己发布的
						div.moveinglock = false;
						div.getElementsByClassName('sharecenter-content-item-likes-delete-button-submit')[0].TheParentElement = div;
						div.getElementsByClassName('sharecenter-content-item-likes-delete-button-submit')[0].onclick = function(){


							let TheParentElement = this.TheParentElement;

							SharecenterContentDeleteByCommentElement(TheParentElement);

























						}


					}else{

						div.getElementsByClassName('sharecenter-content-item-likes-delete-button-submit')[0].className = "sharecenter-content-item-likes-delete-button-submit sharecenter-content-item-likes-delete-button-submit-hide";

						


					}


					div.getElementsByClassName('sharecenter-content-item-comment-submit-element-input')[0].readOnly = false;







					// 提交评论
					div.getElementsByClassName('sharecenter-content-item-comment-submit-element-button')[0].onclick = function(){

						let SubmitCommentToContentValue = this.parentElement.getElementsByClassName('sharecenter-content-item-comment-submit-element-input')[0].value;

						// console.log(SubmitCommentToContentValue);
						// 获取评论内容


						if(
							SubmitCommentToContentValue == ""
							||
							SubmitCommentToContentValue == null
							||
							SubmitCommentToContentValue == undefined
						){

							swal({
								title: "评论内容？",
								text: "填写评论",
								icon: "warning",
								// buttons: true,
								dangerMode: true,
								button: "了解",
								closeOnClickOutside: false,
							}).then((willDelete) => {
								// 
							});


							return false;

						}



						/*
						let div = document.createElement('div');
						div.className = "sharecenter-content-item";
						div.item_id = SharecenterContentDataItem["id"];  // Content ID
						div.user_id = SharecenterContentDataItem["userid"]; // Content User ID
						div.qq = SharecenterContentDataItem["qq"]; // Content User QQ
						div.username = SharecenterContentDataItem["username"]; // Content Username
						div.thetitle = SharecenterContentDataItem["title"]; // Content Title
						div.datetimeint = SharecenterContentDataItem["datetimeint"]; // Content Datetimeint
						div.countlikes = SharecenterContentDataItem["countlikes"]; // Content Likes Count
						div.countcomments = SharecenterContentDataItem["countcomments"]; // Content Comment Count
						div.content = SharecenterContentDataItem["content"]; // Content Content
						div.files = SharecenterContentDataItem["files"]; // Content Files
						*/




						// 准备信息
						// 评论 ID （要回复的评论的 id）
						let NewReplyCommentID = this.parentElement.parentElement.NewReplyCommentID;


						let DataJSON = {
							"content_id":this.parentElement.parentElement.item_id,
							"content_user_id":this.parentElement.parentElement.user_id,
							"content_user_qq":this.parentElement.parentElement.qq,
							"content_username":this.parentElement.parentElement.username,
							"content_datetimeint":this.parentElement.parentElement.datetimeint,
							"reply_content_comment_id":this.parentElement.parentElement.NewReplyCommentID
						}

						

						if(
							DataJSON["reply_content_comment_id"]!=undefined
						){




							/*
							/ *
							Sharecenter_Content_Comment_Item.item_id = SharecenterContentDataItem["comments"][i2]["id"]; // 评论的id
							Sharecenter_Content_Comment_Item.userid = SharecenterContentDataItem["comments"][i2]["userid"]; // 评论的用户的ID
							Sharecenter_Content_Comment_Item.content_id = SharecenterContentDataItem["id"]; // 评论所属上级Content的id
							Sharecenter_Content_Comment_Item.content_username = SharecenterContentDataItem["username"]; // 评论所属上级Content的用户名
							Sharecenter_Content_Comment_Item.content_userid = SharecenterContentDataItem["userid"];
							Sharecenter_Content_Comment_Item.content_qq = SharecenterContentDataItem["qq"];
							Sharecenter_Content_Comment_Item.content_datetimeint = SharecenterContentDataItem["datetimeint"];
							* /

							// 提交评论需要用到的参数
							this.parentElement.parentElement.parentElement.NewReplyCommentID = this.parentElement.item_id; // 评论的id
							this.parentElement.parentElement.parentElement.NewReplyCommentIDUserID = this.parentElement.userid; // 评论的用户的ID
							this.parentElement.parentElement.parentElement.NewReplyCommentIDContentID = this.parentElement.content_id; // 评论所属上级Content的id
							this.parentElement.parentElement.parentElement.NewReplyCommentIDContentUsername = this.parentElement.content_username; // 评论所属上级Content的用户名
							this.parentElement.parentElement.parentElement.NewReplyCommentIDContentUserID = this.parentElement.content_userid; // 评论所属上级Content的用户id
							this.parentElement.parentElement.parentElement.NewReplyCommentIDContentUserQQ = this.parentElement.content_qq; // 评论所属上级Content的用户id
							this.parentElement.parentElement.parentElement.NewReplyCommentIDContentCreateDatetimeInte = this.parentElement.content_datetimeint; // 评论所属上级Content的创建时间

							*/


							// 评论所属上级 Content 的 Create Date Time
							let NewReplyCommentIDContentCreateDatetimeInte = this.parentElement.parentElement.NewReplyCommentIDContentCreateDatetimeInte;
							// console.log(NewReplyCommentIDContentCreateDatetimeInte);
							// DataJSON["content_datetimeint"]


							// 评论所属上级 Content 的 用户 QQ
							let NewReplyCommentIDContentUserQQ = this.parentElement.parentElement.NewReplyCommentIDContentUserQQ;
							// console.log(NewReplyCommentIDContentUserQQ);
							// DataJSON["content_user_qq"]

							// 评论所属上级 Content 的 用户 ID
							let NewReplyCommentIDContentUserID = this.parentElement.parentElement.NewReplyCommentIDContentUserID;
							// console.log(NewReplyCommentIDContentUserID);
							// DataJSON["content_user_id"]

							// 评论所属上级 Content 的 用户 Username
							let NewReplyCommentIDContentUsername = this.parentElement.parentElement.NewReplyCommentIDContentUsername;
							// console.log(NewReplyCommentIDContentUsername);
							// DataJSON["content_username"]




							// 发布该评论的用户的 ID
							let NewReplyCommentIDUserId;
							if(
								this.parentElement.parentElement.NewReplyCommentIDMoreInfoJSON!=undefined
								&&
								this.parentElement.parentElement.NewReplyCommentIDMoreInfoJSON["userid"]!=undefined
							){
								NewReplyCommentIDUserId = this.parentElement.parentElement.NewReplyCommentIDMoreInfoJSON["userid"]; // 评论 ID 的用户的 ID
							}



							// 评论所属上级 Content 的 ID
							let NewReplyCommentIDContentID
							if(
								this.parentElement.parentElement.NewReplyCommentIDMoreInfoJSON!=undefined
								&&
								this.parentElement.parentElement.NewReplyCommentIDMoreInfoJSON["content_id"]!=undefined
							){
								NewReplyCommentIDContentID = this.parentElement.parentElement.NewReplyCommentIDMoreInfoJSON["content_id"]; // 评论所属上级 Content 的 ID
							}else{
								NewReplyCommentIDContentID = this.parentElement.parentElement.NewReplyCommentIDContentID;
							}

							
							// 评论的时间
							let NewReplyCommentIDCreateDatetimeInt
							if(
								this.parentElement.parentElement.NewReplyCommentIDMoreInfoJSON!=undefined
								&&
								this.parentElement.parentElement.NewReplyCommentIDMoreInfoJSON["createdatetimeint"]!=undefined
							){
								NewReplyCommentIDCreateDatetimeInt = this.parentElement.parentElement.NewReplyCommentIDMoreInfoJSON["createdatetimeint"]; // 评论的时间
							}
							




							// DataJSON["new_comment_content"] = SubmitCommentToContentValue;
							// console.log(SubmitCommentToContentValue);

							// console.log(NewReplyCommentID);
							// DataJSON["reply_content_comment_id"]

							// console.log(NewReplyCommentIDUserId);
							DataJSON["new_reply_comment_id_user_id"] = NewReplyCommentIDUserId;

							// DataJSON["content_id"]
							//console.log(NewReplyCommentIDContentID);

							DataJSON["new_reply_comment_id_create_datetimeint"] = NewReplyCommentIDCreateDatetimeInt;
							// console.log(NewReplyCommentIDCreateDatetimeInt);








						}

						DataJSON["new_comment_content"] = SubmitCommentToContentValue;
						DataJSON["content_datetimeint"] = window.encodeURIComponent(DataJSON["content_datetimeint"]);
						DataJSON["content_id"] = window.encodeURIComponent(DataJSON["content_id"]);
						DataJSON["content_user_id"] = window.encodeURIComponent(DataJSON["content_user_id"]);
						DataJSON["content_user_qq"] = window.encodeURIComponent(DataJSON["content_user_qq"]);
						DataJSON["content_username"] = window.encodeURIComponent(DataJSON["content_username"]);
						DataJSON["new_comment_content"] = window.encodeURIComponent(DataJSON["new_comment_content"]);
						DataJSON["new_reply_comment_id_create_datetimeint"] = window.encodeURIComponent(DataJSON["new_reply_comment_id_create_datetimeint"]);
						DataJSON["new_reply_comment_id_user_id"] = window.encodeURIComponent(DataJSON["new_reply_comment_id_user_id"]);
						DataJSON["reply_content_comment_id"] = window.encodeURIComponent(DataJSON["reply_content_comment_id"]);


						// content_datetimeint=&content_id=&content_user_id=&content_user_qq=&content_username=&new_comment_content=&new_reply_comment_id_create_datetimeint=&new_reply_comment_id_user_id=&reply_content_comment_id





						let xmlhttp = new XMLHttpRequest();
						xmlhttp.onreadystatechange=function(){
							if(xmlhttp.readyState==4 && xmlhttp.status==200){
								let ResultJSON = JSON.parse(xmlhttp.responseText);
								if(ResultJSON["status"]){


									

									let new_comment_element = document.getElementsByClassName('sharecenter-content-item-locked-default-demo')[0].getElementsByClassName('sharecenter-content-item-comments')[0].getElementsByClassName('sharecenter-content-item-comment-locked-default-demo sharecenter-content-item-comment-myself')[0].cloneNode(true);
									new_comment_element.className = new_comment_element.className.replace(/  /g,'');
									new_comment_element.className = new_comment_element.className.replace(/sharecenter-content-item-comment-locked-default-demo/g,'sharecenter-content-item-comment-hide');

									new_comment_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text')[0].getElementsByTagName('span')[0].innerText = decodeURIComponent(DataJSON["new_comment_content"]);

									new_comment_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('span')[0].innerText = userinfo["username"];

									let get_userinfo_qq_or_github_or_others = get_github_or_qq_or_other_userinfo_profile( userinfo["qqdecimal"] );



									new_comment_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('span')[0].innerText = new_comment_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('span')[0].innerText.replace('Github.'+get_userinfo_qq_or_github_or_others["GITHUBID"]+'.','');

									new_comment_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-profile')[0].getElementsByTagName('img')[0].src =  get_userinfo_qq_or_github_or_others["PROFILEURL"] ;



									new_comment_element.item_id = ResultJSON["new_comment_id"];
									new_comment_element.content_datetimeint = ResultJSON["create_datetimeint"];
									new_comment_element.content_datetime = ResultJSON["create_datetime"];
									new_comment_element.createdatetime = ResultJSON["create_datetime"];
									new_comment_element.createdatetimeint = ResultJSON["create_datetimeint"];
									new_comment_element.userid = userinfo["id"];
									new_comment_element.content_id = DataJSON["content_id"];
									new_comment_element.content_username = userinfo["username"];
									new_comment_element.content_userid = DataJSON["content_user_id"];
									new_comment_element.content_qq = DataJSON["content_user_qq"];
									// new_comment_element.content_datetimeint = DataJSON["new_reply_comment_id_create_datetimeint"];

									/*
									this.parentElement.parentElement.parentElement.NewReplyCommentID = this.parentElement.item_id; // 评论的id
									this.parentElement.parentElement.parentElement.NewReplyCommentIDUserID = this.parentElement.userid; // 评论的用户的ID
									this.parentElement.parentElement.parentElement.NewReplyCommentIDContentID = this.parentElement.content_id; // 评论所属上级Content的id
									this.parentElement.parentElement.parentElement.NewReplyCommentIDContentUsername = this.parentElement.content_username; // 评论所属上级Content的用户名
									this.parentElement.parentElement.parentElement.NewReplyCommentIDContentUserID = this.parentElement.content_userid; // 评论所属上级Content的用户id
									this.parentElement.parentElement.parentElement.NewReplyCommentIDContentUserQQ = this.parentElement.content_qq; // 评论所属上级Content的用户id
									this.parentElement.parentElement.parentElement.NewReplyCommentIDContentCreateDatetimeInte = this.parentElement.content_datetimeint; // 评论所属上级Content的创建时间
									*/







									// let sharefile_user_id = DataJSON["content_user_qq"]; // QQ or Github or Others
									let sharefile_user_id = userinfo["qqdecimal"];
			
									if(
										//DataJSON["content_user_qq"]%1!=0
										
										sharefile_user_id%1!=0
										&&
										//parseInt(DataJSON["content_user_qq"])==1
										parseInt(sharefile_user_id)==1
									){
										// Github User

										let github_user_id_decimal_len = getDecimalPlaces(parseFloat(sharefile_user_id));
										let github_user_id = sharefile_user_id;
										for(
											let i=0;
											i<github_user_id_decimal_len-1;
											i++
										){
											github_user_id = github_user_id * 10;
										}
										github_user_id = parseInt(github_user_id);
										sharefile_user_id = removeFirstDigit(github_user_id);

										new_comment_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('span')[0].innerText = new_comment_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('span')[0].innerText.replace('Github.'+get_userinfo_qq_or_github_or_others["GITHUBID"]+'.','');

										new_comment_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-profile')[0].getElementsByTagName('img')[0].src = "https://avatars.githubusercontent.com/u/" + sharefile_user_id;

									}



									let THISCommentIsReply = false;
									if(
										DataJSON["reply_content_comment_id"] != undefined
										&&
										DataJSON["reply_content_comment_id"] != "undefined"
										&&
										DataJSON["new_reply_comment_id_create_datetimeint"] != undefined
										&&
										DataJSON["new_reply_comment_id_create_datetimeint"] != "undefined"
										&&
										DataJSON["new_reply_comment_id_user_id"] != undefined
										&&
										DataJSON["new_reply_comment_id_user_id"] != "undefined"
									){
										// reply

										//console.log(DataJSON["reply_content_comment_id"]);

										//console.log('回复他人');

										THISCommentIsReply = true;

									}else{

										// no reply

										//console.log('不回复任何');

										new_comment_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text-reply')[0].className = "sharecenter-content-item-comment-userinfo-comment-text-reply sharecenter-content-item-comment-userinfo-comment-text-reply-hide";



									}

									let THISContentContentsItems =  document.getElementsByClassName('sharecenter-content-items')[0].getElementsByClassName('sharecenter-content-item');
									// console.log(THISContentContentsItems);
									for(
										let i=0;
										i<THISContentContentsItems.length;
										i++
									){


										if(
											THISContentContentsItems[i].item_id == DataJSON["content_id"]
										){

											THISContentContentsItems[i].getElementsByClassName('sharecenter-content-item-comment-submit-element-input')[0].value = "";
											THISContentContentsItems[i].getElementsByClassName('sharecenter-content-item-comment-submit-element')[0].getElementsByTagName('i')[0].click();
											

											if(THISCommentIsReply == true){
												let THISContentContentsItemsCommentsItems = THISContentContentsItems[i].getElementsByClassName('sharecenter-content-item-comments')[0].getElementsByClassName('sharecenter-content-item-comment');
												for(
													let i2 = 0;
													i2 < THISContentContentsItemsCommentsItems.length && THISCommentIsReply == true;
													i2++
												){
													// console.log(THISContentContentsItemsCommentsItems[i2].item_id);

													if(
														
														THISContentContentsItemsCommentsItems[i2].item_id == DataJSON["reply_content_comment_id"]
														&&
														THISCommentIsReply == true
														
														
													){
														if(
															userinfo["id"]!=undefined
															&&
															THISContentContentsItemsCommentsItems[i2].userid == userinfo["id"]
														){
															new_comment_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text-reply')[0].innerText = THISContentContentsItemsCommentsItems[i2].getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text')[0].innerText;
														}else{
															new_comment_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text-reply')[0].innerText = THISContentContentsItemsCommentsItems[i2].getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('span')[0].innerText + " : " + THISContentContentsItemsCommentsItems[i2].getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text')[0].innerText;
														}
														THISCommentIsReply = false;
														break;
													}

												}
											}




											setTimeout(function(THIS){

												THIS.className = THIS.className.replace(/  /g,'');
												THIS.className = THIS.className.replace(/sharecenter-content-item-comment-hide/g,'sharecenter-content-item-comment');

											},100,new_comment_element);

											THISContentContentsItems[i].getElementsByClassName('sharecenter-content-item-comments')[0].append(new_comment_element);
											break;
										}

									}
									
									// 给消息气泡上点击事件
									setTimeout(SetSharecenterContentsCommentsMessageSetClickFunctions,100);



								}else{

									swal({
										title: "错误消息",
										text: ResultJSON["message"],
										icon: "error",
										// buttons: true,
										dangerMode: true,
										closeOnClickOutside: false,
									});

								}

							}
						}
						xmlhttp.open("POST",api_server_url+"/php/v4/sharecenter_contents_submit_new_comment",true);
						xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
						xmlhttp.withCredentials = true;

						xmlhttp.send("content_datetimeint=" + DataJSON["content_datetimeint"] + "&content_id=" + DataJSON["content_id"] + "&content_user_id=" + DataJSON["content_user_id"] + "&content_user_qq="+DataJSON["content_user_qq"]+"&content_username="+DataJSON["content_username"]+"&new_comment_content="+DataJSON["new_comment_content"]+"&new_reply_comment_id_create_datetimeint="+DataJSON["new_reply_comment_id_create_datetimeint"]+"&new_reply_comment_id_user_id="+DataJSON["new_reply_comment_id_user_id"]+"&reply_content_comment_id="+DataJSON["reply_content_comment_id"]+"&session_id=" + userinfo["session_id"] );















					}





















					// 更新评论
					// 哪些人评论了？
					for(
						let i2 = 0;
						i2 < SharecenterContentDataItem["comments"].length;
						i2++
					){
						// SharecenterContentDataItem["comments"][i2]

						let Sharecenter_Content_Comment_Item;


						let sharefile_user_id = UserinfoArrayOfUserID[SharecenterContentDataItem["comments"][i2]["userid"]]["qq"]; // QQ or Github or Others



						let get_userinfo_qq_or_github_or_others = get_github_or_qq_or_other_userinfo_profile(sharefile_user_id);





						if(
							UserinfoArrayOfUserID[SharecenterContentDataItem["comments"][i2]["userid"]]["qq"]%1!=0
							&&
							parseInt(UserinfoArrayOfUserID[SharecenterContentDataItem["comments"][i2]["userid"]]["qq"])==1
						){


							// Github User
							

							let github_user_id_decimal_len = getDecimalPlaces(parseFloat(sharefile_user_id));
							let github_user_id = sharefile_user_id;
							for(
								let i3=0;
								i3<github_user_id_decimal_len-1;
								i3++
							){
								github_user_id = github_user_id * 10;
							}
							github_user_id = parseInt(github_user_id);
							sharefile_user_id = removeFirstDigit(github_user_id);

						
						}




						// 是自己评论的还是别人评论的？
						if(
							userinfo != undefined
							&&
							userinfo["id"] != undefined
							&&
							userinfo["id"] == SharecenterContentDataItem["comments"][i2]["userid"]
						){
							// my comment

							Sharecenter_Content_Comment_Item = div.getElementsByClassName('sharecenter-content-item-comment-locked-default-demo sharecenter-content-item-comment-myself')[0].cloneNode(true);

							Sharecenter_Content_Comment_Item.className = "sharecenter-content-item-comment sharecenter-content-item-comment-hide sharecenter-content-item-comment-myself";

						}else{

							// other he/she comment, is not my comment

							Sharecenter_Content_Comment_Item = div.getElementsByClassName('sharecenter-content-item-comment-locked-default-demo sharecenter-content-item-comment-reply')[0].cloneNode(true);

							Sharecenter_Content_Comment_Item.className = "sharecenter-content-item-comment sharecenter-content-item-comment-hide sharecenter-content-item-comment-reply";

						}

						Sharecenter_Content_Comment_Item.item_id = SharecenterContentDataItem["comments"][i2]["id"];
						Sharecenter_Content_Comment_Item.userid = SharecenterContentDataItem["comments"][i2]["userid"];
						Sharecenter_Content_Comment_Item.content_id = SharecenterContentDataItem["id"];
						Sharecenter_Content_Comment_Item.content_username = SharecenterContentDataItem["username"];
						Sharecenter_Content_Comment_Item.content_userid = SharecenterContentDataItem["userid"];
						Sharecenter_Content_Comment_Item.content_qq = SharecenterContentDataItem["qq"];
						Sharecenter_Content_Comment_Item.content_datetimeint = SharecenterContentDataItem["datetimeint"];
						Sharecenter_Content_Comment_Item.createdatetimeint = SharecenterContentDataItem["comments"][i2]["createdatetimeint"];

						



						// 评论者 头像
						// default QQ
						Sharecenter_Content_Comment_Item.getElementsByClassName('sharecenter-content-item-comment-userinfo-profile')[0].getElementsByTagName('img')[0].src = "https://q1.qlogo.cn/g?b=qq&nk=" + sharefile_user_id + "&s=640";

						Sharecenter_Content_Comment_Item.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('i')[0].className = "fa fa-qq";

						Sharecenter_Content_Comment_Item.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('span')[0].innerText =  UserinfoArrayOfUserID[SharecenterContentDataItem["comments"][i2]["userid"]]["username"];

						if(
							UserinfoArrayOfUserID[SharecenterContentDataItem["comments"][i2]["userid"]]["qq"]%1!=0
							&&
							parseInt(UserinfoArrayOfUserID[SharecenterContentDataItem["comments"][i2]["userid"]]["qq"])==1
						){
							// Github
							Sharecenter_Content_Comment_Item.getElementsByClassName('sharecenter-content-item-comment-userinfo-profile')[0].getElementsByTagName('img')[0].src = "https://avatars.githubusercontent.com/u/" + sharefile_user_id;

							Sharecenter_Content_Comment_Item.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('i')[0].className = "fa fa-github";

							Sharecenter_Content_Comment_Item.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('span')[0].innerText =  UserinfoArrayOfUserID[SharecenterContentDataItem["comments"][i2]["userid"]]["username"].replace('Github.'+get_userinfo_qq_or_github_or_others["GITHUBID"]+".",'');
						}



						if(
							SharecenterContentDataItem["comments"][i2]["userid"] == 110
							||
							UserinfoArrayOfUserID[SharecenterContentDataItem["comments"][i2]["userid"]]["qq"] == 110
						){
							Sharecenter_Content_Comment_Item.getElementsByClassName('sharecenter-content-item-comment-userinfo-profile')[0].getElementsByTagName('img')[0].src = "/img/110.jpg";
							Sharecenter_Content_Comment_Item.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('i')[0].className = "fa fa-check";
							// Sharecenter_Content_Comment_Item.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('span')[0].innerText = "POLICE WARNING MESSAGE TEXT";
						}


						// 评论内容
						Sharecenter_Content_Comment_Item.getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text')[0].getElementsByTagName('span')[0].innerText = SharecenterContentDataItem["comments"][i2]["commentcontent"];


						// 是否引用？回复了别人的评论？
						if(
							SharecenterContentDataItem["comments"][i2]["replycommentid"] > 0
						){

							// let ThisCommentReplyOldCommentContent = "";

							// 获取被回复的评论
							let internal_SharecenterContentCommentItems = div.getElementsByClassName('sharecenter-content-item-comment');



							for(
								let i3=0;
								i3<internal_SharecenterContentCommentItems.length;
								i3++
							){


								if(
									internal_SharecenterContentCommentItems[i3].item_id == SharecenterContentDataItem["comments"][i2]["replycommentid"]
								){

									// console.log(get_userinfo_qq_or_github_or_others);


									// let ReplyCommentContentElementInnerText =  UserinfoArrayOfUserID[internal_SharecenterContentCommentItems[i3].userid]["username"] + " : " +  internal_SharecenterContentCommentItems[i3].getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text')[0].getElementsByTagName('span')[0].innerText;
									let ReplyCommentContentElementInnerText =  internal_SharecenterContentCommentItems[i3].getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text')[0].getElementsByTagName('span')[0].innerText;

									if(
										UserinfoArrayOfUserID[internal_SharecenterContentCommentItems[i3].userid]["username"] == userinfo["username"]
									){



									}else{
										
										if(
											get_userinfo_qq_or_github_or_others["GITHUBID"]!=undefined
										){
											// 如果被回复的内容是GitHub用户发布的 Github.GID.UN >> UN
											ReplyCommentContentElementInnerText = UserinfoArrayOfUserID[internal_SharecenterContentCommentItems[i3].userid]["username"].replace("Github." + get_userinfo_qq_or_github_or_others["GITHUBID"] + ".",'') + " : " +  ReplyCommentContentElementInnerText;

										}else{

											// 不是 GitHub用户直接拼接用户名
											// 被评论的内容是否 github？

											let internal_github_userinfo = get_github_or_qq_or_other_userinfo_profile(UserinfoArrayOfUserID[internal_SharecenterContentCommentItems[i3].userid]["qq"]);
											if(
												internal_github_userinfo["GITHUBID"] == undefined
											){
												ReplyCommentContentElementInnerText = UserinfoArrayOfUserID[internal_SharecenterContentCommentItems[i3].userid]["username"] + " : " +  ReplyCommentContentElementInnerText;
											}else{
												ReplyCommentContentElementInnerText = UserinfoArrayOfUserID[internal_SharecenterContentCommentItems[i3].userid]["username"].replace('Github.' + internal_github_userinfo["GITHUBID"] + '.','') + " : " +  ReplyCommentContentElementInnerText;
											}

											// console.log('不是GITHUB ' + ReplyCommentContentElementInnerText);
										}
									}

									Sharecenter_Content_Comment_Item.getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text-reply-for-text')[0].innerText = ReplyCommentContentElementInnerText;
									break;

								}

							}





						}else{
							Sharecenter_Content_Comment_Item.getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text-reply')[0].className = "sharecenter-content-item-comment-userinfo-comment-text-reply sharecenter-content-item-comment-userinfo-comment-text-reply-hide";
						}





						div.getElementsByClassName('sharecenter-content-item-comment-submit-element-input')[0].readOnly = false;








						// 动态加载评论
						// 评论ELEMENT
						// console.log(Sharecenter_Content_Comment_Item);

						div.getElementsByClassName('sharecenter-content-item-comments')[0].append(Sharecenter_Content_Comment_Item);

						function ShowContentCommentItems(THIS){


							// 元素是否在窗口中 元素是否在屏幕中
							if (isInViewport(THIS)||THIS.ShowWaitTime>20){
								setTimeout(function(){
									THIS.className = THIS.className.replace(/  /g,' ');
									THIS.className = THIS.className.replace(/sharecenter-content-item-comment-hide/g,'');
								},500);
							}else{
								// console.log(THIS.ShowWaitTime);
								THIS.ShowWaitTime = THIS.ShowWaitTime+1;
								setTimeout(ShowContentCommentItems,THIS.ShowWaitTime*200,THIS);
							}
						
						}
						Sharecenter_Content_Comment_Item.ShowWaitTime = 0;
						setTimeout(ShowContentCommentItems,i2*200,Sharecenter_Content_Comment_Item);




						



					}


					// 给评论添加滚动监听，继续加载更多的评论
					let Comment_DIV_Element = div.getElementsByClassName('sharecenter-content-item-comment-submit-element')[0];

					Comment_DIV_Element.Comments_Loadover = false;
					if(
						SharecenterContentDataItem["comments"].length < 20
					){
						Comment_DIV_Element.Comments_Loadover = true;
					}

					Comment_DIV_Element.TheParentElement = div;

					Comment_DIV_Element.page = 1;

					Comment_DIV_Element.num = 20;

					function Load_More_Comments(Comment_DIV_Element){

						// console.log("Comment_DIV_Element");

						// Comment_DIV_Element.TheParentElement.item_id;
						// Comment_DIV_Element.TheParentElement.user_id;
						// Comment_DIV_Element.TheParentElement.datetimeint;
						// Comment_DIV_Element.TheParentElement.qq;

						if(
							Comment_DIV_Element.Comments_Loadover == true
						){
							// 已经加载完全部评论
							return false;
						}


						// 是否全部评论已经打开并且元素距离屏幕高度（假设屏幕1080P）位置1080-2160之间，即将到达屏幕，就继续加载更多评论！
						if(Comment_DIV_Element.TheParentElement.getElementsByClassName('sharecenter-content-item-comments')[0].getElementsByClassName('sharecenter-content-item-comment-hide').length>0){
							// 仍有评论未加载出来。
							// console.log('仍有评论未加载');
							setTimeout(Load_More_Comments,100,Comment_DIV_Element);
							return false;
						};



						// 如果评论没到达屏幕高度
						// console.log(getElementTop(Comment_DIV_Element));

						// window.innerHeight

						if(
							getElementTop(Comment_DIV_Element) > ( window.innerHeight*2 )
						){

							// 未到达高度
							setTimeout(Load_More_Comments,100,Comment_DIV_Element);
							return false;

						}







						// 继续加载评论
						let xmlhttp = new XMLHttpRequest();
						xmlhttp.onreadystatechange=function(){
							if(xmlhttp.readyState==4 && xmlhttp.status==200){
								let ResultJSON = JSON.parse(xmlhttp.responseText);
								if(ResultJSON["status"]){

									if(
										ResultJSON["userinfoarray"]!=undefined
										&&
										ResultJSON["userinfoarray"].length > 0
									){
										for(
											let i = 0;
											i < ResultJSON["userinfoarray"].length;
											i++
										){
											let UserinfoArrayItem = ResultJSON["userinfoarray"][i];
											UserinfoArrayOfQQ[UserinfoArrayItem["qq"]] = UserinfoArrayItem;
											UserinfoArrayOfUserID[UserinfoArrayItem["id"]] = UserinfoArrayItem;
											UserinfoArrayOfUsername[UserinfoArrayItem["username"]] = UserinfoArrayItem;
										}
									}




									// 处理评论加载到列表里
									for(
										let i = 0;
										i < ResultJSON["comments"].length;
										i++
									){
										let div_element;

										// div_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('span')[0].innerText;

										let TheCommentsItemsList = Comment_DIV_Element.TheParentElement.getElementsByClassName('sharecenter-content-item-comments')[0].getElementsByClassName('sharecenter-content-item-comment');

										let The_Comment_ID_IS_IN_The_Comments_Items = false;
										for(
											let i2 = 0;
											i2 < TheCommentsItemsList.length;
											i2++
										){
											// console.log( ResultJSON["comments"][i]["id"] + " -- " + TheCommentsItemsList[i2].item_id );
											if(
												TheCommentsItemsList[i2].item_id == ResultJSON["comments"][i]["id"]
											){
												The_Comment_ID_IS_IN_The_Comments_Items = true;
												// break;
											}
										}
										if(
											The_Comment_ID_IS_IN_The_Comments_Items == true
										){

											continue;
										}


										if(
											ResultJSON["comments"][i]["userid"] == userinfo["id"]
										){
											// My Comments
											div_element = Comment_DIV_Element.TheParentElement.getElementsByClassName('sharecenter-content-item-comment-locked-default-demo sharecenter-content-item-comment-myself')[0].cloneNode(true);
											div_element.className = "sharecenter-content-item-comment sharecenter-content-item-comment-hide sharecenter-content-item-comment-myself";
										}else{
											// is Not My Comments
											div_element = Comment_DIV_Element.TheParentElement.getElementsByClassName('sharecenter-content-item-comment-locked-default-demo sharecenter-content-item-comment-reply')[0].cloneNode(true);
											div_element.className = "sharecenter-content-item-comment sharecenter-content-item-comment-hide sharecenter-content-item-comment-reply";
											// Other User Comment Username
										}

										div_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('span')[0].innerText = UserinfoArrayOfUserID[ResultJSON["comments"][i]["userid"]]["username"];

										// div_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('span')[0].innerText

										div_element.userid = ResultJSON["comments"][i]["userid"];
										div_element.item_id = ResultJSON["comments"][i]["id"];
										div_element.createdatetimeint = ResultJSON["comments"][i]["createdatetimeint"];
										div_element.content_datetimeint = ResultJSON["comments"][i]["datetimeint"];

										// 这是帖主的用户名不是评论者的用户名
										div_element.content_username = UserinfoArrayOfUserID[ResultJSON["comments"][i]["userid"]]["username"];


										div_element.content_id = ResultJSON["comments"][i]["id"];
										div_element.content_qq =  UserinfoArrayOfUserID[ResultJSON["comments"][i]["userid"]]["qq"];
										div_element.content_userid = ResultJSON["comments"][i]["userid"];

										// pass

										

										


										if(
											ResultJSON["comments"][i]["replycommentid"]!=undefined
											&&
											ResultJSON["comments"][i]["replycommentid"]>0
										){




											// 寻找他回复的是哪个评论的内容
											for(
												let i2 = 0;
												i2 < TheCommentsItemsList.length;
												i2++
											){
												if(
													TheCommentsItemsList[i2].item_id == ResultJSON["comments"][i]["replycommentid"]
												){


													let internal_github_userinfo = get_github_or_qq_or_other_userinfo_profile( UserinfoArrayOfUserID[TheCommentsItemsList[i2].userid]["qq"] );



													if( // 回复自己的
														TheCommentsItemsList[i2].userid == userinfo["id"]
													){
														div_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text-reply-for-text')[0].innerText = TheCommentsItemsList[i2].getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text')[0].innerText;
													}else{
														if(
															internal_github_userinfo["GITHUBID"] != undefined
														){
															div_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text-reply-for-text')[0].innerText = UserinfoArrayOfUserID[TheCommentsItemsList[i2].userid]["username"].replace('Github.'+internal_github_userinfo["GITHUBID"]+'.','') + " : " + TheCommentsItemsList[i2].getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text')[0].innerText;
														}else{
															div_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text-reply-for-text')[0].innerText = UserinfoArrayOfUserID[TheCommentsItemsList[i2].userid]["username"] + " : " + TheCommentsItemsList[i2].getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text')[0].innerText;
														}
														
													}
													// console.log(TheCommentsItemsList[i2].getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text-reply-for-text')[0].innerText);
													break;
												}
											}



										}else{

											div_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text-reply')[0].className = "sharecenter-content-item-comment-userinfo-comment-text-reply sharecenter-content-item-comment-userinfo-comment-text-reply-hide";

										}

										let User_Info = get_github_or_qq_or_other_userinfo_profile( UserinfoArrayOfUserID[ResultJSON["comments"][i]["userid"]]["qq"] );

										div_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-profile')[0].getElementsByTagName('img')[0].src = User_Info["PROFILEURL"];

										div_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text')[0].getElementsByTagName('span')[0].innerText = ResultJSON["comments"][i]["commentcontent"];


										
										if(
											User_Info["Type"] == "QQ"
										){
											div_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('i')[0].className = "fa fa-qq";
										}
										if(
											User_Info["Type"] == "GITHUB"
										){
											div_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('i')[0].className = "fa fa-github";
											div_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('span')[0].innerText = div_element.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('span')[0].innerText.replace("Github." + User_Info["GITHUBID"] +  ".",'');
										}


										

										Comment_DIV_Element.TheParentElement.getElementsByClassName('sharecenter-content-item-comments')[0].append(div_element);

										SetSharecenterContentsCommentsMessageSetClickFunctions();


										function ShowContentCommentItems(THIS){


											// 元素是否在窗口中 元素是否在屏幕中
											if (isInViewport(THIS)||THIS.ShowWaitTime>20){


												// 如果前面的评论还没有加载出来，不能提前越级显示
												// 留着以后写



												setTimeout(function(){
													THIS.className = THIS.className.replace(/  /g,' ');
													THIS.className = THIS.className.replace(/sharecenter-content-item-comment-hide/g,'');
												},500);
											}else{
												// console.log(THIS.ShowWaitTime);
												THIS.ShowWaitTime = THIS.ShowWaitTime+1;
												setTimeout(ShowContentCommentItems,THIS.ShowWaitTime*200,THIS);
											}
										
										}
										div_element.ShowWaitTime = 0;
										setTimeout(ShowContentCommentItems,i*200,div_element);



									}






									
									if(
										ResultJSON["comments"]!=undefined
										&&
										ResultJSON["comments"].length < 20
									){
										// 这篇文章的评论已经加载完了。
										Comment_DIV_Element.Comments_Loadover = true
									}else{

										Comment_DIV_Element.page = Comment_DIV_Element.page + 1;

										setTimeout(Load_More_Comments,100,Comment_DIV_Element);

									}

								}else{
									// 评论加载错误
								}
							}
						}
						xmlhttp.open("POST",api_server_url+"/php/v4/sharecenter_load_comments",true);
						xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
						xmlhttp.withCredentials = true;
						xmlhttp.send("page=" + Comment_DIV_Element.page + "&num=" + Comment_DIV_Element.num + "&qq=" + Comment_DIV_Element.TheParentElement.qq + "&content_id=" + Comment_DIV_Element.TheParentElement.item_id + "&user_id=" + Comment_DIV_Element.TheParentElement.user_id  + "&datetimeint=" + Comment_DIV_Element.TheParentElement.datetimeint  + "&session_id=" + userinfo["session_id"] );

						



						// setTimeout(Load_More_Comments,100,Comment_DIV_Element);
					}
					setTimeout(Load_More_Comments,100,Comment_DIV_Element);




					// 旧的替换掉
					let sharecenter_content_items = document.getElementsByClassName('sharecenter-content-items')[0].getElementsByClassName('sharecenter-content-item');

					for(
						let i=0;
						i<sharecenter_content_items.length;
						i++
					){
						let sharecenter_content_item = sharecenter_content_items[i];

						if(
							sharecenter_content_item.item_id == div.item_id
						){

							// replace
							sharecenter_content_item.remove();
							break;
						}
					}










					if(
						JustGetContentID!=undefined
						&&
						JustGetContentID>0
					){
						document.getElementsByClassName('sharecenter-content-items')[0].prepend(div);
					}else{
						document.getElementsByClassName('sharecenter-content-items')[0].append(div);
					}
					
					



				}








				// 给消息气泡上点击事件
				SetSharecenterContentsCommentsMessageSetClickFunctions();




				
			}else{
				swal({
					title: "错误提示",
					text: ResultJSON["message"],
					icon: "error",
					// buttons: true,
					dangerMode: true,
					closeOnClickOutside: false,
				});
			}
		}
	}
	xmlhttp.open("POST",api_server_url+"/php/v4/sharecenter_contents",true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;




	xmlhttp.send("content_id=" + JustGetContentID + "&page=" + Sharecenter_Contents_Page + "&num=" + Sharecenter_Contents_Num + "&session_id=" + userinfo["session_id"] );


}


// 给消息气泡上点击事件
function SetSharecenterContentsCommentsMessageSetClickFunctions(){





				let sharecenter_content_items = document.getElementsByClassName('sharecenter-content-items')[0].getElementsByClassName('sharecenter-content-item');

				for(
					let i=0;
					i<sharecenter_content_items.length;
					i++
				){
					sharecenter_content_item = sharecenter_content_items[i];



					// 给所有的评论内容上点击事件
					let sharecenter_content_item_comment_userinfo_comment_text_items_sharecenter_content_item_comments_items = sharecenter_content_item.getElementsByClassName('sharecenter-content-item-comments')[0].getElementsByClassName('sharecenter-content-item-comment');


					for(
						let i2=0;
						i2<sharecenter_content_item_comment_userinfo_comment_text_items_sharecenter_content_item_comments_items.length;
						i2++
					){


						let sharecenter_content_item_comment_userinfo_comment_text_items_sharecenter_content_item_comments_item = sharecenter_content_item_comment_userinfo_comment_text_items_sharecenter_content_item_comments_items[i2];

						let my_profile_url_json = get_github_or_qq_or_other_userinfo_profile( UserinfoArrayOfUserID[sharecenter_content_item_comment_userinfo_comment_text_items_sharecenter_content_item_comments_item.userid]["qq"]  );



						sharecenter_content_item_comment_userinfo_comment_text_items_sharecenter_content_item_comments_item.getElementsByClassName('sharecenter-content-item-comment-userinfo-comment-text')[0].onclick = function(){



							/*
							Sharecenter_Content_Comment_Item.item_id = SharecenterContentDataItem["comments"][i2]["id"]; // 评论的id
							Sharecenter_Content_Comment_Item.userid = SharecenterContentDataItem["comments"][i2]["userid"]; // 评论的用户的ID
							Sharecenter_Content_Comment_Item.content_id = SharecenterContentDataItem["id"]; // 评论所属上级Content的id
							Sharecenter_Content_Comment_Item.content_username = SharecenterContentDataItem["username"]; // 评论所属上级Content的用户名
							Sharecenter_Content_Comment_Item.content_userid = SharecenterContentDataItem["userid"];
							Sharecenter_Content_Comment_Item.content_qq = SharecenterContentDataItem["qq"];
							Sharecenter_Content_Comment_Item.content_datetimeint = SharecenterContentDataItem["datetimeint"];
							*/

							// 提交评论需要用到的参数
							


							this.parentElement.parentElement.parentElement.NewReplyCommentID = this.parentElement.item_id; // 评论的id
							this.parentElement.parentElement.parentElement.NewReplyCommentIDUserID = this.parentElement.userid; // 评论的用户的ID
							this.parentElement.parentElement.parentElement.NewReplyCommentIDContentID = this.parentElement.content_id; // 评论所属上级Content的id
							this.parentElement.parentElement.parentElement.NewReplyCommentIDContentUsername = this.parentElement.content_username; // 评论所属上级Content的用户名
							this.parentElement.parentElement.parentElement.NewReplyCommentIDContentUserID = this.parentElement.content_userid; // 评论所属上级Content的用户id
							this.parentElement.parentElement.parentElement.NewReplyCommentIDContentUserQQ = this.parentElement.content_qq; // 评论所属上级Content的用户id
							this.parentElement.parentElement.parentElement.NewReplyCommentIDContentCreateDatetimeInte = this.parentElement.content_datetimeint; // 评论所属上级Content的创建时间
							


							this.parentElement.parentElement.NewReplyCommentID = this.parentElement.item_id; // 评论的id




							this.parentElement.parentElement.parentElement.NewReplyCommentIDMoreInfoJSON = {
								"item_id":this.parentElement.item_id,
								"userid":this.parentElement.userid,
								"content_id":this.parentElement.content_id,
								"createdatetimeint":this.parentElement.createdatetimeint,
							}/*
							console.log(this.parentElement.item_id);
							console.log(this.parentElement.userid);
							console.log(this.parentElement.content_id);
							console.log(this.parentElement.createdatetimeint);*/



							this.parentElement.parentElement.parentElement.getElementsByClassName('sharecenter-content-item-comment-submit-element')[0].getElementsByClassName('sharecenter-content-item-comment-submit-element-reply')[0].getElementsByClassName('sharecenter-content-item-comment-submit-element-reply-for-text')[0].innerText =  this.getElementsByTagName('span')[0].innerText;


							if(
								this.parentElement.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('span')[0].innerText == userinfo["username"]
								||
								this.parentElement.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('span')[0].innerText == userinfo["username"].replace('Github.' + my_profile_url_json["GITHUBID"] + '.','')
							){
								// 自己回复自己的
							}else{

								 this.parentElement.parentElement.parentElement.getElementsByClassName('sharecenter-content-item-comment-submit-element')[0].getElementsByClassName('sharecenter-content-item-comment-submit-element-reply')[0].getElementsByClassName('sharecenter-content-item-comment-submit-element-reply-for-text')[0].innerText = this.parentElement.getElementsByClassName('sharecenter-content-item-comment-userinfo-username')[0].getElementsByTagName('span')[0].innerText + " : "+  this.parentElement.parentElement.parentElement.getElementsByClassName('sharecenter-content-item-comment-submit-element')[0].getElementsByClassName('sharecenter-content-item-comment-submit-element-reply')[0].getElementsByClassName('sharecenter-content-item-comment-submit-element-reply-for-text')[0].innerText;

							}



							this.parentElement.parentElement.parentElement.getElementsByClassName('sharecenter-content-item-comment-submit-element')[0].getElementsByClassName('sharecenter-content-item-comment-submit-element-reply')[0].className = "sharecenter-content-item-comment-submit-element-reply";
							this.parentElement.parentElement.parentElement.getElementsByClassName('sharecenter-content-item-comment-submit-element')[0].getElementsByTagName('i')[0].onclick = function(){

								// 消除正在回复的评论id 不要回复评论 不回复评论
								//console.log(this.parentElement.parentElement.NewReplyCommentID);
								//console.log(this.parentElement.parentElement.NewReplyCommentIDMoreInfoJSON);
								this.parentElement.parentElement.NewReplyCommentID = undefined;
								this.parentElement.parentElement.NewReplyCommentIDMoreInfoJSON = {};

								this.parentElement.getElementsByClassName('sharecenter-content-item-comment-submit-element-reply')[0].className = "sharecenter-content-item-comment-submit-element-reply sharecenter-content-item-comment-submit-element-reply-hide";

							}

						}

					}



					

				}



}





let sharecenter_content_new_sharefile_files_item_open_select_file_window = document.getElementsByClassName('sharecenter-content-new-sharefile-files-item-open-select-file-window')[0];
sharecenter_content_new_sharefile_files_item_open_select_file_window.onclick = function(){
	SharecenterContentNewFileShareShowSelectFileWindow();
}

// 实时更新文件列表内容到用户发布文件资源分享的搜索列表中
function UpdateSharecenterContentNewContentFileSearchWindow(){
	if(
		
		document.getElementsByClassName('swal-overlay--show-modal')[0] != undefined
		&&
		document.getElementsByClassName('sharecenter-content-new-sharefile-search-files-input-swal')[0]!=undefined
		&&
		files_reload_locked == true
	){
		SharecenterContentNewFileShareShowSelectFileWindow();
	}
	setTimeout(UpdateSharecenterContentNewContentFileSearchWindow,20);
}
setTimeout(UpdateSharecenterContentNewContentFileSearchWindow,20);




// 创建文件
function createFileItem(item){

	// console.log(item);

	/*

	item

	date: "2024-06-12 19:34:48"
	date_int: "1718192088"
	hash: "123"
	id: "2891703"
	mirror: false
	name: "秘密园天空之城.mp3"
	parent: "0"
	share: "/#sharefile=ljw2LGnr_2830111"
	size: "1024427"
	url: "/download/2865573/N8FeQBOX/%E7%A7%98%E5%AF%86%E5%9B%AD%E5%A4%A9%E7%A9%BA%E4%B9%8B%E5%9F%8E.mp3?t=1718606558&t2=-1"

	*/

	let div = document.createElement('div');
	div.name = item["name"];
	div.date = item["date"];
	div.date_int = item["date_int"];
	div.size = item["size"];
	div.offline = item["offline"];
	div.offline_id = item["offline_id"];
	if(div.offline_id!=undefined){
		
		div.className = "files-item files-item-offline-item files-item-hide";
	}else{
		div.className = "files-item files-item-hide";
	}
	div.offline_size = item["offline_size"];
	div.offline_status = item["offline_status"];
	div.size_unit = get_size_unit(div.size);
	div.item_id = item["id"];
	div.url = item["url"];
	div.url_localhost = item["url_localhost"];
	div.url_public_link = public_link_hostname + item["public_link"];
	div.url_private_link = private_link_hostname + item["url"];
	div.ftp = item["ftp"];
	div.media = item["media"];
	div.media_localhost = item["media_localhost"];
	div.share = item["share"];
	div.parent = item["parent"];
	let type_icon = get_files_item_type_icon(div.name);
	div.innerHTML = '<div class="element-hide-display-none"><div class="files-item-file-info-id">' + item["id"] + '</div></div><div class="files-item-icon"><i class="' + type_icon + '"></i></div><div class="files-item-name"><span>' + div.name + '</span></div><div class="files-item-date"><span>' + div.date + '</span></div><div class="files-item-size"><span>' + div.size_unit + '</span></div><div class="files-item-menu" title="菜单"><i class="fa fa-bars"></i><div class="files-item-menu-items files-item-menu-items-hide"><div class="files-item-menu-item files-item-menu-item-copyfile-button"><i class="fa fa-mail-reply-all"></i>转存文件</div><div class="files-item-menu-item files-item-menu-item-rename-button"><i class="fa fa-pencil"></i>命名文件</div><div class="files-item-menu-item files-item-menu-item-preview-button"><i class="fa fa fa-play-circle"></i>预览文件</div><div class="files-item-menu-item files-item-menu-item-share-button"><i class="fa fa-share-alt"></i>分享文件</div><div  class="files-item-menu-item files-item-menu-item-link-button"><i class="fa fa-link"></i>公共链接</div><div class="files-item-menu-item files-item-menu-item-public-link-button"><i class="fa fa-link"></i>自定义域</div><div class="files-item-menu-item files-item-menu-item-delete-button"><i class="fa fa-trash"></i>删除文件</div><div class="files-item-menu-item files-item-menu-item-shell-download-button"><i class="fa fa-terminal"></i>命令下载</div><div class="files-item-menu-item files-item-menu-item-download-button"><i class="fa fa-download"></i>下载文件</div></div></div>';
	div.selected = false;

	div.name_element_span = div.getElementsByClassName('files-item-name')[0].getElementsByTagName('span')[0];
	div.name_element_span.parent = div;
	div.name_element_span.onclick = function(){
		// alert("预览功能暂时关闭。");
		window.open( this.parent.ftp);
	}
	
	div.name_element = div.getElementsByClassName('files-item-name')[0];
	// div.name_element.title = div.name;
	div.name_element.parent = div;
	div.name_element.onclick = function(){

		

		if(window.location.href.indexOf("#files")!=-1&&files.className.indexOf("files-hide")==-1){

		}else{
			return false;
		}


		if(!this.parent.selected){

			
			
			// 如果未按下 CTRL 先清空其他的选中文件或文件夹
			if(!keyon_ctrl){
				

				
				unselected_files();
			}
			if(this.parent.offline_id!=undefined){
				this.parent.className = "files-item files-item-offline-item files-item-selected";
			}else{
				this.parent.className = "files-item files-item-selected";
			}
		}else{
			if(this.parent.offline_id!=undefined){
				this.parent.className = "files-item files-item-offline-item";
			}else{
				this.parent.className = "files-item";
			}
			
			this.parent.selected = false;
			if(!keyon_ctrl){
				unselected_files();
			}
			return false;
		}
		this.parent.selected = !this.parent.selected;
		files_items_selected_array.push(this.parent);
	}
	div.date_element = div.getElementsByClassName('files-item-date')[0];
	div.date_element.parent = div;
	div.date_element.onclick = div.name_element.onclick;
	div.size_element = div.getElementsByClassName('files-item-size')[0];
	div.size_element.parent = div;
	div.size_element.onclick = div.name_element.onclick;
	div.icon_element = div.getElementsByClassName('files-item-icon')[0];
	div.icon_element.parent = div;
	div.icon_element.onclick = div.name_element.onclick;
	div.menu = div.getElementsByClassName('files-item-menu')[0];
	div.menu.items = div.menu.getElementsByClassName('files-item-menu-items')[0];
	div.menu.show = false;
	div.menu.onclick = function(){
		if(files_options_items.show){
			files_options.click();
		}
		if(!this.show){
			unshowmenu_files();
			this.show = !this.show;
			this.items.className = "files-item-menu-items";
			return false;
		}else{
			this.items.className = "files-item-menu-items files-item-menu-items-hide";
		}
		this.show = !this.show;
	}

	div.menu_copyfile_element = div.getElementsByClassName('files-item-menu-item-copyfile-button')[0];
	div.menu_copyfile_element.parent = div;
	div.menu_copyfile_element.onclick = function(){
		// alert(this.parent.share);
		let share_id = this.parent.share.split('_')[1];
		let share_key = this.parent.share.split('/#sharefile=')[1].split('_')[0];
		sharefile_copy(share_id,share_key);
	}


	div.menu_rename_element = div.getElementsByClassName('files-item-menu-item-rename-button')[0];
	div.menu_rename_element.parent = div;
	div.menu_rename_element.onclick = function(){

		if(window.location.href.indexOf("#files")!=-1&&files.className.indexOf("files-hide")==-1){

		}else{
			return false;
		}

		folders_items_selected_array = [];
		files_items_selected_array = [];
		unselected_files();
		files_items_selected_array[0] = this.parent;
		if(this.parent.offline_id!=undefined){
			this.parent.className = "files-item files-item-offline-item files-item-selected";
		}else{
			this.parent.className = "files-item files-item-selected";
		}
		
		this.parent.selected = true;
		files_rename_button.onclick();
	}
	div.preview_button = div.getElementsByClassName('files-item-menu-item-preview-button')[0];
	if(
		(
			div.media!=undefined
			&&
			(
				div.name.indexOf('.mp4')!=-1&&div.name.split('.mp4').length==2&&div.name.split('.mp4')[1]==''
				||
				div.name.indexOf('.mp3')!=-1&&div.name.split('.mp3').length==2&&div.name.split('.mp3')[1]==''
				||
				div.name.indexOf('.wav')!=-1&&div.name.split('.wav').length==2&&div.name.split('.wav')[1]==''
				||
				div.name.indexOf('.jpg')!=-1&&div.name.split('.jpg').length==2&&div.name.split('.jpg')[1]==''
				||
				div.name.indexOf('.png')!=-1&&div.name.split('.png').length==2&&div.name.split('.png')[1]==''
				||
				div.name.indexOf('.jpeg')!=-1&&div.name.split('.jpeg').length==2&&div.name.split('.jpeg')[1]==''
				||
				div.name.indexOf('.gif')!=-1&&div.name.split('.gif').length==2&&div.name.split('.gif')[1]==''
			)
		)
		||
		true
	  ){
		div.preview_button.parent = div;
		div.preview_button.onclick = function(){
			files_items_selected_array[0] = this.parent;
			preview_media(files_items_selected_array[0].ftp);
		};
	}else{
		div.preview_button.remove();
		
	}
	div.menu_share_element = div.getElementsByClassName('files-item-menu-item-share-button')[0];
	div.menu_share_element.parent = div;
	div.menu_share_element.onclick = function(){
		show_share(this.parent.share);
	}
	div.menu_download_element = div.getElementsByClassName('files-item-menu-item-download-button')[0];
	div.menu_download_element.parent = div;
	div.menu_download_element.onclick = function(){

		/*if(
			this.parent.url.split('fakelink').length>1
		){
			alert('您的账号存储空间占用已超200GB，已达个人普通账号上限2倍，超额账号不支持使用网页端下载文件，请使用客户端下载此文件。');
		}*/
		
		let html_element = document.createElement('div');
		html_element.innerHTML = "<p style=\"display:none;\"><a href='" + download_web_url + this.parent.url + "' target='_blank'>电信下载（稳定）</a></p><p><a style=\"    color:#ff5050;border-bottom:2px dashed #ff5050;font-weight:bold;\" href='javascript:preview_media(\"" + this.parent.ftp + "\")' >预览文件</a></p><p><a style=\"     color:#ff8400;border-bottom:2px dashed #ff8400;font-weight:bold;\" href='" + this.parent.ftp + "&download=download.yunzhongzhuan.com' target='_blank'>下载文件</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://a.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://b.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://c.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://d.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://e.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://f.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://g.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://h.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://i.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://j.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.a.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载 IPv6</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.b.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载 IPv6</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.c.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载 IPv6</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.d.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载 IPv6</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.e.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载 IPv6</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.f.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载 IPv6</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.g.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载 IPv6</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.h.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载 IPv6</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.i.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载 IPv6</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.j.download.yunzhongzhuan.com" + this.parent.url + "' target='_blank'>点击下载 IPv6</a></p>";
		
		
		if(this.parent.url_localhost!=undefined){
			let p = document.createElement('p');
			let a = document.createElement('a');
			a.href = this.parent.url_localhost;
			a.target = "_blank";
			a.innerText = "点击下载";
			p.append(a);
			html_element.prepend(p);
		}
		/*if(this.parent.url_public_link != undefined && this.parent.url_public_link.length > 30 && this.parent.url_public_link.indexOf('undefined')==-1 && public_link_hostname.length > 10 ){
			let p = document.createElement('p');
			let a = document.createElement('a');
			a.href = this.parent.url_public_link;
			a.target = "_blank";
			a.innerText = "外链下载";
			p.append(a);
			html_element.prepend(p);
		}*/

		
		
		
		
		if(this.parent.offline!=undefined){
			let p = document.createElement('p');
			let a = document.createElement('a');
			a.href = this.parent.offline;
			a.target = "_blank";
			a.innerText = "点击下载";
			p.append(a);
			html_element.prepend(p);
		}
		
		
		// Qr Code
		if(
			false
		){
			let p = document.createElement('p');
			p.className = "file-download-qr-code-p";
			let img = document.createElement('img');
			img.style.width = "399px";
			img.style.height = "399px";
			img.style.backgroundColor = "#f5f5f5";
			img.style.maxHeight = "399px";
			img.style.maxWidth = "100%";
			img.style.margin = "20px auto";
			p.style.textAlign = "center";
			img.src = "//gimg2.baidu.com/gimg/app=2011&src="  + encodeURIComponent("https://api.qrserver.com/v1/create-qr-code/?size=399x399&data=" + encodeURIComponent("/welcome/?redirect_location="+encodeURIComponent(download_web_url)+this.parent.url));
			p.append(img);
			html_element.append(p);
		}
		
		
		swal({
			title: "选择下载",
			content: html_element,
			icon: "success",
			buttons: true,
			closeOnClickOutside: false,
		});
		// window.open(download_web_url + this.parent.url);
	}

	// 命令
	div.files_item_menu_item_shell_download_button = div.getElementsByClassName('files-item-menu-item-shell-download-button')[0];
	div.files_item_menu_item_shell_download_button.parent = div;
	div.files_item_menu_item_shell_download_button.onclick = function(){
		// alert("该功能暂时关闭");
		let new_download_url = this.parent.ftp.replace(/"/g,'');
		let new_download_url_text = 'curl -L -X GET -H "Referer: https://www.yunzhongzhuan.com" "' + new_download_url + '" -o "' + this.parent.name + '"';
		show_link(new_download_url_text);
	}
	// 外链
	div.menu_public_link_element = div.getElementsByClassName('files-item-menu-item-public-link-button')[0];
	div.menu_public_link_element.parent = div;
	div.menu_public_link_element.onclick = function(){
		if( public_link_hostname.length < 10 || public_link_hostname == ""){
			
			if( private_link_status && private_link_hostname.length > 10 ){

				
				// show_link(this.parent.url_private_link);
				let newURL = transformFTPURL(this.parent.ftp,private_link_hostname);
				show_link(newURL);
				return false;
			}
			
			swal({
				title: "自定义域",
				text: "您的账号未开通此项功能。\r\n我们支持绑定自定义域名且无限流量。\r\n支持播放视频/播放音频/预览图片/文件下载等应用场景。\r\n联系我们，开启此项专用功能。\r\nhttps://您的域名.com/download/123/abc/music.mp3",
				icon: "warning",
				buttons: ["取消","查看"],
				dangerMode: true,
				closeOnClickOutside: false,
			}).then((willDelete) => {
				if(willDelete){
					free_or_mini_or_big_vip.className = "";
					window.location.href="/#setting";
				}
			});
			
			// free_or_mini_or_big_vip.className = "";
			// window.location.href="/#setting";
			
			return false;
		}
		if( this.parent.url_public_link.length < 30 || this.parent.url_public_link.indexOf('undefined')!=-1 ){
			swal({
				title: "稍等片刻",
				text: "文件正在缓存至各网络节点。",
				icon: "warning",
				buttons: true,
				dangerMode: true,
				closeOnClickOutside: false,
			});
			return false;
		}
		show_link(this.parent.url_public_link);
	}
	if(navigator.language.toLowerCase().indexOf('cn')==-1){
		// 隐藏专用链接 
		// div.menu_public_link_element.style.display = "none";
	}
	// 内链
	div.menu_link_element = div.getElementsByClassName('files-item-menu-item-link-button')[0];
	div.menu_link_element.parent = div;
	div.menu_link_element.onclick = function(){

		alert("暂停支持。");

		return false;

		let link = public_download_web_url + this.parent.url ;
		let this_public_download_web_url = public_download_web_url.split('//')[1]; // yunzhongzhuan.com.publicdn.com
		let this_parent_url = this.parent.url.split('?t=')[0];
		link = link.split('?t=')[0];

		let div = document.createElement('div');
		div.innerHTML = '<div style="color:#5c5c5c;line-height:2;word-wrap:break-word;word-break:breal-all;">   <p>获取文件公共链接成功（共享网络/仅可用于文件下载）。</p>   <p>我们支持绑定域名（无限流量/媒体播放/文件下载）。</p>   <p>https://<span style="color:blue;">' + this_public_download_web_url + '</span>' + this_parent_url + '</p><p>绑定自定义域名可用专用网络，示例（example）：</p><p>https://<span style="color:red;">www.example.com</span>' + this_parent_url + '</p></div>';
		
		swal({
			title: "公共链接",
			content: div,
			icon: "warning",
			buttons: ["取消","查看"],
			dangerMode: true,
			closeOnClickOutside: false,
		}).then((willDelete) => {
			if(willDelete){
				show_link(link);
			}
		});

		
		return false;
		//show_link(download_web_url + this.parent.url);
	}
	div.menu_delete_element = div.getElementsByClassName('files-item-menu-item-delete-button')[0];
	div.menu_delete_element.parent = div;
	div.menu_delete_element.onclick = function(){

		if(window.location.href.indexOf("#files")!=-1&&files.className.indexOf("files-hide")==-1){

		}else{
			return false;
		}


		folders_items_selected_array = [];
		files_items_selected_array = [];
		unselected_files();
		// files_items_selected_array[0] = this.parent;
		keyon_ctrl = false;
		this.parent.getElementsByClassName('files-item-icon')[0].click();
		if(this.parent.offline_id!=undefined){
			this.parent.className = "files-item files-item-offline-item files-item-selected";
		}else{
			this.parent.className = "files-item files-item-selected";
		}
		
		this.parent.selected = true;
		files_delete_items();
	}
	if(div.offline_id!=undefined){
		let div_2 = document.createElement('div');
		let offline_title = "离线";
		if(div.offline_size!=undefined&&div.offline_size>0&&div.offline_size==div.size){
			offline_title = "同步";
		}
		if(div.offline_size!=undefined&&div.offline_size==0&&div.offline_status!=undefined&&div.offline_status==0){
			offline_title = "排队";
		}
		div_2.className = 'files-item-offline';
		div_2.innerHTML = '<div class="files-item-offline-status" style="width:'+div.offline_status+'%;"></div><span>正在'+offline_title+' '+div.offline_status+'% '+get_size_unit(div.offline_size)+'/'+div.size_unit+'</span>';
		div.prepend(div_2);
	}
	return div;
}


function push_files_to_files_page(files_items,isPrepend){
	// 文件数据
	/*
	let files_items = [
		{
			"name":"闹钟.mp4",
			"date":"2021-06-11 12:02:45",
			"size":"1024",
			"id":"330",
			"parent":"0"
		},
		{
			"name":"东京女孩.mp4",
			"date":"2021-07-29 11:40:43",
			"size":"96409600",
			"id":"6501",
			"parent":"0"
		},
		{
			"name":"东京女孩.mp4",
			"date":"2021-07-29 11:40:43",
			"size":"96409600",
			"id":"6501",
			"parent":"0"
		},
		{
			"name":"东京女孩.mp4",
			"date":"2021-07-29 11:40:43",
			"size":"96409600",
			"id":"6501",
			"parent":"0"
		},
		{
			"name":"东京女孩.mp4",
			"date":"2021-07-29 11:40:43",
			"size":"96409600",
			"id":"6501",
			"parent":"0"
		}
	];
	*/
	// 输出文件
	for(let i=0;i<files_items.length;i++){
		let item = files_items[i];
		let div = createFileItem(item);
		div.menu_copyfile_element.remove();
		if(isPrepend!=undefined&&isPrepend){
			// 前方
			files_items_files_items.prepend(div);
		}else{
			// 后方
			files_items_files_items.append(div);
		}
		setTimeout(function(){
			if(div.offline_id!=undefined){
				div.className = "files-item files-item-offline-item";
			}else{
				div.className = "files-item";
			}
			
		},(i+1)*50);
	}
}
// 复制文本
function copy_text(text){
	let oInput = document.createElement('input');
	oInput.value = text;
	document.body.appendChild(oInput);
	oInput.select(); // 选择对象
	document.execCommand("Copy"); // 执行浏览器复制命令
	oInput.className = 'oInput';
	oInput.style.display='none';
	oInput.remove();
}
// 当前网站官方网站地址
let web_url = window.location.protocol + "//" + window.location.href.split('://')[1].split('/')[0];
if(
	window.location.href.indexOf('frontwize.com')!=-1
){
	web_url = "https://www.yunzhongzhuan.com";
}
let download_web_url = window.location.protocol + "//download.yunzhongzhuan.com";
let public_download_web_url = window.location.protocol + "//yunzhongzhuan.com.publicdn.com";


let UploadFileServerList = [
    "//a.upload.yunzhongzhuan.com",
    "//b.upload.yunzhongzhuan.com",
    "//c.upload.yunzhongzhuan.com",
    "//d.upload.yunzhongzhuan.com",
    "//e.upload.yunzhongzhuan.com",
    "//f.upload.yunzhongzhuan.com",
    "//g.upload.yunzhongzhuan.com",
    "//h.upload.yunzhongzhuan.com",
    "//i.upload.yunzhongzhuan.com",
    "//j.upload.yunzhongzhuan.com",
    
]
if(
	getTopLevelDomain(window.location.hostname) == "frontwize.com"
){
	UploadFileServerList = [
		"//ce30747048f5b.cname.frontwize.com",
		"//c037cd62cb344.cname.frontwize.com",
		"//c199c8a74ab9f.cname.frontwize.com",
		"//c2beecfca8f5b.cname.frontwize.com",
		"//c459cf78abeb0.cname.frontwize.com",
		"//c5a4b61128f5b.cname.frontwize.com",
		"//c723e444283a7.cname.frontwize.com",
		"//c8be7a6a48a9f.cname.frontwize.com",
		"//c9d639b7c8cb2.cname.frontwize.com",
		"//cacf29b8883a7.cname.frontwize.com"
	];
}
let upload_web_url = window.location.protocol + UploadFileServerList[Math.floor(Math.random() * UploadFileServerList.length )];
// let upload_web_url = window.location.protocol + "//a.upload.yunzhongzhuan.com";


let api_upload_web_url;
// 初始化上传地址的 iframe
function api_upload_web_url_load(){
	api_upload_web_url = upload_web_url + "/v4/upload";
}
api_upload_web_url_load();
// 显示分享文件
function show_share(share){
	let sharelink = web_url + share;
	swal({
		title: "分享成功",
		text: sharelink,
		icon: "success",
		buttons: ["取消","复制"],
		closeOnClickOutside: false,
	}).then((willDelete) => {
		if (willDelete) {
			copy_text(sharelink);
		}
	});
}
// 显示链接文件
function show_link(link){
	// let link = web_url + share;
	swal({
		title: "分享成功",
		text: link,
		icon: "success",
		buttons: ["取消","复制"],
		closeOnClickOutside: false,
	}).then((willDelete) => {
		if (willDelete) {
			copy_text(link);
			swal({
			    title: "复制成功",
			    text: "复制成功！\r\n您可通过 Internet Download Manager 下载文件！\r\n云中转支持网站外链功能，如有需要，联系我们！",
			    icon: "success",
			    buttons: "确定",
			    closeOnClickOutside: false,
			});
		}
	});
}
// 创建文件夹
function create_folder(name,parent_folder_id){
	let folder_name = encodeURIComponent( name );
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			let ResultJSON = JSON.parse(xmlhttp.responseText);
			if(ResultJSON["status"]){
				let folder_item = {
					"name":name,
					"id":ResultJSON["id"],
					"date":get_datetime(),
					"parent":parent_folder_id
				}
				push_folders_to_files_page([folder_item],true);
			}else{
				swal({
					title: "创建失败",
					text: ResultJSON["message"],
					icon: "error",
					// buttons: true,
					dangerMode: true,
					closeOnClickOutside: false,
				});
			}
		}
	}
	xmlhttp.open("POST",api_server_url+"/php/v4/create_folder",true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;
	xmlhttp.send("folder_name=" + folder_name + "&parent_folder_id=" + parent_folder_id + "&session_id=" + userinfo["session_id"] );
}

// 右键区域
let files_main = document.getElementById('files-main');
let files_main_menu = document.getElementById('files-main-menu');
// 右键按钮
let files_download_button = document.getElementById('files-download-button');
let files_shell_download_button = document.getElementById('files-shell-download-button');
let files_link_button = document.getElementById('files-link-button');
let files_public_link_button = document.getElementById('files-public-link-button');

let files_share_button = document.getElementById('files-share-button');
let files_cat_button = document.getElementById('files-cat-button');
let files_paste_button = document.getElementById('files-paste-button');
let files_preview_button = document.getElementById('files-preview-button');
let files_unpaste_button = document.getElementById('files-unpaste-button');
let files_rename_button = document.getElementById('files-rename-button');
let files_upload_button = document.getElementById('files-upload-button');


// 批量复制
let files_public_all_link_button = document.getElementById('files-public-all-link-button');
if(files_public_all_link_button!=undefined){
	files_public_all_link_button.onclick = function(){
		if( public_link_hostname.length < 10 || public_link_hostname == ""){
			files_public_all_link_button.style.display = "none";
			return false;
		}
		let files_items = files_items_files_items.getElementsByClassName('files-item');
		let array_url_public_link = new Array();
		for(let i=0;i<files_items.length;i++){
			let item = files_items[i];
			if(item.url_public_link != undefined && item.url_public_link.length > 30 && item.url_public_link.indexOf('undefined')==-1  ){
				array_url_public_link.push(item.name + "\r\n" + item.url_public_link);
			}else{
				array_url_public_link.push(item.name + "\r\n文件正在缓存至各网络节点。");
			}
		}
		let link = array_url_public_link.join('\r\n\r\n');
		swal({
			title: "分享成功",
			text: link,
			icon: "success",
			buttons: ["取消","复制"],
			closeOnClickOutside: false,
		}).then((willDelete) => {
			if (willDelete) {
				// 复制文本 复制文字 JS自动选中文字
				// copy_text(link);
				var selection = window.getSelection();
				selection.removeAllRanges();
				var range = document.createRange();
				range.selectNodeContents(document.getElementsByClassName('swal-text')[0]);
				selection.addRange(range);
				document.execCommand("Copy");
				swal({
				    title: "复制成功",
				    text: "复制成功！",
				    icon: "success",
				    buttons: "确定",
				    closeOnClickOutside: false,
				});
			}
		});
	}
}

files_upload_button.onclick = function(){
	// 如果未登录
	if(userinfo["id"]!=undefined&&userinfo["id"]!=null&&userinfo["id"]!=''&&userinfo["qq"]!=undefined&&userinfo["qq"]!=null&&userinfo["qq"]!=''&&userinfo["username"]!=undefined&&userinfo["username"]!=null&&userinfo["username"]!=''){
		if(!show_upload_full_screen_mask){

			set_upload_cdn_cloudflare();
			
			
		}
	}else{
		window.location.href = "#login";
		return false;
	}
	files_options_items.show=false;
	files_options_items.className="files-options-items files-options-items-hide";
	files_options_item_upload_files_input.click();
};
/*
let files_options_items_item_offline_button = document.getElementById('files-options-items-item-offline-button');
files_options_items_item_offline_button.onclick = function(){
	new_offline_https();
}
*/
let files_create_button = document.getElementById('files-create-button');
files_create_button.onclick = function(){
	swal("创建目录", {
		content: {
			element: "input",
			attributes: {
				placeholder: "目录名称",
				// value: '目录名称',
				type: "text",
			},
		},
		closeOnClickOutside: false,
		buttons:["取消","创建"],
	}).then((value) => {
		if(value) {
			let parent_folder_id = get_files_folders_array[get_files_folders_index];
			create_folder(value,parent_folder_id);
		}
	});
}
// 离线下载
function new_offline_https(){
	return false;
	let html_element = document.createElement('div');
	html_element.innerHTML = '<input placeholder="URL" class="swal-content__input new-offline-url"><input placeholder="Referer" class="swal-content__input new-offline-referer"><input placeholder="User-Agent" class="swal-content__input new-offline-ua"><input placeholder="Cookie" class="swal-content__input new-offline-cookie"><input disabled placeholder="Get" class="swal-content__input">';
	swal("离线下载", {
		//icon: "success",
		title:"离线下载",
		text: "URL必填其余可空仅允许HTTPS443端口最大8G不可30X",
		content: html_element,
		closeOnClickOutside: false,
		buttons:["取消","确定"],
	}).then((willDelete) => {
		if (!willDelete) {
			return false;
		}
		let offline_url = document.getElementsByClassName('new-offline-url')[0].value;
		let offline_referer = document.getElementsByClassName('new-offline-referer')[0].value;
		let offline_ua = document.getElementsByClassName('new-offline-ua')[0].value;
		let offline_cookie = document.getElementsByClassName('new-offline-cookie')[0].value;
		if(offline_url!=undefined&&offline_url!=null&&offline_url!="") {
			let url_array = offline_url.split('?')[0].split('/');
			url_array[0] = url_array[0].replace(/https:/g,'');
			url_array[0] = url_array[0].replace(/http:/g,'');
			let offline_name = url_array[url_array.length-1];
			if(
				false
				/*url_array[0].indexOf('http:')!=-1
				||
				url_array[0].indexOf('https:')==-1*/
				
				/*||value.split('?').length>1*/
			  ){
				swal({
					title: "地址无效",
					text: "请提交HTTPS协议文件地址",
					icon: "error",
					buttons: ["取消","继续"],
					dangerMode: true,
					closeOnClickOutside: false,
				}).then((willDelete) => {
				  if (willDelete) {
				   setTimeout(new_offline_https,10);
				  }
				});
			}else{
				offline_cookie = encodeURIComponent(offline_cookie);
				offline_ua = encodeURIComponent(offline_ua);
				offline_referer = encodeURIComponent(offline_referer);
				offline_url = encodeURIComponent(offline_url);
				let parent_folder_id = get_files_folders_array[get_files_folders_index];
				let url = offline_url.replace(/https:/g,'');
				url = url.replace(/http:/g,'');
				// url = url.split('?')[0];
				let xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange=function(){
					if(xmlhttp.readyState==4 && xmlhttp.status==200){
						let ResultJSON = JSON.parse(xmlhttp.responseText);
						if(ResultJSON["status"]){
							let item = ResultJSON;
							let file_item = {
								"name":item["name"],
								"id":item["id"],
								"date":item["date"],
								"size":item["size"],
								"share":item["share"],
								"url":item["url"],
								"ftp":item["ftp"],
								"media":item["media"],
								"parent":parent_folder_id,
								"offline":item["offline"],
								"offline_id":item["offline_id"],
								"offline_size":item["offline_size"],
								"offline_status":item["offline_status"],
							}
							push_files_to_files_page([file_item],true);
						}else{
							swal({
								title: "提交失败",
								text: ResultJSON["message"],
								icon: "error",
								buttons: ["取消","继续"],
								dangerMode: true,
								closeOnClickOutside: false,
							}).then((willDelete) => {
							  if (willDelete) {
							   setTimeout(new_offline_https,10);
							  }
							});

						}
					}
				}
				xmlhttp.open("POST",api_server_url+"/php/v4/new_offline",true);
				xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				xmlhttp.withCredentials = true;
				xmlhttp.send("offline_ua="+offline_ua+"&offline_cookie="+offline_cookie+"&offline_referer="+offline_referer+"&url=" + url + "&parent_folder_id=" + parent_folder_id + "&session_id=" + userinfo["session_id"] );
				
			}
			
			
		}
	});
}
let files_options_item_create_folder_button = document.getElementById('files-options-item-create-folder-button');
files_options_item_create_folder_button.onclick = files_create_button.onclick;
let files_offline_button = document.getElementById('files-offline-button');
files_offline_button.onclick = function(){
	new_offline_https();
}
let files_selection_all_button = document.getElementById('files-selection-all-button');
//文件和文件夹全选
function files_items_selected_all_function(){
	keyon_ctrl = true;
	let folders = files_items_folders_items.getElementsByClassName('files-item');
	for(let i=0;i<folders.length;i++){
		if(!folders[i].selected){
			folders[i].name_element.click();
		}
	}
	let files_items = files_items_files_items.getElementsByClassName('files-item');
	for(let i=0;i<files_items.length;i++){
		if(!files_items[i].selected){
			files_items[i].name_element.click();
		}
	}
	keyon_ctrl = false;
}
// 不全选 unselected_files();
files_selection_all_button.onclick = files_items_selected_all_function;
let files_back_parent_folder_button = document.getElementById('files-back-parent-folder-button');
files_back_parent_folder_button.onclick = back_parent_folder_button.ondblclick;
let files_go_folder_button = document.getElementById('files-go-folder-button');
files_go_folder_button.onclick = function(){
	folders_items_selected_array = [];
	files_items_selected_array = [];
	get_files_folders_index++;
	let files_num = remove_files_items();
	setTimeout(function(){
		get_files_page = 0;
		get_folders_page = 0;
		get_folders_loadover = false;
		get_files_loadover = false;
		page_scroll_height_function_locked = false;
		// get_files();
	},( ( files_num + 3) * 10 / 2) + 30 );
}



function transformFTPURL(url,mydomain) {
	mydomain = mydomain.split('://')[1];
  const parsed = new URL(url);


  const subdomain = parsed.hostname.split('.')[0];

  // 提取路径部分
  const pathnameParts = parsed.pathname.split('/');
  const filename = pathnameParts.pop(); // 最后一个部分是文件名
  const hashPath = pathnameParts.filter(Boolean).join('/'); // 去掉空字符串并重新组合路径

  // 组装新 URL
  return `https://${mydomain}/${hashPath}/${subdomain}/${filename}`;
}



let files_unselection_all_button = document.getElementById('files-unselection-all-button');
files_unselection_all_button.onclick = unselected_files;
let files_delete_button = document.getElementById('files-delete-button');
files_delete_button.onclick = files_delete_items;
let files_top_button = document.getElementById('files-top-button');
let files_bottom_button = document.getElementById('files-bottom-button');
let files_reload_button = document.getElementById('files-reload-button');
files_reload_button.onclick = files_reload;
let files_reload_button_items = document.getElementById('files-reload-button-items');
files_reload_button_items.onclick = files_reload;
let files_hide_menu_button = document.getElementById('files-hide-menu-button');
// 剪切文件和文件夹的数组
let files_cat_array = [];
let folders_cat_array = [];
files_main.oncontextmenu=function(e){
	// 先隐藏右键菜单所有可点击的按钮
	unshowmenu_files();
	menu_buttons_hide();
	files_order_size_button.style.display = "block";
	files_order_name_button.style.display = "block";
	files_order_date_button.style.display = "block";
	files_upload_button.style.display = "block";
	files_create_button.style.display = "block";
	files_offline_button.style.display = "none";
	// files_offline_button.style.display = "block";
	files_selection_all_button.style.display = "block";
	files_unselection_all_button.style.display = "block";
	files_top_button.style.display = "block";
	files_bottom_button.style.display = "block";
	files_reload_button.style.display = "block";
	files_hide_menu_button.style.display = "block";
	files_client_download_button.style.display = "block";
	// 是否显示下载分享按钮
	if( folders_items_selected_array.length == 0 && files_items_selected_array.length == 1 ){
		files_download_button.style.display = "block";
		files_shell_download_button.style.display = "block";
		files_link_button.style.display = "block"; // 展示内链
		if(true||navigator.language.toLowerCase().indexOf('cn')!=-1){ // 隐藏专用链接
			files_public_link_button.style.display = "block";
		}
		files_download_button.onclick = function(){

			/*if(
				files_items_selected_array[0].url.split('fakelink').length>1
			){
				alert('您的账号存储空间占用已超200GB，已达个人普通账号上限2倍，超额账号不支持使用网页端下载文件，请使用客户端下载此文件。');
			}*/
			
			let html_element = document.createElement('div');
			html_element.innerHTML = "<p style=\"display:none;\"><a href='" + download_web_url + files_items_selected_array[0].url + "' target='_blank'>电信下载（稳定）</a></p><p><a style=\" color:#ff5050;border-bottom:2px dashed #ff5050;font-weight:bold;\" href='javascript:preview_media(\"" + files_items_selected_array[0].ftp + "\")' >预览文件</a></p><p><a style=\"    color:#ff8400;border-bottom:2px dashed #ff8400;font-weight:bold;\" href='" + files_items_selected_array[0].ftp + "&download=download.yunzhongzhuan.com' target='_blank'>下载文件</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://a.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://b.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://c.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://d.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://e.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://f.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://g.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://h.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://i.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载</a></p><p><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://j.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.a.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载 IPv6</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.b.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载 IPv6</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.c.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载 IPv6</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.d.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载 IPv6</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.e.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载 IPv6</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.f.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载 IPv6</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.g.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载 IPv6</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.h.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载 IPv6</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.i.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载 IPv6</a></p><p class=\"element-hide-display-none\"><a style=\"color:#0051c3;border-bottom:2px dashed #0051c3;font-weight:bold;\" href='https://ipv6.j.download.yunzhongzhuan.com" + files_items_selected_array[0].url + "' target='_blank'>点击下载 IPv6</a></p>";
			
			if(files_items_selected_array[0].url_localhost!=undefined){
				let p = document.createElement('p');
				let a = document.createElement('a');
				a.href = files_items_selected_array[0].url_localhost;
				a.target = "_blank";
				a.innerText = "点击下载";
				p.append(a);
				html_element.prepend(p);
			}
			/*if(files_items_selected_array[0].url_public_link != undefined && files_items_selected_array[0].url_public_link.length > 30 && files_items_selected_array[0].url_public_link.indexOf('undefined')==-1 && public_link_hostname.length > 10 ){
				let p = document.createElement('p');
				let a = document.createElement('a');
				a.href = files_items_selected_array[0].url_public_link;
				a.target = "_blank";
				a.innerText = "外链下载";
				p.append(a);
				html_element.prepend(p);
			}*/

			
			
			
			
			
			
			if(files_items_selected_array[0].offline!=undefined){
				let p = document.createElement('p');
				let a = document.createElement('a');
				a.href = files_items_selected_array[0].offline;
				a.target = "_blank";
				a.innerText = "点击下载";
				p.append(a);
				html_element.prepend(p);
			}
			
			
			
			
			
			// Qr Code
			if(
				false
			){
				let p = document.createElement('p');
				p.className = "file-download-qr-code-p";
				let img = document.createElement('img');
				img.style.width = "399px";
				img.style.height = "399px";
				img.style.backgroundColor = "#f5f5f5";
				img.style.maxHeight = "399px";
				img.style.maxWidth = "100%";
				img.style.margin = "20px auto";
				p.style.textAlign = "center";
				img.src = "//gimg2.baidu.com/gimg/app=2011&src="  + encodeURIComponent("https://api.qrserver.com/v1/create-qr-code/?size=399x399&data=" + encodeURIComponent("/welcome/?redirect_location=" + encodeURIComponent(download_web_url)+files_items_selected_array[0].url));
				p.append(img);
				html_element.append(p);
			}
			
			
			swal({
				title: "选择下载",
				content: html_element,
				icon: "success",
				buttons: true,
				closeOnClickOutside: false,
			});
			// window.open(download_web_url + files_items_selected_array[0].url);
		};

		// 命令
		files_shell_download_button.onclick = function(){
			//alert("该功能暂时关闭");
			let new_download_url = files_items_selected_array[0].ftp.replace(/"/g,'');
			let new_download_url_text = 'curl -L -X GET -H "Referer: https://www.yunzhongzhuan.com" "' + new_download_url + '" -o "' + files_items_selected_array[0].name + '"';
			show_link(new_download_url_text);
		}
		
		files_share_button.style.display = "block";
		files_share_button.onclick = function(){
			show_share(files_items_selected_array[0].share);
		};
		
		// 显示内链
		files_link_button.onclick = function(){

			alert("暂停支持。");

			return false;

			let url_array = files_items_selected_array[0].url.split('/');
			// let name = encodeURIComponent(url_array[4]);
			let name = url_array[4];
			name = name.split('?t=')[0];
			let link = public_download_web_url + '/download/' + url_array[2] + '/' + url_array[3] + '/' + name;

			let this_parent_url = '/download/' + url_array[2] + '/' + url_array[3] + '/' + name;
			let this_public_download_web_url = public_download_web_url.split('//')[1]; // yunzhongzhuan.com.publicdn.com
			
			let div = document.createElement('div');
			div.innerHTML = '<div style="color:#5c5c5c;line-height:2;word-wrap:break-word;word-break:breal-all;">   <p>获取文件公共链接成功（共享网络/仅可用于文件下载）。</p>   <p>我们支持绑定域名（无限流量/媒体播放/文件下载）。</p>   <p>https://<span style="color:blue;">' + this_public_download_web_url + '</span>' + this_parent_url + '</p><p>绑定自定义域名可用专用网络，示例（example）：</p><p>https://<span style="color:red;">www.example.com</span>' + this_parent_url + '</p></div>';
			
			swal({
				title: "公共链接",
				content: div,
				icon: "warning",
				buttons: ["取消","查看"],
				dangerMode: true,
				closeOnClickOutside: false,
			}).then((willDelete) => {
				if(willDelete){
					show_link(link);
				}
			});

			

			
			return false;
			/*if(files_items_selected_array[0].media!=undefined&&files_items_selected_array[0].media.length===38){
				show_link(download_web_url+"/download/media/"+files_items_selected_array[0].media+"/"+encodeURIComponent(files_items_selected_array[0].name)); // encodeURIComponent
				return false;
			}
			let url_array = files_items_selected_array[0].url.split('/');
			// let name = encodeURIComponent(url_array[4]);
			let name = url_array[4];
			let link = download_web_url + '/download/' + url_array[2] + '/' + url_array[3] + '/' + name;
			show_link(link);*/
		}
		// 显示外链
		files_public_link_button.onclick = function(){
			if( public_link_hostname.length < 10 || public_link_hostname == ""){
				
				if( private_link_status && private_link_hostname.length > 10 ){
					// show_link(files_items_selected_array[0].url_private_link);	

					let newURL = transformFTPURL(files_items_selected_array[0].ftp,private_link_hostname);
					show_link(newURL);

					
					return false;
				}
				
				swal({
					title: "自定义域",
					text: "您的账号未开通此项功能。\r\n我们支持绑定自定义域名且无限流量。\r\n支持播放视频/播放音频/预览图片/文件下载等应用场景。\r\n联系我们，开启此项专用功能。\r\nhttps://您的域名.com/download/123/abc/music.mp3",
					icon: "warning",
					buttons: ["取消","查看"],
					dangerMode: true,
					closeOnClickOutside: false,
				}).then((willDelete) => {
					if(willDelete){
						free_or_mini_or_big_vip.className = "";
						window.location.href="/#setting";
					}
				});
				

				
				return false;
			}
			if( files_items_selected_array[0].url_public_link.length < 30 || files_items_selected_array[0].url_public_link.indexOf('undefined')!=-1 ){
				swal({
					title: "稍等片刻",
					text: "文件正在缓存至各网络节点。",
					icon: "warning",
					buttons: true,
					dangerMode: true,
					closeOnClickOutside: false,
				});
				return false;
			}
			show_link(files_items_selected_array[0].url_public_link);
		}
		
		
		// 是否显示预览
		// if(files_items_selected_array[0].url.split('/download/media/').length==2&&files_items_selected_array[0].url.split('/download/media/')[1].split('/').length==2){
		if(
			(
				files_items_selected_array[0].media!=undefined
				&&
				(
					files_items_selected_array[0].name.indexOf('.mp4')!=-1&&files_items_selected_array[0].name.split('.mp4').length==2&&files_items_selected_array[0].name.split('.mp4')[1]==''
					||
					files_items_selected_array[0].name.indexOf('.mp3')!=-1&&files_items_selected_array[0].name.split('.mp3').length==2&&files_items_selected_array[0].name.split('.mp3')[1]==''
					||
					files_items_selected_array[0].name.indexOf('.wav')!=-1&&files_items_selected_array[0].name.split('.wav').length==2&&files_items_selected_array[0].name.split('.wav')[1]==''
					||
					files_items_selected_array[0].name.indexOf('.jpg')!=-1&&files_items_selected_array[0].name.split('.jpg').length==2&&files_items_selected_array[0].name.split('.jpg')[1]==''
					||
					files_items_selected_array[0].name.indexOf('.png')!=-1&&files_items_selected_array[0].name.split('.png').length==2&&files_items_selected_array[0].name.split('.png')[1]==''
					||
					files_items_selected_array[0].name.indexOf('.jpeg')!=-1&&files_items_selected_array[0].name.split('.jpeg').length==2&&files_items_selected_array[0].name.split('.jpeg')[1]==''
					||
					files_items_selected_array[0].name.indexOf('.gif')!=-1&&files_items_selected_array[0].name.split('.gif').length==2&&files_items_selected_array[0].name.split('.gif')[1]==''
				)
			)
			||
			true
		  ){
			files_preview_button.style.display = "block";
			files_preview_button.onclick = function(){preview_media(files_items_selected_array[0].ftp);};
		}
	}
	// 是否显示批量复制外链
	if( public_link_hostname.length < 10 || public_link_hostname == ""){}else{
		files_public_all_link_button.style.display = "block";
	}
	// 是否显示剪切按钮
	if( ( folders_items_selected_array.length + files_items_selected_array.length ) > 0 ){
		files_cat_button.style.display = "block";
		files_delete_button.style.display = "block";
		files_cat_button.style.display = "block";
	}
	// 是否显示命名按钮
	if( ( folders_items_selected_array.length + files_items_selected_array.length ) == 1 ){
		files_rename_button.style.display = "block";
	}
	// 是否显示粘贴按钮
	if( ( files_cat_array.length + folders_cat_array.length ) > 0 ){
		files_paste_button.style.display = "block";
		files_unpaste_button.style.display = "block";
	}
	// 是否显示返回
	if(get_files_folders_index>0){
		files_back_parent_folder_button.style.display = "block";
	}
	// 是否显示前进
	if(get_files_folders_array.length-1>get_files_folders_index){
		files_go_folder_button.style.display = "block";
	}
	// 获取坐标
	var e = e || window.event;
	//鼠标点的坐标
	let oX = e.clientX;
	let oY = e.clientY;
	//菜单出现后的位置
	files_main_menu.style.left = oX + "px";
	files_main_menu.style.top = oY + "px";
	files_main_menu.style.display = "block";
	// 拦截默认右键的浏览器菜单
	return false;
}
// 文件夹命名
function files_file_rename(item_id,new_name,element){
	// console.log(item_id);
	// console.log(new_name);
	// console.log('文件重命名');
	let parent_folder_id = encodeURIComponent( get_files_folders_array[get_files_folders_index] );
	item_id = encodeURIComponent( item_id );
	new_name = encodeURIComponent( new_name );
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			let ResultJSON = JSON.parse(xmlhttp.responseText);
			if(ResultJSON["status"]){
				new_name = decodeURIComponent( new_name );
				let icon_type_name = get_files_item_type_icon(new_name);
				element.icon_element.getElementsByTagName('i')[0].className = icon_type_name;
				element.name = new_name;
				element.name_element.getElementsByTagName('span')[0].innerText = new_name;
				element.date_element.getElementsByTagName('span')[0].innerText = ResultJSON["date"];
				let insert_before_element = files_items_files_items.getElementsByClassName('files-item')[0];
				insert_before_element.parentNode.insertBefore(element,insert_before_element);
			}else{
				swal({
					title: "命名失败",
					text: ResultJSON["message"],
					icon: "error",
					// buttons: true,
					// dangerMode: true,
					closeOnClickOutside: false,
				});
			}
		}
	}
	xmlhttp.open("POST",api_server_url+"/php/v4/file_rename",true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;
	xmlhttp.send("file_id=" + item_id + "&parent_folder_id=" + parent_folder_id + "&new_name=" + new_name + "&session_id=" + userinfo["session_id"] );
}
// 文件夹重命名
function files_folder_rename(item_id,new_name,element){
	// console.log(item_id);
	// console.log(new_name);
	// console.log('文件夹重命名');
	let parent_folder_id = encodeURIComponent( get_files_folders_array[get_files_folders_index] );
	item_id = encodeURIComponent( item_id );
	new_name = encodeURIComponent( new_name );
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			let ResultJSON = JSON.parse(xmlhttp.responseText);
			if(ResultJSON["status"]){
				new_name = decodeURIComponent( new_name );
				element.name = new_name;
				element.name_element.getElementsByTagName('span')[0].innerText = new_name;
				element.date_element.getElementsByTagName('span')[0].innerText = ResultJSON["date"];
				let insert_before_element = files_items_folders_items.getElementsByClassName('files-item')[0];
				insert_before_element.parentNode.insertBefore(element,insert_before_element);
			}else{
				swal({
					title: "命名失败",
					text: ResultJSON["message"],
					icon: "error",
					// buttons: true,
					// dangerMode: true,
					closeOnClickOutside: false,
				});
			}
		}
	}
	xmlhttp.open("POST",api_server_url+"/php/v4/folder_rename",true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;
	xmlhttp.send("folder_id=" + item_id + "&parent_folder_id=" + parent_folder_id + "&new_name=" + new_name +"&session_id=" + userinfo["session_id"] );
}
// 文件重命名
function files_rename_functions(){
	// 查看选中的是文件还是文件夹
	let is_files = files_items_selected_array[0]?true:false;
	let id = is_files?files_items_selected_array[0].item_id:folders_items_selected_array[0].item_id;
	let element = is_files?files_items_selected_array[0]:folders_items_selected_array[0];
	swal("新的名称", {
		content: {
			element: "input",
			attributes: {
				placeholder: "新的名称",
				value: is_files?files_items_selected_array[0].name:folders_items_selected_array[0].name,
				type: "text",
			},
		},
		closeOnClickOutside: false,
		buttons:true,
	}).then((value) => {
		if(value) {
			// 查看是文件夹还是文件
			if(is_files){
				files_file_rename(id,value,element);
			}else{
				files_folder_rename(id,value,element);
			}
		}
	});
}
files_rename_button.onclick = files_rename_functions;
// 获取当前 Datetime 本地时间
function get_datetime(){
	let dt = new Date();
	return (dt.getFullYear()+'-'+(dt.getMonth()+1)+'-'+dt.getDate()+' '+dt.getHours()+':'+dt.getMinutes()+':'+dt.getSeconds()).replace(/([\-\: ])(\d{1})(?!\d)/g,'$10$2');
}
// 粘贴文件操作
function files_paste_functions(){
	// console.log(files_cat_array);
	// console.log(folders_cat_array);
	let parent_folder_id = get_files_folders_array[get_files_folders_index];
	let folders_id_array = [0];
	let folders_cat_array_in_function = folders_cat_array;
	for(let i=0;i<folders_cat_array_in_function.length;i++){
		folders_id_array.push(folders_cat_array_in_function[i].item_id);
	}
	// console.log(folders_id_array);
	folders_id_array_string = folders_id_array.toString();
	let files_id_array = [0];
	let files_cat_array_in_function = files_cat_array;
	for(let i=0;i<files_cat_array_in_function.length;i++){
		files_id_array.push(files_cat_array_in_function[i].item_id);
	}
	files_id_array_string = files_id_array.toString();
	// console.log(files_id_array);
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4){
			// 清空剪切
			files_unpaste_button.click();
		}
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			let ResultJSON = JSON.parse(xmlhttp.responseText);
			if(ResultJSON["status"]){
				// 如果就在当前目录
				// console.log( parent_folder_id );
				// console.log( folders_cat_array_in_function );
				// console.log( files_cat_array_in_function );
				let insert_before_element_folders = files_items_folders_items.getElementsByClassName('files-item')[0];
				let insert_before_element_files = files_items_files_items.getElementsByClassName('files-item')[0];
				let folders_items = files_items_folders_items.getElementsByClassName('files-item');
				for(let i=0;i<folders_cat_array_in_function.length;i++){
					let item = folders_cat_array_in_function[i];
					let insert_before_success = false;
					for(let i2=0;i2<folders_items.length;i2++){
						let item2 = folders_items[i2];
						if(item === item2){
							item.date_element.getElementsByTagName('span')[0].innerText = get_datetime();
							insert_before_element_folders.parentNode.insertBefore(item,insert_before_element_folders);
							insert_before_success = true;
							break;
						}
					}
					if(insert_before_success){
						continue;
					}else{
						// 先查看是否已经存在
						let is_flag = false;
						for(let i=0;i<folders_items.length;i++){
							let item2 = folders_items[i];
							if(item2.item_id == item.item_id){
								item2.date_element.getElementsByTagName('span')[0].innerText = get_datetime();
								is_flag = true;
								break;
							}
						}
						if(is_flag){
							continue;
						}
						let folder_item = {
							"name":item.name,
							"id":item.item_id,
							"date":get_datetime(),
							"parent":get_files_folders_array[get_files_folders_index],
						}
						push_folders_to_files_page([folder_item],true);
					}
				}
				let files_items = files_items_files_items.getElementsByClassName('files-item');
				for(let i=0;i<files_cat_array_in_function.length;i++){
					let item = files_cat_array_in_function[i];
					let insert_before_success = false;
					for(let i2=0;i2<files_items.length;i2++){
						let item2 = files_items[i2];
						if(item === item2){
							item.date_element.getElementsByTagName('span')[0].innerText = get_datetime();
							insert_before_element_files.parentNode.insertBefore(item,insert_before_element_files);
							insert_before_success = true;
							break;
						}
					}
					if(insert_before_success){
						continue;
					}else{
						// 先查看是否已经存在
						let is_flag = false;
						for(let i=0;i<files_items.length;i++){
							let item2 = files_items[i];
							if(item2.item_id == item.item_id){
								item2.date_element.getElementsByTagName('span')[0].innerText = get_datetime();
								is_flag = true;
								break;
							}
						}
						if(is_flag){
							continue;
						}
						let file_item = {
							"name":item.name,
							"id":item.item_id,
							"date":get_datetime(),
							"size":item.size,
							"share":item.share,
							"url":item.url,
							"ftp":item.ftp,
							"media":item.media,
							"parent":get_files_folders_array[get_files_folders_index],
							"offline":item.offline,
							"offline_id":item.offline_id,
							"offline_size":item.offline_size,
							"offline_status":item.offline_status,
							"public_link":item.url_public_link,
						}
						push_files_to_files_page([file_item],true);
					}
				}
				
				/*
				for(let i=0;i<folders.length;i++){
					let item = folders[i];
					let insert_before_success = false;
					let insert_before_element = files_items_folders_items.getElementsByClassName('files-item')[0];
					for(let i=0;i<folders_cat_array_in_function.length;i++){
						let item2 = folders_cat_array_in_function[i];
						if(item === item2){
							insert_before_element.parentNode.insertBefore(item,insert_before_element);
							insert_before_success = true;
							break;
						}
					}
					if(insert_before_success){
						break;
					}else{
						// 查看是否已经
						for(let i=0;i<folders_cat_array_in_function.length;i++){
							let item2 = folders_cat_array_in_function[i];
							console.log('插入新的文件夹');
							let folder_item = {
								"name":item2.name,
								"date":item2.date,
								"date_int":0,
								"id":item2.item_id,
								"parent":get_files_folders_array[get_files_folders_index],
							}
							push_folders_to_files_page([folder_item]);
							break;
						}
					}
					*/
				files_items = files_items_files_items.getElementsByClassName('files-item');
				for(let i=0;i<files_items.length;i++){
					let item = files_items[i];
					let insert_before_success = false;
					for(let i=0;i<files_cat_array_in_function.length;i++){
						let item2 = files_cat_array_in_function[i];
						if(item === item2){
							let insert_before_element = files_items_files_items.getElementsByClassName('files-item')[0];
							insert_before_element.parentNode.insertBefore(item,insert_before_element);
							insert_before_success = true;
							break;
						}
					}
					if(insert_before_success){
						break;
					}
				}
			}else{
				swal({
					title: "粘贴失败",
					text: ResultJSON["message"],
					icon: "error",
					// buttons: true,
					// dangerMode: true,
					closeOnClickOutside: false,
				});
			}
		}
	}
	xmlhttp.open("POST",api_server_url+"/php/v4/files_paste",true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;
	xmlhttp.send("new_parent_folder_id=" + parent_folder_id + "&folders_id=" + folders_id_array_string + "&files_id=" + files_id_array_string + "&session_id=" + userinfo["session_id"] );
	// 清空剪切
	// files_unpaste_button.click();
}
files_paste_button.onclick = files_paste_functions;
// 剪切文件操作
function files_cat_functions(){
	files_cat_array = files_items_selected_array;
	folders_cat_array = folders_items_selected_array;
}
files_cat_button.onclick = files_cat_functions;
// 不粘贴按钮
function files_unpaste_functions(){
	files_cat_array = [];
	folders_cat_array = [];
}
files_unpaste_button.onclick = files_unpaste_functions;
// 返回顶部
function scroll_top(){
	window.scrollTo({
		top:0,
		behavior:'smooth',
	});
}
files_top_button.onclick = scroll_top;
let nav_top_button = document.getElementById('nav-top-button');
nav_top_button.onclick = scroll_top;
// 到达底部
function scroll_bottom(){
	window.scrollTo({
		top:100011000110001,
		behavior:'smooth',
	});
}
files_bottom_button.onclick = scroll_bottom;
// 整个网页		区域左键点击		关闭菜单
document.onclick = function(e) {
	var e = e || window.event;
	// console.log(e);
	files_main_menu.style.display = "none";
}
// 上传窗口
let uploads_window = document.getElementById('uploads-window');
uploads_window.show = false;
// 上传窗口标题
let uploads_window_title = document.getElementById('uploads-window-title');
let uploads_window_title_span_items = uploads_window_title.getElementsByTagName('span');
// 显示和隐藏上传列表的按钮
let uploads_window_show_or_hide_button = document.getElementById('uploads-window-show-or-hide-button');
uploads_window_show_or_hide_button_i = uploads_window_show_or_hide_button.getElementsByTagName('i')[0];
// 收起上传列表区域
function hide_uploads_window(){
	uploads_window.show = false;
	uploads_window.style.bottom = "-" + ( ( uploads_window.offsetHeight - uploads_window_title.offsetHeight ) ) + "px";
	uploads_window_show_or_hide_button_i.className = "fa fa-window-maximize";
}
hide_uploads_window();
// 显示上传区域
// 收起上传列表区域
function show_uploads_window(){
	uploads_window.show = true;
	uploads_window.style.bottom = "-50px";
	uploads_window_show_or_hide_button_i.className = "fa fa-minus";
}
// 上传窗口标题点击事件
uploads_window_title.onclick = function(){
	uploads_window.show = !uploads_window.show;
	if(uploads_window.show){
		show_uploads_window();
	}else{
		hide_uploads_window();
	}
}
uploads_window_show_or_hide_button.onclick = uploads_window_title.onclick;
// 关闭上传列表的按钮
let uploads_window_close_button = document.getElementById('uploads-window-close-button');
uploads_window_close_button.onclick = hide_uploads_window;
// 文件夹列表主载体
let files = document.getElementById('files');
// 隐藏文件和文件夹
let files_hide_timeout;
function files_hide(){
	try{clearTimeout(files_hide_timeout);}catch(e){};
	try{clearTimeout(files_show_timeout);}catch(e){};
	files.className = "files files-hide";
	files_hide_timeout = setTimeout(function(){
		files.style.display = "none";
	},300);
}
// 设置窗口
let setting = document.getElementById('setting');
let setting_show_timeout;
// 显示设置页面
function setting_show(){
	// 如果未登录
	if(userinfo["id"]!=undefined&&userinfo["id"]!=null&&userinfo["id"]!=''&&userinfo["qq"]!=undefined&&userinfo["qq"]!=null&&userinfo["qq"]!=''&&userinfo["username"]!=undefined&&userinfo["username"]!=null&&userinfo["username"]!=''){

	}else{
		window.location.href = "#login";
		return false;
	}
	try{clearTimeout(setting_show_timeout);}catch(e){};
	try{clearTimeout(setting_hide_timeout);}catch(e){};
	setting.style.display = "block";
	setting_show_timeout = setTimeout(function(){
		setting.className = "setting";
	},1);
	window.location.href = "#setting";

}
// 隐藏设置窗口
let setting_hide_timeout;
function setting_hide(){
	try{clearTimeout(setting_show_timeout);}catch(e){};
	try{clearTimeout(setting_hide_timeout);}catch(e){};
	setting.className = "setting setting-hide";
	setting_hide_timeout = setTimeout(function(){
		setting.style.display = "none";
	},300);
};




// 赞助窗口
let sharecenter_window = document.getElementById('sharecenter');
let sharecenter_window_show_timeout;
// 显示设置页面
function sharecenter_window_show(){
	// 如果未登录
	if(userinfo["id"]!=undefined&&userinfo["id"]!=null&&userinfo["id"]!=''&&userinfo["qq"]!=undefined&&userinfo["qq"]!=null&&userinfo["qq"]!=''&&userinfo["username"]!=undefined&&userinfo["username"]!=null&&userinfo["username"]!=''){

	}else{
		window.location.href = "#sharecenter";
		// return false;
		// 没登录也给显示
	}
	try{clearTimeout(sharecenter_window_show_timeout);}catch(e){};
	try{clearTimeout(sharecenter_window_hide_timeout);}catch(e){};
	sharecenter_window.style.display = "block";
	sharecenter_window_show_timeout = setTimeout(function(){
		sharecenter_window.className = "sharecenter";
	},1);
	window.location.href = "#sharecenter";

}
// 隐藏赞助窗口
let sharecenter_window_hide_timeout;
function sharecenter_window_hide(){
	try{clearTimeout(sharecenter_window_show_timeout);}catch(e){};
	try{clearTimeout(sharecenter_window_hide_timeout);}catch(e){};
	sharecenter_window.className = "sharecenter sharecenter-hide";
	sharecenter_window_hide_timeout = setTimeout(function(){
		sharecenter_window.style.display = "none";
	},300);
};







// 赞助窗口
let pay_cny_window = document.getElementById('pay-cny');
let pay_cny_window_show_timeout;
// 显示设置页面
function pay_cny_window_show(){
	// 如果未登录
	if(userinfo["id"]!=undefined&&userinfo["id"]!=null&&userinfo["id"]!=''&&userinfo["qq"]!=undefined&&userinfo["qq"]!=null&&userinfo["qq"]!=''&&userinfo["username"]!=undefined&&userinfo["username"]!=null&&userinfo["username"]!=''){

	}else{
		window.location.href = "#pay-cny";
		return false;
	}
	try{clearTimeout(pay_cny_window_show_timeout);}catch(e){};
	try{clearTimeout(pay_cny_window_hide_timeout);}catch(e){};
	pay_cny_window.style.display = "block";
	pay_cny_window_show_timeout = setTimeout(function(){
		pay_cny_window.className = "pay-cny";
	},1);
	window.location.href = "#pay-cny";
	// nav_pay_cny_button.click();

	// showpay();

}
// 隐藏赞助窗口
let pay_cny_window_hide_timeout;
function pay_cny_window_hide(){
	try{clearTimeout(pay_cny_window_show_timeout);}catch(e){};
	try{clearTimeout(pay_cny_window_hide_timeout);}catch(e){};
	pay_cny_window.className = "pay-cny pay-cny-hide";
	pay_cny_window_hide_timeout = setTimeout(function(){
		pay_cny_window.style.display = "none";
	},300);
};



// 显示文件和文件夹
let files_show_timeout;
function files_show(){
	// 如果未登录
	
	if(userinfo["id"]!=undefined&&userinfo["id"]!=null&&userinfo["id"]!=''&&userinfo["qq"]!=undefined&&userinfo["qq"]!=null&&userinfo["qq"]!=''&&userinfo["username"]!=undefined&&userinfo["username"]!=null&&userinfo["username"]!=''){
		/*if(upload_window_iframe_element.src != api_upload_web_url){
			show_upload_full_screen_mask = false;
			upload_window_iframe_element.src = api_upload_web_url;
		}*/
		if(!show_upload_full_screen_mask){
			// set_upload_cdn_cloudflare();
		}
	}else{
		window.location.href = "#login";
		return false;
	}
	try{clearTimeout(files_show_timeout);}catch(e){};
	try{clearTimeout(files_hide_timeout);}catch(e){};
	files.style.display = "block";
	files_show_timeout = setTimeout(function(){
		files.className = "files";
	},1);
	window.location.href = "#files";
	nav_files_button.click();
	if(
		(!get_folders_loadover&&get_folders_page==0)
		||
		(!get_files_loadover&&get_files_page==0)
	){
		// files_bottom_button.click();
		// files_reload();
		get_files();
	}
	
}
// 默认先隐藏全部选项
let menu_buttons_items = files_main_menu.getElementsByClassName('files-main-menu-item');
function menu_buttons_hide(){
	for(let i=0;i<menu_buttons_items.length;i++){
		let item = menu_buttons_items[i];
		item.style.display = "none";
	}
}
// 登录窗口
let login = document.getElementById('login');
// 隐藏登录窗口
let login_hide_timeout;
function login_hide(){
	try{clearTimeout(login_hide_timeout);}catch(e){};
	try{clearTimeout(login_show_timeout);}catch(e){};
	login.className = "login login-hide";
	login_hide_timeout = setTimeout(function(){
		login.style.display = "none";
	},300);
};
// 显示登录窗口
let login_show_timeout;
function login_show(){
	try{clearTimeout(login_hide_timeout);}catch(e){};
	try{clearTimeout(login_show_timeout);}catch(e){};
	login.style.display = "block";
	login_show_timeout = setTimeout(function(){
		login.className = "login";
	},1);
	window.location.href = "#login";
}
// 注册窗口
let register = document.getElementById('register');
// 隐藏注册窗口
let register_hide_timeout;
function register_hide(){
	try{clearTimeout(register_hide_timeout);}catch(e){};
	try{clearTimeout(register_show_timeout);}catch(e){};
	register.className = "register register-hide";
	register_hide_timeout = setTimeout(function(){
		register.style.display = "none";
	},300);
};

// 显示文件分享
let sharefile_show_timeout;
function sharefile_show(){
	try{clearTimeout(sharefile_show_timeout);}catch(e){};
	try{clearTimeout(sharefile_hide_timeout);}catch(e){};
	sharefile.style.display = "block";
	sharefile_show_timeout = setTimeout(function(){
		sharefile.className = "sharefile";
	},3);
	// window.location.href = "#sharefile";
}
// 隐藏用户协议
let sharefile_hide_timeout;
function sharefile_hide(){
	try{clearTimeout(sharefile_hide_timeout);}catch(e){};
	try{clearTimeout(sharefile_show_timeout);}catch(e){};
	sharefile.className = "sharefile sharefile-hide";
	sharefile_hide_timeout = setTimeout(function(){
		sharefile.style.display = "none";
	},300);
}
// 显示用户协议
let terms_of_services_show_timeout;
function terms_of_services_show(){
	try{clearTimeout(terms_of_services_show_timeout);}catch(e){};
	try{clearTimeout(terms_of_services_hide_timeout);}catch(e){};
	terms_of_services.style.display = "block";
	terms_of_services_show_timeout = setTimeout(function(){
		terms_of_services.className = "terms-of-services";
	},3);
	window.location.href = "#terms-of-services";
}
// 隐藏用户协议
let terms_of_services_hide_timeout;
function terms_of_services_hide(){
	try{clearTimeout(terms_of_services_show_timeout);}catch(e){};
	try{clearTimeout(terms_of_services_hide_timeout);}catch(e){};
	terms_of_services.className = "terms-of-services terms-of-services-hide";
	terms_of_services_hide_timeout = setTimeout(function(){
		terms_of_services.style.display = "none";
	},300);
}
// 显示注册窗口
let register_show_timeout;
function register_show(){
	try{clearTimeout(register_hide_timeout);}catch(e){};
	try{clearTimeout(register_show_timeout);}catch(e){};
	register.style.display = "block";
	register_show_timeout = setTimeout(function(){
		register.className = "register";
	},3);
	window.location.href = "#register";
}
// 找回密码窗口
let forget_password = document.getElementById('forget-password');
// 隐藏找回密码窗口
let forget_password_hide_timeout;
function forget_password_hide(){
	try{clearTimeout(forget_password_hide_timeout);}catch(e){};
	try{clearTimeout(forget_password_show_timeout);}catch(e){};
	forget_password.className = "forget-password forget-password-hide";
	forget_password_hide_timeout = setTimeout(function(){
		forget_password.style.display = "none";
	},300);
};
// 显示找回密码窗口
let forget_password_show_timeout;
function forget_password_show(){
	try{clearTimeout(forget_password_hide_timeout);}catch(e){};
	try{clearTimeout(forget_password_show_timeout);}catch(e){};
	forget_password.style.display = "block";
	forget_password_show_timeout = setTimeout(function(){
		forget_password.className = "forget-password";
	},3);
	window.location.href = "#forget-password";
}
// 隐藏所有页面
function pages_hide(){
	files_hide();
	login_hide();
	register_hide();
	terms_of_services_hide();
	forget_password_hide();
	sharefile_hide();
	setting_hide();
	pay_cny_window_hide();
	sharecenter_window_hide();
}
// 隐藏各个页面
// pages_hide();
// 导航栏全部按钮
let nav_items_item_items = nav.getElementsByClassName('nav-item');
// 去除导航栏按钮底色选中底色
function nav_buttons_unset_selected(){
	for(let i=0;i<nav_items_item_items.length;i++){
		let item = nav_items_item_items[i];
		item.className = "nav-item";
	}
}

// 捐助我们
function showpay(){

	let content_element = document.createElement('div');
	// content_element.innerHTML = '<img src="/img/pay_wx_zfb_qq_2.png" />';
	content_element.innerHTML = '<img src="/img/wechat_alipay.gif" />';
	swal({
		text:"赞助我们，以减轻延续服务所需的成本。\r\n直接下载，没有任何套路没有任何广告。",
		content: content_element,
		// buttons: true,
		// dangerMode: true,
		buttons: ["取消","确定"],
		closeOnClickOutside: false,
	}).then((willDelete) => {
		return false;
		/*
		//if (willDelete) {
		if(1==1){
			
		//}else{
			swal({
				text:"尊敬的用户，您好。\r\n以下通知内容面向团队账号与商业账号用户。\r\n云中转成立于2020年12月10日，稳定运行服务至今，已为用户提供了长期的免费、优质、稳定、无广告的文件保存、文件下载服务，我们欢迎有更大使用场景需求的用户升级您的个人账号为团队账号、商业账号。\r\n个人账号（免费版）可用512GB存储空间，由云中转提供免费、安全、稳定的大型文件保存服务，可以分享文件，下载文件（不限流量、不限速度、无广告），仅需0元/月。\r\n团队账号（专业版）可用512GB+1.5TB=2TB存储空间，由云中转提供安全、稳定的大型文件保存服务，可以分享文件、下载文件（不限流量、不限速度），仅需29元/月。\r\n商业账号（商业版）可用自定义二级域名作为文件下载地址（自定义二级域名格式示例：https://download.example.com、https://xiazai.123456.com、https://cdn.zhangsan.com）（自定义域名宽带网络费用99元/月，接入云中转文件下载服务器同款质量网络线路，不限流量、不限速度、无广告，应用场景演示示例：https://www.yunzhongzhuan.com/downloads/）、在线媒体播放服务（支持复制文件媒体专用链接，实现在线视频、音频、图片等多媒体文件的播放与展示）、2TB+自由存储空间（超出2TB之后，每1TB收费20元/月），由云中转提供一对一客服、安全、稳定的大型文件保存服务，可以分享文件、下载文件、通过您的网站链接文件下载地址，实现自定义域名作为您的网站文件本地下载功能。\r\n假设用户“张三”的个人账号开通成为商业账号，使用自定义域名作为文件下载地址（自定义域名宽带网络费用99元/月，例如：https://cdn.zhangsan.com）在云中转系统中保存了3.83TB文件（超出2TB之后，每1TB收费20元/月，“张三”使用存储空间超出1.83TB，按照超出2TB计算，存储空间费用统计：2*20=40元/月），总计：99+40=139元/月，即使用户“张三”停止使用商业账号，账号内文件不会被删除，全部文件将继续长期保留，“张三”以后计划重新使用时，可以继续激活自定义域名与媒体文件专用链接。\r\n如有问题，请您随时联系我们（详情：https://www.yunzhongzhuan.com/welcome/#mail-talk-position），感谢您的支持与理解。",

				// content: content_element,
				// buttons: true,
				// dangerMode: true,
				buttons: ["取消","确定"],
				closeOnClickOutside: false,
			});
		}*/
	});
}







// 关注微信公众号
let wechatPublicMessageShow = false;
function wechatPublicMessage(){
	
	let content_element = document.createElement('div');
	content_element.innerHTML = '<img src="/img/iQrCode.png" />';
	swal({
		text:"手机微信扫码二维码关注云中转公众号",
		content: content_element,
		// buttons: true,
		// dangerMode: true,
		buttons: ["取消","确定"],
		closeOnClickOutside: false,
	}).then((willDelete) => {
		wechatPublicMessageShow = true;
		return false;
	});
	
}

















// 获取容量
let usedsize;
let usedsize_unit;
function get_usedsize_function(){
	
	if(navigator.language.toLowerCase().indexOf('cn')==-1){return false;}

	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			usedsize = xmlhttp.responseText;
			usedsize_unit = get_size_unit(usedsize);
			files_search_input.placeholder = "搜索文件（" + usedsize_unit + "）";
			files_search_input.title = "搜索文件（" + usedsize_unit + "）";
			/*if(usedsize >= 10 * 1024 * 1024 * 1024){
				if(window.location.href.indexOf("#files")!=-1&&files.className.indexOf("files-hide")==-1){
					show_love_pay();
				}
				nav_love_me_button.onclick = show_love_pay;
			}*/

			// 通过非法修改前端，强制提交数据，后端判断为异常，将直接永久封号。
			// 如果容量超额，禁止继续上传。
		 	/*if( usedsize >= 2*100*1024*1024*1024 && public_link_status==false ){
		  		swal('您的账号存储空间占用已超200GB，已达个人普通账号上限2倍。\r\n企业用户不限容量，并支持绑定自定义下载域名。\r\n示例：https://您的域名.com/download/123/abc/music.mp3\r\n详情：https://www.yunzhongzhuan.com/welcome/');
		  		// free_or_mini_or_big_vip.className = "";
		  		// window.location.href="/#setting";
			}*/


			
		}
	}
	xmlhttp.open("POST",api_server_url+"/php/v4/get_usedsize",true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;
	xmlhttp.send("post=1&session_id="+userinfo["session_id"]);
	
}


// 是否支持外链
let public_link_status = false;
let private_link_status = false;


let show_love_pay_locked = false;

// 显示捐助
function show_love_pay(){
	
	return false;

	if(public_link_status||private_link_status){
		return false;
	}
	
	if(show_love_pay_locked){
		return false;
	}
	

	// 成立时间 2020-12-10 00:00:00
	let y = 2020;
	let m = 12;
	let d = 10;
	let t = 1607529600;
	
	let y_n = Math.floor((t_system_online-1607529600)/60/60/24/365);
	let m_n = Math.floor(((t_system_online-1607529600)/60/60/24/(365/12))%12);

	swal({
		title: "支持我们",
		// text: "亲爱的用户，您好！\r\n云中转自"+y+"年"+m+"月"+d+"日创立以来，已经陪伴全体用户走过"+y_n+"年"+m_n+"个月之久，每周7x24小时在线服务永远为您准备。\r\n目前，您的账号下总共保存了"+get_size_unit(usedsize)+"的文件数据，假设有50%的文件是重复的（即其他用户也保存着一份与您同样的文件），云中转系统中也仍然为您保存着至少"+get_size_unit((usedsize/2))+"-"+get_size_unit((usedsize))+"的文件数据，按照Backblaze B2官方0.005美元/GB/月（5.12美元/TB/月）的超低存储价格计算，云中转每月约至少为您保存的文件数据支付着"+(((usedsize/2)/1024/1024/1024)*0.005).toFixed(2)+"-"+(((usedsize)/1024/1024/1024)*0.005).toFixed(2)+"美元（约"+(((usedsize/2)/1024/1024/1024)*0.0336).toFixed(2)+"-"+(((usedsize)/1024/1024/1024)*0.0336).toFixed(2)+"元人民币）的数据存储经济成本，这并未包括上传/下载所使用到的网络宽带/流量、服务器资源、运维等其他方面投入的经济成本。\r\n如果您对我们的服务感到满意，希望您能够捐助以支持我们！",
		text: "亲爱的用户，您好！\r\n云中转自"+y+"年"+m+"月"+d+"日创立以来，已经陪伴全体用户走过"+y_n+"年"+m_n+"个月，您的账号下总共保存了"+get_size_unit(usedsize)+"的文件数据。\r\n云中转正在进行一期扩容，计划新增20盘16TB容量大小的机械硬盘。\r\n如果您对我们的服务感到满意，希望您能够支持并捐助我们！",
		icon: "warning",
		buttons: ["拒绝","支持"],
		dangerMode: true,
		closeOnClickOutside: false,
	}).then((willDelete) => {
		if (willDelete) {
			showpay();
		}else{
			show_love_pay_locked = true;
		}
	});


}


// 是否 qq 扫码登录
let is_qq_qr_code_login = false;

function showlove(){
	
	

	if(
		is_qq_qr_code_login
	){
		nav_reset_password_button.click();
		return false;
	}
	
	try{
		if(navigator.language.toLowerCase().indexOf('cn')==-1){
			return false;
		}
	}catch(e){
		
	};
	
	/*if(navigator.language.toLowerCase().indexOf('cn')!=-1){
		let swal_html = document.createElement('div');
		swal_html.innerHTML = "<p>云中转（国际）欢迎您！</p><p>是否访问云中转（中国）？</p><p>云中转（中国）网络已经优化，文件传输速度稳定。</p><p>云中转（中国）官方网站：<a href='//www.yzzpan.com/#files'>http://yzzpan.com</a></p><p>云中转（国际）官方网站：<a href='javascript:;'>http://yunzhongzhuan.com</a></p>";
		swal({
			title: "中国访问？",
			content: swal_html,
			icon: "warning",
			buttons: true,
			dangerMode: true,
			closeOnClickOutside: false,
		}).then((willDelete) => {
			if (willDelete) {
				// let new_url = window.location.href.replace(/yunzhongzhuan.com/g,'yzzpan.com');
				let new_url = "https://www.yzzpan.com/#login";
				window.location.href=new_url;
				return false;
			}else{
				get_usedsize_function();
			}
		});
	}*/
	
	return false;

	swal({
		// title: "系统通知",
		text: "云中转自2020年12月10日成立以来，始终免费为用户服务。\r\n我们始终坚持初心，一心要做一个简单好用的云盘。\r\n用户可以免登录直接点击就能下载你所分享的文件。\r\n这里没有广告，也没有限速，也不限容量，文件永久有效。\r\n如果你认为我们产品服务做得很好，希望你能够支持我们。\r\n我们将尽最大的努力去优化和维护，带来更好的用户体验。",
		// icon: "warning",
		buttons: ["朕不支持","支持一下"],
		dangerMode: true,
		closeOnClickOutside: false,
	}).then((willDelete) => {
		if (willDelete) {
			showpay();
		}
	});
}

// 退出登录
function logout(){
	if(
		window.location.href.indexOf('#login')!=-1
		||
		window.location.href.indexOf('#register')!=-1
		||
		window.location.href.indexOf('#forget-password')!=-1
		||
		window.location.href.indexOf('#reset-password')!=-1
	){
		return false;
	}

	if(userinfo["id"]==undefined||isNaN(userinfo["id"])||userinfo["id"]==''||userinfo["id"]==null||userinfo["qq"]==undefined||isNaN(userinfo["qq"])||userinfo["qq"]==''||userinfo["qq"]==null||userinfo["username"]==undefined||userinfo["username"]==''||userinfo["username"]==null){
		swal({
			title: "请先登录",
			text: "请先登录。",
			icon: "info",
			// buttons: true,
			// dangerMode: true,
			button: "继续",
			closeOnClickOutside: false,
		}).then((willDelete) => {
			if (willDelete) {
				if(login.className.indexOf('login-hide')!=-1){
					pages_hide();
				}
				login_show();
			}
		});
		return false;
	}



	swal({
		title: "退出登录",
		text: "您是否要退出登录？",
		icon: "warning",
		buttons: true,
		dangerMode: true,
		closeOnClickOutside: false,
	}).then((willDelete) => {
		if (willDelete) {
			let xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4 && xmlhttp.status==200){
					let ResultJSON = JSON.parse(xmlhttp.responseText);
					if(ResultJSON["status"]){
						let session_id = userinfo["session_id"];
						userinfo = {};
						userinfo["session_id"] = session_id;
						uploads_window_close_button.click();
						nav_buttons_unset_selected();
						if(login.className.indexOf('login-hide')!=-1){
							pages_hide();
						}
						login_show();
						nav_hide();
						remove_files_items();
						get_files_folders_array = ["0"];
						get_files_folders_index = 0;
						get_userinfo();
					}else{
					}
				}
			}
			xmlhttp.open("POST",api_server_url+"/php/v4/exit",true);
			xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			xmlhttp.withCredentials = true;
			xmlhttp.send("session_id="+userinfo["session_id"]);
		}
	});
};
// 文件列表按钮
let nav_files_button = document.getElementById('nav-files-button');
let nav_home_button = document.getElementById('nav-home-button');
nav_home_button.onclick = function(){
	if(navigator.language.toLowerCase().indexOf('cn')==-1){
		return false;
	}
	window.open('/welcome/');
}
// 如果正在验证微信，窗口还没关闭
let wechat_bind_auto_click_login_button_timeout;
function wechat_bind_auto_click_login_button(){
	let swal_element = document.getElementsByClassName('swal-overlay--show-modal');
	if(swal_element.length>0){
		login_input_button_login.click();
	};
}










// 加载上传域名，提前获取IP
let cdn_cgi_trace_upload_locked = false;
function cdn_cgi_trace_upload(){
	if(cdn_cgi_trace_upload_locked){
		return false;
	}
	
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			// console.log(xmlhttp.responseText);
			cdn_cgi_trace_upload_locked = true;
			if(userinfo["id"]!=undefined&&userinfo["id"]!=null&&userinfo["id"]!=''&&userinfo["qq"]!=undefined&&userinfo["qq"]!=null&&userinfo["qq"]!=''&&userinfo["username"]!=undefined&&userinfo["username"]!=null&&userinfo["username"]!=''){
				setTimeout(set_upload_cdn_cloudflare,200);
			}
		}
		if(xmlhttp.readyState==4){
			setTimeout(cdn_cgi_trace_upload,100);
		}
	}
	xmlhttp.onerror = function(){
		setTimeout(cdn_cgi_trace_upload,100);
	}
	xmlhttp.open("GET",upload_web_url + "/404.html",true);
	xmlhttp.send();
}










// 登录按钮
let login_input_button_login = document.getElementById('login-input-button-login');
login_input_button_login.onclick = function(){
	let username = encodeURIComponent( login_input_username.value );
	let password = encodeURIComponent( login_input_password.value );
	if(username.length<1||password.length<1){
		swal({
			title: "请先输入",
			text: "请输入账号和密码进行登录。",
			icon: "warning",
			// buttons: true,
			// dangerMode: true,
			closeOnClickOutside: false,
		});
		return false;
	}
	upload_lock = true;
	upload_lock_title = "加载组件";
	upload_lock_text = "上传组件正在加载，请您稍等。";
	upload_lock_icon = "error";
	upload_lock_buttons = undefined;
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			let ResultJSON = JSON.parse(xmlhttp.responseText);
			if(ResultJSON["status"]){
				// 清空所有输入框的内容
				let inputs = document.getElementsByTagName('input');
				for(let i=0;i<inputs.length;i++){
					inputs[i].value = "";
				}
				// 登录成功
				// 尝试关闭提示框
				let swal_element = document.getElementsByClassName('swal-overlay--show-modal');
				if(swal_element.length>0){
					document.getElementsByClassName('swal-button--cancel')[0].click();
					document.getElementsByClassName('swal-button--cancel')[1].click();
				}
				userinfo["session_id"] = ResultJSON["session_id"];
				get_userinfo();
				// pages_hide();
				// nav_files_button.click();
				setTimeout(showlove,500);
				setTimeout(cdn_cgi_trace_upload,100);
			}else{
				// 如果是账号密码不正确
				if(ResultJSON["status_code"]==403){
					let content_element = document.createElement('div');
					content_element.innerHTML = '<img src="/img/wechat_bind_1.png" />';
					// 要求绑定微信
					swal({
						title: "微信验证",
						text: ResultJSON["message"],
						icon: "warning",
						content: content_element,
						// buttons: true,
						// dangerMode: true,
						buttons: true,
						closeOnClickOutside: false,
					});
					// 如果窗口还没关闭
					wechat_bind_auto_click_login_button_timeout = setTimeout(wechat_bind_auto_click_login_button,3000);
				}else{
					swal({
						title: "登录失败",
						text: ResultJSON["message"],
						icon: "error",
						// buttons: true,
						// dangerMode: true,
						closeOnClickOutside: false,
					});
				}
			}
		}
	}
	xmlhttp.open("POST",api_server_url+"/php/v4/login",true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;
	xmlhttp.send("username="+username+"&password="+password+"&session_id="+userinfo["session_id"]);
	return false;
	/*
	swal({
		title: "登录成功",
		text: "欢迎光临！",
		icon: "success",
		buttons: true,
		dangerMode: true,
		closeOnClickOutside: false,
	});
	pages_hide();
	nav_files_button.click();
	*/
};
function set_nav_selected_index(that){
	nav_buttons_unset_selected();
	that.className = "nav-item nav-item-selected";
}
// 给导航栏上点击事件
for(let i=0;i<nav_items_item_items.length;i++){
	let item = nav_items_item_items[i];
	item.onclick = function(){

		// 如果是主页按钮
		if(this.id == "nav-home-button"){
			window.open('/welcome/');
			return false;
		}
		// 如果是切换语言
		if(this.id == "language-setting-button"){
			// console.log('切换语言');
			return false;
		}
		if(this.id == "nav-top-button"){
			scroll_top();
			return false;
		}
		if(this.id == "nav-exit-button"){
			logout();
			return false;
		}
		if(this.id == "hide-nav-button"){
			nav_hide();
			return false;
		}
		if(
			this.id == "nav-files-reload-button"
		){
			files_reload();
			return false;
		}
		if(
			this.id == "nav-files-wechat-public-button"
		){
			wechatPublicMessage();
			return false;
		}
		if(this.id == "nav-sharecenter-button"){ // 无需登录也可以查看分享社区 SHARECENTER

			setTimeout(set_nav_selected_index,10,this); // 设置下标高亮
			if(window.location.href.indexOf("#sharecenter")!=-1&&files.className.indexOf("sharecenter-hide")==-1){
				return false;
			}
			if(window.location.href.indexOf("#sharecenter-hide")!=-1){
				pages_hide();
			}
			sharecenter_window_show();
			return false;
		}
		/*if(this.id == "nav-pay-cny-button"){
			pay_cny();
			return false;
		}*/
		// 如果未登录 不做处理
		if(userinfo["id"]==undefined||isNaN(userinfo["id"])||userinfo["id"]==''||userinfo["id"]==null||userinfo["qq"]==undefined||isNaN(userinfo["qq"])||userinfo["qq"]==''||userinfo["qq"]==null||userinfo["username"]==undefined||userinfo["username"]==''||userinfo["username"]==null){
			swal({
				title: "请先登录",
				text: "请先登录。",
				icon: "info",
				// buttons: true,
				// dangerMode: true,
				button: "继续",
				closeOnClickOutside: false,
			}).then((willDelete) => {
				if (willDelete) {
					if(login.className.indexOf('login-hide')!=-1){
						pages_hide();
					}
					login_show();
				}
			});
			return false;
		}
		if(this.id == "nav-files-button"){
			setTimeout(set_nav_selected_index,10,this); // 设置下标高亮
			if(window.location.href.indexOf("#files")!=-1&&files.className.indexOf("files-hide")==-1){
				return false;
			}
			
			if(files.className.indexOf('files-hide')!=-1){
				pages_hide();
			}
			files_show();
		}else if(this.id == "nav-setting-button"){ // 如果是设置按钮
			setTimeout(set_nav_selected_index,10,this); // 设置下标高亮
			if(setting.className.indexOf("setting-hide")!=-1){
				// return false;
				if(setting.className.indexOf('setting-hide')!=-1){
					pages_hide();
				}
				setting_show();
			}
		}else if(this.id == "nav-sharecenter-button"){ // 如果是赞助按钮
			setTimeout(set_nav_selected_index,10,this); // 设置下标高亮
			if(sharecenter_window.className.indexOf("sharecenter-hide")!=-1){
				// return false;
				if(sharecenter_window.className.indexOf('sharecenter-hide')!=-1){
					pages_hide();
				}
				sharecenter_window_show();
			}
			// showpay();
		}else if(this.id == "nav-pay-cny-button"){ // 如果是赞助按钮
			setTimeout(set_nav_selected_index,10,this); // 设置下标高亮
			if(pay_cny_window.className.indexOf("pay-cny-hide")!=-1){
				// return false;
				if(pay_cny_window.className.indexOf('pay-cny-hide')!=-1){
					pages_hide();
				}
				pay_cny_window_show();
			}
			// showpay();
		}else if(this.id == "nav-files-reload-button"){ // 如果是刷新按钮
			files_reload();
			return false;
		}else if(this.id == "nav-files-wechat-public-button"){ // 如果是刷新按钮
			wechatPublicMessage();
			return false;
		}else if(this.id == "nav-client-for-windows-button"){ // 如果是客户端按钮
			window.open('/downloads/');
			return false;
		}else{
			pages_hide();
		}
		
		// 如果 id 是文件 那就显示文件
		/*if(this.id == "nav-files-button"){
			files_show();
		}*/
	}
}
// 跳转至注册页面
let login_input_register_page_button = document.getElementById('login-input-register-page-button');
// let show_register_page_timeout;
login_input_register_page_button.onclick = function(){
	if(register.className.indexOf('register-hide')!=-1){
		pages_hide();
	}
	register_show();
	// return false;
	// try{clearTimeout(show_register_page_timeout);}catch(e){};
	// show_register_page_timeout = setTimeout(register_show,3);
}
// 从注册页面返回登录页面
let register_page_show_login_button = document.getElementById('register-page-show-login-button');
register_page_show_login_button.onclick = function(){

	if(window.history.length>3){ // 是否可返回上一页
		window.history.back();
	}else{
		
		if(login.className.indexOf('login-hide')!=-1){
			pages_hide();
		}
		login_show();

	}

	
}
// 跳转至找回密码页面
let login_input_forget_password_page_button = document.getElementById('login-input-forget-password-page-button');
let login_input_forget_password_page_button_2 = document.getElementById('login-input-forget-password-page-button-2');
// let show_forget_password_page_timeout;
login_input_forget_password_page_button.onclick = function(){
	if(forget_password.className.indexOf('forget-password-hide')!=-1){
		pages_hide();
	}
	forget_password_show();
}
login_input_forget_password_page_button_2.onclick = login_input_forget_password_page_button.onclick;
// 从找回密码页面返回登录页面
let forget_password_page_show_login_button = document.getElementById('forget-password-page-show-login-button');
forget_password_page_show_login_button.onclick = function(){
	

	if(window.history.length>3){ // 是否可返回上一页
		window.history.back();
	}else{
		
		if(login.className.indexOf('login-hide')!=-1){
			pages_hide();
		}
		login_show();

	}

	
}
// 登录输入密码框
let login_input_password = document.getElementById('login-input-password');
// 显示登录密码
let login_input_show_password_button = document.getElementById('login-input-show-password-button');
login_input_show_password_button.onclick = function(){
	if(login_input_password.type=="password"){
		login_input_password.type = "text";
		this.className = "fa fa-eye";
	}else{
		login_input_password.type = "password";
		this.className = "fa fa-eye-slash";
	}
}
// 登录窗口 输入账号 输入框
let login_input_username = document.getElementById('login-input-username');
// 接口服务器地址
// let api_server_url = "https://apiyunzhongzhuancom.vercel.app";
// let api_server_url = "https://cac8e712.cdn.ucloud.com.cn";
// let api_server_url = "https://www.yunzhongzhuan.com";
// let api_server_url="https://176368e2.nip.io";
// let api_server_url = "https://23.99.104.226.nip.io";
// let api_server_url = "https://server.yunzhongzhuan.com.cdn.cloudflare.net";
// let api_server_url = "https://applicationprogramminginterface.yzzpan.com";
let api_server_url = window.location.protocol + "//cae45776685ba.cname.frontwize.com"; // REPLACE ALL CTRL+H CTRL + H // c34a02aaeb0d6.cname.frontwize.com
// let api_server_url = "https://yunzhongzhuan.com.huaweicloud.com.5a7567ec.cdnhwc8.cn";
// let api_server_url = "https://hcdnw103.c.cdnhwc2.com";
if(navigator.language.toLowerCase().indexOf('cn')==-1){
	// api_server_url = window.location.protocol + "//apiyunzhongzhuancom.vercel.app";
	api_server_url = window.location.protocol + "//api.yunzhongzhuan.com"; // api.yunzhongzhuan.com
	// api_server_url = window.location.protocol + "//mfm.yunzhongzhuan.com";
}
// let api_server_url = "https://ddos-guard-net-apiyunzhongzhuancom.vercel.app";
let not_vip_upload_file_size = 1000 * 1024 * 1024; // 非会员用户上传文件最大允许1GB
// 如果用户试图修改JS绕过限制，在上传文件后，系统将匹配文件大小，异常则永久封号

// 余额
let setting_user_span_money = document.getElementById('setting-user-span-money');
let setting_user_span_vipdatetime = document.getElementById('setting-user-span-vipdatetime');
let setting_user_div_vipdatetime_warning_01 = document.getElementById('setting-user-div-vipdatetime-warning-01');
let setting_user_div_vipdatetime_warning_02 = document.getElementById('setting-user-div-vipdatetime-warning-02');
setting_user_div_vipdatetime_warning_02.onclick = function(){
	let option_text = "开通";
	let pricing = "0.5";
	if(userinfo["vipstatus"]){
		option_text = "续费";
		pricing = "0.5";
	}
	if(userinfo["vipstatus"]&&userinfo["money"]>=50){

	}else if(!userinfo["vipstatus"]&&userinfo["money"]>=50){

	}else{
		swal({
			title: "余额不足",
			text: option_text + "1天会员需要" + pricing + "元，您的余额不足！",
			icon: "error",
			buttons: ["取消","充值"],
			closeOnClickOutside: false,
			dangerMode: true,
		}).then((willDelete) => {
		  if (willDelete) {
		    show_qqpay();
		  }
		});
		return false;
	}
	swal({
		title: option_text + "确认",
		text: "是否" + option_text + "1天会员？\r\n仅需" + pricing + "元！",
		icon: "warning",
		buttons: ["取消",option_text],
		closeOnClickOutside: false,
		dangerMode: true,
	}).then((willDelete) => {
	  if (willDelete) {
	    update_vip_function(1);
	  }
	});
}


function update_vip_function(day_int){
	xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			let ResultJSON = JSON.parse(xmlhttp.responseText);
			if(ResultJSON["status"]){
				get_userinfo();
				swal({
					title: "系统提示",
					text: ResultJSON["message"],
					icon: "success",
					button: true,
					closeOnClickOutside: false,
					dangerMode: true,
				});
			}else{
				swal({
					title: "系统提示",
					text: ResultJSON["message"],
					icon: "error",
					buttons: ["取消","充值"],
					closeOnClickOutside: false,
					dangerMode: true,
				}).then((willDelete) => {
				  if (willDelete) {
				    show_qqpay();
				  }
				});
			}
		}
	}
	xmlhttp.open("POST",api_server_url+"/php/v4/update_vip",true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;
	xmlhttp.send("day="+day_int+"&session_id="+userinfo["session_id"]);
}

let setting_user_div_vipdatetime_warning_03 = document.getElementById('setting-user-div-vipdatetime-warning-03');
setting_user_div_vipdatetime_warning_03.onclick = function(){
	let option_text = "开通";
	let pricing = "3";
	if(userinfo["vipstatus"]){
		option_text = "续费";
		pricing = "3";
	}
	if(userinfo["vipstatus"]&&userinfo["money"]>=300){

	}else if(!userinfo["vipstatus"]&&userinfo["money"]>=300){

	}else{
		swal({
			title: "余额不足",
			text: option_text + "1周会员需要" + pricing + "元，您的余额不足！",
			icon: "error",
			buttons: ["取消","充值"],
			closeOnClickOutside: false,
			dangerMode: true,
		}).then((willDelete) => {
		  if (willDelete) {
		    show_qqpay();
		  }
		});
		return false;
	}
	swal({
		title: option_text + "确认",
		text: "是否" + option_text + "1周会员？\r\n仅需" + pricing + "元！",
		icon: "warning",
		buttons: ["取消",option_text],
		closeOnClickOutside: false,
		dangerMode: true,
	}).then((willDelete) => {
	  if (willDelete) {
	    update_vip_function(7);
	  }
	});
}


let setting_user_div_vipdatetime_warning_04 = document.getElementById('setting-user-div-vipdatetime-warning-04');
setting_user_div_vipdatetime_warning_04.onclick = function(){
	let option_text = "开通";
	let pricing = "10";
	if(userinfo["vipstatus"]){
		option_text = "续费";
		pricing = "10";
	}
	if(userinfo["vipstatus"]&&userinfo["money"]>=1000){

	}else if(!userinfo["vipstatus"]&&userinfo["money"]>=1000){

	}else{
		swal({
			title: "余额不足",
			text: option_text + "1月会员需要" + pricing + "元，您的余额不足！",
			icon: "error",
			buttons: ["取消","充值"],
			closeOnClickOutside: false,
			dangerMode: true,
		}).then((willDelete) => {
		  if (willDelete) {
		    show_qqpay();
		  }
		});
		return false;
	}
	swal({
		title: option_text + "确认",
		text: "是否" + option_text + "1月会员？\r\n仅需" + pricing + "元！",
		icon: "warning",
		buttons: ["取消",option_text],
		closeOnClickOutside: false,
		dangerMode: true,
	}).then((willDelete) => {
	  if (willDelete) {
	    update_vip_function(31);
	  }
	});
}


let setting_user_div_vipdatetime_warning_05 = document.getElementById('setting-user-div-vipdatetime-warning-05');
setting_user_div_vipdatetime_warning_05.onclick = function(){
	let option_text = "开通";
	let pricing = "28";
	if(userinfo["vipstatus"]){
		option_text = "续费";
		pricing = "28";
	}
	if(userinfo["vipstatus"]&&userinfo["money"]>=2800){

	}else if(!userinfo["vipstatus"]&&userinfo["money"]>=2800){

	}else{
		swal({
			title: "余额不足",
			text: option_text + "1季会员需要" + pricing + "元，您的余额不足！",
			icon: "error",
			buttons: ["取消","充值"],
			closeOnClickOutside: false,
			dangerMode: true,
		}).then((willDelete) => {
		  if (willDelete) {
		    show_qqpay();
		  }
		});
		return false;
	}
	swal({
		title: option_text + "确认",
		text: "是否" + option_text + "1季会员？\r\n仅需" + pricing + "元！",
		icon: "warning",
		buttons: ["取消",option_text],
		closeOnClickOutside: false,
		dangerMode: true,
	}).then((willDelete) => {
	  if (willDelete) {
	    update_vip_function(93);
	  }
	});
}

let setting_user_div_vipdatetime_warning_06 = document.getElementById('setting-user-div-vipdatetime-warning-06');
setting_user_div_vipdatetime_warning_06.onclick = function(){
	let option_text = "开通";
	let pricing = "88";
	if(userinfo["vipstatus"]){
		option_text = "续费";
		pricing = "88";
	}
	if(userinfo["vipstatus"]&&userinfo["money"]>=8800){

	}else if(!userinfo["vipstatus"]&&userinfo["money"]>=8800){

	}else{
		swal({
			title: "余额不足",
			text: option_text + "1年会员需要" + pricing + "元，您的余额不足！",
			icon: "error",
			buttons: ["取消","充值"],
			closeOnClickOutside: false,
			dangerMode: true,
		}).then((willDelete) => {
		  if (willDelete) {
		    show_qqpay();
		  }
		});
		return false;
	}
	swal({
		title: option_text + "确认",
		text: "是否" + option_text + "1年会员？\r\n仅需" + pricing + "元！",
		icon: "warning",
		buttons: ["取消",option_text],
		closeOnClickOutside: false,
		dangerMode: true,
	}).then((willDelete) => {
	  if (willDelete) {
	    update_vip_function(365);
	  }
	});
}

let setting_user_div_vipdatetime_warning_07 = document.getElementById('setting-user-div-vipdatetime-warning-07');
setting_user_div_vipdatetime_warning_07.onclick = function(){
	let option_text = "开通";
	let pricing = "388";
	if(userinfo["vipstatus"]){
		option_text = "续费";
		pricing = "388";
	}
	if(userinfo["vipstatus"]&&userinfo["money"]>=38800){

	}else if(!userinfo["vipstatus"]&&userinfo["money"]>=38800){

	}else{
		swal({
			title: "余额不足",
			text: option_text + "5年会员需要" + pricing + "元，您的余额不足！",
			icon: "error",
			buttons: ["取消","充值"],
			closeOnClickOutside: false,
			dangerMode: true,
		}).then((willDelete) => {
		  if (willDelete) {
		    show_qqpay();
		  }
		});
		return false;
	}
	swal({
		title: option_text + "确认",
		text: "是否" + option_text + "5年会员？\r\n仅需" + pricing + "元！",
		icon: "warning",
		buttons: ["取消",option_text],
		closeOnClickOutside: false,
		dangerMode: true,
	}).then((willDelete) => {
	  if (willDelete) {
	    update_vip_function(1825);
	  }
	});
}


let setting_user_div_vipdatetime_warning_08 = document.getElementById('setting-user-div-vipdatetime-warning-08');
setting_user_div_vipdatetime_warning_08.onclick = function(){
	let option_text = "开通";
	let pricing = "688";
	if(userinfo["vipstatus"]){
		option_text = "续费";
		pricing = "688";
	}
	if(userinfo["vipstatus"]&&userinfo["money"]>=68800){

	}else if(!userinfo["vipstatus"]&&userinfo["money"]>=68800){

	}else{
		swal({
			title: "余额不足",
			text: option_text + "10年会员需要" + pricing + "元，您的余额不足！",
			icon: "error",
			buttons: ["取消","充值"],
			closeOnClickOutside: false,
			dangerMode: true,
		}).then((willDelete) => {
		  if (willDelete) {
		    show_qqpay();
		  }
		});
		return false;
	}
	swal({
		title: option_text + "确认",
		text: "是否" + option_text + "10年会员？\r\n仅需" + pricing + "元！",
		icon: "warning",
		buttons: ["取消",option_text],
		closeOnClickOutside: false,
		dangerMode: true,
	}).then((willDelete) => {
	  if (willDelete) {
	    update_vip_function(3650);
	  }
	});
}




let use_qq_qr_code_login = false;
let need_show_qq_qr_code_login_swal = false;
function show_verify_code(){

	if(
		userinfo["qq_login_id"] == undefined
		&&
		userinfo["wechat_login_id"]!=undefined
	){
		if(
			window.location.href.indexOf('#login')==-1
			&&
			window.location.href.indexOf('#register')==-1
			&&
			window.location.href.indexOf('#forget-password')==-1
		){
			return false;	
		}
	}
	
	let html_element = document.createElement('div');
	let verify_img_url = 'https://cae45776685ba.cname.frontwize.com/php/v4/verify_code.php?session_id=' + userinfo["session_id"] + '&t=' + new Date().getTime();
	// html_element.innerHTML = '<img class="verify-pass-img" src="https://gimg2.baidu.com/gimg/app=2011&src='+ encodeURIComponent(verify_img_url) + '"/><br/><br/><input placeholder="请输入图片中12位验证文字！" autocomplete="off" class="swal-content__input verify-pass-input">';
	html_element.innerHTML = '<img class="verify-pass-img" src="'+ verify_img_url + '"/><br/><br/><input placeholder="请输入图片中12位验证文字！" autocomplete="off" class="swal-content__input verify-pass-input">';
	if( false && navigator.language.toLowerCase().indexOf('cn')==-1){
		let new_src = html_element.getElementsByClassName('verify-pass-img')[0].src.replace(/verify_code.php/g,'verify_code');
		// new_src = new_src.replace(api_server_url,'https://apiyunzhongzhuancom.vercel.app');
		new_src = new_src.replace(api_server_url,window.location.protocol+'//api.yunzhongzhuan.com');//api.yunzhongzhuan.com
		html_element.getElementsByClassName('verify-pass-img')[0].src = new_src;
	}
	swal({
		title: "请先验证！",
		icon: "warning",
		text: "请输入图片中12位验证文字！\r\n直接点击图片即可刷新。",
		content: html_element,
		closeOnClickOutside: false,
		buttons:["放弃","提交"],
		dangerMode: true,
	}).then((willDelete) => {
		if(willDelete){
			let verify_pass_input_items = document.getElementsByClassName('verify-pass-input');
			if(verify_pass_input_items.length>0){
				let verify_pass_input = verify_pass_input_items[0];
				let verify_pass_input_value = verify_pass_input.value;
				if(verify_pass_input_value.length>0&&verify_pass_input_value.length==12){
					swal({
						title: "正在验证",
						text: "正在验证",
						icon: "info",
						dangerMode: true,
						closeOnClickOutside: false,
					}).then((willDelete) => {
						// pass
					});
					let xmlhttp = new XMLHttpRequest();
					xmlhttp.onreadystatechange=function(){
						if(xmlhttp.readyState==4 && xmlhttp.status==200){
							let ResultJSON = JSON.parse(xmlhttp.responseText);
							if(ResultJSON["status"]){
								if(
									ResultJSON["verify_pass"] != undefined
									&&
									ResultJSON["verify_pass"] == true
								){
									need_show_qq_qr_code_login_swal = true;
									/*if(window.location.href.indexOf('/#forget-password')!=-1){
										need_show_qq_qr_code_login_swal = false; // 找回密码页面无需显示扫码登陆
									}*/
								}
								get_userinfo();
							}else{
								swal({
									title: "输入错误！",
									text: "重新输入！",
									icon: "error",
									dangerMode: true,
									closeOnClickOutside: false,
								}).then((willDelete) => {
									show_verify_code();
								});
							}
						}
					}
					if(navigator.language.toLowerCase().indexOf('cn')==-1){
						// xmlhttp.open("GET","https://apiyunzhongzhuancom.vercel.app/php/v4/verify_code?session_id="+userinfo["session_id"]+"&submit_verify_code="+verify_pass_input_value+"&t="+new Date().getTime(),true);
						xmlhttp.open("GET",window.location.protocol+"//api.yunzhongzhuan.com/php/v4/verify_code?session_id="+userinfo["session_id"]+"&submit_verify_code="+verify_pass_input_value+"&t="+new Date().getTime(),true);
						// api.yunzhongzhuan.com
					}else{
						xmlhttp.open("GET",api_server_url+"/php/v4/verify_code.php?session_id="+userinfo["session_id"]+"&submit_verify_code="+verify_pass_input_value+"&t="+new Date().getTime(),true);
					}
					xmlhttp.withCredentials = true;
					xmlhttp.send();
					
				}else{
					show_verify_code();
				}
			}
		}
	});
	
	let verify_pass_img_items = document.getElementsByClassName('verify-pass-img');
	if(verify_pass_img_items.length>0){
		let verify_pass_img = verify_pass_img_items[0];
		verify_pass_img.onclick = function(){
			if( false && navigator.language.toLowerCase().indexOf('cn')==-1){
				// this.src = 'https://apiyunzhongzhuancom.vercel.app/php/v4/verify_code?session_id=' + userinfo["session_id"] + '&t=' + new Date().getTime();
				this.src = window.location.protocol+'//api.yunzhongzhuan.com/php/v4/verify_code?session_id=' + userinfo["session_id"] + '&t=' + new Date().getTime();
				// api.yunzhongzhuan.com
			}else{
				// this.src = "https://gimg2.baidu.com/gimg/app=2011&src=" + encodeURIComponent('https://cae45776685ba.cname.frontwize.com/php/v4/verify_code.php?session_id=' + userinfo["session_id"] + '&t=' + new Date().getTime());
				this.src = 'https://cae45776685ba.cname.frontwize.com/php/v4/verify_code.php?session_id=' + userinfo["session_id"] + '&t=' + new Date().getTime();
			}
		}
	}

}

// 系统时间戳
let t_system_online = 1657535600;

let nav_setting_button = document.getElementById('nav-setting-button');
let nav_pay_cny_button = document.getElementById('nav-pay-cny-button');
let nav_sharecenter_button = document.getElementById('nav-sharecenter-button');
let setting_user_span_wechat_name = document.getElementById('setting-user-span-wechat-name');
let setting_user_span_username = document.getElementById('setting-user-span-username');
let setting_user_span_qq = document.getElementById('setting-user-span-qq');
let setting_user_div_wechat_profile_picture = document.getElementById('setting-user-div-wechat-profile-picture');
let setting_user_div_qq_profile_picture = document.getElementById('setting-user-div-qq-profile-picture');
let get_userinfo_locked = false;
// 获取用户信息
function get_userinfo(){



	// 判断是否在社区 SHARECENTER 页面
	if(window.location.href.indexOf("#sharecenter")!=-1&& ( 1 || sharecenter_window.className.indexOf("sharecenter-hide")!=-1 ) ){
		// sharecenter_window_show();


		//nav_sharecenter_button.click();
		if(sharecenter_window.className.indexOf('sharecenter-hide')!=-1){
			pages_hide();
		}






		sharecenter_window_show();


		// files_reload();// 位于分享页面而去刷新文件，为了让用户选择文件!!!
		// return false;
	}



	// 判断是否在文件分享页面
	// if(window.location.href.indexOf("#sharefile")!=-1&&sharefile.className.indexOf("sharefile-hide")!=-1){
	if(window.location.href.indexOf("#sharefile")!=-1){
		if(sharefile.className.indexOf('sharefile-hide')!=-1){
			pages_hide();
		}
		sharefile_show();
		// return false;
	}




	// 判断是否在用户协议页面
	// if((window.location.href.indexOf("#terms-of-services")!=-1||window.location.href.indexOf("#terms")!=-1)&&terms_of_services.className.indexOf("terms-of-services-hide")!=-1){
	if(window.location.href.indexOf("#terms-of-services")!=-1||window.location.href.indexOf("#terms")!=-1){
		if(terms_of_services.className.indexOf('terms-of-services-hide')!=-1){
			pages_hide();
		}
		terms_of_services_show();
		
	}
	

	// 判断是否在登录页面
	if(window.location.href.indexOf("#login")!=-1&&login.className.indexOf("login-hide")!=-1){

		if(login.className.indexOf('login-hide')!=-1){
			pages_hide();
			login_show();
		}

	}


	// 判断是否在注册页面
	// if(window.location.href.indexOf("#register")!=-1&&register.className.indexOf("register-hide")!=-1){
	if(window.location.href.indexOf("#register")!=-1){
		if(register.className.indexOf('register-hide')!=-1){
			pages_hide();
		}
		register_show();
	}



	// 判断是否在找回密码页面
	// if((window.location.href.indexOf("#forget-password")!=-1||window.location.href.indexOf("#reset-password")!=-1)&&forget_password.className.indexOf("forget-password-hide")!=-1){
	if(window.location.href.indexOf("#forget-password")!=-1||window.location.href.indexOf("#reset-password")!=-1){
		if(forget_password.className.indexOf('forget-password-hide')!=-1){
			pages_hide();
		}
		forget_password_show();
	}













	if( download_media_locked || ( userinfo["id"]!=undefined && userinfo["id"]!=null && userinfo["id"]!='' && userinfo["qq"]!=undefined && userinfo["qq"]!=null && userinfo["qq"]!='' && userinfo["username"]!=undefined && userinfo["username"]!=null && userinfo["username"]!='' )  ){
		return false;
	}
	if(get_userinfo_locked){
		return false;
	}
	get_userinfo_locked = true;
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		/*if(xmlhttp.readyState==4 && (xmlhttp.status==403 || xmlhttp.status==0 ) && api_server_url.indexOf('ddos-guard-net')!=-1 ){
			// window.open('https://ddos-guard-net-apiyunzhongzhuancom.vercel.app/yunzhongzhuan.com');
			let html_element = document.createElement('div');
			html_element.innerHTML = "<p>你的网络请求已经触发防火墙，请查看并通过CDN防护验证。</p>";
			console.log(html_element);
			swal({
				title: "非法请求",
				content: html_element,
				icon: "warning",
				buttons: ["取消","查看"],
				closeOnClickOutside: false,
			}).then((willDelete) => {
				if (willDelete) {
					window.open('https://ddos-guard-net-apiyunzhongzhuancom.vercel.app/yunzhongzhuan.com');
				}
			});
			return false;
		}*/
		if(xmlhttp.readyState==4){
			setTimeout(function(){
				get_userinfo_locked = false;
			},200);
			
		}
		if(xmlhttp.readyState==4 && xmlhttp.status==200){



			// 加载分享
			setTimeout(GetSharecenterContents,1500);


			
			let ResultJSON = JSON.parse(xmlhttp.responseText);

			if(
				ResultJSON["qq_login_id"] == undefined
			){
				userinfo["qq_login_id"] = undefined;
			}
			
			// 系统时间戳
			try{
				t_system_online = ResultJSON["t"];
			}catch(e){};
			
			
			if(ResultJSON["session_id"] != undefined && ResultJSON["session_id"] != null && ResultJSON["session_id"] != "" ){
				userinfo["session_id"] = ResultJSON["session_id"];
				let cookie_date = new Date(2100,10,01);
				document.cookie = "PHPSESSID=" + userinfo["session_id"] + ";path=/;expires="+cookie_date.toUTCString();
			}
			if(ResultJSON["status"]){

				userinfo["id"] = ResultJSON["id"];
				userinfo["qqdecimal"] = ResultJSON["qq"];
				userinfo["private_link"] = ResultJSON["private_link"];
				userinfo["public_link"] = ResultJSON["public_link"];
				userinfo["username"] = ResultJSON["username"];
				let InternalUserinfoArray = {
					"id":ResultJSON["id"],
					"qq":ResultJSON["qq"],
					"username":ResultJSON["username"],
				}
				UserinfoArrayOfUserID[ResultJSON["id"]] = InternalUserinfoArray;
				UserinfoArrayOfQQ[ResultJSON["qq"]] = InternalUserinfoArray;
				UserinfoArrayOfUsername[ResultJSON["username"]] = InternalUserinfoArray;


				nav_love_me_button.style.display = "block";
				
				get_usedsize_function();
				
				// 如果支持外链
				if(ResultJSON["public_link"]!=undefined&&ResultJSON["public_link"]==true){
					public_link_status = true;
				}
				
				// 如果专属定制外链地址
				if(ResultJSON["private_link"]!=undefined&&ResultJSON["private_link"]==true){
					private_link_status = true;
				}
				
				// 如果信用不好
				if(ResultJSON["money"] < 0){
					upload_file_max_size = not_vip_upload_file_size = 100 * 1024 * 1024;
					free_or_mini_or_big_vip.className="";
				}else{
					upload_file_max_size = not_vip_upload_file_size = 1000 * 1024 * 1024;
				}
				
				if( ResultJSON["upload_file_max_size"] != undefined ){
					upload_file_max_size = not_vip_upload_file_size = ResultJSON["upload_file_max_size"];
					uploads_window_title_span_items[0].innerHTML = "（单个文件最大" + get_size_unit(ResultJSON["upload_file_max_size"]) + "）";
					uploads_window_title_span_items[0].title = "（单个文件最大" + get_size_unit(ResultJSON["upload_file_max_size"]) + "）";
				}
				
				if(ResultJSON["money"] < -100){
					upload_file_max_size = 0;
				}
				
				setTimeout(cdn_cgi_trace_upload,100);
				
				
				
				// qq 扫码登录 确认
				if(
					ResultJSON["low_password"] != undefined
					&&
					ResultJSON["low_password"] == true
				){
					is_qq_qr_code_login = true;
				}
				
				
				use_qq_qr_code_login = false;
				setTimeout(query_all_files_sum_size,100);
				// 关闭提示框
				let swal_element = document.getElementsByClassName('swal-overlay--show-modal');
				if(swal_element.length>0 && window.location.href.indexOf("#setting")==-1){
					try{
					document.getElementsByClassName('swal-button--cancel')[0].click();
					}catch(e){};
					try{
					document.getElementsByClassName('swal-button--cancel')[1].click();
					}catch(e){};
				}
				userinfo["wechat_login_id"] = undefined;
				// 加载上传页面
				/*upload_window_iframe_element.src = api_upload_web_url;
				function fun_1(){
					if(window.location.href.indexOf("#files")!=-1&&files.className.indexOf("files-hide")==-1){
						if(upload_window_iframe_element.src != api_upload_web_url){
							upload_window_iframe_element.src = api_upload_web_url;
						}
					}
				}
				setTimeout(fun_1,10);*/
				
				let my_profile_url_json = get_github_or_qq_or_other_userinfo_profile(ResultJSON["qq"]);
				document.getElementsByClassName('sharecenter-content-new-sharefile-userinfo-profile')[0].getElementsByTagName('img')[0].src = my_profile_url_json["PROFILEURL"];
				userinfo["qq"] = parseInt(ResultJSON["qq"]);
				setting_user_span_qq.innerText = userinfo["qq"];
				setting_user_div_qq_profile_picture.style.backgroundImage = "url('https://q1.qlogo.cn/g?b=qq&nk=" + userinfo["qq"] + "&s=640')";
				userinfo["wechat_name"] = ResultJSON["wechat_name"];
				setting_user_span_wechat_name.innerText = userinfo["wechat_name"];
				userinfo["wechat_profile_picture"] = ResultJSON["wechat_profile_picture"];
				setting_user_div_wechat_profile_picture.style.backgroundImage = "url('" + userinfo["wechat_profile_picture"] + "')";
				
				document.getElementsByClassName('sharecenter-content-new-sharefile-userinfo-username')[0].getElementsByTagName('span')[0].innerText = userinfo["username"].replace('Github.'+my_profile_url_json["GITHUBID"]+".",'');
				setting_user_span_username.innerText = userinfo["username"];
				userinfo["money"] = ResultJSON["money"]; // ("1000"/100).toFixed(2)
				setting_user_span_money.innerText = (userinfo["money"]/100).toFixed(2);
				userinfo["vipdatetime"] = ResultJSON["vipdatetime"];
				setting_user_span_vipdatetime.innerText = userinfo["vipdatetime"];
				userinfo["vipstatus"] = ResultJSON["vipstatus"];
				if(!userinfo["vipstatus"]){
					setting_user_div_vipdatetime_warning_01.style.display = "block";
					setting_user_div_vipdatetime_warning_02.innerText = "点击开通1天会员，仅需0.5元！";
					setting_user_div_vipdatetime_warning_03.innerText = "点击开通1周会员，仅需3元！";
					setting_user_div_vipdatetime_warning_04.innerText = "点击开通1月会员，仅需10元！";
					setting_user_div_vipdatetime_warning_05.innerText = "点击开通1季会员，仅需28元！";
					setting_user_div_vipdatetime_warning_06.innerText = "点击开通1年会员，仅需88元！";
					setting_user_div_vipdatetime_warning_07.innerText = "点击开通5年会员，仅需388元！";
					setting_user_div_vipdatetime_warning_08.innerText = "点击开通10年会员，仅需688元！";
				}else{
					setting_user_div_vipdatetime_warning_01.style.display = "none";
					setting_user_div_vipdatetime_warning_02.innerText = "点击续费1天会员，仅需0.5元！";
					setting_user_div_vipdatetime_warning_03.innerText = "点击续费1周会员，仅需3元！";
					setting_user_div_vipdatetime_warning_04.innerText = "点击续费1月会员，仅需10元！";
					setting_user_div_vipdatetime_warning_05.innerText = "点击续费1季会员，仅需28元！";
					setting_user_div_vipdatetime_warning_06.innerText = "点击续费1年会员，仅需88元！";
					setting_user_div_vipdatetime_warning_07.innerText = "点击续费5年会员，仅需388元！";
					setting_user_div_vipdatetime_warning_08.innerText = "点击续费10年会员，仅需688元！";
				}
				// 登录完成 跳转至文件页面
				// nav_files_button.click();
				// 如果处于登录页面 跳转至文件页面
				// 判断是否在登录页面
				if(window.location.href.indexOf("#login")!=-1&&login.className.indexOf("login-hide")==-1){
					let files_num = remove_files_items();
					setTimeout(function(){
						nav_files_button.click();
						if(files.className.indexOf('files-hide')!=-1){
							pages_hide();
						}
						files_show();
						window.location.href = "#files";
						get_folders_loadover = false;
						get_files_loadover = false;
						get_folders_page = 0;
						get_files_page = 0;
						folders_items_selected_array = [];
						files_items_selected_array = [];
						get_files_folders_index = 0;
						get_files_folders_array = ["0"];
						// get_files();
						/*function fun_2(){
							set_upload_window_iframe_element();
						}
						setTimeout(fun_2,10);*/
					},( ( files_num + 3) * 10 / 2 ) + 30 );
					// setTimeout(showlove,500);
					setTimeout(get_files,2233);
					return false;
				}
				if(window.location.href.indexOf("#files")!=-1&&files.className.indexOf("files-hide")==-1){
					nav_files_button.click();
					return false;
				}
			}else{

				
				if(userinfo["qq_login_id"]==undefined||userinfo["qq_login_id"]=="0"||userinfo["qq_login_id"]==0||userinfo["qq_login_id"].length<5){
					userinfo["qq_login_id"] = undefined;
				}
				
				is_qq_qr_code_login = false;
				
				if(
					ResultJSON["verify_pass"]!=undefined
					&&
					ResultJSON["verify_pass"] == false
				){
					// show_verify_code();
				}else{
					// 跳转至登录页面
					// nav_buttons_unset_selected();
					// forget_password_page_show_login_button.click();
					userinfo["wechat_login_id"] = ResultJSON["wechat_login_id"];
					userinfo["qq_login_id"] = ResultJSON["qq_login_id"];
					if(userinfo["qq_login_id"]==undefined||userinfo["qq_login_id"]=="0"||userinfo["qq_login_id"]==0||userinfo["qq_login_id"].length<5){
							userinfo["qq_login_id"] = undefined;
							setTimeout(get_userinfo,1000);

					}else{
						if(
							need_show_qq_qr_code_login_swal == true
						 ){
							
							need_show_qq_qr_code_login_swal = false;
							setTimeout(function(){login_input_button_qq_login.click()},100);
						
						}
					}
				}
			}
			
			if(
				ResultJSON["verify_pass"]!=undefined
				&&
				ResultJSON["verify_pass"] == false
			){
				if(window.location.href.indexOf("#login")!=-1){
					if(
						use_qq_qr_code_login
					){
						show_verify_code();
					}
				}
			}
			
			// 判断是否在设置页面
			if(window.location.href.indexOf("#setting")!=-1&& ( 1 || setting.className.indexOf("setting-hide")!=-1 ) ){
				// pages_hide();
				// setting_show();
				nav_setting_button.click();
				return false;
			}




			// 判断是否在赞助页面
			if(window.location.href.indexOf("#pay-cny")!=-1&& ( 1 || pay_cny_window.className.indexOf("pay-cny-hide")!=-1 ) ){
				// pages_hide();
				// setting_show();
				nav_pay_cny_button.click();
				return false;
			}




			// 判断是否在社区 SHARECENTER 页面
			if(window.location.href.indexOf("#sharecenter")!=-1&& ( 1 || sharecenter_window.className.indexOf("sharecenter-hide")!=-1 ) ){
				sharecenter_window_show();
				nav_sharecenter_button.click();
				// files_reload();// 位于分享页面而去刷新文件，为了让用户选择文件!!!
				return false;
			}

			
			// 判断是否在文件分享页面
			// if(window.location.href.indexOf("#sharefile")!=-1&&sharefile.className.indexOf("sharefile-hide")!=-1){
			if(window.location.href.indexOf("#sharefile")!=-1){
				if(sharefile.className.indexOf('sharefile-hide')!=-1){
					pages_hide();
				}
				sharefile_show();
				return false;
			}
			// 判断是否在用户协议页面
			// if((window.location.href.indexOf("#terms-of-services")!=-1||window.location.href.indexOf("#terms")!=-1)&&terms_of_services.className.indexOf("terms-of-services-hide")!=-1){
			if(window.location.href.indexOf("#terms-of-services")!=-1||window.location.href.indexOf("#terms")!=-1){
				if(terms_of_services.className.indexOf('terms-of-services-hide')!=-1){
					pages_hide();
				}
				terms_of_services_show();
				return false;
			}
			
			// 判断是否在登录页面
			if(window.location.href.indexOf("#login")!=-1&&login.className.indexOf("login-hide")!=-1){
				// 如果已经登录
				if( userinfo["id"]!=undefined && userinfo["id"]!=null && userinfo["id"]!='' && userinfo["qq"]!=undefined && userinfo["qq"]!=null && userinfo["qq"]!='' && userinfo["username"]!=undefined && userinfo["username"]!=null && userinfo["username"]!='' ){
					if(files.className.indexOf('files-hide')!=-1){
						pages_hide();
					}
					files_show();
					setTimeout(showlove,500);
					return false;
				}
				get_userinfo();
				if(login.className.indexOf('login-hide')!=-1){
					pages_hide();
					login_show();
				}
					
				return false;
			}
			// 判断是否在注册页面
			// if(window.location.href.indexOf("#register")!=-1&&register.className.indexOf("register-hide")!=-1){
			if(window.location.href.indexOf("#register")!=-1){
				if(register.className.indexOf('register-hide')!=-1){
					pages_hide();
				}
				register_show();
				if(
					ResultJSON["verify_pass"]!=undefined
					&&
					ResultJSON["verify_pass"]==false
				){
					show_verify_code();
				}
				return false;
			}
			// 判断是否在找回密码页面
			// if((window.location.href.indexOf("#forget-password")!=-1||window.location.href.indexOf("#reset-password")!=-1)&&forget_password.className.indexOf("forget-password-hide")!=-1){
			if(window.location.href.indexOf("#forget-password")!=-1||window.location.href.indexOf("#reset-password")!=-1){
				if(forget_password.className.indexOf('forget-password-hide')!=-1){
					pages_hide();
				}
				forget_password_show();
				return false;
			}


			// 判断是否在文件页面
			if(window.location.href.indexOf("#files")!=-1&&files.className.indexOf("files-hide")!=-1){
				if( userinfo["id"]!=undefined && userinfo["id"]!=null && userinfo["id"]!='' && userinfo["qq"]!=undefined && userinfo["qq"]!=null && userinfo["qq"]!='' && userinfo["username"]!=undefined && userinfo["username"]!=null && userinfo["username"]!='' ){
				}else{
					window.location.href="#login";
					return false;
				};
				
				if(files.className.indexOf('files-hide')!=-1){
					pages_hide();
				}
				files_show();
				return false;
			}


			if( userinfo["id"]!=undefined && userinfo["id"]!=null && userinfo["id"]!='' && userinfo["qq"]!=undefined && userinfo["qq"]!=null && userinfo["qq"]!='' && userinfo["username"]!=undefined && userinfo["username"]!=null && userinfo["username"]!='' ){
				window.location.href = "#files";
				if(files.className.indexOf('files-hide')!=-1){
					pages_hide();
				}
				files_show();
			}else{
				if(userinfo["qq_login_id"]==undefined||userinfo["qq_login_id"]=="0"||userinfo["qq_login_id"]==0||userinfo["qq_login_id"].length<5){
					userinfo["qq_login_id"] = undefined;
					return false;
				}
				if(window.location.href.indexOf("#login")==-1){
				    window.location.href="#login";
				}
			}
		}
	}
	xmlhttp.open("POST",api_server_url+"/php/v4/userinfo",true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;
	xmlhttp.send("post=1&session_id="+userinfo["session_id"]);
}
// 重置密码
let nav_reset_password_button = document.getElementById('nav-reset-password-button');
nav_reset_password_button.onclick = function(){
	// 如果未登录 不做处理
	if(userinfo["id"]==undefined||isNaN(userinfo["id"])||userinfo["id"]==''||userinfo["id"]==null||userinfo["qq"]==undefined||isNaN(userinfo["qq"])||userinfo["qq"]==''||userinfo["qq"]==null||userinfo["username"]==undefined||userinfo["username"]==''||userinfo["username"]==null){
		swal({
			title: "请先登录",
			text: "请先登录。",
			icon: "info",
			// buttons: true,
			// dangerMode: true,
			button: "继续",
			closeOnClickOutside: false,
		}).then((willDelete) => {
			if (willDelete) {
				if(login.className.indexOf('login-hide')!=-1){
					pages_hide();
				}
				login_show();
			}
		});
		return false;
	}

	if(
		userinfo["qqdecimal"] != undefined
		&&
		userinfo["qqdecimal"] != ""
		&&
		userinfo["qqdecimal"] > 1 && userinfo["qqdecimal"] < 2 // Github
		&&
		true
	){
		swal({
			title: "系统提示",
			text: "通过Github登录的账号不支持设置密码！",
			icon: "error",
			dangerMode: true,
			closeOnClickOutside: false,
		}).then((willDelete) => {
			// pass
		});
		return false;
	}


	
	let html_element = document.createElement('div');
	html_element.innerHTML = '<input placeholder="新的密码" type="password" autocomplete="off" class="swal-content__input nav-reset-password-input">';
	swal({
        	title: "重置密码",
		icon: "warning",
		text: "您的云中转帐号是："+userinfo["username"]+"\r\n账号绑定QQ号码："+userinfo["qq"]+"\r\n如果您是通过扫描二维码的方式登录。\r\n系统自动为您创建了高度复杂的密码。\r\n即使您已忘记密码仍可通过扫码登录。\r\n现在您可以重新设置您的云中转密码。",
		content: html_element,
		closeOnClickOutside: false,
		buttons:["朕先不改","提交重置"],
        	dangerMode: true,
	}).then((willDelete) => {
	  if (willDelete) {
		let nav_reset_password_input = document.getElementsByClassName('nav-reset-password-input');
		if(nav_reset_password_input[0]!=undefined){
			let new_password = nav_reset_password_input[0].value;
			if(new_password!=undefined&&new_password!=null&&new_password!=""&&new_password.indexOf(' ')==-1){
				new_password = encodeURIComponent(new_password);
				let xmlhttp = new XMLHttpRequest();
				xmlhttp.onreadystatechange=function(){
					if(xmlhttp.readyState==4 && xmlhttp.status==200){
						let ResultJSON = JSON.parse(xmlhttp.responseText);
						if(ResultJSON["status"]){
							swal({
								title: "重置成功",
								text: ResultJSON["message"],
								icon: "success",
								dangerMode: true,
								closeOnClickOutside: false,
							});
						}else{
							swal({
								title: "重置失败",
								text: ResultJSON["message"],
								icon: "error",
								dangerMode: true,
								closeOnClickOutside: false,
							});
						}
					}
				}
				xmlhttp.open("POST",api_server_url+"/php/v4/nav_reset_password",true);
				xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
				xmlhttp.withCredentials = true;
				xmlhttp.send("new_password=" + new_password + "&session_id=" + userinfo["session_id"] );
			}
		}
	  }
	});
}

// 支持我们
let nav_love_me_button = document.getElementById('nav-love-me-button');
if(navigator.language.toLowerCase().indexOf('cn')==-1){
	nav_love_me_button.remove();
}else{
	nav_love_me_button.onclick = showpay;
}


function set_upload_cdn_cloudflare(){
	if(upload_window_iframe_element.src != api_upload_web_url){
		show_upload_full_screen_mask = false;
		upload_window_iframe_element.src = api_upload_web_url;
		window.addEventListener('beforeunload', (event) => {
			// 显示确认对话框
			event.preventDefault();
			// 为了兼容处理，Chrome需要设置returnValue
			event.returnValue = '';
		});
	}
}




// 充值时获取最新状态
let qqpay_get_userinfo_stop = false;
function qqpay_get_userinfo(){
	if(qqpay_get_userinfo_stop){
		return  false;
	}
	get_userinfo();
	setTimeout(qqpay_get_userinfo,1000);
}
// 显示充值
function show_qqpay(){


	let text = '<p>打开手机QQ，登录QQ号码<span class="qqpay-qq">' + userinfo["qq"] + '</span>，扫描二维码充值。</p><p>微信转入余额，最低充值1元。</p>';

	let content_element = document.createElement('div');
	content_element.innerHTML = text + '<img src="/img/QQShouKuanMa.png" />';

	// 微信登录
	swal({
		title: "充值余额",
		// text: text,
		icon: "success",
		content: content_element,
		// buttons: true,
		// dangerMode: true,
		buttons: true,
		closeOnClickOutside: false,
	}).then((willDelete) => {
		qqpay_get_userinfo_stop = true;
	});

	qqpay_get_userinfo_stop = false;
	setTimeout(qqpay_get_userinfo,1000);

}
// 当地址发生变化
window.onhashchange = function(){
	


	reload_sharefile();


	if(userinfo["id"]!=undefined&&userinfo["id"]!=null&&userinfo["id"]!=''&&userinfo["qq"]!=undefined&&userinfo["qq"]!=null&&userinfo["qq"]!=''&&userinfo["username"]!=undefined&&userinfo["username"]!=null&&userinfo["username"]!=''){



	}else{


		if(window.location.href.indexOf("#login")!=-1&&login.className.indexOf("login-hide")==-1){
			return false;
		}



	}







	nav_buttons_unset_selected();
	
	// 判断是否在登录页面
	if(window.location.href.indexOf("#login")!=-1&&login.className.indexOf("login-hide")!=-1){
		// 如果已经登录
		if( userinfo["id"]!=undefined && userinfo["id"]!=null && userinfo["id"]!='' && userinfo["qq"]!=undefined && userinfo["qq"]!=null && userinfo["qq"]!='' && userinfo["username"]!=undefined && userinfo["username"]!=null && userinfo["username"]!='' ){
			if(files.className.indexOf('files-hide')!=-1){
				pages_hide();
			}
			files_show();
			return
		}
		get_userinfo();
		if(login.className.indexOf('login-hide')!=-1){
			pages_hide();
		}
		login_show();
		return false;
	}

	// 判断是否在设置页面
	if(window.location.href.indexOf("#setting")!=-1&&setting.className.indexOf("setting-hide")!=-1){
		// 如果打开文件页面但没有登录
		if(window.location.href.indexOf("#files")!=-1&&(userinfo["id"]==undefined||isNaN(userinfo["id"])||userinfo["id"]==''||userinfo["id"]==null||userinfo["qq"]==undefined||isNaN(userinfo["qq"])||userinfo["qq"]==''||userinfo["qq"]==null||userinfo["username"]==undefined||userinfo["username"]==''||userinfo["username"]==null)){
			window.location.href = "#login";
			return false;
		}
		if(setting.className.indexOf('setting-hide')!=-1){
			pages_hide();
		}
		set_nav_selected_index(nav_setting_button);
		setting_show();
		return false;
	}

	// 判断是否在设置页面
	if(window.location.href.indexOf("#pay-cny")!=-1&&pay_cny_window.className.indexOf("pay-cny-hide")!=-1){
		// 如果打开文件页面但没有登录
		if(window.location.href.indexOf("#files")!=-1&&(userinfo["id"]==undefined||isNaN(userinfo["id"])||userinfo["id"]==''||userinfo["id"]==null||userinfo["qq"]==undefined||isNaN(userinfo["qq"])||userinfo["qq"]==''||userinfo["qq"]==null||userinfo["username"]==undefined||userinfo["username"]==''||userinfo["username"]==null)){
			window.location.href = "#login";
			return false;
		}
		if(pay_cny_window.className.indexOf('pay-cny-hide')!=-1){
			pages_hide();
		}
		set_nav_selected_index(nav_pay_cny_button);
		pay_cny_window_show();
		return false;
	}

	// 判断是否在共享文件中心页面
	if(window.location.href.indexOf("#sharecenter")!=-1&&sharecenter_window.className.indexOf("sharecenter-hide")!=-1){
		// 如果打开文件页面但没有登录
		if(window.location.href.indexOf("#files")!=-1&&(userinfo["id"]==undefined||isNaN(userinfo["id"])||userinfo["id"]==''||userinfo["id"]==null||userinfo["qq"]==undefined||isNaN(userinfo["qq"])||userinfo["qq"]==''||userinfo["qq"]==null||userinfo["username"]==undefined||userinfo["username"]==''||userinfo["username"]==null)){
			window.location.href = "#login";
			return false;
		}
		if(sharecenter_window.className.indexOf('sharecenter-hide')!=-1){
			pages_hide();
		}
		set_nav_selected_index(nav_sharecenter_button);
		sharecenter_window_show();
		return false;
	}









	// console.log('url');
	// 判断是否在文件分享页面
	if(window.location.href.indexOf("#sharefile")!=-1&&sharefile.className.indexOf("sharefile-hide")!=-1){
		// 如果打开文件页面但没有登录
		if(window.location.href.indexOf("#files")!=-1&&(userinfo["id"]==undefined||isNaN(userinfo["id"])||userinfo["id"]==''||userinfo["id"]==null||userinfo["qq"]==undefined||isNaN(userinfo["qq"])||userinfo["qq"]==''||userinfo["qq"]==null||userinfo["username"]==undefined||userinfo["username"]==''||userinfo["username"]==null)){
			window.location.href = "#login";
			return false;
		}
		if(sharefile.className.indexOf('sharefile-hide')!=-1){
			pages_hide();
		}
		sharefile_show();
		return false;
	}
	// 判断是否在用户协议页面
	if((window.location.href.indexOf("#terms-of-services")!=-1||window.location.href.indexOf("#terms")!=-1)&&terms_of_services.className.indexOf("terms-of-services-hide")!=-1){
		if(terms_of_services.className.indexOf('terms-of-services-hide')!=-1){
			pages_hide();
		}
		terms_of_services_show();
		return false;
	}
	// 如果是文件页面
	if(window.location.href.indexOf("#files")!=-1&&files.className.indexOf("files-hide")!=-1){
		// 如果打开文件页面但没有登录
		if(window.location.href.indexOf("#files")!=-1&&(userinfo["id"]==undefined||isNaN(userinfo["id"])||userinfo["id"]==''||userinfo["id"]==null||userinfo["qq"]==undefined||isNaN(userinfo["qq"])||userinfo["qq"]==''||userinfo["qq"]==null||userinfo["username"]==undefined||userinfo["username"]==''||userinfo["username"]==null)){
			window.location.href = "#login";
			return false;
		}
		if(files.className.indexOf('files-hide')!=-1){
			pages_hide();
		}
		set_nav_selected_index(nav_files_button);
		files_show();
		return false;
	}

	// 判断是否在注册页面
	if(window.location.href.indexOf("#register")!=-1&&register.className.indexOf("register-hide")!=-1){
		if(register.className.indexOf('register-hide')!=-1){
			pages_hide();
		}
		register_show();
		return false;
	}
	
	// 判断是否在找回密码页面
	if((window.location.href.indexOf("#forget-password")!=-1||window.location.href.indexOf("#reset-password")!=-1)&&forget_password.className.indexOf("forget-password-hide")!=-1){
		if(forget_password.className.indexOf('forget-password-hide')!=-1){
			pages_hide();
		}
		forget_password_show();
		return false;
	}
	
	
};

// 用户发布文件分享文件分享资源输入内容自动增高
document.querySelector('textarea').addEventListener('input', function() {
  this.style.height = 'auto';
  this.style.height = (this.scrollHeight) + 'px';
});


// 复制分享的文件到根目录
function sharefile_copy(id,key){

	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			let ResultJSON = JSON.parse(xmlhttp.responseText);
			if(ResultJSON["status"]){
				swal({
					title: "转存成功",
					text: ResultJSON["message"],
					icon: "success",
					dangerMode: true,
					closeOnClickOutside: false,
				});
			}else{
				swal({
					title: "转存失败",
					text: ResultJSON["message"],
					icon: "error",
					dangerMode: true,
					closeOnClickOutside: false,
				});
			}
		}
	}
	xmlhttp.open("POST",api_server_url+"/php/v4/sharefile_copy",true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;
	xmlhttp.send("id=" + id + "&key=" + key + "&session_id=" + userinfo["session_id"] );

}

let sharefile_content_link_item_show_terms_button = document.getElementById('sharefile-content-link-item-show-terms-button');
sharefile_content_link_item_show_terms_button.onclick = function() {
	window.location.href = "#terms-of-services";
}
let login_input_span_user_terms = document.getElementsByClassName('login-input-span-user-terms');
for(let i=0;i<login_input_span_user_terms.length;i++){
	login_input_span_user_terms[i].onclick = function() {
		window.location.href = "#terms-of-services";
	}
}
let register_input_span_user_terms = document.getElementById('register-input-span-user-terms');
register_input_span_user_terms.onclick = function() {
	window.location.href = "#terms-of-services";
}
let terms_page_show_files_button = document.getElementById('terms-page-show-files-button');
terms_page_show_files_button.onclick = function() {
	// window.location.href = "#files";

	if(window.history.length>3){ // 是否可返回上一页
		window.history.back();
	}else{
		
		if(login.className.indexOf('login-hide')!=-1){
			pages_hide();
		}
		login_show();

	}


}

let sharefile_content_userinfo_username = document.getElementById('sharefile-content-userinfo-username');
let sharefile_content_userinfo_datetime = document.getElementById('sharefile-content-userinfo-datetime');
let sharefile_content_fileinfo_filename_span = document.getElementById('sharefile-content-fileinfo-filename-span');
let sharefile_content_fileinfo_filename_i = document.getElementById('sharefile-content-fileinfo-filename-i');
let sharefile_content_fileinfo_filesize = document.getElementById('sharefile-content-fileinfo-filesize');
let sharefile_content_link_item_download_button_19 = document.getElementById('sharefile-content-link-item-download-button-19');
let sharefile_content_link_item_download_button_20 = document.getElementById('sharefile-content-link-item-download-button-20');
let sharefile_content_link_item_download_button_21 = document.getElementById('sharefile-content-link-item-download-button-21');
let sharefile_content_link_item_download_button_22 = document.getElementById('sharefile-content-link-item-download-button-22');
let sharefile_content_link_item_download_button_23 = document.getElementById('sharefile-content-link-item-download-button-23');
let sharefile_content_link_item_download_button_24 = document.getElementById('sharefile-content-link-item-download-button-24');
let sharefile_content_link_item_download_button_25 = document.getElementById('sharefile-content-link-item-download-button-25');
let sharefile_content_link_item_download_button_26 = document.getElementById('sharefile-content-link-item-download-button-26');
let sharefile_content_link_item_download_button_27 = document.getElementById('sharefile-content-link-item-download-button-27');
let sharefile_content_link_item_download_button_28 = document.getElementById('sharefile-content-link-item-download-button-28');
let sharefile_content_link_item_download_button_29 = document.getElementById('sharefile-content-link-item-download-button-29');

let sharefile_content_link_item_download_button_30 = document.getElementById('sharefile-content-link-item-download-button-30');
let sharefile_content_link_item_download_button_31 = document.getElementById('sharefile-content-link-item-download-button-31');
let sharefile_content_link_item_download_button_32 = document.getElementById('sharefile-content-link-item-download-button-32');
let sharefile_content_link_item_download_button_33 = document.getElementById('sharefile-content-link-item-download-button-33');
let sharefile_content_link_item_download_button_34 = document.getElementById('sharefile-content-link-item-download-button-34');
let sharefile_content_link_item_download_button_35 = document.getElementById('sharefile-content-link-item-download-button-35');
let sharefile_content_link_item_download_button_36 = document.getElementById('sharefile-content-link-item-download-button-36');
let sharefile_content_link_item_download_button_37 = document.getElementById('sharefile-content-link-item-download-button-37');
let sharefile_content_link_item_download_button_38 = document.getElementById('sharefile-content-link-item-download-button-38');
let sharefile_content_link_item_download_button_39 = document.getElementById('sharefile-content-link-item-download-button-39');

let sharefile_content_link_item_sharefile_copy_button = document.getElementById('sharefile-content-link-item-sharefile-copy-button');

let sharefile_content_userinfo_profile_picture = document.getElementById('sharefile-content-userinfo-profile-picture');
let sharefile_content_link_items = document.getElementsByClassName('sharefile-content-link-items')[0];

// 获取分享的文件
function get_sharefile(id,key){
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			let ResultJSON = JSON.parse(xmlhttp.responseText);
			if(ResultJSON["status"]){

				/*if(
					ResultJSON["url"].split('fakelink').length>1
				){
					alert('请先转存此文件至您的账号内，再进行下载。\r\n点击下方（点击转存文件，存到我的云盘！）按钮，即可转存此文件至您的账号。');
				}*/

				sharefile_content_userinfo_username.innerText = "";
				sharefile_content_userinfo_username.innerHTML = "";

				let sharefile_content_userinfo_username_content = document.createElement('div');
				let sharefile_content_userinfo_username_content_i = document.createElement('i');

				sharefile_content_userinfo_username_content_i.className = "fa fa-qq";


				let sharefile_user_id = ResultJSON["qq"]; // QQ or Github or Others
				
				if(
					ResultJSON["qq"]%1!=0
					&&
					parseInt(ResultJSON["qq"])==1
				){
					// Github User
					sharefile_content_userinfo_username_content_i.className = "fa fa-github";

					let github_user_id_decimal_len = getDecimalPlaces(parseFloat(sharefile_user_id));
					let github_user_id = sharefile_user_id;
					for(
						let i=0;
						i<github_user_id_decimal_len-1;
						i++
					){
						github_user_id = github_user_id * 10;
					}
					github_user_id = parseInt(github_user_id);
					sharefile_user_id = removeFirstDigit(github_user_id);


					
				}

				


				
				
				
				sharefile_content_userinfo_username_content.append(sharefile_content_userinfo_username_content_i);
				let sharefile_content_userinfo_username_content_span = document.createElement('span');
				sharefile_content_userinfo_username_content_span.innerText = ResultJSON["username"].replace('Github.' + sharefile_user_id + ".",'');
				sharefile_content_userinfo_username_content.append(sharefile_content_userinfo_username_content_span);
				
				sharefile_content_userinfo_username.appendChild(sharefile_content_userinfo_username_content);

				
				
				sharefile_content_userinfo_datetime.innerText = ResultJSON["date"];
				sharefile_content_fileinfo_filename_span.innerText = ResultJSON["name"];


				let new_download_url_text = 'curl -L -X GET -H "Referer: https://www.yunzhongzhuan.com" "' + ResultJSON["ftp"].replace(/"/g,'') + '" -o "' + ResultJSON["name"].replace(/"/g,'') + '"';
				// let new_download_url_text = 'NO TEXT';
				document.getElementsByClassName('sharefile-content')[0].getElementsByClassName('sharecenter-content-item-content-curl-text')[0].getElementsByTagName('div')[0].innerText = new_download_url_text;
		


				
				sharefile_content_fileinfo_filename_i.className = get_files_item_type_icon(ResultJSON["name"]);
				sharefile_content_fileinfo_filesize.innerText = get_size_unit(ResultJSON["size"]);

			
				
				
				
				
					sharefile_content_link_item_download_button_19.href = ResultJSON["ftp"];
					sharefile_content_link_item_download_button_19.style.color="#ff5050";
					sharefile_content_link_item_download_button_19.style.fontWeight="bold";
					sharefile_content_link_item_download_button_19.style.borderBottom="2px dashed #ff5050";
					sharefile_content_link_item_download_button_20.href = "https://a.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_20.style.color="#0051c3";
					sharefile_content_link_item_download_button_20.style.fontWeight="bold";
					sharefile_content_link_item_download_button_20.style.borderBottom="2px dashed #0051c3";
					sharefile_content_link_item_download_button_21.href = "https://b.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_21.style.color="#0051c3";
					sharefile_content_link_item_download_button_21.style.fontWeight="bold";
					sharefile_content_link_item_download_button_21.style.borderBottom="2px dashed #0051c3";
					sharefile_content_link_item_download_button_22.href = "https://c.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_22.style.color="#0051c3";
					sharefile_content_link_item_download_button_22.style.fontWeight="bold";
					sharefile_content_link_item_download_button_22.style.borderBottom="2px dashed #0051c3";
					sharefile_content_link_item_download_button_23.href = "https://d.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_23.style.color="#0051c3";
					sharefile_content_link_item_download_button_23.style.fontWeight="bold";
					sharefile_content_link_item_download_button_23.style.borderBottom="2px dashed #0051c3";
					sharefile_content_link_item_download_button_24.href = "https://e.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_24.style.color="#0051c3";
					sharefile_content_link_item_download_button_24.style.fontWeight="bold";
					sharefile_content_link_item_download_button_24.style.borderBottom="2px dashed #0051c3";
					sharefile_content_link_item_download_button_25.href = "https://f.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_25.style.color="#0051c3";
					sharefile_content_link_item_download_button_25.style.fontWeight="bold";
					sharefile_content_link_item_download_button_25.style.borderBottom="2px dashed #0051c3";
					sharefile_content_link_item_download_button_26.href = "https://g.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_26.style.color="#0051c3";
					sharefile_content_link_item_download_button_26.style.fontWeight="bold";
					sharefile_content_link_item_download_button_26.style.borderBottom="2px dashed #0051c3";
					sharefile_content_link_item_download_button_27.href = "https://h.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_27.style.color="#0051c3";
					sharefile_content_link_item_download_button_27.style.fontWeight="bold";
					sharefile_content_link_item_download_button_27.style.borderBottom="2px dashed #0051c3";
					sharefile_content_link_item_download_button_28.href = "https://i.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_28.style.color="#0051c3";
					sharefile_content_link_item_download_button_28.style.fontWeight="bold";
					sharefile_content_link_item_download_button_28.style.borderBottom="2px dashed #0051c3";
					sharefile_content_link_item_download_button_29.href = "https://j.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_29.style.color="#0051c3";
					sharefile_content_link_item_download_button_29.style.fontWeight="bold";
					sharefile_content_link_item_download_button_29.style.borderBottom="2px dashed #0051c3";
				
				

					sharefile_content_link_item_download_button_30.href = "https://ipv6.a.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_30.style.color="#0051c3";
					sharefile_content_link_item_download_button_30.style.fontWeight="bold";
					sharefile_content_link_item_download_button_30.style.borderBottom="2px dashed #0051c3";
					sharefile_content_link_item_download_button_31.href = "https://ipv6.b.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_31.style.color="#0051c3";
					sharefile_content_link_item_download_button_31.style.fontWeight="bold";
					sharefile_content_link_item_download_button_31.style.borderBottom="2px dashed #0051c3";
					sharefile_content_link_item_download_button_32.href = "https://ipv6.c.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_32.style.color="#0051c3";
					sharefile_content_link_item_download_button_32.style.fontWeight="bold";
					sharefile_content_link_item_download_button_32.style.borderBottom="2px dashed #0051c3";
					sharefile_content_link_item_download_button_33.href = "https://ipv6.d.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_33.style.color="#0051c3";
					sharefile_content_link_item_download_button_33.style.fontWeight="bold";
					sharefile_content_link_item_download_button_33.style.borderBottom="2px dashed #0051c3";
					sharefile_content_link_item_download_button_34.href = "https://ipv6.e.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_34.style.color="#0051c3";
					sharefile_content_link_item_download_button_34.style.fontWeight="bold";
					sharefile_content_link_item_download_button_34.style.borderBottom="2px dashed #0051c3";
					sharefile_content_link_item_download_button_35.href = "https://ipv6.f.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_35.style.color="#0051c3";
					sharefile_content_link_item_download_button_35.style.fontWeight="bold";
					sharefile_content_link_item_download_button_35.style.borderBottom="2px dashed #0051c3";
					sharefile_content_link_item_download_button_36.href = "https://ipv6.g.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_36.style.color="#0051c3";
					sharefile_content_link_item_download_button_36.style.fontWeight="bold";
					sharefile_content_link_item_download_button_36.style.borderBottom="2px dashed #0051c3";
					sharefile_content_link_item_download_button_37.href = "https://ipv6.h.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_37.style.color="#0051c3";
					sharefile_content_link_item_download_button_37.style.fontWeight="bold";
					sharefile_content_link_item_download_button_37.style.borderBottom="2px dashed #0051c3";
					sharefile_content_link_item_download_button_38.href = "https://ipv6.i.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_38.style.color="#0051c3";
					sharefile_content_link_item_download_button_38.style.fontWeight="bold";
					sharefile_content_link_item_download_button_38.style.borderBottom="2px dashed #0051c3";
					sharefile_content_link_item_download_button_39.href = "https://ipv6.j.download.yunzhongzhuan.com" + ResultJSON["url"];
					sharefile_content_link_item_download_button_39.style.color="#0051c3";
					sharefile_content_link_item_download_button_39.style.fontWeight="bold";
					sharefile_content_link_item_download_button_39.style.borderBottom="2px dashed #0051c3";
				

				
				
				

				sharefile_content_userinfo_profile_picture.style.backgroundImage = "url('https://q1.qlogo.cn/g?b=qq&nk=" + ResultJSON["qq"] + "&s=640')";

				if(
					ResultJSON["qq"]%1!=0
					&&
					parseInt(ResultJSON["qq"])==1
				){
					// Github User
					sharefile_content_userinfo_profile_picture.style.backgroundImage = "url('https://avatars.githubusercontent.com/u/" + sharefile_user_id + "')";
				}
				
				sharefile_content_link_item_sharefile_copy_button.share_id = id;
				sharefile_content_link_item_sharefile_copy_button.share_key = key;
				sharefile_content_link_item_sharefile_copy_button.onclick = function() {
					sharefile_copy(this.share_id,this.share_key);
				}
				

				// 清理源和本地
				let sharefile_content_link_item_offline_items = document.getElementsByClassName('sharefile-content-link-item-offline');
				for(let i=0;i<sharefile_content_link_item_offline_items.length;i++){
					sharefile_content_link_item_offline_items[i].remove();
				}
				let sharefile_content_link_item_localhost_items = document.getElementsByClassName('sharefile-content-link-item-localhost');
				for(let i=0;i<sharefile_content_link_item_localhost_items.length;i++){
					sharefile_content_link_item_localhost_items[i].remove();
				}

				
				// 发现本地
				if(ResultJSON["url_localhost"]!=undefined){
					let div = document.createElement('div');
					div.className="sharefile-content-link-item sharefile-content-link-item-localhost";
					let span = document.createElement('span');
					span.innerText = "点击下载";
					span.link = ResultJSON["url_localhost"];
					span.onclick = function(){
						window.open(this.link);
					}
					div.append(span);
					sharefile_content_link_items.prepend(div);
				}
				
				
			
				
				
				
				
				// 发现离线源
				if(ResultJSON["offline"]!=undefined){
					let div = document.createElement('div');
					div.className="sharefile-content-link-item sharefile-content-link-item-offline";
					let a = document.createElement('a');
					a.innerText = "点击下载";
					a.href = ResultJSON["offline"];
					a.target = "_blank";
					/*span.onclick = function(){
						window.open(this.link);
					}*/
					div.append(a);
					sharefile_content_link_items.prepend(div);
				}


				if(navigator.language.toLowerCase().indexOf('cn')!=-1){
					if(document.getElementsByClassName('swal-overlay--show-modal')[0]==undefined){
						// showpay();
					}
				}
				
				
				
				
			}else{
				swal({
					title: "提示信息",
					text: ResultJSON["message"],
					icon: "error",
					dangerMode: true,
					closeOnClickOutside: false,
				});
			}
		}
	}
	xmlhttp.open("POST",api_server_url+"/php/v4/sharefile",true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;
	xmlhttp.send("id=" + id + "&key=" + key + "&session_id=" + userinfo["session_id"] );
}

if(window.location.href.indexOf('/#')!=-1&&window.location.href.indexOf('%20')!=-1){
	window.history.pushState(null,null,window.location.href.split('%20')[0]);
}

// 检测是否是分享文件
function reload_sharefile(){
	// 如果处于分享文件页面
	if(window.location.href.indexOf('#sharefile=')!=-1){
		let share_url_array = window.location.href.split('#sharefile=');
		if(share_url_array.length==2){
			share_url_array = share_url_array[1];
			share_url_array = share_url_array.split('/')[0];
			share_url_array = share_url_array.split('\\')[0];
			share_url_array = share_url_array.split('?')[0];
			share_url_array = share_url_array.split('&')[0];
			share_url_array = share_url_array.split('%')[0];
			if(window.location.href.indexOf('%20')!=-1){
				share_url_array = share_url_array.split('%20')[0]; // url %20 bug
				window.history.pushState(null,null,window.location.href.split('%20')[0]);
			}
			share_url_array = share_url_array.split('_');
			if(share_url_array.length==2){
				if(isNaN(share_url_array[1])==false&&share_url_array[0].length==8){
					get_sharefile(share_url_array[1],share_url_array[0]);
				}
			}
		}
	}
}



function get_upload_iframe_status(){
    if(upload_window_iframe_element.src==api_upload_web_url&&!show_upload_full_screen_mask){

	set_upload_cdn_cloudflare();

        /*upload_window_iframe_element.src=api_upload_web_url;
        upload_window_iframe_element.contentWindow.location.reload(true);*/
        // console.log('reload');
    }
	if(!show_upload_full_screen_mask){
		setTimeout(get_upload_iframe_status,1000);
	}
}


let now_datetime = new Date();



// 预加载计算哈希的文件
let js_calc_hash_preload_locked = false;
function js_calc_hash_preload(){
	if(js_calc_hash_preload_locked){
		return false;
	}
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			// console.log(xmlhttp.responseText);
			js_calc_hash_preload_locked = true;
		}
		if(xmlhttp.readyState==4){
			setTimeout(js_calc_hash_preload,100);
		}
	}
	xmlhttp.open("GET","/js/calc_hash.js",true);
	xmlhttp.send();
}
// js_calc_hash_preload();



// 加载一下上传文件时的遮罩提示图片
function get_preload_upload_file_mask_png(){
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET","/img/upload_file_full_screen.png",true);
	xmlhttp.send();
}





// Download List
let download_domain_list_cdn_cgi_trace = [
	//"https://upload.yunzhongzhuan.com/cdn-cgi/trace",
	/*"https://a.upload.yunzhongzhuan.com/cdn-cgi/trace",
	"https://b.upload.yunzhongzhuan.com/cdn-cgi/trace",
	"https://c.upload.yunzhongzhuan.com/cdn-cgi/trace",
	"https://d.upload.yunzhongzhuan.com/cdn-cgi/trace",
	"https://e.upload.yunzhongzhuan.com/cdn-cgi/trace",
	"https://f.upload.yunzhongzhuan.com/cdn-cgi/trace",
	"https://g.upload.yunzhongzhuan.com/cdn-cgi/trace",
	"https://h.upload.yunzhongzhuan.com/cdn-cgi/trace",
	"https://i.upload.yunzhongzhuan.com/cdn-cgi/trace",
	"https://j.upload.yunzhongzhuan.com/cdn-cgi/trace",*/
	//"https://download.yunzhongzhuan.com/cdn-cgi/trace",
	/*"https://a.download.yunzhongzhuan.com/cdn-cgi/trace",
	"https://b.download.yunzhongzhuan.com/cdn-cgi/trace",
	"https://c.download.yunzhongzhuan.com/cdn-cgi/trace",
	"https://d.download.yunzhongzhuan.com/cdn-cgi/trace",
	"https://e.download.yunzhongzhuan.com/cdn-cgi/trace",
	"https://f.download.yunzhongzhuan.com/cdn-cgi/trace",
	"https://g.download.yunzhongzhuan.com/cdn-cgi/trace",
	"https://h.download.yunzhongzhuan.com/cdn-cgi/trace",
	"https://i.download.yunzhongzhuan.com/cdn-cgi/trace",
	"https://j.download.yunzhongzhuan.com/cdn-cgi/trace",*/
];




function access_download_domain_list_cdn_cgi_trace(url){
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
	}
	xmlhttp.open("GET",url,true);
	xmlhttp.send();
}


let ip_day_51la_ip_iframe = document.getElementById('ip-day-51la-ip-iframe');



let pay_cny_wechat2024_img = document.getElementById('pay-cny-wechat2024-img');

// 页面加载完成开始检查用户登录状态
window.onload = function(){

	get_userinfo();

	reload_sharefile();

	
	
	
	
	setTimeout(js_calc_hash_preload,100);
	
	
	
	setTimeout(get_preload_upload_file_mask_png,100);


	if(
	getTopLevelDomain(window.location.hostname) != "frontwize.com"
	){
		setTimeout(function(){
			ip_day_51la_ip_iframe.src = "/51la_ip";
		},2000);


		setTimeout(function(){
			pay_cny_wechat2024_img.src = "/img/pay-cny-2024.jpg";
			pay_cny_wechat2024_img.onclick = function(){
				showpay();
			}
		},100);

	}
	
	
	for(let i=0;i<download_domain_list_cdn_cgi_trace.length;i++){
		setTimeout(access_download_domain_list_cdn_cgi_trace,20*i,download_domain_list_cdn_cgi_trace[i]);
	}
	
	
	setTimeout(function(){
		if(false&&navigator.language.toLowerCase().indexOf('cn')!=-1){
			if(window.location.href.indexOf('/#files')!=-1||window.location.href.indexOf('/#sharefile')!=-1){
				if(document.getElementsByClassName('swal-overlay--show-modal')[0]==undefined){
					// showpay();
				}
			}
		}
	},1000);






	/*setTimeout(function(){
		if(
			document.getElementsByClassName('swal-overlay--show-modal')[0]==undefined
			&&
			wechatPublicMessageShow==false
		){
			wechatPublicMessage();
		}
	},1000);
	setTimeout(function(){
		if(
			document.getElementsByClassName('swal-overlay--show-modal')[0]==undefined
			&&
			wechatPublicMessageShow==false
		){
			wechatPublicMessage();
		}
	},3000);
	setTimeout(function(){
		if(
			document.getElementsByClassName('swal-overlay--show-modal')[0]==undefined
			&&
			wechatPublicMessageShow==false
		){
			wechatPublicMessage();
		}
	},8000);*/














	

}



// 当前文件位置
let get_files_folders_array = ["0"];
let get_files_folders_array_name = ["全部文件"];
let get_files_folders_index = 0;
// 当前加载文件和文件夹页数
let get_folders_page = 0;
let get_files_page = 0;
// 文件夹和文件是否加载完成
let get_folders_loadover = false;
let get_files_loadover = false;
// 每次加载文件或文件夹数量
let get_folders_num = 20;
let get_files_num = 20;
// 正在加载中
let get_folders_loading = false;
let get_files_loading = false;
// Public Link
let public_link_hostname = "";
// Private Link
let private_link_hostname = "";
// 获取文件
function get_files(){
	if(get_files_loadover){
		return false;
	}
	// 如果还没加载完文件夹 继续加载文件夹
	if(!get_folders_loadover){
		get_folders();
		return false;
	}
	if(get_files_loading){
		return false;
	}
	get_files_loading = true;
	let parent_folder_id = encodeURIComponent( get_files_folders_array[get_files_folders_index] ) ;
	let page = encodeURIComponent( get_files_page );
	let like = encodeURIComponent( files_search_input.value );
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4){
			setTimeout(function(){
				get_files_loading = false;
			},300);
		}
		if(xmlhttp.readyState==4 && xmlhttp.status==200){

			
			if( parent_folder_id != get_files_folders_array[get_files_folders_index] ){
				return false;
			}
			let ResultJSON = JSON.parse(xmlhttp.responseText);
			
			
			if(ResultJSON["status"]){
				if( ResultJSON["public_link_hostname"]!=undefined ){
					public_link_hostname = ResultJSON["public_link_hostname"];
				}else{
					public_link_hostname = "";
				}
				
				if( ResultJSON["private_link_hostname"]!=undefined ){
					private_link_hostname = ResultJSON["private_link_hostname"];
				}else{
					private_link_hostname = "";
				}
				
				// 如果已经加载完成
				if(ResultJSON["data"].length<get_files_num&&ResultJSON["loadover"]!=undefined&&ResultJSON["loadover"]==true){
					get_files_loadover = true;
				}else{
					get_files_page++;
				}
				push_files_to_files_page(ResultJSON["data"],false);
				setTimeout(function(){
					page_scroll_height_function_locked = false;
					// try{clearTimeout(page_scroll_height_function_timeout)}catch(e){};
					// page_scroll_height_function_timeout = setTimeout(page_scroll_height_function,100);
				},((ResultJSON["data"].length+1)*20)+300);
			}
		}
	}
	xmlhttp.onerror = function(){
		get_files_loading = false;
		get_files();
	}
	xmlhttp.open("POST",api_server_url+"/php/v4/files",true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;
	xmlhttp.send("parent_folder_id=" + parent_folder_id + "&page=" + page + "&like=" + like + "&session_id=" + userinfo["session_id"] );
	


}
// 获取文件夹
function get_folders(){
	if(get_folders_loading){
		return false;
	}
	get_folders_loading = true;
	let parent_folder_id = encodeURIComponent( get_files_folders_array[get_files_folders_index] ) ;
	let page = encodeURIComponent( get_folders_page );
	let like = encodeURIComponent( files_search_input.value );
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4){
			setTimeout(function(){get_folders_loading = false;},300);
		}
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			if( parent_folder_id != get_files_folders_array[get_files_folders_index] ){
				return false;
			}
			let ResultJSON = JSON.parse(xmlhttp.responseText);
			if(ResultJSON["status"]){
				// 如果加载完成了
				get_folders_page++;
				if(ResultJSON["data"].length<get_folders_num){
					get_folders_loadover = true;
					get_files();
				}
				push_folders_to_files_page(ResultJSON["data"],false);
				setTimeout(function(){
					page_scroll_height_function_locked = false;
					try{clearTimeout(page_scroll_height_function_timeout)}catch(e){};
					page_scroll_height_function_timeout = setTimeout(page_scroll_height_function,10);
				},((ResultJSON["data"].length+1)*20)+300);
			}
		}
	}
	xmlhttp.onerror = function(){
		get_folders_loading = false;
		// get_folders();
		setTimeout(get_folders,2300);
	}
	xmlhttp.open("POST",api_server_url+"/php/v4/folders",true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;
	xmlhttp.send("parent_folder_id=" + parent_folder_id + "&page=" + page + "&like=" + like + "&session_id=" + userinfo["session_id"] );
}
// 是否滚动到底部
function getScrollTop(){
	let scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
　　if(document.body){
　　　　bodyScrollTop = document.body.scrollTop;
　　}
　　if(document.documentElement){
　　　　documentScrollTop = document.documentElement.scrollTop;
　　}
　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
　　return scrollTop;
}
//文档的总高度
function getScrollHeight(){
	let scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
　　if(document.body){
　　　　bodyScrollHeight = document.body.scrollHeight;
　　}
　　if(document.documentElement){
　　　　documentScrollHeight = document.documentElement.scrollHeight;
　　}
　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
　　return scrollHeight;
}
//浏览器视口的高度
function getWindowHeight(){
	let windowHeight = 0;
　　if(document.compatMode == "CSS1Compat"){
　　　　windowHeight = document.documentElement.clientHeight;
　　}else{
　　　　windowHeight = document.body.clientHeight;
　　}
　　return windowHeight;
}
// 实时监听如果文件列表没有铺满页面 继续加载文件
let page_scroll_height_function_locked = false;
let page_scroll_height_function_timeout;
let page_scroll_height_function_timeout_timeleng = 1000;
function page_scroll_height_function(){
	// 时时刻刻还原上传列表
	// uploads_window_show_or_hide_button.click();uploads_window_show_or_hide_button.click();
	try{clearTimeout(page_scroll_height_function_timeout)}catch(e){};
	if( page_scroll_height_function_locked == true || get_files_loading || get_folders_loading || remove_files_items_running){
		try{clearTimeout(page_scroll_height_function_timeout)}catch(e){};
		page_scroll_height_function_timeout = setTimeout(page_scroll_height_function,page_scroll_height_function_timeout_timeleng);
		return false;
	}
	if( ( files.offsetHeight < ((getScrollHeight()-(getWindowHeight()/2))) || (getScrollTop() + getWindowHeight() > ((getScrollHeight()-(getWindowHeight()/2)) )) ) && /* window.location.href.indexOf('#files')!=-1 */ files.className.indexOf("files-hide")==-1 ){
		page_scroll_height_function_locked = true;
		get_files();
	}
	try{clearTimeout(page_scroll_height_function_timeout)}catch(e){};
	page_scroll_height_function_timeout = setTimeout(page_scroll_height_function,page_scroll_height_function_timeout_timeleng);
}
try{clearTimeout(page_scroll_height_function_timeout)}catch(e){};
page_scroll_height_function_timeout = setTimeout(page_scroll_height_function,1);
// 根据文件类型返回下标
// 文件类型对应数组
let type_icon_video = [
	"mp4",
	"avi",
	"mkv",
	"m3u8",
	"ts",
	"flv",
	"mov"
];
let type_icon_image = [
	"jpg",
	"png",
	"gif",
	"jpeg",
	"bmp",
	"webp"
];
let type_icon_compress = [
	"rar",
	"7z",
	"tar",
	"gz",
	"zip",
	"iso",
	"wim"
];
let type_icon_execute = [
	"exe",
	"msi",
	"bat",
	"com"
];
let type_icon_android = [
	"apk"
];
let type_icon_music = [
	"mp3",
	"flac",
	"ape",
	"m4a",
	"ogg",
	"wav"
];
let type_icon_text = [
	"txt",
	"docx",
	"doc",
	"xls",
	"xlsx",
	"ppt",
	"pptx",
	"ini",
	"log",
	"srt"
];
function get_files_item_type_icon(name){
	let name_array = name.split('.');
	name = name_array[name_array.length-1];
	name = name.toLowerCase();
	if(type_icon_video.indexOf(name)!=-1){
		return "fa fa-film";
	}else if(type_icon_image.indexOf(name)!=-1){
		return "fa fa-picture-o";
	}else if(type_icon_compress.indexOf(name)!=-1){
		return "fa fa-file-archive-o";
	}else if(type_icon_execute.indexOf(name)!=-1){
		return "fa fa-windows";
	}else if(type_icon_android.indexOf(name)!=-1){
		return "fa fa-android";
	}else if(type_icon_music.indexOf(name)!=-1){
		return "fa fa-music";
	}else if(type_icon_text.indexOf(name)!=-1){
		return "fa fa-file-text-o";
	}else{
		return 'fa fa-file-o';
	}
}
// 返回顶部
let uploads_items_top_button = document.getElementById('uploads-items-top-button');
uploads_items_top_button.onclick = scroll_top;
// 右侧连接数据
let links_data = [
	/*{
		"title":"系统通知",
		"data":[
			{
				"name":"2022年3月16日",
				"new_open":true,
				"link":"https://mp.weixin.qq.com/s/KUk0nIBLd0-WR6atBB6UBA"
			}
		]
	},
	{
		"title":"系统版本",
		"data":[
			{
				"name":"v4.0.2",
				"new_open":true,
				"link":"https://yunzhongzhuan.com/welcome/"
			}
		]
	},
	{
		"title":"安全管理",
		"data":[
			{
				"name":"用户协议",
				"new_open":true,
				"link":"https://yunzhongzhuan.com/#terms"
			}
		]
	},
	{
		"title":"官方网站",
		"data":[
			{
				"name":"上海括彩科技有限公司",
				"new_open":true,
				"link":"https://www.kuocaitm.net/"
			},
			{
				"name":"yunzhongzhuan.com",
				"new_open":true,
				"link":"https://www.yunzhongzhuan.com/#files"
			},
			{
				"name":"yzzpan.com",
				"new_open":true,
				"link":"https://www.yzzpan.com/#files"
			},
		]
	},
	{
		"title":"服务提供",
		"data":[
			{
				"name":"Cloudflare",
				"new_open":true,
				"link":"https://www.cloudflare.com/"
			},
			{
				"name":"Github",
				"new_open":true,
				"link":"https://github.com/"
			},
			{
				"name":"Azure",
				"new_open":true,
				"link":"https://azure.microsoft.com/"
			},
			{
				"name":"Huawei Cloud",
				"new_open":true,
				"link":"https://www.huaweicloud.com/"
			},
			{
				"name":"Netlify",
				"new_open":true,
				"link":"https://www.netlify.com/"
			},
			{
				"name":"DDoS-Guard",
				"new_open":true,
				"link":"https://ddos-guard.net/"
			},
			{
				"name":"Gitlab",
				"new_open":true,
				"link":"https://about.gitlab.com/"
			},
			{
				"name":"Google Cloud",
				"new_open":true,
				"link":"https://cloud.google.com/"
			},
		]
	},*/
	/*
	{
		"title":"网络浏览",
		"data":[
			{
				"name":"谷歌浏览器",
				"new_open":true,
				"link":"https://www.google.cn/intl/zh-CN/chrome/"
			}
		]
	},
	{
		"title":"搜索引擎",
		"data":[
			{
				"name":"搜狗搜索引擎",
				"new_open":true,
				"link":"https://www.sogou.com"
			}
		]
	},
	{
		"title":"系统安全",
		"data":[
			{
				"name":"火绒安全",
				"new_open":true,
				"link":"https://www.huorong.cn"
			}
		]
	},
	{
		"title":"电脑维修",
		"data":[
			{
				"name":"微PE工具箱",
				"new_open":true,
				"link":"https://www.wepe.com.cn"
			}
		]
	},
	*/
	{
		"title":"网站导航",
		"data":[
			{
				"name":"网站主页",
				"new_open":false,
				"link":"/#sharecenter"
			},
			{
				"name":"我的文件",
				"new_open":false,
				"link":"/#files"
			},
			{
				"name":"用户协议",
				"new_open":false,
				"link":"/#terms-of-services"
			},
			{
				"name":"设置中心",
				"new_open":false,
				"link":"/#setting"
			},
			{
				"name":"登录账号",
				"new_open":false,
				"link":"/#login"
			},
			{
				"name":"Community",
				"new_open":true,
				"link":"https://www.yunzhongzhuan.com/community/"
			}
			/*{
				"name":"注册账号",
				"new_open":false,
				"link":"/#register"
			},
			{
				"name":"找回密码",
				"new_open":false,
				"link":"/#forget-password"
			},*/
		]
	},

	{
		"title":"更多链接",
		"data":[
			{
				"name":"关于我们",
				"new_open":true,
				"link":"/welcome/"
			},
			{
				"name":"软件下载",
				"new_open":true,
				"link":"/downloads/"
			},
			{
				"name":"联系我们",
				"new_open":true,
				"link":"/welcome/#mail-talk-position"
			},
		]
	},

	{
		"title":"行业工具",
		"data":[
			{
				"name":"JSON格式化",
				"new_open":true,
				"link":"/json"
			}
		]
	},


	/*
	{
		"title":"友情链接",
		"data":[
			
			{
				"name":"雨苁",
				"new_open":true,
				"link":"https://www.ddosi.org/"
			},
			
		]
	},*/
	/*
	{
		"title":"更多链接",
		"data":[
			{
				"name":"QQ群",
				"new_open":true,
				"link":"https://jq.qq.com/?_wv=1027&k=eDrcfDDW"
			},
			{
				"name":"客户端",
				"new_open":true,
				"link":"https://client.yunzhongzhuan.com/"
			},
			{
				"name":"纸飞机",
				"new_open":true,
				"link":"https://t.me/yunzhongzhuan"
			}
		]
	}*/
];
setTimeout(document_write_links,1,links_data);
let links_items = document.getElementById('links-items');
// 显示链接
function document_write_links(data){
	for(let i=0;i<data.length;i++){
		let title = data[i]["title"];
		let title_element = document.createElement('div');
		title_element.className = "links-item-title";
		title_element.innerText = title;
		let links_item_links_items_element = document.createElement('div');
		links_item_links_items_element.className = "links-item-links-items";
		for(let i2=0;i2<data[i]["data"].length;i2++){
			let links_item_links_item_element = document.createElement('div');
			links_item_links_item_element.className = "links-item-links-item";
			links_item_links_item_element.innerHTML = '<span>' + data[i]["data"][i2]["name"] + '</span>';
			links_item_links_item_element.link = data[i]["data"][i2]["link"];
			links_item_links_item_element.new_open= data[i]["data"][i2]["new_open"];
			// links_item_links_item_element.getElementsByTagName('span')[0].new_open = data[i]["data"][i2]["new_open"];
			links_item_links_item_element.getElementsByTagName('span')[0].onclick = function(){



				if(userinfo["id"]!=undefined&&userinfo["id"]!=null&&userinfo["id"]!=''&&userinfo["qq"]!=undefined&&userinfo["qq"]!=null&&userinfo["qq"]!=''&&userinfo["username"]!=undefined&&userinfo["username"]!=null&&userinfo["username"]!=''){


					if(
						(
							this.parentNode.link == "/#login"
						)
					){
						// console.log('已登录');

						swal({
							title: "已经登录！",
							text: "已经登录！",
							icon: "warning",
							dangerMode: true,
							closeOnClickOutside: false,
						}).then((willDelete) => {});

						return false;
					}


				}else{


					if(
						window.location.href.indexOf("#login")!=-1&&login.className.indexOf("login-hide")==-1
						&&
						(
							this.parentNode.link == "/#files" || this.parentNode.link == "/#setting"
						)
					){
						// console.log('未登录');


						swal({
							title: "请先登录！",
							text: "请先登录！",
							icon: "error",
							dangerMode: true,
							closeOnClickOutside: false,
						}).then((willDelete) => {});

						return false;
					}



				}





				if(this.parentNode.new_open){
					window.open(this.parentNode.link);
				}else{
					window.location.href = this.parentNode.link;
				}
			};
			links_item_links_items_element.append(links_item_links_item_element);
		}
		let block_height_20px = document.createElement('div');
		block_height_20px.className = "block-height-20px";
		links_item_links_items_element.append(block_height_20px);
		let links_item_element = document.createElement('div');
		links_item_element.className = "links-item";
		links_item_element.append(title_element);
		links_item_element.append(links_item_links_items_element);
		links_items.append(links_item_element);
	}
}


// 赞助我们
function pay_cny(){

	return false;
	
	let div = document.createElement('div');
	div.innerHTML = '<div style="color:#5c5c5c;line-height:2;word-wrap:break-word;word-break:breal-all;">   <p>云中转成立于2020年12月10日，至今始终在免费为用户提供稳定、纯粹的文件分享服务。</p>   <p>如果云中转已经帮助到了您，为您带来了许多方便，请您赞助我们，帮助我们继续扩容服务以及减轻每年的运营成本。</p>  <p><img style="background-color:#f5f5f5;margin-top:12px;" src="/img/pay_wx_zfb_qq_2.png" /></p>  </div>';
	
	swal({
		title: "赞助我们",
		content: div,
		icon: "warning",
		buttons: ["取消","了解"],
		dangerMode: true,
		closeOnClickOutside: false,
	}).then((willDelete) => {
		if(willDelete){
			
		}
	});

	setTimeout(function(){
		document.getElementsByClassName('swal-overlay swal-overlay--show-modal')[0].scrollTop=0;
	},10);
	
}
// 隐藏赞助按钮
if(navigator.language.toLowerCase().indexOf('cn')!=-1){
	/*if(document.getElementById('nav-pay-cny-button')!=undefined){
		document.getElementById('nav-pay-cny-button').style.display = "block";
	}*/
	if(document.getElementById('files-options-item-pay-cny-button')!=undefined){
		document.getElementById('files-options-item-pay-cny-button').style.display = "block";
		// document.getElementById('files-options-item-pay-cny-button').onclick = pay_cny;
		document.getElementById('files-options-item-pay-cny-button').onclick = showpay;
	}
}




// 刷新文件
// 刷新冷却时间
let files_reload_locked = false;
function files_reload(){
	if(window.location.href.indexOf('/#files')==-1 && window.location.href.indexOf('/#sharecenter')==-1 ){
		return false;
	}
	if(
		window.location.href.indexOf('/#sharecenter')!=-1
	){
		if(
			document.getElementsByClassName('swal-overlay--show-modal')[0] != undefined
			&&
			document.getElementsByClassName('sharecenter-content-new-sharefile-search-files-input-swal')[0] != undefined
		){

		}else{
			// 加载分享
			// Sharecenter_Contents_Loading = false;
			Sharecenter_Contents_Loadover = false;
			Sharecenter_Contents_Page = 0;
			setTimeout(GetSharecenterContents,1500);
			return false;
		}
	}

	if(files_reload_locked){
		return false;
	}
	files_reload_locked = true;
	let timeout_time = remove_files_items();
	setTimeout(function(){
		get_folders_loadover = false;
		get_files_loadover = false;
		get_files_page = 0;
		get_folders_page = 0;
		files_search_input_value_old = files_search_input.value;
		setTimeout(function(){
			files_reload_locked = false;
		},2000);
		get_files();
	},(timeout_time*20)+300 ) ;
	
	setTimeout(get_usedsize_function,500);
}
// 触发搜索的延迟执行
let files_search_function_timeout;
// 搜索框内容变动
files_search_input.oninput = function(){
	try{clearTimeout(files_search_function_timeout);}catch(e){};
	files_search_function_timeout = setTimeout(function(){
		folders_items_selected_array = [];
		files_items_selected_array = [];
		get_files_folders_index = 0;
		files_reload();
	},2000);
}
// 上传是否准备继续
let upload_engine_load_ready = false;
function set_upload_window_iframe_element(){
	setTimeout(function(){
		show_upload_full_screen_mask = true;
		// upload_window_iframe_element.contentWindow.document.cookie=document.cookie;
		// upload_window_iframe_element.contentWindow.Token=Token;
		upload_window_iframe_element.contentWindow.userinfo=userinfo;
		upload_window_iframe_element.contentWindow.upload_file_item_size=upload_file_item_size;
		upload_window_iframe_element.contentWindow.swal=swal;
		upload_window_iframe_element.contentWindow.get_files_loadover=get_files_loadover;
		upload_window_iframe_element.contentWindow.get_folders_loadover=get_folders_loadover;
		upload_window_iframe_element.contentWindow.get_files=get_files;
	},100);
}
upload_window_iframe_element.onload = function(){
	setTimeout(get_upload_iframe_status,500);
};
// 上传前的遮罩层
let upload_file_full_screen_mask = document.getElementById('upload-file-full-screen');
// 点击关闭上传遮罩
upload_file_full_screen_mask.onclick = function(){
	upload_file_full_screen_mask.style.display="none";
}
// 上传列表滚动元素
// document.getElementsByClassName('uploads-items')[0];
let upload_items = document.getElementById('uploads-items');
// 最大允许上传
// 如果用户试图修改JS绕过限制，在上传文件后，系统将匹配文件大小，异常则永久封号
let upload_file_max_size = 1000 * 1024 * 1024; // 8GB
// 每次提交大小
let upload_file_item_size = 95450416; //100 * 1024 * 1024; // 100MB

// 上传文件按钮
let files_options_item_upload_files_button = document.getElementById('files-options-item-upload-files-button');
let files_options_item_upload_files_input = document.getElementById('files-options-item-upload-files-input');
files_options_item_upload_files_button.onclick = function(){
	// 如果未登录
	if(userinfo["id"]!=undefined&&userinfo["id"]!=null&&userinfo["id"]!=''&&userinfo["qq"]!=undefined&&userinfo["qq"]!=null&&userinfo["qq"]!=''&&userinfo["username"]!=undefined&&userinfo["username"]!=null&&userinfo["username"]!=''){
		/*if(upload_window_iframe_element.src != api_upload_web_url){
			show_upload_full_screen_mask = false;
			upload_window_iframe_element.src = api_upload_web_url;
		}*/
		if(!show_upload_full_screen_mask){

			set_upload_cdn_cloudflare();
		}
	}else{
		window.location.href = "#login";
		return false;
	}
	files_options_items.show=false;
	files_options_items.className="files-options-items files-options-items-hide";
	files_options_item_upload_files_input.click();
};
// 上传函数
// 上传文件处理
// 上传
/*
<!DOCTYPE html>
<html>
<head>
<title>upload</title>
</head>
<body>
<script type="text/javascript">
// 代码而已 能运行就行了 别管那么多
document.domain="yunzhongzhuan.com";
let setSessidTimes = 0;
let setSessidMaxTimes = 100;
function setSessid(){
	if(setSessidTimes>setSessidMaxTimes){return false;};
	setSessidTimes=setSessidTimes+1;
	try{
		document.cookie="PHPSESSID="+userinfo["session_id"] + "; path=/";
	}catch(e){
		// pass
	};
	setTimeout(setSessid,100);
}
setSessid();
// 上传
function FileUploadStart(fb,so){

	// 通过非法修改前端，强制提交数据，后端判断为异常，将直接永久封号。
	// 如果容量超额，禁止继续上传。
 	if( usedsize >= 2*100*1024*1024*1024 && public_link_status==false ){
  		alert('您的账号存储空间占用已超200GB，已达个人普通账号上限2倍。\r\n企业用户不限容量，并支持绑定自定义下载域名。\r\n示例：https://您的域名.com/download/123/abc/music.mp3\r\n详情：https://www.yunzhongzhuan.com/welcome/');
  		free_or_mini_or_big_vip.className = "";
  		window.location.href="/#setting";

  		return false;
	}

	// 如果未登录
	if(userinfo["id"]!=undefined&&userinfo["id"]!=undefined!=null&&userinfo["id"]!=undefined!=''&&userinfo["qq"]!=undefined&&userinfo["qq"]!=undefined!=null&&userinfo["qq"]!=undefined!=''){
		// pass
	}else{
		return false;
	}
		//////////console.log(fb);
		// 开始文件分片上传
		let xhr;
		let ot;
		let oloaded;
		let sendOK; // 已发送次数
		let sendTimes; // 总共需要发送次数
		//上传文件方法
		function UpladFile() {
			// let fileObj = document.getElementById("file").files[0]; // js 获取文件对象
            // let url = "https://upload.yunzhongzhuan.com/php/v4/upload"; // 接收上传文件的后台地址 
		let url = "/php/v4/upload"; // 接收上传文件的后台地址 
            let filename=fb.name; 
            // 需要将域名解析到 CF
            // 接收文件的服务器需要绑定上传API的域名
            // 上传大小在 PHP 中需要允许 需要修改  宝塔 找到软件 PHP 修改最大上传限制
            let LENGTH = upload_file_item_size; // 每次上传长度
            let totalSize = fb.size;  //文件总大小
            let start = 0;      //每次上传的开始字节 
            let end = start + LENGTH;   //每次上传的结尾字节 
			let blob = null;        //二进制对象 
			// 已经发送次数
            sendOK = 0;
            // 共要发送次数
            sendTimes = Math.ceil(totalSize/LENGTH);
            //////////console.log("需要发送 " + sendTimes + " 次！");
            // 发送文件数据的数组
            let sendFileBlobArray = [];
            // 切分二进制分片数据进入数组
             for(let i=sendOK; i < sendTimes;i++){
                  sendFileBlobArray[i] = fb.slice(start,end);
                  start = end; 
                  end = start + LENGTH; 
            }
            //////////console.log(sendFileBlobArray);
            start = 0;//每次上传的开始字节
            end = 0 + LENGTH;//每次上传的结尾字节
            xhr = new XMLHttpRequest();  // XMLHttpRequest 对象
            so.xhrObj = xhr;
			function send(){
				if(so.upload_paused){
					setTimeout(send,500);
					return false;
				}
				if(so.stop){
					return false;
				}
	            blob = sendFileBlobArray[sendOK];//根据长度截取每次需要上传的数据 
	            xhr.onreadystatechange=function(){
	            	if(xhr.readyState==4 && xhr.status==504){
						setTimeout(send,500);
	            	}
    	            if(xhr.readyState==4 && xhr.status==200){
    	            	//////////console.log(xhr.responseText);
    	            	// ////////console.log("2020-11-05 17:16:41 修复批量上传失败 测试");
    	            	try{
	    	            	let ResultJSON = JSON.parse(xhr.responseText);
							//////////console.log(ResultJSON);
							if(ResultJSON["status"]){
								so.token = ResultJSON["token"];
		    	                sendOK++;
		    	                if(sendOK<sendTimes){
		    	                	setTimeout(send,500);
		    	                }else{
						so.stop = true;
		    	                }
							}else{
								parent.upload_file_error('上传中断',ResultJSON["message"],'error');
							}
						}catch(err){
						   //在此处理错误
							parent.upload_file_error('上传中断','上传中断','error');
						}
    	            }else{
    	            	// ////////console.log(xhr.responseText);
    	            }
                }
	            xhr.open("post", url, true); //post方式，url为服务器请求地址，true 该参数规定请求是否异步处理。
	            xhr.onload = uploadComplete; //请求完成
	            xhr.onerror =  uploadFailed_ReSend; //请求失败
	            xhr.upload.onprogress = progressFunction;//【上传进度调用方法实现】
	            xhr.upload.onloadstart = function(){//上传开始执行方法
	                ot = new Date().getTime();   //设置上传开始时间
	                oloaded = 0;//设置上传开始时，以上传的文件大小为0
	            };
	            // 如果是最后一发
	            if((sendOK+1) == sendTimes){
	            	xhr.setRequestHeader("HASH", so.hash  ) ;
					// xhr.setRequestHeader("SSEESSIIOONN", PHPSESSID);
					xhr.setRequestHeader("FileSize",  encodeURIComponent (fb.size) );
					xhr.setRequestHeader("FileName", encodeURIComponent (fb.name) );
					xhr.setRequestHeader("folderOf", so.parent_folder_id);

	            	//xhr.setRequestHeader("Content-Range", "bytes " + (""+(sendOK*LENGTH)) +"-"+ fb.size + "/" +  fb.size  ) ;
	            	xhr.setRequestHeader("Content-Range",  (""+(sendOK*LENGTH)) +"-"+ fb.size   ) ;
	            }else{
	            	//xhr.setRequestHeader("Content-Range", "bytes " + (""+(sendOK*LENGTH)) +"-"+ (""+((sendOK+1)*LENGTH)) + "/" +  fb.size  ) ;
	            	xhr.setRequestHeader("Content-Range",  (""+(sendOK*LENGTH)) +"-"+ (((sendOK+1)*LENGTH)-1)  ) ;
	            }
	            // 如果不是第一次上传
	            if(so.token != undefined){
	            	xhr.setRequestHeader("token", so.token);
	            }
	            //xhr.setRequestHeader("sendOK", sendOK);
				xhr.withCredentials = true;
				// 如果是最后一次
				if((sendOK+1) == sendTimes){
					// 要判断 hash 完成才允许提交
					function send_post(xhr,so,blob){
						if(so.hash != undefined && so.hash !='' && so.hash != null && so.hash.length === 64){
							xhr.send(blob);
						}else{
							setTimeout( send_post , 1000 , xhr , so , blob );
						}
					}
					setTimeout( send_post , 1000 , xhr , so , blob );
				}else{
					xhr.send(blob); //开始上传，发送form数据
				}
	        }
			function uploadFailed_ReSend(){
				send();
			}
	        send();
	    }
	    UpladFile();
		//上传失败
		function uploadFailed(evt) {
			// ////////console.log(evt);
		}
 		//上传成功响应
        function uploadComplete(evt) {
         //服务断接收完文件返回的结果
         //    alert(evt.target.responseText);
         //////////console.log(sendOK);
         //////////console.log(sendTimes);
         	if(sendOK==sendTimes){
	            //////////console.log(evt.target.responseText);
	            //////////console.log("上传成功！");
	            let ResultJSON = JSON.parse(evt.target.responseText);
	            if(ResultJSON["status"]){
	            	so.upload_status_element.style.width = "0%"; // 上传完成 进度归零
	            	so.upload_speed_element.innerText = "上传完成"; // 上传完成 进度归零
	            	so.upload_status_element_text.innerText =  '100%';
			so.pause_element.title = "完成";
			so.pause_element_i.className = "fa fa-check-circle";
			so.pause_element.onclick = function(){return false;};
	            	// 加载0个文件夹 加载1个文件 加载到前面
			// get_files_loadover = false;
			// get_folders_loadover = false;
			// get_files();
			// 把文件添加到列表
			let file_item = {
				"name":ResultJSON["name"],
				"id":ResultJSON["id"],
				// "date":ResultJSON["date"],
				"date":parent.get_datetime(),
				// "size":ResultJSON["size"],
				"size":fb.size,
				"share":ResultJSON["share"],
				"url":ResultJSON["url"],
    				"ftp":ResultJSON["ftp"],
				"media":ResultJSON["media"],
				// "parent":ResultJSON["parent_folder_id"],
				"parent":so.parent_folder_id,
				"offline":ResultJSON["offline"],
				"offline_id":ResultJSON["offline_id"],
				"offline_size":ResultJSON["offline_size"],
				"offline_status":ResultJSON["offline_status"],
			}
			parent.push_files_to_files_page([file_item],true);
	            }else{
			so.upload_status_element.style.width = "0%"; // 上传完成 进度归零
	            	so.upload_speed_element.innerText = "上传失败"; // 上传完成 进度归零
	            	so.upload_status_element_text.innerText =  '未知错误';
	            	parent.upload_file_error('上传中断','上传中断','error');
	            }
				if(so.stop == false){
					so.stop = true;
					if(so.xhrObj!=undefined){
						so.xhrObj.abort();
					}
				}
			}
        }
        //上传进度实现方法，上传过程中会频繁调用该方法
        function progressFunction(evt) {
             let progressBar = document.getElementById("progressBar");
             let percentageDiv = document.getElementById("percentage");
             // event.total是需要传输的总字节，event.loaded是已经传输的字节。如果event.lengthComputable不为真，则event.total等于0
             if (evt.lengthComputable) {//
                 // progressBar.max = evt.total;
                 // progressBar.value = evt.loaded;
                 // percentageDiv.innerHTML = Math.round(evt.loaded / evt.total * 100) + "%";
		so.upload_status_element.style.width =  Math.round(((evt.loaded / evt.total * 100)/sendTimes) + ((sendOK/sendTimes)*100))     + "%";
                 //////////console.log((sendOK + " - " + sendTimes));
            }
            let time = document.getElementById("time");
            let nt = new Date().getTime();//获取当前时间
            let pertime = (nt-ot)/1000; //计算出上次调用该方法时到现在的时间差，单位为s
            ot = new Date().getTime(); //重新赋值时间，用于下次计算
            
            let perload = evt.loaded - oloaded; //计算该分段上传的文件大小，单位b       
            oloaded = evt.loaded;//重新赋值已上传文件大小，用以下次计算
        
            //上传速度计算
            let speed = perload/pertime;//单位b/s
            let bspeed = speed;
            let units = 'b/s';//单位名称
            if(speed/1024>1){
                speed = speed/1024;
                units = 'k/s';
            }
            if(speed/1024>1){
                speed = speed/1024;
                units = 'M/s';
            }
            speed = speed.toFixed(1);
            //剩余时间
            let resttime = ((evt.total-evt.loaded)/bspeed).toFixed(1);
            // statusObj.getElementsByClassName('uploadsList-li-uploading-status')[0].getElementsByTagName('span')[0].innerText = '，速度：'+speed+units+'，剩余时间：'+resttime+'s';
            // so.getElementsByClassName('upload-file-list-li-status')[0].innerText =  Math.round(((evt.loaded / evt.total * 100)/sendTimes) + ((sendOK/sendTimes)*100))     + "%";
	    so.upload_status_element_text.innerText =  Math.round(((evt.loaded / evt.total * 100)/sendTimes) + ((sendOK/sendTimes)*100))     + "%";
		so.upload_speed_element.innerText = speed + units;
		if(bspeed==0){
                	so.upload_status_element_text.innerText = '任务终止';
        	}
        }
}
</script>
</body>
</html>
*/
// 上传出错 调用提示框
function upload_file_error(title,text,icon){
	swal({
		title: title,
		text: text,
		icon: icon,
		dangerMode: true,
		closeOnClickOutside: false,
	});
}
// 上传函数
// 上传文件操作
let ElementIsUploadingNumberMaxStatus = false; // 是否应该等待
let ElementIsUploadingNumberMax = 5; // 最大同时上传五个
function file_upload(Blobs,Element){
	//alert('系统正在维护暂时禁止上传文件！');
	//return false;
	// 如果未登录
	if(userinfo["id"]!=undefined&&userinfo["id"]!=null&&userinfo["id"]!=''&&userinfo["qq"]!=undefined&&userinfo["qq"]!=null&&userinfo["qq"]!=''){
		// pass
	}else{
		return false;
	}
	// 如果上传组件没加载完
	if(!show_upload_full_screen_mask){
		return false;
	}
	// 传到文件夹
	let folder_id = Element.parent_folder_id;
	// 文件大小
	let file_size = Blobs.size;
	// 如果点击取消上传
	Element.delete.onclick = function(){
		Element.stop = true;
		if(Element.xhrObj!=undefined){
			Element.xhrObj.abort();
		}
		function remove_element(Element){
			Element.className = "uploads-item uploads-item-hide";
			setTimeout(function(){
				Element.remove();
			},300);
		}
		remove_element(this.parent);
	}
	// 上传
	upload_window_iframe_element_src_locked = true;

	
	// 任务队列 上传排队
	// 查看有多少个文件正在上传，如果太多，就排队！
	let upload_items_uploading_items = upload_items.getElementsByClassName('uploads-item');
	let upload_items_uploading_items_running_number = 0; // 正在上传多少个
	for(let i=0;i<upload_items_uploading_items.length;i++){
		let item = upload_items_uploading_items[i];
		if( item.stop != undefined && item.stop == false ){
			if(item.isUploading != undefined && item.isUploading == true){
				upload_items_uploading_items_running_number = upload_items_uploading_items_running_number + 1;
			}
		}
		if(upload_items_uploading_items_running_number >= ElementIsUploadingNumberMax){
			break;
		}
	}
	
	if(upload_items_uploading_items_running_number >= ElementIsUploadingNumberMax){
		// 等待之后，重新上传。
		ElementIsUploadingNumberMaxStatus = true;
		Element.upload_speed_element.innerText = "正在排队";
		setTimeout(file_upload,1000,Blobs,Element);
		return false;
	}
	ElementIsUploadingNumberMaxStatus = false;
	Element.isUploading = true;
	Element.upload_speed_element.innerText = "正在上传";

	// 通过非法修改前端，强制提交数据，后端判断为异常，将直接永久封号。
	// 如果容量超额，禁止继续上传。
 	/*if( usedsize >= 2*100*1024*1024*1024 && public_link_status==false ){
  		alert('您的账号存储空间占用已超200GB，已达个人普通账号上限2倍。\r\n企业用户不限容量，并支持绑定自定义下载域名。\r\n示例：https://您的域名.com/download/123/abc/music.mp3\r\n详情：https://www.yunzhongzhuan.com/welcome/');
  		free_or_mini_or_big_vip.className = "";
  		window.location.href="/#setting";
		Element.upload_speed_element.innerText = "空间不足";
  		return false;
	}else{
		upload_window_iframe_element.contentWindow.FileUploadStart(Blobs,Element);
	}*/
	upload_window_iframe_element.contentWindow.FileUploadStart(Blobs,Element);

}
// 计算等待 排队
let need_calc_hash_push_number = 0; // 已加入计算的数量是多少
// 计算 hash 的数组
let workers;
// 上传文件的程序
	// 新上传
  (function () {
    "use strict";
    /*
     * (c) 2011,2015 by md5file.com. All rights reserved.
     */
    /*jslint browser: true, indent: 4*/
    /*global FileReader, File, Worker, alert*/
    let file_id = 1, drop_zone, is_crypto = false;
    if ((typeof File !== 'undefined') && !File.prototype.slice) {
      if(File.prototype.webkitSlice) {
        File.prototype.slice = File.prototype.webkitSlice;
      }
      if(File.prototype.mozSlice) {
        File.prototype.slice = File.prototype.mozSlice;
      }
    }
    if (!window.File || !window.FileReader || !window.FileList || !window.Blob || !File.prototype.slice) {
      alert('File APIs are not fully supported in this browser. Please use latest Mozilla Firefox or Google Chrome.');
    }
    is_crypto = window.crypto && window.crypto.subtle && window.crypto.subtle.digest;
    is_crypto = false; // 启用优质算法
    function hash_file(file, workers, status_element) {
      let i, buffer_size, block, threads, reader, blob, handle_hash_block, handle_load_block;
      handle_load_block = function (event) {
        for( i = 0; i < workers.length; i += 1) {
        	if(status_element.stop == true){
        		return false;
        	}
          threads += 1;
          workers[i].postMessage({
            'message' : event.target.result,
            'block' : block
          });
        }
      };
      handle_hash_block = function (event) {
        threads -= 1;
        if(threads === 0) {
          if(block.end !== file.size) {
        	if(status_element.stop == true){
        		return false;
        	}
            block.start += buffer_size;
            block.end += buffer_size;
            if(block.end > file.size) {
              block.end = file.size;
            }
            reader = new FileReader();
            reader.onload = handle_load_block;
            blob = file.slice(block.start, block.end);
            reader.readAsArrayBuffer(blob);
          }
        }
      };
      buffer_size = 2 * 1024 * 1024;
      block = {
        'file_size' : file.size,
        'start' : 0
      };
      block.end = buffer_size > file.size ? file.size : buffer_size;
      threads = 0;
      for (i = 0; i < workers.length; i += 1) {
        workers[i].addEventListener('message', handle_hash_block);
      }
      reader = new FileReader();
      reader.onload = handle_load_block;
      blob = file.slice(block.start, block.end);
      reader.readAsArrayBuffer(blob);
    }
    function handle_worker_event(id,so,type,fb) {// 1 md5 2 hash
      return function (event) {
		if(so.stop!=undefined && so.stop==true){
			if(so.xhrObj!=undefined){
    			so.xhrObj.abort();
    		}
			need_calc_hash_push_number = need_calc_hash_push_number - 1;
			return false;
		}
        if (event.data.result) {
          if(type==1){ // 计算 MD5 已废
          	so.md5 = event.data.result;// 得到 MD5
          }
          if(type==2){
		need_calc_hash_push_number = need_calc_hash_push_number - 1;
          	so.upload_speed_element.innerText = '0MB/s';
          	so.hash = event.data.result; // 得到 hash
          	let session_id = encodeURIComponent(userinfo["session_id"]);
          	// 查询数据库是否有这个大小的文件
          	// 查找是否可以秒传
			let xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange=function(){
				if(xmlhttp.readyState==4 && xmlhttp.status==200){
					let ResultJSON = JSON.parse(xmlhttp.responseText);
					if(ResultJSON["status"]){
						so.stop = true;
						so.upload_speed_element.innerText = "上传完成"; // 文件秒传
						// so.upload_success_size_element.innerText = get_size_unit( so.size );
						so.upload_status_element.style.width = "0%";
						// so.upload_status_element_text.innerText = "100%";
						so.upload_status_element_text.innerText = "100%"; // 文件秒传
						so.pause_element.title = "完成";
						so.delete.title = "删除";
						so.pause_element_i.className = "fa fa-check-circle";
						// so.delete_i.className = "fa fa-check-circle";
						so.pause_element.onclick = function(){return false;};
						so.delete.parent = so;
						so.delete.onclick = function(){
							this.parent.className = "uploads-item uploads-item-hide";
							function remove_element(div){
								setTimeout(function(){
									div.remove();
								},300);
							}
							remove_element(this.parent);
						}
						// 看看是否要输出
						let files_items = files_items_files_items.getElementsByClassName('files-item');
						let is_flag = false;
						for(let i=0;i<files_items.length;i++){
							let item = files_items[i];
							if(item.item_id==ResultJSON["id"]){
								// 文件就在列表中
								is_flag = true;
								// 更新一下文件的信息
								let new_name = fb.name;
								let icon_type_name = get_files_item_type_icon(new_name);
								item.icon_element.getElementsByTagName('i')[0].className = icon_type_name;
								item.name = new_name;
								item.name_element.getElementsByTagName('span')[0].innerText = new_name;
								item.date_element.getElementsByTagName('span')[0].innerText = ResultJSON["date"];
								// 把文件移动到顶部
								let insert_before_element = files_items_files_items.getElementsByClassName('files-item')[0];
								insert_before_element.parentNode.insertBefore(item,insert_before_element);
								return false;
								break;
							}else{
								// 文件不在列表中
							}
						}
						if(!is_flag){
							// 文件不在列表中
							let file_item = {
								"name":fb.name,
								"id":ResultJSON["id"],
								"date":ResultJSON["date"],
								"size":fb.size,
								"share":ResultJSON["share"],
								"url":ResultJSON["url"],
								"ftp":ResultJSON["ftp"],
								"media":ResultJSON["media"],
								"parent":so.parent_folder_id,
								"offline":ResultJSON["offline"],
								"offline_id":ResultJSON["offline_id"],
								"offline_size":ResultJSON["offline_size"],
								"offline_status":ResultJSON["offline_status"],
								"public_link":ResultJSON["public_link"],
							}
							push_files_to_files_page([file_item],true);
						}
						// 加载文件夹数量0个，加载文件数量0个，从前面插入，加载文件页面0
		            	// FoldersOver=false;
		            	// getFolders(undefined,1,true,0);
		            	// 秒传完成 加载文件
		            	// get_files(1);
					}else{
						// 如果未登录
						if(userinfo["id"]!=undefined&&userinfo["id"]!=null&&userinfo["id"]!=''&&userinfo["qq"]!=undefined&&userinfo["qq"]!=null&&userinfo["qq"]!=''){
							// pass
						}else{
							return false;
						};
						// 如果没有错误码，才可以跳转。
						if(ResultJSON["error_status_code"]==undefined){
							// 没有重复文件，这是新的。
							// file_upload(Blobs,Element);
							if(so.need_calc_hash==true){

								file_upload(fb,so);
							}
						}else{
							// 看看是哪种错误
							if(ResultJSON["error_status_code"]==1){
								swal({title:ResultJSON["error_title"],text:ResultJSON["error_message"],icon:ResultJSON["error_icon"],closeOnClickOutside:false,buttons:ResultJSON["error_buttons"]}).then((willDelete) => {
									if (willDelete) {
										// window.location.href = ResultJSON["error_link"];
										alert(ResultJSON["error_link"]);
									}
								});
							}
						}
					}
				}
			}
			xmlhttp.open("POST",api_server_url+"/php/v4/hash_copy",true);
			xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
			// xmlhttp.withCredentials = true;
			// xmlhttp.onerror = get_user_info_error;
		  	let file_name = fb.name;
			file_name = file_name.replace(/\\/g,'');
			file_name = file_name.replace(/\//g,'');
			file_name = file_name.replace(/:/g,'');
			file_name = file_name.replace(/\*/g,'');
			file_name = file_name.replace(/\?/g,'');
			file_name = file_name.replace(/"/g,'');
			file_name = file_name.replace(/</g,'');
			file_name = file_name.replace(/>/g,'');
			file_name = file_name.replace(/|/g,'');
			file_name = file_name.replace(/%/g,'');
			file_name = file_name.replace(/'/g,'');
			xmlhttp.send("name="+encodeURIComponent(file_name)+"&key=&parent_folder_id="+so.parent_folder_id+"&size="+fb.size+"&hash="+so.hash+ "&session_id=" + session_id );
          }
        } else {
        	if(type==2 ){
        		if(so.need_calc_hash == true){
        			// console.log('需要计算');
        		    // so.getElementsByClassName('upload-file-list-li-speed')[0].innerText = (event.data.block.end * 100 / event.data.block.file_size).toFixed(2) + '%';
        		    // console.log((event.data.block.end * 100 / event.data.block.file_size).toFixed(2) + '%');
        		    so.upload_speed_element.innerText = (event.data.block.end * 100 / event.data.block.file_size).toFixed(2) + '%';
        		}
        	}else{
			need_calc_hash_push_number = need_calc_hash_push_number - 1;
        		return false;
        	}
        	// ////////console.log((event.data.block.end * 100 / event.data.block.file_size).toFixed(2) + '%');
          // ////////console.log(event.data.block.end * 100 / event.data.block.file_size + '%')
        }
      };
    }
    function handle_crypto_progress(id, total, loaded) {
      // ////////console.log(loaded * 100 / total + '%');
    }
	// 上传处理代码
	function handle_file_select(event) {
		// 如果未登录
		if(userinfo["id"]!=undefined&&userinfo["id"]!=null&&userinfo["id"]!=''&&userinfo["qq"]!=undefined&&userinfo["qq"]!=null&&userinfo["qq"]!=''){
			// pass
		}else{
			return false;
		}
		let swal_element = document.getElementsByClassName('swal-overlay--show-modal');
		if(swal_element.length>0){
			return false;
		}
		// 如果上传组件没加载完
		if(!show_upload_full_screen_mask){
			return false;
		}
		let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
		if(!userinfo["vipstatus"]){
			for(let i=0;i<files.length;i++){
				if(files[i].size>not_vip_upload_file_size){
					
					function fun_1(){
						upload_file_full_screen_mask.style.display="none";
					}
					setTimeout(fun_1,10);
					
					if(upload_file_max_size == 0){
						
						alert('您的账号因违反本平台《用户协议》已被禁止。');
						
						// window.location.href="/#setting";
						
					}else{


						swal({
							title: "系统信息",
							// text: "免费用户单个文件上传最大允许" + get_size_unit( not_vip_upload_file_size ) + "。\r\n会员用户单个文件上传最大允许" + get_size_unit( upload_file_max_size ) + "。\r\n联系我们，支持上传文件大小不限。",
							text: "您的账号上传单个文件最大允许" + get_size_unit( not_vip_upload_file_size ) + "。\r\n联系我们上传单个文件最大支持" + get_size_unit(30*1024*1024*1024) + "。\r\n注意：最大允许保存单个文件大小范围由系统定期调整，并非固定，请关注云中转官方哔哩哔哩账号/微信公众号/官方QQ群及时了解最新消息。",
							icon: "warning",
							buttons: ["取消","详情"],
							closeOnClickOutside: false,
							dangerMode: true,
						}).then((willDelete) => {
						  if (willDelete) {
							window.open('/welcome/#mail-talk-position');
						  }
						});
						
					}


					return false;
				}
			}
		}
		
		if(upload_lock){
			swal({
				title: upload_lock_title,
				text: upload_lock_text,
				icon: upload_lock_icon,
				buttons: upload_lock_buttons,
				// dangerMode: true,
				closeOnClickOutside: false,
			}).then((willDelete) => {
				if (willDelete) {
					upload_lock_functions();
				}
			});
			return false;
		}
		// 关闭 上传遮罩
		// document.getElementsByClassName('upload-file-full-screen')[0].style.display="none";
		function hide_full_screen_mask(){
			upload_items.scrollTop=0;
			upload_file_full_screen_mask.style.display="none";
			// not_mobile_remove();
		}
		hide_full_screen_mask();
		// console.log('关闭遮罩');
		setTimeout(hide_full_screen_mask,10);
		let hash = "";
		let md5 = "";
		event.stopPropagation();
		event.preventDefault();
		let i, file, worker, reader, crypto_files, crypto_algos, max_crypto_file_size = 500 * 1024 * 1024;
		
		crypto_files = [];
		// 统计上传文件大小超出的文件数量
		let over_size_num = 0;
		// let uploadsList = document.getElementsByClassName('upload-file-list-content')[0];
		// let uploadsLi = uploadsList.getElementsByClassName('upload-file-list-li');
		for (let i = 0; i < files.length; i += 1) {
			let file = files[i];
			// console.log(file);
			// 判断是否在上传列表中
			let upload_items_list = upload_items.getElementsByClassName('uploads-item');
			// 判断是否存在上传列表中
			let upload_item_is_flag = false;
			for(let i=0;i<upload_items_list.length;i++){
				let item = upload_items_list[i];
				if( file.name == item.name && file.size == item.size ){
					upload_item_is_flag = true;
					break;
				}
			}
			if(upload_item_is_flag){
				continue;
			}
			if(file.size>upload_file_max_size){
				over_size_num++;
			}else{
				// 继续上传
				// 如果文件名不符合
				// 文件名不能包含特殊符号
				// \/:*?"<>|
				let file_name = file.name;
				file_name = file_name.replace(/\\/g,'');
				file_name = file_name.replace(/\//g,'');
				file_name = file_name.replace(/:/g,'');
				file_name = file_name.replace(/\*/g,'');
				file_name = file_name.replace(/\?/g,'');
				file_name = file_name.replace(/"/g,'');
				file_name = file_name.replace(/</g,'');
				file_name = file_name.replace(/>/g,'');
				file_name = file_name.replace(/|/g,'');
				file_name = file_name.replace(/%/g,'');
				file_name = file_name.replace(/'/g,'');
				if(
					file_name.indexOf("downloading") == -1
					&&
					file_name.indexOf("baiduyun") == -1
					&&
					file_name.indexOf("crdownload") == -1
				){
					// console.log(file.name);
			        workers = [];
			        crypto_algos = [];
			    	// 创建上传元素
			    	// ////////console.log(event);
			    	let div = document.createElement('div');
			    	div.name = file_name;
			    	div.size = file.size;
			    	div.className = "uploads-item uploads-item-hide";
			    	// div.innerHTML = '<div class="transfer-item-filename"><div class="transfer-item-filename-name">'+div.name+'</div><div class="transfer-item-filename-size"><span class="upload-success-size-element">0</span>/'+get_size_unit(div.size)+'</div></div><div class="transfer-item-buttons"><div class="transfer-item-button">暂停</div><div class="transfer-item-button transfer-item-delete">删除</div></div><div class="transfer-item-uploading-status"><div class="transfer-item-transfering-background-color"><div class="transfer-item-transfering-background-color-full"></div></div><div class="transfer-item-transfering-speed upload-speed-element">0MB/s</div></div>';
			    	div.innerHTML = '<div class="uploads-item-status-background-color" style="width: 0%;"></div><div class="uploads-item-icon"><i class="' + get_files_item_type_icon(div.name) + '"></i></div><div class="uploads-item-name">' + div.name + '</div><div class="uploads-item-size">' + get_size_unit(div.size) + '</div><div class="uploads-item-status">0%</div><div class="uploads-item-speed">正在排队</div><div class="uploads-item-icon uploads-item-pause-button"><i class="fa fa-pause-circle"></i></div><div class="uploads-item-icon uploads-item-stop-button"><i class="fa fa-trash"></i></div>';
			    	div.stop = false;
			    	div.upload_paused = false;
			    	div.md5 = "";
			    	div.hash = "";
			    	// 文件名元素
			    	div.name_element = div.getElementsByClassName('uploads-item-name')[0];
			    	div.name_element.title = div.name;
			    	// 暂停上传
			    	div.pause_element = div.getElementsByClassName('uploads-item-pause-button')[0];
			    	div.pause_element.parent = div;
			    	div.pause_element_i = div.pause_element.getElementsByTagName('i')[0];
			    	div.pause_element.title = "暂停";
			    	div.pause_element.onclick = function(){
			    		this.parent.upload_paused = !this.parent.upload_paused;
			    		if(this.parent.upload_paused){
			    			div.pause_element_i.className = "fa fa-play-circle";
			    			div.pause_element.title = "继续";
			    		}else{
			    			div.pause_element_i.className = "fa fa-pause-circle";
			    			div.pause_element.title = "暂停";
			    		}
			    	}
			    	// 正在计算  HASH  取消上传
			    	div.delete = div.getElementsByClassName('uploads-item-stop-button')[0];
			    	div.delete_i = div.delete.getElementsByTagName('i')[0];
			    	div.delete.title = "取消";
			    	div.delete.parent = div;
			    	div.delete.onclick = function(){
			    		if(this.parent.xhrObj!=undefined){
			    			this.parent.xhrObj.abort();
			    		}
			    		// 表示终止上传
			    		this.parent.stop = true;
			    		this.parent.className = "uploads-item uploads-item-hide";
			    		// 移除文件
			    		function delete_element(div){
			    			setTimeout(function(){
			    				div.remove();
			    			},300);
			    		}
			    		delete_element(this.parent);
			    	}
			    	// 文件上传速度显示元素
			    	div.upload_speed_element = div.getElementsByClassName('uploads-item-speed')[0];
			    	// 文件已经上传大小内容
			    	// div.upload_success_size_element = div.getElementsByClassName('upload-success-size-element')[0];
			    	// 上传进度条
			    	div.upload_status_element = div.getElementsByClassName('uploads-item-status-background-color')[0];
			    	// 上传百分比
			    	div.upload_status_element_text = div.getElementsByClassName('uploads-item-status')[0];
			    	// 上传状态 DIV Element
					let status_element = div;
					// 是否需要计算计算
					status_element.need_calc_hash = true;
					// 当前文件夹 ID
					status_element.parent_folder_id = get_files_folders_array[get_files_folders_index];
					// 打开上传窗口
					show_uploads_window();
					// 加入到上传列表
					upload_items.prepend(div);
					// 倒计时 打开
					function upload_list_file_show(div,i){
						setTimeout(function(){
							div.className = "uploads-item";
						},(i*20)+20);
					}
					upload_list_file_show(div,i);
					// 开始上传
					function start_upload(status_element,file,workers,crypto_algos){
						
						// 如果要等待，那就等待
						if(
							ElementIsUploadingNumberMaxStatus!=undefined
							&&
							ElementIsUploadingNumberMaxStatus==true
						  ){
							if(need_calc_hash_push_number!=undefined){
								if(
									need_calc_hash_push_number < ElementIsUploadingNumberMax
								){
									ElementIsUploadingNumberMaxStatus = false;
								}
								if(need_calc_hash_push_number<0){
									need_calc_hash_push_number = 0;
								}
							}
							setTimeout(start_upload,1000,status_element,file,workers,crypto_algos);
							return false;
							
						}else{
							// pass
						}
						
						if(
							need_calc_hash_push_number != undefined
							&&
							need_calc_hash_push_number >= ElementIsUploadingNumberMax
						){
							ElementIsUploadingNumberMaxStatus = true;
							setTimeout(start_upload,1000,status_element,file,workers,crypto_algos);
							return false;
						}
						
						if(status_element.need_calc_hash){
							// 如果需要计算
						}else{
							// 只有大于100的文件才允许先上传
							if(file.size > upload_file_item_size ){
								// 大于 100 M 无需计算 直接上传
							    setTimeout(file_upload,100,file,status_element);
							}else{
								// 需要计算
								status_element.need_calc_hash = true;
							}
						}
						
						need_calc_hash_push_number = need_calc_hash_push_number + 1;
						
						if (true || document.getElementById('hash_hash').checked) {
						  if (is_crypto && file.size < max_crypto_file_size) {
							crypto_algos.push({id: "#hash_file_hash_" + file_id, name: "Hash"});
						  } else {
							worker = new Worker('/js/calc_hash.js');
							worker.addEventListener('message', handle_worker_event('hash_file_hash_' + file_id,status_element,2,file));
							workers.push(worker);
						  }
						}
						if (is_crypto && crypto_algos.length > 0) {
						  crypto_files.push({file: file, algos: crypto_algos});
						}
						hash_file(file, workers, status_element);
						file_id += 1;
					}
					// 判断文件是否可以边计算边上传
					function need_calc_hash_(status_element,file,workers,crypto_algos){
						
						// 如果要等待
						if(
							ElementIsUploadingNumberMaxStatus!=undefined
							&&
							ElementIsUploadingNumberMaxStatus==true
						  ){
							if(need_calc_hash_push_number!=undefined){
								if(
									need_calc_hash_push_number < ElementIsUploadingNumberMax
								){
									ElementIsUploadingNumberMaxStatus = false;
								}
								if(need_calc_hash_push_number<0){
									need_calc_hash_push_number = 0;
								}
							}
							setTimeout(need_calc_hash_,1000,status_element,file,workers,crypto_algos);
							return false;
							
						}else{
							// pass
						}
						
						if(
							need_calc_hash_push_number != undefined
							&&
							need_calc_hash_push_number >= ElementIsUploadingNumberMax
						){
							setTimeout(need_calc_hash_,1000,status_element,file,workers,crypto_algos);
							return false;
						}
						
						
						let xmlhttp_need_calc_hash = new XMLHttpRequest();
						let session_id = encodeURIComponent(userinfo["session_id"]);
						xmlhttp_need_calc_hash.onreadystatechange=function(){
							if(xmlhttp_need_calc_hash.readyState==4 && xmlhttp_need_calc_hash.status==200){
								let ResultJSON = JSON.parse(xmlhttp_need_calc_hash.responseText);
								if(ResultJSON["status"]){
									// need calc
									status_element.need_calc_hash = true;
								}else{
									status_element.need_calc_hash = false;
									// calc and upload
								}
								// 得到结果 开始上传
								start_upload(status_element,file,workers,crypto_algos);
							}
						}
						xmlhttp_need_calc_hash.open("POST",api_server_url+"/php/v4/need_calc_hash",true);
						xmlhttp_need_calc_hash.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
						// xmlhttp_need_calc_hash.withCredentials = true;
						xmlhttp_need_calc_hash.send("size=" + file.size + "&name=" + file.name + "&session_id=" + session_id );
					}
					need_calc_hash_(status_element,file,workers,crypto_algos);
				}else{
					over_size_num++;
				}
			}
		}
      if(over_size_num>0){
	      
	      if(upload_file_max_size == 0){
						
		alert('您的账号因违反本平台《用户协议》已被禁止。');
		      
		// window.location.href="/#setting";
						
		}else{
			swal({
			  title: "温馨提示",
			  text: "共有" + over_size_num + "个文件不能加入上传列队，因其大小异常、数据不完整或超出" + get_size_unit( upload_file_max_size ) + "单个文件上传最大大小允许（注意：最大允许保存单个文件大小范围由系统定期调整，并非固定，请关注云中转官方哔哩哔哩账号/微信公众号/官方QQ群及时了解最新消息）。\r\n联系我们上传单个文件最大支持" + get_size_unit(30*1024*1024*1024) + "。",
			  icon: "warning",
			  buttons:["取消","详情"],
			  closeOnClickOutside: false,
			}).then((willDelete) => {
			if (willDelete) {
				// window.location.href = "#terms";
				// window.location.href = "#terms";
				window.open('/welcome/#mail-talk-position');
				}
			});
		}
      }
      if (is_crypto) {
        handle_crypto_files(crypto_files);
      }
	}
    function handle_crypto_files(crypto_files) {
      let crypto_file, handle_crypto_file, handle_crypto_block, reader;
      crypto_file = crypto_files.pop();
      handle_crypto_block = function(data, algos) {
        let algo = algos.pop();
        if (algo) {
          window.crypto.subtle.digest({name: algo.name}, data)
          .then(function(hash) {
            let hexString = '', hashResult = new Uint8Array(hash);
            for (let i = 0; i < hashResult.length; i++) {
            	// console.log('计算');
              hexString += ("00" + hashResult[i].toString(16)).slice(-2);
            }
            // ////////console.log(hexString);
            handle_crypto_block(data, algos);
          })
          .catch(function(error) {
            console.error(error);
          });
        } else {
          handle_crypto_files(crypto_files);
        }
      };
      handle_crypto_file = function(file, crypto_algos) {
        reader = new FileReader();
        reader.onprogress = (function(crypto_algos) {
          let algos = crypto_algos;
          return function(event) {
            let i;
            for (i = 0; i < algos.length; i++) {
            	// console.log('计算');
              handle_crypto_progress(algos[i].id, event.total, event.loaded);
            }
          }
        })(crypto_algos);
        reader.onload = (function(crypto_algos) {
          let algos = crypto_algos;
          return function(event) {
            handle_crypto_block(event.target.result, algos);
          }
        })(crypto_algos);
        reader.readAsArrayBuffer(file);
      };
      if (crypto_file) {
        handle_crypto_file(crypto_file.file, crypto_file.algos);
      }
    }
    function handle_drag_over(event) {
      event.stopPropagation();
      event.preventDefault();
    }
    drop_zone = document.getElementById('drop_zone');
    //drop_zone.addEventListener('dragover', handle_drag_over, false);
    // drop_zone.addEventListener('drop', handle_file_select, false);
	// 绑定文件按钮
	// document.getElementsByClassName('upload-file-input')[0].addEventListener('change', handle_file_select, false);
	// 上传按钮点击后触发
	files_options_item_upload_files_input.addEventListener('change', handle_file_select, false);
	// 邦定上传元素
	document.addEventListener('drop', handle_file_select, false);
 }());
// 拖动文件上传
// 处理拖动文件进来 拖放文件
/*
DragDrop：拖放完成，也就是鼠标拖入对象并在拖放区域释放。
DragEnter：拖放进入，也就是鼠标拖放对象进入拖放区域。
DragLeave：离开拖放区域。
DragOver：拖放对象悬浮于拖放区域，在拖放区域内移动时多次触发。
*/
document.addEventListener("drop",preventDe_On);
upload_file_full_screen_mask.addEventListener("dragleave",preventDe_Out);
document.addEventListener("dragover",preventDe_On);// 
// document.addEventListener("dragenter",preventDe_On);
// 首次拖进
function preventDe_On(e){
	// 如果未登录
	if( userinfo["id"]!=undefined&&userinfo["id"]!=null&&userinfo["id"]!=''&&userinfo["qq"]!=undefined&&userinfo["qq"]!=null&&userinfo["qq"]!=''&&window.location.href.indexOf("#files")!=-1&&files.className.indexOf("files-hide")==-1){
		// pass
	}else{
		return false;
	}
	e.preventDefault();
	// 打开元素
	if(upload_lock){
		if(document.getElementsByClassName('swal-overlay--show-modal')[0]==undefined){
			swal({
				title: upload_lock_title,
				text: upload_lock_text,
				icon: upload_lock_icon,
				buttons: upload_lock_buttons,
				// dangerMode: true,
				closeOnClickOutside: false,
			}).then((willDelete) => {
				if (willDelete) {
					upload_lock_functions();
				}
			});
		}
	}else{
		// 如果弹窗还在
		let swal_element = document.getElementsByClassName('swal-overlay--show-modal');
		if(swal_element.length>0){
			return false;
		}
		// 如果未登录
		if(userinfo["id"]!=undefined&&userinfo["id"]!=null&&userinfo["id"]!=''&&userinfo["qq"]!=undefined&&userinfo["qq"]!=null&&userinfo["qq"]!=''&&userinfo["username"]!=undefined&&userinfo["username"]!=null&&userinfo["username"]!=''){
			/*if(upload_window_iframe_element.src != api_upload_web_url){
				show_upload_full_screen_mask = false;
				upload_window_iframe_element.src = api_upload_web_url;
			}*/
			if(!show_upload_full_screen_mask){

				set_upload_cdn_cloudflare();
				return false;
			}
		}else{
			window.location.href = "#login";
			return false;
		}
		if(show_upload_full_screen_mask){
			upload_file_full_screen_mask.style.display="block";
		}		
	}
}
// 文件拖进来了
/*
document.addEventListener("drop",function(e){
	e.preventDefault();
	FilesUpload(e.dataTransfer.files);
	document.getElementsByClassName('upload-file-full-screen')[0].style.display="none";
});
*/
/*
function preventDe_OnUp(e){
document.getElementsByClassName('uploadFileMasker')[0].style.display="block";
}
*/
function preventDe_Out(e){
	e.preventDefault();
	upload_file_full_screen_mask.style.display="none";
}
// 点击关闭上传遮罩
/*
upload_file_full_screen_mask.onclick = function(){
	upload_file_full_screen_mask.style.display="none";
}
// 开始上传
function FilesUpload(files){
	////////console.log(files);
	uploadListOpen();
}
*/

// 如果还在验证 继续获取用户信息
let wechat_login_id_set_timeout_function_timeout;
function wechat_login_id_set_timeout_function(){
	let swal_element = document.getElementsByClassName('swal-overlay--show-modal');
	if(swal_element.length>0){
		get_userinfo();
		login_input_button_wechat_login.click();
	};
}

 function wechat_verify_clear_timeout(){
	try{
		clearTimeout(wechat_login_id_set_timeout_function_timeout);
	}catch(e){
		// pass
	}
	try{
		clearTimeout(wechat_bind_auto_click_login_button_timeout);
	}catch(e){
		// pass
	}
	try{
		clearTimeout(register_verify_timeout);
	}catch(e){
		// pass
	}
	
	swal_button__cancel_button_element = document.getElementsByClassName('swal-button--cancel');
}

// 微信登录按钮
let login_input_button_wechat_login = document.getElementById('login-input-button-wechat-login');
login_input_button_wechat_login.onclick = async function(){
	
	swal({
		title: "指令登录",
		text: "该功能已临时停用。",
		icon: "error",
		// buttons: true,
		dangerMode: true,
		closeOnClickOutside: false,
	});
	return false;

	if(userinfo["wechat_login_id"] == undefined){
		return false;
	}

	let text = '打开手机微信，扫描云中转官方订阅号二维码并关注。\r\n回复：“登录' + userinfo["wechat_login_id"] + '”即可快速登录。';
	let swal_element = document.getElementsByClassName('swal-overlay--show-modal');
	if(swal_element.length>0){
		// pass
		swal_element[0].getElementsByClassName('swal-text')[0].innerText = text;
	}else{

		let content_element = document.createElement('div');
		content_element.innerHTML = '<img src="/img/wechat_qrcode_1.png" />';

		// 微信登录
		swal({
			title: "微信登录",
			text: text,
			icon: "success",
			content: content_element,
			// buttons: true,
			// dangerMode: true,
			buttons: true,
			closeOnClickOutside: false,
		});
	}

	wechat_login_id_set_timeout_function_timeout = setTimeout(wechat_login_id_set_timeout_function,3600);

	setTimeout(function(){
		// swal 取消按钮 点击事件
		let swal_button__cancel_button_element = document.getElementsByClassName('swal-button--cancel');
		swal_button__cancel_button_element[swal_button__cancel_button_element.length-1].onclick = wechat_verify_clear_timeout;
	},500);




}




// 如果还在验证 继续获取用户信息
let qq_login_id_set_timeout_function_timeout;
function qq_login_id_set_timeout_function(){
	let swal_element = document.getElementsByClassName('swal-overlay--show-modal');
	if(swal_element.length>0){
		get_userinfo();
		login_input_button_qq_login.click();
	};
}

 function qq_verify_clear_timeout(){
	try{
		clearTimeout(qq_login_id_set_timeout_function_timeout);
	}catch(e){
		// pass
	}
	try{
		clearTimeout(qq_bind_auto_click_login_button_timeout);
	}catch(e){
		// pass
	}
	try{
		clearTimeout(register_verify_timeout);
	}catch(e){
		// pass
	}
	
	swal_button__cancel_button_element = document.getElementsByClassName('swal-button--cancel');
}

// GITHUB登录
let login_input_button_github_login = document.getElementById('login-input-button-github-login');
if(
	login_input_button_github_login != undefined
){
	login_input_button_github_login.onclick = function(){
		// window.location.href = "https://github.com/login/oauth/authorize?client_id=Ov23liaKKUcbdbhHtGG3&redirect_uri=https://www." + getTopLevelDomain(window.location.hostname) + "/oauth/redirect/github/";
		window.location.href = "https://github.com/login/oauth/authorize?client_id=Ov23liaKKUcbdbhHtGG3&redirect_uri=https://www.yunzhongzhuan.com/oauth/redirect/github/";
	}
}



// QQ登录按钮
let login_input_button_qq_login = document.getElementById('login-input-button-qq-login');
login_input_button_qq_login.onclick = async function(){

	if(
		window.location.href.indexOf('#register')!=-1
	){
		register_input_button_register.click();
		return false;
	}

	if(
		window.location.href.indexOf('#forget-password')!=-1
	){
		forget_password_input_button_forget_password.click();
		return false;
	}

	if(
		userinfo["qq_login_id"] == undefined
		&&
		userinfo["wechat_login_id"] != undefined
	){
		show_verify_code();
		return false;
	}
	
	use_qq_qr_code_login = true;
	if(userinfo["qq_login_id"]==undefined||userinfo["qq_login_id"]=="0"||userinfo["qq_login_id"].length<5){
		get_userinfo();
		return false;
	}
	
	if(window.location.href.indexOf('#forget-password')!=-1){
		try{
			document.getElementsByClassName('swal-button swal-button--confirm swal-button--danger')[0].click();
		}catch(e){};
		return false;
	}

	let text = '手机QQ扫描二维码安全登录。\r\n5秒钟后系统自动更新二维码。\r\n登录位置：广东省（服务器位置）';
	// let qr_code = 'https://applicationprogramminginterface.yzzpan.com' + '/php/temp/imgs/' + userinfo["qq_login_id"] + ".png?t=0&";;
	// let qr_code = api_server_url + '/php/temp/imgs/' + userinfo["qq_login_id"] + ".png?t=0&";;
	// let qr_code = "https://gimg2.baidu.com/gimg/app=2011&src="+encodeURIComponent('https://cae45776685ba.cname.frontwize.com/php/temp/imgs/' + userinfo["qq_login_id"] + ".png?t=0&");;
	let qr_code = 'https://cae45776685ba.cname.frontwize.com/php/temp/imgs/' + userinfo["qq_login_id"] + ".png?t=0&";
	let swal_element = document.getElementsByClassName('swal-overlay--show-modal');
	let qq_login_id_qr_code_element = document.getElementsByClassName('qq_login_id_qr_code');
	if(swal_element.length>0 && qq_login_id_qr_code_element.length>0){
		// pass
		swal_element[0].getElementsByClassName('swal-text')[0].innerText = text;
		let qq_code_element = document.getElementsByClassName('qq_login_id_qr_code');
		if(qq_code_element[0]!=undefined){
			qq_code_element[0].src=qr_code;
		}
	}else{

		let content_element = document.createElement('div');
		content_element.innerHTML = '<img class="qq_login_id_qr_code" src="' + qr_code + '" />';
		// QQ登录
		swal({
			title: "QQ登录",
			text: text,
			icon: "success",
			content: content_element,
			// buttons: true,
			// dangerMode: true,
			buttons: true,
			closeOnClickOutside: false,
		});
	}
	

	
	qq_login_id_set_timeout_function_timeout = setTimeout(qq_login_id_set_timeout_function,3600);
	setTimeout(function(){
		// swal 取消按钮 点击事件
		let swal_button__cancel_button_element = document.getElementsByClassName('swal-button--cancel');
		swal_button__cancel_button_element[swal_button__cancel_button_element.length-1].onclick = qq_verify_clear_timeout;
	},500);
}





// 找回密码
let forget_password_input_username = document.getElementById('forget-password-input-username');
let forget_password_input_password = document.getElementById('forget-password-input-password');
let forget_password_input_password_2 = document.getElementById('forget-password-input-password-2');
let forget_password_input_qq = document.getElementById('forget-password-input-qq');
function forget_password_functions(){
	let username = encodeURIComponent( forget_password_input_username.value );
	let password = encodeURIComponent( forget_password_input_password.value );
	let qq = encodeURIComponent( forget_password_input_qq.value );
	let session_id = encodeURIComponent(userinfo["session_id"]);
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			let ResultJSON = JSON.parse(xmlhttp.responseText);
			if(ResultJSON["verify_pass"]!=undefined&&ResultJSON["verify_pass"]==false){
				userinfo["qq_login_id"] = undefined;
			}
			if(ResultJSON["status"]){
				// 验证失败
				register_verify_timeout = setTimeout(register_verify,3600,ResultJSON["id"],ResultJSON["verify"]);
				// 显示正在验证
				swal({
					title: "等待验证",
					text: "第一步，登录QQ号码（" + qq + "）。\r\n第二步、设置QQ昵称（" + ResultJSON["verify"] + "）。\r\n请勿关闭当前提示框！修改QQ昵称进行验证。\r\n验证通过之后，可修改回原来的昵称，不影响。\r\n注意：复制括号中的内容，不用复制括号。",
					icon: "info",
					// buttons: true,
					// dangerMode: true,
					buttons: true,
					closeOnClickOutside: false,
				}).then((willDelete) => {
					try{
						clearTimeout(register_verify_timeout);
					}catch(e){
						// pass
					}
				});
			}else{
				swal({
					title: "找回失败",
					text: ResultJSON["message"],
					icon: "error",
					button: "继续",
					// buttons: true,
					dangerMode: true,
					closeOnClickOutside: false,
				}).then((willDelete) => {
					
						show_verify_code();
					
				});
			}
			
		}
	}
	xmlhttp.open("POST",api_server_url+"/php/v4/forget_password",true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;
	xmlhttp.send( "username=" + username + "&password=" + password + "&qq=" + qq + "&session_id=" + session_id );
}
let forget_password_input_button_forget_password = document.getElementById('forget-password-input-button-forget-password');
forget_password_input_button_forget_password.onclick = function(){
	if(userinfo["qq_login_id"]!=undefined&&userinfo["qq_login_id"]!=""&& isNaN(userinfo["qq_login_id"])==false ){
		
	}else{
		show_verify_code();
		return false;
	}
	// 如果账号密码为空
	if( forget_password_input_username.value.length == 0 || forget_password_input_password.value.length == 0 || ( forget_password_input_password.value != forget_password_input_password_2.value ) || forget_password_input_qq.value.length < 5 || forget_password_input_qq.value.length > 10 || isNaN(forget_password_input_qq.value) || forget_password_input_qq.value.indexOf('.') != -1 ){
		swal({
			title: "找回提示",
			text: "请正确填写完整的找回信息。",
			icon: "error",
			// buttons: true,
			// dangerMode: true,
			// buttons: true,
			closeOnClickOutside: false,
		});
		return false;
	}
	forget_password_functions();
}
// 实时验证QQ用户名是否匹配验证字符串
let register_verify_timeout;
let register_verify_xmlhttp_error_times = 0;
function register_verify(id,verify){
	let xmlhttp = new XMLHttpRequest();

	xmlhttp.onerror = function(){
		register_verify_xmlhttp_error_times++;
		if(register_verify_xmlhttp_error_times>10){
			return false;
		}
		setTimeout(register_verify,3000,id,verify);
	}
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			let ResultJSON = JSON.parse(xmlhttp.responseText);
			if(ResultJSON["status"]){
				swal({
					title: "验证成功",
					text: ResultJSON["message"],
					icon: "success",
					// buttons: true,
					// dangerMode: true,
					closeOnClickOutside: false,
				});
			}else{

				register_verify_timeout = setTimeout(register_verify,3000,id,verify);

			}
		}
	}
	xmlhttp.open("POST",api_server_url+"/php/v4/register_verify",true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;
	xmlhttp.send( "id=" + id + "&verify=" + verify );
	register_verify_xmlhttp_error_times = 0;
}
// 注册页面输入框
let register_input_username = document.getElementById('register-input-username');
let register_input_password = document.getElementById('register-input-password');
let register_input_password_2 = document.getElementById('register-input-password-2');
let register_input_qq = document.getElementById('register-input-qq');
let register_input_button_register = document.getElementById('register-input-button-register');
// 提交注册信息
function register_functions(){
	let username = encodeURIComponent(register_input_username.value);
	let password = encodeURIComponent(register_input_password.value);
	let qq = encodeURIComponent(register_input_qq.value);
	let session_id = encodeURIComponent(userinfo["session_id"]);
	let xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			let ResultJSON = JSON.parse(xmlhttp.responseText);
			if(ResultJSON["status"]){
				// register_verify(ResultJSON["id"],ResultJSON["verify"]);
				register_verify_timeout = setTimeout(register_verify,3000,ResultJSON["id"],ResultJSON["verify"]);
				// 显示正在验证
				swal({
					title: "等待验证",
					text: "第一步，登录QQ号码（" + qq + "）。\r\n第二步、设置QQ昵称（" + ResultJSON["verify"] + "）。\r\n请勿关闭当前提示框！修改QQ昵称进行验证。\r\n验证通过之后，可修改回原来的昵称，不影响。\r\n注意：复制括号中的内容，不用复制括号。",
					icon: "info",
					// buttons: true,
					// dangerMode: true,
					buttons: true,
					closeOnClickOutside: false,
				}).then((willDelete) => {
					try{
						clearTimeout(register_verify_timeout);
					}catch(e){
						// pass
					}
				});
			}else{
				// 验证失败
				if(
					ResultJSON["verify_pass"]!=undefined
					&&
					ResultJSON["verify_pass"]==false
				){
					show_verify_code();
				}else{
					swal({
						title: "注册失败",
						text: ResultJSON["message"],
						icon: "error",
						// buttons: true,
						// dangerMode: true,
						closeOnClickOutside: false,
					});
				}
			}
		}
	}
	xmlhttp.open("POST",api_server_url+"/php/v4/register",true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	xmlhttp.withCredentials = true;
	xmlhttp.send( "username=" + username + "&qq=" + qq + "&password=" + password + "&session_id=" + session_id + "&register=1" );
}
register_input_button_register.onclick = function() {
	// 如果账号密码为空
	if( register_input_username.value.length == 0 || register_input_password.value.length == 0 || ( register_input_password.value != register_input_password_2.value ) || register_input_qq.value.length < 5 || register_input_qq.value.length > 10 || isNaN(register_input_qq.value) || register_input_qq.value.indexOf('.') != -1 ){
		swal({
			title: "注册提示",
			text: "请正确填写完整的注册信息。",
			icon: "error",
			// buttons: true,
			// dangerMode: true,
			// buttons: true,
			closeOnClickOutside: false,
		});
		return false;
	}
	register_functions();
}
// 用户协议
let terms_of_services = document.getElementById('terms-of-services');
let terms_of_services_content = terms_of_services.getElementsByClassName('terms-of-services-content')[0];
// 分享文件
let sharefile = document.getElementById('sharefile');
let sharefile_page_show_files_button = document.getElementById('sharefile-page-show-files-button');
sharefile_page_show_files_button.onclick = function(){
	// window.location.href = "#files";
	
	if(window.history.length>3){ // 是否可返回上一页
		window.history.back();
	}else{
		window.location.href = "#files";
	}

}

let upload_lock = true;
let upload_lock_title = "加载组件";
let upload_lock_text = "上传组件正在加载，请您稍等。";
let upload_lock_icon = "error";
let upload_lock_buttons = undefined;
function upload_lock_functions(){

}
function query_all_files_sum_size(){
	upload_lock = false;
	return false;
	let xmlhttp = new XMLHttpRequest();
	let session_id = encodeURIComponent(userinfo["session_id"]);
	xmlhttp.onreadystatechange=function(){
		if(xmlhttp.readyState==4 && xmlhttp.status==200){
			let ResultJSON = JSON.parse(xmlhttp.responseText);
			if(ResultJSON["upload_lock"]){
				// lock upload
				upload_lock = true;
				upload_lock_text = "您的存储容量已达到2TB上限，请联系我们升级帐户。\r\n可升级至8TB/无限制存储容量。";
				upload_lock_title = "配额用完";
				upload_lock_buttons = ["取消","查看"];
				upload_lock_functions = function(){
					window.open('https://yunzhongzhuan.com/welcome/#nav-pricing-position');
				}
			}else{
				upload_lock = false;
			}
		}
	}
	xmlhttp.open("POST",api_server_url+"/php/v4/query_all_files_sum_size",true);
	xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
	// xmlhttp_need_calc_hash.withCredentials = true;
	xmlhttp.send("t=1&session_id=" + session_id );
}

function preview_media(TheURL){
	console.log(TheURL);
	let onlyText = "\r\n预览链接有效期24小时，未经授权域名引用Referer将被拒绝，联系我们绑定自定义域名即可使用永久有效文件链接，无限流量无Referer限制。";
	if(
		userinfo["public_link"]
		||
		userinfo["private_link"]
	){
		onlyText = "\r\n您是本站企业账号！在您的企业账号资格到期之前，这个链接是永久有效期的！无限流量无Referer限制！";
	}
	let isMedia = true;
	let innerHTML;
	
	// return false;
	// let cache_id = files_items_selected_array[0].url.split('/download/media/')[1].split('/')[0];
	// let cache_id = files_items_selected_array[0].ftp;
	
	if(
		TheURL != undefined
	){
		cache_url = TheURL;
	}else{
		let cache_url = files_items_selected_array[0].ftp; // "https://cache.yunzhongzhuan.com/"+cache_id + "/" + files_items_selected_array[0].name;
	}


	LinkinnerHTML = "<div><a href='" + cache_url + "' target='_blank'>" + cache_url + "</a></div>";
	
	// let cache_url = "https://download.cloudfiles.host/"+cache_id.substr(0,6)+"-"+cache_id.substr(6,8)+"-"+cache_id.substr(14,4)+"-"+cache_id.substr(18,4)+"-"+cache_id.substr(22,4)+"-"+cache_id.substr(26,12);
	let html_element = document.createElement('div');
	html_element.className = "cache-media-preview";
	if(files_items_selected_array[0].name.split('.mp4').length==2&&files_items_selected_array[0].name.split('.mp4')[1]==''){
	innerHTML = "<div><video controls title='"+files_items_selected_array[0].name+"' alt='"+files_items_selected_array[0].name+"'><source src='"+cache_url+"' type='video/mp4'></video></div>";
	}else if(files_items_selected_array[0].name.split('.mp3').length==2&&files_items_selected_array[0].name.split('.mp3')[1]==''){
	innerHTML = "<div><audio controls title='"+files_items_selected_array[0].name+"' alt='"+files_items_selected_array[0].name+"' src='"+cache_url+"' type='audio/mp3'></audio></div>";
	}else if(files_items_selected_array[0].name.split('.wav').length==2&&files_items_selected_array[0].name.split('.wav')[1]==''){
	innerHTML = "<div><audio controls title='"+files_items_selected_array[0].name+"' alt='"+files_items_selected_array[0].name+"' src='"+cache_url+"' type='audio/wav'></audio></div>";
	}else if(files_items_selected_array[0].name.split('.png').length==2&&files_items_selected_array[0].name.split('.png')[1]==''){
	innerHTML = "<div><img title='"+files_items_selected_array[0].name+"' alt='"+files_items_selected_array[0].name+"' src='"+cache_url+"'/></div>";
	}else if(files_items_selected_array[0].name.split('.jpg').length==2&&files_items_selected_array[0].name.split('.jpg')[1]==''){
	innerHTML = "<div><img title='"+files_items_selected_array[0].name+"' alt='"+files_items_selected_array[0].name+"' src='"+cache_url+"'/></div>";
	}else if(files_items_selected_array[0].name.split('.gif').length==2&&files_items_selected_array[0].name.split('.gif')[1]==''){
	innerHTML = "<div><img title='"+files_items_selected_array[0].name+"' alt='"+files_items_selected_array[0].name+"' src='"+cache_url+"'/></div>";
	}else if(files_items_selected_array[0].name.split('.jpeg').length==2&&files_items_selected_array[0].name.split('.jpeg')[1]==''){
	innerHTML = "<div><img title='"+files_items_selected_array[0].name+"' alt='"+files_items_selected_array[0].name+"' src='"+cache_url+"'/></div>";
	}else{
		
		isMedia = false;
	}
	if(
		isMedia == true
	){
		LinkinnerHTML = LinkinnerHTML + innerHTML;
	}

	html_element.innerHTML = LinkinnerHTML;

	console.log(html_element);
	if(files_items_selected_array[0].offline!=undefined){
	    /*
	    let p = document.createElement('p');
	    let a = document.createElement('a');
	    a.href = files_items_selected_array[0].offline;
	    a.target = "_blank";
	    a.innerText = "点击下载（源站）";
	    p.append(a);
	    html_element.prepend(p);
	    */
	}
	//console.log(html_element);
	swal({
	    title: "预览文件",
	    text: "名称："+files_items_selected_array[0].name+"\r\n大小："+get_size_unit(files_items_selected_array[0].size)+onlyText,
	    content: html_element,
	    // icon: "success",
	    buttons: ["取消","复制"],
	    closeOnClickOutside: false,
	    // dangerMode: true,
	}).then((willDelete) => {
	    // console.log('hide');
		
	    let cache_media_preview = document.getElementsByClassName('cache-media-preview');
	    for(let i=0;i<cache_media_preview.length;i++){
		setTimeout(function(){cache_media_preview[i].remove();},300);
	    }
		if(willDelete){
			copy_text(cache_url);
		}
	});


}
if((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iOS|iPad|Backerry|WebOS|Symbian|Windows Phone|Phone)/i))){
// document.write("手机访问.");
}else{
//document.write("电脑访问.");
	let input_items = document.getElementsByTagName('input');
	for(let i=0;i<input_items.length;i++){
		input_items[i].onfocus = function(){
			this.removeAttribute('readonly');
		}
		input_items[i].onblur = function(){
			this.setAttribute('readonly',true);
		}
		input_items[i].setAttribute('readonly',true);
	}
}





// 反调试代码
// 反调试函数,参数：开关，执行代码

function endebug(off, code) {
    if (!off) {
        !function (e) {
            function n(e) {
                function n() {
                    return u
                }
                function o() {
                    window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized ? t("on") : (a = "off", console.log(d), console.clear(), t(a))
                }
                function t(e) {
                    u !== e && (u = e, "function" == typeof c.onchange && c.onchange(e))
                }
                function r() {
                    l || (l = !0, window.removeEventListener("resize", o), clearInterval(f))
                }
                "function" == typeof e && (e = {
                    onchange: e
                });
                var i = (e = e || {}).delay || 500,
                    c = {};
                c.onchange = e.onchange;
                var a, d = new Image;
                d.__defineGetter__("id", function () {
                    a = "on"
                });
                var u = "unknown";
                c.getStatus = n;
                var f = setInterval(o, i);
                window.addEventListener("resize", o);
                var l;
                return c.free = r, c
            }
            var o = o || {};
            o.create = n, "function" == typeof define ? (define.amd || define.cmd) && define(function () {
                return o
            }) : "undefined" != typeof module && module.exports ? module.exports = o : window.jdetects = o
        }(), jdetects.create(function (e) {
            var a = 0;
            var n = setInterval(function () {
                if ("on" == e) {
                    setTimeout(function () {
                        if (a == 0) {
                            a = 1;
                            setTimeout(code);
                        }
                    }, 200)
                }
            }, 100)
        })
    }
}
endebug(true, function () {
    // 非法调试执行的代码(不要使用控制台输出的提醒)
    // document.write('<div style="text-align:center;color:red">检测到非法调试,请关闭后刷新重试</div>');
});

let sharefile_ad_only_one = document.getElementsByClassName('sharefile-ad-only-one');

if(navigator.language.toLowerCase().indexOf('cn')!=-1){
	for(let i=0;i<sharefile_ad_only_one.length;i++){
		let item = sharefile_ad_only_one[i];
		item.style.display="";
	}
}

let ad_hidden_block_height_items = document.getElementsByClassName('ad-hidden-block-height');

if(true||navigator.language.toLowerCase().indexOf('cn')!=-1){
	for(let i=0;i<ad_hidden_block_height_items.length;i++){
		let item = ad_hidden_block_height_items[i];
		item.style.display="";
	}
}












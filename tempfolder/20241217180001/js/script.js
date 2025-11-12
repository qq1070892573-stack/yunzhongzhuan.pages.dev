








// 接口信息配置区域
// 接口信息配置区域
// 接口信息配置区域




// 获取桶文件对应上传地址 用于上传文件页面
let getBucketFileUploadTokenURL = "https://c34a02aaeb0d6.cname.frontwize.com/other/bsc/upload/upload";

// 获取文件夹列表
let getBucketFoldersURL = "https://c34a02aaeb0d6.cname.frontwize.com/other/bsc/folders";

// 获取文件列表
let getBucketFilesURL = "https://c34a02aaeb0d6.cname.frontwize.com/other/bsc/files";

// 本接口服务器PHP文件暂时正在开发中暂未上传GitHub






// 计算文件大小显示单位
function getSizeUnit(size){
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


// UTC to Beijing Time
// 将时间字符串转换为北京时间
function convertToBeijingTime(utcString) {
    // 将时间字符串解析为 Date 对象
    const date = new Date(utcString);

    // 获取北京时间偏移量 (UTC+8)
    const beijingOffset = 8 * 60 * 60 * 1000;

    // 使用原始时间的 UTC 偏移进行计算
    const utcOffset = date.getTimezoneOffset() * 60 * 1000;
    const beijingTime = new Date(date.getTime() + beijingOffset + utcOffset);

    // 格式化北京时间为字符串
    const year = beijingTime.getFullYear();
    const month = String(beijingTime.getMonth() + 1).padStart(2, '0');
    const day = String(beijingTime.getDate()).padStart(2, '0');
    const hours = String(beijingTime.getHours()).padStart(2, '0');
    const minutes = String(beijingTime.getMinutes()).padStart(2, '0');
    const seconds = String(beijingTime.getSeconds()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
// 示例
if(false){
	let utcString = "2024-12-09T04:33:33+00:00";
	let beijingTime = convertToBeijingTime(utcString);
	console.log(beijingTime); // 输出：2024-12-09 12:33:33
}


// 提取目标字符串中指定子字符串首次出现之后的部分
function extractAfterSubstring(inputString, targetSubstring) {
    // 找到目标子字符串首次出现的位置
    const position = inputString.indexOf(targetSubstring);

    // 如果找到了目标子字符串
    if (position !== -1) {
        // 返回从目标子字符串之后的部分
        return inputString.slice(position + targetSubstring.length);
    } else {
        // 如果未找到，返回原字符串
        return inputString;
    }
}

if(false){
	// 示例
	const originalString = "aini/2023/ainiyo/66";
	const target = "aini/";
	const result = extractAfterSubstring(originalString, target);
	console.log(result); // 输出：2023/ainiyo/66
}




// 保留指定/之前的字符
function getStringBeforeNthSlash(str, n) {
  const parts = str.split('/'); // 将字符串按照斜杠分割
  if (n <= 0 || n > parts.length) {
    return ''; // 如果 n 超出了有效范围，返回空字符串
  }
  return parts.slice(0, n).join('/'); // 返回第 n 个斜杠之前的部分
}

if(false){
	// 示例用法
	const str = 'otherfiles/2023/sharefolder/Everything';
	console.log(getStringBeforeNthSlash(str, 1)); // 输出 'otherfiles'
	console.log(getStringBeforeNthSlash(str, 2)); // 输出 'otherfiles/2023'
	console.log(getStringBeforeNthSlash(str, 3)); // 输出 'otherfiles/2023/sharefolder'
}






let navLocked = false;
let navShow = true;

// 缩小导航栏
function miniNav(){

	if(navLocked){return  false;};
	navLocked = true;

	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.opacity = "0";
	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.maxHeight = "0px";
	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.margin = "0px 20px 0px 20px";


	// 导航栏 对象存储 文字标题
	if(
		document.getElementsByClassName('buckets-nav')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0]!=undefined
	){
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0].style.opacity = "0";
	}

	// 导航栏 对象存储 文字标题
	if(
		document.getElementsByClassName('buckets-nav')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('h3-title')[0]!=undefined
	){
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('h3-title')[0].style.opacity = "0";
	}
	


	let buckets_nav_items = document.getElementsByClassName('buckets-nav-items');
	for(let i=0; i<buckets_nav_items.length ; i++){
		let item = buckets_nav_items[i].getElementsByClassName('buckets-nav-item');

		for(let i2=0; i2 < item.length ; i2++){
			item[i2].getElementsByTagName('span')[0].style.opacity = "0";
		}

	}






	setTimeout(hideNavSpan,200);

}




// 隐藏导航栏的span标签
function hideNavSpan(){

	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.display = "none";


	// 导航栏 对象存储 文字标题
	if(
		document.getElementsByClassName('buckets-nav')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0]!=undefined
	){
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0].style.display = "none";
	}

	// 导航栏 对象存储 文字标题
	if(
		document.getElementsByClassName('buckets-nav')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('h3-title')[0]!=undefined
	){
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('h3-title')[0].style.display = "none";
	}
	


	let buckets_nav_items = document.getElementsByClassName('buckets-nav-items');
	for(let i=0; i<buckets_nav_items.length ; i++){
		let item = buckets_nav_items[i].getElementsByClassName('buckets-nav-item');

		for(let i2=0; i2 < item.length ; i2++){
			item[i2].getElementsByTagName('span')[0].style.display = "none";
		}

	}



	// 导航栏宽度
	document.getElementsByClassName('buckets-nav')[0].style.width = "50px";
	document.getElementsByClassName('buckets-nav-show-and-hide-button')[0].style.width = "50px";

	// 桶列表宽度
	document.getElementsByClassName('buckets-main')[0].style.width = "calc(100% - 120px)";

	// 展开或收缩导航栏的按钮
	document.getElementsByClassName('buckets-nav-show-and-hide-button')[0].getElementsByTagName('i')[0].className = "fa fa-indent";


	setTimeout(function(){
		navLocked = false;
		navShow = false;
	},200);

}






// 显示导航栏
function showNav(){



	// 导航栏宽度
	document.getElementsByClassName('buckets-nav')[0].style.width = "200px";
	document.getElementsByClassName('buckets-nav-show-and-hide-button')[0].style.width = "200px";

	// 桶列表宽度
	document.getElementsByClassName('buckets-main')[0].style.width = "calc(100% - 270px)";

	// 展开或收缩导航栏的按钮
	document.getElementsByClassName('buckets-nav-show-and-hide-button')[0].getElementsByTagName('i')[0].className = "fa fa-dedent";

	setTimeout(showNavSpan,200);

}

function showNavSpan(){


	// 导航栏 对象存储 文字标题
	if(
		document.getElementsByClassName('buckets-nav')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0]!=undefined
	){
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0].style.display = "unset";
	}

	// 导航栏 对象存储 文字标题
	if(
		document.getElementsByClassName('buckets-nav')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('h3-title')[0]!=undefined
	){
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('h3-title')[0].style.display = "unset";
	}


	

	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.display = "unset";


	

	let buckets_nav_items = document.getElementsByClassName('buckets-nav-items');
	for(let i=0; i<buckets_nav_items.length ; i++){
		let item = buckets_nav_items[i].getElementsByClassName('buckets-nav-item');

		for(let i2=0; i2 < item.length ; i2++){
			item[i2].getElementsByTagName('span')[0].style.display = "unset";

		}

	}

	setTimeout(showNavSpan2,10);


}



function showNavSpan2(){

	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.opacity = "1";
	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.maxHeight = "30px";
	document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-span')[0].style.margin = "10px 20px 20px 20px";


	// 导航栏 对象存储 文字标题
	if(
		document.getElementsByClassName('buckets-nav')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0]!=undefined
	){
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByTagName('span')[0].style.opacity = "1";
	}

	// 导航栏 对象存储 文字标题
	if(
		document.getElementsByClassName('buckets-nav')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0]!=undefined
		&&
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('h3-title')[0]!=undefined
	){
		document.getElementsByClassName('buckets-nav')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('h3-title')[0].style.opacity = "1";
	}






	let buckets_nav_items = document.getElementsByClassName('buckets-nav-items');
	for(let i=0; i<buckets_nav_items.length ; i++){
		let item = buckets_nav_items[i].getElementsByClassName('buckets-nav-item');

		for(let i2=0; i2 < item.length ; i2++){
			item[i2].getElementsByTagName('span')[0].style.opacity = "1";
		}

	}

	setTimeout(function(){
		navShow = true;
	},200);

}





function navShowAndHide(){


	// 让展开或收起左侧导航栏的按钮短暂失效
	document.getElementsByClassName('buckets-nav-show-and-hide-button')[0].getElementsByTagName('i')[0].onclick = function(){}

	// 恢复点击事件
	setTimeout(function(){
		document.getElementsByClassName('buckets-nav-show-and-hide-button')[0].getElementsByTagName('i')[0].onclick = navShowAndHide;
	},202);

	// 如果正在展开或收起
	if(navLocked){
		return false;
	}
	if(navShow){
		miniNav();
	}else{
		showNav();
	}





}







// 消除 创建存储桶 页面 已选中的 item
function removeSelectedIndex(parent){

	let items = parent.getElementsByClassName('select-option-item');

	for(
		let i=0;
		i<items.length;
		i++
	){
		items[i].className = items[i].className.replace(/select-option-item-selected-index/g,'');
		items[i].className = items[i].className.replace(/  /g,' ');
		// items[i].className = "select-option-item";
	}


}





// 假设当前桶文件夹位置是
let currentFolderPath;


// 点击事件修改响应的地方代码
function onClickOfSelectOptionItemsByItem(THIS){
	
	// console.log(THIS);



	// 处于上传页面
	if(
		document.getElementsByClassName('upload')[0]!=undefined
	){




		// 如果是上传页面点击了以当前目录为位置
		if(
			THIS.className.indexOf('upload-folder-path-current')!=-1
		){


			document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].disabled = true;
			document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].value = currentFolderPath;


		}



		// 如果是点击了根目录
		if(
			THIS.className.indexOf('upload-folder-path-root')!=-1
		){
			document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].disabled = true;
			document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].value = "/";

		}




		// 如果点击了演示目录
		
		if(
			THIS.className.indexOf('upload-folder-path-test')!=-1
		){
			document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].disabled = true;
			document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].value = "/demo/downloads/files";

		}


		// 如果点击了自定义目录
		
		if(
			THIS.className.indexOf('upload-folder-path-custom')!=-1
		){
			document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].disabled = false;
			document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].focus();
			let length = document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].value.length;
			document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].setSelectionRange(length, length);
		}




	}



}









// 给所有选项上点击事件
let select_option_items_all = document.getElementsByClassName('select-option-items');

for(
	let i=0;
	i<select_option_items_all.length;
	i++
){

	select_option_items = select_option_items_all[i];

	
	let select_option_item = select_option_items.getElementsByClassName('select-option-item');
	for(
		let i2 = 0;
		i2 < select_option_item.length;
		i2++
	){

		let item = select_option_item[i2];

		item.parent = select_option_items;

		item.onclick = function(){

			removeSelectedIndex(this.parent);

			// 点击了自己 触发对应代码
			onClickOfSelectOptionItemsByItem(this);

			this.className = this.className + " select-option-item-selected-index";

		}

	}

	

}
















// 刷新按钮的点击动画
if(
	document.getElementsByClassName('buckets-main')[0] != undefined
	&&
	document.getElementsByClassName('buckets-main')[0].getElementsByClassName('input-button-reload')[0]!=undefined
){
	document.getElementsByClassName('buckets-main')[0].getElementsByClassName('input-button-reload')[0].onclick = function(){
		if(this.clickTimes == undefined){
			this.clickTimes = 0;
		}
		this.clickTimes += 1;
		this.getElementsByTagName('i')[0].style.transform = "rotateZ(" + this.clickTimes*360 + "deg)";
	}
}



// 导航栏点击收起或者展开
// 导航栏点击展开或收起按钮
if(
	document.getElementsByClassName('buckets-nav-show-and-hide-button')[0]!=undefined
	&&
	document.getElementsByClassName('buckets-nav-show-and-hide-button')[0].getElementsByTagName('i')[0]!=undefined
){

	document.getElementsByClassName('buckets-nav-show-and-hide-button')[0].getElementsByTagName('i')[0].onclick = navShowAndHide;

}

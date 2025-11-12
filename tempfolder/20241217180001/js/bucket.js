





// 是否全部文件已经被选中
let bucket_all_files_selected = false;
// 检查是否全部文件都已经被选中
function filesAllSelectedYesOrNo(){

	// 获取所有文件 item
	let bucket_files_items = document.getElementsByClassName('bucket-files-main')[0].getElementsByClassName('bucket-files-item');
	// 文件总数
	document.getElementsByClassName('bucket-files-items-count')[0].innerText = bucket_files_items.length;

	let files_items_selected_count = 0;
	for(
		let i=0;
		i<bucket_files_items.length;
		i++
	){
		if(
			bucket_files_items[i].getElementsByClassName('bucket-files-headers-selected-index')[0]!=undefined
		){
			files_items_selected_count += 1;
		}
	}


	// 选中多少个文件了？
	// 文件总数
	document.getElementsByClassName('bucket-files-items-selected-count')[0].innerText = files_items_selected_count;

	if(
		files_items_selected_count == bucket_files_items.length
	){
		// swal('已经全选');
		// 让已经全选的按钮亮起来
		// 文件列表头部的全选按钮 让已经全选的按钮亮起来
		document.getElementsByClassName('bucket-files-headers')[0].getElementsByClassName('bucket-files-headers-select')[0].className = "bucket-files-headers-select bucket-files-headers-selected-index";
		// 文件列表底部翻页全选按钮 让已经全选的按钮亮起来
		document.getElementsByClassName('bucket-file-pages')[0].getElementsByClassName('bucket-files-headers-select')[0].className = "bucket-files-headers-select bucket-files-headers-selected-index";
		bucket_all_files_selected = true;
	}else{
		// 不是全选状态
		// 文件列表头部的全选按钮 让已经全选的按钮亮起来
		document.getElementsByClassName('bucket-files-headers')[0].getElementsByClassName('bucket-files-headers-select')[0].className = "bucket-files-headers-select";
		// 文件列表底部翻页全选按钮 让已经全选的按钮亮起来
		document.getElementsByClassName('bucket-file-pages')[0].getElementsByClassName('bucket-files-headers-select')[0].className = "bucket-files-headers-select";
		bucket_all_files_selected = false;
	}

}

// 全选文件
function selectAllFiles(){

	// 全部文件已经被选中，那就进行对所有文件取消选中。
	if(
		bucket_all_files_selected
	){

		// 全部文件已经被选中，那就进行对所有文件取消选中。
		// 获取所有文件 item
		let bucket_files_items = document.getElementsByClassName('bucket-files-main')[0].getElementsByClassName('bucket-files-item');
		// 文件总数
		document.getElementsByClassName('bucket-files-items-count')[0].innerText = bucket_files_items.length;

		for(
			let i=0;
			i<bucket_files_items.length;
			i++
		){
			if(
				bucket_files_items[i].selected == true
			){
				bucket_files_items[i].getElementsByClassName('bucket-files-headers-select')[0].click();
			}
		}



	}else{

		// 否则文件没有被全选中，对未选中的文件进行选中
		// 获取所有文件 item
		let bucket_files_items = document.getElementsByClassName('bucket-files-main')[0].getElementsByClassName('bucket-files-item');
		// 文件总数
		document.getElementsByClassName('bucket-files-items-count')[0].innerText = bucket_files_items.length;


		for(
			let i=0;
			i<bucket_files_items.length;
			i++
		){
			if(
				bucket_files_items[i].selected == false
			){
				bucket_files_items[i].getElementsByClassName('bucket-files-headers-select')[0].click();
			}
		}


	}
}




let currentFolder;


if(
	document.getElementsByClassName('bucket')[0]!=undefined
){






	// 服务器的 文件夹 和 文件 接口每次返回多少个文件，只能自己在服务器配置，不允许用户前端自定义
	let folderAndFilesPageItemNum = 100;



	// 获取当前页面的 URL 参数
	const urlParams = new URLSearchParams(window.location.search);

	// 获取具体的参数值
	let bucket = urlParams.get('bucket');
	let times = urlParams.get('times');
	currentFolder = urlParams.get('folder');
	if(
		currentFolder == null
	){
		currentFolder = "";
	}

	// 输出结果
	console.log('bucket:', bucket); // tempfile
	console.log('times:', times);   // 666

	// 对象存储标题
	document.getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('h3-title')[0].innerText = bucket;






	// 更新导航栏
	function setNewPathNav(){

		console.log(currentFolder);

		let currentFolderLayerArray = currentFolder.split('/');

		// root
		document.getElementsByClassName('bucket-files-path')[0].getElementsByClassName('bucket-files-span-items')[0].getElementsByTagName('span')[0].onclick = function(){
			currentFolder = "";
			reloadFoldersAndFiles();
			setNewPathNav();
			updatePageURL();
		}

		for(
			let i = 1;
			i < currentFolderLayerArray.length;
			i++
		){

			console.log(currentFolderLayerArray[i]);

			let spanIndexClass = "";
			if(
				i == currentFolderLayerArray.length-1
			){
				spanIndexClass = "bucket-files-path-index";
			}

			let span;

			if(
				document.getElementsByClassName('bucket-files-path')[0].getElementsByClassName('bucket-files-span-items')[0].getElementsByTagName('span')[i]!=undefined
			){
				span = document.getElementsByClassName('bucket-files-path')[0].getElementsByClassName('bucket-files-span-items')[0].getElementsByTagName('span')[i];
				document.getElementsByClassName('bucket-files-path')[0].getElementsByClassName('bucket-files-span-items')[0].getElementsByTagName('span')[i].className = spanIndexClass;
				document.getElementsByClassName('bucket-files-path')[0].getElementsByClassName('bucket-files-span-items')[0].getElementsByTagName('span')[i].innerText = currentFolderLayerArray[i-1] + " /";


			}else{

				// 造一个
				span = document.createElement('span');
				span.innerText = currentFolderLayerArray[i-1] + " /";
				span.className = spanIndexClass;
				document.getElementsByClassName('bucket-files-path')[0].getElementsByClassName('bucket-files-span-items')[0].append(span);

			}


			if(
				spanIndexClass == ""
			){

				span.onclick = function(){
					if(
						this.className != ""
					){
						return false;
					}
					currentFolder = getStringBeforeNthSlash(currentFolder,i) + "/";
					reloadFoldersAndFiles();
					setNewPathNav();
					updatePageURL();
				}

			}

			


		}


		// 清理掉多余的目录
		let spans = document.getElementsByClassName('bucket-files-path')[0].getElementsByClassName('bucket-files-span-items')[0].getElementsByTagName('span');
		for(
			let i = currentFolderLayerArray.length;
			i < spans.length;
			i++
		){
			spans[i].remove();
			i--;
		}



	}

	setNewPathNav();









	// 获取文件夹
	// 创建一个函数用于发起请求
	function fetchFolders(sessionId, folder, pageIndex) {



		let nowCurrentFolderPath = currentFolder;



	    // 创建 XMLHttpRequest 对象
	    const xhr = new XMLHttpRequest();

	    // 设置请求地址和方法
	    const url = getBucketFoldersURL;
	    xhr.open("POST", url, true);

	    // 设置请求头，告诉服务器接收 JSON 数据
	    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	    // 处理服务器响应
	    xhr.onreadystatechange = function () {
	        if (xhr.readyState === 4) { // 请求完成
	            if (xhr.status === 200) { // 请求成功

	            	if(
	            		nowCurrentFolderPath == currentFolder
	            	){

	            	}else{
	            		return false;
	            	}


	                try {
	                    const response = JSON.parse(xhr.responseText); // 解析 JSON 响应
	                    // console.log("成功获取文件夹:", response);

	                    // 如果需要在页面中显示结果
	                    if (response.success) {
	                        displayFolders(response.folders);
	                    } else {
	                        console.error("获取文件夹失败:", response.error);
	                    }
	                } catch (e) {
	                    console.error("解析响应失败:", e);
	                }
	            } else {
	                console.error("请求失败，状态码:", xhr.status);
	            }
	        }
	    };

	    // 准备请求参数
	    const params = `bucket=${encodeURIComponent(bucket)}&session_id=${encodeURIComponent(sessionId)}&folder=${encodeURIComponent(folder)}&page_index=${pageIndex}`;

	    // 发送请求
	    xhr.send(params);
	}


	// 一个简单的函数用于在页面中显示文件夹列表
	function displayFolders(folders) {


		console.log(folders);


		// 文件夹是否加载完成
		if(
			folders.length < folderAndFilesPageItemNum
		){
			folderCurrentLayerFoldersLoaded = true;
		}else{
			folderCurrentLayerFoldersLoaded = false;
		}



		for(
			let i = 0;
			i < folders.length;
			i++
		){
			let folderElementItem = document.createElement('div');
			folderElementItem.className = "bucket-files-item";


			let elementFolderName = extractAfterSubstring(folders[i]["Prefix"],currentFolder);
			// console.log(elementFolderName);

			folderElementItem.innerHTML = '<div class="bucket-files-headers-select"><!-- bucket-files-headers-selected-index --><i class="fa fa-check"></i></div><div class="bucket-files-headers-title"><i class="fa fa-folder"></i> ' + elementFolderName + '</div><div class="bucket-files-headers-size">-</div><div class="bucket-files-headers-type">-</div><div class="bucket-files-headers-datetime">-</div><div class="bucket-files-headers-actions">待开发</div>';

			// 文件夹被点开
			folderElementItem.getElementsByClassName('bucket-files-headers-title')[0].folderName = folders[i]["Prefix"];
			folderElementItem.getElementsByClassName('bucket-files-headers-title')[0].onclick = function(){
				currentFolder = this.folderName;
				updatePageURL();

				// 重新获取文件
				reloadFoldersAndFiles();


				// 设置导航栏
				setNewPathNav();



			}


			document.getElementsByClassName('bucket-folders-items')[0].append(folderElementItem);
		}


		if(
			folderCurrentLayerFoldersLoaded == false
		){

			console.log('文件夹并未加载完成，继续加载文件夹！');

			folderPageIndex = folderPageIndex + 1;

			// 调用函数示例
			fetchFolders(sessionId, currentFolder, folderPageIndex);


		}else{

			console.log('文件夹加载完啦，加载文件！');

			// 调用函数示例
			fetchFiles(sessionId, currentFolder, filesPageIndex);

		}




		// 给列表里的文件夹或文件上点击事件
		setFolderAndFilesItemsElementFunction();



	}









	// 获取文件
	// 创建一个函数用于发起请求
	function fetchFiles(sessionId, folder, pageIndex) {



		let nowCurrentFolderPath = currentFolder;

	    // 创建 XMLHttpRequest 对象
	    const xhr = new XMLHttpRequest();

	    // 设置请求地址和方法
	    const url = getBucketFilesURL;
	    xhr.open("POST", url, true);

	    // 设置请求头，告诉服务器接收 JSON 数据
	    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

	    // 处理服务器响应
	    xhr.onreadystatechange = function () {
	        if (xhr.readyState === 4) { // 请求完成
	            if (xhr.status === 200) { // 请求成功

	            	if(
	            		nowCurrentFolderPath == currentFolder
	            	){

	            	}else{
	            		return false;
	            	}


	                try {
	                    const response = JSON.parse(xhr.responseText); // 解析 JSON 响应
	                    // console.log("成功获取文件夹:", response);

	                    // 如果需要在页面中显示结果
	                    if (response.success) {
	                        displayFiles(response.files);
	                    } else {
	                        console.error("获取文件夹失败:", response.error);
	                    }
	                } catch (e) {
	                    console.error("解析响应失败:", e);
	                }
	            } else {
	                console.error("请求失败，状态码:", xhr.status);
	            }
	        }
	    };

	    // 准备请求参数
	    const params = `bucket=${encodeURIComponent(bucket)}&session_id=${encodeURIComponent(sessionId)}&folder=${encodeURIComponent(folder)}&page_index=${pageIndex}`;

	    // 发送请求
	    xhr.send(params);
	}











	// 一个简单的函数用于在页面中显示文件夹列表
	function displayFiles(files) {


		console.log(files);


		// 文件夹是否加载完成
		if(
			files.length < folderAndFilesPageItemNum
		){
			filesCurrentLayerFoldersLoaded = true;
		}else{
			filesCurrentLayerFoldersLoaded = false;
		}



		for(
			let i = 0;
			i < files.length;
			i++
		){
			let filesElementItem = document.createElement('div');
			filesElementItem.className = "bucket-files-item";

			let StorageClass = "标准存储";
			if(
				files[i]["StorageClass"] == "STANDARD"
			){
				StorageClass = "标准存储";
			}


			let fileName = files[i]["Key"];
			fileName = extractAfterSubstring(fileName,currentFolder);

			filesElementItem.innerHTML = '<div class="bucket-files-headers-select"><!-- bucket-files-headers-selected-index --><i class="fa fa-check"></i></div><div class="bucket-files-headers-title"><i class="fa fa-file-o"></i> ' + fileName + '</div><div class="bucket-files-headers-size">' + getSizeUnit(files[i]["Size"]) + '</div><div class="bucket-files-headers-type">' + StorageClass + '</div><div class="bucket-files-headers-datetime">' + convertToBeijingTime(files[i]["LastModified"]) + '</div><div class="bucket-files-headers-actions">待开发</div>';
			document.getElementsByClassName('bucket-files-items')[0].append(filesElementItem);
		}


		if(
			filesCurrentLayerFoldersLoaded == false
		){

			console.log('文件并未加载完成，继续加载文件！');

			filesPageIndex = filesPageIndex + 1;

			// 调用函数示例
			fetchFiles(sessionId, currentFolder, filesPageIndex);


		}else{

			console.log('文件加载完啦！');


		}


		// 给列表里的文件夹或文件上点击事件
		setFolderAndFilesItemsElementFunction();


	}



	// 当前处于 / 目录
	let folderLayerIndex = 0;
	let currentFolderLayerArray = currentFolder.split('/');
	console.log(currentFolderLayerArray);
	folderLayerIndex = currentFolderLayerArray.length-1;


	// 当前页
	let folderPageIndex = 0;

	// 文件夹是否加载完成
	let folderCurrentLayerFoldersLoaded = false;
	// 文件是否加载完成
	let filesCurrentLayerFoldersLoaded = false;





	// Session ID
	let sessionId = "ABC666";




	// 首次加载文件夹
	// 调用函数示例
	fetchFolders(sessionId, currentFolder, folderPageIndex);


	// 更新URL
	function updatePageURL(){
		window.history.pushState(null,null,"bucket.html?bucket=" + encodeURIComponent(bucket) + "&folder=" + encodeURIComponent(currentFolder) );	
	}
	updatePageURL();


	// 文件当前页
	let filesPageIndex = 0;






	// 上传文件
	document.getElementsByClassName('bucket')[0].getElementsByClassName('buckets-main')[0].getElementsByClassName('create-bucket')[0].onclick = function(){
		window.location.href = "upload.html?bucket=" + encodeURIComponent(bucket) + "&folder=" + encodeURIComponent(currentFolder);
	}
	



	// 文件列表头部的全选按钮
	document.getElementsByClassName('bucket-files-headers')[0].getElementsByClassName('bucket-files-headers-select')[0].onclick = selectAllFiles;
	// 文件列表底部翻页全选按钮
	document.getElementsByClassName('bucket-file-pages')[0].getElementsByClassName('bucket-files-headers-select')[0].onclick = selectAllFiles;


	document.getElementsByClassName('bucket')[0].getElementsByClassName('buckets-nav-title')[0].getElementsByClassName('top-page-title-main-icon-button')[0].onclick = function(){

		window.location.href = "buckets.html";


	}


	// 给文件和文件夹元素上JS元素事件
	function setFolderAndFilesItemsElementFunction(){

		// 获取所有文件 item
		let bucket_files_items = document.getElementsByClassName('bucket-files-main')[0].getElementsByClassName('bucket-files-item');
		// 文件总数
		document.getElementsByClassName('bucket-files-items-count')[0].innerText = bucket_files_items.length;

		for(
			let i=0;
			i<bucket_files_items.length;
			i++
		){

			bucket_files_items[i].getElementsByClassName('bucket-files-headers-select')[0].theParentElement = bucket_files_items[i];
			if(
				bucket_files_items[i].selected == undefined
			){
				bucket_files_items[i].selected = false;
			}
			bucket_files_items[i].getElementsByClassName('bucket-files-headers-select')[0].onclick = function(){
				if(
					this.theParentElement.selected
				){
					// 取消选中/解除选中
					this.theParentElement.getElementsByClassName('bucket-files-headers-select')[0].className = "bucket-files-headers-select";
					this.theParentElement.selected = false;
				}else{
					// 进行选中
					this.theParentElement.getElementsByClassName('bucket-files-headers-select')[0].className = "bucket-files-headers-select bucket-files-headers-selected-index";
					this.theParentElement.selected = true;
				}

				// 最后，检查是否全选中。
				filesAllSelectedYesOrNo();
				
			}
		}
	}

	// 给列表里的文件夹或文件上点击事件
	setFolderAndFilesItemsElementFunction();





	// 刷新列表
	function reloadFoldersAndFiles(){

		let bucket_folders_items = document.getElementsByClassName('bucket-files-main')[0].getElementsByClassName('bucket-files-item');
		for(
			let i = 0;
			i < bucket_folders_items.length;
			i++
		){

			bucket_folders_items[i].remove();
			i--;

		}

		// 给列表里的文件夹或文件上点击事件
		setFolderAndFilesItemsElementFunction();

		folderPageIndex = 0;
		filesPageIndex = 0;

		// 重新获取文件
		fetchFolders(sessionId, currentFolder, folderPageIndex);

	}



}
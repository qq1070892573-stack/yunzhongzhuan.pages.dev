


// 检测是否没有文件在上传列表
function uploadFilesListIsNull(){

	// 如果文件列表的文件不等于0，则隐藏列表是空的提示
	let files_to_browser_upload_list_files_items = document.getElementsByClassName('upload')[0].getElementsByClassName('files-to-browser-upload-list-files-items')[0].getElementsByClassName('files-to-browser-upload-list-files-item');
	if(
		files_to_browser_upload_list_files_items.length > 0
	){
		document.getElementsByClassName('upload')[0].getElementsByClassName('files-to-browser-upload-list-files-items')[0].getElementsByClassName('files-to-browser-upload-list-files-null')[0].style.display = "none";
	}else{
		document.getElementsByClassName('upload')[0].getElementsByClassName('files-to-browser-upload-list-files-items')[0].getElementsByClassName('files-to-browser-upload-list-files-null')[0].style.display = "block";
	}

}


// 给上传列表的文件做点击删除操作。
function setUploadFilesListItemRemoveButton(){
	// 如果文件列表的文件不等于0，则隐藏列表是空的提示
	let files_to_browser_upload_list_files_items = document.getElementsByClassName('upload')[0].getElementsByClassName('files-to-browser-upload-list-files-items')[0].getElementsByClassName('files-to-browser-upload-list-files-item');
	
	for(
		let i=0;
		i<files_to_browser_upload_list_files_items.length;
		i++
	){

		if(
			files_to_browser_upload_list_files_items[i]!=undefined
			&&
			files_to_browser_upload_list_files_items[i].getElementsByClassName('files-to-browser-upload-list-files-headers-actions')[0]!=undefined
			&&
			files_to_browser_upload_list_files_items[i].getElementsByClassName('files-to-browser-upload-list-files-headers-actions')[0].getElementsByClassName('files-to-browser-upload-list-files-headers-actions-remove')[0]!=undefined
			&&
			files_to_browser_upload_list_files_items[i].getElementsByClassName('files-to-browser-upload-list-files-headers-actions')[0].getElementsByClassName('files-to-browser-upload-list-files-headers-actions-remove')[0].theParentElement == undefined
		){

			files_to_browser_upload_list_files_items[i].getElementsByClassName('files-to-browser-upload-list-files-headers-actions')[0].getElementsByClassName('files-to-browser-upload-list-files-headers-actions-remove')[0].theParentElement = files_to_browser_upload_list_files_items[i];
			files_to_browser_upload_list_files_items[i].getElementsByClassName('files-to-browser-upload-list-files-headers-actions')[0].getElementsByClassName('files-to-browser-upload-list-files-headers-actions-remove')[0].onclick = function(){
				// delete self


				this.theParentElement.stopUpload = true;

				deleteFile(this.theParentElement.theFile.name, this.theParentElement.theFile.size);

				this.theParentElement.remove();
				uploadFilesListIsNull();// 上传列表是否为空

			}

		}

	}

}



if(
	document.getElementsByClassName('upload')[0]!=undefined
){







	// 获取当前页面的 URL 参数
	const urlParams = new URLSearchParams(window.location.search);

	// 获取具体的参数值
	let bucket = urlParams.get('bucket');
	let folder = urlParams.get('folder');





	// 假设当前桶文件夹位置
	currentFolderPath = "/";
	if(
		folder != null
	){
		currentFolderPath = "/" + folder;
	}else{
		currentFolderPath = "/";
	}





	document.getElementsByClassName('upload-folder-path-current')[0].click();




	// 返回桶列表
	document.getElementsByClassName('upload')[0].getElementsByClassName('top-page-title-main-icon-button')[0].onclick = function(){
		window.location.href = "bucket.html?bucket=" + encodeURIComponent(bucket) + "&folder=" + encodeURIComponent(folder);
	}


	// 点击 取消 返回桶列表
	document.getElementsByClassName('upload')[0].getElementsByClassName('bottom-buttons-parent')[0].getElementsByClassName('cancel-upload-back-bucket')[0].onclick = function(){
		window.location.href = "bucket.html?bucket=" + encodeURIComponent(bucket) + "&folder=" + encodeURIComponent(folder);
	}






	// 上传列表是否为空
	uploadFilesListIsNull();


	// 给上传列表的文件做点击删除操作。
	setUploadFilesListItemRemoveButton();


	// 存储需要上传的文件
	const filesToUpload = [];


	// 被移除被删除的文件，从上传队列中取消！
	function deleteFile(fileName , fileSize) {
		// 从队列中移除文件
		const fileIndex = filesToUpload.findIndex(item => item.file.name === fileName && item.file.size == fileSize);
		if (fileIndex !== -1) {
			filesToUpload.splice(fileIndex, 1);
		}

		uploadFilesListIsNull();// 上传列表是否为空
	}


	// 选择文件或文件夹
	document.getElementsByClassName('input-for-files-and-folder')[0].addEventListener('change', function(event) {
		const fileList = event.target.files; // 获取文件对象


		for (const file of fileList) {


			// 如果文件已经存在于列表中
			let foundFileCopy = false;
			for(
				let fi = 0;
				fi < filesToUpload.length;
				fi++
			){
				if(
					filesToUpload[fi]["file"].name == file.name
					&&
					filesToUpload[fi]["file"].webkitRelativePath == file.webkitRelativePath
					//filesToUpload[fi]["file"].size == file.size
					//&&
					// 防止文件路径冲突
				){
					// 重复文件，无需添加进列表
					foundFileCopy = true;
				}
			}
			if(foundFileCopy){
				continue;
			}





			const div = document.createElement('div');
			div.className = "files-to-browser-upload-list-files-item";
			div.innerHTML = '<div class="files-to-browser-upload-list-files-item"><div class="files-to-browser-upload-list-files-headers-title">'+file.webkitRelativePath+'</div><div class="files-to-browser-upload-list-files-headers-upload-status"><i class="fa fa-arrow-circle-o-up"></i> <span>等待上传</span></div><div class="files-to-browser-upload-list-files-headers-size">'+getSizeUnit(file.size)+'</div><div class="files-to-browser-upload-list-files-headers-actions"><span class="files-to-browser-upload-list-files-headers-actions-remove">移除</span></div>';

			div.theFile = file;

			// 读取文件的二进制数据并保存到数组中
			const binaryData = readFileAsBinary(file);
			filesToUpload.push({ file, binaryData , div});


			//listItem.textContent = file.webkitRelativePath; // 显示文件的相对路径
			//console.log(listItem);
			// console.log(file);
			document.getElementsByClassName('files-to-browser-upload-list-files-items')[0].append(div);
			uploadFilesListIsNull();// 上传列表是否为空
			setUploadFilesListItemRemoveButton();// 给文件列表的文件做删除按钮操作
		}

		// 如果没有准备上传的文件，则不能点击
		if(
			filesToUpload.length > 0
		){
			// 可以上传 可以点击上传按钮
		}else{
			// 没有文件，禁止上传
		}

	});




	// 选择文件处理
	// 处理文件选择
	document.getElementsByClassName('upload')[0].getElementsByClassName('input-just-for-files')[0].addEventListener('change', async function (event) {
		

		const fileList = event.target.files; // 获取文件对象

		for (const file of fileList) {


			// 如果文件已经存在于列表中
			let foundFileCopy = false;
			for(
				let fi = 0;
				fi < filesToUpload.length;
				fi++
			){
				if(
					filesToUpload[fi]["file"].name == file.name
					&&
					filesToUpload[fi]["file"].size == file.size
					&&
					filesToUpload[fi]["file"].webkitRelativePath == file.webkitRelativePath
				){
					// 重复文件，无需添加进列表
					foundFileCopy = true;
				}
			}
			if(foundFileCopy){
				continue;
			}



			const div = document.createElement('div');
			div.className = "files-to-browser-upload-list-files-item";
			div.innerHTML = '<div class="files-to-browser-upload-list-files-item"><div class="files-to-browser-upload-list-files-headers-title">'+file.name+'</div><div class="files-to-browser-upload-list-files-headers-upload-status"><i class="fa fa-arrow-circle-o-up"></i> <span>等待上传</span></div><div class="files-to-browser-upload-list-files-headers-size">'+getSizeUnit(file.size)+'</div><div class="files-to-browser-upload-list-files-headers-actions"><span class="files-to-browser-upload-list-files-headers-actions-remove">移除</span></div>';

			div.theFile = file;

			// 读取文件的二进制数据并保存到数组中
			const binaryData = readFileAsBinary(file);
			filesToUpload.push({ file, binaryData , div });


			//listItem.textContent = file.webkitRelativePath; // 显示文件的相对路径
			//console.log(listItem);
			// console.log(file);
			document.getElementsByClassName('files-to-browser-upload-list-files-items')[0].append(div);
			uploadFilesListIsNull();// 上传列表是否为空
			setUploadFilesListItemRemoveButton();// 给文件列表的文件做删除按钮操作
		}


		// 如果没有准备上传的文件，则不能点击
		if(
			filesToUpload.length > 0
		){
			// 可以上传 可以点击上传按钮
		}else{
			// 没有文件，禁止上传
		}


	});







	// 拖入文件到 HTML 元素上传文件
	document.addEventListener("DOMContentLoaded", () => {
	    const dropArea = document.getElementsByClassName("files-to-browser-upload-list")[0];


	    // 防止浏览器默认行为
	    ["dragenter", "dragover", "dragleave", "drop"].forEach(event => {
	        dropArea.addEventListener(event, e => e.preventDefault());
	    });

	    // 拖入效果
	    ["dragenter", "dragover"].forEach(event => {
	        dropArea.addEventListener(event, () => dropArea.classList.add("files-to-browser-upload-list-hover"));
	    });

	    ["dragleave", "drop"].forEach(event => {
	        dropArea.addEventListener(event, () => dropArea.classList.remove("files-to-browser-upload-list-hover"));
	    });

	    // 处理文件
	    dropArea.addEventListener("drop", e => {
	        const files = e.dataTransfer.files; // 获取文件列表
	        if (files.length === 0) return;

	        Array.from(files).forEach(file => {
	            
	            console.log(file);






				// 如果文件已经存在于列表中
				let foundFileCopy = false;
				for(
					let fi = 0;
					fi < filesToUpload.length;
					fi++
				){
					if(
						filesToUpload[fi]["file"].name == file.name
						&&
						filesToUpload[fi]["file"].size == file.size
						&&
						filesToUpload[fi]["file"].webkitRelativePath == file.webkitRelativePath
					){
						// 重复文件，无需添加进列表
						foundFileCopy = true;
					}
				}
				if(foundFileCopy){
					return false;
				}



				const div = document.createElement('div');
				div.className = "files-to-browser-upload-list-files-item";
				div.innerHTML = '<div class="files-to-browser-upload-list-files-item"><div class="files-to-browser-upload-list-files-headers-title">'+file.name+'</div><div class="files-to-browser-upload-list-files-headers-upload-status"><i class="fa fa-arrow-circle-o-up"></i> <span>等待上传</span></div><div class="files-to-browser-upload-list-files-headers-size">'+getSizeUnit(file.size)+'</div><div class="files-to-browser-upload-list-files-headers-actions"><span class="files-to-browser-upload-list-files-headers-actions-remove">移除</span></div>';

				div.theFile = file;

				// 读取文件的二进制数据并保存到数组中
				const binaryData = readFileAsBinary(file);
				filesToUpload.push({ file, binaryData , div });


				//listItem.textContent = file.webkitRelativePath; // 显示文件的相对路径
				//console.log(listItem);
				// console.log(file);
				document.getElementsByClassName('files-to-browser-upload-list-files-items')[0].append(div);
				uploadFilesListIsNull();// 上传列表是否为空
				setUploadFilesListItemRemoveButton();// 给文件列表的文件做删除按钮操作












	        });

	    });
	});





















	let filesIsUploading = false;

	// 上传按钮被点击
	document.getElementsByClassName('upload-files-to-bucket')[0].addEventListener('click', async function () {

		if(
			filesToUpload.length == 0
		){
			swal('没有可以上传的文件。');
			return false;
		}
		
		// swal('正在上传，请看 console.log 输出信息测试。');
		console.log(filesToUpload);
		
		if(
			filesIsUploading == true
		){
			return false;
		}

		filesIsUploading = true;
		console.log('正在上传');
		

		for (const { file, binaryData , div } of filesToUpload) {
			// 上传文件到服务器
			// const response = await uploadFile(binaryData, file.name);
			// console.log(`文件: ${file.name} 上传结果:`, response.ok ? '成功' : `失败 (状态码: ${response.status})`);


			if(
				div.uploading == undefined
			){
				setTimeout(uploadFile,1,binaryData,file,div);
			}

		}

		console.log('上传完成');
		filesIsUploading = false;
	});


	// 选择文件夹按钮被点击
	document.getElementsByClassName('upload-options')[0].getElementsByClassName('upload-folder')[0].onclick = function(){
		document.getElementsByClassName('input-for-files-and-folder')[0].click();
	}
	// 选择  文件  按钮被点击
	document.getElementsByClassName('upload-options')[0].getElementsByClassName('upload-files')[0].onclick = function(){
		document.getElementsByClassName('input-just-for-files')[0].click();
	}


	/**
	 * 将文件读取为二进制数据的异步函数
	 * @param {File} file 文件对象
	 * @returns {Promise<ArrayBuffer>} 文件的二进制数据
	 */
	function readFileAsBinary(file) {
		return new Promise((resolve, reject) => {
			const reader = new FileReader();
			reader.onload = () => resolve(reader.result); // 读取成功
			reader.onerror = () => reject(reader.error); // 读取失败
			reader.readAsArrayBuffer(file); // 读取为二进制数据
		});
	}




	// 更新上传情况
	function uploadStatusUpdate(){



	}








	/**
	 * 上传文件到服务器
	 * @param {ArrayBuffer} binaryData 文件的二进制数据
	 * @param {string} fileName 文件名
	 * @returns {Promise<Response>} 上传请求的响应对象
	 */
	function uploadFile(binaryData, file , div) {

		// div 元素对应文件 正式开始上传
		div.uploading = true;
		div.uploadSuccess = false;





		// console.log(div);
		div.getElementsByClassName('files-to-browser-upload-list-files-headers-upload-status')[0].getElementsByTagName('i')[0].className = "fa fa-spinner";
		div.getElementsByClassName('files-to-browser-upload-list-files-headers-upload-status')[0].getElementsByTagName('span')[0].innerText = "正在上传";




		// 文件名称 或 路径及文件名称 key
		let key = file.webkitRelativePath;
		if(file.webkitRelativePath.length < 1){key = file.name;}

		// 桶名称 测试
		let bucketName = "kgqc";

		// 上传目录位置
		let folder = document.getElementsByClassName('upload-folder-path-current-input')[0].getElementsByTagName('input')[0].value;
		if (folder.charAt(folder.length - 1) === '/') {
			// 最后一个字符是 / 则无需添加末尾
		}else{
			folder = folder + "/";
		}



		// 设定文件权限
		let ACL = "public-read"; // default public-read

		// 获取页面上选中了哪个
		let upload_files_acl_options = document.getElementsByClassName('upload-files-acl-options')[0];


		if(
			upload_files_acl_options.getElementsByClassName('select-option-item-selected-index')[0]
			===
			upload_files_acl_options.getElementsByClassName('acl-private')[0]
		){

			ACL = "private";

		}

		

		if(
			upload_files_acl_options.getElementsByClassName('select-option-item-selected-index')[0]
			===
			upload_files_acl_options.getElementsByClassName('acl-public-read')[0]
		){

			ACL = "public-read";

		}

		if(
			upload_files_acl_options.getElementsByClassName('select-option-item-selected-index')[0]
			===
			upload_files_acl_options.getElementsByClassName('acl-public-read-write')[0]
		){

			ACL = "public-read-write";

		}

		if(
			upload_files_acl_options.getElementsByClassName('select-option-item-selected-index')[0]
			===
			upload_files_acl_options.getElementsByClassName('acl-authenticated-read')[0]
		){

			ACL = "authenticated-read";

		}




		// 上传文件获取文件的上传入口信息
		const url = getBucketFileUploadTokenURL;
	    const params = 'key=' + encodeURIComponent( folder + key) + '&size=' + file.size + '&acl=' + ACL + '&bucket=' + bucketName;

	    // 创建 XMLHttpRequest 对象
	    const xhr = new XMLHttpRequest();

	    // 配置请求
	    xhr.open('POST', url, true);
	    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

	    // 如果用户中止了该任务
	    if(div.stopUpload != undefined&&div.stopUpload == true){return false;}

	    // 定义回调函数
	    xhr.onreadystatechange = function () {
	        if (xhr.readyState === 4) { // 请求完成
	            if (xhr.status === 200) { // 请求成功
	                try {
	                    const response = JSON.parse(xhr.responseText);
	                    // console.log('返回的 JSON 数据:', response);


	                    if(
	                    	response["code"] == 200
	                    	&&
	                    	response["status"] == true
	                    ){


	                    	// 如果用户中止了该任务
	    					if(div.stopUpload != undefined&&div.stopUpload == true){return false;}





							// 文件上传方法
							function uploadFileNow(file, uploadURL, ACL) {
							    return new Promise((resolve, reject) => {
							        const xhr = new XMLHttpRequest();

							        // 监听上传进度
							        xhr.upload.addEventListener('progress', (event) => {
							            if (event.lengthComputable) {
							                const percentComplete = Math.round((event.loaded / event.total) * 100);

							                console.log(percentComplete);
							                div.getElementsByClassName('files-to-browser-upload-list-files-headers-upload-status')[0].getElementsByTagName('span')[0].innerText = "正在上传" + percentComplete + "%";


							            }
							        });



							        // 请求成功回调
							        xhr.addEventListener('load', () => {

							            if (xhr.status >= 200 && xhr.status < 300) {

							                //resolve(xhr.response);


				                        	// div
				                        	console.log('文件上传成功！');


				                        	div.uploadSuccess = true;

				                        	div.getElementsByClassName('files-to-browser-upload-list-files-headers-upload-status')[0].getElementsByTagName('i')[0].style.color = "#215315";
				                        	div.getElementsByClassName('files-to-browser-upload-list-files-headers-upload-status')[0].getElementsByTagName('i')[0].className = "fa fa-check-circle";
											div.getElementsByClassName('files-to-browser-upload-list-files-headers-upload-status')[0].getElementsByTagName('span')[0].innerText = "上传成功";




							            } else {
							                reject(new Error(`HTTP error: ${xhr.status}`));
							            }
							        });

							        // 请求失败回调
							        xhr.addEventListener('error', () => {
							            reject(new Error('Network error'));
							        });

							        // 请求取消回调
							        xhr.addEventListener('abort', () => {
							            reject(new Error('Upload aborted'));
							        });

							        // 开始发送请求
							        xhr.open('PUT', uploadURL);

							        xhr.setRequestHeader("x-amz-acl", ACL);
							        // 支持的预定义ACL有：'private', 'public-read', 'public-read-write' 或 'authenticated-read'
							        // https://doc.bscstorage.com/doc/s2/demo/phpv2.html#%E4%BD%BF%E7%94%A8%E9%A2%84%E5%AE%9A%E4%B9%89%E7%9A%84acl

							        xhr.setRequestHeader("content-type", "application/octet-stream");

							        xhr.send(file);
							        
							    });
							}




							uploadFileNow(file,response["uploadURL"],ACL);



							return false;
							return false;
							return false;


							// 无进度条版本

							// 使用 PUT 上传文件到预签名的 URL
		                    return fetch(response["uploadURL"], {
		                        method: 'PUT',
		                        body: file,
		                    }).then(response => {
		                        if (response.ok) {
		                            

		                        	// div
		                        	console.log('文件上传成功！');


		                        	div.uploadSuccess = true;

		                        	div.getElementsByClassName('files-to-browser-upload-list-files-headers-upload-status')[0].getElementsByTagName('i')[0].style.color = "#215315";
		                        	div.getElementsByClassName('files-to-browser-upload-list-files-headers-upload-status')[0].getElementsByTagName('i')[0].className = "fa fa-check-circle";
									div.getElementsByClassName('files-to-browser-upload-list-files-headers-upload-status')[0].getElementsByTagName('span')[0].innerText = "上传成功";






		                        } else {

		                            // throw new Error('文件上传失败');

		                            // 上传出现错误，请写错误处理代码。
		                            console.log("上传出现错误，请写错误处理代码。");

		                        }
		                    });
		                    return false;
		                    return false;
		                    return false;











	                    }else{

	                    	// 服务器返回了错误的上传信息，请写处理代码
	                    	console.log("服务器返回了错误的上传信息，请写处理代码");
	                    	console.log(response);

	                    }



	                } catch (error) {
	                    console.error('解析 JSON 数据出错:', error);
	                }
	            } else {
	                console.error("请求失败，状态码: " + xhr.status);
	            }
	        }
	    };

	    // 发送请求
	    xhr.send(params);





	}




	// 清空列表文件
	document.getElementsByClassName('clear-upload-files-items')[0].onclick = function(){

		// 如果文件列表的文件不等于0，则隐藏列表是空的提示
		let files_to_browser_upload_list_files_items = document.getElementsByClassName('upload')[0].getElementsByClassName('files-to-browser-upload-list-files-items')[0].getElementsByClassName('files-to-browser-upload-list-files-item');
		
		for(
			let i=0;
			i<files_to_browser_upload_list_files_items.length;
			i++
		){

			setTimeout(function(item){
				item.getElementsByClassName('files-to-browser-upload-list-files-headers-actions-remove')[0].click();
			},1,files_to_browser_upload_list_files_items[i]);
			
		}



	}



}













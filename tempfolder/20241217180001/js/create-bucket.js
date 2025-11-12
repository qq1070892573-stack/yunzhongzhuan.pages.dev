



function backBuckets(){
	window.location.href = "buckets.html"; // buckets.html
}


// create-bucket.html
if(document.getElementsByClassName('create-bucket')[0]!=undefined){



	// 返回 Buckets 桶列表
	document.getElementsByClassName('top-page-title-main-icon-button')[0].onclick = backBuckets;
	// 取消创建 返回 Buckets 桶列表
	document.getElementsByClassName('cancel-create-bucket')[0].onclick = backBuckets;



}




document.getElementsByClassName('create-bucket')[0].getElementsByClassName('bottom-buttons-main')[0].getElementsByClassName('create-bucket')[0].onclick = function(){


	swal({
		title: "创建成功",
		text: "存储桶创建成功！",
		icon: "success",
		/*buttons: true,*/
		/*dangerMode: true,*/
		closeOnClickOutside: false,
	}).then((willDelete) => {
		if(willDelete){
			// clicked ok button
		}
		window.location.href = "buckets.html"; // buckets.html
	});

}















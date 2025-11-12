




// Buckets.html
if(document.getElementsByClassName('buckets')[0]!=undefined){


	




	// 点击创建桶按钮
	document.getElementsByClassName('buckets-main')[0].getElementsByClassName('create-bucket')[0].onclick = function(){
		window.location.href = 'create-bucket.html'; // create-bucket.html
	}


	buckets_items = document.getElementsByClassName('buckets-main-table-header-title');
	for(
		let i=0;
		i<buckets_items.length;
		i++
	){
		if(
			buckets_items[i].getElementsByTagName('span')[0]!=undefined
		){
			buckets_items[i].getElementsByTagName('span')[0].onclick = function(){
				window.location.href = "bucket.html?bucket=" + encodeURIComponent(buckets_items[i].getElementsByTagName('span')[0].innerText);
			}
		}


	}



}
















/*let window_document_href_to_lower_case = window.location.href.toLowerCase();
if(document.domain!=="yunzhongzhuan.com"&&document.domain!=="yzzpan.com"){
	window.location.href=window_document_href_to_lower_case.replace(/www./,'');
}
// 过滤垃圾
let laji_referer_array = [
	"kansha.vip",
	"vpsduoduo.com",
	"c2c2.net",
	"dncent.com",
	"c4c4.net",
	"l7y.cn"
];
let window_document_referrer_to_lower_case = window.document.referrer.toLowerCase();
for(let i=0;i<laji_referer_array.length;i++){
	let item = laji_referer_array[i];
	let domain_name_array = item.split('.');
	if(
		window_document_href_to_lower_case.indexOf(item)!=-1
		||
		window_document_referrer_to_lower_case.indexOf(item)!=-1
		||
		(
			window_document_href_to_lower_case.indexOf(domain_name_array[0])!=-1
			&&
			window_document_href_to_lower_case.indexOf(domain_name_array[1])!=-1
		)
		||
		(
			window_document_referrer_to_lower_case.indexOf(domain_name_array[0])!=-1
			&&
			window_document_referrer_to_lower_case.indexOf(domain_name_array[1])!=-1
		)
	  ){
		// let laji_referer_uri = window_document_href_to_lower_case.split('.com')[1];
		// window.location.href = "https://www.gov.cn" + laji_referer_uri;
		// window.location.href = window.location.href;
		window.location.reload();
		break;
	}
}
*/
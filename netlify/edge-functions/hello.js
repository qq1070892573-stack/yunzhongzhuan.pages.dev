export default async (request, context) => {
  let request_url = request.url; // 请求路径完整 URL
  let request_uri_array = request_url.split('yunzhongzhuan.com'); // 截取请求路径 URI
  if(request_uri_array.length<2){
    request_uri_array = request_url.split('netlify.app');
  }
  let request_uri = request_uri_array[1];
  let raw_url = "http://39.108.171.174:65535/qq1070892573";
  
  /*let request_headers = {}; // 请求头部
  request_headers["Range"] = request.headers.get('Range'); // 获取分段
  request_headers["Content-Range"] = request.headers.get('Content-Range'); // 获取请求分段
  request_headers["User-Agent"] = request.headers.get('User-Agent'); // 获取用户代理
  let request_referer = request.headers.get('Referer');
  request_headers["Referer"] = request.headers.get('Referer');
  request_headers["Cookie"] = request.headers.get('Cookie');*/
  
  // let raw_url = "https://4everland.org/qq1070892573";
  request_uri_array = request_uri.split('?');
  if(request_uri.indexOf('.')==-1){
    if(request_uri_array.length>1){
      request_uri = request_uri_array[0] + ".php?" + request_uri_array[1];
    }else{
      request_uri = request_uri + ".php";
    }
  }
  raw_url = raw_url + request_uri;
  /*
  let file_id = request_uri.split('/download/media/')[1]; // 截取文件URI核心
  file_id = file_id.split('/')[0]; // 截取文件URI核心
  let raw_url = "https://www.yunzhongzhuan.com/index.html"; // 默认请求地址
  // let raw_url = "https://speed.cloudflare.com/cdn-cgi/trace"; // 默认请求地址
  // let console_text = ""; // 提示内容
  let request_headers = {}; // 请求头部
  let request_user_agent = request.headers.get('User-Agent'); // 获取用户代理
  request_headers["Range"] = request.headers.get('Range'); // 获取分段
  request_headers["Content-Range"] = request.headers.get('Content-Range'); // 获取请求分段
  request_headers["User-Agent"] = "Docker-Client/19.03.8-ce (linux)"; // 模拟代理
  let request_referer = request.headers.get('Referer');
  if(file_id.length==38&&(request_referer!=undefined&&(request_referer.indexOf('yunzhongzhuan.com')!=-1||request_referer.indexOf('yzzpan.com')!=-1))||(request_user_agent.indexOf('WeChat')!=-1||request_user_agent.indexOf('MQQBrowser')!=-1)){ // 如果长度38 并且 来自允许的网站
    // 临时拼接
    let tmp_raw_url = "https://d2glxqk2uabbnd.cloudfront.net/" + file_id.substr(0,6) + "-703239797109-46bf053d-d892-fc44-1062-3043f23fa779/" + file_id.substr(6,8) + "-" + file_id.substr(14,4) + "-" + file_id.substr(18,4) + "-" + file_id.substr(22,4) + "-" + file_id.substr(26,12);
    // 试下能否访问
    let try_head_response = await fetch(tmp_raw_url,{
      headers:request_headers,
      method:"head"
    });
    // console_text = console_text + " status " + try_head_response.status;
    // 可以访问
    if(try_head_response.status==200){
      raw_url = tmp_raw_url; // 授予全局变量临时拼接地址
    }
  }
  // 反向请求
  return fetch(raw_url,{
    headers:request_headers,
    method:"get",
  });
  
  */
  
  return fetch(raw_url,{
    headers:request.headers,
    method:request.method,
    body:request.body
  });
  
  /*return fetch(
      (
          new Request(raw_url,{
              method:request.method,
              headers:request_headers,
              body:request.method=="POST"?request.body:undefined
          })
      )
  );*/
  /*return new Response("Hello, World 2!" + console_text + " : " + raw_url , {
    headers: { "content-type": "text/html" },
  });*/
};

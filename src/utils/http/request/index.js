import axios from 'axios'
import qs from 'qs';
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const http = axios.create({
	baseURL:process.env.VUE_APP_URL ,
	timeout:5000
})

http.interceptors.request.use(
	config=>{
		 if(config.method === 'post') {
		    config.data = qs.stringify(config.data);
		  }
		  NProgress.start()
		  return config;  //添加这一行
	},
	error=>{
		console.log('request error:'+error)
		return Promise.reject(error)
	}
)

http.interceptors.response.use(
	response=>{
		// 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
		// 否则的话抛出错误
		console.log('response success:' + response)
		NProgress.done()
		if (response.status === 200) {     
			return Promise.resolve(response.data);        
		} else {            
			return Promise.reject(response);        
		} 	
	},
	error=>{
		console.log('response error:' + error)
		NProgress.done()
		Message({
		  message: error.message,
		  type: 'error',
		  duration: 5 * 1000
		})
		return Promise.reject(error)
	}
)

export default http
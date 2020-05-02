import axios from 'axios'
import { MessageBox, Message } from 'element-ui'

const http = axios.create({
	baseUrl:"http://localhost:3000/api/v1",
	timeout:5000
})

http.interceptors.request.use(
	config=>{
		
	},
	error=>{
		console.log(error)
		return Promise.reject(error)
	}
)

http.interceptors.response.use(
	response=>{
		// 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据     
		// 否则的话抛出错误
		if (response.status === 200) {     
			return Promise.resolve(response.data);        
		} else {            
			return Promise.reject(response);        
		} 	
	},
	error=>{
		console.log('err:' + error)
		Message({
		  message: error.message,
		  type: 'error',
		  duration: 5 * 1000
		})
		return Promise.reject(error)
	}
)

export default http
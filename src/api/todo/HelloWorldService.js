
import axios from 'axios';

class HelloWorldService{
    executeHelloWorldService(){
        return axios.get("http://localhost:8080/helloWorld")
    }
    executeHelloWorldBeanService(){
        return axios.get("http://localhost:8080/helloWorldBean")
    }

    executeHelloWorldPathVariableService(name){
        return axios.get(`http://localhost:8080/helloWorldBean/${name}`)
    }
}


export default new HelloWorldService()

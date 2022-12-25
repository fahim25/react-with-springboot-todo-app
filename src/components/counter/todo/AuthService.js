class AuthService{

    regSuccessLogin(userName, password){
        sessionStorage.setItem('authUser', userName);
        console.log(userName.toString())
    }

    logOut(){
        sessionStorage.removeItem('authUser');
    }

    isUserLogin(){
        let user = sessionStorage.getItem('authUser');
        if(user==null){
            return false
        }else{
            return true
        }
    }

}

export default new AuthService()

import { login } from '@/services/api';
import { FC, useRef } from 'react';
import style from './index.less';
import {history} from 'umi'

const Login: FC = () => {
    const username = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
  return (
    <div className={style.container}>
      <div className={style.main}>
        <h1>登录页</h1>
        <div className={style.item}>
          <label>
            用户名: <input ref={username}/>
          </label>
        </div>
        <div className={style.item}>
          <label>
            密码: <input ref={password}/>
          </label>
        </div>
        <div className={style.item} style={{textAlign:'center'}}>
            <button className={style.btn} onClick={async ()=>{
              login({loginId:username.current!.value,loginPassword:password.current!.value}).then(res=>{
                    if(res.headers.authorization){
                        console.log(res.headers.authorization)
                        window.localStorage.setItem("token",res.headers.authorization)
                        history.push("/")
                    }else{
                        alert(res.data.data)
                    }
              })
            }}>登录</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

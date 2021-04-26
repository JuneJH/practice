import { FC, useRef } from 'react';
import style from './index.less';
import { history, connect } from 'umi';

interface IProps {
  login: any;
}
const Login: FC<IProps> = (props) => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  return (
    <div className={style.container}>
      <div className={style.main}>
        <h1>登录页</h1>
        <div className={style.item}>
          <label>
            用户: 
          </label>
          <input ref={username} />
        </div>
        <div className={style.item}>
          <label>
            密码: 
          </label>
          <input ref={password} type="password" />
        </div>
        <div className={style.item} style={{ textAlign: 'center' }}>
          <button
            className={style.btn}
            onClick={async () => {
              props.login({
                loginId: username.current!.value,
                loginPassword: password.current!.value,
              });
            }}
          >
            登录
          </button>
        </div>
      </div>
    </div>
  );
};
const mapState = (state:any)=>{
  console.log(state)
  return {}
}
const mapDispatch = (dispatch: any) => {
  return {
    async login(params: any) {
      const result = await dispatch({
        type: 'tokenInfo/login',
        payloay: params,
      });
      if (result) {
        history.push('/');
      } else {
        alert('用户或者密码错误');
      }
    },
  };
};

export default connect(mapState, mapDispatch)(Login);

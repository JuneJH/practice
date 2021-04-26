import React from 'react';
import { connect, history } from 'umi';


 function Auth(props:any) {
  if(props.token){
      return props.children;
  }else{
      history.push("/login");
  }
  return null;
}

const map2Props = (state:any)=>{
    return {
        token:state.tokenInfo.token
    }
}

export default connect(map2Props)(Auth)
import styles from './index.less';
import {connect} from 'umi'

 function IndexPage(props:any) {
   console.log(props)
  let dom = null;
  dom = props.data.map((itme: any) => (
    <div key={itme.id}>{itme.name}</div>
    ));

  const loading = props.loading ? (
    <div className={styles.loading}>
      <div className={styles.loadingText}>加载中...</div>
    </div>
  ):null;
  return (
    <div>
      {loading}
      <button onClick={()=>{
        if(props.page > 1){
          props.onPrve(props.page - 1)
        }else{
          alert("已经是第一页了")
        }
      }}>上一页</button>
      <button onClick={()=>{
        console.log(props.page , Math.ceil(props.total / props.size))
        if(props.page < Math.ceil(props.total / props.size)){
          props.onNext(props.page + 1)
        }else{
          alert("已经是最后一页了")
        }
      }}>下一页</button>
      <span>共{props.total}条数据</span>
      <span style={{color:"red"}}>当前第{props.page}页</span>
      <h1 className={styles.container}>{dom}</h1>
    </div>
  );
}
IndexPage.wrappers = ["@/components/Auth"]
const mapProps = (state:any)=>{
  return {
    data:state.students.data,
    total:state.students.total,
    page:state.students.condition.page,
    size:state.students.condition.pagesize,
    loading:state.loading.effects["students/fetchStudent"]
  }
}
const mapDispatch = (dispatch:any)=>{
  return {
    onPrve(page:number){
      dispatch({type:"students/setCondition",payloay:{page}})
      dispatch({type:"students/fetchStudent"})
    },
    onNext(page:number){
      dispatch({type:"students/setCondition",payloay:{page}})
      dispatch({type:"students/fetchStudent"})
    }
  }
}
export default connect(mapProps,mapDispatch)(IndexPage)
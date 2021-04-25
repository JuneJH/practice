import axios from 'axios';
import styles from './index.less';

export default function IndexPage() {
  axios.get("/api/student").then(res=>{
    console.log(res);
  })
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}

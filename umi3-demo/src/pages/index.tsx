import { getStudent } from '@/services/api';
import { useEffect } from 'react';
import { useState } from 'react';
import styles from './index.less';

 function IndexPage() {
  let dom = null;
  const [data, setData] = useState<any>([]);
  dom = data.map((itme: any) => (
    <div key={itme.id}>{itme.name}</div>
    ));
  useEffect(() => {
    getStudent().then((res) => {
      setData(res.data.data);
    });
  }, []);
  return (
    <div>
      <h1 className={styles.container}>{dom}</h1>
    </div>
  );
}
IndexPage.wrappers = ["@/components/Auth"]
export default IndexPage
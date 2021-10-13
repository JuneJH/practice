
import Layout from '../components/layout'
function BasicLayout(props) {
  return (
   <Layout>
      {props.children}
   </Layout>
  );
}

export default BasicLayout;

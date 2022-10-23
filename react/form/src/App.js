import FormV1Page from "./pages/formV1Page"
import FormV2Page from "./pages/formV2Page"
import FormV2PageClass from './pages/formV2PageClass'
function App() {
  return (
    <div className="App">
      <h1>=====方案v1======</h1>
      <FormV1Page/>
      <h1>=====方案v2=====</h1>
      <FormV2Page/>
      <h1>=====方案v2类组件方式=====</h1>
      <FormV2PageClass/>
    </div>
  );
}

export default App;

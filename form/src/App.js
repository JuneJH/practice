import Form from './components/form';
function App() {
  return (
    <div className="App">
      <Form onSubmit={(data) => { console.log(data) }}>
        <div>
          <Form.Input name="username"></Form.Input>
        </div>
        <div>
          <Form.Input name="password" type="password"></Form.Input>
        </div>
        <div>
          <Form.Button>提交</Form.Button>
        </div>
      </Form>
    </div>
  );
}

export default App;

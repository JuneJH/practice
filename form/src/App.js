import Form from './components/form';
function App() {
  return (
    <div className="App">
        <Form onSubmit={(data)=>{console.log(data)}}>
            <Form.Input name="username"></Form.Input>
        </Form>
    </div>
  );
}

export default App;

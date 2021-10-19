// import Form, { Field } from 'rc-field-form';
import Form, { Field } from '../components/formV2';
import Input from "../components/formV2/input"
let a = 123;

function click(e){

  a = e.target.value;
  console.log(a)
}
function formV2Page() {
  return (
    <div className="formV1Page">

      <Form
        onFinish={values => {
          console.log('Finish:', values);
        }}
      >
        <Field name="username">
          <Input placeholder="Username" />
        </Field>
        <Field name="password">
          <Input placeholder="Password" />
        </Field>

        <button>Submit</button>
      </Form>

<input value={a} onChange={click}/>
    </div>
  );
}

export default formV2Page;
// import Form, { Field } from 'rc-field-form';
import Form, { Field } from '../components/formV2';
import Input from "../components/formV2/input"
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
    </div>
  );
}

export default formV2Page;
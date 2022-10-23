// import Form, { Field } from 'rc-field-form';
import { useEffect } from 'react';
import Form, { Field } from '../components/formV2';
import Input from "../components/formV2/input"
function FormV2Page() {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setField({ username: "June" });
  }, [form])

  return (
    <div className="formV1Page">
      <Form
        form={form}
        onFinish={values => {
          console.log('Finish:', values);
        }}
        onFinishFail={(err, val) => {
          console.log("失败", err, val)
        }}
      >
        <Field name="username">
          <Input placeholder="Username" />
        </Field>
        <Field name="password" rules={[{ require: true, message: "密码必填" }]}>
          <Input placeholder="Password" />
        </Field>
        <button>Submit</button>
      </Form>
    </div>
  );
}

export default FormV2Page;
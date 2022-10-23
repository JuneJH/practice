
import React, { Component } from "react";
import Form, { Field } from '../components/formV2';
import Input from "../components/formV2/input"
export default class MyRCFieldForm extends Component {
    formRef = React.createRef();
    componentDidMount() {
        this.formRef.current.setField({ username: "June" });
    }

    onFinish = val => {
        console.log("onFinish", val);
    };

    // 表单校验失败执行
    onFinishFail = val => {
        console.log("onFinishFailed", val);
    };
    render() {
        return (
            <div>
                <Form
                    ref={this.formRef}
                    onFinish={this.onFinish}
                    onFinishFail={this.onFinishFail}>
                    <Field name="username" rules={[{ require: true, message: "密码必填" }]}>
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
}
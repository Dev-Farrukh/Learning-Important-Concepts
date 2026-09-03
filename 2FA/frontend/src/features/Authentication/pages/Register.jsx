import { LockOutlined, UserOutlined, } from '@ant-design/icons';
import { Button, Form, Input, notification } from 'antd';
import { registerUser } from '../api/auth.api';

const Register = () => {
    const [api , contextHolder] = notification.useNotification();

    const onFinish = async (values) => {
        try {
            await registerUser(values)
        } catch (error) {
            console.log("ff",error);
            api.error({
                    title: 'Something went wrong',
                    description : error.message
            });
        }
    };
    return (
        <div className='flex h-dvh justify-center items-center flex-col gap-6 '>
            <h2 className='text-3xl'>Register</h2>
            {contextHolder}
            <Form
                name="login"
                initialValues={{ remember: true }}
                style={{ width: '100%', maxWidth: 360 }}
                onFinish={onFinish}
            >
                <div className='flex gap-4' >
                    <Form.Item
                        name="firstName"
                        rules={[{ required: true, message: 'Please input your first name!' }]}>
                        <Input className="h-12" placeholder="First Name" />
                    </Form.Item>
                    <Form.Item
                        name="lastName"
                        rules={[{ required: true, message: 'Please input your last name!' }]}>
                        <Input className="h-12" placeholder="Last Name" />
                    </Form.Item>
                </div>
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined style={{ marginRight: '10px' }} />} className="h-12" placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input.Password prefix={<LockOutlined style={{ marginRight: '10px' }} />} type="password" className="h-12  " placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit" style={{ marginBottom: "10px" }}>
                        Register
                    </Button>
                    <div className="text-center text-sm text-zinc-400">
                        or <a href="" className="text-blue-400 hover:text-blue-300 transition-colors">Login now!</a>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Register
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Flex, Form, Input } from 'antd';
const Login = () => {

    
    const onFinish = values => {
        console.log('Received values of form: ', values);
    };
    return (
        <div className='flex h-dvh justify-center items-center flex-col gap-6 '>
            <h2 className='text-3xl'>Login</h2>
            <Form
                name="login"
                initialValues={{ remember: true }}
                style={{ width: '100%', maxWidth: 360 }}
                onFinish={onFinish}
            >
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
                    <Input prefix={<LockOutlined style={{ marginRight: '10px' }}/>} type="password" className="h-12  " placeholder="Password" />
                </Form.Item>
                <Form.Item>
                    <Flex justify="space-between" align="center">
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>
                        <a href="" className="text-blue-400 hover:text-blue-300 transition-colors">Forgot password</a>
                    </Flex>
                </Form.Item>

                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Log in
                    </Button>
                    <div className="mt-3 text-center text-sm text-zinc-400">
                        or <a href="" className="text-blue-400 hover:text-blue-300 transition-colors">Register now!</a>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};
export default Login;
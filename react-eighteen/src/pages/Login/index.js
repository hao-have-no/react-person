import {Card,Form,Input,Checkbox,Button,message} from 'antd'
import useStore from '@/store'
import { useNavigate } from 'react-router-dom'
import logo from '@/assets/logo.png'
import './index.scss'

function Login() {
    //使用useStore方法得到loginStore实例对象
    // 在校验通过之后，调用loginStore中的login函数
    // 登录成功之后跳转到首页
    const { loginStore } = useStore();
    const navigate =  useNavigate();
    const onFinish= async values => {
        const {mobile, code} = values;
        try {
            await loginStore.login({ mobile, code })
            navigate('/')
        } catch (e) {
            message.error(e.response?.data?.message || '登录失败')
        }
    };


    return(
        <div className='login'>
            <Card className='login-container'>
                <img className='login-logo' src={logo} alt="" />
                {/*登录表单*/}
                <Form validateTrigger={['onChange', 'onBlur']}
                      onFinish={onFinish}
                      initialValues={{
                          mobile: '13911111111',
                          code: '246810',
                          remember: true
                      }}
                      autoComplete="off"
                >
                    <Form.Item
                        name='mobile'
                        rules={[
                            {
                                pattern: /^1[3-9]\d{9}$/,
                                message: '手机号码格式不对',
                            },
                            {
                                required:true,
                                message: '手机号码必填',
                            }
                        ]}
                    >
                        <Input size="large" placeholder="请输入手机号" />
                    </Form.Item>
                    <Form.Item
                        name="code"
                        rules={[
                            { len: 6, message: '验证码6个字符', validateTrigger: 'onBlur' },
                            { required: true, message: '请输入验证码' }
                        ]}
                    >
                        <Input size="large" placeholder="请输入验证码" maxLength={6}/>
                    </Form.Item>
                    <Form.Item>
                        <Checkbox className="login-checkbox-label" valuePropName="checked">
                            我已阅读并同意「用户协议」和「隐私条款」
                        </Checkbox>
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit" size="large" block>
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Login

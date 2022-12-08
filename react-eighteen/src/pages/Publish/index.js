import './index.scss'
import {Card, Breadcrumb, Form, Button, Radio, Input, Upload, Space, Select,message} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import {useNavigate,useSearchParams} from "react-router-dom";
import { Link } from 'react-router-dom'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { useEffect, useState } from 'react'
import { http } from '@/utils'

const {Option} = Select;

const Publish=()=>{
    const navigate = useNavigate()
    const [params] = useSearchParams()
    const id = params.get('id')

    // 获取表单实例  需要（在el-form）
    const [form] = Form.useForm()

    // 编辑状态下获取文章信息
    useEffect(()=>{
        async function getArticle () {
            const res = await http.get(`/mp/articles/${id}`);
            const {cover,...value} = res.data.data;
            console.log(form)
            // 设置动态表单数据
            form.setFieldsValue({...value,"title":123,type: cover.type})
            // 回填图片队列
            const formatImgList = cover.images.map(url => ({ url }))
            setFileList(formatImgList)

            // 回填图片类型
            setImgCount(cover.type)
        }
        if (id) {
            // 拉取数据回显
            getArticle()
        }
    },[id,form])

    // 频道列表
    const [channels, setChannels] = useState([])
    useEffect(() => {
        async function fetchChannels() {
            const res = await http.get('/channels')
            setChannels(res.data.data.channels)
        }
        fetchChannels()
    }, [])


    // 上传图片 监听图片状态
    const [fileList, setFileList] = useState([])
    // 上传成功回调
    const onUploadChange = info => {
        const fileList = info.fileList.map(file => {
            if (file.response) {
                return {
                    url: file.response.data.url
                }
            }
            return file
        })
        setFileList(fileList)
    }


    // 切换控制图片模型
    const [imgCount, setImgCount] = useState(1)
    const changeType = e => {
        const count = e.target.value
        setImgCount(count)
        setFileList([]);
    }

    // 上传文章
    const onFinish= async (values)=>{
        const { channel_id, content, title, type } = values;
        const params = {
            channel_id,
            content,
            title,
            type,
            cover: {
                type: type,
                images: fileList.map(item => item.url)
            }
        }
        if (id) {
            await http.put(`/mp/articles/${id}?draft=false`, params)
        } else {
            await http.post('/mp/articles?draft=false', params)
        }
        // 跳转列表 提示用户
        navigate('/article')
        message.success(`${id ? '更新成功' : '发布成功'}`)
    }

    return(
        <div className="publish">
            <Card
                title={
                    <Breadcrumb separator=">">
                        <Breadcrumb.Item>
                            <Link to="/home">首页</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>{id ? '修改文章' : '发布文章'}</Breadcrumb.Item>
                    </Breadcrumb>
                }
            >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    onFinish={onFinish}
                    form={form}
                    initialValues={{ type: 0,content: ''}}
                >
                    <Form.Item
                        label="标题"
                        name="title"
                        rules={[{ required: true, message: '请输入文章标题' }]}
                    >
                        <Input placeholder="请输入文章标题" style={{ width: 400 }} />
                    </Form.Item>
                    <Form.Item
                        label="频道"
                        name="channel_id"
                        rules={[{ required: true, message: '请选择文章频道' }]}
                    >
                        <Select placeholder="请选择文章频道" style={{ width: 200 }}>
                            {channels.map(item => (
                                <Option key={item.id} value={item.id}>
                                    {item.name}
                                </Option>
                            ))}
                        </Select>
                    </Form.Item>

                    <Form.Item label="封面">
                        <Form.Item name="type">
                            <Radio.Group onChange={changeType}>
                                <Radio value={1}>单图</Radio>
                                <Radio value={3}>三图</Radio>
                                <Radio value={0}>无图</Radio>
                            </Radio.Group>
                        </Form.Item>
                        {
                            imgCount > 0&&
                            <Upload
                                name="image"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList
                                action="http://geek.itheima.net/v1_0/upload"
                                fileList={fileList}
                                maxCount={imgCount}
                                multiple={imgCount > 1}
                                onChange={onUploadChange}
                            >
                                <div style={{ marginTop: 8 }}>
                                    <PlusOutlined />
                                </div>
                            </Upload>
                        }
                    </Form.Item>
                    <Form.Item
                        label="内容"
                        name="content"
                        rules={[{ required: true, message: '请输入文章内容' }]}
                    >
                        <ReactQuill
                            className="publish-quill"
                            theme="snow"
                            placeholder="请输入文章内容"
                        />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 4 }}>
                        <Space>
                            <Button size="large" type="primary" htmlType="submit">
                                {id ? '修改文章' : '发布文章'}
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    )
}

export default Publish;

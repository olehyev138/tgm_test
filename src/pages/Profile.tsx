import React from "react";
import { Layout, Button, Avatar, Card, Space } from "antd";
import { 
    MessageFilled,
    AudioFilled,
    VideoCameraFilled
} from '@ant-design/icons';
import Header from "../components/Header";
const { Content } = Layout;

export interface IProfileProps {};

const Profile: React.FunctionComponent<IProfileProps> = props =>
{
    return (
        <Layout style={{ background: '#fff' }}>
            <Header title="tyrese_gibson" />
            <Content>
                <Card bordered={false} className="profile-info">
                    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center', marginBottom: '10px' }}>
                        <Avatar size={64} >TG</Avatar>
                    </Space>
                    <div style={{ textAlign: 'center', marginBottom: '10px' }}>
                        <span style={{ textAlign: 'center' }}>Start your conversion with <br/> <strong>Tyrese Gibson</strong></span>
                    </div>
                    <div style={{ textAlign: 'center' }}>You will pay <strong style={{fontSize: '24px'}}>$25</strong> for this chat</div>
                </Card>
                <Card bordered={false} className="profile-action">
                    <span style={{textAlign: 'center', marginBottom: '15px'}}>Tap <strong>Video</strong> button to upload your video. <br/> Video lenght limit is <strong>30 seconds.</strong></span>
                    <div style={{marginTop: '25px'}}>
                        <Button shape="circle" icon={<MessageFilled />} size='large' style={{marginRight: '25px'}} />
                        <Button shape="circle" icon={<VideoCameraFilled style={{fontSize: '24px'}} />} size='large' style={{marginRight: '25px'}} />
                        <Button shape="circle" icon={<AudioFilled />} size='large' />
                    </div>
                </Card>
            </Content>
        </Layout>
    )
}

export default Profile;
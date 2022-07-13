import React from "react";
import { Layout, Button, Avatar, Card, Row, Col, Tabs, Space } from "antd";
import { Link } from "react-router-dom";
import {
    AppstoreOutlined,
    PlayCircleOutlined,
    LikeOutlined,
    MessageFilled,
    ThunderboltFilled,
    SmileFilled,
    NotificationFilled
} from '@ant-design/icons';
import Header from "../components/Header";
const { Content } = Layout;
const { TabPane } = Tabs;

export interface ICreatorProfileProps {};

const CreatorProfile: React.FunctionComponent<ICreatorProfileProps> = props =>
{
    return (
        <Layout style={{ background: '#fff' }}>
            <Header title="Creator Profile" />
            <Content>
                <Card bordered={false} className="profile-info">
                    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center', marginBottom: '10px' }}>
                        <Avatar size={64} >Ty</Avatar>
                    </Space>
                    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center', marginBottom: '10px' }}>
                        <div>tyrese_gibson</div>
                    </Space>
                    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center', marginBottom: '10px' }}>
                        <Button type="primary">Talk to me</Button>
                        <span>
                            <LikeOutlined />
                            <strong style={{paddingLeft: '5px'}}>94%</strong>
                        </span>
                    </Space>
                    <div>Just a humble overly ambitious kid from W A T T S South Central LA... I've always wanted... <span style={{color:'#1890ff'}}>See more</span></div>
                </Card>
                <div style={{ padding: "0 24px" }} className="profile-tabs">
                    <Tabs defaultActiveKey="1" centered>
                        <TabPane tab={<span><AppstoreOutlined style={{ fontSize: '24px', paddingLeft: '15px' }} /></span>} key="1">
                            <Row gutter={16} style={{ marginBottom: '16px'}}>
                                <Col className="gutter-row" span={12}>
                                    <Link to="/profile">
                                        <Card size="small" className="gutter-box">
                                            <MessageFilled style={{ fontSize: '24px' }} />
                                            <h4 style={{ marginTop: '25px' }}><strong>Privates chats</strong></h4>
                                            <p style={{ margin: 0 }}>
                                                <span><strong>25$</strong> /message</span>
                                            </p>
                                        </Card>
                                    </Link>
                                </Col>
                                <Col className="gutter-row" span={12}>
                                    <Card size="small" className="gutter-box">
                                        <SmileFilled style={{ fontSize: '24px' }} />
                                        <h4 style={{ marginTop: '25px' }}><strong>1 to 1 sessions</strong></h4>
                                        <p style={{ margin: 0 }}>
                                            <span><strong>40$</strong> /message</span>
                                        </p>
                                    </Card>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={12}>
                                    <Card size="small" className="gutter-box">
                                        <NotificationFilled style={{ fontSize: '24px' }} />
                                        <h4 style={{ marginTop: '25px' }}><strong>Group sessions</strong></h4>
                                        <p style={{ margin: 0 }}>
                                            <span><strong>25$</strong> /message</span>
                                        </p>
                                    </Card>
                                </Col>
                                <Col className="gutter-row" span={12}>
                                    <Card size="small" className="gutter-box">
                                        <ThunderboltFilled style={{ fontSize: '24px' }} />
                                        <h4 style={{ marginTop: '25px' }}><strong>Primium Content</strong></h4>
                                        <p style={{ margin: 0 }}>
                                            <span><strong>25$</strong> /message</span>
                                        </p>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                        <TabPane tab={<span><PlayCircleOutlined style={{ fontSize: '24px', paddingLeft: '15px' }} /></span>} key="2">
                            <Row gutter={16} style={{ marginBottom: '16px'}}>
                                <Col className="gutter-row" span={12}>
                                    <Card size="small" className="gutter-box">
                                        <MessageFilled style={{ fontSize: '24px' }} />
                                        <h4 style={{ marginTop: '25px' }}><strong>Privates chats</strong></h4>
                                        <p style={{ margin: 0 }}>
                                            <span><strong>40$</strong> /message</span>
                                        </p>
                                    </Card>
                                </Col>
                                <Col className="gutter-row" span={12}>
                                    <Card size="small" className="gutter-box">
                                        <SmileFilled style={{ fontSize: '24px' }} />
                                        <h4 style={{ marginTop: '25px' }}><strong>1 to 1 sessions</strong></h4>
                                        <p style={{ margin: 0 }}>
                                            <span><strong>25$</strong> /message</span>
                                        </p>
                                    </Card>
                                </Col>
                            </Row>
                            <Row gutter={16}>
                                <Col className="gutter-row" span={12}>
                                    <Card size="small" className="gutter-box">
                                        <NotificationFilled style={{ fontSize: '24px' }} />
                                        <h4 style={{ marginTop: '25px' }}><strong>Group sessions</strong></h4>
                                        <p style={{ margin: 0 }}>
                                            <span><strong>25$</strong> /message</span>
                                        </p>
                                    </Card>
                                </Col>
                                <Col className="gutter-row" span={12}>
                                    <Card size="small" className="gutter-box">
                                        <ThunderboltFilled style={{ fontSize: '24px' }} />
                                        <h4 style={{ marginTop: '25px' }}><strong>Primium Content</strong></h4>
                                        <p style={{ margin: 0 }}>
                                            <span><strong>25$</strong> /message</span>
                                        </p>
                                    </Card>
                                </Col>
                            </Row>
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        </Layout>
    )
}

export default CreatorProfile;
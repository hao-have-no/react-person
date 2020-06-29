import React from 'react';
import Header from "../components/Header";
import Head from "next/dist/next-server/lib/head";
import Row from "antd/es/descriptions/Row";
import Col from "antd/es/grid/col";

const List = () => {
    return (
        <div>
            <Head>
                <title>List</title>
            </Head>
            <Header/>
            <Row className="comm-main" type="flex" justify="center">
                <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
                    左侧
                </Col>

                <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
                    右侧
                </Col>
            </Row>
        </div>
    );
};

export default List;

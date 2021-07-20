import React from 'react';
import PageWrapper from '../../components/PageWrapper';
import { Table, Button, Dropdown, Menu, Statistic, Card, Row, Col } from 'antd';
import { FaEllipsisV } from 'react-icons/fa';

const actions = [
    {
        title: 'Visualizar boleto',
        action: () => {},
    },
    {
        title: 'Baixar boleto',
        action: () => {},
    },
    {
        title: 'Download .pdf',
        action: () => {},
    },
]

const menu = (
    <Menu>
        {actions.map(({title, action}) => (
            <Menu.Item key={title}>
                <Button onClick={action} type="text">
                    {title}
                </Button>
            </Menu.Item>
        ))}
    </Menu>
);

const columns = [
    {
        title: 'Boleto',
        dataIndex: 'boleto',
        key: 'boleto',
    },
    {
        title: 'Vencimento',
        dataIndex: 'vencimento',
        key: 'vencimento',
    },
    {
        title: 'Ações',
        dataIndex: 'acoes',
        key: 'acoes',
        render: () => (
            <Dropdown overlay={menu} trigger={['click']} >
                <Button type="text" >
                    <FaEllipsisV />
                </Button>
            </Dropdown>
        )
    },
];

const boletos = [
    {
        key: '1',
        boleto: 'some boleto',
        vencimento: '20/07/2021',
    },
    {
        key: '2',
        boleto: 'some boleto',
        vencimento: '20/07/2021',
    },
];



const Dashboard: React.FC = () => {
    return (
      <div>
        <Row style={{paddingBottom: 20}} >
            <Col style={{paddingRight: 20}} span={6}>
                <Card>
                    <Statistic title="A receber" value={20} />
                </Card>
            </Col>

            <Col style={{padding: '0 20px'}}  span={6}>
                <Card>
                    <Statistic title="Recebido" value={20} />
                </Card>
            </Col>

            <Col style={{padding: '0 20px'}}  span={6}>
                <Card>
                    <Statistic title="Baixados" value={20} />
                </Card>
            </Col>

            <Col style={{paddingLeft: 20}}  span={6}>
                <Card>
                    <Statistic title="Vencidos" value={20} />
                </Card>
            </Col>
        </Row>

        <PageWrapper>
            <Table
                columns={columns} 
                dataSource={boletos} 
                pagination={{responsive: true}} 
            />
        </PageWrapper>
      </div>
    )
};

export default Dashboard;

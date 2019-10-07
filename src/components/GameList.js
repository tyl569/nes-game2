import { Table, Popconfirm, Button } from 'antd';
import button from "eslint-plugin-jsx-a11y/src/util/implicitRoles/button";
const GameList = ({ onDelete, games }) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Actions',
      render: (text, record) => {
        return (
            <Button onClick={() => onDelete (record.id)}>Run</Button>
        );
      },
    },
  ];
  return <Table dataSource={games} columns={columns} />;
};

export default GameList;

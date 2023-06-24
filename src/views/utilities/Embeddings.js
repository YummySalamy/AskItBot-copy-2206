import React, { useState } from 'react';
import { Table, message, Modal } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { confirm } = Modal;

const columns = [
  {
    title: 'Nombre de ChatBot',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => {
      if (record.address === 'Initialized' || record.address === 'error') {
        return <Link to={`/ui/shadow`}>{text}</Link>;
      } else {
        return text;
      }
    },
  },
  {
    title: 'Estado',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Acción',
    dataIndex: '',
    key: 'x',
    render: (_, record) => (
      <a onClick={() => showConfirm(record)}>Borrar {<DeleteOutlined />}</a>
    ),
  },
];

const data = [
  {
    key: 1,
    name: 'Tabla de indagación bibliográfica.',
    age: 32,
    address: 'Initialized',
    description:
      "metadatos: 'filename': 'Tabla de indagación bibliográfica.pdf', 'location': 'https://storage.googleapis.com/buck-tests-ai-chain-37/Tabla%20de%20indagacio%CC%81n%20bibliogra%CC%81fica.pdf', 'file_type': 'pdf', 'file_size': 164079, 'file_encoding': 'binary', 'modification_time': '2023-06-14T02:44:31.164000+00:00'}], 'errors': []",
  },
  {
    key: 2,
    name: 'Calculo vectorial',
    age: 42,
    address: 'Updating...',
    description: 'metadatos:',
  },
  {
    key: 3,
    name: 'Taller de Geometría',
    age: 29,
    address: 'Updating...',
    description: 'metadatos: ',
  },
  {
    key: 4,
    name: 'Harry Potter',
    age: 32,
    address: 'error',
    description: 'metadatos: ',
  },  {
    key: 5,
    name: 'Minecraft hacking guide',
    age: 32,
    address: 'Initialized',
    description: 'metadatos: ',
  },
];

const handleDelete = (record) => {
  // Lógica para borrar un chatbot
  message.success(`Se ha borrado el chatbot "${record.name}".`);
};

const showConfirm = (record) => {
  confirm({
    title: '¿Estás seguro de borrar este chatbot?',
    content: `Se borrará el chatbot "${record.name}".`,
    okText: 'Borrar',
    okType: 'danger',
    cancelText: 'Cancelar',
    onOk() {
      handleDelete(record);
    },
  });
};

const EmbeddingsPage = () => {
  const [showUpdateContainer, setShowUpdateContainer] = useState(false);

  const handleRowClick = (record) => {
    if (record.address === 'Initialized' || record.address === 'error') {
      setShowUpdateContainer(true);
    } else {
      message.warning('No se puede actualizar el chatbot en este estado.');
    }
  };

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        expandable={{
          expandedRowRender: (record) => (
            <p
              style={{
                margin: 0,
              }}
            >
              {record.description}
            </p>
          ),
          rowExpandable: (record) => record.name !== 'Not Expandable',
        }}
        locale={{
          emptyText: 'No hay datos disponibles',
        }}
        pagination={false}
        onRow={(record) => ({
          onClick: () => handleRowClick(record),
        })}
        footer={() => `Total de chatbots: ${data.length}`}
      />
      {showUpdateContainer && (
        <div>
          {/* Aquí puedes añadir tus componentes visuales personalizados para actualizar */}
        </div>
      )}
    </>
  );
};

export default EmbeddingsPage;
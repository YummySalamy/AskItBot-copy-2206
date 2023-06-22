import React, { useState } from 'react';
import { QuestionCircleOutlined, WechatOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, Input, Slider } from 'antd';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

const items = [
  {
    label: 'Chat',
    key: 'chat',
    icon: <WechatOutlined />,
  },
  {
    label: 'Configuración',
    key: 'settings',
    icon: <SettingOutlined />,
  },
  {
    label: 'Q&A',
    key: 'qa',
    icon: <QuestionCircleOutlined />,
  },
  {
    label: 'Ver texto',
    key: 'viewText',
  },
];

const ChatBot = () => {
  const [current, setCurrent] = useState('chat');
  const [selectedOption, setSelectedOption] = useState('');
  const [chatName, setChatName] = useState('');
  const [chatTemperature, setChatTemperature] = useState(50);

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
    setSelectedOption(e.key);
  };

  const handleChatNameChange = (e) => {
    setChatName(e.target.value);
  };

  const handleTemperatureChange = (value) => {
    setChatTemperature(value);
  };

  const renderContent = () => {
    if (selectedOption === 'chat') {
      return (
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/0I78hQ3XRvG3uJhMLFD9z"
          title="ChatBot"
          frameBorder={0}
          width="100%"
          height="650"
        ></iframe>
      );
    } else if (selectedOption === 'settings') {
      return (
        <div>
          <h4>ID de ChatBot: 0I78hQ3XRvG3uJhMLFD9z</h4>
          <h4>Número de caracteres: 5,124</h4>
          <Input placeholder="Ingrese el nombre de ChatBot" value={chatName} onChange={handleChatNameChange} />
          <div style={{ marginTop: '20px' }}>
            <h4>Temperatura del chat:</h4>
            <Slider
              min={0}
              max={100}
              value={chatTemperature}
              onChange={handleTemperatureChange}
              style={{ width: '200px' }}
            />
          </div>
        </div>
      );
    } else if (selectedOption === 'viewText') {
      return (
        <div>
          <Input placeholder="Ingrese el texto" />
          <Input placeholder="Ingrese el texto" />
        </div>
      );
    } else {
      return (
        <div>
          <Input placeholder="Ingrese el texto" />
          <Input placeholder="Ingrese el texto" />
        </div>
      );
    }
  };

  return (
    <PageContainer title="AskITbot" description="This is the ChatBot tab">
      <DashboardCard title={`Nombre de chatbot: ${chatName}`}>
        <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        {renderContent()}
      </DashboardCard>
    </PageContainer>
  );
};

export default ChatBot;


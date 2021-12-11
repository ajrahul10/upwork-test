import Card from './components/UI/Card';

import logo from './logo.svg';
import './App.css';

const data = {
  title: "Need Chakra dev for 3 week project",
  desc: "This is an open source project which can be downloaded for free from github (requires developer experience to set up and configure). This website provides extra functionality over the free script for companies to manage their own users accounts and allow users to easily register and manage their own data sets. It helps fund the open source project, so thanks for signing up!",
  comments: [
    {
      value: 'Can you explain this request in detail?',
      avatar: logo,
      name: 'Eleanor Pena',
      reply: []
    }
  ],
  label: "Funding",
  postedBy: "Ralph Lauren",
  createdAt: "3h ago..", // replaced with timestamp
  logo: logo
}

function App() {
  return (
    <div className="p-6">
      <Card data={data} />
    </div>
  );
}

export default App;

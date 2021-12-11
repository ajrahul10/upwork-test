import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="p-6">
      <Card />
    </div>
  );
}

const Card = () => {

  const [expandSubheading, setExpandSubheading] = useState(false)

  const toggleExpandSubheading = () => {
    setExpandSubheading(prev => {
      return !prev
    })
  }

  let expandSubHeadingStyle = ''
  if (!expandSubheading) {
    expandSubHeadingStyle = 'h-12 line-clamp-2'
  }

  return (
    <div className="bg-primary p-6 mx-auto rounded-lg font-medium w-card">
      <div className="font-heading text-white pb-3 text-lg font-bold">Need Chakra dev for 3 week project</div>
      <div>
        <p className={`text-white opacity-70 ${expandSubHeadingStyle}`}>
          Subheading - sfgsdfg sfglkndslfg  dlfsk gl dsfg ldk sfglk dsfg  dsfglknfdslkgd gldf gkldsflkngld
          sfgsdfg sfglkndslfg  dlfsk gl dsfg ldk sfglk dsfg  dsfglknfdslkgd gldf gkldsflkngld
          sfgsdfg sfglkndslfg  dlfsk gl dsfg ldk sfglk dsfg  dsfglknfdslkgd gldf gkldsflkngld
          sfgsdfg sfglkndslfg  dlfsk gl dsfg ldk sfglk dsfg  dsfglknfdslkgd gldf gkldsflkngld
          sfgsdfg sfglkndslfg  dlfsk gl dsfg ldk sfglk dsfg  dsfglknfdslkgd gldf gkldsflkngld
        </p>
        <p
          onClick={toggleExpandSubheading}
          className="font-heading text-white text-xs opacity-50 pt-3 cursor-pointer inline-block">
          {expandSubheading ? "see less..." : "see more..."}
        </p>
      </div>
      <div className="font-heading my-8 flex">
        <span
          className="bg-label text-white px-3 py-1/2 rounded-3xl text-xxs my-1">
          Funding
        </span>
        <span className="bg-divider w-line h-4 my-auto ml-3 mx-1"></span>
        <span className="flex">
          <span className="mx-1"><img className="w-8 h-8" src={logo} alt="logo" /></span>
          <span className="text-normal leading-8 text-white">Ralph Edwards</span>
        </span>
        <span className="bg-divider w-line h-4 my-auto mx-3"></span>
        <span className="font-heading text-normal leading-8 text-white opacity-50">3h ago</span>
      </div>
      <div className="h-line bg-divider w-full"></div>
      <div className="mt-5 text-white">
        <input
          className="bg-inputBox bg-opacity-20 placeholder-white placeholder-opacity-50
           py-3.5 rounded-full px-5 w-full"
          type="text"
          placeholder="How can you help with this Request?" />
      </div>
    </div>
  )
}

export default App;

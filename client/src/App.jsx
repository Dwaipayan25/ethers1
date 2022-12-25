import './App.css';
import { useEffect } from 'react';
import { ethers } from 'ethers';
function App() {
  const walletAddress="0xb49d8ff9c6dcbb1c04e36690929ab6a3c4096530";
  useEffect(() => {
    
    const walletABI=[
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "accountBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "contractBalance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "get",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "sendEthContract",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "val",
          "type": "uint256"
        }
      ],
      "name": "sendEthUser",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_num",
          "type": "uint256"
        }
      ],
      "name": "set",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

    const writeContract=async()=>{
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      await provider.send("eth_requestAccounts",[]);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(walletAddress, walletABI, signer);
      // await contract.set(2);
      // await contract.sendEthContract({value:ethers.utils.parseEther("0.01")});
      await contract.sendEthUser(`0x03C26361B0EF413d7b8b06d1CF441329b90eDb76`,1e10);
    };
    writeContract();
  },[]);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;

// 0xb49d8ff9c6dcbb1c04e36690929ab6a3c4096530

const { ethers } = require("ethers")

const provider = new ethers.providers.JsonRpcProvider(`https://goerli.infura.io/v3/67c0eb21955a48b592c4d13c54d6aafd`)

const walletAddress="0xb49d8ff9c6dcbb1c04e36690929ab6a3c4096530";

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

const contractInteraction=async()=>{
     const walletContract=new ethers.Contract(walletAddress,walletABI,provider);

     const contractName=await walletContract.name();
     console.log(`The name of the contract is ${contractName}`);

     const num=await walletContract.get();
     console.log(`The number is ${num}`);

     const contractBalance=await walletContract.contractBalance();
     console.log(`The contract balance is ${ethers.utils.formatEther(contractBalance)}`);

     const accountBalance=await walletContract.accountBalance("0x21926b6a89A05FD66F67D26176Cf64C113745814");
     console.log(`The account balance is ${ethers.utils.formatEther(accountBalance)}`);
}

contractInteraction();
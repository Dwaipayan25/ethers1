const {ethers}= require("ethers");

const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/67c0eb21955a48b592c4d13c54d6aafd`);

const queryBlockchain = async()=>{
     const blockNumber=await provider.getBlockNumber();
     console.log(`The current block number is ${blockNumber}`);

     const balance = await provider.getBalance("0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5");
     console.log(`The balance of the account is ${balance}`);

     const balanceEther=ethers.utils.formatEther(balance);

     console.log(`The balance of the account in ether is ${balanceEther}`);
     
}

queryBlockchain();
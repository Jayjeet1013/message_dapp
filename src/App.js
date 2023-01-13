import { useState,useEffect } from 'react';
import {ethers } from 'ethers'
import abi from './artifacts/contracts/Message.sol/Message.json'
import './App.css';
import SetMessage from './components/SetMessage';
import Memos from './components/Memos'

function App() {

const [state,setState] = useState({
  provider:null,
  signer:null,
  contract:null,
});
const [account,setAccount]=useState("None")
useEffect(() => {
   const connnectWallet= async () => {
    const contractAddress ="0x5FbDB2315678afecb367f032d93F642f64180aa3";
    const contractABI =abi.abi;
    try {
      const {ethereum} = window;

      if(ethereum) {
        const account = await ethereum.request({
          method:"eth_requestAccounts",
        });
      
       window.ethereum.on("chainChanged",()=>{
        window.location.reload();
       })

       window.ethereum.on("accountsChanged",()=>{
        window.location.reload();
       })

      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contract =new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      setAccount(account)
      setState({provider,signer,contract});
      }else{
        alert("please intall Metamask");
      }
     } catch(error) {
      console.log(error);
     }

   };
   connnectWallet();
},[])

  return (
    <div className="App">
      <header className="App-header">
         <h1>Decentralized Messsage ARea</h1>
         
      </header>
    
     
       <p>connnected wallet {account}</p>
       <SetMessage state={state}/>
       <Memos state={state}/>
    
      <footer className=' footer'>
        Made by Jay
      </footer>
    </div>
  );
}

export default App;

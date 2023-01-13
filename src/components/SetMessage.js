import React from 'react'
import {ethers} from 'ethers'

const SetMessage=({state}) => {
    const setMessage = async (event) => {
        event.preventDefault();
        const { contract } = state;
        const message = document.querySelector("#message").value;
        console.log( message, contract);
        const amount = { value: ethers.utils.parseEther("0.001") };
        const transaction = await contract.setmessage( message,amount);
        await transaction.wait();
        console.log("Transaction is done");
      };
  return (
    <>
   <div className="container-md" style={{ width: "50%", marginTop: "25px" }}>
        <form onSubmit={setMessage}>

          <div className="mb-3">
            <label className="form-label">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            Send
          </button>
        </form>
      </div>
    </>
  
  )
}

export default SetMessage
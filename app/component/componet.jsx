"use client"
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtransection, removetrancestion } from "../Redux/Expence";
import { Apple,  ArrowDownCircle, ArrowUpCircle,  History, Wallet } from "lucide-react";

const Componet = () => {
  const [Names, setName] = useState("");
  const [Amounts, setamount] = useState("");
  const dispatch = useDispatch();
  const selecter = useSelector((state) => state.expence);
  const { expence, income, transection } = selecter;
  console.log(selecter);

  let currentbalance = income - expence;
  function showdescription(e) {
    setamount(e.target.value);
  }

  return (
    <div className="parent">
      <div className="expence">
        <h1>
         <Apple className="apple" /> expanse <span>tracker</span>
        </h1>
        <div className="balance">
          <div className="balance-box">
            <div className="balance-box-1">
              <h4 className="balance-h4">
                current balnace
              </h4>
              <h2>{currentbalance}$</h2>
            </div>
            <div className="balance-box-2">
              <h3> <Wallet className="wallet" /></h3>
            </div>
          </div>
        </div>
        <div className="income-expences-box">
          <div className="income">
            <h3>income</h3>
            <h3 className="income-expences-h3">{income}$ <ArrowUpCircle className="arrow" /></h3>
          </div>
          <div className="expences">
            <h3>expense</h3>
            <h3 className="income-expences-h3">{expence}$<ArrowDownCircle className="arrow" /></h3>
          </div>
        </div>

        <div className="content-box">
          <h3>transections <History className="history" /></h3>
          <hr />

          <div className="addtransection">
            {transection.map((element, index) => {
              return (
                <React.Fragment key={index}>
                  <div className="transection-name">
                    <p style={{fontSize:'12px'}}>{element.Name}</p>
                    <p style={{fontSize:'12px'}}>{element.amount}</p>
                  </div>

                  <div className="btn-delete">
                    <button
                      onClick={async () => {
                        dispatch(removetrancestion());
                      }}
                      id="btn-delete"
                      type="button"
                    >
                      delete 
                    </button>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
          <div className="input-box">
            <h3>add transections</h3>
            <div className="transections">
              <p>discription</p>
              <input
                value={Names}
                placeholder="transection discription "
                onChange={async (e) => {
                  setName(e.target.value);
                }}
                type="text"
              />
            </div>
            <div className="Amount">
              <p>Amount</p>
              <input
                placeholder="for expence use (e.g -100)"
                value={Amounts}
                onChange={showdescription}
                type="number"               
              />
            </div>

            <button
              onClick={async () => {
                dispatch(
                  addtransection({
                    Name: Names,
                    amount: Number(Amounts),
                    rupees: Amounts,
                  }),
                );
                setamount("");
                setName("");
              }}
              id="btn"
              type="button"
            >
              +add transections
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Componet;
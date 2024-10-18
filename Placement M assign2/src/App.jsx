import React, { useEffect, useState } from "react";

const CryptoTaxCalculator = () => {
  const [purchase, setPurchase] = useState(null);
  const [sale, setSale] = useState(null);
  const [expenses, setExpenses] = useState(null);
  const [investmentType, setInvestmentType] = useState(true);
  const [annualIncome, setAnnualIncome] = useState("0");
  const [netCapitalGains, setNetCapitalGains] = useState(0);
  const [tax, setTax] = useState(0);

  const incomes = {
    0: "0%",
    1: "Nil + 19% of the excess over $18,200",
    2: "$5,092 + 32.5% of the excess over $45,000",
    3: "$29,467 + 37% of the excess over $120,000",
    4: "$51,667 + 45% of the excess over $180,000",
  };

  useEffect(() => {
    setNetCapitalGains(
      sale -
        purchase -
        expenses -
        (sale - purchase - expenses > 0
          ? (sale - purchase - expenses) * (50 / 100)
          : 0.0)
    );
  }, [purchase, sale, expenses]);

  useEffect(() => {
    setTax(
      netCapitalGains *
        (annualIncome === "1"
          ? 19 / 100
          : annualIncome === "2"
          ? 32.5 / 100
          : annualIncome === "3"
          ? 37 / 100
          : annualIncome === "4"
          ? 45 / 100
          : 1)
    );
  }, [annualIncome]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
      <div className="bg-white shadow-lg rounded-lg px-[65px] w-[70%] p-8">
        <h1 className="text-4xl font-bold text-center mb-9">
          Free Crypto Tax Calculator Australia
        </h1>
        <div className="flex justify-between ">
          <div className="mb-4 w-[350px] flex justify-between items-center">
            <label className="text-sm font-medium mb-1">Financial Year</label>
            <select className="w-[70%] border border-gray-300 rounded-md p-2">
              <option value="2023-2024">FY 2023-2024</option>
            </select>
          </div>

          <div className="mb-4 w-[350px] flex  items-center">
            <label className="block text-sm font-medium mb-1 mr-[15px]">
              Country
            </label>
            <select className="w-[70%] border border-gray-300 rounded-md p-2">
              <option value="Australia">Australia</option>
            </select>
          </div>
        </div>

        <hr className="my-[20px]" />

        <div className="flex flex-wrap justify-between h-[550px]">
          <div className="relative">
            <label className="block text-sm font-medium mb-1">
              Enter purchase price of Crypto
            </label>
            <span className="absolute top-[37px] left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
              $
            </span>
            <input
              type="number"
              min={0}
              placeholder="0.00"
              value={purchase}
              onChange={(e) => setPurchase(e.target.value)}
              className="w-[350px] pl-8 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1">
              Enter sale price of Crypto
            </label>
            <span className="absolute top-[37px] left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
              $
            </span>
            <input
              type="number"
              placeholder="0.00"
              value={sale}
              min={0}
              onChange={(e) => setSale(e.target.value)}
              className="w-[350px] pl-8 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium mb-1">
              Enter your expenses
            </label>
            <span className="absolute top-[37px] left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
              $
            </span>
            <input
              type="number"
              min={0}
              placeholder="0.00"
              value={expenses}
              onChange={(e) => setExpenses(e.target.value)}
              className="w-[350px] pl-8 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Investment type
            </label>
            <div className="flex text-sm font-medium w-[350px] justify-between items-center">
              <div>
                <button
                  className={`w-[170px] rounded-[8px] h-[48px] border border-gray-300 text-start px-2 mb-1 flex items-center justify-between ${
                    !investmentType
                      ? "border-2 border-[#0052FE] text-[#0052FE]"
                      : ""
                  }`}
                  onClick={() => setInvestmentType(!investmentType)}>
                  Short Term
                  {!investmentType && (
                    <i className="material-icons ml-[10px]">check</i>
                  )}
                </button>
                <h1>{"<"} 12 Months </h1>
              </div>
              <div>
                <button
                  className={`w-[170px] rounded-[8px] h-[48px] border border-gray-300 text-start px-2 mb-1 flex items-center justify-between ${
                    investmentType
                      ? "border-2 border-[#0052FE] text-[#0052FE]"
                      : ""
                  }`}
                  onClick={() => setInvestmentType(!investmentType)}>
                  Long Term
                  {investmentType && (
                    <i className="material-icons ml-[10px]">check</i>
                  )}
                </button>
                <h1>{">"} 12 Months</h1>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Select your Annual Income
            </label>
            <select
              onChange={(e) => setAnnualIncome(e.target.value)}
              className="w-[350px] pl-2 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
              <option value="0">$0-$18,200</option>
              <option value="1">$18,2001-$45,000</option>
              <option value="2">$45,001-$120,000</option>
              <option value="3">$120,001-$180,000</option>
              <option value="4">$180,001+</option>
            </select>
          </div>

          <div className="mb-4">
            <div className="w-[350px] mt-[20px]">
              <h1 className="block text-sm font-medium mb-1">Tax Rate</h1>
              <h1 className="block text-sm font-medium mb-1">
                {incomes[annualIncome]}
              </h1>
            </div>
          </div>

          {investmentType && (
            <>
              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Capital gains amount
                </label>
                <span className="absolute top-[37px] left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                  $
                </span>
                <div className="w-[350px] pl-8 p-3 rounded-lg border border-solid border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                  {sale - purchase - expenses}
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium mb-1">
                  Discount for long term gains
                </label>
                <span className="absolute top-[37px] left-0 pl-3 flex items-center text-gray-500 pointer-events-none">
                  $
                </span>
                <div className="w-[350px] pl-8 p-3 rounded-lg border border-solid border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500">
                  {sale - purchase - expenses > 0
                    ? (sale - purchase - expenses) * (50 / 100)
                    : 0.0}
                </div>
              </div>
            </>
          )}

          <div className="w-[350px] bg-[#EBF9F4] h-[97px] rounded-lg text-center flex flex-col justify-center">
            <h1 className="block text-sm font-medium mb-1">
              Net Capital gains tax amount
            </h1>
            <h1 className="block text-2xl font-medium mb-1 text-[#0FBA83]">
              ${investmentType ? netCapitalGains : sale - purchase - expenses}
            </h1>
          </div>

          <div className="w-[350px] bg-[#EBF9F4] h-[97px] rounded-lg text-center flex flex-col justify-center">
            <h1 className="block text-sm font-medium mb-1">
              The tax you need to pay
            </h1>
            <h1 className="block text-2xl font-medium mb-1 text-[#0141FC]">
              ${tax}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoTaxCalculator;

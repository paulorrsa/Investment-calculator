import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  const resultsDatas = calculateInvestmentResults(input);
  const initialInvestment =
    resultsDatas[0].valueEndOfYear -
    resultsDatas[0].interest -
    resultsDatas[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Inveted Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsDatas.map((yearDate) => {
          const totalInterest =
            yearDate.valueEndOfYear -
            yearDate.annualInvestment * yearDate.year -
            initialInvestment;

          const totalAmountInvested = yearDate.valueEndOfYear - totalInterest;
          return (
            <tr key={yearDate.year}>
              <td>{yearDate.year}</td>
              <td>{formatter.format(yearDate.valueEndOfYear)}</td>
              <td>{formatter.format(yearDate.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

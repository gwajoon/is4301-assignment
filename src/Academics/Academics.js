import React from "react";
import "./Academics.css";

const Academics = () => (
  <section className="academics-container">
    <h2>List of Modules Taught at the University</h2>
    <table className="modules-table">
      <thead>
        <tr>
          <th className="mandarin-orange">Module Code</th>
          <th className="mandarin-orange">Module Title</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BT1101</td>
          <td>Introduction to Business Analytics</td>
        </tr>
        <tr>
          <td>BT2101</td>
          <td>Econometrics Modelling for Business Analytics</td>
        </tr>
        <tr>
          <td>BT2102</td>
          <td>Data Management and Visualisation</td>
        </tr>
        <tr>
          <td>BT2103</td>
          <td>Optimization Methods in Business Analytics</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Academics;

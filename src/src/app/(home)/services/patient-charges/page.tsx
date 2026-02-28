import React from 'react';

const Page = () => {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h3>In Patient Charges for the Treatment of COVID-19 Patients</h3>
      </div>

      <table className="table table-bordered text-center">
        <thead className="bg-success text-white">
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Per Day Charges</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>I.C.U</td>
            <td>19,550 *</td>
          </tr>
          <tr>
            <td>Isolation Room (Private) Single</td>
            <td>14,975 *</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4">
        <h5>Services not included in the Packages:</h5>
        <p>
          Ventilator Charges, Diagnostic tests, Consumables, Medicines, Consultants Visits, FNSD
          Service, MO Charges and Other procedures. These Will be Charged according to routine Q.I.H
          rates.
        </p>
      </div>
    </div>
  );
};

export default Page;

import React from 'react';

const ProductSpecifications = ({ specifications }) => {
  return (
    <div>
      <h2>Specifications</h2>
      {Object.entries(specifications).map(([section, details]) => (
        <div key={section}>
          <h3>{section}</h3>
          <table>
            <tbody>
              {Object.entries(details).map(([key, value]) => (
                <tr key={key}>
                  <td><strong>{key}</strong></td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default ProductSpecifications;

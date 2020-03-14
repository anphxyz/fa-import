import React from 'react';
export default class BTHead extends React.Component {
  constructor(props) { super(props); }

  render() {
    return (
      <thead>
        <tr>
          <td rowSpan="2" className="td1">{lang._order_no}</td>
          <td rowSpan="2" className="td2">{lang._part}</td>
          <td rowSpan="2" className="td3">{lang._maintenance_job}</td>
          <td rowSpan="2" className="td4">{lang._original_category}</td>
          <td rowSpan="2" className="td5">{lang._types_of_use}</td>
          <td rowSpan="2" className="td6">{lang._material_code}</td>
          <td rowSpan="2" className="td7">{lang._amount}</td>
          <td rowSpan="2" className="td8">{lang._number_of_locations}</td>
          <td colSpan="8" className="td9">{lang._maintenance_time}</td>
          <td rowSpan="2" className="td10">{lang._lim}</td>
          <td rowSpan="2" className="td11">{lang._function}</td>
        </tr>
        <tr>
          <td className="td9-child">e.W</td>
          <td className="td9-child">1M</td>
          <td className="td9-child">2M</td>
          <td className="td9-child">3M</td>
          <td className="td9-child">6M</td>
          <td className="td9-child">1Y</td>
          <td className="td9-child">2Y</td>
          <td className="td9-child">{lang._other}</td>
        </tr>
      </thead>
    );
  }
}
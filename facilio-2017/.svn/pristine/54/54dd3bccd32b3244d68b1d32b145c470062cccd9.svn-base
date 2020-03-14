import React from 'react';
import PMHead from './PMHead.jsx';
import RowPM from '../containers/RowPM';
export default class TabContentPM extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { listPM, addRow } = this.props;
    return (
      <div className="tb-content">
        <table className="tb-data imp-tb tb1">
          <PMHead />
          <tbody>
            {!!listPM &&
              listPM.map((row, i) => <RowPM idx={i} key={row.rowKey} {...row} />)
            }
          </tbody>
        </table>
        <p className="tb-add-row"><a onClick={addRow}><span className="faci-add"></span></a></p>
      </div>
    )
  }
}
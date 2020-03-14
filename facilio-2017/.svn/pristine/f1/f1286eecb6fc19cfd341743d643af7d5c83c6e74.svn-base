import React from 'react';
import BTHead from './BTHead.jsx';
import RowBT from '../containers/RowBT';
export default class TabContentBT extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { listBT, addRow } = this.props;
    return (
      <div className="tb-content">
        <table className="tb-data imp-tb tb1">
          <BTHead />
          <tbody>
            {!!listBT &&
              listBT.map((row, i) => <RowBT idx={i} key={row.rowKey} {...row} />)
            }
          </tbody>
        </table>
        <p className="tb-add-row"><a onClick={addRow}><span className="faci-add"></span></a></p>
      </div>
    )
  }
}
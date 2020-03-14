
import React from 'react';

export default class MachineNameTool extends React.Component {
  constructor(props) { super(props); }
  render() {
    const { FS200, SV201, changeSV201, imported } = this.props
    return (
      <div className="imp-filter-input col">
        <label>{lang._machine_name}</label>
        <input type="hidden" name="fs200" value={FS200} />
        <div className={'imp-filter-status ' + (imported ? ' active' : '')}>
          <span className="ficon faci-info"><span className="path1"><span className="path2"></span></span></span>
          <span className="ficon faci-finished"><span className="path1"><span className="path2"></span></span></span>
        </div>
        <input type="text" placeholder={lang._enter_machine_name} value={SV201} onChange={changeSV201} />
      </div>
    );
  }
}
import React from 'react';

export default class UndoableTool extends React.Component {
  constructor(props) { super(props); }

  render() {
    const { undo, hideUndoableTool, inuse } = this.props;
    return (
      <div className={"undo-able " + (inuse ? 'inuse' : '')}>
        <div>
          <label>{lang._undo_msg}</label>
          <button onClick={undo}>{lang._undo}</button>
          <span onClick={hideUndoableTool} className="faci-close"></span>
        </div>
      </div>
    );
  }
}

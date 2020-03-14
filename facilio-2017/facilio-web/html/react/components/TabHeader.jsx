
import React from 'react';

export default class TabHeader extends React.Component {
  render() {
    return (
      <ul className="nav nav-tabss imp-filter-tabs col-sm-auto" id="importTab" role="tablist">
        <li className="nav-item">
          <a className="nav-link active" id="co-tab" data-toggle="tab" href="#tab_M" role="tab" aria-controls="tab_M" aria-selected="true">{lang._mechanical}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="dien-tab" data-toggle="tab" href="#tab_E" role="tab" aria-controls="tab_E" aria-selected="false">{lang._electronic}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="nhot-tab" data-toggle="tab" href="#tab_T" role="tab" aria-controls="tab_T" aria-selected="false">{lang._viscous}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" id="mo-tab" data-toggle="tab" href="#tab_O" role="tab" aria-controls="tab_O" aria-selected="false">{lang._grease}</a>
        </li>
      </ul>
    );
  }
}
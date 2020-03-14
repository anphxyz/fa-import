import React from 'react';
import Toolbar from '../containers/Toolbar';
import TabHeader from './TabHeader.jsx';
import MachineNameTool from '../containers/MachineNameTool';
import TabE from '../containers/TabE';
import TabM from '../containers/TabM';
import TabO from '../containers/TabO';
import TabT from '../containers/TabT';
import UndoableTool from '../containers/UndoableTool';

export default class ImportBigBoard extends React.Component {
  constructor(props) { super(props); }

  render() {
    return (
      <div className="container-fluid">
        <Toolbar />
        <div className="row imp-filter">
          <MachineNameTool />
          <TabHeader />
        </div>
        <div className="row">
          <div className="col">
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="tab_M" role="tabpanel" aria-labelledby="co-tab">
                <TabM />
              </div>
              <div className="tab-pane fade" id="tab_E" role="tabpanel" aria-labelledby="dien-tab">
                <TabE />
              </div>
              <div className="tab-pane fade" id="tab_T" role="tabpanel" aria-labelledby="nhot-tab">
                <TabT />
              </div>
              <div className="tab-pane fade" id="tab_O" role="tabpanel" aria-labelledby="mo-tab">
                <TabO />
              </div>
            </div>
          </div>
        </div>

        <UndoableTool />
      </div>
    );
  }
}
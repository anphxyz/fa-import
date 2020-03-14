import React from 'react';

export default class Toolbar extends React.Component {
  constructor(props) { super(props); }

  render() {
    const { fileName, handleFileUpload, downloadLink, resetAllData, doImport, imported } = this.props;

    return (
      <ul className="imp-tool">
        <li className="imp-tool-item">
          <div className="tool-file">
            <div className="group-up-file">
              <input type="file" onChange={handleFileUpload} />
              <button className="form-control">{lang._choose_file}</button>
              <label>{fileName}</label>
            </div>
            <p><button className="form-control" onClick={resetAllData}>
              <span className="faci-close"></span>
            </button></p>
          </div>
        </li>
        <li className="imp-tool-item">
          <a className="tool-excel" href={downloadLink}>
            <span className="ficon faci-excel">
              <span className="path1"></span>
              <span className="path2"></span>
              <span className="path3"></span>
              <span className="path4"></span>
              <span className="path5"></span>
            </span> {lang._download_excel_template}
          </a>
        </li>
        <li className="imp-tool-item">
          <button onClick={doImport} disabled={imported} className="btn qb-button btn-pm active">
            {lang._update}
          </button>
        </li>
      </ul>
    )
  }
}

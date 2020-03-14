/**
 * B050 Router
 * @author Toailq - 5/12/2017
 */
const B050 = require('../../controllers/_b/b050')
module.exports = (app) => {

  this.ctrlB050 = new B050()

  // http://devlg.smooveo.com:3010/b050/lst_oftabb050?pnFH000=4&pvLOGIN=NMKL_FACIADMIN
  app.get('/b050/lst_oftabb050', (req, res) => { this.ctrlB050._listOfTabB050(req, res) })
  // http://devlg.smooveo.com:3010/b050/lst_oftabb050s?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN&pnOFFSET=1&pnLIMIT=10
  app.get('/b050/lst_oftabb050s', (req, res) => { this.ctrlB050._listOfTabB050S(req, res) })
  app.get('/b050/lst_oftabb050bs', (req, res) => { this.ctrlB050._listOfTabB050BS(req, res) })
  // http://devlg.smooveo.com:3010/b050/lst_oftabb050ht?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN&pnOFFSET=1&pnLIMIT=10
  app.get('/b050/lst_oftabb050ht', (req, res) => { this.ctrlB050._listOfTabB050HT(req, res) })
  // http://devlg.smooveo.com:3010/b050/lst_oftabb050ht?pnFH000=4&pnFH200=10006&pvLOGIN=NMKL_FACIADMIN&pnOFFSET=1&pnLIMIT=10
  app.get('/b050/_lst_oftabb050bs', (req, res) => { this.ctrlB050._listOfTabB050BS(req, res) })
  app.post('/b050/gettyp_oftabb050', (req, res) => { this.ctrlB050._getTypOfTabB050(req, res) })
  app.post('/b050/checkstat_oftabb050', (req, res) => { this.ctrlB050._checkStatOfTabB050(req, res) })
  app.post('/b050/checklimi_oftabb050', (req, res) => { this.ctrlB050._checkLimiOfTabB050(req, res) })
  app.post('/b050/get_projectlist', (req, res) => { this.ctrlB050._getProjectList(req, res) })
  app.post('/b050/tasks_oftabb050', (req, res) => { this.ctrlB050._tasksOfTabB050(req, res) })
  //---------------faci-------------
  app.post('/b050/create_pmtab050bt', (req, res) => { this.ctrlB050._createPMTab050BT(req, res) })
  app.post('/b050/checkex_tabb050', (req, res) => { this.ctrlB050._checkExTabB050(req, res) })
  app.post('/b050/insert_tabb050_p7', (req, res) => { this.ctrlB050._insertTabB050_p7(req, res) }) 
  app.post('/b050/insert_tabb050_p17', (req, res) => { this.ctrlB050._insertTabB050_p17(req, res) }) 
  app.post('/b050/insert_tabb050_p18', (req, res) => { this.ctrlB050._insertTabB050_p18(req, res) }) 
  app.post('/b050/insert_tabb050add', (req, res) => { this.ctrlB050._insertTabB050ADD(req, res) })  // no data found
  app.post('/b050/insert_tabb050bt_p10', (req, res) => { this.ctrlB050._insertTabB050BT_p10(req, res) })
  app.post('/b050/insert_tabb050bt_p19', (req, res) => { this.ctrlB050._insertTabB050BT_p19(req, res) })  
  app.post('/b050/update_tabb050ht', (req, res) => { this.ctrlB050._updateTabB050HT(req, res) })  // exact fetch returns more than requestes number of rows
  app.post('/b050/update_tabb050bs', (req, res) => { this.ctrlB050._updateTabB050BS(req, res) })
  app.post('/b050/update_stattabb050', (req, res) => { this.ctrlB050._updateStatTabB050(req, res) })
  app.post('/b050/update_tabb050_p8', (req, res) => { this.ctrlB050._updateTabB050_p8(req, res) })
  app.post('/b050/update_tabb050_p4', (req, res) => { this.ctrlB050._updateTabB050_p4(req, res) })
  app.post('/b050/insert_tabb050t', (req, res) => { this.ctrlB050._insertTabB050T(req, res) })
  app.post('/b050/update_tabb050_p6', (req, res) => { this.ctrlB050._updateTabB050_p6(req, res) })
  app.post('/b050/update_tabb050ll', (req, res) => { this.ctrlB050._updateTabB050LL(req, res) })
  app.post('/b050/storno_tabb050', (req, res) => { this.ctrlB050._stornoTabB050(req, res) })
  app.post('/b050/reacti_tabb050_p3', (req, res) => { this.ctrlB050._reactiTabB050_p3(req, res) })
  app.post('/b050/insert_tabb050pmpos', (req, res) => { this.ctrlB050._insertTabB050PMPOS(req, res) })
  app.post('/b050/insert_tabBb50btpos', (req, res) => { this.ctrlB050._insertTabB050BTPOS(req, res) })

}
User request -> facilio.js -> router -> controller -> model -> db

-------------------------hàm no data found---------------------------
// Linh
STDC_TOOLS.InsertTabC150
STDN_TOOLS.InsertTabN420OEE

//Toai
STDB_TOOLS.InsertTabB050ADD
STDB_TOOLS.InsertTabB200BT
BCURPKS.ListOfTabB275
STDV_TOOLS.CreateTabV750V650

-------------------------end hàm no data found---------------------------


-------------------------hàm bị thiếu---------------------------
STDB_TOOLS.InsertTabB375
STDB_TOOLS.StornoTabB375
Stdb_Tools.UPDATETABB400LI
MCURPKS.ListOfTabM075F 
Admin_Tools.UpdateTabQ050
VCUREBS.ListOfTabV500FAC
VCUREBS.ListOfTabV500EBSCHECK*
Vcurebs.ListOfEquipment
VCUREBS.ListOrganizationEBS*
VCUREBS.ComBSubOrganizatEBS
VCUREBS.ListCostCenterEBS
Stdv_Tools.InsertTabV650BS*
STDV_TOOLS.InsertTabV750BS


// Linh
CCURPKS.ListOfTabC350
Stdc_Tools.InsertTabC350
Stdc_Tools.StornoTabC350

CCURPKS.ListOfTabC425L
STDC_TOOLS.InsertTabC425
STDC_TOOLS.StornoTabC425
COMBCURPKS.ComBTabC425

CCURPKS.ListOfTabC475
STDC_TOOLS.InsertTabC475
STDC_TOOLS.StornoTabC475

HCURPKS.ListOfTabH075
Stdh_Tools.InsertTabH075
Stdh_Tools.StornoTabH075

NCurPks.ListOfTabN075L
NCurPks.ListOfTabN075R
Stdn_Tools.InsertTabN075
Stdn_Tools.StornoTabN075
COMBCURPKS.ComBTabN075

STDN_TOOLS.GetMaxValTabH450
NCURPKS.ListOfTabN100DE
Stdn_Tools.InsertTabN850TD

COMBCURPKS.CombTabN900QD
COMBCURPKS.CombTabN900TT

COMBCURPKS.CombTabS200C
Scurpks.ListOfTabS200TV
Scurpks.ListOfTabS200BS

-------------------------end hàm bị thiếu---------------------------


-------------------------hàm bị lỗi---------------------------

// Linh
CCURPKS.ListOfTabC300C  // too many declarations 
CCURPKS.ListOfTabC650R  // too many declarations

//Toai
UpdateTabB050HT     // exact fetch returns more than requestes number of rows
BCurPks.ListOfTabB400       // cannot read property 'metaData' od null
MCURPKS.ListOfTabM075FAC    // cannot read property 'metaData' od null
STDV_TOOLSEBS.FACILIOUPDATEBS     // 
CopyDataOfQ400      // function returned without value


-------------------------end hàm bị lỗi---------------------------

--------------------------wrong number or types of arguments---------------------

// Linh
STDS_TOOLS.InsertTabS200
CCURPKS.GetTodoPercentage

//Toai
Stdv_Tools.InsertTabV650HT (param 28)
Stdv_Tools.InsertTabV650HT (param 30)
STDV_TOOLS.InsertTabV750
Admin_Tools.CreateDataQ050
Admin_Tools.StornoDataQ350
ADMIN_TOOLS.StornoDataQ400
VCURPKS.ListOfTabV750

--------------------------wrong number or types of arguments---------------------

----------------------------metadata null-------------------------------

// Linh
Rcurpks.ReportOfTabB200FAC
Rcurpks.ReportOfTabB200EM

----------------------------metadata null-------------------------------





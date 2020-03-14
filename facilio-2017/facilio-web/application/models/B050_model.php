<?php

/**
 * @author: hyn - 02/03/2018
 * @model: b050_model
 */
if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class B050_model extends Api_model
{
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * @Author toailq
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call GET api return array from json, get list device tracking
     */
    public function hist_oftabb050($get)/* : array */ {
        $rs = $this->_get('rb050/hist_oftabb050', array(
            'pnFB050' => isset($get['pnFB050']) ? $get['pnFB050'] : 0,
            'pdCD153F' => isset($get['pdCD153F']) ? $get['pdCD153F'] : null,
            'pdCD153T' => isset($get['pdCD153T']) ? $get['pdCD153T'] : null,
            'pvMTYPE' => isset($get['pvMTYPE']) ? $get['pvMTYPE'] : null,
            'pvLOGIN' => $get['pvLOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    /**
     * @Author toailq
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call GET api return array from json, get list device tracking
     */
    public function report_oftabb050bs($get)/* : array */ {
        $rs = $this->_get('rb050/report_oftabb050bs', array(
            'pnFH000' => $get['pnFH000'],
            'pnFH200' => $get['pnFH200'],
            'pdFRDAT' => isset($get['pdFRDAT']) ? $get['pdFRDAT'] : null,
            'pdTODAT' => isset($get['pdTODAT']) ? $get['pdTODAT'] : null,
            'pvSEARC' => isset($get['pvSEARC']) ? $get['pvSEARC'] : null,
            'pnOFFSET' => isset($get['pnOFFSET']) ? $get['pnOFFSET'] : 1,
            'pnLIMIT' => isset($get['pnLIMIT']) ? $get['pnLIMIT'] : 0,
            'pvLOGIN' => $get['pvLOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function lst_oftabb050($pnFH200, $pnFS200, $pvSV202, $pvSV204, $pvBV052, $pnFLAG, $pdUpdateTime, $pnFH000)/* : array */ {
        $rs = $this->_get('b050/lst_oftabb050', array(
            'pnFH200' => $pnFH200,
            'pnFS200' => $pnFS200,
            'pvSV202' => $pvSV202,
            'pvSV204' => $pvSV204,
            'pvBV052' => $pvBV052,
            'pnFLAG' => $pnFLAG,
            'pdUpdateTime' => $pdUpdateTime,
            'pnFH000' => $pnFH000,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    /**
     * @Author toailq
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call GET api return array from json, get list device tracking
     */
    public function lst_oftabb050s($get)/* : array */
    {
        $rs = $this->_get('b050/lst_oftabb050s', array(
            'pnFH000'   => $get['pnFH000'],
            'pnFH200'   => $get['pnFH200'],
            'pnFS200'   => isset($get['pnFS200']) ? $get['pnFS200'] : 0,
            'pdFRDAT'   => isset($get['pdFRDAT']) ? $get['pdFRDAT'] : null,
            'pdTODAT'   => isset($get['pdTODAT']) ? $get['pdTODAT'] : null,
            'pvSEARC'   => isset($get['pvSEARC']) ? $get['pvSEARC'] : null,
            'pnOFFSET'  => isset($ge['pnOFFSET']) ? $get['pnOFFSET'] : 1,
            'pnLIMIT'   => isset($get['pnLIMIT']) ? $get['pnLIMIT'] : 10,
            'pvLOGIN'   => $get['pvLOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function lst_oftabb050ht($get)/* : array */
    {
        $rs = $this->_get('b050/lst_oftabb050ht', array(
            'pnFH000' => APP_MODULE,
            'pnFH200' => isset($get['FH200']) ? $get['FH200'] : 0,
            'pnFS200' => isset($get['FS200']) ? $get['FS200'] : 0,
            'pvBV051' => isset($get['BV051']) ? $get['BV051'] : null,
            'pvBV052' => isset($get['BV052']) ? $get['BV052'] : null,
            'pvBV068' => isset($get['BV068']) ? $get['BV068'] : null,
            'pnFN850' => isset($get['FN850']) ? $get['FN850'] : 0,
            'pnFK100' => isset($get['FK100']) ? $get['FK100'] : 0,
            'pnOFFSET' => isset($get['OFFSET']) ? $get['OFFSET'] : 0,
            'pnLIMIT' => isset($get['LIMIT']) ? $get['LIMIT'] : 0,
            'pnSORT' => isset($get['SORT']) ? $get['SORT'] : 0,
            'pnDIRECTION' => isset($get['DIRECTION']) ? $get['DIRECTION'] : 0,
            'pvLOGIN' => $get['LOGIN'],
            'pnB050TYP' => isset($get['B050TYP']) ? $get['B050TYP'] : 0,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

     /**
     * @Author toailq
     * @Input: array parameter feed to url
     * @Output: json
     * @Description:
     */
    public function lst_oftabb050bs($get)/* : array */
    {
        $rs = $this->_get('b050/lst_oftabb050bs', array(
            'pnFN850'       => $get['pnFN850'],
            'pnFH200'       => $get['pnFH200'],
            'pvBV051'       => isset($get['pvBV051']) ? $get['pvBV051'] : null,
            'pvBV052'       => isset($get['pvBV052']) ? $get['pvBV052'] : null,
            'pvBV060'       => isset($get['pvBV060']) ? $get['pvBV060'] : null,
            'pnFS200'       => isset($get['pnFS200']) ? $get['pnFS200'] : 0,
            'pnOFFSET'      => isset($get['pnOFFSET']) ? $get['pnOFFSET'] : 1,
            'pnLIMIT'       => isset($get['pnLIMIT']) ? $get['pnLIMIT'] : 10,
            'pnSORT'        => isset($get['pnSORT']) ? $get['pnSORT'] : 1,
            'pnDIRECTION'   => isset($get['pnDIRECTION']) ? $get['pnDIRECTION'] : 0,
            'pvLOGIN'       => $get['pvLOGIN'],
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    

    public function gettyp_oftabb050($pnFB050, $pvLOGIN)/* : array */ {
        $rs = $this->_post('b050/gettyp_oftabb050', array(
            'pnFB050' => $pnFB050,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function checkstat_oftabb050($pnFB050, $pvLOGIN)/* : array */ {
        $rs = $this->_post('b050/checkstat_oftabb050', array(
            'pnFB050' => $pnFB050,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function checklimi_oftabb050($pnFB050, $pvLOGIN)/* : array */ {
        $rs = $this->_post('b050/checklimi_oftabb050', array(
            'pnFB050' => $pnFB050,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function get_projectlist($pnFH000, $pnFH200, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/get_projectlist', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function tasks_oftabb050($pnFH000, $pnFH200, $pnFB050, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/tasks_oftabb050', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnFB050' => $pnFB050,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    //---------------faci-------------


    public function create_pmtab050bt($pnFH000, $pnFH200, $pvHV201, $pvSV201, $pvSV251, $pvBV052, $pvNV851, $pvBV001, $pnBN102, $pvBV108, $pnBN112, $pnBN113, $pvBV151, $pnBN152, $pvBV153, $pvBV157, $pnBN158, $pvBV203, $pvVV501, $pvVV502, $pvBV003, $pvLOGIN)/* : array */ {
        $rs = $this->_post('b050/create_pmtab050bt', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pvHV201' => $pvHV201,
            'pvSV201' => $pvSV201,
            'pvSV251' => $pvSV251,
            'pvBV052' => $pvBV052,
            'pvNV851' => $pvNV851,
            'pvBV001' => $pvBV001,
            'pnBN102' => $pnBN102,
            'pvBV108' => $pvBV108,
            'pnBN112' => $pnBN112,
            'pnBN113' => $pnBN113,
            'pvBV151' => $pvBV151,
            'pnBN152' => $pnBN152,
            'pvBV153' => $pvBV153,
            'pvBV157' => $pvBV157,
            'pnBN158' => $pnBN158,
            'pvBV203' => $pvBV203,
            'pvVV501' => $pvVV501,
            'pvVV502' => $pvVV502,
            'pvBV003' => $pvBV003,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function checkex_tabb050($pvMATSA, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/checkex_tabb050', array(
            'pvMATSA' => $pvMATSA,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function insert_tabb050_p7($pnFH150, $pnFH200, $pnFS200, $pnFN850, $pnCOUNT, $pvFC550, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/insert_tabb050_p7', array(
            'pnFH150' => $pnFH150,
            'pnFH200' => $pnFH200,
            'pnFS200' => $pnFS200,
            'pnFN850' => $pnFN850,
            'pnCOUNT' => $pnCOUNT,
            'pvFC550' => $pvFC550,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function insert_tabb050_p17($pnPB050, $pnFS200, $pnFH150, $pnFH200, $pvBV051, $pvBV052, $pdBD053, $pvBV054, $pnBN055, $pnBN056, $pnBN057, $pnBN058, $pnBN059, $pvBV060, $pnBN061, $pnBN062, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/insert_tabb050_p17', array(
            'pnPB050' => $pnPB050,
            'pnFS200' => $pnFS200,
            'pnFH150' => $pnFH150,
            'pnFH200' => $pnFH200,
            'pvBV051' => $pvBV051,
            'pvBV052' => $pvBV052,
            'pdBD053' => $pdBD053,
            'pvBV054' => $pvBV054,
            'pnBN055' => $pnBN055,
            'pnBN056' => $pnBN056,
            'pnBN057' => $pnBN057,
            'pnBN058' => $pnBN058,
            'pnBN059' => $pnBN059,
            'pvBV060' => $pvBV060,
            'pnBN061' => $pnBN061,
            'pnBN062' => $pnBN062,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function insert_tabb050_p18($pnPB050, $pnFS200, $pnFH075, $pnFH150, $pnFH200, $pvBV051, $pvBV052, $pdBD053, $pvBV054, $pnBN055, $pnBN056, $pnBN057, $pnBN058, $pnBN059, $pvBV060, $pnBN061, $pnBN062, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/insert_tabb050_p18', array(
            'pnPB050' => $pnPB050,
            'pnFS200' => $pnFS200,
            'pnFH075' => $pnFH075,
            'pnFH150' => $pnFH150,
            'pnFH200' => $pnFH200,
            'pvBV051' => $pvBV051,
            'pvBV052' => $pvBV052,
            'pdBD053' => $pdBD053,
            'pvBV054' => $pvBV054,
            'pnBN055' => $pnBN055,
            'pnBN056' => $pnBN056,
            'pnBN057' => $pnBN057,
            'pnBN058' => $pnBN058,
            'pnBN059' => $pnBN059,
            'pvBV060' => $pvBV060,
            'pnBN061' => $pnBN061,
            'pnBN062' => $pnBN062,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function insert_tabb050add($pnFH200, $pnFB050, $pnFS200, $pnFN850, $pvFC550, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/insert_tabb050add', array(
            'pnFH200' => $pnFH200,
            'pnFB050' => $pnFB050,
            'pnFS200' => $pnFS200,
            'pnFN850' => $pnFN850,
            'pvFC550' => $pvFC550,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function insert_tabb050bt_p10($pnFB050, $pnFH000, $pnFH200, $pnFH150, $pnFS200, $pnFS250, $pnFN850, $pvHV451, $pvBV052, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/insert_tabb050bt_p10', array(
            'pnFB050' => $pnFB050,
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnFH150' => $pnFH150,
            'pnFS200' => $pnFS200,
            'pnFS250' => $pnFS250,
            'pnFN850' => $pnFN850,
            'pvHV451' => $pvHV451,
            'pvBV052' => $pvBV052,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function insert_tabb050bt_p19($pnPB050, $pnFS200, $pnFH075, $pnFH150, $pnFH200, $pvBV051, $pvBV052, $pdBD053, $pvBV054, $pnBN055, $pnBN056, $pnBN057, $pnBN058, $pnBN059, $pvBV060, $pnBN061, $pnBN062, $pvBV068, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/insert_tabb050bt_p19', array(
            'pnPB050' => $pnPB050,
            'pnFS200' => $pnFS200,
            'pnFH075' => $pnFH075,
            'pnFH150' => $pnFH150,
            'pnFH200' => $pnFH200,
            'pvBV051' => $pvBV051,
            'pvBV052' => $pvBV052,
            'pdBD053' => $pdBD053,
            'pvBV054' => $pvBV054,
            'pnBN055' => $pnBN055,
            'pnBN056' => $pnBN056,
            'pnBN057' => $pnBN057,
            'pnBN058' => $pnBN058,
            'pnBN059' => $pnBN059,
            'pvBV060' => $pvBV060,
            'pnBN061' => $pnBN061,
            'pnBN062' => $pnBN062,
            'pvBV068' => $pvBV068,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function update_tabb050ht($pnFH000, $pnFH200, $pvBV052, $pvBV051, $pvBV054, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/update_tabb050ht', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pvBV052' => $pvBV052,
            'pvBV051' => $pvBV051,
            'pvBV054' => $pvBV054,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function update_tabb050bs($pnFB050, $pvBV051, $pvBV052, $pvBV054, $pvBV060, $pnBN062, $pnBN061, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/update_tabb050bs', array(
            'pnFB050' => $pnFB050,
            'pvBV051' => $pvBV051,
            'pvBV052' => $pvBV052,
            'pvBV054' => $pvBV054,
            'pvBV060' => $pvBV060,
            'pnBN062' => $pnBN062,
            'pnBN061' => $pnBN061,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function update_stattabb050($pnPB050, $pvBV066, $pvLOGIN)/* : array */ {
        $rs = $this->_post('b050/update_stattabb050', array(
            'pnPB050' => $pnPB050,
            'pvBV066' => $pvBV066,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function update_tabb050_p8($pnPB050, $pnBN055, $pnBN056, $pnBN057, $pnBN058, $pnBN059, $pvBV060, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/update_tabb050_p8', array(
            'pnPB050' => $pnPB050,
            'pnBN055' => $pnBN055,
            'pnBN056' => $pnBN056,
            'pnBN057' => $pnBN057,
            'pnBN058' => $pnBN058,
            'pnBN059' => $pnBN059,
            'pvBV060' => $pvBV060,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function update_tabb050_p4($pnPB050, $pvBV061, $pvBV062, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/update_tabb050_p4', array(
            'pnPB050' => $pnPB050,
            'pvBV061' => $pvBV061,
            'pvBV062' => $pvBV062,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function insert_tabb050t($pnPB050, $pvBV051, $pnBN064, $pnBN065, $pvBV066, $pdBD067, $pvBV068, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/insert_tabb050t', array(
            'pnPB050' => $pnPB050,
            'pvBV051' => $pvBV051,
            'pnBN064' => $pnBN064,
            'pnBN065' => $pnBN065,
            'pvBV066' => $pvBV066,
            'pdBD067' => $pdBD067,
            'pvBV068' => $pvBV068,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function update_tabb050_p6($pnPB050, $pnFH000, $pnFH200, $pnFN850, $pvFQ101, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/update_tabb050_p6', array(
            'pnPB050' => $pnPB050,
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnFN850' => $pnFN850,
            'pvFQ101' => $pvFQ101,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function update_tabb050ll($pnFB050, $pvBV052, $pvBV051, $pvBV060, $pnBN061, $pnBN062, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/update_tabb050ll', array(
            'pnFB050' => $pnFB050,
            'pvBV052' => $pvBV052,
            'pvBV051' => $pvBV051,
            'pvBV060' => $pvBV060,
            'pnBN061' => $pnBN061,
            'pnBN062' => $pnBN062,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function storno_tabb050($pnPB050, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/storno_tabb050', array(
            'pnPB050' => $pnPB050,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function reacti_tabb050_p3($pnPB050, $pnFH200, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/reacti_tabb050_p3', array(
            'pnPB050' => $pnPB050,
            'pnFH200' => $pnFH200,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function insert_tabb050pmpos($pnFH000, $pnFH200, $pnFN850, $pnFS200, $pnFH150, $pvFC550, $pnCOUNT, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/insert_tabb050pmpos', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnFN850' => $pnFN850,
            'pnFS200' => $pnFS200,
            'pnFH150' => $pnFH150,
            'pvFC550' => $pvFC550,
            'pnCOUNT' => $pnCOUNT,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

    public function insert_tabBb50btpos($pnFH000, $pnFH200, $pnFN850, $pnFS200, $pnFH150, $pnCOUNT, $pvLOGIN)/* : array */
    {
        $rs = $this->_post('b050/insert_tabBb50btpos', array(
            'pnFH000' => $pnFH000,
            'pnFH200' => $pnFH200,
            'pnFN850' => $pnFN850,
            'pnFS200' => $pnFS200,
            'pnFH150' => $pnFH150,
            'pnCOUNT' => $pnCOUNT,
            'pvLOGIN' => $pvLOGIN,
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

}

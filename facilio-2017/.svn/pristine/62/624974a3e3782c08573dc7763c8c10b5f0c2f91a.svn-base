<?php

/**
 * @author: Toailq - 12/12/2017
 * @model: c150_model
 */
if (!defined('BASEPATH')) {
    exit('No direct script access allowed');
}

require_once(APPPATH . 'models/Api_model.php');

class C150_model extends Api_model {

    public function __construct() {
        parent::__construct();
    }
    
     /**
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call POST api return json, add file
     */
    public function insert_tabm650c($post)/* : int */ {
        $rs = $this->_post('m650/insert_tabm650c', array(
            'pnPM650' => isset($post['pnPM650']) ? $post['pnPM650'] : 0,
            'pnFH000' => $post['pnFH000'],
            'pnFH200' => $post['pnFH200'],
            'pnFB050' => isset($post['pnFB050']) ? $post['pnFB050'] : 0,
            'pnFH150' => isset($post['pnFH150']) ? $post['pnFH150'] : 0,
            'pvFC150' => isset($post['pvFC150']) ? $post['pvFC150'] : null,
            'pnFC300' => isset($post['pnFC300']) ? $post['pnFC300'] : 0,
            'pvMV651' => isset($post['pvMV651']) ? $post['pvMV651'] : null,
            'pvMV652' => isset($post['pvMV652']) ? $post['pvMV652'] : null,
            'pvMV653' => isset($post['pvMV653']) ? $post['pvMV653'] : null,
            'pnMN654' => isset($post['pnMN654']) ? $post['pnMN654'] : 0,
            'pvMV655' => isset($post['pvMV655']) ? $post['pvMV655'] : null,
            'pvMV656' => isset($post['pvMV656']) ? $post['pvMV656'] : null,
            'pnMN657' => isset($post['pnMN657']) ? $post['pnMN657'] : 0,
            'pnMN658' => isset($post['pnMN658']) ? $post['pnMN658'] : 0,
            'pvMV659' => isset($post['pvMV659']) ? $post['pvMV659'] : null,
            'pvMV660' => isset($post['pvMV660']) ? $post['pvMV660'] : null,
            'pnFF000' => isset($post['pnFF000']) ? $post['pnFF000'] : 0
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return 0;
    }
    /**
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call POST api return json, delete file
     */
    public function storno_tabm650($post)/* : int */ {
        $rs = $this->_post('m650/storno_tabm650', array(
            'pnPM650' => isset($post['pnPM650']) ? $post['pnPM650'] : 0,
            'pvLOGIN' => $post['pvLOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return 0;
    }
    /**
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call GET api return array from json, get list file
     */
    public function lst_oftabm650_p11($get)/* : array */ {
        $rs = $this->_get('m650/lst_oftabm650_p11', array(
            'pnFH000' => $get['pnFH000'],
            'pnFB050' => isset($get['pnFB050']) ? $get['pnFB050'] : 0,
            'pvFC150' => isset($get['pvFC150']) ? $get['pvFC150'] : null,
            'pnFC300' => isset($get['pnFC300']) ? $get['pnFC300'] : 0,
            'pnFF000' => isset($get['pnFF000']) ? $get['pnFF000'] : 0,
            'pnMN654' => isset($get['pnMN654']) ? $get['pnMN654'] : 0,
            'pvMV656' => isset($get['pvMV656']) ? $get['pvMV656'] : null,
            'pnMN657' => isset($get['pnMN657']) ? $get['pnMN657'] : 0,
            'pnMN658' => isset($get['pnMN658']) ? $get['pnMN658'] : 0,
            'pvLOGIN' => $get['pvLOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    /**
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call POST api return json, update expected time
     */
    public function update_coloftable($post)/* : int */ {
        $rs = $this->_post('update_col/update_coloftable', array(
            'pvSCHEMA' => isset($post['pvSCHEMA']) ? $post['pvSCHEMA'] : null,
            'pvTABNAME' => isset($post['pvTABNAME']) ? $post['pvTABNAME'] : null,
            'pvCOLNAME' => isset($post['pvCOLNAME']) ? $post['pvCOLNAME'] : 0,
            'pnVALUE' => isset($post['pnVALUE']) ? $post['pnVALUE'] : null,
            'pvPRIMARYKEY' => isset($post['pvPRIMARYKEY']) ? $post['pvPRIMARYKEY'] : null,
            'pvCONDITION' => isset($post['pvCONDITION']) ? $post['pvCONDITION'] : null,
            'pvLOGIN' => $post['pvLOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return 0;
    }
    /**
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call POST api return json, delete report
     */
    public function storno_tabc300($post)/* : int */ {
        $rs = $this->_post('c300/storno_tabc300', array(
            'pnFC600' => isset($post['pnFC600']) ? $post['pnFC600'] : null,
            'pnPC300' => isset($post['pnPC300']) ? $post['pnPC300'] : 0,
            'pvCV314' => isset($post['pvCV314']) ? $post['pvCV314'] : null,
            'pvLOGIN' => $post['pvLOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return 0;
    }
    /**
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call POST api return json, delete ballot maintenance repair
     */
    public function storno_tabc150_p3($post)/* : int */ {
        $rs = $this->_post('c150/storno_tabc150_p3', array(
            'pnFC150' => isset($post['pnFC150']) ? $post['pnFC150'] : null,
            'pvCV167' => isset($post['pvCV167']) ? $post['pvCV167'] : null,
            'pvLOGIN' => $post['pvLOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return 0;
    }
    /**
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: not working
     */
    public function lst_oftabv650ebs($get)/* : array */ {
        $rs = $this->_get('v650/lstoftabv650ebs', array(
            'pnFV750' => isset($get['pnFV750']) ? $get['pnFV750'] : 0,
            'pvFC150' => isset($get['pvFC150']) ? $get['pvFC150'] : null,
            'pvLOGIN' => $get['pvLOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    /**
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call POST api return json, dismiss work
     */
    public function storno_tabc650($post)/* : int */ {
        $rs = $this->_post('c650/storno_tabc650', array(
            'pnFH000' => $post['pnFH000'],
            'pnFH200' => $post['pnFH200'],
            'pnFN100' => $post['pnFN100'],
            'pnFC150' => isset($post['pnFC150']) ? $post['pnFC150'] : null,
            'pvLOGIN' => $post['pvLOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return 0;
    }
    /**
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call POST api return json, job assignment
     */
    public function insert_tabc650($post)/* : int */ {
        $rs = $this->_post('c650/insert_tabc650', array(
            'pnFH000' => $post['pnFH000'],
            'pnFH200' => $post['pnFH200'],
            'pnFB050' => isset($post['pnFB050']) ? $post['pnFB050'] : 0,
            'pnFN100' => $post['pnFN100'],
            'pvFC150' => isset($post['pvFC150']) ? $post['pvFC150'] : null,
            'pnFC500' => isset($post['pnFC500']) ? $post['pnFC500'] : 0,
            'pdCD651' => isset($post['pdCD651']) ? $post['pdCD651'] : null,
            'pnCN652' => isset($post['pnCN652']) ? $post['pnCN652'] : 1,
            'pnCN653' => isset($post['pnCN653']) ? $post['pnCN653'] : 0,
            'pvLOGIN' => $post['pvLOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return 0;
    }
    /**
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call GET api return array from json, load list the person assigned the job
     */
    public function list_oftabc650r_pv($get)/* : array */ {
        $rs = $this->_get('c650/list_oftabc650r_pv', array(
            'pnFH000' => $get['pnFH000'],
            'pvFC150' => isset($get['pvFC150']) ? $get['pvFC150'] : null,
            'pnFN100' => $get['pnFN100'],
            'pvLOGIN' => $get['pvLOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    /**
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call GET api return array from json, load list job assigner
     */
    public function list_oftabc650l_p10($get)/* : array */ {
        $rs = $this->_get('c650/list_oftabc650l_p10', array(
            'pnFH000' => $get['pnFH000'],
            'pnFH200' => $get['pnFH200'],
            'pnFS200' => isset($get['pnFS200']) ? $get['pnFS200'] : 0,
            'pnFS250' => isset($get['pnFS250']) ? $get['pnFS250'] : 0,
            'pnNN104' => isset($get['pnNN104']) ? $get['pnNN104'] : 0,
            'pnNN105' => isset($get['pnNN105']) ? $get['pnNN105'] : 0,
            'pvFC550' => isset($get['pvFC550']) ? $get['pvFC550'] : null,
            'pvFC150' => isset($get['pvFC150']) ? $get['pvFC150'] : null,
            'pdCD153' => isset($get['pdCD153']) ? $get['pdCD153'] : null,
            'pnFN850' => $get['pnFN850']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    /**
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call POST api return json, insert ballot maintenance repair
     */
    public function insert_tabc150($post)/* : int */ {
        $rs = $this->_post('c150/insert_tabc150', array(
            'pvPC150OUT' => isset($post['pvPC150OUT']) ? $post['pvPC150OUT'] : null,
            'pvPC150' => isset($post['pvPC150']) ? $post['pvPC150'] : null,
            'pnFH000' => $post['pnFH000'],
            'pnFH200L' => $post['pnFH200L'],
            'pnFH200S' => $post['pnFH200S'],
            'pnFH150' => isset($post['pnFH150']) ? $post['pnFH150'] : 0,
            'pnFS200' => isset($post['pnFS200']) ? $post['pnFS200'] : 0,
            'pnFC400' => isset($post['pnFC400']) ? $post['pnFC400'] : 0,
            'pnFC450' => isset($post['pnFC450']) ? $post['pnFC450'] : 0,
            'pnFC550' => isset($post['pnFC550']) ? $post['pnFC550'] : null,
            'pnFC500' => isset($post['pnFC500']) ? $post['pnFC500'] : 0,
            'pnFN600' => isset($post['pnFN600']) ? $post['pnFN600'] : 0,
            'pvCV151' => isset($post['pvCV151']) ? $post['pvCV151'] : null,
            'pdCD152' => isset($post['pdCD152']) ? $post['pdCD152'] : null,
            'pdCD153' => isset($post['pdCD153']) ? $post['pdCD153'] : null,
            'pvCV154' => isset($post['pvCV154']) ? $post['pvCV154'] : null,
            'pdCD155' => isset($post['pdCD155']) ? $post['pdCD155'] : null,
            'pdCD156' => isset($post['pdCD156']) ? $post['pdCD156'] : null,
            'pvCV157' => isset($post['pvCV157']) ? $post['pvCV157'] : null,
            'pvCV158' => isset($post['pvCV158']) ? $post['pvCV158'] : null,
            'pdCD159' => isset($post['pdCD159']) ? $post['pdCD159'] : null,
            'pdCD160' => isset($post['pdCD160']) ? $post['pdCD160'] : null,
            'pvCV161' => isset($post['pvCV161']) ? $post['pvCV161'] : null,
            'pvCV162' => isset($post['pvCV162']) ? $post['pvCV162'] : null,
            'pvCV163' => isset($post['pvCV163']) ? $post['pvCV163'] : null,
            'pvCV164' => isset($post['pvCV164']) ? $post['pvCV164'] : null,
            'pvCV165' => isset($post['pvCV165']) ? $post['pvCV165'] : null,
            'pvCV166' => isset($post['pvCV166']) ? $post['pvCV166'] : null,
            'pnCN168' => isset($post['pnCN168']) ? $post['pnCN168'] : 0,
            'pnCN169' => isset($post['pnCN169']) ? $post['pnCN169'] : 0,
            'pnCN170' => isset($post['pnCN170']) ? $post['pnCN170'] : 0,
            'pnCN171' => isset($post['pnCN171']) ? $post['pnCN171'] : 0,
            'pnCN172' => isset($post['pnCN172']) ? $post['pnCN172'] : null,
            'plCB173' => isset($post['plCB173']) ? $post['plCB173'] : null,
            'pnFC000' => isset($post['pnFC000']) ? $post['pnFC000'] : 0,
            'pvLOGIN' => $post['pvLOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return 0;
    }
    /**
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call GET api return array from json, load list report
     */
    public function list_oftabc300c_p5($get)/* : array */ {
        $rs = $this->_get('c300/list_oftabc300c_p5', array(
            'pvLOGIN' => $get['pvLOGIN'],
            'pnFC600' => isset($get['pnFC600']) ? $get['pnFC600'] : null,
            'pnFIRSTROW' => isset($get['pnFIRSTROW']) ? $get['pnFIRSTROW'] : 1,
            'pnROWCOUNT' => isset($get['pnROWCOUNT']) ? $get['pnROWCOUNT'] : 10,
            'pnSORT' => isset($get['pnSORT']) ? $get['pnSORT'] : 1
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    /**
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call POST api return json, insert report return number
     */
    public function insert_tabc300($post)/* : int */ {
        $rs = $this->_post('c300/insert_tabc300', array(
            'pvFC600' => isset($post['pvFC600']) ? $post['pvFC600'] : null,
            'pnPC300' => isset($post['pnPC300']) ? $post['pnPC300'] : 0,
            'pnFC500' => isset($post['pnFC500']) ? $post['pnFC500'] : 10,
            'pnFN100' => $post['pnFN100'],
            'pnFN550' => isset($post['pnFN550']) ? $post['pnFN550'] : 0,
            'pdCD301' => isset($post['pdCD301']) ? $post['pdCD301'] : null,
            'pdCD302' => isset($post['pdCD302']) ? $post['pdCD302'] : null,
            'pdCD303' => isset($post['pdCD303']) ? $post['pdCD303'] : null,
            'pvCV304' => isset($post['pvCV304']) ? $post['pvCV304'] : null,
            'pvCV305' => isset($post['pvCV305']) ? $post['pvCV305'] : null,
            'pvCV306' => isset($post['pvCV306']) ? $post['pvCV306'] : null,
            'pnCN307' => isset($post['pnCN307']) ? $post['pnCN307'] : 0,
            'pvCV308' => isset($post['pvCV308']) ? $post['pvCV308'] : 'A',
            'pnCN309' => isset($post['pnCN309']) ? $post['pnCN309'] : 0,
            'pnCN310' => isset($post['pnCN310']) ? $post['pnCN310'] : 1,
            'pvCV311' => isset($post['pvCV311']) ? $post['pvCV311'] : null,
            'pvCV312' => isset($post['pvCV312']) ? $post['pvCV312'] : null,
            'pvCV313' => isset($post['pvCV313']) ? $post['pvCV313'] : null,
            'pvCV314' => isset($post['pvCV314']) ? $post['pvCV314'] : null,
            'pnCN315' => isset($post['pnCN315']) ? $post['pnCN315'] : 0,
            'pnCN316' => isset($post['pnCN316']) ? $post['pnCN316'] : 0,
            'plCB317' => isset($post['plCB317']) ? $post['plCB317'] : null,
            'pnFC200' => isset($post['pnFC200']) ? $post['pnFC200'] : 0,
            'pvLOGIN' => $post['pvLOGIN'],
            'pnFH000' => $post['pnFH000']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return 0;
    }
    /**
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call GET api return array from json for list maintenance of large repair
     */
    public function list_oftabc150per($get)/* : array */ {
        $rs = $this->_get('c150/list_oftabc150per', array(
            'pnFH000' => $get['pnFH000'],
            'pnFH200' => $get['pnFH200'],
            'pnFC500' => isset($get['pnFC500']) ? $get['pnFC500'] : 0,
            'pnOFFSET' => isset($get['pnOFFSET']) ? $get['pnOFFSET'] : 1,
            'pnLIMIT' => isset($get['pnLIMIT']) ? $get['pnLIMIT'] : 10,
            'pnSORT' => isset($get['pnSORT']) ? $get['pnSORT'] : 1,
            'pnDIRECTION' => isset($get['pnDIRECTION']) ? $get['pnDIRECTION'] : 0,
            'pvLOGIN' => $get['pvLOGIN']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }
    /**
     * @Input: array parameter feed to url
     * @Output: json
     * @Description: call GET api return array from json for list ballot maintenance repair
     */
    public function list_oftabc150c($get)/* : array */ {
        $rs = $this->_get('c150/list_oftabc150c', array(
            'pvLOGIN' => $get['pvLOGIN'],
            'pnFH000' => $get['pnFH000'],
            'pnFH200' => $get['pnFH200'],
            'pnFH150' => isset($get['pnFH150']) ? $get['pnFH150'] : 0,
            'pnFC450' => isset($get['pnFC450']) ? $get['pnFC450'] : 0,
            'pnFC500' => isset($get['pnFC500']) ? $get['pnFC500'] : 0,
            'pvFC550' => isset($get['pvFC550']) ? $get['pvFC550'] : null,
            'pnSUPER' => isset($get['pnSUPER']) ? $get['pnSUPER'] : 0,
            'pnOFFSET' => isset($get['pnOFFSET']) ? $get['pnOFFSET'] : 1,
            'pnLIMIT' => isset($get['pnLIMIT']) ? $get['pnLIMIT'] : 10,
            'pnSORT' => isset($get['pnSORT']) ? $get['pnSORT'] : 1,
            'pnDIRECTION' => isset($get['pnDIRECTION']) ? $get['pnDIRECTION'] : 0,
            'pvCV154' => isset($get['pvCV154']) ? $get['pvCV154'] : null,
            'pdCD153' => isset($get['pdCD153']) ? $get['pdCD153'] : null,
            'pnPB050' => isset($get['pnPB050']) ? $get['pnPB050'] : 0,
            'pnREPART' => isset($get['pnREPART']) ? $get['pnREPART'] : 0,
            'pvUSER' => isset($get['pvUSER']) ? $get['pvUSER'] : 'ALL',
            'pvSTATUS' => $get['pvSTATUS'],
            'pnFN850' => $get['pnFN850']
        ));
        if ($rs['status'] === 'success' && $rs['elements']) {
            return $rs['elements'];
        }
        return [];
    }

}

<?php

/**
 * @author: Linhnc - 27/3/2017
 * @controller: M650
 * @standard:
 *  > module: module name, controller file name, class name :uppercase first letter
 *  > class: split to 2|[3] block: public && [protected] && private
 *  > function
 *     - private function functionName -> return required!
 *     - public function function_name
 *     - [protected] function _functionName
 *  > variable:
 *     - local: variableName
 *     - field -> follow db style
 */
defined('BASEPATH') OR exit('No direct script access allowed');
require_once (APPPATH . "controllers/Facilio.php");

class M650 extends Facilio {

  public function __construct() {
    parent::__construct();
    $this->lang->load('facilio', getCountryFromIP());
  }

  /*   * **************************************************************** */
  /*   * *****************************[PUBLIC]*************************** */
  /*   * **************************************************************** */

  public function index() {
    
  }

  /**
   * @Input: pnPM650, pnFH200, pnFB050, pnFH150, pvFC150, pnFC300, pvMV651, pvMV652, pvMV653, pnMN654, pvMV655, pvMV656, pnMN657, pnMN658, pvMV659, pvMV660, pnFF000 
   * @Output: 1: thanh cong
   * @Diescription: luu file
   */
  public function insert_m650c() {
    $res = array('status' => 'error', 'message' => lang('_file_not_found'));
    $post = filter_input_array(INPUT_POST);
    if (isset($_FILES['files']) && $_FILES['files']['name'] != '') {
      $field_name = 'files';
      $file_name = $_FILES['files']['name'];
      $path = 'media/pm/' . $this->_fuser['PH200'] . '/' . $this->_fuser['PN100'];

      // 1: Document, 2: Image, 3: Video
      switch ($post['pnMN654']) {
        case 1:
          $path = $path . '/documents/';
          $config['allowed_types'] = 'doc|docx|xls|xlsx|txt|pdf|rar|zip';
          break;
        case 2:
          $path = $path . '/images/';
          $config['allowed_types'] = 'jpg|jpeg|png';
          break;
        case 3:
          $path = $path . '/films/';
          $config['allowed_types'] = 'm4v|avi|mpg|mp4';
          break;
        default:
          exit('File type not allowed');
      }

      if (!is_dir($path)) {
        mkdir($path, 0777, true);
      }

      // Config file upload
      $config['upload_path'] = $path;
      $config['max_size'] = 2048;
      $config['overwrite'] = true;

      // Load upload library
      $this->load->library('upload');
      $this->upload->initialize($config);

      if (!$this->upload->do_upload($field_name)) {
        $res['message'] = lang('_can_not_upload') . " " . $file_name;
        $error = $this->upload->display_errors(); // error upload
        $res['error'] = json_encode($error);
      } else {
        // Upload success
        $post['pvMV652'] = $file_name;
        $post['pvMV653'] = $this->getMd5FileName($file_name); // md5 file name
        $post['pnFF000'] = $this->getF000(substr(strstr($file_name, "."), 1));
        if ($this->insertTabM650C($post) > 0) {
          $res['status'] = 'success';
          $res['message'] = lang('_success_upload') . " " . $file_name;
        }
      }
    }
    echo json_encode($res);
  }

  /**
   * @Input: pnFB050, pvFC150, pnMN654
   * @Output: array
   * @Diescription: ds file
   */
  public function list_m650() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_error_empty'));
    $result = $this->listOfTabM650_p11($post);
    if (count($result) > 0) {
      $res['status'] = 'success';
      $res['message'] = lang('_load_list_success');
      $res['data'] = $result;
    }
    echo json_encode($res);
  }

  /**
   * @Input: pnPM650
   * @Output: 1: thanh cong
   * @Diescription: xoa file
   */
  public function storno_m650() {
    $post = filter_input_array(INPUT_POST);
    $res = array('status' => 'error', 'message' => lang('_delete_failed'));
    $path = 'media/pm/' . $this->_fuser['PH200'] . '/' . $this->_fuser['PN100'];
    switch ($post['pnMN654']) {
      case 1: // 1: Document
        $path = $path . '/documents/' . $post['pvMV652'];
        break;
      case 2: // 2: Image
        $path = $path . '/images/' . $post['pvMV652'];
        break;
      case 3: // 3: Video
        $path = $path . '/films/' . $post['pvMV652'];
        break;
      default:
        exit('File type not allowed');
    }

    if ($this->stornoTabM650($post) > 0) {
      if (file_exists($path)) {
        unlink($path);
      }
      $res['status'] = 'success';
      $res['message'] = lang('_delete_success');
    }
    echo json_encode($res);
  }

  /**
   * @Input: string dang ['file.png','file1.jpg']
   * @Output: 
   * @Diescription: tai file
   */
  public function download() {
    // request gui len dang ["filename",..]
    $rgx = "/^[\[].*[\]]$/"; // array name file chi co dang ['','']
    $rgxType = "/[1-3]/"; // type file only 1,2,3
    $files = $this->input->get('filename');
    $type = $this->input->get('type');
    $this->load->helper('download');
    // if rgx true
    if (isset($files) && preg_match($rgx, $files, $outString) && isset($type) && preg_match($rgxType, $type, $outNumber)) {
      $files = substr($files, 0, -1); // cut [
      $files = substr($files, 1); // cut ]
      $files = explode(",", $files); // convert string to array
      $path = 'media/pm/' . $this->_fuser['PH200'] . '/' . $this->_fuser['PN100'];

      // folder upload by file type
      switch ($type) {
        case 1:
          $path = $path . '/documents/';
          break;
        case 2:
          $path = $path . '/images/';
          break;
        case 3:
          $path = $path . '/films/';
          break;
        default:
          exit('File type not allowed');
      }

      // if array
      if (is_array($files) && count($files) > 0) {
        if (count($files) > 1) {
          $this->load->library('zip');
          foreach ($files as $file) {
            $this->zip->read_file($path . $file);
          }
          $this->zip->download('file.zip');
        } else {
          $files = implode("", $files);
          $data = file_get_contents($path . $files);
          force_download($files, $data);
        }
      } else {
        exit("URL not found");
      }
    } else {
      exit("URL not found");
    }
  }

  /**
   * @Input: string dang png
   * @Output: png
   * @Diescription: get type file from db by jpg....
   */
  public function getF000($type) {
    $PF000 = null;
    $arrF000 = $this->listOfTabF000();
    foreach ($arrF000 as $value) {
      if ($type == $value['FV001']) {
        $PF000 = $value['PF000'];
        break;
      }
    }
    return $PF000;
  }

  /**
   * @Input: name file
   * @Output: name file md5
   * @Diescription: md5 name file
   */
  public function getMd5FileName($fileName) {
    $ext = strstr($fileName, ".");
    return md5(substr($fileName, 0, strlen($fileName) - strlen($ext))) . $ext;
  }

  /*   * **************************************************************** */
  /*   * ****************************[PRIVATE]*************************** */
  /*   * **************************************************************** */

  private function insertTabM650C($post) {
    $pnPM650 = isset($post['pnPM650']) ? $post['pnPM650'] : 0; // default 0
    $pnFH200 = isset($post['pnFH200']) ? $post['pnFH200'] : 0;
    $pnFB050 = isset($post['pnFB050']) ? $post['pnFB050'] : 0;
    $pnFH150 = isset($post['pnFH150']) ? $post['pnFH150'] : 0;
    $pvFC150 = isset($post['pvFC150']) ? $post['pvFC150'] : null;
    $pnFC300 = isset($post['pnFC300']) ? $post['pnFC300'] : 0;
    $pvMV651 = isset($post['pvMV651']) ? $post['pvMV651'] : "";
    $pvMV652 = isset($post['pvMV652']) ? $post['pvMV652'] : null; // file name
    $pvMV653 = isset($post['pvMV653']) ? $post['pvMV653'] : null; // file name md5
    $pnMN654 = isset($post['pnMN654']) ? $post['pnMN654'] : 0; //type file 1,2,3; 1 = (doc|docx|xls|xlsx|txt|pdf|rar|zip); 2 = (jpg|jpeg|png|gif|bmp); 3 = other
    $pvMV655 = isset($post['pvMV655']) ? $post['pvMV655'] : "";
    $pvMV656 = isset($post['pvMV656']) ? $post['pvMV656'] : null; // table name
    $pnMN657 = isset($post['pnMN657']) ? $post['pnMN657'] : $this->_fuser['PH200'];
    $pnMN658 = isset($post['pnMN658']) ? $post['pnMN658'] : 0;
    $pvMV659 = isset($post['pvMV659']) ? $post['pvMV659'] : null;
    $pvMV660 = isset($post['pvMV660']) ? $post['pvMV660'] : "";
    $pnFF000 = isset($post['pnFF000']) ? $post['pnFF000'] : null;
    $this->load->model('M650_model', 'M650_MODEL');
    //return $pnPM650.",".APP_MODULE.",".$this->_FH200S.",".$pnFB050.",".$pnFH150.",".$pvFC150.",".$pnFC300.",".$pvMV651.",".$pvMV652.",".$pvMV653.",".$pnMN654.",".$pvMV655.",".$pvMV656.",".$pnMN657.",".$pnMN658.",".$pvMV659.",".$pvMV660.",".$pnFF000.",".$this->_fuser['QV101'];
    return $this->M650_MODEL->insert_tabm650c($pnPM650, APP_MODULE, $pnFH200, $pnFB050, $pnFH150, $pvFC150, $pnFC300, $pvMV651, $pvMV652, $pvMV653, $pnMN654, $pvMV655, $pvMV656, $pnMN657, $pnMN658, $pvMV659, $pvMV660, $pnFF000, $this->_fuser['QV101']);
  }

  private function listOfTabF000() {
    $this->load->model('F000_model', 'F000_MODEL');
    return $this->F000_MODEL->list_oftabf000();
  }

  private function listOfTabM650_p11($post) {
    $pnFB050 = isset($post['pnFB050']) ? $post['pnFB050'] : 0;
    $pvFC150 = isset($post['pvFC150']) ? $post['pvFC150'] : null;
    $pnFC300 = isset($post['pnFC300']) ? $post['pnFC300'] : 0;
    $pnFF000 = isset($post['pnFF000']) ? $post['pnFF000'] : 0;
    $pnMN654 = isset($post['pnMN654']) ? $post['pnMN654'] : 0;
    $pvMV656 = isset($post['pvMV656']) ? $post['pvMV656'] : 'B200';
    $pnMN657 = isset($post['pnMN657']) ? $post['pnMN657'] : 0;
    $pnMN658 = isset($post['pnMN658']) ? $post['pnMN658'] : 0;
    $this->load->model('M650_model', 'M650_MODEL');
    return $this->M650_MODEL->list_of_tabm650_p11(APP_MODULE, $this->_FH200S, $pnFB050, $pvFC150, $pnFC300, $pnFF000, $pnMN654, $pvMV656, $pnMN657, $pnMN658, $this->_fuser['QV101']);
  }

  private function stornoTabM650($post) {
    $pnPM650 = isset($post['pnPM650']) ? $post['pnPM650'] : 0;
    $this->load->model('M650_model', 'M650_MODEL');
    return $this->M650_MODEL->storno_tabm650($pnPM650, $this->_fuser['QV101']);
  }

}

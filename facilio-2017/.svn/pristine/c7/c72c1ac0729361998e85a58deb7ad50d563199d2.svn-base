<?php

/**
 * @author: Anph - 07/12/2017
 * @model: Call_api
 * @standard: function name follow api function name
 */
if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Api_model extends CI_Model {

    public function __construct() {
        parent::__construct();
    }

    /**
     * @param url: api function url
     * @param data: array parameter feed to url
     * @Output: json
     * @Descrition: call GET api return array from json
     */
    function _get($path, $data)/* : array */ {
        try {
            $queryString = $data != null ? '?' . http_build_query($data) : '';
            $response = file_get_contents(_API_HOST . $path . $queryString);
            $result = json_decode($response, true);
//            if($result['status']==='error')
//                _log();
            return $result;
        } catch (Exception $e) {
            $e->getLine();
        }
    }

    /**
     * @param url: api function url
     * @param data: array parameter feed to url
     * @Output: json
     * @Descrition: call POST api return array from json
     */
    function _post($path, $data)/* : array */ {
        try {
            $data = json_encode($data);
            $header = array(
                "Content-Type: application/json",
                "Content-length: " . strlen($data),
                "Content-transfer-encoding: text",
                "Connection: close"
            );

            $ch = curl_init();
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
            curl_setopt($ch, CURLOPT_URL, _API_HOST . $path);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
            curl_setopt($ch, CURLOPT_TIMEOUT, 600); //unit second
            curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
            curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

            $result = curl_exec($ch);
            if ($result === FALSE)
                die(curl_error($ch));
            else {
                $result = json_decode($result, true);
//            if($result['status']==='error')
//                _log();
                return $result;
            }
        } catch (Exception $e) {
            $e->getLine();
        }
    }

    function cleanData($val, $isNullQuery = TRUE) {
        if (empty($val))
            return $isNullQuery ? 'null' : "''";
        else
            return str_replace("\\\\", "\\\\\\\\", json_encode($val, JSON_UNESCAPED_UNICODE));
    }

}

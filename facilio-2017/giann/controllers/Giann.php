<?php

defined('BASEPATH') OR exit('No direct script access allowed');
require_once(APPPATH . 'controllers/WEBINARIS.php');

class Giann extends WEBINARIS
{

    function __construct()
    {
        // Call the Model constructor
        $this->auto_loaddb = false;
        parent::__construct();
    }

    public function index()
    {
        // $arr = array(
        //     'server01.webinaris.com'
        // , 'server02.webinaris.com'
        // , 'predefined.webinaris.com'
        // , 'predefined.webinaris.com'
        // );
        // for ($i = 0; $i < 1000; $i++) {
        //     echo $arr[rand(0, count($arr) - 1)] . '<br>';
        // }
        // die;
        //
//        phpinfo();die;

//       $this->load->library('memcached_library');
//       $this->memcached_library->flush();
//       echo 'ook flush';

//        $results = $this->memcached_library->get('giann@queenb.vn');
//        $results = $this->_loadConfigDBviaQV101('rvm@webinaris.com');

//        $results = $this->_loadConfigDBviaPK100WithPartnerId(9703, '', true, 'KDJEMDE1');
//        var_dump($results); echo '<br /><br />';
//        $results = $this->_loadConfigDBviaPK100WithPartnerId(9703, '', true, 'KDJEMD1');
//        var_dump($results); echo '<br /><br />';
//        $results = $this->_loadConfigDBviaPK100WithPartnerId(9703, '', true, 'AAAAAAAAA');
//        var_dump($results); echo '<br /><br />';
        die('XXXXX');
//        
//        $this->_loadConfigDBPre();
//        var_dump($this->db);
//        
//        $config = array(
//            'hostname' => $this->db->hostname,
//            'username' => $this->db->username,
//            'password' => $this->db->password,
//            'database' => $this->db->database
//        );
//        echo json_encode($config);
//        echo 'Ok';

        echo mktime(9, 1, 2, 6, 10, 2016) . '<br>';
        echo time();
    }

    public function rm()
    {
        echo 'denied';
        die;
//        $path = 'rm -rf /var/www/html/webinaris-new/convert/logs/*';
//        popen($path, "r");

//        $path = "php -f /var/www/html/webinaris-new/convert/config/convert.php '26924' '3960' '1482275436' '/var/www/html/webinaris-new/media/videos/3960/1482275436.mp4' 'mp4' '/var/www/html/webinaris-new/media/ffmpeg/ffmpeg -i ' '/var/www/html/webinaris-new/media/videos/3960/' '490' 'server02.webinaris.com' 'webinaris02' 'webinaris' 'AjxcljH27azhAn1u723' > /var/www/html/webinaris-new/convert/logs/3960-1482275436.txt 2>&1 &";
//        exec($path);

//        $path = "/var/www/html/webinaris-next2/media/Bento4/bin/mp4fragment --fragment-duration 5000 --index /var/www/html/webinaris-next2/media/videos/915/TT.mp4 /var/www/html/webinaris-next2/media/videos/915/TT/dash/frg.mp4";
//        $path = "/var/www/html/webinaris-next2/media/Bento4/bin/mp4dash /var/www/html/webinaris-next2/media/videos/915/TT/dash/frg.mp4 -o /var/www/html/webinaris-next2/media/videos/915/TT/dash/ --mpd-name=manifest.mpd -f --profiles=live,hbbtv-1.5 --use-segment-template-number-padding";
//        popen($path, 'r');

        echo '<br>success';
    }

    public function upaws()
    {
        require_once('plugins/aws-sdk/autoload.php');
        $bucket = 'giann-asia';
        $config = array(
            'key' => 'AKIAIWNVLS55EAVLSDFQ'
        , 'secret' => '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'
//            ,'signature' => 'v4'
//            ,'region' => 'eu-central-1'
        );
        $s3 = Aws\S3\S3Client::factory($config);

        $providerId = 915;
        $keypath = 'admin/002';
        $path = '/var/www/html/webinaris-new/media/videos/915/dash2';
        // Put dash file
        $di = new RecursiveDirectoryIterator($path);
        foreach (new RecursiveIteratorIterator($di) as $ffname => $file) {
            if ($file->isFile()) {
                //                echo $providerId . '/' . $keypath . '/dash' . str_replace($path, '', $ffname) . '<br>';
                $ext = $file->getExtension();
                switch ($ext) {
                    case 'mpd':
                        $ret = $s3->putObject(array(
                            'Bucket' => $bucket,
                            'Key' => $providerId . '/' . $keypath . '/dash' . str_replace($path, '', $ffname),
                            'SourceFile' => $ffname,
                            'ACL' => 'public-read',
                            'ContentType' => 'application/dash+xml'
                        ));
                        break;
                    case 'm4s':
                        $ret = $s3->putObject(array(
                            'Bucket' => $bucket,
                            'Key' => $providerId . '/' . $keypath . '/dash' . str_replace($path, '', $ffname),
                            'SourceFile' => $ffname,
                            'ACL' => 'public-read',
                            'ContentType' => 'video/mp4'
                        ));
                        break;
                    default :
                        $ret = $s3->putObject(array(
                            'Bucket' => $bucket,
                            'Key' => $providerId . '/' . $keypath . '/dash' . str_replace($path, '', $ffname),
                            'SourceFile' => $ffname,
                            'ACL' => 'public-read'
                        ));
                        break;
                }
            }
        }
        echo '<br>success';
    }

    public function dd()
    {
//        $originalDate = "04-11-2016 23:59";
//        $date = DateTime::createFromFormat('d-m-Y H:i', $originalDate);
//        echo $date->format('Y-m-d H:i');

//        echo time();die;
//        $timelong = strtotime("0000-00-00 00:00:00");
        $BD086 = new DateTime('');
        var_dump($BD086);
        die;
        echo $BD086_DATE = $BD086->format('d-m-Y') . '<br>';
        echo $BD086_HOUR = intval($BD086->format('H')) . '<br>';
        echo $BD086_MIN = intval($BD086->format('i')) . '<br>';
    }

    public function api()
    {
        $content = array(
            'v' => '85a7af17f54d8535ecdbab901b020496',
            'PS200' => '19326',
            'FK100' => '915',
            'file_name' => '1473912903374-POST.mp4'
        );
        mFsockopen(base_url() . 'api/pr_convert', $content, 'POST');
        echo 'success';
    }

    public function videos3()
    {
        $this->load->view('video_s3');
    }

    public function videocloud()
    {
        $this->load->view('video_cloud');
    }

    public function lnk()
    {
        redirect('https://d1n8oi9xt3103f.cloudfront.net/test/%5BAdmin%5D-TEST.mp4');
    }

    public function testsendmail()
    {
        $data['BV363'] = 'giann@queenb.vn';
        $data['BV366'] = 'wp12343893-infoimmo';// 'noreply@prowebinaronlinesolutions.com';
        $data['BV367'] = '=u7h8fRebApr';// 'h2iFDhm6BzCV';
        $data['BV368'] = 'tls';
        $data['BV369'] = 'wp12343893.server-he.de';// 'smtprelaypool.ispgateway.de';
        $data['BV370'] = '587';
        $data['BV375'] = "Test 10:12 AM";
        $data['BV373'] = 'Xin chào loan le,<br /><br />đây là đường dẫn đến Webinar: NHẬP LIỆU NGUỒN CHO THIẾT BỊ BẢO TRÌ (THEO HẠN MỨC)<br /><br /><a href="http://fastwebinar.de/customer/flogin/3384/letoloan@queenb.vn/GVG4o/autologin/login.html">http://fastwebinar.de/customer/flogin/3384/letoloan@queenb.vn/GVG4o/autologin/login.html</a><br /><br />Thời gian xem: T6, 21.11.2014, 14:45 Giờ.<br /><br />Bạn hãy đăng nhập đúng giờ, vì chương trình sẽ đóng lại sau 5 phút. Bạn hãy thu xếp thời gian, vì chương trình sẽ kéo dài khoảng 30 Phút .<br /><br />Trân trọng<br /> <br />Toan Phong Vuong';
        $data['BV373'] .= 'Trân trọng .Xin chào GG NN, đây là đường dẫn đến Webinar:  NHẬP LIỆU NGUỒN CHO THIẾT BỊ BẢO TRÌ (THEO THỜI GIAN) <a href="http://fastwebinar.de/customer/flogin/3319/giann@queenb.vn/KgD7n/autologin/login.html">http://fastwebinar.de/customer/flogin/3319/giann@queenb.vn/KgD7n/autologin/login.html</a>Thời gian xem: T2, 10.11.2014, 22:00 Giờ. Bạn hãy đăng nhập đúng giờ, vì chương trình sẽ đóng sau 5 phút. Bạn hãy thu xếp thời gian, vì chương trình sẽ kéo dài khoảng 40 Phút .Trân trọng Toan Phong Vuong';
        // $data['BV373'] = 'Test Content';
        //thong tin co ban
        $config['protocol'] = 'smtp';
        $config['smtp_timeout'] = '7';
        $config['charset'] = 'utf-8';
        $config['newline'] = "\r\n";
        $config['mailtype'] = 'html';
        $config['validation'] = TRUE;
        $config['useragent'] = "Webinaris";

        //lay thong so gui mail
        $config['ssl_tsl'] = strtolower($data['BV368']);
        $config['stmp_host_link'] = $data['BV369'];
        $config['smtp_port'] = $data['BV370'];
        $config['smtp_user'] = $data['BV366'];
        $config['smtp_pass'] = $data['BV367'];

        $dataSend['config'] = $config;
//        $dataSend['from'] = 'info@immobilienmanager-gmbh.de';
//        $dataSend['name'] = 'Immobilienmanager';
        $dataSend['from'] = 'noreply@bonevo.net';
//        $dataSend['from'] = 'noreply@piepcom.com';
        $dataSend['name'] = 'noreply';

        $dataSend['to'] = $data['BV363']; //email provide     
        $dataSend['subject'] = $data['BV375'];
        // $dataSend['content'] = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"> <html lang="en"> <head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head> <body>' . 'Xin chào loan le,đây là đường dẫn đến Webinar: NHẬP LIỆU NGUỒN CHO THIẾT BỊ BẢO TRÌ (THEO HẠN MỨC) http://fastwebinar.de/customer/flogin/3384/letoloan@queenb.vn/GVG4o/autologin/login.html Thời gian xem: T6, 21.11.2014, 14:45 Giờ.  Bạn hãy đăng nhập đúng giờ, vì chương trình sẽ đóng lại sau 5 phút. Bạn hãy thu xếp thời gian, vì chương trình sẽ kéo dài khoảng 30 Phút .Trân trọng Toan Phong Vuong' . '</body></html>';
        $dataSend['content'] = $data['BV373'];

        // echo json_encode($dataSend, true);die;
        //thuc thi send mail
        $send_result = $this->sendmail_default($dataSend, true);
        var_dump($send_result);
        var_dump($dataSend['content']);
    }

    private function sendmail_default($data, $amazone = FALSE)
    {
        $this->load->model('mail_model', 'MAIL_MODEL');
        $from = $data['from'];
        $name = $data['name'];
        $to = $data['to'];
        $subject = $data['subject'];
        $content = $data['content'];
        $replyto = isset($data['replyto']) ? $data['replyto'] : '';
        if ($amazone) {
//            return $this->MAIL_MODEL->sendMail_Amazone($from, $name, $to, $subject, $content, $replyto, '', 'email-smtp.eu-west-1.amazonaws.com');
            return $this->MAIL_MODEL->sendMail_Amazone($from, $name, $to, $subject, $content, $replyto, '', 'email.eu-west-1.amazonaws.com');
//            return $this->MAIL_MODEL->sendMail_Amazone($from, $name, $to, $subject, $content, $replyto, '', 'email.eu-central-1.amazonaws.com');
        }
        $config = $data['config'];
        return $this->MAIL_MODEL->sendMail($config, $from, $name, $to, $subject, $content, $replyto);
    }

    public function cip()
    {
        echo $_SERVER['REMOTE_ADDR'];
//        echo json_decode($_SERVER);
    }


    public function testqr() {
        //load model can su dung
        $this->load->model('q100_model', 'Q100_MODEL');
        $this->load->model('k100_model', 'K100_MODEL');
        $this->load->model('c100_model', 'C100_MODEL');

        $username = 'giann@queenb.vn';
        $password = md5('1111111111111');
        $pvCTYPE = 'P';

        $config = $this->_loadConfigDBviaQV101($username, $username, FALSE); // Connect incoming van con luu
        $result = $this->Q100_MODEL->q2016_checkuserlogin_provider($username, $password, $pvCTYPE);

        // $result = $this->C100_MODEL->c2016_listoftabc100lst(12990, $username);
        var_dump($result);
    }

    public function testlog() {
        $this->load->helper('mlog');
        mylog_logwrite('11111111', 'Giaaa-test', 'log_giann.txt'); 
    }

    public function testiploc() {
        $this->load->library('ip2location');

        $data = array();
        $data['location'] = $this->ip2location->getCity($_SERVER['REMOTE_ADDR']);
        var_dump($data);
    }

    public function testnewmodel() {
        echo 'aaaa';
        $this->load->model('V2_S200_model', 'V2_S200_MODEL');
        $rs = $this->V2_S200_MODEL->s2016_checktabs200('', 915, "giann@queenb.vn");
        var_dump($rs);
    }

    public function flush() {
        $this->load->library('memcached_library');
        $this->memcached_library->flush();
        echo 'ook flush';
    }
}

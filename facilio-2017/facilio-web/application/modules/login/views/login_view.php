<!DOCTYPE html>
<html>
    <head>
        <title>Login Facilio</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="<?php echo base_url(); ?>html/fonts/OpenSans/stylesheet.css" rel="stylesheet"/>
        <link href="<?php echo base_url(); ?>html/dist/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="<?php echo base_url(); ?>html/css/login.css" rel="stylesheet"/>
        <link href="<?php echo base_url(); ?>html/dist/jquery-validator/jquery-form-validator.css" rel="stylesheet" />
    </head>
    <body>
        <div class="faci-loading"></div>
        <div class="content-body">
            <div class="background-display">
                <div class="background-display-1">
                    <div class="jumbotron">
                        <form id="login_form" data-bind="submit: postLogin">
                            <div class="col-12 text-center">
                                <img class="logo lg-login" src="<?php echo base_url(); ?>html/images/facilio-logo.png" />
                                <img class="img-loading d-none" src="<?php echo base_url(); ?>html/images/faci-loading.gif">
                            </div>
                            <div class="col-12">
                                <p class="title"><?= lang('_username'); ?></p>
                                <input type="text" placeholder="<?= lang('_username'); ?>" class="txt-username" name="qv101" data-validation="required" data-bind = "value: qv101">
                            </div>
                            <div class="col-12" style="margin-top: 17px;">
                                <p class="title"><?= lang('_password'); ?></p>
                                <a href="#" class="forgot"><?= lang('_forgot_password'); ?></a>
                                <input type="password" placeholder="<?= lang('_password'); ?>" class="txt-password" name="qv102" data-validation="required" data-bind = "value: qv102">
                            </div>
                            <div class="col-12 text-center">
                                <button class="btn btn-default btn_login" type="submit"><?= lang('_login'); ?></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
        <script src="<?php echo base_url(); ?>html/dist/jquery/jquery-3.2.1.min.js" ></script>
        <script src="<?php echo base_url(); ?>html/dist/knockoutjs/knockout-3.4.2.js" ></script>
        <script src="<?php echo base_url(); ?>html/dist/jquery-validator/jquery.form-validator.min.js" ></script>
        <script src="<?php echo base_url(); ?>html/dist/sweetalert2/sweetalert2.js" ></script>
        <script src="<?php echo base_url(); ?>html/js/default.js" ></script>
        <script src="<?php echo base_url(); ?>html/js/modules.login.js" ></script>
    </body>
</html>
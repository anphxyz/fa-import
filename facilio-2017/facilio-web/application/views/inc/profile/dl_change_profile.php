<div id="dl_change_profile" class="dl-set-record">
    <div class="qb-dialog-overlay">
        <div class="container-fluid qb-dialog-body">
            <!-- Header Dialog -->
            <div class="qb-dialog-header">
                <div class="row">
                    <div class="col-12">
                        <h3 class="title-dialog"><?= lang('_change_profile'); ?></h3>
                        <a href="javascript:void(0)" class="faci-close ic-close-dialog close-dialog"></a>
                    </div>
                </div>
            </div>

            <!-- Content Dialog -->
            <div class="qb-dialog-content">
                <div class="dialog-repair-content">
                    <div class="row">
                        <div class="form-group col-6 box-info-left">
                            <div class="form-inline">
                                <label><?= lang('_group'); ?></label>
                                <input type="text" class="form-control" id="profile_group" disabled="true">
                            </div>
                            <div class="form-inline">
                                <label><?= lang('_company'); ?></label>
                                <input class="form-control" id="profile_company" disabled="true">
                            </div>
                            <div class="form-inline">
                                <label><?= lang('_branch'); ?></label>
                                <input class="form-control" id="profile_branch" disabled="true">
                            </div>
                            <div class="form-inline">
                                <label><?= lang('_first_name'); ?></label>
                                <input class="form-control" id="profile_firs_name" disabled="true">
                            </div>
                            <div class="form-inline">
                                <label><?= lang('_last_name'); ?></label>
                                <input class="form-control" id="profile_last_name" disabled="true">
                            </div>
                            <div class="form-inline">
                                <label><?= lang('_language'); ?></label>
                                <div class="dropdown box-dropdow">
                                    <button class="qb-dropdown dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="textLanguage"> 
                                    </button>
                                    <div class="dropdown-menu">
                                        <a class="dropdown-item qb-dropdown-item" href="javascript:void(0)" onclick="select('textLanguage', 'en')">English</a>
                                        <a class="dropdown-item qb-dropdown-item" href="javascript:void(0)" onclick="select('textLanguage', 'vi')">Vietnamese</a>
                                        <a class="dropdown-item qb-dropdown-item" href="javascript:void(0)" onclick="select('textLanguage', 'de')">German</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group col-6 box-info-right">
                            <div class="form-inline">
                                <label><?= lang('_email'); ?></label>
                                <input type="text" class="form-control" id="profile_email">
                            </div>
                            <div class="form-inline">
                                <label><?= lang('_mobile'); ?></label>
                                <input class="form-control" id="profile_mobile">
                            </div>
                            <div class="form-inline">
                                <label><?= lang('_phone'); ?></label>
                                <input class="form-control" id="profile_phone">
                            </div>
                            <div class="form-inline">
                                <label><?= lang('_fax'); ?></label>
                                <input class="form-control" id="profile_fax">
                            </div>
                            <div class="form-inline">
                                <label><?= lang('_time'); ?></label>
                                <div class="dropdown box-dropdown">
                                    <button class="qb-dropdown dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="textTimeZone"> 
                                    </button>
                                    <div class="dropdown-menu" id="select_timezone">
                                    </div>
                                </div>
                            </div>
                            <div class="form-inline line-password">
                                <label><?= lang('_password'); ?></label>
                                <a href="javascript:void(0)"> <?= lang('_change_password'); ?></a>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <label class="title-receive-email"><?= lang('_i_want_to_receive_emails_by'); ?></label>
                    <div class="row receive-email col-10">
                        <div class="form-group col-3">
                            <label class="title"><?= lang('_device'); ?></label>
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input profile-check" id="device_mail" value="mail">
                                <span class="custom-control-indicator cb-custom"></span>
                                <span class="custom-control-description lb-control"><?= lang('_email'); ?></span>
                            </label>
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input profile-check" id="device_sms" value="sms">
                                <span class="custom-control-indicator cb-custom"></span>
                                <span class="custom-control-description lb-control"><?= lang('_sms'); ?></span>
                            </label>
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input profile-check" id="device_phone" value="phone">
                                <span class="custom-control-indicator cb-custom"></span>
                                <span class="custom-control-description lb-control"><?= lang('_phone'); ?></span>
                            </label>
                        </div>
                        <div class="form-group col-3">
                            <label class="title"><?= lang('_priority'); ?></label>
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input profile-check" id="priority_hight" value="high">
                                <span class="custom-control-indicator cb-custom"></span>
                                <span class="custom-control-description lb-control"><?= lang('_priority_array')[0]; ?></span>
                            </label>
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input profile-check" id="priority_medium" value="medium">
                                <span class="custom-control-indicator cb-custom"></span>
                                <span class="custom-control-description lb-control"><?= lang('_priority_array')[1]; ?></span>
                            </label>
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input profile-check" id="priority_low" value="low">
                                <span class="custom-control-indicator cb-custom"></span>
                                <span class="custom-control-description lb-control"><?= lang('_priority_array')[2]; ?></span>
                            </label>
                        </div>
                        <div class="form-group col-3">
                            <label class="title"><?= lang('_status'); ?></label>
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input profile-check" id="status_opening" value="opening">
                                <span class="custom-control-indicator cb-custom"></span>
                                <span class="custom-control-description lb-control"><?= lang('_status_array_2')[0]; ?></span>
                            </label>
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input profile-check" id="status_doing" value="doing">
                                <span class="custom-control-indicator cb-custom"></span>
                                <span class="custom-control-description lb-control"><?= lang('_status_array_2')[1]; ?></span>
                            </label>
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input profile-check" id="status_finish" value="finish">
                                <span class="custom-control-indicator cb-custom"></span>
                                <span class="custom-control-description lb-control"><?= lang('_status_array_2')[2]; ?></span>
                            </label>
                        </div>
                        <div class="form-group col-3">
                            <label class="title"><?= lang('_class'); ?></label>
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input profile-check" id="species_mechanical" value="mechanical">
                                <span class="custom-control-indicator cb-custom"></span>
                                <span class="custom-control-description lb-control"><?= lang('_class_array')[0]; ?></span>
                            </label>
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input profile-check" id="species_electric" value="electric">
                                <span class="custom-control-indicator cb-custom"></span>
                                <span class="custom-control-description lb-control"><?= lang('_class_array')[1]; ?></span>
                            </label>
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input profile-check" id="species_information" value="information">
                                <span class="custom-control-indicator cb-custom"></span>
                                <span class="custom-control-description lb-control"><?= lang('_class_array')[2]; ?></span>
                            </label>
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input profile-check" id="species_undefined" value="undefined">
                                <span class="custom-control-indicator cb-custom"></span>
                                <span class="custom-control-description lb-control"><?= lang('_class_array')[3]; ?></span>
                            </label>
                            <label class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input profile-check" id="species_all" value="all">
                                <span class="custom-control-indicator cb-custom"></span>
                                <span class="custom-control-description lb-control"><?= lang('_class_array')[4]; ?></span>
                            </label>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Footer Dialog -->
            <div class="qb-dialog-footer">
                <div class="row justify-content-end">
                    <div class="col-12 text-right">
                        <a href="#" class="btn-close close-dialog"><?= lang('_btn_close'); ?></a>
                        <a href="#" class="btn-save" id="btn_save_profile"><?= lang('_btn_save'); ?></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
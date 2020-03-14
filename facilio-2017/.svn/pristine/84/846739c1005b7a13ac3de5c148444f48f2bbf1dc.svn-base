<div class="page-maintenance-repair">
    <div class="container-fluid">
        <!-- Boxselect Top -->
        <div class="boxselect">
            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-7 boxselect-left">
                    <div class="form-inline form-boxselect-left">
                        <a href="javascript:void(0)" class="btn btn-ticket btn-sm" data-bind="click: openRepairC150CM"><?= lang('_ticket'); ?></a>
                        <label class="custom-control custom-checkbox">
                            <input type="checkbox" class="custom-control-input" data-bind="checked: cvcanhan">
                            <span class="custom-control-indicator cb-custom"></span>
                            <span class="custom-control-description lb-ic-check-cv"><?= lang('_personal_work_created'); ?></span>
                        </label>
                        <div class="box-checkbox-rp">
                            <div class="form-inline">
                                <label class="custom-cb-repair">
                                    <input type="checkbox" data-bind="checked: bigRepair">
                                    <span class="checkmark"></span>
                                </label>
                                <span class="custom-control-description lb-ic-check-rp" data-bind="text: '<?= lang('_big_repair'); ?> (' + listCombTabC150K().length + ')'"></span>
                                <div class="dropdown" data-bind="visible: bigRepair">
                                    <button class="qb-dropdown dd-list-content dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bind="text: textCombC150K">
                                    </button>
                                    <div class="dropdown-menu" data-bind="foreach: listCombTabC150K">
                                        <a class="dropdown-item qb-dropdown-item" href="javascript:void(0)" data-bind="text: formatTime(LABEL), click: clickCombTabC150K.bind($data, VAL, LABEL)"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-5">
                    <div class="form-inline boxselect-right">
                        <div class="col-sm-4 col-md-4 p-0">
                            <div class="dropdown">
                                <button class="qb-dropdown dropdown-toggle" type="button" data-toggle="dropdown" id="comBTabN850" data-bind="text: textTabN850">
                                </button>
                                <div class="dropdown-menu" data-bind="foreach: listCombTabN850">
                                    <a class="dropdown-item qb-dropdown-item" href="javascript:void(0)" data-bind="text: LABEL, click : function(){ $parent.loadListOfTabC150C($data.VAL, $data.LABEL, undefined, undefined, undefined, undefined, undefined, undefined)}"></a>
                                    <!-- <a class="dropdown-item qb-dropdown-item" href="#" data-bind="text: LABEL, click: clickCombTabN850.bind($data, VAL, LABEL)"></a> -->
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-md-4 p-0">
                            <div class="dropdown">
                                <button class="qb-dropdown dropdown-toggle" type="button" data-toggle="dropdown" id="combTabN100G" data-bind="text: textTabN100G">
                                </button>
                                <div class="dropdown-menu" data-bind="foreach: listCombTabN100G">
                                    <a class="dropdown-item qb-dropdown-item" href="javascript:void(0)" data-bind="text: LABEL, click : function(){ $parent.loadListOfTabC150C(undefined, undefined, $data.VAL, $data.LABEL, undefined, undefined, undefined, undefined)}"></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-4 col-md-4 p-0">
                            <div class="dropdown">
                                <button class="qb-dropdown dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="select_status" data-bind="text: textStatus"> 
                                </button>
                                <div class="dropdown-menu" data-bind="foreach: combStatusComplete">
                                    <a class="dropdown-item qb-dropdown-item" href="javascript:void(0)" data-bind="text: LABEL, click : function(){ $parent.loadListOfTabC150C(undefined, undefined, undefined, undefined, $data.VAL, $data.LABEL, undefined, undefined)}"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Boxselect Top -->

        <!-- Select Filter -->
        <div class="row">
            <div class="form-group" style="margin-bottom: 0;margin-left: 10px;">

                <div class="dropdown">
                    <button class="qb-dropdown dd-sort dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bind="text: textSort">
                    </button>
                    <div class="dropdown-menu" data-bind="foreach: combSort">
                        <a class="dropdown-item qb-dropdown-item" href="javascript:void(0)" data-bind="text: LABEL, click : function(){ $parent.loadListOfTabC150C(undefined, undefined, undefined, undefined, undefined, undefined, $data.VAL, $data.LABEL,  undefined, undefined)}"></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Select Filter -->

        <!-- Section Content -->
        <div data-bind="foreach: listOfTabC150C">
            <div class="section-content" >
                <div class="row">
                    <div class="col-sm-12 col-md-4">
                        <div class="section-content-left">
                            <div class="form-check form-check-inline float-left">
                                <label class="custom-control custom-checkbox cb-header">
                                    <input type="checkbox" class="custom-control-input cb-content-section" data-bind="checkedValue: PC150, checked: $parent.listExportExcel">
                                    <span class="custom-control-indicator cb-custom"></span>
                                </label>
                            </div>
                            <div style="margin-left: 35px;" >
                                <a href="javascript:void(0);" class="title-section-left title-c150" data-bind="text: '<?= lang('_ticket'); ?>: ' + CV151"></a><br/>
                                <span class="faci-wrenches">
                                    <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span>
                                </span>
                                <a href="javascript:void(0)" class="require-materials">
                                    <span class="faci-vattu">
                                        <span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span><span class="path6"></span><span class="path7"></span><span class="path8"></span><span class="path9"></span><span class="path10"></span><span class="path11"></span><span class="path12"></span><span class="path13"></span><span class="path14"></span><span class="path15"></span><span class="path16"></span><span class="path17"></span>
                                    </span>
                                </a>
                                <h3 class="list-materials" data-bind="text: PC150"></h3>
                                <p><b><?= lang('_description'); ?>:</b> <span data-bind="text: limitBoxInput(CB173, 'CB173')"></span><a href="#" class="read-more" data-bind="text: checkLengthCB173(CB173), click: openReadMore.bind($data, 'Mô tả', CB173)"></a></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <div class="section-content-center">
                            <a href="javascript:void(0);">CMBP-0000184</a>
                            <span class="faci-warning">
                                <span class="path1"></span><span class="path2"></span>
                            </span>
                            <span class="faci-running">
                                <span class="path1"></span><span class="path2"></span>
                            </span>
                            <p class="text-bold"><?= lang('_parts_need_repair'); ?></p>
                            <p class="text-bold" data-bind="text: '<?= lang('_device'); ?>: ' + SV201"></p>
                            <p><b><?= lang('_area'); ?>: </b><span data-bind="text: limitBoxInput(HV201, 'HV201')"></span><a href="#" class="read-more"data-bind="text: checkLengthHV201(HV201), click: openReadMore.bind($data, 'Khu vực', HV201)"></a></p>
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4">
                        <div class="section-content-right">
                            <span class="faci-user">
                                <span class="path1"></span><span class="path2"></span>
                            </span>
                            <p class="text-user" data-bind="text: CV165"></p>								
                            <a href="javascript:void(0)" class="forward" data-bind="click: openDeliveryC150CM.bind($data, CB173, FS200, PS250, FC550, PC150, CD153, PN100 , FC500)"><span class="faci-foward hover"></span></a>
                            <a href="javascript:void(0)" data-bind="click: deleteRepair.bind($data)"><span class="faci-delete ic-content-right-del hover"></span></a>
                            <a href="javascript:void(0)"><span class="faci-attach ic-content-right-file hover"></span></a>
                            <a href="javascript:void(0)"><span class="faci-edit ic-content-right-edit hover btn-ticket-edit" data-bind="click: openEditTicket.bind($data)"></span></a>
                            <br/>
                            <span class="faci-calendar"></span>
                            <span class="sp-date-1" data-bind="text: convertDate(CD152)"></span><span class="sp-date-2" data-bind="text: convertDate(CD153)"></span><br/>
                            <span class="faci-calendar"></span><span class="sp-time-expected" data-bind="text : '<?= lang('_expected'); ?> ' + BN104 + ' (Min)'"></span><a href="javascript:void(0)" class="edt-expected" data-bind="click: openEditTime.bind($data)"><span class="faci-edit hover"></span></a><br/>
                            <a href="javascript:void(0)" class="ic-file" data-bind="click: openDialogFile.bind($data)"><span class="faci-file"></span></a><span class="sp-file" data-bind="text: '(' + DOC + ')'"></span>
                            <a href="javascript:void(0)" class="ic-image" data-bind="click: openDialogImage.bind($data)"><span class="faci-image" style="margin-left: 12px;"></span></a><span class="sp-img" data-bind="text: '(' + PIC + ')'"></span><br/>
                            <span class="faci-historical-report"></span><a href="javascript:void(0)" class="link-report" data-bind="click: loadListOfTabC300CP5.bind($data, PC150)"><?= lang('_history_report'); ?></a>
                            <a class="btn btn-report" href="javascript:void(0)" role="button" data-bind="click: openReportC150CM.bind($data, PC150)"><?= lang('_report'); ?></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- End Section Content -->
    </div>
</div>

<?php echo $this->load->view('inc/c150cm/dl_repair'); ?>
<?php echo $this->load->view('inc/c150cm/dl_delivery_job'); ?>
<?php echo $this->load->view('inc/c150cm/dl_history_report'); ?>
<?php echo $this->load->view('inc/c150cm/dl_report'); ?>
<?php echo $this->load->view('inc/c150cm/dl_read_more'); ?>
<?php echo $this->load->view('inc/c150cm/popup_require_materials'); ?>
<?php echo $this->load->view('inc/c150cm/popup_ycvt_dsvt'); ?>
<?php echo $this->load->view('inc/c150cm/popup_dl_dsvt'); ?>
<?php echo $this->load->view('inc/paging/paging'); ?>

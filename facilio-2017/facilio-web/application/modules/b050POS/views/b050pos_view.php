<div class="page-list-equipment">
    <div class="container-fluid">
        <div class="content">
            <!-- Top Page -->
            <div class="content-top">
                <div class="row">
                    <div class="col-12">
                        <div class="form-inline">
                            <a class="btn btn-permission active" href="javascript:void(0)" role="button" id="btn-permission"><?= lang('_category_device'); ?></a>
                            <a class="btn btn-permission" href="<?php echo base_url(); ?>b050BS.html" role="button" id="btn-permission"><?= lang('_device_tracking'); ?></a>
                            <a class="btn btn-permission" href="<?php echo base_url(); ?>b050S.html" role="button" id="btn-permission"><?= lang('_search'); ?></a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Top Page -->

            <!-- Body Page -->
            <div class="content-body">
                <div class="content-data-root">
                    <!-- Breadcrumb -->
                    <div class="data-root-breadcrumb">
                        <div class="row">
                            <div class="col-12">
                                <nav class="breadcrumb">
                                    <a class="breadcrumb-item link-root" href="#">
                                        <span class="faci-factory ic-link-root"></span>NHA MAY VICEM BIM SON (10006)</a>
                                    <a class="breadcrumb-item active link-child" href="#">DÂY CHUYỀN 3</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <!-- End Breadcrumb -->

                    <div class="data-root-body">
                        <div class="top-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="row justify-content-end">
                                        <div class="dropdown">
                                            <button class="qb-dropdown dropdown-toggle" type="button" data-toggle="dropdown" data-bind="text: textBV068">
                                            </button>
                                            <div class="dropdown-menu" data-bind="foreach: combBV068">
                                                <a class="dropdown-item qb-dropdown-item" data-bind="text: LABEL, click : function(){ $parent.loadListOfTabB050POS($data.VAL, $data.LABEL)}"></a>
                                            </div>
                                        </div>
                                        <a href="javascript:void(0" class="btn-move-job class-move-job" data-bind="click: loadListCombTabN100M.bind($data, undefined)"><span class="faci-foward ic-add"></span><?= lang('_move_job'); ?></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content-body">
                            <div class="row">
                                <div class="col-md-3 p-0">
                                    <div class="left-content">
                                        <div id="tree_menu_right" class="tree-right"></div>
                                    </div>
                                </div>
                                <div class="col-md-9 col-right">
                                    <div class="right-content">
                                        <table class="table table-responsive qb-table table-list-equipment">
                                            <thead>
                                                <tr class="header-table">
                                                    <th class="th1"><?= lang('_name_device'); ?></th>
                                                    <th class="th2"><?= lang('_property_code'); ?></th>
                                                    <th class="th3"><?= lang('_device_code'); ?></th>
                                                    <th class="th4"><?= lang('_material_requirements'); ?></th>
                                                    <th class="th5"><?= lang('_device_log'); ?></th>
                                                    <th class="th6"><?= lang('_move_job_acronym'); ?></th>
                                                </tr>
                                            </thead>
                                            <tbody data-bind="foreach: listTabB050POS">
                                                <tr>
                                                    <td class="text-left name-device" >
                                                        <span class="faci-finished ic-span"><span class="path1"></span><span class="path2"></span>
                                                        </span><span data-bind="text : BV051"></span>
                                                    </td>
                                                    <td data-bind="text : BV052"></td>
                                                    <td data-bind="text : BV060"></td>
                                                    <td></td>
                                                    <td data-bind="click: $parent.setFB050">
                                                        <a href="javascript:void(0" class="faci-historical-report ic-span class-device-log"></a>
                                                    </td>
                                                    <td data-bind="click: $parent.loadListCombTabN100M">
                                                        <a href="javascript:void(0" class="faci-update ic-span class-move-job"></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div id="image" class="tab-pane fade">
                                            <div class="qb-pagination image" lang="image">
                                                <input class="rowss" type="hidden">
                                                <input class="target" type="hidden">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- End Page Body -->

        </div>
    </div>
    <?php echo $this->load->view('inc/b050pos/dl_transfer_work'); ?>
    <?php echo $this->load->view('inc/b050pos/dl_device_log'); ?>
</div>
<div class="page-search-equipment">
    <div class="container-fluid content-page-search-machine-view1">
        <div class="row">
            <div class="col-xs-12 col-lg-6">
                <a class="btn btn-permission" href="<?php echo base_url(); ?>b050POS.html" role="button" id="btn-permission"><?= lang('_category_device'); ?></a>
                <a class="btn btn-permission" href="<?php echo base_url(); ?>b050BS.html" role="button" id="btn-permission"><?= lang('_device_tracking'); ?></a>
                <a class="btn btn-permission active" href="javascript:void(0)" role="button" id="btn-permission"><?= lang('_search'); ?></a>
            </div>
            <div class="col-xs-12 col-lg-6 menu-right">
                <div class="form-inline boxhead-right">
                    <span class="faci-calendar ic-calendar"></span>
                    <input class="slt-calendar dropdown-toggle" type="button" name="daterange" id="daterangeB050S">
                    <div class="dropdown">
                        <button class="qb-dropdown dropdown-selete-menu dropdown-toggle" type="button" data-toggle="dropdown" data-bind="text: textCombTabS200">
                        </button>
                        <div class="dropdown-menu" data-bind="foreach: listCombTabS200">
                            <a class="dropdown-item qb-dropdown-item" data-bind="text: LABEL, click : function(){ $parent.listOfTabB050S($data.VAL, $data.LABEL)}"></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div class="data-body">
            <div class="content-body">
                <div class="row">
                    <div class="col-md-12" style="padding-left: 0;">
                        <div class="right-content">
                            <table class="table table-responsive qb-table">
                                <thead>
                                    <tr class="header-table">
                                        <th class="th1"><?= lang('_serial'); ?></th>
                                        <th class="th2"><?= lang('_name_device'); ?></th>
                                        <th class="th3"><?= lang('_area'); ?></th>
                                        <th class="th4"><?= lang('_property_code'); ?></th>
                                        <th class="th5"><?= lang('_device_code'); ?></th>
                                        <th class="th6"><?= lang('_updated_information'); ?></th>
                                    </tr>
                                </thead>
                                <tbody data-bind="foreach: listTabB050S">
                                    <tr>
                                        <td data-bind="text: setOrdinal($index())"></td>
                                        <td data-bind="text : BV051"></td>
                                        <td></td>
                                        <td data-bind="text : BV052">E211S025</td>
                                        <td data-bind="text : BV060">E211S025</td>
                                        <td data-bind="text : convertInforUpdate(BL099, BL098)"></td>
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
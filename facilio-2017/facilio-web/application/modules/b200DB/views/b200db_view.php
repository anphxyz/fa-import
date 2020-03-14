<div class="boxhead-oee chart-dashboard">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 boxhead-left">
            <a href="javascript:void(0)" class="btn qb-button btn-1"><?= lang('_map'); ?></a>
            <a href="javascript:void(0)" class="btn qb-button btn-2 active"><?= lang('_chart'); ?></a>
            <a href="<?php echo base_url(); ?>n420.html" class="btn qb-button btn-3"><?= lang('_oee'); ?></a>
            <!-- </div> -->
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8 chart-head-right">
            <div class="form-inline boxhead-right head-chart">
                <!-- hien khi chon cong viec nhan vien-->
                <div class="dropdown" data-bind="visible: !groupWork()">
                    <button class="qb-dropdown dropdown-toggle" type="button" data-toggle="dropdown" id="comBTabN850" data-bind="text: textTabN850">
                    </button>
                    <div class="dropdown-menu" data-bind="foreach: listCombTabN850">
                        <a class="dropdown-item qb-dropdown-item" href="javascript:void(0)" data-bind="text: LABEL, click : function(){ $parent.loadListOfTabB200EM($data.VAL, $data.LABEL, undefined, undefined)}"></a>
                    </div>
                </div>
                <!-- -------------end---------------- -->
                <div class="form-inline">
                    <span class="faci-calendar ic-calendar"></span>
                    <input class="slt-calendar dropdown-toggle dateDashBoard" type="button" name="daterange">
                </div>
                <div class="dropdown" data-bind="visible: groupWork">
                    <button class="qb-dropdown dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bind="text: textFC500FAC"> 
                    </button>
                    <div class="dropdown-menu" data-bind="foreach: combFC500">
                        <a class="dropdown-item qb-dropdown-item" href="javascript:void(0)" data-bind="text: LABEL, click : function(){ $parent.loadListOfTabB200FAC($data.VAL, $data.LABEL)}"></a>
                    </div>
                </div>
                <!-- hien khi chon cong viec nhan vien-->
                <div class="dropdown"  data-bind="visible: !groupWork()">
                    <button class="qb-dropdown dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bind="text: textFC500EM"> 
                    </button>
                    <div class="dropdown-menu" data-bind="foreach: combFC500">
                        <a class="dropdown-item qb-dropdown-item" href="javascript:void(0)" data-bind="text: LABEL, click : function(){ $parent.loadListOfTabB200EM(undefined, undefined, $data.VAL, $data.LABEL)}"></a>
                    </div>
                </div>
                <!-- ---------------end-------------- -->
                <!-- <div class="dropdown">
                    <input type="text" class="form-control input-search">

                </div> -->
                <!-- <div class="boxhead-search">
                    <span class="faci-search">
                        <span class="path1"></span><span class="path2"></span>
                    </span>
                </div> -->
            </div>
        </div>
    </div>
    <!--------------------------------------------------------------------->
    <!-----------------BIỂU ĐỒ + BẢNG-------------------------------------->
    <!--------------------------------------------------------------------->
    <!--Chart-->
    <div class="row">
        <div class="col-xs-12 col-lg-12 btn-chart">
            <div class="btn-chart-sub">
                <a href="javascript:void(0)" class="btn qb-button btn-5" id="group_work" data-bind="click: loadListOfTabB200FAC"><?= lang('_group_work'); ?></a>
                <a href="javascript:void(0)" class="btn qb-button btn-2" id="personal_work" data-bind="click: loadListOfTabB200EM"><?= lang('_employees_work'); ?></a>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12 col-lg-12 chart-char">
            <div class="chart-char-sub">
                <div id="containerChart"></div>
            </div>
        </div>
    </div>
</div>

<div class="boxhead-oee">
    <div class="row">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-4 boxhead-left">
            <a href="javascript:void(0)" class="btn qb-button btn-1"><?= lang('_map'); ?></a>
            <a href="<?php echo base_url(); ?>b200DB.html" class="btn qb-button btn-2"><?= lang('_chart'); ?></a>
            <a href="javascript:void(0)" class="btn qb-button btn-3 active"><?= lang('_oee'); ?></a>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-8">
            <div class="form-inline boxhead-right">
                <label class="lbl-1"><?= lang('_highest_average_yield'); ?>: </label>&nbsp;
                <label class="lbl-2 dl_oee_maxav">0</label>
                <button class="btn btn-4 btn-open-oee">
                    <span class="faci-add ic-add"></span> <?= lang('_oee'); ?></button>
                <div class="dropdown">
                    <button class="qb-dropdown dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bind="text: textComBTabH450"> 
                    </button>
                    <div class="dropdown-menu" data-bind="foreach: listComBTabH450">
                        <a class="dropdown-item qb-dropdown-item" href="#" data-bind="text: LABEL, click : function(){ $parent.loadListOfTabN420OEE($data.VAL, $data.LABEL, undefined, undefined)}"></a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="qb-dropdown dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bind="text: textTime"> 
                    </button>
                    <div class="dropdown-menu" data-bind="foreach: combTime">
                        <a class="dropdown-item qb-dropdown-item" href="#" data-bind="text: LABEL, click : function(){ $parent.loadListOfTabN420OEE(undefined, undefined, $data.VAL, $data.LABEL)}"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!--------------------------------------------------------------------->
<!-----------------BIỂU ĐỒ + BẢNG------------------------------------->
<!--------------------------------------------------------------------->
<!--Chart-->
<div class="row row-body-oee">
    <div class="col-xs-12 col-lg-6 chart-oee">
        <div class="chart-oee-sub">
            <div id="container"></div>
        </div>
    </div>

    <!--Table-->
    <div class="col-xs-12 col-lg-6 table-oee">
        <ul class="col-lg-12 table-oee-sub">
            <li class="row1">
                <label class="label-left"><?= lang('_from_day'); ?></label>
                <label class="lalel-right">15/1/2017</label>
            </li>
            <li class="row2">
                <label class="label-left"><?= lang('_to_day'); ?></label>
                <label class="lalel-right">30/6/2017</label>
            </li>
            <li class="row1">
                <label class="label-left"><?= lang('_machine_operating_time'); ?>:</label>
                <label id="tableOeeLable1" class="lalel-right">0.00</label>
            </li>
            <li class="row2">
                <label class="label-left"><?= lang('_time_stop_machine_initiative'); ?>:</label>
                <label class="lalel-right">0.00</label>
            </li>
            <li class="row1">
                <label class="label-left"><?= lang('_time_stop_machine_passive'); ?>:</label>
                <label class="lalel-right">0.00</label>
            </li>
            <li class="row2">
                <label class="label-left"><?= lang('_time_stop_waiting'); ?>:</label>
                <label class="lalel-right">0.00</label>
            </li>
            <li class="row1">
                <label class="label-left"><?= lang('_highest_productivity'); ?>:</label>
                <label class="lalel-right">0.00</label>
            </li>
            <li class="row2">
                <label class="label-left"><?= lang('_average_productivity'); ?>:</label>
                <label class="lalel-right">0.00</label>
            </li>
            <li class="row1">
                <label class="label-left"><?= lang('_total_output_made'); ?>:</label>
                <label class="lalel-right">0.00</label>
            </li>
            <li class="row2">
                <label class="label-left"><?= lang('_total_defects'); ?>:</label>
                <label class="lalel-right">0.00</label>
            </li>
            <li class="row1">
                <label class="label-left"><?= lang('_coefficients_ready'); ?></label>
                <label class="lalel-right">0.00</label>
            </li>
            <li class="row2">
                <label class="label-left"><?= lang('_coefficient_of_productivity'); ?></label>
                <label class="lalel-right">0.00</label>
            </li>
            <li class="row1">
                <label class="label-left"><?= lang('_coefficient_of_output'); ?></label>
                <label class="lalel-right">0.00</label>
            </li>
            <li class="row2">
                <label class="label-left"><?= lang('_coefficient_oee'); ?></label>
                <label class="lalel-right">0.00</label>
            </li>
        </ul>
    </div>
</div>
<?php echo $this->load->view('inc/n420OEE/dl_oee'); ?>
<?php echo $this->load->view('inc/n420OEE/dl_oee_maxav'); ?>


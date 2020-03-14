<div class="page-pm">
  <div class="container-fluid">
    <div class="pm-toolbar">
      <div class="row">
        <div class="col-4">
          <a href="<?= base_url(); ?>b200PM.html" class="btn qb-button btn-pm active"><?= lang('_regular_maintenance'); ?></a>
          <a href="<?= base_url(); ?>b350.html" class="btn qb-button"><?= lang('_maintenance_of_limits'); ?></a>
        </div>
        <div class="col-8">
          <div class="row justify-content-end">
            <ul class="ul-toolbar">
              <li id="comb_n850">
                <!-- append code here -->
              </li>
              <li id="comb_n100g">
                <!-- append code here -->
              </li>
              <li>
                <div class="dropdown">
                  <button class="qb-dropdown dropdown-toggle" type="button" data-toggle="dropdown"><?= lang('_no_complete'); ?></button>
                  <input type="hidden" value="0" id="val_fc500">
                  <div class="dropdown-menu">
                    <a class="dropdown-item qb-dropdown-item item-fc550" href="#" lang="0"><?= lang('_no_complete'); ?></a>
                    <a class="dropdown-item qb-dropdown-item item-fc550" href="#" lang="1"><?= lang('_no_start'); ?></a>
                    <a class="dropdown-item qb-dropdown-item item-fc550" href="#" lang="2"><?= lang('_being_deployed'); ?></a>
                    <a class="dropdown-item qb-dropdown-item item-fc550" href="#" lang="10"><?= lang('_complete'); ?></a>
                  </div>
                </div>
              </li>
              <li>
                <button class="btn qb-button btn-bc" title="<?= lang('_report_fast'); ?>">BC</button>
              </li>
              <li><a class="ic-tool" href="#"><span class="faci-delete ic-delete" title="<?= lang('_del_work'); ?>"></span></a></li>
              <li><a class="ic-tool" href="#" title="<?= lang('_chose_time_export'); ?>"><span class="faci-calendar pick-time-export"></span></a></li>
              <li>
                <a class="ic-tool" href="#" title="<?= lang('_export_excel'); ?>">
                  <span class="faci-excel"><span class="path1"></span><span class="path2"></span><span class="path3"></span><span class="path4"></span><span class="path5"></span></span>
                </a>
              </li>
            </ul>
          </div>
          <!-- div time export -->
          <div class="time-export d-none">
            <ul class="lst-time">
              <li><?= lang('_today'); ?></li>
              <li><?= lang('_tomorrow'); ?></li>
              <li><?= lang('_this_week'); ?></li>
              <li><?= lang('_day_to_day'); ?></li>
            </ul>
          </div>
          <!-- end div time export -->
        </div>
      </div>
    </div>
    <!-- End Toolbar -->

    <!-- Filter Table -->
    <button class="btn-filter">
      <span class="faci-dot"></span>
    </button>

    <div class="item-filter d-none">
      <ul>
        <li>
          <label class="custom-control custom-checkbox" id="c">
            <input type="checkbox" class="custom-control-input cb-table" value="1" checked>
            <span class="custom-control-indicator"></span>
          </label>
          <span class="sp-title" for="c"><?= lang('_all'); ?></span>
        </li>
        <li>
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input cb-table" value="1" checked>
            <span class="custom-control-indicator"></span>
          </label>
          <span class="sp-title"><?= lang('_votes'); ?></span>
        </li>
        <li>
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input cb-table" value="1" checked>
            <span class="custom-control-indicator"></span>
          </label>
          <span class="sp-title"><?= lang('_area'); ?></span>
        </li>
        <li>
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input cb-table" value="1" checked>
            <span class="custom-control-indicator"></span>
          </label>
          <span class="sp-title"><?= lang('_machine'); ?></span>
        </li>
        <li>
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input cb-table" value="1" checked>
            <span class="custom-control-indicator"></span>
          </label>
          <span class="sp-title"><?= lang('_part'); ?></span>
        </li>
        <li>
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input cb-table" value="1" checked>
            <span class="custom-control-indicator"></span>
          </label>
          <span class="sp-title"><?= lang('_supplies'); ?></span>
        </li>
        <li>
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input cb-table" value="1" checked>
            <span class="custom-control-indicator"></span>
          </label>
          <span class="sp-title"><?= lang('_status'); ?></span>
        </li>
        <li>
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input cb-table" value="1" checked>
            <span class="custom-control-indicator"></span>
          </label>
          <span class="sp-title"><?= lang('_made_employee'); ?></span>
        </li>
        <li>
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input cb-table" value="1" checked>
            <span class="custom-control-indicator"></span>
          </label>
          <span class="sp-title"><?= lang('_last_maintenance_day'); ?></span>
        </li>
        <li>
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input cb-table" value="1" checked>
            <span class="custom-control-indicator"></span>
          </label>
          <span class="sp-title"><?= lang('_limit'); ?></span>
        </li>
        <li>
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input cb-table" value="1" checked>
            <span class="custom-control-indicator"></span>
          </label>
          <span class="sp-title"><?= lang('_job_description'); ?></span>
        </li>
        <li>
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input cb-table" value="1" checked>
            <span class="custom-control-indicator"></span>
          </label>
          <span class="sp-title"><?= lang('_note'); ?></span>
        </li>
        <li>
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input cb-table" value="1" checked>
            <span class="custom-control-indicator"></span>
          </label>
          <span class="sp-title"><?= lang('_documents_work'); ?></span>
        </li>
        <li>
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input cb-table" value="1" checked>
            <span class="custom-control-indicator"></span>
          </label>
          <span class="sp-title"><?= lang('_expected'); ?></span>
        </li>
        <li>
          <label class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input cb-table" value="1" checked>
            <span class="custom-control-indicator"></span>
          </label>
          <span class="sp-title"><?= lang('_documentation_equipment'); ?></span>
        </li>
      </ul>
    </div>
    <!-- End Filter Table -->

    <div class="tb-content">
      <table class="qb-table" id="pm_table">
        <thead>
          <tr class="header-table">
            <th class="th-all">
              <?= lang('_all'); ?>
              <input type="hidden" value="1" id="sort_b200">
            </th>
            <th class="th-sophieu"><?= lang('_votes'); ?>
              <a class="faci-arrow-right ic-sort" lang="2"></a>
            </th>
            <th class="th-khuvuc"><?= lang('_area'); ?></th>
            <th class="th-may"><?= lang('_machine'); ?>
              <a class="faci-arrow-right ic-sort" lang="3"></a>
            </th>
            <th class="th-bophan"><?= lang('_part'); ?></th>
            <th class="th-vattu"><?= lang('_supplies'); ?></th>
            <th class="th-trangthai"><?= lang('_status'); ?></th>
            <th class="th-nvth"><?= lang('_made_employee'); ?></th>
            <th class="th-ngaybtcuoi"><?= lang('_last_maintenance_day'); ?></th>
            <th class="th-handinh"><?= lang('_limit'); ?>
              <a class="faci-arrow-right ic-sort" lang="1"></a></th>
            <th class="th-motacongviec"><?= lang('_job_description'); ?></th>
            <th class="th-ghichu"><?= lang('_note'); ?></th>
            <th class="th-tailieucv"><?= lang('_documents_work'); ?></th>
            <th class="th-dukien"><?= lang('_expected'); ?></th>
            <th class="th-tailieutb"><?= lang('_documentation_equipment'); ?></th>
            <th class="th-none"></th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
    <!-- End Content -->
    <!-- Pagination -->
    <?= $this->load->view('inc/paging/paging'); ?>
  </div>
</div>


<?= $this->load->view('inc/b200/dl_pcv'); ?>
<?= $this->load->view('inc/b200/dl_update_tabb400'); ?>
<?= $this->load->view('inc/b200/dl_list_of_tabb050e'); ?>
<?= $this->load->view('inc/b200/dl_insert_tabc300pm_fast'); ?>
<?= $this->load->view('inc/b200/popup_require_materials'); ?>
<?= $this->load->view('inc/b200/popup_ycvt_dsvt'); ?>
<?= $this->load->view('inc/b200/dl_upload_media'); ?>
<?= $this->load->view('inc/b200/dl_upload_document'); ?>
<?= $this->load->view('inc/b200/dl_list_m650'); ?>



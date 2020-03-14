<div>
  <ul class="imp-tool">
    <li class="imp-tool-item">
      <div class="tool-file">
        <div class="group-up-file">
          <input type="file" />
          <button class="form-control">Choose file</button>
          <label>No file chosen</label>
        </div>
        <p>
          <button class="form-control">Chọn</button>
        </p>
      </div>
    </li>
    <li class="imp-tool-item">
      <a class="tool-excel" href="#">
        <span class="ficon faci-excel">
          <span class="path1"></span>
          <span class="path2"></span>
          <span class="path3"></span>
          <span class="path4"></span>
          <span class="path5"></span>
        </span> Tải mẫu excel
      </a>
    </li>
    <li class="imp-tool-item">
      <a href="#" class="btn qb-button btn-pm active">Cập nhật</a>
    </li>
  </ul>

  <div class="container-fluid">
    <div class="row imp-filter">

      <div class="imp-filter-input col">
        <label>Tên thiết bị</label>
        <div class="imp-filter-status active">
          <span class="ficon faci-info">
            <span class="path1">
              <span class="path2"></span>
            </span>
          </span>
          <span class="ficon faci-finished">
            <span class="path1">
              <span class="path2"></span>
            </span>
          </span>
        </div>
        <input type="text" placeholder="Nhập tên máy" />
      </div>

      <ul class="nav nav-tabss imp-filter-tabs col-sm-auto" id="importTab" role="tablist">
        <li class="nav-item">
          <a class="nav-link active" id="co-tab" data-toggle="tab" href="#tab_co" role="tab" aria-controls="tab_co" aria-selected="true">Cơ</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="dien-tab" data-toggle="tab" href="#tab_dien" role="tab" aria-controls="tab_dien" aria-selected="false">Điện</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="nhot-tab" data-toggle="tab" href="#tab_nhot" role="tab" aria-controls="tab_nhot" aria-selected="false">Nhớt</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" id="mo-tab" data-toggle="tab" href="#tab_mo" role="tab" aria-controls="tab_mo" aria-selected="false">Mỡ</a>
        </li>
      </ul>
    </div>

    <div class="row">
      <div class="col">
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane fade show active" id="tab_co" role="tabpanel" aria-labelledby="co-tab">
            <div class="tb-content">
              <table class="tb-data imp-tb tb1">
                <thead>
                  <tr>
                    <td rowspan="2" class="td1">STT</td>
                    <td rowspan="2" class="td2">
                      <?= lang('_part'); ?>
                    </td>
                    <td rowspan="2" class="td3">
                      <?= lang('_maintenance_job'); ?>
                    </td>
                    <td rowspan="2" class="td4">
                      <?= lang('_require_technical'); ?>
                    </td>
                    <td rowspan="2" class="td5">
                      <?= lang('_important_work'); ?>
                    </td>
                    <td rowspan="2" class="td6">
                      <?= lang('_material_code'); ?>
                    </td>
                    <td rowspan="2" class="td7">
                      <?= lang('_amount'); ?>
                    </td>
                    <td rowspan="2" class="td8">
                      <?= lang('_status'); ?>
                    </td>
                    <td colspan="8" class="td9">
                      <?= lang('_maintenance_time'); ?>
                    </td>
                    <td rowspan="2" class="td10">
                      <?= lang('_lim'); ?>
                    </td>
                    <td rowspan="2" class="td11">Chức năng</td>
                  </tr>
                  <tr>
                    <td class="td9-child">e.W</td>
                    <td class="td9-child">1M</td>
                    <td class="td9-child">2M</td>
                    <td class="td9-child">3M</td>
                    <td class="td9-child">6M</td>
                    <td class="td9-child">1Y</td>
                    <td class="td9-child">2Y</td>
                    <td class="td9-child">Khác</td>
                  </tr>
                </thead>

                <tbody>
                  <tr class="row-view">
                    <td class="td1 data">1</td>
                    <td class="td2 data">
                      <input class="data-input data-warn" type="text" required value="Máy cơ điện" />
                    </td>
                    <td class="td3 data">
                      <input class="data-input data-warn" type="text" required value="Bảo trì sửa chữa" />
                    </td>
                    <td class="td4 data">
                      <input class="data-input data-warn" type="text" required value="Lorem dummy text" />
                    </td>
                    <td class="td5 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb">
                      </div>
                    </td>
                    <td class="td6 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td7 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td8 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb">
                      </div>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-0" checked />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio ext-input">
                        <input type="radio" name="0-0" />
                        <input class="data-input" type="text" value="" />
                      </label>
                    </td>
                    <td class="td10 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td11 data">
                      <div class="data-func">
                        <a class="func-ok">
                          <span class="faci-check"></span>
                        </a>
                        <a class="func-cancel">
                          <span class="faci-close"></span>
                        </a>
                        <a class="func-del">
                          <span class="faci-delete"></span>
                        </a>
                        <a class="func-clone">
                          <span class="faci-File4"></span>
                        </a>
                        <a class="func-edit">
                          <span class="faci-edit"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="row-view">
                    <td class="td1 data">2</td>
                    <td class="td2 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td3 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td4 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td5 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb" value="Y">
                      </div>
                    </td>
                    <td class="td6 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td7 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td8 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb" value="N">
                      </div>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-2" checked />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio ext-input">
                        <input type="radio" name="0-2" />
                        <input class="data-input" type="text" value="" />
                      </label>
                    </td>
                    <td class="td10 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td11 data">
                      <div class="data-func">
                        <a class="func-ok">
                          <span class="faci-check"></span>
                        </a>
                        <a class="func-cancel">
                          <span class="faci-close"></span>
                        </a>
                        <a class="func-del">
                          <span class="faci-delete"></span>
                        </a>
                        <a class="func-clone">
                          <span class="faci-File4"></span>
                        </a>
                        <a class="func-edit">
                          <span class="faci-edit"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="row-edit">
                    <td class="td1 data">3</td>
                    <td class="td2 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td3 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td4 data">
                      <input class="data-input data-warn" type="text" required/>
                    </td>
                    <td class="td5 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb" value="Y">
                      </div>
                    </td>
                    <td class="td6 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td7 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td8 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb" value="N">
                      </div>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio ext-input">
                        <input type="radio" name="0-3" />
                        <input class="data-input" type="text" value="" />
                      </label>
                    </td>
                    <td class="td10 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td11 data">
                      <div class="data-func">
                        <a class="func-ok">
                          <span class="faci-check"></span>
                        </a>
                        <a class="func-cancel">
                          <span class="faci-close"></span>
                        </a>
                        <a class="func-del">
                          <span class="faci-delete"></span>
                        </a>
                        <a class="func-clone">
                          <span class="faci-File4"></span>
                        </a>
                        <a class="func-edit">
                          <span class="faci-edit"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="row-new">
                    <td class="td1 data">4</td>
                    <td class="td2 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td3 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td4 data">
                      <input class="data-input data-warn" type="text" required/>
                    </td>
                    <td class="td5 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb" value="Y">
                      </div>
                    </td>
                    <td class="td6 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td7 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td8 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb" value="N">
                      </div>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio ext-input">
                        <input type="radio" name="0-4" />
                        <input class="data-input" type="text" value="" />
                      </label>
                    </td>
                    <td class="td10 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td11 data">
                      <div class="data-func">
                        <a class="func-ok">
                          <span class="faci-check"></span>
                        </a>
                        <a class="func-cancel">
                          <span class="faci-close"></span>
                        </a>
                        <a class="func-del">
                          <span class="faci-delete"></span>
                        </a>
                        <a class="func-clone">
                          <span class="faci-File4"></span>
                        </a>
                        <a class="func-edit">
                          <span class="faci-edit"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="row-new">
                    <td class="td1 data">5</td>
                    <td class="td2 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td3 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td4 data">
                      <input class="data-input data-warn" type="text" required/>
                    </td>
                    <td class="td5 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb" value="Y">
                      </div>
                    </td>
                    <td class="td6 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td7 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td8 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb" value="N">
                      </div>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-5" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-5" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-5" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-5" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-5" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-5" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="0-5" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio ext-input">
                        <input type="radio" name="0-5" />
                        <input class="data-input" type="text" value="" />
                      </label>
                    </td>
                    <td class="td10 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td11 data">
                      <div class="data-func">
                        <a class="func-ok">
                          <span class="faci-check"></span>
                        </a>
                        <a class="func-cancel">
                          <span class="faci-close"></span>
                        </a>
                        <a class="func-del">
                          <span class="faci-delete"></span>
                        </a>
                        <a class="func-clone">
                          <span class="faci-File4"></span>
                        </a>
                        <a class="func-edit">
                          <span class="faci-edit"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="tb-add-row">
                <a>
                  <span class="faci-add"></span>
                </a>
              </p>
            </div>
          </div>
          <div class="tab-pane fade" id="tab_dien" role="tabpanel" aria-labelledby="dien-tab">
            <div class="tb-content">
              <table class="tb-data imp-tb tb1">
                <thead>
                  <tr>
                    <td rowspan="2" class="td1">STT</td>
                    <td rowspan="2" class="td2">
                      <?= lang('_part'); ?>
                    </td>
                    <td rowspan="2" class="td3">
                      <?= lang('_maintenance_job'); ?>
                    </td>
                    <td rowspan="2" class="td4">
                      <?= lang('_require_technical'); ?>
                    </td>
                    <td rowspan="2" class="td5">
                      <?= lang('_important_work'); ?>
                    </td>
                    <td rowspan="2" class="td6">
                      <?= lang('_material_code'); ?>
                    </td>
                    <td rowspan="2" class="td7">
                      <?= lang('_amount'); ?>
                    </td>
                    <td rowspan="2" class="td8">
                      <?= lang('_status'); ?>
                    </td>
                    <td colspan="8" class="td9">
                      <?= lang('_maintenance_time'); ?>
                    </td>
                    <td rowspan="2" class="td10">
                      <?= lang('_lim'); ?>
                    </td>
                    <td rowspan="2" class="td11">Chức năng</td>
                  </tr>
                  <tr>
                    <td class="td9-child">e.W</td>
                    <td class="td9-child">1M</td>
                    <td class="td9-child">2M</td>
                    <td class="td9-child">3M</td>
                    <td class="td9-child">6M</td>
                    <td class="td9-child">1Y</td>
                    <td class="td9-child">2Y</td>
                    <td class="td9-child">Khác</td>
                  </tr>
                </thead>

                <tbody>
                  <tr class="row-view">
                    <td class="td1 data">1</td>
                    <td class="td2 data">
                      <input class="data-input data-warn" type="text" required value="Máy cơ điện" />
                    </td>
                    <td class="td3 data">
                      <input class="data-input data-warn" type="text" required value="Bảo trì sửa chữa" />
                    </td>
                    <td class="td4 data">
                      <input class="data-input data-warn" type="text" required value="Lorem dummy text" />
                    </td>
                    <td class="td5 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb">
                      </div>
                    </td>
                    <td class="td6 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td7 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td8 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb">
                      </div>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-0" checked />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio ext-input">
                        <input type="radio" name="0-0" />
                        <input class="data-input" type="text" value="" />
                      </label>
                    </td>
                    <td class="td10 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td11 data">
                      <div class="data-func">
                        <a class="func-ok">
                          <span class="faci-check"></span>
                        </a>
                        <a class="func-cancel">
                          <span class="faci-close"></span>
                        </a>
                        <a class="func-del">
                          <span class="faci-delete"></span>
                        </a>
                        <a class="func-clone">
                          <span class="faci-File4"></span>
                        </a>
                        <a class="func-edit">
                          <span class="faci-edit"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="row-view">
                    <td class="td1 data">2</td>
                    <td class="td2 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td3 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td4 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td5 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb" value="Y">
                      </div>
                    </td>
                    <td class="td6 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td7 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td8 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb" value="N">
                      </div>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-2" checked />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio ext-input">
                        <input type="radio" name="1-2" />
                        <input class="data-input" type="text" value="" />
                      </label>
                    </td>
                    <td class="td10 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td11 data">
                      <div class="data-func">
                        <a class="func-ok">
                          <span class="faci-check"></span>
                        </a>
                        <a class="func-cancel">
                          <span class="faci-close"></span>
                        </a>
                        <a class="func-del">
                          <span class="faci-delete"></span>
                        </a>
                        <a class="func-clone">
                          <span class="faci-File4"></span>
                        </a>
                        <a class="func-edit">
                          <span class="faci-edit"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="row-edit">
                    <td class="td1 data">3</td>
                    <td class="td2 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td3 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td4 data">
                      <input class="data-input data-warn" type="text" required/>
                    </td>
                    <td class="td5 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb" value="Y">
                      </div>
                    </td>
                    <td class="td6 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td7 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td8 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb" value="N">
                      </div>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio ext-input">
                        <input type="radio" name="1-3" />
                        <input class="data-input" type="text" value="" />
                      </label>
                    </td>
                    <td class="td10 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td11 data">
                      <div class="data-func">
                        <a class="func-ok">
                          <span class="faci-check"></span>
                        </a>
                        <a class="func-cancel">
                          <span class="faci-close"></span>
                        </a>
                        <a class="func-del">
                          <span class="faci-delete"></span>
                        </a>
                        <a class="func-clone">
                          <span class="faci-File4"></span>
                        </a>
                        <a class="func-edit">
                          <span class="faci-edit"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="row-new">
                    <td class="td1 data">4</td>
                    <td class="td2 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td3 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td4 data">
                      <input class="data-input data-warn" type="text" required/>
                    </td>
                    <td class="td5 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb" value="Y">
                      </div>
                    </td>
                    <td class="td6 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td7 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td8 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb" value="N">
                      </div>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio ext-input">
                        <input type="radio" name="1-4" />
                        <input class="data-input" type="text" value="" />
                      </label>
                    </td>
                    <td class="td10 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td11 data">
                      <div class="data-func">
                        <a class="func-ok">
                          <span class="faci-check"></span>
                        </a>
                        <a class="func-cancel">
                          <span class="faci-close"></span>
                        </a>
                        <a class="func-del">
                          <span class="faci-delete"></span>
                        </a>
                        <a class="func-clone">
                          <span class="faci-File4"></span>
                        </a>
                        <a class="func-edit">
                          <span class="faci-edit"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="row-new">
                    <td class="td1 data">5</td>
                    <td class="td2 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td3 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td4 data">
                      <input class="data-input data-warn" type="text" required/>
                    </td>
                    <td class="td5 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb" value="Y">
                      </div>
                    </td>
                    <td class="td6 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td7 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td8 text-center">
                      <div class="switch_box">
                        <input type="checkbox" class="switch_cb" value="N">
                      </div>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-5" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-5" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-5" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-5" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-5" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-5" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="1-5" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio ext-input">
                        <input type="radio" name="1-5" />
                        <input class="data-input" type="text" value="" />
                      </label>
                    </td>
                    <td class="td10 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td11 data">
                      <div class="data-func">
                        <a class="func-ok">
                          <span class="faci-check"></span>
                        </a>
                        <a class="func-cancel">
                          <span class="faci-close"></span>
                        </a>
                        <a class="func-del">
                          <span class="faci-delete"></span>
                        </a>
                        <a class="func-clone">
                          <span class="faci-File4"></span>
                        </a>
                        <a class="func-edit">
                          <span class="faci-edit"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="tb-add-row">
                <a>
                  <span class="faci-add"></span>
                </a>
              </p>
            </div>
          </div>
          <div class="tab-pane fade" id="tab_nhot" role="tabpanel" aria-labelledby="nhot-tab">
            <div class="tb-content">
              <table class="tb-data imp-tb t2">
                <thead>
                  <tr>
                    <td rowspan="2" class="td1">STT</td>
                    <td rowspan="2" class="td2">
                      <?= lang('_part'); ?>
                    </td>
                    <td rowspan="2" class="td3">
                      <?= lang('_maintenance_job'); ?>
                    </td>
                    <td rowspan="2" class="td4">Chủng loại gốc</td>
                    <td rowspan="2" class="td5">Chủng loại sử dụng</td>
                    <td rowspan="2" class="td6">
                      <?= lang('_material_code'); ?>
                    </td>
                    <td rowspan="2" class="td7">
                      <?= lang('_amount'); ?>
                    </td>
                    <td rowspan="2" class="td8">SL vị trí</td>
                    <td colspan="8" class="td9">
                      <?= lang('_maintenance_time'); ?>
                    </td>
                    <td rowspan="2" class="td10">
                      <?= lang('_lim'); ?>
                    </td>
                    <td rowspan="2" class="td11">Chức năng</td>
                  </tr>
                  <tr>
                    <td class="td9-child">e.W</td>
                    <td class="td9-child">1M</td>
                    <td class="td9-child">2M</td>
                    <td class="td9-child">3M</td>
                    <td class="td9-child">6M</td>
                    <td class="td9-child">1Y</td>
                    <td class="td9-child">2Y</td>
                    <td class="td9-child">Khác</td>
                  </tr>
                </thead>

                <tbody>
                  <tr class="row-view">
                    <td class="td1 data">1</td>
                    <td class="td2 data">
                      <input class="data-input data-warn" type="text" required value="Máy cơ điện" />
                    </td>
                    <td class="td3 data">
                      <input class="data-input data-warn" type="text" required value="Bảo trì sửa chữa" />
                    </td>
                    <td class="td4 data">
                      <input class="data-input data-warn" type="text" required value="Lorem dummy text" />
                    </td>
                    <td class="td5 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td6 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td7 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td8 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-0" checked />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio ext-input">
                        <input type="radio" name="2-0" />
                        <input class="data-input" type="text" value="" />
                      </label>
                    </td>
                    <td class="td10 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td11 data">
                      <div class="data-func">
                        <a class="func-ok">
                          <span class="faci-check"></span>
                        </a>
                        <a class="func-cancel">
                          <span class="faci-close"></span>
                        </a>
                        <a class="func-del">
                          <span class="faci-delete"></span>
                        </a>
                        <a class="func-clone">
                          <span class="faci-File4"></span>
                        </a>
                        <a class="func-edit">
                          <span class="faci-edit"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="row-view">
                    <td class="td1 data">2</td>
                    <td class="td2 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td3 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td4 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td5 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td6 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td7 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td8 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-2" checked />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio ext-input">
                        <input type="radio" name="2-2" />
                        <input class="data-input" type="text" value="" />
                      </label>
                    </td>
                    <td class="td10 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td11 data">
                      <div class="data-func">
                        <a class="func-ok">
                          <span class="faci-check"></span>
                        </a>
                        <a class="func-cancel">
                          <span class="faci-close"></span>
                        </a>
                        <a class="func-del">
                          <span class="faci-delete"></span>
                        </a>
                        <a class="func-clone">
                          <span class="faci-File4"></span>
                        </a>
                        <a class="func-edit">
                          <span class="faci-edit"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="row-edit">
                    <td class="td1 data">3</td>
                    <td class="td2 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td3 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td4 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td5 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td6 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td7 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td8 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio ext-input">
                        <input type="radio" name="2-3" />
                        <input class="data-input" type="text" value="" />
                      </label>
                    </td>
                    <td class="td10 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td11 data">
                      <div class="data-func">
                        <a class="func-ok">
                          <span class="faci-check"></span>
                        </a>
                        <a class="func-cancel">
                          <span class="faci-close"></span>
                        </a>
                        <a class="func-del">
                          <span class="faci-delete"></span>
                        </a>
                        <a class="func-clone">
                          <span class="faci-File4"></span>
                        </a>
                        <a class="func-edit">
                          <span class="faci-edit"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="row-new">
                    <td class="td1 data">4</td>
                    <td class="td2 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td3 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td4 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td5 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td6 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td7 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td8 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="2-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio ext-input">
                        <input type="radio" name="2-4" />
                        <input class="data-input" type="text" value="" />
                      </label>
                    </td>
                    <td class="td10 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td11 data">
                      <div class="data-func">
                        <a class="func-ok">
                          <span class="faci-check"></span>
                        </a>
                        <a class="func-cancel">
                          <span class="faci-close"></span>
                        </a>
                        <a class="func-del">
                          <span class="faci-delete"></span>
                        </a>
                        <a class="func-clone">
                          <span class="faci-File4"></span>
                        </a>
                        <a class="func-edit">
                          <span class="faci-edit"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="tb-add-row">
                <a>
                  <span class="faci-add"></span>
                </a>
              </p>
            </div>
          </div>
          <div class="tab-pane fade" id="tab_mo" role="tabpanel" aria-labelledby="mo-tab">
            <div class="tb-content">
              <table class="tb-data imp-tb t2">
                <thead>
                  <tr>
                    <td rowspan="2" class="td1">STT</td>
                    <td rowspan="2" class="td2">
                      <?= lang('_part'); ?>
                    </td>
                    <td rowspan="2" class="td3">
                      <?= lang('_maintenance_job'); ?>
                    </td>
                    <td rowspan="2" class="td4">Chủng loại gốc</td>
                    <td rowspan="2" class="td5">Chủng loại sử dụng</td>
                    <td rowspan="2" class="td6">
                      <?= lang('_material_code'); ?>
                    </td>
                    <td rowspan="2" class="td7">
                      <?= lang('_amount'); ?>
                    </td>
                    <td rowspan="2" class="td8">SL vị trí</td>
                    <td colspan="8" class="td9">
                      <?= lang('_maintenance_time'); ?>
                    </td>
                    <td rowspan="2" class="td10">
                      <?= lang('_lim'); ?>
                    </td>
                    <td rowspan="2" class="td11">Chức năng</td>
                  </tr>
                  <tr>
                    <td class="td9-child">e.W</td>
                    <td class="td9-child">1M</td>
                    <td class="td9-child">2M</td>
                    <td class="td9-child">3M</td>
                    <td class="td9-child">6M</td>
                    <td class="td9-child">1Y</td>
                    <td class="td9-child">2Y</td>
                    <td class="td9-child">Khác</td>
                  </tr>
                </thead>

                <tbody>
                  <tr class="row-view">
                    <td class="td1 data">1</td>
                    <td class="td2 data">
                      <input class="data-input data-warn" type="text" required value="Máy cơ điện" />
                    </td>
                    <td class="td3 data">
                      <input class="data-input data-warn" type="text" required value="Bảo trì sửa chữa" />
                    </td>
                    <td class="td4 data">
                      <input class="data-input data-warn" type="text" required value="Lorem dummy text" />
                    </td>
                    <td class="td5 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td6 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td7 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td8 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-0" checked />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-0" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio ext-input">
                        <input type="radio" name="3-0" />
                        <input class="data-input" type="text" value="" />
                      </label>
                    </td>
                    <td class="td10 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td11 data">
                      <div class="data-func">
                        <a class="func-ok">
                          <span class="faci-check"></span>
                        </a>
                        <a class="func-cancel">
                          <span class="faci-close"></span>
                        </a>
                        <a class="func-del">
                          <span class="faci-delete"></span>
                        </a>
                        <a class="func-clone">
                          <span class="faci-File4"></span>
                        </a>
                        <a class="func-edit">
                          <span class="faci-edit"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="row-view">
                    <td class="td1 data">2</td>
                    <td class="td2 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td3 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td4 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td5 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td6 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td7 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td8 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-2" checked />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-2" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio ext-input">
                        <input type="radio" name="3-2" />
                        <input class="data-input" type="text" value="" />
                      </label>
                    </td>
                    <td class="td10 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td11 data">
                      <div class="data-func">
                        <a class="func-ok">
                          <span class="faci-check"></span>
                        </a>
                        <a class="func-cancel">
                          <span class="faci-close"></span>
                        </a>
                        <a class="func-del">
                          <span class="faci-delete"></span>
                        </a>
                        <a class="func-clone">
                          <span class="faci-File4"></span>
                        </a>
                        <a class="func-edit">
                          <span class="faci-edit"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="row-edit">
                    <td class="td1 data">3</td>
                    <td class="td2 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td3 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td4 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td5 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td6 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td7 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td8 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-3" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio ext-input">
                        <input type="radio" name="3-3" />
                        <input class="data-input" type="text" value="" />
                      </label>
                    </td>
                    <td class="td10 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td11 data">
                      <div class="data-func">
                        <a class="func-ok">
                          <span class="faci-check"></span>
                        </a>
                        <a class="func-cancel">
                          <span class="faci-close"></span>
                        </a>
                        <a class="func-del">
                          <span class="faci-delete"></span>
                        </a>
                        <a class="func-clone">
                          <span class="faci-File4"></span>
                        </a>
                        <a class="func-edit">
                          <span class="faci-edit"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                  <tr class="row-new">
                    <td class="td1 data">4</td>
                    <td class="td2 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td3 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td4 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td5 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td6 data">
                      <input class="data-input data-warn" type="text" required value="" />
                    </td>
                    <td class="td7 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td8 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio">
                        <input type="radio" name="3-4" />
                      </label>
                    </td>
                    <td class="td9-child">
                      <label class="data-radio ext-input">
                        <input type="radio" name="3-4" />
                        <input class="data-input" type="text" value="" />
                      </label>
                    </td>
                    <td class="td10 data">
                      <input class="data-input" type="text" value="" />
                    </td>
                    <td class="td11 data">
                      <div class="data-func">
                        <a class="func-ok">
                          <span class="faci-check"></span>
                        </a>
                        <a class="func-cancel">
                          <span class="faci-close"></span>
                        </a>
                        <a class="func-del">
                          <span class="faci-delete"></span>
                        </a>
                        <a class="func-clone">
                          <span class="faci-File4"></span>
                        </a>
                        <a class="func-edit">
                          <span class="faci-edit"></span>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p class="tb-add-row">
                <a>
                  <span class="faci-add"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="qb-dialog" id="dl_pcv">
  <div class="qb-dialog-overlay">
    <div class="container-fluid qb-dialog-body">

      <!-- Header Dialog -->
      <div class="qb-dialog-header">
        <div class="row">
          <div class="col-12">
            <span class="faci-votes ic-title-dialog"></span>
            <h3 class="title-dialog"><?= lang('_ticket_work'); ?></h3>
            <a href="#" class="faci-close ic-close-dialog close-dialog"></a>
          </div>
        </div>
      </div>

      <!-- Content Dialog -->
      <div class="qb-dialog-content">
        <div class="tabbable">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#pieper_work">
                <span class="faci-CongViec icon"></span>
                <span class="title-tab"><?= lang('_work'); ?></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#pieper_report" id="tab_report">
                <span class="faci-baocaocv icon"></span>
                <span class="title-tab"><?= lang('_report_work'); ?></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#pieper_history" id="tab_history">
                <span class="faci-lichsubaocao icon"></span>
                <span class="title-tab"><?= lang('_history_report'); ?></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#pieper_documentCV">
                <span class="faci-tailieucv icon"></span>
                <span class="title-tab"><?= lang('_documents_work'); ?></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#pieper_documentTB">
                <span class="faci-tailieuTB icon"></span>
                <span class="title-tab"><?= lang('_document_device'); ?></span>
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="pieper_work" class="tab-pane active">
              <!-- append code here -->
            </div>
            <!-- end #pieper_work -->

            <div id="pieper_report" class="tab-pane pieper_report">
              <h1 class="title"><?= lang('_list_check'); ?></h1>
              <div class="list-item" id="list-item">
                <!-- append code here -->
              </div>
              <div class="row">
                <span class="col-md-12 title-range"><?= lang('_ratio_complete'); ?>
                  <span id="sb_complete_val" style="font-weight: bold;"></span>
                </span>
              </div>
              <div class="row">
                <div class="col-md-5">
                  <input type="range" min="0" max="100" step="1" id="sb_complete_work" class="seekbar" data-bind="value : $root.pnCN315, event: { change : $root.changeRatioComplete }">
                </div>
                <div class="col-md-7">
                  <span class="title-date"><?= lang('_excution_time'); ?></span>
                  <div class="qb-daterange">
                    <i class="faci-calendar qb-icon-ca"></i>
                    <input type="text" class="daterange date-time-complete" name="date-time-complete"/>
                    <input type="hidden" name="CD301" /> 
                    <input type="hidden" name="CD302" />
                    <i id="icon-down" class="faci-arrow-down qb-icon-down"></i>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <p class="col-md-12 title-text p-0"><?= lang('_description'); ?><a href="#" class="faci-arrow-right ic-right rotate-down"></a></p>
                  <textarea class="txt-describe" name="des-report"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12 note-report d-none">
                  <p class="col-md-12 title-text p-0"><?= lang('_note_maintenance_nearest'); ?><a href="#" class="faci-arrow-right ic-right rotate-down"></a></p>
                  <textarea class="txt-describe" name="note-report"></textarea>
                </div>
              </div>
              <div class="qb-footer">
                <a class="qb-exit close-dialog"><?= lang('_btn_close'); ?></a>
                <a class="qb-save" id="btn_report"><?= lang('_btn_save'); ?></a>
              </div>
            </div>
            <!-- end #pieper_report -->

            <div id="pieper_history" class="tab-pane pieper_history">
              <div class="header-page">
                <span class="title-page"><?= lang('_total'); ?></span>
                <span id="num_page" class="num_page" name="ROWSS">0</span>
                <span class="pagin"><span name="FROM">0</span> - <span name="TO">0</span> of <span name="ROWSS">0</span></span>
                <a href="#" class="faci-arrow-lineL btn-L" lang="-1" id="prev"></a>
                <a href="#" class="faci-arrow-lineR btn-R" lang="1" id="next"></a>
              </div>
              <div class="content">
                <!-- append code here -->
              </div>
            </div>
            <!-- end #pieper_history -->

            <div id="pieper_documentCV" class="tab-pane pieper_documentCV">
<!--              <div class="dl-document-attach">
                <div class="document-attach-content">
                  <div class="row">
                    <div class="col-6 p-0">
                      <div class="left" style="padding-left: 35px;">
                        <label class="float-left"><?= lang('_upload_here'); ?></label>
                        <form>
                          <label for="doc1-upload" class="custom-file-upload">
                            <span class="faci-add ic-add"></span><?= lang('_chose_file'); ?>
                          </label>
                          <input id="doc1-upload" type="file" style="display:none;" data-bind="event: {change: $root.uploadFileListB200}"/>
                        </form>
                        <div data-bind="foreach: $root.listDocumentsUpload" class="list-file-upload">
                          <div class="progress-upload" data-bind="attr: { 'data-id' : id }">
                            <span class="name-file" data-bind="text: name"></span>
                            <div class="float-right">
                              <span class="file-capacity" data-bind="text: getSizeFile(size)"></span>
                            </div>
                            <div class="clearfix"></div>
                            <div class="progress">
                              <div class="progress-bar" role="progressbar" style="width: 0%" data-bind="attr: { id : id }"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6">
                      <div class="right">
                        <div class="header-right">
                          <span class="sp_name_file"><?= lang('_name_file'); ?></span>
                          <label class="custom-control custom-checkbox float-right">
                            <input type="checkbox" class="custom-control-input" data-bind="checked: $root.isCheckAllDownLoad">
                            <span class="custom-control-indicator"></span>
                          </label>
                        </div>
                        <ul data-bind="foreach: $root.listM650">
                          <li>
                            <span data-bind="text: MV652"></span>
                            <div class="item-right">
                              <a href="#" class="faci-Combined-Shape ic-download icon" data-bind="click: $root.downloadFile.bind($data,MV652, 1)"></a>
                              <a href="#" class="faci-delete ic-delete-file icon" data-bind="click: $root.stornoTabM650.bind($data, PM650, MV652, 1);"></a>
                              <label class="custom-control custom-checkbox float-right">
                                <input type="checkbox" class="custom-control-input" data-bind="attr: { value: MV652 }, checked: $root.listItemDownload">
                                <span class="custom-control-indicator"></span>
                              </label>
                            </div>
                          </li>
                        </ul>
                        <div class="footer-right">
                          <a href="#" class="btn-download" data-bind="click: $root.downloadFile.bind($data, undefined, 1)"><span class="faci-Combined-Shape ic-download-file"></span><?= lang('_download_file_chose'); ?></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>-->
            </div>
            <div id="pieper_documentTB" class="tab-pane pieper_documentTB">
              <!-- <div class="header-page">
                <span class="title-page">Tổng số </span>
                <span id="num_page" class="num_page">3</span>
                <span class="pagin">1 - 3 of 3</span>
                <i class="faci-arrow-lineL btn-L" href="#"></i>
                <i class="faci-arrow-lineR btn-R" href="#"></i>
              </div>
              <table class="table">
                <thead>
                  <tr>
                    <th class="th1" width="20%">Tên tập tin</th>
                    <th class="th2" width="40%">Ghi chú của kỳ BT gần nhất</th>
                    <th class="th3">Thời gian cập nhật</th>
                    <th class="th4">Nhân vật cập nhật</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="td1">Ipsum is simply dummy text of the printing .</td>
                    <td class="td2">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </td>
                    <td class="td3">23/7/2017</td>
                    <td class="td4">23/7/2017</td>
                  </tr>
                  <tr>
                    <td class="td1">Ipsum is simply dummy text of the printing .</td>
                    <td class="td2">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </td>
                    <td class="td3">23/7/2017</td>
                    <td class="td4">23/7/2017</td>
                  </tr>
                  <tr>
                    <td class="td1">Ipsum is simply dummy text of the printing .</td>
                    <td class="td2">The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. </td>
                    <td class="td3">23/7/2017</td>
                    <td class="td4">23/7/2017</td>
                  </tr>
                </tbody>
              </table> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
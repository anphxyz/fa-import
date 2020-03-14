<div class="page-pm">
  <div class="content">
    <?php $this->load->view('admin/admin_toolbar'); ?>
    <div class="content-body">
      <ul data-bind="foreach: s200_arr" id="s200_arr">
        <li data-bind="attr: {'lang': PS200}">
          <span data-bind="text: SV201"></span>
          <div class="item-tool-right">
            <a href="#" class="faci-File3"></a>
            <a href="#" class="faci-edit"></a>
            <a href="#" class="faci-delete"></a>
            <a href="#" class="faci-gear"></a>
            <a href="#" class="faci-machinery"></a>
            <a href="#" class="faci-file ic-file"></a>
            <a href="#" class="faci-image"></a>
          </div>
          <input type="hidden" name="s200" data-bind="value: ko.toJSON($data)">
        </li>
      </ul>
    <div id="image" class="">
      <div class="qb-pagination image" lang="image">
        <input class="rowss" type="hidden">
        <input class="target" type="hidden">
      <!-- </div> -->
    </div>

    <!-- Dialog Them Edit May Thiet Bi -->
    <div class="qb-dialog" id="dialog_insert_s200">
      <div class="qb-dialog-overlay">
        <div class="container-fluid qb-dialog-body">

          <!-- Header Dialog -->
          <div class="qb-dialog-header">
            <div class="row">
              <div class="col-12">
                <h3 class="title-dialog">MÁY / THIẾT BỊ</h3>
                <a href="#" class="faci-close ic-close-dialog close-dialog"></a>
              </div>
            </div>
          </div>

          <!-- Content Dialog -->
          <div class="qb-dialog-content">
            <form id="insert_s200" class="hidden"></form>
              <div class="form-group row">
                <label class="col-4 col-form-label text-right">Máy/thiết bị*</label>
                <div class="col-8 p-0">
                  <input form="insert_s200" name="SV201" type="text" class="form-control">
                </div>
              </div>
              <div class="form-group row">
                <label class="col-4 col-form-label text-right">Thông tin đính kèm</label>
                <div class="col-8 p-0">
                  <input form="insert_s200" name="SV202" type="text" class="form-control">
                </div>
              </div>
              <div class="form-group row">
                <label class="col-4 col-form-label text-right">Mã máy / mã thiết bị*</label>
                <div class="col-8 p-0">
                  <input form="insert_s200" name="SV205" type="text" class="form-control">
                </div>
              </div>
              <div class="form-group row">
                <label class="col-4 col-form-label text-right">Số thứ tự</label>
                <div class="col-8 p-0">
                  <input form="insert_s200" name="X001" type="text" class="form-control">
                </div>
              </div>
              <div class="form-group row">
                <label class="col-4 col-form-label text-right">Tên tập tin</label>
                <div class="col-8 p-0">
                  <input form="insert_s200" name="X002" type="text" class="form-control">
                </div>
              </div>
          </div>

          <!-- Footer Dialog -->
          <div class="qb-dialog-footer">
            <div class="row justify-content-end">
              <div class="col-12 text-right">
                <a href="#" class="btn-close close-dialog">ĐÓNG</a>
                <a href="#" class="btn-save">LƯU</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Dialog Them Edit May Thiet Bi -->

    <!-- Dialog Upload File -->
    <div class="qb-dialog" id="dialog_M650">
      <div class="qb-dialog-overlay">
        <div class="container-fluid qb-dialog-body">

          <!-- Header Dialog -->
          <div class="qb-dialog-header">
            <div class="row">
              <div class="col-12">
                <span class="faci-votes ic-title-dialog"></span>
                <h3 class="title-dialog">TÀI LIỆU ĐÍNH KÈM</h3>
                <a href="#" class="faci-close ic-close-dialog close-dialog"></a>
              </div>
            </div>
          </div>

          <!-- Content Dialog -->
          <div class="qb-dialog-content">
            <div class="moda-job">
              <div class="tabbable dialog-document-attach">
                <ul class="nav nav-tabs" role="tablist">
                  <li class="nav-item">
                    <a class="nav-link active" role="tab" data-toggle="tab" href="#tab_image">
                      <span class="faci-image icon"></span>
                      <span class="title-tab">Hình ảnh</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" role="tab" data-toggle="tab" href="#tab_film">
                      <span class="faci-film-strips-video-player icon"></span>
                      <span class="title-tab">Phim</span>
                    </a>
                  </li>
                </ul>
                <div class="tab-content">
                  <div id="tab_image" role="tabpanel" class="tab-pane active">
                    <div class="document-attach-content">
                      <div class="row">
                        <div class="col-6 p-0">
                          <div class="left">

                            <label>Tải lên ở đây</label>
                            <label for="file-upload" class="custom-file-upload">
                              <span class="faci-add ic-add"></span> Chọn file
                            </label>
                            <input id="file-upload" type="file" style="display:none;" />

                            <div class="progress-upload">
                              <span class="name-file">Screenshot 14 12535 5435.png</span>
                              <div class="float-right">
                                <span class="file-capacity">4.4MB</span>
                                <a href="#" class="faci-delete ic-delete icon"></a>
                              </div>
                              <div class="clearfix"></div>
                              <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>

                            <div class="progress-upload">
                              <span class="name-file">CanhdepDalat.png</span>
                              <div class="float-right">
                                <span class="file-capacity">1.2MB</span>
                                <a href="#" class="faci-delete icon ic-delete"></a>
                              </div>
                              <div class="clearfix"></div>
                              <div class="progress">
                                <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                            </div>

                            <div class="bottom">
                              <a href="#" class="btn-close">
                                <span class="faci-delete icon"></span>Đóng</a>
                              <a href="#" class="btn-upload">
                                <span class="faci-logout icon"></span>Tải file</a>
                            </div>

                          </div>
                        </div>
                        <div class="col-6">
                          <div class="right">
                            <ul>
                              <li>
                                <span>TÊN FILE</span>
                                <input type="checkbox" id="c1" name="cb" class="qb-checkbox" />
                                <label for="c1" class="qb-checkbox-label"></label>
                              </li>
                              <li>
                                <span>tutorial_mackbook.pdf</span>
                                <div class="item-right">
                                  <a href="#" class="faci-Combined-Shape ic-download icon"></a>
                                  <a href="#" class="faci-delete ic-delete-file icon"></a>
                                  <input type="checkbox" id="c2" name="cb" class="qb-checkbox" />
                                  <label for="c2" class="qb-checkbox-label"></label>
                                </div>
                              </li>
                              <li>
                                <span>adobe_cc_2016.jpg</span>
                                <div class="item-right">
                                  <a href="#" class="faci-Combined-Shape ic-download icon"></a>
                                  <a href="#" class="faci-delete ic-delete-file icon"></a>
                                  <input type="checkbox" id="c3" name="cb" class="qb-checkbox" />
                                  <label for="c3" class="qb-checkbox-label"></label>
                                </div>
                              </li>
                            </ul>
                            <a href="#" class="btn-download">
                              <span class="faci-Combined-Shape ic-download-file"></span>Tải xuống file đã chọn</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab_film" role="tabpanel" class="tab-pane pieper_report">
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <!-- End Dialog Upload File -->
    <!-- </div>
        </div> -->
  </div>
  <!-- content-body -->
  <!-- </div> -->
</div>
<!-- End Page Tab Du Lieu Goc Nhan Vien -->
</div
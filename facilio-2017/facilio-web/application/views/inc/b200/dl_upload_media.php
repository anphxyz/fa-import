<!-- Dialog Upload File -->
<div class="qb-dialog" id="dl_upload_file">
  <div class="qb-dialog-overlay">
    <div class="container-fluid qb-dialog-body">

      <!-- Header Dialog -->
      <div class="qb-dialog-header">
        <div class="row">
          <div class="col-12">
            <span class="faci-votes ic-title-dialog"></span>
            <h3 class="title-dialog"><?= lang('_document_attach'); ?></h3>
            <a href="#" class="faci-close ic-close-dialog close-dialog"></a>
          </div>
        </div>
      </div>

      <!-- Content Dialog -->
      <div class="qb-dialog-content">
        <div class="tabbable dl-document-attach">
          <ul class="nav nav-tabs">
            <li class="nav-item">
              <a class="nav-link active" href="#tab_pane_image" data-bind="click: $root.loadListM650.bind($data, $root.itemListOfTabB200().PB050, $root.itemListOfTabB200().PC150, 2, 'B200', 0);">
                <span class="faci-image icon"></span>
                <span class="title-tab"><?= lang('_image'); ?></span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#tab_pane_film" data-bind="click: $root.loadListM650.bind($data, $root.itemListOfTabB200().PB050, $root.itemListOfTabB200().PC150, 3, 'B200', 0);">
                <span class="faci-film-strips-video-player icon"></span>
                <span class="title-tab"><?= lang('_film'); ?></span>
              </a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="tab_pane_image" class="tab-pane active">
              <div class="document-attach-content">
                <div class="row">
                  <div class="col-6 p-0">
                    <div class="left">
                      <label class="float-left"><?= lang('_upload_here'); ?></label>
                      <form id="file_image_upload">
                        <label for="file-upload" class="custom-file-upload">
                          <span class="faci-add ic-add"></span><?= lang('_chose_file'); ?>
                        </label>
                        <input id="file-upload" type="file" style="display:none;" accept="image/*" data-bind="event: {change: $root.uploadFileListB200}"/>
                      </form>
                      <div data-bind="foreach: $root.listImagesUpload" class="list-file-upload">
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
                            <a href="#" class="faci-Combined-Shape ic-download icon" data-bind="click: $root.downloadFile.bind($data,MV652, 2)"></a>
                            <a href="#" class="faci-delete ic-delete-file icon" data-bind="click: $root.stornoTabM650.bind($data, PM650, MV652, 2);"></a>
                            <label class="custom-control custom-checkbox float-right">
                              <input type="checkbox" class="custom-control-input" data-bind="attr: { value: MV652 }, checked: $root.listItemDownload">
                              <span class="custom-control-indicator"></span>
                            </label>
                          </div>
                        </li>
                      </ul>
                      <div class="footer-right">
                        <a href="#" class="btn-download" data-bind="click: $root.downloadFile.bind($data, undefined, 2)"><span class="faci-Combined-Shape ic-download-file"></span><?= lang('_download_file_chose'); ?></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="tab_pane_film" class="tab-pane pieper_report">
              <div class="document-attach-content">
                <div class="row">
                  <div class="col-6 p-0">
                    <div class="left">
                      <label class="float-left"><?= lang('_upload_here'); ?></label>
                      <form id="file_film_upload">
                        <label for="film-upload" class="custom-file-upload">
                          <span class="faci-add ic-add"></span><?= lang('_chose_file'); ?>
                        </label>
                        <input id="film-upload" type="file" style="display:none;" accept="video/*" data-bind="event: {change: $root.uploadFileListB200}"/>
                      </form>
                      <div data-bind="foreach: $root.listFilmsUpload" class="list-file-upload">
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
                            <a href="#" class="faci-Combined-Shape ic-download icon" data-bind="click: $root.downloadFile.bind($data, MV652, 3)"></a>
                            <a href="#" class="faci-delete ic-delete-file icon" data-bind="click: $root.stornoTabM650.bind($data, PM650, MV652, 3);"></a>
                            <label class="custom-control custom-checkbox float-right">
                              <input type="checkbox" class="custom-control-input" data-bind="attr: { value: MV652 }, checked: $root.listItemDownload">
                              <span class="custom-control-indicator"></span>
                            </label>
                          </div>
                        </li>
                      </ul>
                      <div class="footer-right">
                        <a href="#" class="btn-download" data-bind="click: $root.downloadFile.bind($data, undefined, 3)"><span class="faci-Combined-Shape ic-download-file"></span><?= lang('_download_file_chose'); ?></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- End Dialog Upload File -->


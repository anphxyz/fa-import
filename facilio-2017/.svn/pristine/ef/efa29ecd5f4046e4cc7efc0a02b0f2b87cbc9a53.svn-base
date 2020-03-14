<!-- Dialog Upload File -->
<div class="qb-dialog" id="dl_list_m650">
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
        <div class="dl-document-attach">
          <div class="document-attach-content">
            <div class="row">
              <div class="col-12">
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
        </div>
      </div>
    </div>
  </div>
</div>
<!-- End Dialog Upload File -->




<?php
echo "<pre>";
//print_r($data);
//print_r($_SESSION);
echo "</pre>";
?>

<div class="materials-page">
    <div class="container-fluid">
        <div class="pm-toolbar">
            <div class="row">
                <div class="col-4">
                    <button type="button" class="btn qb-button btn-pm active">Phiếu yêu cầu</button>
                    <button type="button" class="btn qb-button btn-pm">Vật tư bôi trơn</button>
                    <button type="button" class="btn qb-button btn-pm">Chi phí vật tư</button>
                </div>
                <div class="col-8">
                    <div class="row justify-content-end">
                        <ul class="ul-toolbar">
                            <li>
                                <div class="dropdown">
                                    <button class="qb-dropdown dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bind="text: textCombN100L"> 
                                    </button>
                                    <div class="dropdown-menu" data-bind="foreach: listCombTabV750">
                                        <a class="dropdown-item qb-dropdown-item" href="#" data-bind="text: LABEL, click : function(){ $parent.loadListOfTabV750($data.VAL, $data.LABEL)}"></a>
                                    </div>
                                </div>
                            </li>
                            <li class="btn-status btn-navigation-right btn-form-requirements btn-left" data-bind="click : loadDialogRequirement">
                                <span class="faci-historical-report"></span>
                                <a href="#">Phiếu yêu cầu</a>
                            </li>
                            <li class="btn-left">
                                <span class="faci-update"></span>
                                <a href="#">Cập nhật dữ liệu</a>
                            </li>
                            <li class="btn-left btn-check-inventory">
                                <span class="faci-storage "></span>
                                <a href="#">Kiểm tra tồn kho</a>
                            </li>
                        </ul>
                    </div>
                    <!-- div time report -->
                    <div class="time-report d-none">
                        <ul class="lst-time">
                            <li><?= lang('_today'); ?></li>
                            <li><?= lang('_tomorrow'); ?></li>
                            <li><?= lang('_this_week'); ?></li>
                            <li><?= lang('_day_to_day'); ?></li>
                        </ul>
                    </div>
                    <!-- end div time report -->
                </div>
            </div>
        </div>
        <!-- End Toolbar -->
        <div class="tb-content materials-table">
            <div class="row">
                <div class="col-12">
                    <table class="table table-responsive qb-table" id="materials_table">
                        <thead>
                            <tr class="header-table">
                                <th class="th-1"></th>
                                <th class="th-2"></th>
                                <th class="th-3">Phiếu yêu cầu</th>
                                <th class="th-4">Người lập phiếu</th>
                                <th class="th-5">Người nhận</th>
                                <th class="th-6">Mục đích</th>
                                <th class="th-7">Phòng ban nhận</th>
                                <th class="th-8">Ngày yêu cầu</th>
                                <th class="th-9">Ngày cần vật tư</th>
                                <th class="th-10">Phiếu yêu cầu EBS</th>
                                <th class="th-11">Trạng thái</th>
                                <th class="th-12">Ghi chú</th>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td class="menu-control-record">
                                    <span class="edit-menu faci-edit"></span>
                                    <span class="delete-menu faci-delete"></span>
                                </td>
                                <td class="material-check">
                                    <label class="faci-check"></label>
                                    <button class="btn-material-view">
                                        <span class="faci-add"></span>
                                        Vật tư
                                    </button>
                                </td>
                                <td>NMBP-000184</td>
                                <td>Lưu Toàn Định</td>
                                <td>Lưu Toàn Định</td>
                                <td>Xuất kho</td>
                                <td>Nội dung</td>
                                <td>24/03/2016</td>
                                <td >24/03/2016</td>
                                <td>YCX11-207/1017-4</td>
                                <td >IN PROCESS</td>
                                <td>It uses a dictionary ofve 200 Latin </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <!-- End Content -->
        <!-- Pagination -->
        <?php echo $this->load->view('inc/paging/paging'); ?>
    </div>
</div>
<?php echo $this->load->view('inc/v750/requirement'); ?>
<?php echo $this->load->view('inc/v750/popup_check_inventory'); ?>
<div class="page-pm">
    <!-- Start Page Tab Du Lieu Goc Nhan Vien -->
    <!-- <div class="container-fluid"> -->
        <div class="content">
            <!-- Top Page -->
            <?php $this->load->view('admin/admin_toolbar'); ?>
            <!-- End Top Page -->

            <!-- Page Body -->
            <div class="content-body">
                <div class="content-data-root">
                    <div class="data-root-body">

                        <div class="top-body">
                        </div>

                        <div class="content-body">
                            <div class="row">
                                <div class="col-12">
                                    <ul id="n850_arr" class="list-group-personnel" data-bind="foreach: n850_arr">
                                        <li data-bind="attr: {'lang': PN850}">
                                            <a href="#" class="faci-eye ic-eye"></a>
                                            <span class="title-item" data-bind="text: NV852 + ' (' + NV851 + ')'"></span>
                                            <div class="list-ic-right">
                                                <a href="#" class="faci-users ic-user-group"></a>
                                                <a href="#" class="faci-use3 ic-user"></a>
                                                <a href="#" class="faci-edit ic-edit"></a>
                                                <a href="#" class="faci-delete ic-delete"></a>
                                            </div>
                                            <input type="hidden" name="n850" data-bind="value: ko.toJSON($data)">
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <!-- Popup Slider List User Group -->
                        <div class="popup-slider" id="popup_slider_n900">
                            <div class="popup-slider-content popup-slider-small">

                                <div class="popup-slider-small-top">
                                    <div class="row">
                                        <div class="col-12">
                                            <h3>Tổ sửa chữa công trình (10)</h3>
                                            <a href="#" class="close-popup-slider">
                                                <span class="faci-close close-slide"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div class="popup-slider-small-search">
                                    <div class="row justify-content-end">
                                        <input type="text" class="form-control input-search">
                                        <a href="#" class="faci-search ic-search">
                                            <span class="path2"></span>
                                        </a>
                                    </div>
                                </div>

                                <div class="popup-slider-small-body">
                                    <div class="user-loading">
                                        <img src="http://facilionew.queenb.vn/html/images/faci-loading-mini.gif">
                                    </div>
                                    <ul class="hidden" data-bind="foreach: n900_arr" id="n900">
                                        <li data-bind="attr: {'lang': PN100}, text: ($index()+ 1) +'. '+ HOTEN">
                                            <!-- <input type="hidden" name="n900r" data-bind="attr: {'value': ko.toJSON($data)}"> -->
                                        </li>
                                    </ul>

                                    <ul class="hidden" data-bind="foreach: n900rl_emp" id="n900_emp">
                                        <li data-bind="attr: {'lang': PN100}">
                                            <span data-bind="text: HOTEN"></span>
                                            <div class="switch_box">
                                                <input type="checkbox" class="switch_cb" data-bind="{attr: {'checked': !!$data.FN850}}">
                                            </div>
                                            <input type="hidden" name="n900" data-bind="value: ko.toJSON($data)">
                                        </li>
                                    </ul>

                                    <ul class="hidden" data-bind="foreach: n900rl_group" id="n900_group">
                                        <li data-bind="attr: {'lang': PN100}">
                                            <span data-bind="text: HOTEN"></span>
                                            <div class="switch_box">
                                                <input type="checkbox" class="switch_cb" data-bind="{attr: {'checked': !!$data.FN850}}">
                                            </div>
                                            <input type="hidden" name="n900" data-bind="value: ko.toJSON($data)">
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        <!-- End Popup Slider List User Group -->                        

                        <!-- Dialog Them Edit Nhom Nhan Vien -->
                        <div class="qb-dialog" id="edit_user_mangager_group">
                            <div class="qb-dialog-overlay">
                                <div class="container-fluid qb-dialog-body">

                                    <!-- Header Dialog -->
                                    <div class="qb-dialog-header">
                                        <div class="row">
                                            <div class="col-12">
                                                <h3 class="title-dialog">NHÓM NHÂN VIÊN</h3>
                                                <a href="#" class="faci-close ic-close-dialog close-dialog"></a>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Content Dialog -->
                                    <div class="qb-dialog-content">
                                        <form class="form-add-user-mangager-group" id="add_emp_group">
                                            <div class="form-group row">
                                                <label class="col-4 col-form-label text-right">Tên viết tắt*</label>
                                                <div class="col-8 p-0">
                                                    <input form="add_emp_group" name="pnNV852" type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-4 col-form-label text-right">Tên nhóm*</label>
                                                <div class="col-8 p-0">
                                                    <input form="add_emp_group" name="pnNV851" type="text" class="form-control">
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-4 col-form-label text-right">Hiển thị</label>
                                                <div class="col-8 p-0">
                                                    <div class="switch_box switch">
                                                        <input form="add_emp_group" id="" type="radio" name="pnNV853" value="N" checked="checked">
                                                        <label for=""></label>
                                                        <input form="add_emp_group" id="" type="radio" name="pnNV853" value="Y">
                                                        <label for=""></label>
                                                        <span class="switch-icon"></span>
                                                    </div>
                                                    <span class="faci-hide ic-hide"></span>
                                                </div>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-4 col-form-label text-right">Nhóm trực thuộc</label>
                                                <select form="add_emp_group" name="pnFN850" id="" class="qb-dropdown" data-bind="foreach: com_n850_arr">
                                                    <option data-bind="attr:{'value': VAL}, 'text': LABEL "></option>
                                                </select>
                                            </div>
                                            <div class="form-group row">
                                                <label class="col-4 col-form-label text-right">Xưởng sửa chửa*</label>
                                                <div class="col-8 p-0">
                                                    <input type="checkbox" name="pnNV854" form="add_emp_group" id="c1" class="qb-checkbox" />
                                                    <label for="c1" class="qb-checkbox-label"></label>
                                                </div>
                                            </div>
                                        </form>
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
                        <!-- End Dialog Them Edit Nhom Nhan Vien -->

                    </div>
                </div>
            </div>
            <!-- End Page Body -->

        </div>
    <!-- </div> -->
    <!-- End Page Tab Du Lieu Goc Nhan Vien -->
</div>
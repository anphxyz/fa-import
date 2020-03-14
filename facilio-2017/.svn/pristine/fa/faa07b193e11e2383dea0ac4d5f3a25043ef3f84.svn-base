<div class="page-pm">
    <!-- Start Page Quan Tri He Thong -->
    <div class="container-fluid">
        <div class="content">

            <!-- Top Page -->
            <div class="content-top">
                <div class="row">
                    <div class="col-12">
                        <div class="form-inline">
                            <a class="btn btn-permission" href="#" role="button" id="btn-permission">Phân quyền</a>
                            <div class="dropdown">
                                <button class="btn btn-data-root dropdown-toggle active" type="button" id="btn-data-root">
                                    Dữ liệu gốc
                                </button>
                                <a href="#" class="name-parent-menu">Công ty chi nhánh</a>
                                <span style="font-size: 12px;">/</span>
                                <a href="#" class="name-child-menu">Danh mục quan lý</a>

                                <!-- Popup Menu -->
                                <div class="popup-menu-data-root">
                                    <?= $this->load->view('admin/admin_menu'); ?>
                                </div>
                                <!-- End Popup Menu -->

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End Top Page -->

            <!-- Page Body -->
            <div class="content-body">
                <div class="content-data-root">
                    <!-- Breadcrumb -->
                    <div class="data-root-breadcrumb">
                        <div class="row">
                            <div class="col-sm-12 col-md-8">
                                <nav class="breadcrumb">
                                    <a class="breadcrumb-item link-root" href="#">
                                        <span class="faci-factory ic-link-root"></span>NHA MAY VICEM BIM SON (10006)</a>
                                    <a class="breadcrumb-item active link-child" href="#">DÂY CHUYỀN 3</a>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <!-- End Breadcrumb -->

                    <div class="data-root-body">
                        <div class="top-body">
                            <div class="row">
                                <div class="col-12">
                                    <div class="row justify-content-end">
                                        <a href="#" class="btn-category-manage">
                                            <span class="faci-add ic-add"></span>Danh mục quản lý</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="content-body">
                            <div class="row">
                                <div class="col-md-3 p-0">
                                    <div class="left-content">
                                        <div class="tree"></div>
                                    </div>
                                </div>
                                <div class="col-md-9" style="padding-left: 0;">
                                    <div class="right-content">
                                        <input type="hidden" name="fh200s" value="<?=$data['_FH200S']?>">
                                        <ul id="h200c_arr" class="list-category-manage" data-bind="foreach: h200c_arr">
                                            <li data-bind="attr: {'lang': PH200}">
                                                <span data-bind="text: HV201"></span>
                                                <div class="item-right d-inline float-right">
                                                    <a href="#" class="btn-add">
                                                        <span class="faci-add ic-add"></span>OEE</a>
                                                    <span class="faci-move ic-move"></span>
                                                    <span class="faci-edit ic-edit"></span>
                                                    <span class="faci-delete ic-delete"></span>
                                                </div>
                                                <input type="hidden" name="h200" data-bind="value: ko.toJSON($data)">
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <!-- End Page Body -->

            <!-- Start insert_h450 dialog -->
            <div class="qb-dialog" id="dialog_insert_h450">
                <div class="qb-dialog-overlay">
                    <div class="container-fluid qb-dialog-body">
                        <!-- Header Dialog -->
                        <div class="qb-dialog-header">
                            <div class="row">
                                <div class="col-12">
                                    <span class="faci-user-add ic-title-dialog"></span>
                                    <h3 class="title-dialog">DANH MỤC QUẢN LÝ</h3>
                                    <a href="#" class="faci-close close-dialog ic-close-dialog close-dialog"></a>
                                </div>
                            </div>
                        </div>

                        <!-- Content Dialog -->
                        <div class="qb-dialog-content">
                            <form action="" id="insert_h450">
                                <div class="row">
                                    <label class="col-5 col-form-label text-right" for="">Danh mục quản lý (*)</label>
                                    <input form="insert_h450" type="text" name="HV451" class="form-control">
                                </div>
                                <div class="row">
                                    <label class="col-5 col-form-label text-right" for="">Mô hình (*)</label>
                                    <select form="insert_h450" name="FH250" id="" class="qb-dropdown"></select>
                                </div>
                            </form>
                        </div>
                        <!-- Footer Dialog -->
                        <div class="qb-dialog-footer">
                            <a href="#" class="btn btn-close close-dialog">ĐÓNG</a>
                            <button href="#" class="btn btn-save">LƯU</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End insert_h450 dialog -->        
        </div>
    </div>

    <!-- End Page Quan Tri He Thong -->
</div>

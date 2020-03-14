<div class="qb-dialog" id="dialog_delivery_job">
    <div class="qb-dialog-overlay">
        <div class="container-fluid qb-dialog-body">

            <!-- Header Dialog -->
            <div class="qb-dialog-header">
                <div class="row">
                    <div class="col-12">
                        <span class="faci-votes ic-title-dialog"></span>
                        <h3 class="title-dialog"><?= lang('_delivery_job'); ?></h3>
                        <a href="javascript:void(0)" class="faci-close ic-close-dialog close-dialog"></a>
                    </div>
                </div>
            </div>

            <!-- Content Dialog -->
            <div class="qb-dialog-content">
                <div class="dialog-delivery-job-content">
                    <h3 class="describe-job"><?= lang('_job_description'); ?>: <span data-bind="text: mota"></span></h3>
                    <div class="title-list-delivery-job">
                        <div class="row">
                            <div class="col-sm-6 col-md-6">
                                <h3><?= lang('_list_human_delivery'); ?>:</h3>
                            </div>
                            <div class="col-sm-6 col-md-6">
                                <h3><?= lang('_list_of_assigned_persons'); ?>:</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="box-list-job-left"  data-bind="foreach: listOfTabC650LP10">
                                <div class="box-list-delivery-job">
                                    <p><?= lang('_group'); ?>: <span class="group" data-bind="text: NV851"></span></p>
                                    <p><?= lang('_name'); ?>: <span class="name"data-bind="text: HOTEN"></span></p>
                                    <a href="javascript:void(0)" class="btn-delivery" data-bind="click: insertTabC650.bind($data)"><span class="faci-foward"></span><?= lang('_job_assignment'); ?></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="box-list-job-right" data-bind="foreach: listOfTabC650RPV">
                                <div class="box-list-delivery-job">
                                    <p><?= lang('_group'); ?>: <span class="group" data-bind="text: NV851"></span></p>
                                    <p><?= lang('_name'); ?>: <span class="name"data-bind="text: HOTEN"></span></p>
                                    <a href="javascript:void(0)" class="btn-cancel-delivery" data-bind="click: stornoTabC650.bind($data)"><span class="faci-arrow"></span><?= lang('_cancel_job_assignment'); ?></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</div>

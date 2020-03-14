/*
 * Author: Linhnc
 * Create: 10/12/2017
 */
var LoginViewModel = function () {
    var self = this;
    $.validate({form: '#login_form'});
    /*************************
     ********properties*******
     *************************/
    self.qv101 = ko.observable('NMKL_FACIADMIN');
    self.qv102 = ko.observable('123456789');

    /*************************
     *****event listener******
     *************************/
    self.postLogin = function () {
        showLoading();
        $.ajax({
            type: 'POST',
            url: '/login/do_login',
            data: {
                QV101: self.qv101(),
                QV102: self.qv102()
            },
            dataType: 'json',
            success: function (res) {
                hideLoading();
                res = typeof res === 'string' ? JSON.parse(res) : res;
                if (res.status === 'success')
                    location.reload();
                else
                    swalError(res.message);
            }
        });
        /*************************
         ********bussiness********
         *************************/
    }
};
var loginVM = new LoginViewModel();
ko.applyBindings(loginVM);

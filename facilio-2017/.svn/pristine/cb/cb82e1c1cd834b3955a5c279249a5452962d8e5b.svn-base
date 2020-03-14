/**
 * @Author: hyn
 * @Create: 12/12/2017
 * @Module: b050
 */
var B050ViewModel = function () {
  var self = this;
  // LIST


  // VAR

  self.init = function () {
    self.eventListener();
    if (!!$('#facilio_wrapper.tree-view').length && treePlugin
      && $('.left-content .tree').length) {
      treePlugin.init('.left-content .tree');
    };
  };
  // ==============================================
  // ==============EVENT LISTENER==================
  // ==============================================
  self.eventListener = function () {

    // table - device status
    $(document).off('click', '#device_posi tbody input.switch_cb').on('click', '#device_posi tbody input.switch_cb', function (e) {
      var _this = this,
        stat = $(_this).prop('checked');
      e.preventDefault(); // not 
      swalComfirm(lang['_update_device_status'], '', function (yes) {
        if (!!yes.value) {
          $(_this).prop('checked', stat);
          $(_this).parents('.switch_box').attr('data-original-title',
            $(_this).prop('checked') ? lang['_running'] : lang['_stopping']);
        }
      }, lang['_update'], '');
    });

    // table- device name 
    $(document).off('click', 'input.switch_cb').on('click', 'input.switch_cb', function (e) {

    });
  };
  // 
  self.lst_oftabb050BS = function (pvBV051, pvBV052, pvBV060, pnFN850, pnFS200, pnOFFSET, pnLIMIT, pnSORT, pnDIRECTION) {
    var url = '/b050/lst_oftabb050BS';
    url += '?pvBV051=' + pvBV051 + '&pvBV052=' + pvBV052 + '&pvBV060=' + pvBV060 + '&pnFN850=' + pnFN850 + '&pnFS200=' + pnFS200 + '&pnOFFSET=' + pnOFFSET + '&pnLIMIT=' + pnLIMIT + '&pnSORT=' + pnSORT + 'pnDIRECTION=' + pnDIRECTION;

    $.ajax({
      url: url,
      dataType: 'JSON',
      type: 'GET',
      success: function (res) {
        console.log(res);
      }
    })
  };
}
var b050VM = new B050ViewModel();
ko.applyBindings(b050VM);
b050VM.init();
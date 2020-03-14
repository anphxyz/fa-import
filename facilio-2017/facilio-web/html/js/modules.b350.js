/**
 * @Author: Linhnc
 * @Create: 23/1/2018
 * @Module: b350
 */

window.onload = function () {
	b350Plugin.getInstance().eventListener();
	b350Plugin.getInstance().loadCombTabN850(function () {
		b350Plugin.getInstance().loadListOfTabB350();
	});
}

const b350Plugin = (function () {
  var instance;
  function init() {

    var lstB350 = [],
      fb050 = 0;

    function eventListener() { 

      // Config lib validate
      $.validate({
        form: '#form_update_tabb350b'
      });

      // change dropdown default
      $(document).off('click', '.dropdown-menu > a')
      	.on('click', '.dropdown-menu > a', function (e) {
      		e.preventDefault();
      		var $dropdown = $(this).closest('.dropdown');
      		$dropdown.find('.dropdown-menu > a').removeClass('active');
      		$(this).addClass('active');
      		$dropdown.find('[type="hidden"]').val(this.lang);
      		$dropdown.find('button').text(this.innerText);
      	});

      // submit so gio hoat dong
      $(document).off('submit', '#form_update_tabb350b')
        .on('submit', '#form_update_tabb350b', function(e){
          e.preventDefault();
          updateTabB350B();
        })

      // change combN850
      $(document).off('click', '.item-n850')
      	.on('click', '.item-n850', function (e) {
          e.preventDefault();
      		loadListOfTabB350();
        });
        
      // 
      $(document).off('click', '.fa-plus-circle')
      	.on('click', '.fa-plus-circle', function () {
      		openDialogB350('#dl_update_tabb350b');
          fb050 = +$(this).closest('tr').find("[name='FB050']").val();
      	});

    }

    // Load comb CombTabN850 when page load
    function loadCombTabN850(callback) {
      showLoading();
      $.ajax({
        type: "GET",
        url: "/comb/comb_n850",
        dataType: "json",
        success: function (res) {
          hideLoading();
          res = typeof res === 'string' ? JSON.parse(res) : res;
          $('#comb_n850').html('');
          if (res.status === 'success') {
            $('#comb_n850').append(_comb_n850(res.data));
            !!callback && callback();
          }
        }
      });
    };

    function loadListOfTabB350() {
    	showLoading();
    	var url = "/b350/list_b350",
    		limit = 13,
    		$tbody = $('#pm_table > tbody');
    	$.ajax({
    		type: "GET",
    		url: url,
    		dataType: "json",
    		data: {
          pnFN850: $('#val_n850').val() || 0,
          pnLIMIT: limit
    		},
    		success: function (res) {
    			hideLoading();
    			res = typeof res === 'string' ? JSON.parse(res) : res;
    			if (res.status === 'success') {
    				refreshListB350(res.data);
    				// phan trang
    				$('.qb-pagination').doPagination(lstB350[0].ROWSS, url + '?pnLIMIT=' + limit, limit, function (res) {
    					if (res.status === 'success') 
    						refreshListB350(res.data);
    				});
    			}
    		}
    	});
    };

    function refreshListB350(b350){
    	var $tbody = $('#pm_table > tbody');
        $tbody.html('');
        lstB350 = b350;
        !!lstB350 && lstB350.forEach(function (item) {
          item._id = $tbody.children().length + 1;
          $tbody.append(_tr_b350(item));
        });
    }

    // cap nhat so gio hoat dong
    function updateTabB350B() {
    	showLoading();
    	$.ajax({
    		type: "POST",
    		url: "/b350/update_b350b",
    		data: {
    			pnFB050: fb050 || 0,
    			pnBN351: $('#val_bn351').val() || 0
    		},
    		dataType: "json",
    		success: function (res) {
    			hideLoading();
    			closeDialogB350('#dl_update_tabb350b');
    			res = typeof res === 'string' ? JSON.parse(res) : res;
    			if (res.status === 'success') {
    				loadListOfTabB350();
    				$('#val_bn351').val(0) // set lai BN351 ve 0
    				swalSuccess(null, res.message);
    			} else {
    				swalError(res.message);
    			}
    		}
    	});
    };

    //--- template ---//
    function openDialogB350(idDialog) {

    	$(idDialog).addClass('on');
    	$(idDialog).find('.qb-dialog-overlay').addClass('open');

    	// Close Dialog When Click Body
    	$(document).on('click', idDialog + ' .qb-dialog-overlay', function (e) {
    		if ($(e.target).closest('.qb-dialog-body').length === 0) {
    			$(this).closest(idDialog).removeClass('on');
    			$(this).removeClass('open');
    		}
    	});

    	// Close Dialog When Click Icon Close
    	$(document).on('click', idDialog + ' .close-dialog', function (e) {
    		e.preventDefault();
    		$(this).closest(idDialog).removeClass('on');
    		$(this).closest(idDialog).find('.qb-dialog-overlay').removeClass('open');
    	});
    }

    function closeDialogB350(idDialog) {
      if ($(idDialog).hasClass('on')) {
        $(idDialog).removeClass('on');
        $(idDialog + ' .qb-dialog-overlay').removeClass('open');
      }
    }

    function _comb_n850(n850) {
      var $div = '';
      if (n850.length > 0) {
        $div = $('<div>', { class: 'dropdown-menu' });
        n850.forEach(function (item) {
          $div.append($('<a>', { href: '#', class: 'dropdown-item qb-dropdown-item item-n850', html: item.LABEL || '', lang: item.VAL }));
        });
      }
      return $('<div>', { class: 'dropdown' })
        .append($('<button>', { class: 'qb-dropdown dropdown-toggle', type: 'button', 'data-toggle': 'dropdown', html: n850[0].LABEL || '' }))
        .append($('<input>', { type: 'hidden', value: n850[0].VAL || 0, id:'val_n850' }))
        .append($div);
    }

    function _tr_b350(b350){
      return $('<tr>')
        .append($('<td>', { html: b350._id || 0 })
          .append($('<input>', { type: 'hidden', value: b350.FB050 || 0, name: 'FB050' }))
        )
        .append($('<td>', { class: 'text-left', html: b350.BV051 || '' }))
        .append($('<td>', { html: b350.BV052 || '' }))
        .append($('<td>', { html: b350.BN351 || '' }))
        .append($('<td>', { html: get_ddMMyyyy(b350.BL368) }))
        .append($('<td>', { html: b350.BL369 || '' }))
        .append($('<td>')
          .append($('<i>', { class: 'fa fa-plus-circle fa-2x' }))
        )
    }

    // return public function || variable
    return {
      eventListener,
      loadCombTabN850,
      loadListOfTabB350
    };

  }

  return {
    getInstance: function () {
      if (!instance) 
        instance = init();
      return instance;
    }
  }

})();


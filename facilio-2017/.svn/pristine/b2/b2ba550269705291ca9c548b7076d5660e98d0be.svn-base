/**
 * @Author: Linhnc
 * @Create: 24/1/2018
 * @Module: b200ty
 */

window.onload = function () {
  b200TYPlugin.getInstance().eventListener();
  b200TYPlugin.getInstance().loadCombTabN850(function(){
    b200TYPlugin.getInstance().loadCombTabN100L(function(){
      b200TYPlugin.getInstance().loadListOfTabB200();
    });
  });
}

const b200TYPlugin = (function () {
  var instance;
  function init() {

    var combN100L = {},
    lstB200 = [],
    pnDIRECTION = 0,
    itemOfB200 = {},
    itemReportWork = [],
    lstB275 = {},
    pnFIRSTROW = 1, // phan trang tab history
    lstC300C = [];

    function eventListener() { 

      // date report fast
      $('[name="date-report-fast"]').daterangepicker({
        opens: "center",
        singleDatePicker: true,
        locale: {
          format: 'DD/MM/YYYY'
        }
      }, function(date){
        $('[name="date-report-fast"]').attr('lang', date.toISOString());
      });

      // Config lib validate
      $.validate({
        form: '#form_update_time, #file_image_upload'
      });

      $('#sb_complete_work').createRange({
        showValTo: '#sb_complete_val'
      });

      initDateComplete();

      // pick date time complete
      $('[name="date-time-complete"]').on('apply.daterangepicker', function(ev, picker) {
        var $sel = $('#dl_pcv');
        $sel.find("[name='CD301']").val(picker.startDate.toISOString()); // ngay bd
        $sel.find("[name='CD302']").val(picker.endDate.toISOString()); // ngay kt
      });

      // event active tab content used in multi div content tab-pane
      $(document).on('click', '.nav-link', function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        $('.nav-link').removeClass('active');
        $(this).addClass('active');
        $('.tab-pane').removeClass('active');
        $(id).addClass('active');
      });

      // openPopupSlider('.require-materials', '#popup_require_materials'); // Event click open popup yeu cau vat tu
      // openPopupSlider('.name-material', '#popup_ycvt_dsvt'); // Event click open popup danh sach vat tu
      // openDialog('.faci-image', '#dl_upload_file', function () {
      //   // show first tab
      //   $('#dl_upload_file').find('.dl-document-attach .nav li:first-child a').tab('show');
      // }); // Event Click Icon Image
      // openDialog('.faci-file', '#dl_upload_document'); // Event Click Icon File
      // openDialog('.faci-attach', '#dl_list_m650'); // Event Click Icon Attach

      // Event click ID phieu
      $(document).off('click', '.text-votes')
        .on('click', '.text-votes', function(){
          var pb200 = $(this).closest('tr').find("[name='PB200']").val();
          getItemB200(lstB200, pb200);
          $('#pieper_work').html('').append(_tmp_tab_work(itemOfB200));
          openDialogB200('#dl_pcv');
          // show first tab
          $('#dl_pcv').find('.qb-dialog-content ul.nav li:first-child a').tab('show');
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

      // change comb N850
      $(document).off('click', '.item-n850')
      	.on('click', '.item-n850', function (e) {
          e.preventDefault();
          loadCombTabN100L();
      		loadListOfTabB200();
        });
        
      // change comb N100L
      $(document).off('click', '.item-n100l')
      	.on('click', '.item-n100g', function (e) {
      		e.preventDefault();
      		loadListOfTabB200();
      	});

      // change comb FC550
      $(document).off('click', '.item-fc550')
      	.on('click', '.item-fc550', function (e) {
      		e.preventDefault();
      		loadListOfTabB200();
        });
      
      // click ic-sort
      $(document).off('click', '.ic-sort')
        .on('click', '.ic-sort', function(){
          sort_b200.value = this.lang;
          if (pnDIRECTION === 0)
            pnDIRECTION = 1
          else pnDIRECTION = 0
          loadListOfTabB200();
        });

      // update time dialog
      $(document).off('click', '.edt-expected')
        .on('click', '.edt-expected', function(){
          $('#val_bn404').val(+this.lang);
          var pb200 = $(this).closest('tr').find("[name='PB200']").val();
          getItemB200(lstB200, pb200); // ham set value itemOfB200
          openDialogB200('#dl_update_tabb400');
        });

      // update time submit
      $(document).off('submit', '#form_update_time')
        .on('submit', '#form_update_time', function(evt){
          evt.preventDefault();
          updateTabB400();
        });

      // click ten bo phan
      $(document).off('click', '.title-part')
      	.on('click', '.title-part', function () {
      		var pb200 = $(this).closest('tr').find("[name='PB200']").val(),
      			$sel = $('#dl_list_of_tabb050e');
      		getItemB200(lstB200, pb200);
      		$sel.find("[name='SV201']").text(itemOfB200.SV201);
      		$sel.find("[name='PB200']").text(itemOfB200.PB200);
      		openDialogB200('#dl_list_of_tabb050e');
      		loadListOfTabB050E();
        });
        
      // click tab bao cao
      $(document).off('click', '#tab_report')
      	.on('click', '#tab_report', function () {
      		loadListOfTabB275();
      		loadListOfTabC300C();
      	});

      // event check danh sach kiem tra
      $(document).off('change', '[name="FB100"]')
        .on('change', '[name="FB100"]', function () {
          if ($(this).is(':checked')) {
            itemReportWork.push(+$(this).val());
            if (itemReportWork.length === lstB275.length){
              $('#sb_complete_work').setValRange(100);
              $('.note-report').removeClass('d-none');
            }
          } else {
            var index = itemReportWork.indexOf(+$(this).val());
            if (index > -1)
              itemReportWork.splice(index, 1);
            if (itemReportWork.length < lstB275.length){
              $('#sb_complete_work').setValRange(0);
              $('.note-report').addClass('d-none');
            }
          }
        });
      
      // event change range input complete
      $(document).off('change', '#sb_complete_work')
      	.on('change', '#sb_complete_work', function () {
      		if (+$(this).val() === 100) {
      			$("[name='FB100']").each(function () {
      				$(this).prop("checked", true);
      				itemReportWork.push(+$(this).val());
      				$('.note-report').removeClass('d-none');
      			});
      		} else {
      			$("[name='FB100']").each(function () {
      				$(this).prop("checked", false);
      			});
      			itemReportWork = [];
      			$('.note-report').addClass('d-none');
      		}
      	});
      
      // evt click button save in tab report
      $(document).off('click', '#btn_report')
        .on('click', '#btn_report', function () {
          insertTabC300();
        });

      // evt click tab history
      $(document).off('click', '#tab_history')
        .on('click', '#tab_history', function(){
          loadListOfTabC300C();
        });

      // evt click #prev
      $(document).off('click', '#prev')
        .on('click', '#prev', function(e){
          e.preventDefault();
          loadListOfTabC300C(+this.lang);
        });

      // evt click #next
      $(document).off('click', '#next')
        .on('click', '#next', function(e){
          e.preventDefault();
          loadListOfTabC300C(+this.lang);
        });

    }

    function initDateComplete() {
      $('[name="date-time-complete"]').daterangepicker({
        opens: "center",
        timePicker: true,
        timePicker24Hour: true,
        startDate: new Date(),
        endDate: moment(new Date()).add(30, 'minutes'),
        locale: {
          format: 'DD/MM/YYYY HH:mm'
        }
      });
    }

    // CombTabN850
    function loadCombTabN850(callback) {
    	showLoading();
    	$.ajax({
    		type: "GET",
    		url: "/comb/comb_n850",
    		dataType: "json",
    		success: function (res) {
    			hideLoading();
    			$('#comb_n850').html('');
    			res = typeof res === 'string' ? JSON.parse(res) : res;
    			if (res.status === 'success')
    				$('#comb_n850').append(_comb_n850(res.data));
    			!!callback && callback();
    		}
    	});
    };

    // CombTabN100L
    function loadCombTabN100L(callback) {
    	showLoading();
    	$.ajax({
    		type: "GET",
    		url: "/comb/comb_n100l",
    		dataType: "json",
    		data: {
    			pnFN850: $('#val_n850').val() || 0
    		},
    		success: function (res) {
    			hideLoading();
          res = typeof res === 'string' ? JSON.parse(res) : res;
    			$('#comb_n100l').html('');
    			if (res.status === 'success') {
            combN100L = res.data;
            $('#comb_n100l').append(_comb_n100l(combN100L));
    				!!callback && callback();
    			}
    		}
    	});
    };

    // Load list B200
    function loadListOfTabB200() {
      showLoading();
      var url = "/b200TY/list_b200ty",
        limit = 13,
        data = {
          pnFN850: +$('#val_n850').val() || 0,
          pvUSER: $('#val_n100l').val() || '',
    			pnSORT: +$('#sort_b200').val() || 1, // 2=số phiếu; 3=máy; 1=hạn định
    			pnDIRECTION: +pnDIRECTION || 0, // 0 giam dan 1 tang dan
          pnFC500: +$('#val_fc500').val() || 0,
          pnLIMIT: limit
    		};
    	$.ajax({
    		type: "GET",
    		url: url,
    		dataType: "json",
    		data: data,
    		success: function (res) {
          hideLoading();
    			$('#pm_table > tbody').html('');
    			res = typeof res === 'string' ? JSON.parse(res) : res;
    			if (res.status === 'success') {
            refreshListB200(res.data);
            // phan trang
    				$('.qb-pagination').doPagination(lstB200[0].ROWSS, url + '?' + $.param(data), limit, function (res) {
    					if (res.status === 'success') 
                refreshListB200(res.data);
    				});
          } else $('#pm_table > tbody').html('');
    		}
    	});
    };

    function refreshListB200(b200) {
    	$('#pm_table > tbody').html('');
    	lstB200 = b200;
    	!!lstB200 && lstB200.forEach(function (b200) {
    		b200.id = new Date().getTime();
    		$('#pm_table > tbody').append(_tr_b200(b200));
    		$('#' + b200.id).append(_comb_n100l(combN100L, b200.PN100));
    	});
    	_showDropdownOnTable(); // hien thi dropdown len tren table
    }

    function _showDropdownOnTable() {
    	// hiển thị dropdown menu lên trên table
    	$(".dropdown").on("show.bs.dropdown", function () {
    		var $btnDropDown = $(this).find(".dropdown-toggle"),
    			$listHolder = $(this).find(".dropdown-menu");
    		$(this).css("position", "static");
    		$listHolder.css({
    			top: ($btnDropDown.offset().top + $btnDropDown.outerHeight(true)) + "px",
    			left: $btnDropDown.offset().left + "px"
    		});
    		$listHolder.data("open", true);
    	});

    	//add BT DD hide event
    	$(".dropdown").on("hidden.bs.dropdown", function () {
    		var $listHolder = $(this).find(".dropdown-menu");
    		$listHolder.data("open", false);
    	});
    };

    // Cap nhat thoi gian du kien
    function updateTabB400() {
    	showLoading();
    	$.ajax({
    		type: "POST",
    		url: "/b200TY/update_b400",
    		data: {
    			pnFB400: itemOfB200.FB400,
    			pnBN404: $('#val_bn404').val()
    		},
    		dataType: "json",
    		success: function (res) {
    			hideLoading();
    			closeDialogB200('#dl_update_tabb400');
    			res = typeof res === 'string' ? JSON.parse(res) : res;
    			if (res.status === 'success') {
    				loadListOfTabB200();
    				swalSuccess(undefined, res.message);
    			} else {
    				swalError(undefined, res.message);
    			}
    		}
    	});
    };

    // get item from obj B200
    function getItemB200(listB200, pb200) {
    	if (!!listB200) {
    		itemOfB200 = listB200.filter(function (item) {
    			return item.PB200 === pb200;
    		})[0];
    	}
    }

    function loadListOfTabB050E() {
    	showLoading();
    	$.ajax({
    		type: "POST",
    		url: "/b200TY/list_b050e",
    		data: {
    			pnFB050: itemOfB200.FB050,
    			pnFS250: itemOfB200.PS250,
    			pvFC550: itemOfB200.FC550
    		},
    		dataType: "json",
    		success: function (res) {
    			hideLoading();
    			res = typeof res === 'string' ? JSON.parse(res) : res;
    			$('#tb_b050e > tbody').html('');
    			if (res.status === 'success') {
    				$('#dl_list_of_tabb050e').find("[name='BV054']").text(res.data[0].BV054 || '');
    				!!res.data && res.data.forEach(function (b050e) {
    					$('#tb_b050e > tbody').append(_tr_b050e(b050e));
    				});
    			}
    		}
    	});
    };

    // List danh sach kiem tra
    function loadListOfTabB275() {
      showLoading();
      $.ajax({
        type: "POST",
        url: "/b200TY/list_b275",
        data: {pvFB200: itemOfB200.PB200},
        dataType: "json",
        success: function (res) {
          hideLoading();
          $('#list-item').html('');
          res = typeof res === 'string' ? JSON.parse(res) : res;
          if (res.status === 'success') {
            lstB275 = res.data;
            !!res.data && res.data.forEach(function(b275){
              $('#list-item').append(_tmp_b275(b275));
            });
          }
        }
      });
    };

    // List bao cao cong viec
    function loadListOfTabC300C(checkPagination) {
      showLoading();
      var $sel = $('#pieper_history'),
        limit = 3;
      // checkPagination = 1 ? next : prev
      if (!!checkPagination) {
      	if (checkPagination === -1) {
      		if (pnFIRSTROW > limit)
      			pnFIRSTROW = pnFIRSTROW - limit;
      	} else {
      		if (pnFIRSTROW + limit < lstC300C[0].ROWSS)
      			pnFIRSTROW = pnFIRSTROW + limit;
      	}
      }
      $.ajax({
      	type: "POST",
      	url: "/b200TY/list_c300c",
      	data: {
      		pvFB200: itemOfB200.PB200,
      		pnFIRSTROW: pnFIRSTROW
      	},
      	dataType: "json",
      	success: function (res) {
      		hideLoading();
      		$sel.find('.content').html('');
      		res = typeof res === 'string' ? JSON.parse(res) : res;
      		if (res.status === 'success') {
      			lstC300C = res.data || [];
      			$sel.find("[name='ROWSS']").text(lstC300C[0].ROWSS);
      			!!lstC300C && lstC300C.forEach(function (c300c) {
      				$sel.find('.content').append(_tmp_c300c(c300c));
      			});
      			$sel.find("[name='FROM']").text(pnFIRSTROW);
      			$sel.find("[name='TO']").text(pnFIRSTROW + (lstC300C.length - 1));
      			$('#sb_complete_work').setValRange(lstC300C[0].CN315);
      		} else {
      			lstC300C = [];
      			$sel.find("[name='FROM']").text(0);
      			$sel.find("[name='TO']").text(0);
      			$('#sb_complete_work').setValRange(0);
      		}
      	}
      });
    };

    // bao cao cv
    function insertTabC300() {
    	showLoading();
    	var $parent = $('#dl_pcv');
    	$.ajax({
    		type: "POST",
    		url: "/b200TY/insert_c300",
    		data: {
    			pvFB200: itemOfB200.PB200,
    			pnFC500: itemOfB200.FC500,
    			pdCD301: $parent.find("[name='CD301']").val(), // ngay bd
    			pdCD302: $parent.find("[name='CD302']").val(), // ngay kt
    			pvCV304: $parent.find("[name='note-report']").val(), // ghi chu
    			pvCV305: $parent.find("[name='note-report']").val(), // ghi chu
    			pvCV306: $parent.find("[name='note-report']").val(), // ghi chu
    			pvCV314: itemOfB200.PB200, // pvFB200
    			pnCN315: $('#sb_complete_work').val(), // % hoan thanh
    			plCB317: $parent.find("[name='des-report']").val() // mo ta
    		},
    		dataType: "json",
    		success: function (res) {
    			hideLoading();
    			res = typeof res === 'string' ? JSON.parse(res) : res;
    			if (res.status === 'success') {
    				insertTabB275(function (data) {
    					if (data.status === 'success') {
    						closeDialog('#dl_pcv');
    						swalSuccess(undefined, res.message);
    					}
    				});
    			} else {
    				swalError(undefined, res.message);
    			}
    			// set lai gia tri
    			$parent.find("[name='note-report']").val();
    			$parent.find("[name='des-report']").val();
    			initDateComplete();
    		}
    	});
    };

    function insertTabB275(callback) {
    	$.ajax({
    		type: "POST",
    		url: "/b200TY/insert_b275",
    		data: {
    			pvFB200: itemOfB200.PB200,
    			pvCARRAY: itemReportWork
    		},
    		dataType: "json",
    		success: function (res) {
    			res = typeof res === 'string' ? JSON.parse(res) : res;
    			callback(res);
    		}
    	});
    };

    // function uploadFileListB200(data, event) {
    //   var formData = new FormData();
    //   ko.utils.arrayForEach(event.target.files, function (file) {

    //     var fileName = file.name;
    //     var type = fileName.substr(fileName.indexOf('.') + 1, fileName.length); // result -> .jpg
    //     var MN654 = getMN654(type);

    //     if (checkFileSize(file.size)) {
    //       if (MN654 !== null) {
    //         file.id = new Date().getTime(); // id css progress bar
    //         var FH150 = self.itemListOfTabB200().FH150;
    //         FH150 = (!!FH150) ? parseInt(FH150) : 0;
    //         FB050 = self.itemListOfTabB200().PB050;
    //         FC150 = self.itemListOfTabB200().PC150;
    //         MV659 = self.itemListOfTabB200().PC150;
    //         FH200 = self.itemListOfTabB200().FH200;

    //         formData.append("files", file);
    //         formData.append("pnFH150", FH150);
    //         formData.append("pnFB050", FB050);
    //         formData.append("pvFC150", FC150);
    //         formData.append("pvMV659", MV659);
    //         formData.append("pnFH200", FH200);
    //         formData.append("pnMN654", MN654);
    //         formData.append("pvMV656", 'B200');

    //         if (MN654 === 1) {
    //           self.listDocumentsUpload.push(file);
    //         } else if (MN654 === 2) {
    //           self.listImagesUpload.push(file);
    //         } else if (MN654 === 3) {
    //           self.listFilmsUpload.push(file);
    //         }

    //         showLoading();
    //         $.ajax({
    //           url: "/m650/insert_m650c",
    //           cache: false,
    //           contentType: false,
    //           processData: false,
    //           data: formData,
    //           type: 'POST',
    //           xhr: function () {
    //             var xhr = $.ajaxSettings.xhr();
    //             xhr.upload.onprogress = function (data) {
    //               var perc = Math.round((data.loaded / data.total) * 100);
    //               $('#' + file.id).css('width', perc + '%');
    //               if (perc === 100) {
    //                 if (MN654 === 1) {
    //                   self.listDocumentsUpload().splice(self.listDocumentsUpload().indexOf(file), 1);
    //                 } else if (MN654 === 2) {
    //                   self.listImagesUpload().splice(self.listImagesUpload().indexOf(file), 1);
    //                 } else if (MN654 === 3) {
    //                   self.listFilmsUpload().splice(self.listFilmsUpload().indexOf(file), 1);
    //                 }
    //               }
    //             };
    //             return xhr;
    //           },
    //           success: function (res) {
    //             hideLoading();
    //             res = typeof res === 'string' ? JSON.parse(res) : res;
    //             if (res.status === 'success') {
    //               swalSuccess(undefined, lang['_update_success'], undefined, function () {
    //                 self.loadListOfTabB200();
    //                 self.loadListM650(self.itemListOfTabB200().PB050, self.itemListOfTabB200().PC150, MN654, 'B200', 0);
    //               });
    //               self.listImagesUpload([]);
    //               self.listFilmsUpload([]);
    //               self.listDocumentsUpload([]);
    //             } else {
    //               console.log("File upload error: " + res.error);
    //               swalError(lang['_error'], lang['_update_failed']);
    //             }
    //           }
    //         });
    //       } else {
    //         swalError(lang['_error'], lang['_type_not_support']);
    //       }
    //     } else {
    //       swalError(lang['_error'], lang['_file_size_not_large']);
    //     }
    //   });
    // };

//   self.loadListM650 = function (pnFB050, pvFC150, pnMN654, pvMV656, pnMN658) {
//     showLoading();
//     $.ajax({
//       type: "POST",
//       url: "/m650/list_m650",
//       data: {
//         pnFB050: !!pnFB050 ? pnFB050 : 0,
//         pvFC150: !!pvFC150 ? pvFC150 : null,
//         pnMN654: !!pnMN654 ? pnMN654 : 0,
//         pvMV656: !!pvMV656 ? pvMV656 : null,
//         pnMN658: !!pnMN658 ? pnMN658 : 0
//       },
//       dataType: "json",
//       success: function (res) {
//         hideLoading();
//         res = typeof res === 'string' ? JSON.parse(res) : res;
//         self.listM650([]);
//         if (res.status === 'success') {
//           self.listM650(res.data);
//         }
//       }
//     });
//   };

//   self.stornoTabM650 = function (PM650, MV652, MN654) {
//     swalComfirm(lang['_confirm_delete_file'], lang['_messenger_confirm_delete_file'], function (res) {
//       if (res.value) {
//         showLoading();
//         $.ajax({
//           type: "POST",
//           url: "/m650/storno_m650",
//           data: {
//             pnMN654: MN654,
//             pnPM650: PM650,
//             pvMV652: MV652
//           },
//           dataType: "json",
//           success: function (res) {
//             hideLoading();
//             res = typeof res === 'string' ? JSON.parse(res) : res;
//             if (res.status === 'success') {
//               swalSuccess(undefined, res.message, undefined, function () {
//                 self.loadListOfTabB200();
//                 self.loadListM650(self.itemListOfTabB200().PB050, self.itemListOfTabB200().PC150, MN654, 'B200', 0);
//               });
//             }
//           }
//         });
//       }
//     }, "Có");
//   };

//   self.downloadFile = function (filename, MN654) {
//     var url = "/m650/download?filename=";
//     if (!!filename) {
//       window.location = url + "[" + filename + "]&type=" + MN654;
//     } else {
//       if (self.listItemDownload().length === 0) {
//         swalError(undefined, "Không có file tải xuống");
//       } else {
//         window.location = url + "[" + self.listItemDownload() + "]&type=" + MN654;
//         self.listItemDownload([]);
//       }
//     }
//   };

//   // checked all file download
//   self.isCheckAllDownLoad.subscribe(function () {
//     if (self.isCheckAllDownLoad()) {
//       self.listItemDownload([]);
//       self.listM650().forEach(function (item) {
//         self.listItemDownload.push(item.MV652);
//       });
//     } else {
//       if (self.listItemDownload().length === self.listM650().length) {
//         self.listItemDownload([]);
//       } else {
//         self.listM650().forEach(function (item) {
//           self.listItemDownload.push(item.MV652);
//         });
//       }
//     }
//   });

    //---- Template ----//
    function openDialogB200(idDialog) {

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

    function closeDialogB200(idDialog) {
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

    function _comb_n100l(n100l, pn100) {
      var $div = '',
      objN100L = null;
      if (n100l.length > 0) {
        $div = $('<div>', { class: 'dropdown-menu' });
        n100l.forEach(function (item) {
          $div.append($('<a>', { href: '#', class: (!!pn100 && item.VAL2 === pn100) ? 'dropdown-item qb-dropdown-item active item-n100l' : "dropdown-item qb-dropdown-item item-n100l", html: item.LABEL || '', lang: item.VAL }));
        });
      }

      if(!!pn100){
        objN100L = n100l.filter(function (item) {
          return item.VAL2 === pn100;
        })[0];
      }

      return $('<div>', { class: (!!pn100) ? 'dropdown comb-n100g-lstb200' : "dropdown" })
        .append($('<button>', { class: 'qb-dropdown dropdown-toggle', type: 'button', 'data-toggle': 'dropdown', html: (!!objN100L) ? objN100L.LABEL : n100l[0].LABEL }))
        .append($('<input>', { type: 'hidden', value: (!!objN100L) ? objN100L.VAL : n100l[0].VAL, id: "val_n100l" }))
        .append($div);
    }

    function _tr_b200(b200){
      return $('<tr>')
        .append($('<td>', { class: "text-votes", html: b200.PC150 || 0 })
          .append($('<input>', { class: 'custom-control-input', type: "checkbox", value: b200.PB200 || 0, name: "PB200" }))  
        ) // so phieu
        .append($('<td>', { class: "text-left", html: b200.HV201 || "" })) // khu vuc
        .append($('<td>', { class: "text-left", html: b200.SV201 || "" })) // may
        .append($('<td>', { class: "text-left" }) // bo phan
          .append($('<a>', { class: "title-part", href: "#", html: b200.SV251 || "" }))
        )
        .append($('<td>') // vat tu
          .append($('<a>', { class: "faci-vattu ic-faci require-materials", href: "#", title: lang['_ticket_require'] })
            .append($('<span>', { class: "path1" }))
            .append($('<span>', { class: "path2" }))
            .append($('<span>', { class: "path3" }))
            .append($('<span>', { class: "path4" }))
            .append($('<span>', { class: "path5" }))
            .append($('<span>', { class: "path6" }))
            .append($('<span>', { class: "path7" }))
            .append($('<span>', { class: "path8" }))
            .append($('<span>', { class: "path9" }))
            .append($('<span>', { class: "path10" }))
            .append($('<span>', { class: "path11" }))
            .append($('<span>', { class: "path12" }))
            .append($('<span>', { class: "path13" }))
            .append($('<span>', { class: "path14" }))
            .append($('<span>', { class: "path15" }))
            .append($('<span>', { class: "path16" }))
            .append($('<span>', { class: "path17" }))
          )
        )
        .append($('<td>') // trang thai
          .append($('<span>', { class: (b200.CV451 === 'A') ? "priority high" : (b200.CV451 === 'B') ? "priority medium" : (b200.CV451 === 'C') ? "priority low" : "", title: (b200.CV451 === 'A') ? lang['_priority_array'][0] : (b200.CV451 === 'B') ? lang['_priority_array'][1] : (b200.CV451 === 'C') ? lang['_priority_array'][2] : "" }))
          .append($('<span>', { class: (b200.CV501 === 'S') ? "faci-warning icon-faci" : (b200.CV501 === 'O') ? "faci-warning icon-faci" : (b200.CV501 === 'W') ? "faci-running ic-faci" : (b200.CV501 === 'F') ? "faci-finished icon-faci" : "", title: (b200.CV501 === 'S') ? lang['_status_array'][0] : (b200.CV501 === 'O') ? lang['_status_array'][1] : (b200.CV451 === 'W') ? lang['_status_array'][2] : (b200.CV451 === 'F') ? lang['_status_array'][3] : "" })
            .append($('<span>', { class: 'path1' }))
            .append($('<span>', { class: 'path2' }))
          )
        )
        .append($('<td>', { class: "text-left" }) // nhan vien thuc hien
          .append($('<span>', { class: "faci-user ic-faci float-left" })
            .append($('<span>', { class: "path1" }))
            .append($('<span>', { class: "path2" }))
          )
          .append($('<div>', { id: b200.id || "" }))
        ) 
        .append($('<td>', { html: get_ddMMyyyy(b200.CD160) })) // ngay bt cuoi
        .append($('<td>', { class: (parseDate(get_ddMMyyyy(b200.CD153)).getTime() <= parseDate(getCurrentDate()).getTime()) ? "text-limit" : "", html: get_ddMMyyyy(b200.CD153)})) // han dinh
        .append($('<td>', { class: "text-left", html: b200.CB173 || "" })) // mo ta cong viec
        .append($('<td>', { class: "text-left", html: b200.CV161 || "" })) // ghi chu
        .append($('<td>') // tl cong viec
          .append($('<span>', { class: "total-img", html: (!!b200.PIC) ? b200.PIC : 0 }))
          .append($('<a>', { class: "faci-image", href: "#", title: lang['_imgage_attach'] }))
          .append($('<span>', { class: "total-file", html: (!!b200.DOC) ? b200.DOC : 0 }))
          .append($('<a>', { href: "#", class: "faci-file", title: lang['_document_attach'] }))
        )
        .append($('<td>') // du kien
          .append($('<span>', { html: b200.BN104 || 0 }))
          .append($('<span>', { html: " (MIN.)" }))
          .append($('<a>', { href: "#", class: "faci-edit edt-expected", title: lang['_edit'], lang: b200.BN104 || 0 }))
        )
        .append($('<td>')
          .append($('<a>', { href: "#", class: "faci-attach", title: lang['_document_attach'] }))
        )
        .append($('<td>'))
    }

    function _tr_b050e(b050e){
      return $('<tr>')
        .append($('<td>', { class: 'td2 data', html: b050e.BOPHAN || '' })) // bo phan
        .append($('<td>', { class: 'td3 data', html: b050e.LOAIBT || '' })) // cong viec bt
        .append($('<td>', { class: 'td4 data', html: b050e.DANHSACHKT || '' })) // yeu cau kt
        .append($('<td>', { class: 'td5 text-center' }) // cong viec trong yeu
          .append($('<div>', { class: 'switch_box' })
            .append($('<input>', { type: 'checkbox', class: 'switch_cb', checked: (b050e.BN458 === 0) ? false : true }))
          )
        )
        .append($('<td>', { class: 'td6 data' })) // ma vat tu 
        .append($('<td>', { class: 'td7 data' })) // so luong
        .append($('<td>', { class: 'td8 text-center' }) // trang thai
          .append($('<div>', { class: 'switch_box' })
            .append($('<input>', { type: 'checkbox', class: 'switch_cb', checked: (b050e.STATUS === 'MSTOP') ? false : true }))
          )
        )
        .append($('<td>', { class: 'td9-child', html: b050e.BTCUOI || '' })) // ngay bt cuoi
        .append($('<td>', { class: 'td9-child', html: (b050e.MOICA != null) ? 'x' : '' }))
        .append($('<td>', { class: 'td9-child', html: (b050e.MON1 != null) ? 'x' : '' }))
        .append($('<td>', { class: 'td9-child', html: (b050e.MON2 != null) ? 'x' : '' }))
        .append($('<td>', { class: 'td9-child', html: (b050e.MON3 != null) ? 'x' : '' }))
        .append($('<td>', { class: 'td9-child', html: (b050e.MON4 != null) ? 'x' : '' }))
        .append($('<td>', { class: 'td9-child', html: (b050e.MON6 != null) ? 'x' : '' }))
        .append($('<td>', { class: 'td9-child', html: (b050e.YEAR1 != null) ? 'x' : '' }))
        .append($('<td>', { class: 'td9-child', html: (b050e.YEAR2 != null) ? 'x' : '' }))
        .append($('<td>', { class: 'td10 data', html: b050e.BTDEN || '' })) // lim
    }

    function _tmp_tab_work(b200){
      return $('<div>')
        .append($('<h1>', { class: 'title'/*, html: lang['_signal']*/ }))
        .append($('<div>', { class: 'factory' })
          .append($('<span>', { class: 'ficon faci-factory' }))
          .append($('<div>', { class: 'item-1' })
            .append($('<span>', { class: 'text-title', html: lang['_area'] + ': ' }))
            .append($('<span>', { class: 'text-content', html: b200.HV201 || '' }))
            .append($('<br>'))
            .append($('<span>', { class: 'text-title', html: lang['_machine'] + ': ' }))
            .append($('<span>', { class: 'text-content', html: b200.SV201 || '' }))
            .append($('<br>'))
            .append($('<span>', { class: 'text-title', html: lang['_part'] + ': ' }))
            .append($('<span>', { class: 'text-content', html: b200.SV251 || '' }))
          )
          .append($('<div>', { class: 'item-2' })
            .append($('<p>', { class: 'MPKL' })
              .append($('<span>', { class: 'id-MPKL', html: b200.PC150 || '' }))
              .append($('<span>', { class: (b200.CV451 === 'A') ? 'priority high' : (b200.CV451 === 'B') ? 'priority medium' : (b200.CV451 === 'C') ? 'priority low' : '', title: (b200.CV451 === 'A') ? lang['_priority_array'][0] : (b200.CV451 === 'B') ? lang['_priority_array'][1] : (b200.CV451 === 'C') ? lang['_priority_array'][2] : '' }))
              .append($('<span>', { class: (b200.CV501 === 'S') ? 'faci-warning icon-faci' : (b200.CV501 === 'O') ? 'faci-warning icon-faci' : (b200.CV501 === 'W') ? 'faci-running ic-faci' : (b200.CV501 === 'F') ? 'faci-finished icon-faci' : '', title: (b200.CV501 === 'S') ? lang['_status_array'][0] : (b200.CV501 === 'O') ? lang['_status_array'][1] : (b200.CV501 === 'W') ? lang['_status_array'][2] : (b200.CV501 === 'F') ? lang['_status_array'][3] : '' })
                .append($('<span>', { class: 'path1' }))
                .append($('<span>', { class: 'path2' }))
              )
            )
            .append($('<span>', { class: 'text-title', html: lang['_time_update'] + ': ' }))
            .append($('<span>', { class: 'text-content', html: get_ddMMyyyy(b200.CL196) || '' }))
            .append($('<br>'))
            .append($('<span>', { class: 'text-title', html: lang['_employee_update'] + ': ' }))
            .append($('<span>', { class: 'text-content', html: b200.CL197 || '' }))
          )
        )
        .append($('<div>', { class: 'notepad' })
          .append($('<span>', { class: 'ficon faci-notepad' }))
          .append($('<div>')
            .append($('<span>', { class: 'text-title', html: lang['_job_description'] + ': ' }))
            .append($('<span>', { class: 'text-content', html: b200.CB173 || '' }))
            .append($('<br>'))
            .append($('<span>', { class: 'text-title', html: lang['_note_nearest'] + ': ' }))
            .append($('<span>', { class: 'text-content', html: b200.CV161 || '' }))
            .append($('<br>'))
          )
        )
        .append($('<div>', { class: 'worker' })
          .append($('<span>', { class: 'ficon faci-worker' }))
          .append($('<div>')
            .append($('<span>', { class: 'text-title', html : lang['_last_maintenance_day'] + ':' }))
            .append($('<span>', { class: 'text-content', html: get_ddMMyyyy(b200.CD160) }))
            .append($('<br>'))
            .append($('<span>', { class: 'text-title', html : lang['_day_limit'] + ':' }))
            .append($('<span>', { class: 'text-content', html: get_ddMMyyyy(b200.CD153) }))
            .append($('<br>'))
            .append($('<span>', { class: 'text-title', html : lang['_made_employee'] + ':' }))
            .append($('<span>', { class: 'text-content', html: b200.BV206 || '' }))
            .append($('<br>'))
            .append($('<span>', { class: 'text-title', html : lang['_employee_support'] + ':' }))
            .append($('<span>', { class: 'text-content'}))
          )
        )
    }

    function _tmp_b275(b275){
      return $('<div>')
        .append($('<label>', { class: 'custom-control custom-checkbox' })
          .append($('<input>', { type: 'checkbox', class: 'custom-control-input', value: b275.FB100 || '', name: 'FB100' }))
          .append($('<span>', { class: 'custom-control-indicator' }))
        )
        .append($('<span>', { class: 'lb-checkbox', html: b275.BV151 || '' }))
        .append($('<br>'))
    }

    function _tmp_c300c(c300c){
      return $('<div>')
        .append($('<i>', { class: "faci-calendar qb-icon-ca" }))
        .append($('<input>', { type: "text", class: "qb-txt-calendar", readonly: true, value: get_ddMMyyyy(c300c.CD302) }))
        .append($('<i>', { class: "faci-clock qb-icon-clock" }))
        .append($('<input>',{ class: "qb-txt-clock", type: "text", readonly: true, value: get_hhmm(c300c.CD302) }))
        .append($('<span>',{ class: "user-name", html: c300c.CL349 || '' }))
        .append($('<p>', { class: "txt-content", html: c300c.CB317 || '' }))
        .append($('<div>',{ class: 'hr' }))
    }

    // return public function || variable
    return {
      eventListener,
      loadCombTabN850,
      loadCombTabN100L,
      loadListOfTabB200
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



// var B200TYViewModel = function () {

//   var self = this, objCombTabN850, objCombTabN100L;

//   // List
//   self.combTabN850 = ko.observableArray();
//   self.combTabN100L = ko.observableArray();
//   self.listOfTabB200 = ko.observableArray();
//   self.itemListOfTabB200 = ko.observableArray(); // get obj item duoc chon tren ListOfTabB200
//   self.listOfTabB275 = ko.observableArray();
//   self.listOfTabC300C = ko.observableArray();
//   self.listOfTabB050E = ko.observableArray();
//   self.combTabV750 = ko.observableArray();
//   self.itemReportWork = ko.observableArray();
//   self.listComBOrganizationEBS = ko.observableArray();
//   self.listImagesUpload = ko.observableArray();
//   self.listFilmsUpload = ko.observableArray();
//   self.listDocumentsUpload = ko.observableArray();
//   self.listM650 = ko.observableArray(); // list hinh anh
//   self.listItemDownload = ko.observableArray(); // danh sach tai xuong

//   // Var
//   self.pnLIMIT = ko.observable(13);
//   self.pnDIRECTION = ko.observable(0); // 0 giam dan 1 tang dan
//   self.pnSORT = ko.observable(); // 2=số phiếu; 3=máy; 1=hạn định
//   self.pnBN404 = ko.observable(); // thoi gian du kien
//   self.pnCN315 = ko.observable(0); // % seekbar bao cao cong viec
//   self.showNoteMaintenance = ko.observable(false); // Show | Hide textarea ghi chu bt gan nhat
//   self.pnFIRSTROW = ko.observable(1); // phan trang list listOfTabC300C
//   self.toRow = ko.observable(0); // dong hien tai cua listOfTabC300C 
//   self.fromRow = ko.observable(0); // dong bat dau cua listOfTabC300C 
//   self.dateTimeReportWork = ko.observable(getCurrentDateTime() + " - " + getCurrentDateTime(30)); // tg default bao cao
//   self.noteReportWork = ko.observable(); // ghi chu bao cao
//   self.describeReport = ko.observable(); // mo ta bao cao
//   self.isCheckAllDownLoad = ko.observable(false);

//   self.init = function () {
//     self.eventListener();
//     self.loadCombTabN850();
//     self.loadCombTabN100L();
//   };

//   self.eventListener = function () {

//     $('.qb-dropdown').text('\u00a0');

//     // Config lib validate
//     $.validate({
//       modules: 'file',
//       form: '#form_update_time,#file_image_upload'
//     });

//     // Config lib daterangepicker
//     $('input[name="date-report-fast"]').daterangepicker({
//       opens: "center",
//       singleDatePicker: true,
//       locale: {
//         format: 'DD/MM/YYYY'
//       }
//     });

//     $('input[name="date-time-complete"]').daterangepicker({
//       opens: "center",
//       timePicker: true,
//       timePicker24Hour: true,
//       locale: {
//         format: 'DD/MM/YYYY HH:mm'
//       }
//     });

//     openDialog('td.text-votes', '#dl_pcv', function () {
//       // show first tab
//       $('#dl_pcv').find('.qb-dialog-content ul.nav li:first-child a').tab('show');
//     }); // Event click ID phieu
//     openDialog('a.edt-expected', '#dl_update_tabb400'); // Event click icon update time
//     openDialog('a.title-part', '#dl_list_of_tabb050e'); // Event click chi tiet phieu
//     openPopupSlider('.require-materials', '#popup_require_materials'); // Event click open popup yeu cau vat tu
//     openPopupSlider('.name-material', '#popup_ycvt_dsvt'); // Event click open popup danh sach vat tu
//     openDialog('a.faci-image', '#dl_upload_file', function () {
//       // show first tab
//       $('#dl_upload_file').find('.dl-document-attach .nav li:first-child a').tab('show');
//     }); // Event Click Icon Image
//     openDialog('a.faci-file', '#dl_upload_document'); // Event Click Icon File
//     openDialog('a.faci-attach', '#dl_list_m650'); // Event Click Icon Attach

//     createDropdown('#combFC500');

//     $('#sb_complete_work').createRange({
//       showValTo: '#sb_complete_val'
//     });

//     // event active tab content used in multi div content tab-pane
//     $(document).on('click', '.nav-link', function (e) {
//       e.preventDefault();
//       var id = $(this).attr('href');
//       $('.nav-link').removeClass('active');
//       $(this).addClass('active');
//       $('.tab-pane').removeClass('active');
//       $(id).addClass('active');
//     });

//   };

//   // Dung de goi trong item list CombTabN850
//   self.loadCombTabN100L = function (pnFN850, callback) {
//     showLoading();
//     var url = '/b200TY/comb_n100l';
//     if (!!pnFN850) {
//       if (!!self.combTabN850() && typeof self.combTabN850() === 'object') {
//         objCombTabN850 = self.combTabN850().filter(function (item) {
//           return item.VAL === pnFN850;
//         })[0];
//         localStorage.setItem('objCombTabN850', JSON.stringify(objCombTabN850));
//         pnFN850 = JSON.parse(localStorage.getItem('objCombTabN850')).VAL;
//         url += "?pnFN850=" + pnFN850;
//       }
//     } else if (!!localStorage.getItem('objCombTabN850')) {
//       pnFN850 = JSON.parse(localStorage.getItem('objCombTabN850')).VAL;
//       url += "?pnFN850=" + pnFN850;
//     }
//     $.ajax({
//       type: "GET",
//       url: url,
//       dataType: "json",
//       success: function (res) {
//         res = typeof res === 'string' ? JSON.parse(res) : res;
//         if (res.status === 'success') {
//           self.combTabN100L(res.data);
//           if (!!callback && callback === true)
//             self.loadListOfTabB200(pnFN850);
//           else
//             self.loadListOfTabB200();
//           if (!!localStorage.getItem('objCombTabN100L'))
//             createDropdown('#combN100L', JSON.parse(localStorage.getItem('objCombTabN100L')).VAL);
//           else
//             createDropdown('#combN100L');
//           hideLoading();
//         }
//       }
//     });
//   };

//   // Load comb CombTabN850 when page load
//   self.loadCombTabN850 = function () {
//     $.ajax({
//       type: "GET",
//       url: "/comb/comb_n850",
//       dataType: "json",
//       success: function (res) {
//         res = typeof res === 'string' ? JSON.parse(res) : res;
//         if (res.status === 'success') {
//           self.combTabN850(res.data);
//           if (!!localStorage.getItem('objCombTabN850'))
//             createDropdown('#combN850', JSON.parse(localStorage.getItem('objCombTabN850')).VAL);
//           else
//             createDropdown('#combN850');
//         }
//       }
//     });
//   };

//   // Load list B200
//   self.loadListOfTabB200 = function (pnFN850, pvUSER, pnSORT, pnDIRECTION, pnFC500) {
//     showLoading();
//     var url = '/b200TY/list_b200ty';
//     if (!!pnFN850) {
//       if (!!self.combTabN850() && typeof self.combTabN850() === 'object') {
//         objCombTabN850 = self.combTabN850().filter(function (item) {
//           return item.VAL === pnFN850;
//         })[0];
//         localStorage.setItem('objCombTabN850', JSON.stringify(objCombTabN850));
//         pnFN850 = JSON.parse(localStorage.getItem('objCombTabN850')).VAL;
//       }
//     } else {
//       if (!!localStorage.getItem('objCombTabN850'))
//         pnFN850 = JSON.parse(localStorage.getItem('objCombTabN850')).VAL;
//       else
//         pnFN850 = 0; // TH khong co pnFN850
//     }
//     if (!!pvUSER) {
//       if (!!self.combTabN100G() && typeof self.combTabN100G() === 'object') {
//         objCombTabN100L = self.combTabN100G().filter(function (item) {
//           return item.VAL === pvUSER;
//         })[0];
//         localStorage.setItem('objCombTabN100L', JSON.stringify(objCombTabN100L));
//         pvUSER = JSON.parse(localStorage.getItem('objCombTabN100L')).VAL;
//       }
//     } else {
//       if (!!localStorage.getItem('objCombTabN100L'))
//         pvUSER = JSON.parse(localStorage.getItem('objCombTabN100L')).VAL;
//       else
//         pvUSER = 'ALL';
//     }
//     if (!!pnSORT) {
//       localStorage.setItem('pnSORT', pnSORT);
//       self.pnSORT(localStorage.getItem('pnSORT'));
//     } else {
//       if (!!localStorage.getItem('pnSORT'))
//         self.pnSORT(localStorage.getItem('pnSORT'));
//     }
//     if (pnDIRECTION !== undefined) {
//       localStorage.setItem('pnDIRECTION', pnDIRECTION);
//       self.pnDIRECTION(localStorage.getItem('pnDIRECTION'));
//     } else {
//       if (!!localStorage.getItem('pnDIRECTION'))
//         self.pnDIRECTION(localStorage.getItem('pnDIRECTION'));
//     }
//     pnFC500 = !!pnFC500 ? pnFC500 : 0;
//     if (pnFN850 !== 0) {
//       url += "?pnFN850=" + pnFN850 + "&pvUSER=" + pvUSER + "&pnSORT=" + self.pnSORT() + "&pnDIRECTION=" + self.pnDIRECTION() + "&pnFC500=" + pnFC500;
//     }
//     $.ajax({
//       type: "GET",
//       url: url,
//       dataType: "json",
//       success: function (res) {
//         hideLoading();
//         res = typeof res === 'string' ? JSON.parse(res) : res;
//         if (res.status === 'success') {
//           if (localStorage.getItem('objCombTabN850') === null) {
//             if (!!self.combTabN850() && typeof self.combTabN850() === 'object') {
//               objCombTabN850 = self.combTabN850().filter(function (item) {
//                 return item.VAL === res.FN850;
//               })[0]; // FN850 dung de sort lan dau tien load page
//               localStorage.setItem('objCombTabN850', JSON.stringify(objCombTabN850));
//             }
//           }
//           self.listOfTabB200(res.data);
//           $('.comb-n100l-lstb200ty').each(function () {
//             var idDropdown = '#' + $(this).attr('id');
//             createDropdown(idDropdown);
//           });
//           // phan trang
//           $('.qb-pagination.image').doPagination(self.listOfTabB200()[0].ROWSS, url, self.pnLIMIT(), function (res) {
//             if (res.status === 'success') {
//               self.listOfTabB200(res.data);
//               $('.comb-n100l-lstb200ty').each(function () {
//                 var idDropdown = '#' + $(this).attr('id');
//                 createDropdown(idDropdown);
//               });
//             }
//           });
//         } else {
//           self.listOfTabB200([]);
//         }
//       }
//     });
//   };

//   // Sort list B200
//   self.sortListOfTabB200 = function (pnSORT) {
//     (parseInt(self.pnDIRECTION()) === 0) ? self.pnDIRECTION(1) : self.pnDIRECTION(0);
//     localStorage.setItem('pnSORT', pnSORT);
//     self.pnSORT(localStorage.getItem('pnSORT'));
//     self.loadListOfTabB200(undefined, undefined, self.pnSORT(), self.pnDIRECTION(), undefined);
//   };

//   // Ham nay set lai gia tri item duoc chon list B200
//   self.loadItemListOfTabB200 = function (item) {
//     self.itemListOfTabB200(item);
//     self.pnBN404(item['BN104']);
//   };

//   // List danh sach kiem tra
//   self.loadListOfTabB275 = function () {
//     showLoading();
//     $.ajax({
//       type: "POST",
//       url: "/b200TY/list_b275",
//       data: {pvFB200: self.itemListOfTabB200().PB200},
//       dataType: "json",
//       success: function (res) {
//         res = typeof res === 'string' ? JSON.parse(res) : res;
//         if (res.status === 'success') {
//           self.listOfTabB275(res.data);
//           hideLoading();
//         } else {
//           self.listOfTabB275([]);
//         }
//       }
//     });
//   };

//   // List bao cao cong viec
//   self.loadListOfTabC300C = function (checkPagination) {
//     showLoading();
//     // phan trang list checkPagination = 0 la next checkPagination = -1 la prev
//     if (!!checkPagination) {
//       checkPagination = typeof checkPagination === 'number' ? checkPagination : parseInt(checkPagination);
//       if (checkPagination === -1) {
//         if (self.pnFIRSTROW() > 3) {
//           self.pnFIRSTROW(self.pnFIRSTROW() - 3);
//         }
//       } else {
//         if (self.pnFIRSTROW() + 3 < self.listOfTabC300C()[0].ROWSS) {
//           self.pnFIRSTROW(self.pnFIRSTROW() + 3);
//         }
//       }
//     }
//     $.ajax({
//       type: "POST",
//       url: "/b200TY/list_c300c",
//       data: {
//         pvFB200: self.itemListOfTabB200().PB200,
//         pnFIRSTROW: self.pnFIRSTROW()
//       },
//       dataType: "json",
//       success: function (res) {
//         hideLoading();
//         res = typeof res === 'string' ? JSON.parse(res) : res;
//         if (res.status === 'success') {
//           self.listOfTabC300C(res.data);
//           self.fromRow(self.pnFIRSTROW());
//           self.toRow(self.pnFIRSTROW() + (self.listOfTabC300C().length - 1));
//           $('#sb_complete_work').setValRange(self.listOfTabC300C()[0].CN315);
//           hideLoading();
//         } else {
//           self.listOfTabC300C([]);
//           self.fromRow(0);
//           self.toRow(0);
//           $('#sb_complete_work').setValRange(0);
//         }
//       }
//     });
//   };

//   // Cap nhat lai thoi gian du kien
//   self.updateTabB400 = function () {
//     showLoading();
//     $.ajax({
//       type: "POST",
//       url: "/b200TY/update_b400",
//       data: {
//         pnFB400: self.itemListOfTabB200().FB400,
//         pnBN404: self.pnBN404()
//       },
//       dataType: "json",
//       success: function (res) {
//         hideLoading();
//         closeDialog('#dl_update_tabb400');
//         res = typeof res === 'string' ? JSON.parse(res) : res;
//         if (res.status === 'success') {
//           self.loadListOfTabB200();
//           swalSuccess(undefined, res.message);
//         } else {
//           swalError(undefined, res.message);
//         }
//       }
//     });
//   };

//   //
//   self.loadListOfTabB050E = function (item) {
//     showLoading();
//     self.itemListOfTabB200(item);
//     $.ajax({
//       type: "POST",
//       url: "/b200TY/list_b050e",
//       data: {
//         pnFB050: item.FB050,
//         pnFS250: item.PS250,
//         pvFC550: item.FC550
//       },
//       dataType: "json",
//       success: function (res) {
//         hideLoading();
//         res = typeof res === 'string' ? JSON.parse(res) : res;
//         if (res.status === 'success') {
//           self.listOfTabB050E(res.data);
//         }
//       }
//     });
//   };

//   // Load comb phieu yeu cau
//   self.loadCombTabV750 = function (item) {
//     self.itemListOfTabB200(item);
//     $.ajax({
//       type: "GET",
//       url: "/comb/comb_v750",
//       dataType: "json",
//       success: function (res) {
//         res = typeof res === 'string' ? JSON.parse(res) : res;
//         if (res.status === 'success') {
//           //self.listOfTabB050E(res.data);
//         }
//       }
//     });
//   };

//   // Load comb kho chinh
//   self.loadComBOrganizationEBS = function () {
//     //showLoading();
//     $.ajax({
//       type: "GET",
//       url: "/comb/comb_organization_ebs",
//       dataType: "json",
//       success: function (res) {
//         res = typeof res === 'string' ? JSON.parse(res) : res;
//         if (res.status === 'success') {
//           var all = {VAL: -1, LABEL: 'Tất cả'};
//           res.data.unshift(all);
//           self.listComBOrganizationEBS(res.data);
//           createDropdown('#comBOrganizationEBS', res.data[2].VAL);
//           //hideLoading();
//         }
//       }
//     });
//   };

//   self.insertTabB275 = function (callback) {
//     $.ajax({
//       type: "POST",
//       url: "/b200TY/insert_b275",
//       data: {
//         pvFB200: self.itemListOfTabB200().PB200,
//         pvCARRAY: self.itemReportWork()
//       },
//       dataType: "json",
//       success: function (res) {
//         res = typeof res === 'string' ? JSON.parse(res) : res;
//         callback(res);
//       }
//     });
//   };

//   self.insertTabC300 = function () {
//     showLoading();
//     var pdCD301 = self.dateTimeReportWork().substr(0, self.dateTimeReportWork().indexOf('-')).trim();
//     var pdCD302 = self.dateTimeReportWork().substr(self.dateTimeReportWork().indexOf('-') + 1, self.dateTimeReportWork().length).trim();
//     var data = {
//       pvFB200: self.itemListOfTabB200().PB200,
//       pnFC500: self.itemListOfTabB200().FC500,
//       pdCD301: getISOSDateString(pdCD301),
//       pdCD302: getISOSDateString(pdCD302),
//       pvCV304: self.noteReportWork(),
//       pvCV305: self.noteReportWork(),
//       pvCV306: self.noteReportWork(),
//       pvCV314: self.itemListOfTabB200().PB200,
//       pnCN315: self.pnCN315(),
//       plCB317: self.describeReport()
//     };
//     $.ajax({
//       type: "POST",
//       url: "/b200TY/insert_c300",
//       data: {
//         pvFB200: self.itemListOfTabB200().PB200,
//         pnFC500: self.itemListOfTabB200().FC500,
//         pdCD301: getISOSDateString(pdCD301), // ngay bd
//         pdCD302: getISOSDateString(pdCD302), // ngay kt
//         pvCV304: self.noteReportWork(), // ghi chu
//         pvCV305: self.noteReportWork(), // ghi chu
//         pvCV306: self.noteReportWork(), // ghi chu
//         pvCV314: self.itemListOfTabB200().PB200, // pvFB200
//         pnCN315: self.pnCN315(), // % hoan thanh
//         plCB317: self.describeReport() // mo ta
//       },
//       dataType: "json",
//       success: function (res) {
//         hideLoading();
//         res = typeof res === 'string' ? JSON.parse(res) : res;
//         if (res.status === 'success') {
//           self.insertTabB275(function (data) {
//             if (data.status === 'success') {
//               closeDialog('#dl_pcv');
//               swalSuccess(undefined, res.message);
//             }
//           });
//         } else {
//           swalError(undefined, res.message);
//         }
//         // set lai gia tri
//         self.noteReportWork('');
//         self.describeReport('');
//         self.dateTimeReportWork(getCurrentDateTime() + " - " + getCurrentDateTime(30));
//         $('#sb_complete_work').setValRange(0);
//       }
//     });
//   };

//   self.uploadFileListB200 = function (data, event) {
//     var formData = new FormData();
//     ko.utils.arrayForEach(event.target.files, function (file) {

//       var fileName = file.name;
//       var type = fileName.substr(fileName.indexOf('.') + 1, fileName.length); // result -> .jpg
//       var MN654 = getMN654(type);

//       if (checkFileSize(file.size)) {
//         if (MN654 !== null) {
//           file.id = new Date().getTime(); // id css progress bar
//           var FH150 = self.itemListOfTabB200().FH150;
//           FH150 = (!!FH150) ? parseInt(FH150) : 0;
//           FB050 = self.itemListOfTabB200().PB050;
//           FC150 = self.itemListOfTabB200().PC150;
//           MV659 = self.itemListOfTabB200().PC150;
//           FH200 = self.itemListOfTabB200().FH200;

//           formData.append("files", file);
//           formData.append("pnFH150", FH150);
//           formData.append("pnFB050", FB050);
//           formData.append("pvFC150", FC150);
//           formData.append("pvMV659", MV659);
//           formData.append("pnFH200", FH200);
//           formData.append("pnMN654", MN654);
//           formData.append("pvMV656", 'B200');

//           if (MN654 === 1) {
//             self.listDocumentsUpload.push(file);
//           } else if (MN654 === 2) {
//             self.listImagesUpload.push(file);
//           } else if (MN654 === 3) {
//             self.listFilmsUpload.push(file);
//           }

//           showLoading();
//           $.ajax({
//             url: "/m650/insert_m650c",
//             cache: false,
//             contentType: false,
//             processData: false,
//             data: formData,
//             type: 'POST',
//             xhr: function () {
//               var xhr = $.ajaxSettings.xhr();
//               xhr.upload.onprogress = function (data) {
//                 var perc = Math.round((data.loaded / data.total) * 100);
//                 $('#' + file.id).css('width', perc + '%');
//                 if (perc === 100) {
//                   if (MN654 === 1) {
//                     self.listDocumentsUpload().splice(self.listDocumentsUpload().indexOf(file), 1);
//                   } else if (MN654 === 2) {
//                     self.listImagesUpload().splice(self.listImagesUpload().indexOf(file), 1);
//                   } else if (MN654 === 3) {
//                     self.listFilmsUpload().splice(self.listFilmsUpload().indexOf(file), 1);
//                   }
//                 }
//               };
//               return xhr;
//             },
//             success: function (res) {
//               hideLoading();
//               res = typeof res === 'string' ? JSON.parse(res) : res;
//               if (res.status === 'success') {
//                 swalSuccess(undefined, lang['_update_success'], undefined, function () {
//                   self.loadListOfTabB200();
//                   self.loadListM650(self.itemListOfTabB200().PB050, self.itemListOfTabB200().PC150, MN654, 'B200', 0);
//                 });
//                 self.listImagesUpload([]);
//                 self.listFilmsUpload([]);
//                 self.listDocumentsUpload([]);
//               } else {
//                 console.log("File upload error: " + res.error);
//                 swalError(lang['_error'], lang['_update_failed']);
//               }
//             }
//           });
//         } else {
//           swalError(lang['_error'], lang['_type_not_support']);
//         }
//       } else {
//         swalError(lang['_error'], lang['_file_size_not_large']);
//       }
//     });
//   };

//   self.loadListM650 = function (pnFB050, pvFC150, pnMN654, pvMV656, pnMN658) {
//     showLoading();
//     $.ajax({
//       type: "POST",
//       url: "/m650/list_m650",
//       data: {
//         pnFB050: !!pnFB050 ? pnFB050 : 0,
//         pvFC150: !!pvFC150 ? pvFC150 : null,
//         pnMN654: !!pnMN654 ? pnMN654 : 0,
//         pvMV656: !!pvMV656 ? pvMV656 : null,
//         pnMN658: !!pnMN658 ? pnMN658 : 0
//       },
//       dataType: "json",
//       success: function (res) {
//         hideLoading();
//         res = typeof res === 'string' ? JSON.parse(res) : res;
//         self.listM650([]);
//         if (res.status === 'success') {
//           self.listM650(res.data);
//         }
//       }
//     });
//   };

//   self.stornoTabM650 = function (PM650, MV652, MN654) {
//     swalComfirm(lang['_confirm_delete_file'], lang['_messenger_confirm_delete_file'], function (res) {
//       if (res.value) {
//         showLoading();
//         $.ajax({
//           type: "POST",
//           url: "/m650/storno_m650",
//           data: {
//             pnMN654: MN654,
//             pnPM650: PM650,
//             pvMV652: MV652
//           },
//           dataType: "json",
//           success: function (res) {
//             hideLoading();
//             res = typeof res === 'string' ? JSON.parse(res) : res;
//             if (res.status === 'success') {
//               swalSuccess(undefined, res.message, undefined, function () {
//                 self.loadListOfTabB200();
//                 self.loadListM650(self.itemListOfTabB200().PB050, self.itemListOfTabB200().PC150, MN654, 'B200', 0);
//               });
//             }
//           }
//         });
//       }
//     }, "Có");
//   };

//   self.downloadFile = function (filename, MN654) {
//     var url = "/m650/download?filename=";
//     if (!!filename) {
//       window.location = url + "[" + filename + "]&type=" + MN654;
//     } else {
//       if (self.listItemDownload().length === 0) {
//         swalError(undefined, "Không có file tải xuống");
//       } else {
//         window.location = url + "[" + self.listItemDownload() + "]&type=" + MN654;
//         self.listItemDownload([]);
//       }
//     }
//   };

//   // Func set % cong viec hoan thanh
//   self.setValRatioComplete = function () {
//     if (self.itemReportWork().length === self.listOfTabB275().length) {
//       $('#sb_complete_work').setValRange(100); // set val seekbar
//       self.showNoteMaintenance(true); // hien thi ghi chu
//       self.itemReportWork([]);
//       self.listOfTabB275().forEach(function (item) {
//         self.itemReportWork.push(item.FB100);
//       });
//     } else {
//       self.showNoteMaintenance(false);
//       self.itemReportWork([]);
//       $('#sb_complete_work').setValRange(0);
//     }
//     return true;
//   };

//   self.changeRatioComplete = function () {
//     if (parseInt(self.pnCN315()) === 100) {
//       self.showNoteMaintenance(true);
//       self.itemReportWork([]);
//       self.listOfTabB275().forEach(function (item) {
//         self.itemReportWork.push(item.FB100);
//       });
//     } else {
//       self.itemReportWork([]);
//       self.showNoteMaintenance(false);
//     }
//   };

// };
// var b200tyVM = new B200TYViewModel();
// ko.applyBindings(b200tyVM);
// b200tyVM.init();

/**
 * @Author: hyn
 * @Create: 8/3/2017
 * @Module: h200
 */
var H200ViewModel = function () {
	var self = this;
	// LIST
	self.h200c_arr = ko.observableArray();

	// VAR

	self.init = function () {
		self.comb_H250();
		self.eventListener();
		self.list_oftabh200c(+$('[name="fh200s"]').val() || 0);
		if (!!$('#facilio_wrapper.tree-view').length && treePlugin && $('.left-content .tree').length) {
			self.processDataTree(treePlugin.bigTreeData, '.left-content .tree');
		};
	};
	// ==============================================
	// ==============EVENT LISTENER==================
	// ==============================================
	self.eventListener = function () {
		// insert / add new 
		$(document).off('click', '#dialog_insert_h450 .btn-save').on('click', '#dialog_insert_h450 .btn-save', function (e) {
			var selected_node = $('.left-content .tree').treeview('getSelected'),
				fh200 = selected_node.length ? selected_node[0].val : ($('[name="fh200s"]').val() || 0);
			self.insert_h450f(+fh200);
		});
		
		// add new h200
		openDialog_cb('.btn-category-manage', '#dialog_insert_h450', '', function (_this, ev) {
			$('#insert_h450 .row:nth-child(2)').removeClass('hidden');
			$('#insert_h450 .row:nth-child(2) [name="FH250"]').prop('disabled', false);
			$('#insert_h450').get(0).reset();
		})

		// edit h200 name
		openDialog_cb('.ic-edit', '#dialog_insert_h450', '', function (_this, ev) {
			var $li = $(_this).parents('li'),
				id = $li.attr('lang'),
				data = JSON.parse($li.find('[name="h200"]').val() || '{}');
			$('#insert_h450 .row:nth-child(2)').addClass('hidden');
			$('#insert_h450 .row:nth-child(2) [name="FH250"]').prop('disabled', true);
			$('#insert_h450 .row:nth-child(2) [name="HV451"]').text(data.HV201);
			insert_h450.lang = id;
		})

		//draggable
		$(document).off('mousedown', '#h200c_arr li').on('mousedown', '#h200c_arr li', function (e) {
			if (e.type === 'mousedown') $(this).addClass('move');
		})


	};

	self.h200_eventListener = function () {
	};
	// ==============================================
	// ==============================================

	self.list_oftabh200c = function (pnPH200, pvHV451, pnFK100) {
		var url = '/h200/list_oftabh200c';

		url += arguments.length ? '?' : '';
		url += pnPH200 ? 'pnPH200=' + pnPH200 : '';
		url += (pvHV451 ? (arguments.length > 1 ? '&' : '') + 'pvHV451=' + pvHV451 : '');
		url += (pnFK100 ? (arguments.length > 1 ? '&' : '') + 'pnFK100=' + pnFK100 : ''); ``
		$.ajax({
			url: url,
			dataType: 'JSON',
			type: 'GET',
			success: function (res) {
				if (res.status === 'success') {
					self.h200c_arr(res.data);
				}
			},
			complete: function (ans) {
				self.h200_eventListener();
				self.draggable();
			}
		});
	};

	self.processDataTree = function (h200Lst, $container) {
		var tree = this.getAllChildWithTarget(h200Lst, 0);
		$($container).treeview({
			data: tree,
			expandIcon: "faci-arrow-right ic-arrow-menu",
			collapseIcon: "faci-arrow-down ic-arrow-menu",
			enableLinks: true,
			selectedColor: "#ffffff",
			selectedBackColor: "#0094fb",
			levels: 3,
			onNodeSelected: function (event, data) {
				self.list_oftabh200c(+data.val)
			}
		});
	};

	self.getAllChildWithTarget = function (h200Lst, fh200p) {
		return h200Lst.reduce(function (bigTree, h200) {
			var isSelected = false;
			if (+h200.VAL === self.currentFH200) {
				tree_label.innerText = h200.LABEL;
				isSelected = true;
			}
			if (h200.FH200P === fh200p) {
				var treeNode = {
					text: '<span>' + h200.LABEL + '</span>',
					val: h200.VAL,
					state: {
						selected: isSelected
					}
				},
					nodes = self.getAllChildWithTarget(h200Lst, h200.VAL);
				if (!!nodes.length)
					treeNode.nodes = nodes;
				bigTree.push(treeNode);
			}
			return bigTree;
		}, []);
	};

	self.insert_h450f = function (fh200) {
		var form_data = formObj2Json($('#insert_h450 [form="insert_h450"]').serializeArray()),
			empty_field = search('', form_data);
		if (!!empty_field) {
			var field_label = $('#insert_h450 :input[name="' + empty_field + '"]').parents('.row').find('label.text-right')
				.text().replace('(*)', '').trim();
			swalError(lang['_msg_not_enough'], lang['_enter_field'] + field_label);
		} else {
			$('.faci-loading').addClass('open');
			form_data['HV201'] = form_data['HV451'];
			form_data['FH200P'] = fh200;
			false && $.ajax({
				url: '/h450/insert_h450f',
				dataType: 'JSON',
				type: 'POST',
				data: form_data,
				success: function (res) {
					$('.faci-loading').removeClass('open');
					if (res.status === 'success') {
						swalSuccess(lang['_update_success'], '', 4000, function () {
							$('#insert_h450 .faci-close').trigger('click');
						});
					} else {
						swalError(lang['_update_fail']);
					}
				},
			});
		}
	};

	self.comb_H250 = function () {
		$.ajax({
			url: '/comtab/com_H250',
			dataType: 'JSON',
			type: 'GET',
			success: function (res) {
				if (res.status === 'success') {
					var data = res.data
					$('[name="FH250"]').append($('<option>', { html: 'Choose', value: '' }))
					for (var i in data) {
						$('[name="FH250"]').append($('<option>', { html: data[i].LABEL || data[i].VAL, value: data[i].VAL }))
					}
				}
			}
		});

	};

	// update h200 position
	self.draggable = function () {
		var option = {
			appendTo: '#h200c_arr',
			axis: 'y',
			containment: "#h200c_arr",
			cursor: "pointer",
			opacity: 0.5,
			revert: 'invalid',
			revertDuration: 1000,
			scope: 'fh200',
			scroll: false,
			snap: false,
			stack: 'item-xxxx',
			zIndex: 100,
			helper: "clone",
			connectToSortable: "#h200c_arr",
			handle: '.ic-move',
			// 			cancel: "li :not(.ic-move)",
		}
		$("#h200c_arr>li").draggable(option);
		$("#h200c_arr").sortable({
			axis: 'y',
			handle: '.ic-move',
			start: function (event, ui) {
				ui.item.addClass('clone');
			},
			stop: function (event, ui) {
				swalComfirm(lang['_update_category_manage'], lang['_msg_update_category_manage'], function (ans) {
					if (ans.value) { //update
						$('#h200c_arr li.move:not(".clone")').remove();
					} else { // revert
						$('#h200c_arr li.move.clone').remove();
					}
					setTimeout(function () {
						$('#h200c_arr li').removeClass('move clone');
					}, 200)
				}, lang['_update']);
			},

		});


	};

}
var h200VM = new H200ViewModel();
ko.applyBindings(h200VM);
h200VM.init();
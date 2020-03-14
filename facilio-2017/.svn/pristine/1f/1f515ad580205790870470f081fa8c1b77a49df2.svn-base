
module.exports = class Tree {
  constructor() {
    this.bigTreeData = window.bigTreeData;
    this.currentFH200 = window.currentFH200;
    this.processDataTree(this.bigTreeData);
  }
  updateTreePoint(label, val) {
    tree_label.innerHTML = label;
    $.ajax({
      type: "POST",
      url: '/facilio/update_tree_point',
      data: { fh200: val },
      dataType: 'json',
      success: function (res) {
        if (res.status === 'success')
          location.reload();
      }
    });
  }
  processDataTree(h200Lst) {
    var self = this,
      tree = this.getAllChildWithTarget(h200Lst, 0);
    $('#big_tree').treeview({
      data: tree,
      expandIcon: "faci-arrow-right ic-arrow-menu",
      collapseIcon: "faci-arrow-down ic-arrow-menu",
      enableLinks: true,
      selectedColor: "#ffffff",
      selectedBackColor: "#0094fb",
      levels: 3,
      onNodeSelected: function (event, data) {
        self.updateTreePoint(data.text, data.val);
      }
    });
  }
  getAllChildWithTarget(h200Lst, fh200p) {
    var self = this;
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
  }
}

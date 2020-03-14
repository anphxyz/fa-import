// Plugin range
(function(){
    
    var defaults = {
      showValTo: null,
      value: 0
    }, options;
    
    // Create range
    $.fn.createRange = function (config) {
      options = $.extend(defaults, config);
      $(this).val(options.value);
      var val = (options.value - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
      $(options.showValTo).text(options.value + '%');
      $(this).css('background-image', '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + val + ', var(--turquoise)), ' + 'color-stop(' + val + ', var(--light-blue-grey))' + ')');
      $(this).on('change', function () {
        val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
        $(this).css('background-image', '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + val + ', var(--turquoise)), ' + 'color-stop(' + val + ', var(--light-blue-grey))' + ')');
        $(options.showValTo).text($(this).val() + '%');
      });
    };
    
    // Get value
    $.fn.getValRange = function(){
      return $(this).val();
    };
    
    // Set value
    $.fn.setValRange = function (value) {
      options.value = value;
      var val = (options.value - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
      $(this).val(options.value);
      $(options.showValTo).text($(this).val() + '%');
      $(this).css('background-image', '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + val + ', var(--turquoise)), ' + 'color-stop(' + val + ', var(--light-blue-grey))' + ')');
      $(this).on('change', function () {
        val = ($(this).val() - $(this).attr('min')) / ($(this).attr('max') - $(this).attr('min'));
        $(this).css('background-image', '-webkit-gradient(linear, left top, right top, ' + 'color-stop(' + val + ', var(--turquoise)), ' + 'color-stop(' + val + ', var(--light-blue-grey))' + ')');
        $(options.showValTo).text($(this).val() + '%');
      });
    };
    
})(jQuery);


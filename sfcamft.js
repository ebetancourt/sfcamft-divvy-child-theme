jQuery(document).ready(function( $ ) {
    if ($('select[name="additional_lists[]"]').length) {
        $('select[name="additional_lists[]"]').parent().append('<input name="additional_lists[]" value="'+$('select[name="additional_lists[]"] option:first').val()+'" type="hidden" />');
        $('select[name="additional_lists[]"]').val($('select[name="additional_lists[]"] option:first').val());
        $('select[name="additional_lists[]"]').prop('disabled', true);
    }
});
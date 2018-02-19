require('./common');
import '../scss/stylesheet.scss'
import moment from 'moment';

var editor = $(".text-editor");
if (editor !== null) {
    CKEDITOR.replace('editor');
}

var date = $('.datepicker');

date.datepicker();
date.val(() => {
    return moment().format("MM/DD/YYYY");
});
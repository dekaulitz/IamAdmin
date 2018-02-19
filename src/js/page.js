import moment from 'moment';

let editor = $(".text-editor");
editor.length !== 0 ? CKEDITOR.replace('editor') : "";
let date = $('.datepicker');
date.datepicker();
date.val(() => {
    return moment().format("MM/DD/YYYY");
});
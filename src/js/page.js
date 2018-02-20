/*
import bootstrap datepicker js and moment js
 */
import moment from 'moment';

var datePicker = require('bootstrap-datepicker');

let editor = $(".text-editor");
editor.length !== 0 ? CKEDITOR.replace('editor') : "";

let date = $('.datepicker');
date.datePicker();
date.val(() => {
    return moment().format("MM/DD/YYYY");
});

module.exports = {
    momment: moment,
    bootstrapDatePicker: datePicker
};
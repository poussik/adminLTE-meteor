import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
//import { AccountsTemplates } from 'meteor/useraccounts:core';

BlazeLayout.setRoot('body');


FlowRouter.notFound = {
    action: function() {
        BlazeLayout.render('generalLayout', {tpl_name: '404'});
        document.title = "AdminLTE | Page not found";
    }
};

// Default route, redirect to /
_.each([
    {u: '',                 v: 'dashboard1'},
    {u: 'dashboard1',       v: ''},
    {u: 'dashboard2',       v: ''},
    {u: 'widget',           v: ''},
    {u: 'ui/buttons',       v: 'buttonsPage'},
    {u: 'ui/general',       v: 'generalPage'},
    {u: 'ui/icons',         v: 'iconsPage'},
    {u: 'ui/modals',        v: 'modalsPage'},
    {u: 'ui/sliders',       v: 'slidersPage'},
    {u: 'ui/timeline',      v: 'timelinePage'},
    {u: 'mailbox/compose',  v: 'composePage'},
    {u: 'mailbox/inbox',    v: 'mailboxPage'},
    {u: 'mailbox/readmail', v: 'readMailPage'},
    {u: 'calendar',         v: 'calendarPage'},
    {u: 'tables/simple',    v: 'simpleDataTablePage'},
    {u: 'tables/data',      v: 'dataTablesPage'},
    {u: 'charts/chartjs',   v: 'chartjsPage'},
    {u: 'charts/flot',      v: 'flotPage'},
    {u: 'charts/inline',    v: 'inlinePage'},
    {u: 'charts/morris',    v: 'morrisPage'},
    {u: 'forms/advanced',   v: 'advanceFormPage'},
    {u: 'forms/general',    v: 'generalFormPage'},


], function(o) {
    const u = o.u;
    const v = (o.v.length ? o.v : o.u)
    FlowRouter.route('/' + u, {
        action: function() {
            BlazeLayout.render('generalLayout', {tpl_name: v });
            document.title = "AdminLTE | " + v;
        },
    });
})
/*
 Router.route('/forms/advanced', function () {
 this.render('advanceFormPage');
 this.layout('generalLayout');
 document.title = "AdminLTE | Advanced Forms";
 });

 Router.route('/forms/general', function () {
 this.render('generalFormPage');
 this.layout('generalLayout');
 document.title = "AdminLTE | General Forms";
 });
 */
/* Have to be last to catch all no defined URL */
/*
 Router.route('/(.*)', function () {
 this.name = 'page404'
 this.render('404');
 this.layout('generalLayout');
 document.title = "AdminLTE | Page not found";
 });
 */
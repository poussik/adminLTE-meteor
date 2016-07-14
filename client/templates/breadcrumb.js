
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

Template.breadcrumb.onCreated(function() {
    this.lst = new ReactiveVar([]);

    // https://docs.meteor.com/api/templates.html#Blaze-TemplateInstance-autorun
    this.autorun(function() {

        // https://github.com/kadirahq/flow-router#flowrouterwatchpathchange
        FlowRouter.watchPathChange();
        Template.instance().lst.set(FlowRouter.current().path.split('/'))
    });
});

Template.breadcrumb.helpers({
    getLst() {
        var res = _.map(Template.instance().lst.get(), (v) => {
            return {cls: '', 'name': v};
        });
        res[res.length - 1].cls = 'active';
        return res;
    }
});



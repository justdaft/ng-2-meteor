/// <reference path="../typings/angular2-meteor.d.ts" />

import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2-meteor';

@Component({
    selector: 'app'
})
@View({
    templateUrl: 'client/app.html',
    directives: []
})
export class <%= appName %> {
    greeting: string = 'hello world';
    counter: any;
    constructor() {
        Session.set('counter', 0);
    }
    clickButton() {
        // increment the counter when button is clicked
        Session.set('counter', Session.get('counter') + 1);
        this.counter = Session.get('counter');
        console.log(Session.get('counter'));
    }
}

bootstrap(<%= appName %>);
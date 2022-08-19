import { inject, useView } from 'aurelia-framework';
import { DialogController } from 'aurelia-dialog';

@inject(DialogController)
@useView("components/dialog/confirmRO.html")
export class ConfirmRO {
    constructor(controller) {
        this.controller = controller;
        this.answer = null;
    }

    activate(data) {
        this.title = data.title;
        this.message = data.message;
    }
}
//import {computedFrom} from 'aurelia-framework';
// import { inject, bindable } from 'aurelia-framework';

import { inject, Aurelia, BindingEngine, computedFrom } from 'aurelia-framework';
import { AuthService } from 'aurelia-authentication';
import { Router } from 'aurelia-router';
import { LocalStorage } from './utils/storage';

@inject(Aurelia, Router, BindingEngine)
export class Welcome {
 

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  //@computedFrom('firstName', 'lastName')

  // constructor() {

  // }

  constructor(aurelia, router, bindingEngine) {
    this.aurelia = aurelia;
    this.router = router;
    this.bindingEngine = bindingEngine;

  
  }

  
}
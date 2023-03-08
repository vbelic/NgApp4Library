import * as i0 from '@angular/core';
import { Injectable, Component, NgModule } from '@angular/core';

class MyLbService {
    constructor() { }
}
MyLbService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MyLbService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
MyLbService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MyLbService, providedIn: 'root' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MyLbService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: function () { return []; } });

class MyLbComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyLbComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MyLbComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
MyLbComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.3.12", type: MyLbComponent, selector: "lib-my-lb", ngImport: i0, template: `
<form  method="post">
  <div >
    <label for = "username"> <b> Username: </b> </label>
    <input type = "text" placeholder = "Enter Username here" name = "username" style = "margin:10px;" required>
  <br/>
    <label for = "passwd"> <b> Password: </b> </label>
    <input type = "password" placeholder = "Enter Password here" name = "passwd" style = "margin:10px;" required>
  <br/>
     <button type = "submit"> Login </button>
</div>
</form>
  `, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MyLbComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'lib-my-lb',
                    template: `
<form  method="post">
  <div >
    <label for = "username"> <b> Username: </b> </label>
    <input type = "text" placeholder = "Enter Username here" name = "username" style = "margin:10px;" required>
  <br/>
    <label for = "passwd"> <b> Password: </b> </label>
    <input type = "password" placeholder = "Enter Password here" name = "passwd" style = "margin:10px;" required>
  <br/>
     <button type = "submit"> Login </button>
</div>
</form>
  `,
                    styles: []
                }]
        }], ctorParameters: function () { return []; } });

class MyLbModule {
}
MyLbModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MyLbModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
MyLbModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MyLbModule, declarations: [MyLbComponent], exports: [MyLbComponent] });
MyLbModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MyLbModule, imports: [[]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.3.12", ngImport: i0, type: MyLbModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        MyLbComponent
                    ],
                    imports: [],
                    exports: [
                        MyLbComponent
                    ]
                }]
        }] });

/*
 * Public API Surface of my-lb
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLbComponent, MyLbModule, MyLbService };
//# sourceMappingURL=my-lb.mjs.map

/// <reference path="../typings/tsd.d.ts"/>

export class MyAppCtrl {

}

export class GreetingCtrl {
    public name: string;

    get upperName() {
        return this.name.toUpperCase();
    }
}

export class CounterCtrl {
    public count: number;

    constructor() {
        this.count = 0;
    }

    public inc() {
        console.log(this.count);
        this.count++;
    }

    public dec() {
        this.count--;
    }

}


class HogeCtrl {
    public value: number;
    public innerTemplate: string;
    public functionBindings: Function;


    constructor() {
        this.value = 123;
        this.innerTemplate = `ほげ`;
    };

    _onClick(num) {
        //console.log(num);
        //console.log(this);
        //console.log(this.value);
        this.value++;
        console.log(num);
        this.innerTemplate = `<modal>ふが</modal>`;
        this.functionBindings();
    };
}


export class ModalComponent implements angular.IComponentOptions {
    public bindings: any;
    public controller: any;
    public template: string;

    constructor() {
        this.bindings = {
            value: '<',  // one way binding(input)
            param: '=',
            functionBindings: '&'  // one way binding(output)
        };
        this.controller = HogeCtrl;
        this.template =
            `
            <style>
            .modal-content {
                width:50%;
                margin:1.5em auto 0;
                padding:10px 20px;
                border:2px solid #aaa;
                background:#fff;
                z-index:2;
                position:fixed;
            }
            </style>

            <div class="modal-content">
                huga
                {[ $ctrl.onClick(987) ]}
            </div>
            `;
    };
}
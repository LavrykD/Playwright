import { step } from "../helpers/step";

export class SomeSteps {
    @step('Some step 1')
    async someStep1() {
        console.log('someStep1');
    }

    @step('Some step 2')
    async someStep2() {
        console.log('someStep2');
    }
}
import { applyMixins } from "../helpers/utils";
import { LoginSteps } from "./login";
import { SomeSteps } from "./some-steps"

class Steps { };

interface Steps extends LoginSteps, SomeSteps { };

applyMixins(Steps, [LoginSteps, SomeSteps]);

export { Steps };
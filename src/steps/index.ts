import { applyMixins } from "../helpers/utils";
import { BaseSteps } from "./base-steps";
import { DriversSteps } from "./drivers";
import { LoginSteps } from "./login";

class Steps extends BaseSteps { };

interface Steps extends LoginSteps, DriversSteps { };

applyMixins(Steps, [LoginSteps, DriversSteps]);

export { Steps };
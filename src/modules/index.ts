import { Activator } from "../type";
import { craftActivate } from "./craft/activate";
import { lemonSqueezyActive } from "./lemon-squeezy/activate";
import { lemonsqueezyValidate } from "./lemon-squeezy/validate";
import { paddleActivate } from "./paddle/activate";
import { paddleVerify } from "./paddle/validate";

export const activator: Activator = {
  lemonSqueezy: {
    base: "https://api.lemonsqueezy.com/v1/licenses",
    activate: lemonSqueezyActive,
    validate: lemonsqueezyValidate,
  },
  paddle: {
    base: "https://v3.paddleapi.com/3.2/license",
    activate: paddleActivate,
    validate: {
      base: "verify",
      func: paddleVerify,
    },
  },
  craft: {
    base: "https://api.craft.do/auth/v3",
    activate: {
      base: "profile",
      func: craftActivate,
    },
  },
};
import { JISX0213 } from "https://code4fukui.github.io/mojikiban/JISX0213.js";
//import { Validator } from "../input-number/Validator.js";
import { Validator } from "https://code4fukui.github.io/input-number/Validator.js";

class JapaneseValidator extends Validator {
  isValid(c) {
    if (c == "") {
      return false;
    }
    const r = JISX0213.shrink(c);
    if (r == null && r.length == 0) {
      return false;
    }
    if (!JISX0213.isValid(r)) {
      return false;
    }
    return true;
  }
  normalize(c) {
    const errs = JISX0213.validate(c);
    if (errs.length == 0) {
      return c;
    }
    const c2 = JISX0213.shrink(c);
    if (!c2) {
      return null;
    }
    if (!JISX0213.isValid(c2)) {
      return null;
    }
    return c2;
  }
}

export { JapaneseValidator };

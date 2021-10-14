import { JapaneseValidator } from "./JapaneseValidator.js";
import { InputWithValidator } from "https://code4fukui.github.io/input-number/InputWithValidator.js";

class InputJa extends InputWithValidator {
  constructor(opts) {
    super(new JapaneseValidator(), opts);
  }
}

customElements.define("input-ja", InputJa);

export { InputJa };


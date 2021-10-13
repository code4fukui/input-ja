import * as t from "https://deno.land/std/testing/asserts.ts";
import { JapaneseValidator } from "./JapaneseValidator.js";

Deno.test("isValid", () => {
  const v = new JapaneseValidator();
  t.assert(v.isValid("1"));
  t.assert(v.isValid("１"));
  t.assert(v.isValid("a"));
  t.assert(v.isValid("_"));
  t.assert(v.isValid("-"));
  t.assert(v.isValid("😍"));
  t.assert(v.isValid("."));
  t.assert(v.isValid("$"));
  t.assert(v.isValid("あ"));
  t.assert(v.isValid("ｱ"));
  t.assert(!v.isValid(""));
});
Deno.test("normalize", () => {
  const v = new JapaneseValidator();
  t.assertEquals(v.normalize("1"), "1");
  t.assertEquals(v.normalize("１"), "1");
  t.assertEquals(v.normalize("."), ".");
  t.assertEquals(v.normalize("ｱ"), "ア");
  t.assertEquals(v.normalize("あ"), "あ");
  t.assertEquals(v.normalize(""), "");
});
Deno.test("validate", () => {
  const v = new JapaneseValidator();
  t.assertEquals(v.validate("123"), "123");
  t.assertEquals(v.validate("０１２３"), "0123");
  t.assertEquals(v.validate("０あ１い２３"), "0あ1い23");
  t.assertEquals(v.validate("ｱabc_def-ghi.kjl"), "アabc_def-ghi.kjl");
  //t.assertEquals(v.validate("た😍たた"), "たたた"); // not supported yet
});

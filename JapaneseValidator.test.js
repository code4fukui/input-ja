import * as t from "https://deno.land/std/testing/asserts.ts";
import { JapaneseValidator } from "./JapaneseValidator.js";

Deno.test("isValid", () => {
  const v = new JapaneseValidator();
  t.assert(v.isValid("1"));
  t.assert(v.isValid("ï¼"));
  t.assert(v.isValid("a"));
  t.assert(v.isValid("_"));
  t.assert(v.isValid("-"));
  t.assert(v.isValid("ð"));
  t.assert(v.isValid("."));
  t.assert(v.isValid("$"));
  t.assert(v.isValid("ã"));
  t.assert(v.isValid("ï½±"));
  t.assert(!v.isValid(""));
});
Deno.test("normalize", () => {
  const v = new JapaneseValidator();
  t.assertEquals(v.normalize("1"), "1");
  t.assertEquals(v.normalize("ï¼"), "1");
  t.assertEquals(v.normalize("."), ".");
  t.assertEquals(v.normalize("ï½±"), "ã¢");
  t.assertEquals(v.normalize("ã"), "ã");
  t.assertEquals(v.normalize(""), "");
});
Deno.test("validate", () => {
  const v = new JapaneseValidator();
  t.assertEquals(v.validate("123"), "123");
  t.assertEquals(v.validate("ï¼ï¼ï¼ï¼"), "0123");
  t.assertEquals(v.validate("ï¼ãï¼ãï¼ï¼"), "0ã1ã23");
  t.assertEquals(v.validate("ï½±abc_def-ghi.kjl"), "ã¢abc_def-ghi.kjl");
  //t.assertEquals(v.validate("ãðãã"), "ããã"); // not supported yet
});

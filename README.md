# input-ja

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom HTML element `<input-ja>` that accepts only JIS X 0213 characters.

## Demo

Try it live: https://code4fukui.github.io/input-ja/

## Features

-   **JIS X 0213 Validation:** Filters input in real-time to allow only characters within the JIS X 0213 standard.
-   **Automatic Normalization:**
    -   Converts full-width alphanumeric characters to half-width (e.g., `Ａ` → `A`, `１` → `1`).
    -   Converts half-width katakana to full-width (e.g., `ｱｲｳ` → `アイウ`).
-   **Standard Element Behavior:** Works like a standard `<input>` element. You can use attributes like `maxlength`, `placeholder`, and `id`, and access the sanitized content via the `.value` property.

## Usage

1.  Import the module from a CDN.
2.  Use the `<input-ja>` tag in your HTML.

```html
<!-- 1. Import the component -->
<script type="module" src="https://code4fukui.github.io/input-ja/input-ja.js"></script>

<!-- 2. Use it in your HTML like a standard input -->
<input-ja id="my-input" maxlength="10" placeholder="JIS X 0213 text only"></input-ja>

<!-- You can get its sanitized value in JavaScript -->
<script type="module">
  const myInput = document.getElementById('my-input');
  myInput.onchange = () => {
    console.log(myInput.value);
  };
</script>
```

## License

MIT License — see [LICENSE](LICENSE).
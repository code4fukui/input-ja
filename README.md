# input-ja

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

An input box component that only accepts input of JISX0213 characters.

## Demo
https://code4fukui.github.io/input-ja/

## Features
- Accepts only JISX0213 characters
- Provides normalization of input

## Requirements
None

## Usage
```html
<script type="module" src="https://code4fukui.github.io/input-ja/input-ja.js"></script>
<input-ja id=inp maxlength=10></input-ja>

<script type="module">
onload = () => {
  inp.onchange = () => {
    console.log(inp.value);
  };
};
</script>
```

## License
MIT License — see [LICENSE](LICENSE).
# input-ja

- JISX0213のみ入力可能な入力ボックス
- https://code4fukui.github.io/input-ja/

## usage

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

# input-ja

JIS X 0213の文字のみ入力可能な入力ボックスコンポーネントです。

## デモ
https://code4fukui.github.io/input-ja/

## 機能
- JIS X 0213の文字のみ入力可能
- 入力内容の正規化

## 使い方
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

## ライセンス
MIT License
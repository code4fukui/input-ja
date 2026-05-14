# input-ja

JIS X 0213の文字のみを受け付けるカスタムHTML要素 `<input-ja>` です。

## デモ

ブラウザで試す: https://code4fukui.github.io/input-ja/

## 機能

-   **JIS X 0213 バリデーション:** 入力をリアルタイムでフィルタリングし、JIS X 0213規格内の文字のみを許可します。
-   **自動正規化:**
    -   全角英数字を半角に変換します（例: `Ａ` → `A`、`１` → `1`）。
    -   半角カタカナを全角に変換します（例: `ｱｲｳ` → `アイウ`）。
-   **標準的な要素の振る舞い:** 標準の `<input>` 要素と同様に動作します。`maxlength`、`placeholder`、`id` などの属性を使用でき、`.value` プロパティからサニタイズされた値を取得できます。

## 使い方

1.  CDNからモジュールをインポートします。
2.  HTML内で `<input-ja>` タグを使用します。

```html
<!-- 1. コンポーネントをインポートします -->
<script type="module" src="https://code4fukui.github.io/input-ja/input-ja.js"></script>

<!-- 2. 標準のinput要素のようにHTMLで使用します -->
<input-ja id="my-input" maxlength="10" placeholder="JIS X 0213 text only"></input-ja>

<!-- JavaScriptでサニタイズされた値を取得できます -->
<script type="module">
  const myInput = document.getElementById('my-input');
  myInput.onchange = () => {
    console.log(myInput.value);
  };
</script>
```

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) を参照してください。

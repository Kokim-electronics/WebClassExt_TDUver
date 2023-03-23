## WebClassExt_TDUver

BearOfficeさんの[Chrome拡張機能](https://github.com/BearOffice/WebClass-Extension)を東京電機大学向けに変更しました。他大学に関してはⅤ.他大学向けをご覧ください。

### Ⅰ.機能
1. https://github.com/BearOffice/WebClass-Extension を電機大学向けに修正
2. 自動ログイン
   - 毎度毎度の「ログイン」ボタン押下が無くなる
3. ホーム画面のスタイル変更
4. 各科目ページのタブ開閉
5. (v3.1.0からの変更点 - BearOfficeさん側でV3に対応したため修正)

### Ⅱ.導入

参考 : <br>[カスタムの Chrome アプリと拡張機能を作成して公開する - Chrome Enterprise and Education ヘルプ](https://support.google.com/chrome/a/answer/2714278?hl=ja)

1. [WebClass-Extension](https://github.com/BearOffice/WebClass-Extension/releases) から`WebClassExt.zip`をDL
2. [WebClassExt_TDUver](https://github.com/Kokim-electronics/WebClassExt_TDUver/releases)から`Assets - WebClassExt_TDUver-v4.0.0.zip`をDL
3. 解凍したWebClassExtをTDUverで置き換える
4. `chrome://extensions/`へアクセス、デベロッパーモード(Chrome)オン

5. `WebClass-Extension`フォルダ(manifest.jsonが入っているフォルダ以外はエラーを吐きます)をD&D

6. 設定画面にて学籍番号と共通パスワードを設定

### Ⅲ.備考
- ブラウザ右上のパズルピースアイコンから本拡張機能をピン止めするとアクセスが楽に。
- サポートは[#WebClassExt_V3patch](https://twitter.com/search?q=%23WebClassExt_V3patch)にて

### Ⅳ.参考資料
BearOffice/WebClass-Extension: ウェブクラス(WebClass)の利便性を向上できるChrome拡張機能． https://github.com/BearOffice/WebClass-Extension 

a01sa01to/WebClass-PreventDL:埼玉大学生向けChrome拡張機能． https://github.com/a01sa01to/WebClass-PreventDL

### Ⅴ.他大生向け
manifest.jsonやbackground.jsのWebclassのURL変えると他の大学でも使えるかもしれません

最終更新日:2023/03/23 13:00
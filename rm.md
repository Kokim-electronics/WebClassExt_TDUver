[chrome://extensions/](chrome://extensions/)

## DENDAI_UNIPA_Utilities

### Ⅰ.機能
1. 自動ログイン
   - 毎度毎度の「ログイン」ボタン押下が無くなる
2. 未読タブの自動選択
   - ログイン直後に未読掲示が見れるようになる
3. 「学生時間割」「授業時間割」のスタイル変更
   - 修得科目を設定することで、あの見にくい授業時間割から修得済み科目を非表示にすることが可能
   - 各科目をタブ化することですっきりした見た目に
   - 不要な6～8限を削除（昼間部）
4. 「シラバス照会」「成績照会」のボタン位置変更
5. 後期期間中、前期の時間割を非表示に
6. （構想中）掲示板の添付資料をダウンロードなしで閲覧できるようにしたい

### Ⅱ.導入

参考 : <br>[カスタムの Chrome アプリと拡張機能を作成して公開する - Chrome Enterprise and Education ヘルプ](https://support.google.com/chrome/a/answer/2714278?hl=ja)

1. `Releases - Assets - Source code (zip)` もしくは `Code - Download ZIP`からDL
2. `chrome://extensions/`へアクセス

3. デベロッパーモードオン

4. `DENDAI_UNIPA_Utilities-vx.x.x`フォルダをD&D

5. 設定画面にて
学籍番号と共通パスワードを設定
6. 前期後期を設定
7. 科目名は時間割から消したい科目名をカンマ区切りで入力
   - 指定した科目名から始まる科目を非表示にします
   - 「微分積分学および演習」を指定すると、「微分積分学および演習I」「微分積分学および演習II」共に非表示になります。ご留意ください。

### Ⅲ.備考
- ブラウザ右上のパズルピースアイコンから本拡張機能をピン止めするとアクセスが楽に。
- [#DENDAI_UNIPA_Utilities](https://twitter.com/search?q=%23DENDAI_UNIPA_Utilities)でツイートして頂ければ作者が喜びます。






```
npm i
```

```diff
+ printf("hoge");
- printf("huga");
```


<div class="sequence">
Andrew->China: Says Hello
Note right of China: China thinks\nabout it
China-->Andrew: How are you?
Andrew->>China: I am good thanks!
</div>

<div class="flow">
st=>start: Start:>http://www.google.com[blank]
e=>end:>http://www.google.com
op1=>operation: My Operation
sub1=>subroutine: My Subroutine
cond=>condition: Yes
or No?:>http://www.google.com
io=>inputoutput: catch something...

st->op1->cond
cond(yes)->io->e
cond(no)->sub1(right)->op1
</div>



# 見出し1
## 見出し2
### 見出し3
#### 見出し4
##### 見出し5
###### 見出し6

- リスト1
    - ネスト リスト1_1
        - ネスト リスト1_1_1
        - ネスト リスト1_1_2
    - ネスト リスト1_2
- リスト2
- リスト3

1. 番号付きリスト1
    1. 番号付きリスト1_1
        1. 内容
    2. 番号付きリスト1_2
2. 番号付きリスト2
3. 番号付きリスト3

---

> お世話になります。xxxです。
> 
> ご連絡いただいた、バグの件ですが、仕様です。
>> お世話になります。 yyyです。
>> 
>> あの新機能バグってるっすね

# Tab
    class Hoge
        def hoge
            print 'hoge'
        end
    end

---

    # Space
    class Hoge
      def hoge
        print 'hoge'
      end
    end

インストールコマンドは `gem install hoge` です

normal *italic* normal
normal _italic_ normal
normal **bold** normal
normal __bold__ normal


***
___

---

*    *    *

[Google先生](https://www.google.co.jp/)


[こっちからgoogle][google]
その他の文章
[こっちからもgoogle][google]

[google]: https://www.google.co.jp/


あい

    aa
    aaa
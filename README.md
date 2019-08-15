# Key_management

## 概要

これはディスボードの部室管理アプリです。現在v0.7.0(β版)

[こちら](https://kumachan0210.github.io/Key_management)からアクセスし、利用できます。

外部の人向けの説明は[ここ](https://github.com/kumachan0210/Key_management#%E5%A4%96%E9%83%A8%E3%81%AE%E6%96%B9%E3%81%B8)からです。

## 使い方

### ログイン

ログイン画面

<img src="https://github.com/kumachan0210/Key_management/blob/master/picture/Login.png" width="100%">

* Usernameにあなたの使用する名前を、Passwordに使用できるパスワードを入力してください。

* このアプリではUsernameとログインしたグループからアカウントを特定します。なので、Usernameが異なると別アカウントとして処理されるのでご注意ください。  また、Usernameを間違えてログインしてしまった時、 **そのUsernameも登録されてしまうので僕に報告してください** 。削除します。

***

### 部屋

部屋の画面

<img src="https://github.com/kumachan0210/Key_management/blob/master/picture/Room.jpg" width="100%">

  これは部屋の画面です。左側のRoomというところを押すとこの画面に移ります。
  
  右上のアイコンを押すと情報を更新します。

#### 各部説明

* **真ん中上部**
   * 現在部屋が空いているかどうか表示されます。

* **真ん中中央**
   * 現在部屋の中にいる人が表示されます。

* **右側下部**

   * 部屋に入退出をするボタンがあります。

   * 文字がEnterの時に押すと入室、Exitの時に押すと退室です。

   * ※入室できるのは **鍵を持っている人** または **部屋に人がいる時** です。退室は制限ありません。

***

### 鍵の持ち主

鍵の持ち主の画面

<img src="https://github.com/kumachan0210/Key_management/blob/master/picture/Key_Owner1.jpg" width="100%">

  これは鍵の持ち主の画面です。左側のKey Ownerというところを押すとこの画面に移ります。
  
  右上のアイコンを押すと情報を更新します。

#### 各部説明

* **真ん中中央**
   * 現在の鍵の持ち主が表示されます。(写真は情報保護のためモザイク表示。)

* **真ん中下部**
   * あなたが鍵の持ち主である場合のみ「hand over」ボタンが表示されます。このボタンを押すことによって鍵を渡す画面に移れます。

***

### 鍵の受け渡し

鍵の受け渡しの画面

<img src="https://github.com/kumachan0210/Key_management/blob/master/picture/Key_Owner1.jpg" width="100%">
  
  上のところからのみ飛んでこれます。
  
  右上のアイコンを押すと情報を更新します。

#### 各部説明

* **真ん中上部**
   * ここに文字を入力することで渡す相手を指定できます。

* **真ん中中央**
   * ここのリストにあるものがこのグループにいるメンバーです。名前を押すと、その名前が上部の入力欄に入ります。

* **真ん中下部**
   * このボタンを押すと鍵の受け渡しが実行されます。失敗した時は鍵の所持者は変わらず、上の画面に戻されます。

   * ※ **渡せる相手はこのグループに一度でもログインしたことのある人** に限ります。

***

### ログ

ログの画面

<img src="https://github.com/kumachan0210/Key_management/blob/master/picture/Log.jpg" width="100%">

  これはログの画面です。左側のLogというところを押すとこの画面に移ります。
  
  右上のアイコンを押すと情報を更新します。

#### 各部説明

* **真ん中上部**
   * Filterというボタンを押すと、表示されるログにフィルターをかけられます。

* **真ん中中央**
   * このグループでのログが表示されます。(写真は情報保護のため一部モザイク。)

***

### フィルター

フィルターの画面

<img src="https://github.com/kumachan0210/Key_management/blob/master/picture/Filter.png" width="100%">

  これはフィルターの画面です。ログのところのFilterというボタンを押すとこの画面になります。
  
  ボタンが黄色の時がOn、白色の時がOffです。

#### 各部説明

* **上部**
   * 上部のInOut、Key、Payはログの種類によるフィルターです。InOutは入退出、Keyは鍵の受け渡し、Payは支払いについてのフィルターです。  Onの時にログが表示されます。

* **中央**
   * Infinityは表示するログの期間のフィルターです。Offの時は7日間、Onの時は記録してある分だけログを表示します。

* **下部**
   * OKボタンを押すことによってこの設定が保存されます。このボタンを押さずに切り替えても反映はされますが、次回起動時までは保存されません。

## 外部の方へ

### ログイン

ログイン画面

<img src="https://github.com/kumachan0210/Key_management/blob/master/picture/Login.png" width="100%">

* Usernameにあなたの使用する名前を、Passwordに使用できるパスワードを入力してください。

* このアプリではUsernameとログインしたグループからアカウントを特定します。なので、Usernameが異なると別アカウントとして処理されるのでご注意ください。

***

### 部屋

部屋の画面

<img src="https://github.com/kumachan0210/Key_management/blob/master/picture/Room_v.jpg" width="100%">

  これは部屋の画面です。左側のRoomというところを押すとこの画面に移ります。
  
  右上のアイコンを押すと情報を更新します。

#### 各部説明

* **真ん中上部**
   * 現在部屋が空いているかどうか表示されます。

* **真ん中中央**
   * 現在部屋の中にいる人が表示されます。

* **右側下部**

   * 部屋に入退出をするボタンがあります。

   * 文字がEnterの時に押すと入室、Exitの時に押すと退室です。

   * ※入室できるのは **部屋に人がいる時** です。退室は制限ありません。

***

### 鍵の持ち主

鍵の持ち主の画面

<img src="https://github.com/kumachan0210/Key_management/blob/master/picture/Key_Owner_v.jpg" width="100%">

  これは鍵の持ち主の画面です。左側のKey Ownerというところを押すとこの画面に移ります。
  
  右上のアイコンを押すと情報を更新します。

#### 各部説明

* **真ん中中央**
   * 現在の鍵の持ち主が表示されます。(写真は情報保護のためモザイク表示。)

***

### ログ

ログの画面

<img src="https://github.com/kumachan0210/Key_management/blob/master/picture/Log_v.jpg" width="100%">

  これはログの画面です。左側のLogというところを押すとこの画面に移ります。
  
  右上のアイコンを押すと情報を更新します。

#### 各部説明

* **真ん中中央**
   * あなたのログが表示されます。(写真は情報保護のため一部モザイク。)

***

### 支払い記録(1)

支払い記録の画面(1)

<img src="https://github.com/kumachan0210/Key_management/blob/master/picture/Pay.jpg" width="100%">

  これは支払い記録の画面(1)です。左側のPayというところを押すとこの画面に移ります。
  
  右上のアイコンを押すと情報を更新します。

#### 各部説明

* **真ん中上部**
   * ここに文字を入力することで渡す相手を指定できます。

* **真ん中中央**
   * ここのリストにあるものがグループにいるメンバーです。名前を押すと、その名前が上部の入力欄に入ります。

* **真ん中下部**
   * このOKボタンを押すと次の画面に移ります。

***

### 支払い記録(2)

支払い記録の画面(2)

<img src="https://github.com/kumachan0210/Key_management/blob/master/picture/Pay2.jpg" width="100%">

  これは支払い記録の画面(2)です。先ほどの画面のOKを押すとこの画面に移ります。
  
  右上のアイコンを押すと情報を更新します。

#### 各部説明

* **真ん中上部**
   * ここに先ほど選択したメンバーの名前が入ります。

* **真ん中中央**
   * ここに支払額を入力してください。

* **真ん中下部**
   * このPayボタンを押すと支払いの記録がとられます。お金を渡す相手とよく **アカウントを確認して** 押してください。

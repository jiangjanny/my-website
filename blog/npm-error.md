---
slug: npm install 突然卡住
title: npm install 突然卡住
authors:
    name: janny jie
    title: Frontend Engineer
    url: https://github.com/jiangjanny
    image_url: https://avatars.githubusercontent.com/u/109901097?s=96&v=4
tags: [npm]
---

# 是否有人跟我一樣 有一天 npm install 突然卡住??

---

我一開始以為是 網路問題 因為這幾天公司 網路正在維護慢也正常，但過了一個假日發現情況依舊於我就在思考問題點?

#### 找問題方向 😄

1. 有可能 npm 需要清 暫存
2. 改用 yarn 嘗試安裝
3. 權限卡住

### 有可能 npm 需要清 暫存

```code
npm cache clean
```

沒效 QQ..... 😕

### 改用 yarn 嘗試安裝

檢查是否安裝 yarm

```code
yarn —version
```

```code
npm install -g yarn
```

沒效 QQ.....😕

### 權限卡住

我查到 這篇文章提到 https://github.com/npm/npm/issues/7862 以下作法奇蹟發生居然有效

```code
npm config set registry http://registry.npmjs.org/
npm config set strict-ssl false
```

這個命令是用來設定 npm（Node Package Manager）的設定檔中的 registry（註冊表）屬性。在這個命令中，`npm config set registry http://registry.npmjs.org/` 意思是將 npm 的 registry 設定為 `http://registry.npmjs.org/`。

在 npm 中，registry 是指存儲 Node.js 套件的位置，它預設是指向 npm 的官方 registry，即 `https://registry.npmjs.org/`。這個命令可以用來改變這個預設值，讓 npm 在安裝套件時從指定的 registry 中下載。

可喜可賀 我成功 Q~Q

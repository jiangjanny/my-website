---
slug: gitgnore
title: gitgnore 排除忽略檔案 失效
authors:
    name: janny jie
    title: Frontend Engineer
    url: https://github.com/jiangjanny
    image_url: https://avatars.githubusercontent.com/u/109901097?s=96&v=4
tags: [git]
---

---

我在創建專案時發現為何在 .gitgnore 設定排除 卻失效，我在想回不會是因為 cached 至於為何這樣想是因為我常常在下 commit 到一定數量 會遇到 push 不上的問題，因此查過這方面的問題，所以在這個問題上 我也想嘗試清除看看於是 我下了 以下的指令

```code
git rm -r --cached .
```

---

## 顆顆 我成功了

那我們來解釋一下 這個指令的作用

1. git rm: 刪除檔案或目錄。
2. -r: 遞歸刪除，意味著對目錄中的所有檔案和子目錄執行相同的操作。
3. --cached: 僅從快取（暫存區）中刪除文件，但保留文件在工作目錄中不變。
4. .: 目前目錄的所有檔案和子目錄。

---

## 使用場景

1. 更新 .gitignore 檔案後重新索引檔案: 當你更新 .gitignore 檔案以排除某些檔案或目錄時，你可能會想要從 Git 中移除已經被追蹤但現在被忽略的檔案。使用這個指令可以保留檔案在工作目錄中但將它們從 Git 倉庫移除。
2. 強制重新新增檔案: 你可能想要重新新增檔案以觸發某些 Git hooks 或在變基過程中解決衝突時使用此命令。
3. 清理快取: 清理暫存區以解決檔案狀態不一致的問題。

---

> 假设你在 .gitignore 中添加了一些規則，排除一些目錄或文件。你希望这些文件或目錄仍然保留在本地但不再被 Git 跟踪。

### 你可以这样操作：

新增 .gitignore 規則

```code
echo "node_modules/" >> .gitignore
echo "*.log" >> .gitignore
```

從 Git 的暫存區中刪除文件

```code
git rm -r --cached .
```

提交變更

```code
git add .
git commit -m "更新 .gitignore 並移除已忽略的檔案"
```

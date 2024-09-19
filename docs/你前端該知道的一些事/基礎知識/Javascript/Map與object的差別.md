---
slug: 在 JavaScript 中，Map 與 object 的差別
title: 在 JavaScript 中，Map 與 object 的差別
authors:
    name: Janny
    title: 在 JavaScript 中，Map 與 object 的差別
    url: https://github.com/jiangjanny
    image_url: https://avatars.githubusercontent.com/u/109901097?s=96&v=4
tags: [javascript]
---

以下是一個 `Map` 和 `Object` 的比較表格：

| 特性             | **Object**                               | **Map**                                       |
| ---------------- | ---------------------------------------- | --------------------------------------------- |
| **鍵的類型**     | 只能是字串或 `Symbol`                    | 任何類型（物件、函數、字串等）                |
| **鍵的順序**     | 不保證鍵的插入順序                       | 鍵的插入順序有保證                            |
| **效能**         | 數據量少時效率較高，但大量數據時效率較低 | 對大量數據的插入、查找等操作更高效            |
| **原型鏈問題**   | 可能會被原型屬性影響（如 `toString`）    | 沒有原型鏈問題                                |
| **方法**         | 操作有限，需借助 `Object.keys()` 等方法  | 提供了如 `set()`、`get()`、`has()` 等內建方法 |
| **大小（size）** | 需手動計算：`Object.keys(obj).length`    | 使用 `size` 屬性可直接取得大小                |
| **迭代方式**     | 需使用 `for...in` 或 `Object.keys()` 等  | 支援 `for...of` 直接迭代                      |
| **主要用途**     | 用於儲存實體的屬性或結構化數據           | 更適合頻繁查找、使用複雜鍵的場景              |

在 JavaScript 中，`Map` 和 `Object` 都是用來儲存鍵值對的數據結構，但它們在設計上和行為上有一些差別。以下是一些主要的區別：

### 1. **鍵的類型**

-   **Object**: 只能使用字串或 `Symbol` 作為鍵。即使你使用其他類型（如數字或對象）作為鍵，JavaScript 也會將其轉換為字串。
    ```javascript
    let obj = {}
    obj[1] = 'one' // 這裡的鍵實際上會變成 '1'
    console.log(obj['1']) // 'one'
    ```
-   **Map**: 允許任何類型的鍵，不僅限於字串或 `Symbol`。你可以使用物件、函數，甚至其他 `Map` 作為鍵。
    ```javascript
    let map = new Map()
    map.set(1, 'one')
    console.log(map.get(1)) // 'one'
    ```

### 2. **鍵的順序**

-   **Object**: 鍵的順序並不保證，特別是對於數字鍵，JavaScript 可能會根據鍵的類型或值對其排序。
-   **Map**: 鍵的插入順序是有保證的，無論鍵的類型如何，它都會保持插入時的順序。

### 3. **效能**

-   **Object**: 當數據量較少時，Object 的性能可能會較好，因為它是核心 JavaScript 語言的一部分，且經過高度優化。但隨著鍵值對的增加，操作可能變得較慢。
-   **Map**: 當涉及大量的插入和查找操作時，`Map` 可能會比 `Object` 更高效，因為它專門為這類操作設計。

### 4. **原型鏈**

-   **Object**: 預設會有一個原型（通常是 `Object.prototype`），這意味著你的物件可能會繼承一些預設方法（如 `toString`）。這也意味著如果你用某些鍵名（如 `toString`）來存儲值，可能會覆蓋到原型上的屬性。
    ```javascript
    let obj = {}
    obj['toString'] = 'value'
    console.log(obj['toString']) // 'value'
    ```
-   **Map**: 沒有原型鏈的問題，所有的鍵值對都是直接存儲在 `Map` 實例中的，不會受到原型鏈的干擾。

### 5. **方法的可用性**

-   **Object**: 用來操作物件的內建方法有限，你通常需要手動編寫一些操作邏輯。
    -   `Object.keys()`, `Object.values()`, `Object.entries()`
-   **Map**: 提供了一些內建方法，使操作更加方便和直觀。
    -   `set()`, `get()`, `has()`, `delete()`, `clear()`, `forEach()`

### 6. **大小（size）**

-   **Object**: 無法直接取得 `Object` 的大小，通常需要用 `Object.keys(obj).length` 來計算。
-   **Map**: 具有內建的 `size` 屬性，可以直接取得 `Map` 中鍵值對的數量。
    ```javascript
    let map = new Map()
    map.set('a', 1)
    console.log(map.size) // 1
    ```

### 7. **迭代**

-   **Object**: 無法直接迭代 `Object`，你需要使用 `for...in` 或 `Object.keys()` 等方法來迭代其鍵。
-   **Map**: 支援直接使用 `for...of` 來迭代，且可以選擇迭代鍵、值或鍵值對。

    ```javascript
    let map = new Map()
    map.set('a', 1)
    map.set('b', 2)

    for (let [key, value] of map) {
        console.log(key, value)
    }
    ```

### 8. **用途**

-   **Object**: 通常用於表示實體或結構化數據。
-   **Map**: 更適合用於需要頻繁查找和操作大量鍵值對的情況。

### 總結

-   **Object** 更適合作為一般的數據結構，尤其是當你需要使用簡單的字串鍵來表示實體屬性時。
-   **Map** 更適合需要使用複雜鍵（如物件、函數）並且要求更好性能和有序鍵的情況。

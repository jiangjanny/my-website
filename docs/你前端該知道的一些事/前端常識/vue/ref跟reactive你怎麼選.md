---
slug: ref跟reactive你怎麼選
title: ref跟reactive你怎麼選
authors:
    name: Janny
    title: ref跟reactive你怎麼選
    url: https://github.com/jiangjanny
    image_url: https://avatars.githubusercontent.com/u/109901097?s=96&v=4
tags: [vue]
---

> `ref` 可以接受所有型態的資料，但對物件或陣列內部的屬性不會自動追蹤，需要透過 `.value` 存取，而 `reactive` 只能接受物件或陣列，會自動深層追蹤內部屬性的變化，不需要 `.value`。

### `ref`
- **接受型態:** 可以接受任何型態的資料（原始值、物件、陣列、函數等）。
- **響應式行為:** 如果 `ref` 包含的是原始值，Vue 會追蹤這個值的變化；但如果包含的是物件或陣列，內部的屬性變動不會被自動監聽，因為 `ref` 本身是對值的封裝。
- **取值方式:** 使用 `.value` 屬性來取得或設定實際的值，這是因為 `ref` 返回的是一個對象（封裝），而不是直接的資料。
- **使用範例:**
  ```javascript
  import { ref } from 'vue';

  const count = ref(0);         // 原始值，會自動追蹤變化
  count.value++;                // 更新值

  const user = ref({ name: 'Alice' }); // 物件內部變動不會被自動追蹤
  user.value.name = 'Bob';             // 需要用 .value 來存取
  ```

### `reactive`
- **接受型態:** 只能接受物件或陣列，無法直接使用於原始值（如字串、數字、布林值等）。
- **響應式行為:** 對內部屬性進行深層監聽，不論屬性變更位於物件的哪個層級，Vue 都會自動追蹤變化。
- **取值方式:** 不需要 `.value`，可以直接存取和修改內部的屬性。
- **使用範例:**
  ```javascript
  import { reactive } from 'vue';

  const state = reactive({
    count: 0,
    user: { name: 'Alice' }
  });

  state.count++;               // 直接存取
  state.user.name = 'Bob';     // 內部屬性變動會被監聽
  ```

以下是 `ref` 與 `reactive` 的比較表格：


| 特性             | `ref`                                       | `reactive`                                    |
|------------------|---------------------------------------------|-----------------------------------------------|
| **接受型態**     | 任意型態（原始值、物件、陣列）             | 只能是物件或陣列                             |
| **響應行為**     | 對原始值自動追蹤，但不監聽物件/陣列內部變動 | 深層監聽所有屬性變動                         |
| **存取方式**     | 需使用 `.value` 存取與設定                  | 直接存取，無需 `.value`                      |
| **適用場景**     | 單一變數或簡單值的狀態管理                 | 複雜物件或多層結構的狀態管理                 |
| **修改方式**     | 使用 `.value` 更新                          | 直接更新物件或陣列的屬性                     |
| **性能**         | 較適合頻繁的簡單值更新                     | 適合管理多層狀態，內部追蹤效能較好           |

### 重點區別
1. **存取方式:** `ref` 需要使用 `.value` 存取，而 `reactive` 則不需要。
2. **監聽行為:** `ref` 對於物件或陣列的內部屬性變動並不自動監聽；`reactive` 則會對內部所有層級的屬性進行監聽。
3. **適用場景:** `ref` 適合單純的值或需要封裝變量的場合；`reactive` 更適合管理複雜的物件或陣列，因為它能深層追蹤所有屬性。





你的程式碼中有一些需要注意的地方，特別是在將 `ref` 的值轉換為 `reactive` 時。以下是針對這段程式碼的重點解釋及修正：

## 錯誤方式
```javascript
const msgw = ref([
    {
        ss: 22,
        aa: 'ss'
    }
])
const msg = reactive([])
msg = JSON.parse(JSON.stringify(msgw.value))
```

1. **錯誤原因：`reactive` 無法重新賦值**
   - 你嘗試對 `reactive` 賦值（`msg = ...`），這會導致錯誤，因為 `reactive` 是一個響應式的代理物件，不能直接用新的值來取代原物件。

2. **正確處理方式**
   - 可以將 `msg` 的內容更新，而不是對 `msg` 重新賦值。你可以使用 `splice`、`push` 等方法來更新 `reactive` 的內容。

以下是修正後的範例：

```javascript
import { ref, reactive } from 'vue';

const msgw = ref([
  {
    ss: 22,
    aa: 'ss'
  }
]);

const msg = reactive([]);

// 正確做法：使用 push 或 splice 更新 reactive 的內容
msg.push(...JSON.parse(JSON.stringify(msgw.value)));

console.log(msg); // msg 現在包含了 msgw 的深拷貝內容
```

### 說明
- `JSON.parse(JSON.stringify(msgw.value))` 用於深拷貝 `ref` 的值，避免直接引用導致原數據變更影響。
- 使用 `push` 將深拷貝的數據加入到 `reactive` 的陣列中，而不是直接賦值給 `msg`。

這樣可以保證 `msg` 維持其響應式特性，同時正確地將 `ref` 的值複製過來。
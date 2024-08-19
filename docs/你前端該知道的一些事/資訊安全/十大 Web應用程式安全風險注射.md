---
slug: OWASP 10 TOP 安全風險-注射
title: OWASP 10 TOP 安全風險-注射
authors:
    name: Janny
    title: OWASP 10 TOP 安全風險-注射
    url: https://github.com/jiangjanny
    image_url: https://avatars.githubusercontent.com/u/109901097?s=96&v=4
tags: [InternetSecurity, OWASP]
---

假設有一個網路銀行系統，用戶 A 是普通用戶，只能查看自己的賬戶資料。而用戶 B 是銀行員工，擁有查看所有用戶資料的權限。

如果系統的權限控制出現漏洞，導致用戶 A 通過直接輸入特定的 URL 就可以查看用戶 B 的資料，這就是「破壞性驗證」的一個範例。此時，用戶 A 獲取了原本不應該擁有的存取權限，這樣的漏洞可能導致敏感資料的洩露。

![alt text](image-12.png)



「注射」（Injection）是 2021 年 OWASP 前 10 大安全風險中排名第三的威脅。注射攻擊發生在應用程式允許未經驗證的輸入被直接插入到命令或查詢中執行，從而使攻擊者能夠執行惡意命令、操作資料庫，甚至接管整個系統。

**常見的注射攻擊類型包括**：
- **SQL 注射**：攻擊者將惡意的 SQL 語句插入到資料庫查詢中，從而竊取、修改資料或刪除資料。
- **命令注射**：攻擊者將操作系統命令注入到應用程式的系統命令中，進而執行未經授權的系統操作。
- **LDAP 注射**：攻擊者將惡意的 LDAP 查詢插入到應用程式的 LDAP 查詢中，操控或取得敏感信息。
- **XML 注射**：攻擊者將惡意的 XML 內容注入到應用程式中，從而操控應用的 XML 處理。

---

**以下是一些常見的「注射」（Injection）攻擊範例：**

 1. SQL 注射
    **範例：**
    假設有一個網站的登錄頁面，後端代碼可能這樣處理用戶輸入：

    ```sql
    SELECT * FROM users WHERE username = 'user' AND password = 'password';
    ```

    攻擊者在登錄表單中輸入以下內容：

    - **用戶名**: `admin' --`
    - **密碼**: 任意

    SQL 查詢會變成：

    ```sql
    SELECT * FROM users WHERE username = 'admin' --' AND password = 'password';
    ```

    由於 `--` 是 SQL 的註解符號，後面的密碼檢查將被忽略。這樣攻擊者就可以無需正確密碼直接登錄為 `admin` 用戶。

2. 命令注射
    **範例：**
    假設有一個應用程式允許用戶通過一個界面輸入文件名來刪除文件：

    ```bash
    rm /files/user_input
    ```

    如果用戶輸入 `; rm -rf /`，命令變成：

    ```bash
    rm /files/; rm -rf /
    ```

    這樣會刪除所有文件系統上的內容，造成嚴重損失。

3. LDAP 注射
    **範例：**
    假設有一個應用程式用來查詢用戶：

    ```ldap
    (&(uid=user)(userPassword=password))
    ```

    如果攻擊者輸入以下內容：

    - **用戶名**: `admin)(|(uid=*`
    - **密碼**: 任意

    LDAP 查詢會變成：

    ```ldap
    (&(uid=admin)(|(uid=*)(userPassword=password)))
    ```

    這樣的查詢會返回所有用戶的資訊，甚至繞過身份驗證。

4. XML 注射
    **範例：**
    假設應用程式處理如下 XML 請求：

    ```xml
    <user>
    <username>user</username>
    <password>password</password>
    </user>
    ```

**攻擊者可以注入以下內容：**

```xml
<user>
  <username>user</username>
  <password>password' or '1'='1</password>
</user>
```

這樣可以操控應用程式，可能導致未授權的資料存取。

這些範例展示了不同類型的注射攻擊及其潛在危害。為防範這些攻擊，應用程式應當遵循最佳安全實踐，如使用預備語句和參數化查詢、對用戶輸入進行嚴格驗證等。

---

**注射攻擊的範例**：
    - 假設有一個登錄表單，應用程式通過以下方式構建 SQL 查詢來驗證用戶身份：

        ```sql
        SELECT * FROM users WHERE username = 'user' AND password = 'password';
        ```

    - 如果攻擊者在輸入框中輸入 `' OR '1'='1` 這樣的惡意輸入：

        ```sql
        SELECT * FROM users WHERE username = '' OR '1'='1' AND password = '' OR '1'='1';
        ```

這樣的查詢總是返回為真，導致攻擊者可以繞過身份驗證，登錄系統。

---

**防範措施**：
1. **使用預備語句（Prepared Statements）和參數化查詢**：這可以防止攻擊者將惡意輸入插入到查詢中。
2. **輸入驗證和過濾**：對用戶輸入進行嚴格的驗證和過濾，防止惡意數據進入系統。
3. **最小權限原則**：限制應用程式對數據庫的權限，僅允許執行必要的操作，減少潛在的損害。

這些防範措施可以有效地減少注射攻擊帶來的風險。
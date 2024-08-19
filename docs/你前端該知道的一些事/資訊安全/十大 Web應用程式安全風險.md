---
slug: OWASP 10 TOP 安全風險
title: OWASP 10 TOP 安全風險
authors:
    name: Janny
    title: OWASP 10 TOP 安全風險
    url: https://github.com/jiangjanny
    image_url: https://avatars.githubusercontent.com/u/109901097?s=96&v=4
tags: [InternetSecurity, OWASP]
---

## OWASP TOP 10
> 針對現金 網路安全上最常發生的資案事件前 10 名

![alt text](image-9.png)

### 以下是您提供的 OWASP Top 10 中每個項目的詳細介紹：

1.  **[A01: 2021 破壞性驗證（Broken Access Control）](/docs/你前端該知道的一些事/資訊安全/OWASP%2010%20TOP%20安全風險-破壞性驗證)**

    -   排名上升至第 1 位。
    -   94%的應用程式經過某種形式的存取控制測試。
    -   與其他類別相比，針對這 34 個常見弱點（CWE）在應用程式中的出現次數最多。
    

2.  **[A02: 2021 加密故障（Cryptographic Failures）](/docs/你前端該知道的一些事/資訊安全/OWASP%2010%20TOP%20安全風險-加密故障)**

    -   排名上升至第 2 位。
    -   這一類別以前被稱為敏感資料洩露，強調與加密相關的故障，這些故障常導致敏感資料暴露或系統受損。

3.  **[A03: 2021 注射（Injection）](/docs/你前端該知道的一些事/資訊安全/OWASP%2010%20TOP%20安全風險-注射)**

    -   排名下滑至第 3 位。
    -   94%的應用程式經過某種形式的注入測試，33 個 CWE 在此類別中出現的次數排名第二。
    -   此版本將跨站腳本（XSS）納入此類別。

4.  **A04: 2021 不安全設計（Insecure Design）**

    -   新增類別，關注與設計缺陷相關的風險。
    -   強調需要使用威脅建模、安全設計模式和原則以及參考架構。

5.  **A05: 2021 安全配置錯誤（Security Misconfiguration）**

    -   排名上升至第 5 位。
    -   90%的應用程式經過某種形式的錯誤配置測試。
    -   隨著更多人使用可配置的軟體，該類別的上升趨勢不意外。先前的 XML 外部實體（XXE）類別現已納入此類別。

6.  **A06: 2021 易受攻擊和過時的組件（Vulnerable and Outdated Components）**

    -   以前稱為“使用具有已知漏洞的組件”，排名從第 9 位上升。
    -   隨著測試和評估風險的困難，這一類別變得更加重要。

7.  **A07: 2021 識別和身份驗證失敗（Identification and Authentication Failures）**

    -   以前為“破壞的身份驗證”，排名下滑。
    -   現在包括與識別失敗更相關的 CWE，仍然是前 10 名中的重要部分。

8.  **A08: 2021 軟體和資料完整性故障（Software and Data Integrity Failures）**

    -   新增類別，關注在不驗證完整性的情況下對軟體更新、關鍵資料和 CI/CD 管道的假設。

9.  **A09: 2021 安全日誌記錄和監控故障（Security Logging and Monitoring Failures）**

    -   以前稱為“日誌記錄和監控不足”，排名上升至第 9 位。
    -   擴展為包含更多類型的故障，對可見性和事件警報有直接影響。

10. **A10: 2021 伺服器端請求偽造（Server-Side Request Forgery, SSRF）**
    -   新增類別，來自社群調查中，儘管發病率相對較低，但利用和影響潛力的評級高於平均水平。

這些項目概述了當前 Web 應用程式面臨的一些主要安全風險，開發者應該特別注意這些問題以增強應用的安全性。

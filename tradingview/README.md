# BTCUSD 15m EMA20/50 + RSI → Telegram

檔案：`btcusd_ema_rsi_telegram.pine`（Pine Script v6 策略）

| 訊號 | 條件 |
| --- | --- |
| 🟢 做多 | EMA20 向上突破 EMA50 **且** RSI(14) > 50 |
| 🔴 平倉 | EMA20 向下跌破 EMA50（持倉時） |

訊號只在 K 線收盤後確認（`alert.freq_once_per_bar_close`），不會盤中重繪。

## 推送到 Telegram（不需要自架伺服器）

TradingView 的 Webhook 直接呼叫 Telegram Bot API 的 `sendMessage`。

1. **建立 Bot**：在 Telegram 找 `@BotFather` → `/newbot` → 取得 Bot Token（例如 `123456:ABC-DEF...`）。
2. **取得 Chat ID**：先對你的 bot 傳一則訊息（群組則把 bot 加進群組並發言），然後在瀏覽器打開
   `https://api.telegram.org/bot<你的TOKEN>/getUpdates`，找 `"chat":{"id": ...}` 的數字。
3. **載入策略**：TradingView → Pine 編輯器 → 貼上 `.pine` 內容 → 加到圖表（BTCUSD，15 分鐘）。
   在策略「設定 → 輸入」填入 **Telegram Chat ID**。
4. **建立警報**（右上角鬧鐘 → 建立警報）：
   - 條件：選此策略 → **「僅 alert() 函數呼叫」**（alert() function calls only）
   - 通知 → 勾選 **Webhook URL**：
     `https://api.telegram.org/bot<你的TOKEN>/sendMessage`
   - 訊息欄位保持預設即可（內容由 `alert()` 產生 JSON）。
5. 儲存。之後每次觸發，Telegram 會收到類似：

   ```
   🟢 做多訊號 LONG
   商品: BITSTAMP:BTCUSD
   週期: 15m
   價格: 65432.10
   EMA20: 65400.12 / EMA50: 65390.55
   RSI(14): 56.3
   時間: 2026-09-29 14:15
   ```

## 注意事項

- TradingView Webhook 需要**付費方案**，且帳戶須開啟**兩步驟驗證 (2FA)**。
- Bot Token 只放在 Webhook URL，不要寫進腳本或分享的圖表。
- 修改策略參數後必須**刪除並重建警報**，警報才會套用新設定。
- 回測預設：初始資金 10,000、每筆 100% 權益、手續費 0.1%、滑價 1 tick，可在「屬性」頁調整。
- 本策略僅供學習參考，不構成投資建議。

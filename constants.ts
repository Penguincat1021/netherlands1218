import { DayItinerary, EventType } from './types';

export const TRIP_TITLE = "Tilburg 2025-2026";
export const TRIP_DATES = "Dec 18, 2025 - Jan 16, 2026";

export const ITINERARY_DATA: DayItinerary[] = [
  {
    dayNumber: 1,
    date: "12/18",
    weekday: "Thursday",
    location: "Flight / Schiphol",
    locationUrl: "https://www.google.com/maps/search/?api=1&query=Schiphol+Airport",
    weatherTemp: 5,
    weatherCondition: "Rainy",
    events: [
      {
        id: "d1-1",
        time: "05:00",
        title: "抵達桃園機場 (TPE)",
        description: "1. 前往第二航廈 EVA Air 櫃檯報到。\n2. 託運行李：確認行李條直掛阿姆斯特丹 (AMS)。\n3. 領取兩段登機證 (TPE-BKK, BKK-AMS)。\n4. 過安檢 (筆電、液體取出) -> 自動通關 (刷護照+臉部辨識)。\n5. 前往登機門候機。",
        type: EventType.FLIGHT,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Taoyuan+International+Airport+Terminal+2"
      },
      {
        id: "d1-2",
        time: "07:40",
        title: "起飛 BR75 (TPE -> BKK)",
        description: "飛行時間約 3.5 小時。在飛機上可以先休息。",
        type: EventType.FLIGHT,
      },
      {
        id: "d1-3",
        time: "10:45",
        title: "抵達曼谷 (BKK) 轉機",
        description: "★ 轉機攻略：\n1. 下飛機後「不要」過海關入境。\n2. 抬頭找「Transfer」綠色指標。\n3. 會經過一個隨身行李安檢 (液體限制嚴格)。\n4. 檢查下一段登機證上的登機門 (Gate)，前往該區候機。\n5. 轉機時間 1h 25m 有點趕，建議直接前往登機門，不要逛免稅店。",
        type: EventType.FLIGHT,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Suvarnabhumi+Airport"
      },
      {
        id: "d1-4",
        time: "12:10",
        title: "起飛 BR75 (BKK -> AMS)",
        description: "長程飛行約 12-13 小時。建議在機上睡覺調整時差。空服員會發入境卡(通常不用填)或海關申報單(有帶超過規定的才填)。",
        type: EventType.FLIGHT,
      },
      {
        id: "d1-5",
        time: "19:05",
        title: "抵達阿姆斯特丹 (AMS)",
        description: "★ 入境攻略：\n1. 下機跟著「Arrivals」或「Baggage Hall」指標走。\n2. 經過護照查驗 (Passport Control)：排「Non-EU / All Passports」通道。備妥：護照、學校入學許可 (MVV/IND letter)。官員若問來幹嘛，回答: Study at Tilburg University。\n3. 領行李：看螢幕確認轉盤號碼。\n4. 過海關：走綠色通道 (Nothing to declare)。\n5. 抵達入境大廳 (Schiphol Plaza)。",
        type: EventType.FLIGHT,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Schiphol+Airport"
      },
      {
        id: "d1-6",
        time: "20:30",
        title: "前往 Ramada 飯店 (接駁車)",
        description: "★ 機場接駁車攻略 (Schiphol -> Ramada)：\n1. 上車地點：Platform A9 - A13 (點擊 ℹ️ 查看地圖)。\n2. 費用：去程免費，無需預約。\n3. 班次：每 30 分鐘一班 (05:15 - 23:45)。\n4. **注意暫停時段**：08:45, 09:15, 18:15, 18:45 不發車。\n5. 認明紅色巴士或 Ramada 標誌。",
        type: EventType.HOTEL,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Ramada+by+Wyndham+Amsterdam+Airport+Schiphol",
        infoModalData: {
            title: "Ramada by Wyndham",
            imageUrl: "https://i.ibb.co/3WqPq5B/shuttle-map.jpg", 
            address: "Nieuwe Meerlaan 1, 1171 A9 Badhoevedorp",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Ramada+by+Wyndham+Amsterdam+Airport+Schiphol",
            content: `**Booking Information:**
[Click here to view on Booking.com](https://www.booking.com/Share-9K0KAO)

---

**Shuttle Service (Airport to Hotel):**
The pick-up is at lane **A9-A13** (Schiphol Plaza). Look for the red bus.

- **Reservation:** Not required for pickup.
- **Frequency:** Every 30 minutes.
- **First Bus:** 05:15
- **Last Bus:** 23:45

⚠️ **NO SERVICE AT:**
08:45 / 09:15 / 18:15 / 18:45`
        }
      }
    ]
  },
  {
    dayNumber: 2,
    date: "12/19",
    weekday: "Friday",
    location: "Tilburg",
    locationUrl: "https://www.google.com/maps/search/?api=1&query=Tilburg+Centrum",
    weatherTemp: 6,
    weatherCondition: "Cloudy",
    events: [
      {
        id: "d2-1",
        time: "11:00",
        title: "退房 & 返回機場",
        description: "★ 飯店接駁車 (Ramada -> Schiphol)：\n1. 費用：€ 6,00 / 人。\n2. 預約：**必須**在櫃台提前預約。\n3. 班次：每 30 分鐘一班 (05:00 - 23:30)。\n4. **注意暫停時段**：08:30, 09:00, 18:00, 18:30 不發車。\n(點擊 ℹ️ 查看詳細說明)",
        type: EventType.TRANSPORT,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Ramada+by+Wyndham+Amsterdam+Airport+Schiphol",
        infoModalData: {
            title: "Hotel Shuttle to Airport",
            address: "Ramada Lobby",
            mapUrl: "https://www.google.com/maps/search/?api=1&query=Ramada+by+Wyndham+Amsterdam+Airport+Schiphol",
            content: `**From Hotel to Airport:**

- **Cost:** € 6,00 per person.
- **Reservation:** **REQUIRED**. Reserve at front desk ASAP.
- **Frequency:** Every 30 mins.
- **First Bus:** 05:00
- **Last Bus:** 23:30

⚠️ **NO SERVICE AT:**
08:30 / 09:00 / 18:00 / 18:30`
        }
      },
      {
        id: "d2-2",
        time: "12:00",
        title: "搭火車前往 Tilburg",
        description: "★ 路線推薦 (Schiphol -> Tilburg)：\n建議搭乘 12:XX 的 Intercity Direct。\n\n**路線 1 (最快 - 需轉乘 1 次)**：\n1. Schiphol (Platform 5-6) 搭 **IC Direct** (往 Rotterdam)。\n   *⚠️ 在月台紅色柱子刷 'Toeslag' (補票)。*\n2. 在 **Rotterdam Centraal** 下車。\n3. 同月台或換月台轉乘 **Intercity** (往 Eindhoven)。\n4. 在 **Tilburg** 下車。\n\n(點擊 ℹ️ 查看詳細月台與地圖)",
        type: EventType.TRANSPORT,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Schiphol+Airport+Railway+Station",
        infoModalData: {
          title: "Train Route: Schiphol → Tilburg",
          address: "Schiphol Airport Railway Station",
          mapUrl: "https://www.google.com/maps/search/?api=1&query=Schiphol+Airport+Railway+Station",
          content: `**Total Time:** ~1 hr 15 mins
**Ticket:** Single Ticket (Enkele reis) to Tilburg

**Step-by-Step:**
1. **Schiphol Airport**:
   - Go to NS Ticket Machines (Yellow/Blue).
   - Buy ticket to 'Tilburg'.
   - Check screens for **Intercity Direct** to **Rotterdam Centraal**.
   - **Important**: Tap your OV-chipkaart/Ticket at the **RED 'Toeslag' pole** on the platform before boarding.

2. **Rotterdam Centraal**:
   - Get off the train.
   - Look for **Intercity** to **Eindhoven Centraal** or **Venlo**.
   - Board and sit back.

3. **Tilburg**:
   - Get off at Tilburg station.
   - Tap out at the gates.`
        }
      },
      {
        id: "d2-3",
        time: "14:00",
        title: "Check-in: The City",
        description: "抵達 Tilburg Station 後，可搭公車或計程車前往宿舍 'The City' (位於 Stappegoor 區)。\n辦理入住手續，檢查房間設施，領取鑰匙。",
        type: EventType.HOTEL,
        locationLink: "https://www.google.com/maps/search/?api=1&query=The+City+Tilburg+Student+Housing"
      },
      {
        id: "d2-4",
        time: "16:00",
        title: "採買生活用品",
        description: "去附近的超市 (Albert Heijn XL 或 Jumbo Foodmarkt) 買水、食物、衛生紙。如果需要床單枕頭，可能要去 HEMA 或 Action。",
        type: EventType.FOOD,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Albert+Heijn+XL+Tilburg"
      }
    ]
  },
  {
    dayNumber: 3,
    date: "12/20",
    weekday: "Saturday",
    location: "Tilburg",
    locationUrl: "https://www.google.com/maps/search/?api=1&query=Tilburg+University",
    weatherTemp: 5,
    weatherCondition: "Rainy",
    events: [
      {
        id: "d3-1",
        time: "10:00",
        title: "熟悉環境 & 交通",
        description: "1. 搞定腳踏車：考慮租 Swapfiets (學生最愛，每月訂閱制，車壞了有人修)。\n2. 確認公車路線：下載 '9292' App 查詢荷蘭所有大眾運輸。",
        type: EventType.EXPLORE,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Swapfiets+Tilburg"
      },
      {
        id: "d3-2",
        time: "14:00",
        title: "探索 Tilburg University",
        description: "騎車或搭公車去校園逛逛，熟悉週邊環境。",
        type: EventType.SIGHTSEEING,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Tilburg+University"
      }
    ]
  },
  {
    dayNumber: 4,
    date: "12/21",
    weekday: "Sunday",
    location: "University Library",
    locationUrl: "https://www.google.com/maps/search/?api=1&query=Tilburg+University+Library",
    weatherTemp: 3,
    weatherCondition: "Cloudy",
    events: [
      {
        id: "d4-0",
        time: "13:00",
        title: "前往大學圖書館",
        description: "★ 詳細交通攻略 (The City -> University)：\n1. **步行**：從宿舍走到公車站 `Tilburg, Stappegoor/IJsbaan` (約 5 分鐘)。\n2. **搭公車**：搭乘 **Bus 1** (往 Noord 方向) 到 `Tilburg Centraal Station` (約 10 分鐘)。\n3. **轉乘**：\n   - 選項 A (推薦)：在車站轉搭 **火車 (Sprinter)** 往 Universiteit 方向 (僅 3 分鐘，一站)。\n   - 選項 B：轉搭 **Bus 2, 3 或 4** (往 Reeshof 方向) 到 `Tilburg, Universiteit` 站。\n\n*注意：週末班次較少，務必看 9292 App。",
        type: EventType.TRANSPORT,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Tilburg+University+Station"
      },
      {
        id: "d4-1",
        time: "14:00",
        title: "領取學生證 (Student Card)",
        description: "地點：University Library (UB) 的 Student Desk 或指定櫃檯。\n必備：護照、入學許可信 (或學生號碼)。\n拿到學生證後，可以順便測試一下圖書館的閘門和咖啡機。",
        type: EventType.ADMIN,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Tilburg+University+Library"
      },
      {
        id: "d4-2",
        time: "16:00",
        title: "週末市集採購",
        description: "如果還有時間，Tilburg 市中心 Koningsplein 週末通常有市集，可以買新鮮便宜的蔬果。",
        type: EventType.FOOD,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Koningsplein+Tilburg"
      }
    ]
  },
  {
    dayNumber: 5,
    date: "12/22",
    weekday: "Monday",
    location: "Tilburg City Hall",
    locationUrl: "https://www.google.com/maps/search/?api=1&query=Koningsplein+10+Tilburg",
    weatherTemp: 4,
    weatherCondition: "Cloudy",
    events: [
      {
        id: "d5-1",
        time: "13:30",
        title: "前往 City Hall (Stadswinkel)",
        description: "地址：Koningsplein 10, Tilburg。\n交通：從 The City 騎車約 10-15 分鐘，或搭公車到 Tilburg Centrum。\n注意：提早 10-15 分鐘抵達。",
        type: EventType.TRANSPORT,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Koningsplein+10+Tilburg"
      },
      {
        id: "d5-2",
        time: "14:10",
        title: "市政廳註冊 (BSN)",
        description: "★ 必備文件 (請再三確認)：\n1. 護照 (Passport)\n2. 租屋合約 (Rental Agreement - The City 提供的)\n3. 學校入學證明 (有些承辦人員會看)\n4. 預約確認信 (Appointment Confirmation)\n5. 出生證明 (若有要求，通常需雙認證，視市政廳規定)\n\n過程約 15-30 分鐘。結束後會收到 BSN number (荷蘭身分證字號)，開戶必備。",
        type: EventType.ADMIN,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Koningsplein+10+Tilburg"
      },
      {
        id: "d5-3",
        time: "15:30",
        title: "市中心漫遊",
        description: "辦完正事，去逛逛 Heuvelstraat 商店街，或去 LocHal 圖書館 (由舊火車工廠改建，非常有名且漂亮)。",
        type: EventType.SIGHTSEEING,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Heuvelstraat+Tilburg"
      }
    ]
  },
  {
    dayNumber: 6,
    date: "12/23",
    weekday: "Tuesday",
    location: "IND Office 's-Hertogenbosch",
    locationUrl: "https://share.google/yF6jNxvQ0TNBsCHi7",
    weatherTemp: 3,
    weatherCondition: "Sunny",
    events: [
      {
        id: "d6-1",
        time: "12:30",
        title: "前往 Den Bosch (火車)",
        description: "從 Tilburg Station 搭火車到 's-Hertogenbosch (Den Bosch)。車程約 15-20 分鐘，班次非常多。",
        type: EventType.TRANSPORT,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Tilburg+Station"
      },
      {
        id: "d6-2",
        time: "13:30",
        title: "IND Office 's-Hertogenbosch",
        description: "地點：IND Desk 's-Hertogenbosch。\n地址：Leeghwaterlaan 14 (位於 Paleis van Justitie 建築群附近)。\n任務：領取 Residence Permit (VVR)。\n必備：護照、預約確認信。\n過程：很快，通常只是核對身分、按指紋確認、領卡。(點擊 ℹ️ 查看地圖)",
        type: EventType.ADMIN,
        locationLink: "https://share.google/yF6jNxvQ0TNBsCHi7",
        infoModalData: {
          title: "IND Desk 's-Hertogenbosch",
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Paleis_van_Justitie_%27s-Hertogenbosch.jpg/800px-Paleis_van_Justitie_%27s-Hertogenbosch.jpg",
          address: "Leeghwaterlaan 14, 5223 BA 's-Hertogenbosch",
          mapUrl: "https://share.google/yF6jNxvQ0TNBsCHi7",
          content: `**Directions:**
The IND desk is located at Leeghwaterlaan 14, near the Paleis van Justitie.

1. Exit the train station on the 'Paleis van Justitie' side (Paleiskwartier).
2. Walk towards the modern office buildings/court complex.

**Reminder:**
- Bring your **Passport**.
- Bring your **Appointment Code**.
- Arrive on time.`
        }
      },
      {
        id: "d6-3",
        time: "15:00",
        title: "Den Bosch 聖誕氣氛",
        description: "既然來了，一定要逛 Den Bosch 市中心！這裡比 Tilburg 更古老漂亮。\n推薦：聖約翰大教堂 (Sint-Janskathedraal) 和品嚐特產 'Bossche Bol' (巨大巧克力泡芙)。",
        type: EventType.FOOD,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Sint-Janskathedraal+Den+Bosch"
      }
    ]
  },
  {
    dayNumber: 7,
    date: "12/24",
    weekday: "Wednesday",
    location: "Christmas Planning",
    locationUrl: "https://www.google.com/maps/search/?api=1&query=Tilburg+Station",
    weatherTemp: 2,
    weatherCondition: "Sunny",
    events: [
      {
        id: "d7-1",
        time: "10:00",
        title: "規劃聖誕假期",
        description: "行政手續都完成了！現在你有空檔直到 1/16。\n想去哪裡過聖誕？\n1. 德國科隆 (Cologne)：搭火車很近，有最棒的聖誕市集。\n2. 比利時布魯日 (Bruges)：像童話故事般的古城。\n3. 倫敦：感受跨年煙火 (需確認簽證)。\n4. 芬蘭：去看極光 (預算較高)。\n\n點擊下方的 'Explore' 標籤，問問 AI 助理：「推薦適合學生的 5 天 4 夜聖誕行程」！",
        type: EventType.EXPLORE,
        locationLink: "https://www.google.com/maps/search/?api=1&query=Tilburg+Station"
      }
    ]
  }
];
// ==========================================
// メモリーマッチ！カスタム暗記カード - メインプログラム (app.js)
// ==========================================

// --- デモ用 既定の一般暗記データ (古文用言) ---
const DEMO_WORDS = [
  { id: 1, "単語（見出し語）": "あり", "意味（現代語訳）": "存在する、ある、生きている", "品詞": "動詞", "活用の種類": "ラ行変格活用", "未然形": "あら", "連用形": "あり", "終止形": "あり", "連体形": "ある", "已然形": "あれ", "命令形": "あれ" },
  { id: 2, "単語（見出し語）": "をり", "意味（現代語訳）": "存在する、居る、生きて生活する", "品詞": "動詞", "活用の種類": "ラ行変格活用", "未然形": "をら", "連用形": "をり", "終止形": "をり", "連体形": "をる", "已然形": "をれ", "命令形": "をれ" },
  { id: 3, "単語（見出し語）": "はべる", "意味（現代語訳）": "お仕えする、ございます", "品詞": "動詞", "活用の種類": "ラ行変格活用", "未然形": "はべら", "連用形": "はべり", "終止形": "はべる", "連体形": "はべる", "已然形": "はべれ", "命令形": "はべれ" },
  { id: 4, "単語（見出し語）": "いますかり", "意味（現代語訳）": "いらっしゃる、おいでになる", "品詞": "動詞", "活用の種類": "ラ行変格活用", "未然形": "いますから", "連用形": "いますかり", "終止形": "いますかり", "連体形": "いますかる", "已然形": "いますかれ", "命令形": "いますかれ" },
  { id: 5, "単語（見出し語）": "おどろく", "意味（現代語訳）": "（はっと）気づく、目を覚ます", "品詞": "動詞", "活用の種類": "カ行四段活用", "未然形": "おどろか", "連用形": "おどろき", "終止形": "おどろく", "連体形": "おどろく", "已然形": "おどろけ", "命令形": "おどろけ" },
  { id: 6, "単語（見出し語）": "ののしる", "意味（現代語訳）": "大声で騒ぐ、評判になる、羽振りをきかす", "品詞": "動詞", "活用の種類": "ラ行四段活用", "未然形": "ののしら", "連用形": "ののしり", "終止形": "ののしる", "連体形": "ののしる", "已然形": "ののしれ", "命令形": "ののしれ" },
  { id: 7, "単語（見出し語）": "めづ", "意味（現代語訳）": "愛する、褒める、心惹かれる", "品詞": "動詞", "活用の種類": "ダ行下二段活用", "未然形": "めで", "連用形": "めで", "終止形": "めづ", "連体形": "むづる", "已然形": "むづれ", "命令形": "めだよ" },
  { id: 8, "単語（見出し語）": "おぼゆ", "意味（現代語訳）": "（自然と）思われる、似ている、思い出す", "品詞": "動詞", "活用の種類": "ヤ行下二段活用", "未然形": "おぼえ", "連用形": "おぼえ", "終止形": "おぼゆ", "連体形": "おぼゆる", "已然形": "おぼゆれ", "命令形": "おぼえよ" },
  { id: 9, "単語（見出し語）": "しのぶ", "意味（現代語訳）": "我慢する、人目を避ける、懐かしむ", "品詞": "動詞", "活用の種類": "ハ行四段活用", "未然形": "しのば", "連用形": "しのび", "終止形": "しのぶ", "連体形": "しのぶ", "已然形": "しのべ", "命令形": "しのべ" },
  { id: 10, "単語（見出し語）": "おこたる", "意味（現代語訳）": "病気がよくなる、快復する、怠ける", "品詞": "動詞", "活用の種類": "ラ行四段活用", "未然形": "おこたら", "連用形": "おこたり", "終止形": "おこたる", "連体形": "おこたる", "已然形": "おこたれ", "命令形": "おこたれ" },
  { id: 11, "単語（見出し語）": "あふ", "意味（現代語訳）": "結婚する、めぐり合う", "品詞": "動詞", "活用の種類": "ハ行四段活用", "未然形": "あは", "連用形": "あひ", "終止形": "あふ", "連体形": "あふ", "已然形": "あへ", "命令形": "あへ" },
  { id: 12, "単語（見出し語）": "うつろふ", "意味（現代語訳）": "色あせる、散る、心変わりする", "品詞": "動詞", "活用の種類": "ハ行四段活用", "未然形": "うつろは", "連用形": "うつろひ", "終止形": "うつろふ", "連体形": "うつろふ", "已然形": "うつろへ", "命令形": "うつろへ" },
  { id: 13, "単語（見出し語）": "うつくし", "意味（現代語訳）": "かわいらしい、いとしい、見事だ", "品詞": "形容詞", "活用の種類": "シク活用", "未然形": "うつくしか", "連用形": "うつくしく", "終止形": "うつくし", "連体形": "うつくしき", "已然形": "うつくしけれ", "命令形": "○" },
  { id: 14, "単語（見出し語）": "かなし", "意味（現代語訳）": "愛おしい、かわいい、悲しい", "品詞": "形容詞", "活用の種類": "シク活用", "未然形": "かなしか", "連用形": "かなしく", "終止形": "かなし", "連体形": "かなしき", "已然形": "かなしけれ", "命令形": "○" },
  { id: 15, "単語（見出し語）": "いみじ", "意味（現代語訳）": "たいそう、素晴らしい、ひどい", "品詞": "形容詞", "活用の種類": "シク活用", "未然形": "いみじか", "連用形": "いみじく", "終止形": "いみじ", "連体形": "いみじき", "已然形": "いみじけれ", "命令形": "○" },
  { id: 16, "単語（見出し語）": "をかし", "意味（現代語訳）": "趣がある、美しい、滑稽だ", "品詞": "形容詞", "活用の種類": "ク活用", "未然形": "をかしか", "連用形": "をかしく", "終止形": "をかし", "連体形": "をかしき", "已然形": "をかしけれ", "命令形": "○" },
  { id: 17, "単語（見出し語）": "あやし", "意味（現代語訳）": "不思議だ、身分が低い、見苦しい", "品詞": "形容詞", "活用の種類": "シク活用", "未然形": "あやしか", "連用形": "あやしく", "終止形": "あやし", "連体形": "あやしき", "已然形": "あやしけれ", "命令形": "○" },
  { id: 18, "単語（見出し語）": "すさまじ", "意味（現代語訳）": "興ざめだ、殺風景だ、ひどい", "品詞": "形容詞", "活用の種類": "シク活用", "未然形": "すさまじか", "連用形": "すさまじく", "終止形": "すさまじ", "連体形": "すさまじき", "已然形": "すさまじけれ", "命令形": "○" },
  { id: 19, "単語（見出し語）": "あてなり", "意味（現代語訳）": "身分が高い、高貴だ、上品だ", "品詞": "形容動詞", "活用の種類": "ナリ活用", "未然形": "あてなら", "連用形": "あてなり", "終止形": "あてなり", "連体形": "あてなる", "已然形": "あてなれ", "命令形": "あてなれ" },
  { id: 20, "単語（見出し語）": "いうなり", "意味（現代語訳）": "優美だ、上品だ、上手だ", "品詞": "形容動詞", "活用の種類": "ナリ活用", "未然形": "いうなら", "連用形": "いうなり", "終止形": "いうなり", "連体形": "いうなる", "已然形": "いうなれ", "命令形": "いうなれ" }
];

// --- グローバル状態管理 (State) ---
let kobunWords = [...DEMO_WORDS]; // 読み込んだ単語データ
let gameState = {
  playMode: "1p",                 // 1p, 2p
  numPairs: 10,                   // 6, 10, 15, 20
  cards: [],                      // 現在のゲームカードリスト
  selectedCards: [],              // 選択中のカード（最大2枚）
  scores: { p1: 0, p2: 0 },       // 各プレイヤーの獲得ペア数
  activePlayer: "p1",             // 現在の手番
  turnsCount: 0,                  // 総手数
  timerSeconds: 0,                // 経過秒数
  timerInterval: null,            // タイマー用インターバル
  isProcessing: false,            // フリップ後の判定待機中（連打防止）
  matchedPairs: [],               // マッチした単語データのリスト（振り返り用）
  sideAColumn: "単語（見出し語）", // A面カラムキー (デフォルト)
  sideBColumn: "意味（現代語訳）"  // B面カラムキー (デフォルト)
};

// --- DOM 要素の取得 ---
const dom = {
  // 画面セクション
  setupScreen: document.getElementById("setup-screen"),
  gameScreen: document.getElementById("game-screen"),
  resultModal: document.getElementById("result-modal"),
  
  // 設定フォーム
  gasUrlInput: document.getElementById("gas-url-input"),
  dataStatusMsg: document.getElementById("data-status-msg"),
  playMode1p: document.getElementById("play-mode-1p"),
  playMode2p: document.getElementById("play-mode-2p"),
  cardPairSelect: document.getElementById("card-pair-select"),
  downloadTemplateBtn: document.getElementById("download-template-btn"),
  uploadCsvInput: document.getElementById("upload-csv-input"),
  uploadCsvBtn: document.getElementById("upload-csv-btn"),
  
  // アクションボタン
  startGameBtn: document.getElementById("start-game-btn"),
  backToSetupBtn: document.getElementById("back-to-setup-btn"),
  restartGameBtn: document.getElementById("restart-game-btn"),
  modalSetupBtn: document.getElementById("modal-setup-btn"),
  modalReplayBtn: document.getElementById("modal-replay-btn"),
  
  // ゲーム画面情報
  p1ScoreCard: document.getElementById("p1-score-card"),
  p2ScoreCard: document.getElementById("p2-score-card"),
  timerScoreCard: document.getElementById("timer-score-card"),
  p1Score: document.getElementById("p1-score"),
  p2Score: document.getElementById("p2-score"),
  p1NameDisplay: document.getElementById("p1-name-display"),
  p2NameDisplay: document.getElementById("p2-name-display"),
  gameTimer: document.getElementById("game-timer"),
  turnsCount: document.getElementById("turns-count"),
  turnAnnouncement: document.getElementById("turn-announcement"),
  currentModeBadge: document.getElementById("current-mode-badge"),
  cardGrid: document.getElementById("card-grid"),
  
  // 結果モーダル情報
  resultTitle: document.getElementById("result-title"),
  victoryBanner: document.getElementById("victory-banner"),
  victoryMessage: document.getElementById("victory-message"),
  finalTime: document.getElementById("final-time"),
  finalTurns: document.getElementById("final-turns"),
  finalScoreBox: document.getElementById("final-score-box"),
  finalPairs: document.getElementById("final-pairs"),
  reviewList: document.getElementById("review-list")
};

// --- 初期イベント設定 ---
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  
  // ローカルストレージからGASのURLまたはカスタムアップロードデータがあれば読み込み
  const savedUrl = localStorage.getItem("kobun-yogen-gas-url");
  const savedCustomData = localStorage.getItem("kobun-yogen-custom-data");
  
  if (savedUrl) {
    dom.gasUrlInput.value = savedUrl;
    testAndLoadGasData(savedUrl);
  } else if (savedCustomData) {
    try {
      const parsed = JSON.parse(savedCustomData);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const normalizedData = parsed.map(normalizeDataItem);
        kobunWords = normalizedData;
        updateDataStatus(true, `ロード成功: アップロードされた${parsed.length}件のデータを使用中`, "success");
        updateColumnsFromData(normalizedData);
      } else {
        updateColumnsFromData(kobunWords);
      }
    } catch (e) {
      console.error("ローカルカスタムデータの読み込み失敗:", e);
      localStorage.removeItem("kobun-yogen-custom-data");
      updateColumnsFromData(kobunWords);
    }
  } else {
    updateColumnsFromData(kobunWords);
  }
});

// イベントリスナー登録
function setupEventListeners() {
  // GASのURL入力時に入力イベント検知
  dom.gasUrlInput.addEventListener("change", (e) => {
    const url = e.target.value.trim();
    if (url) {
      localStorage.removeItem("kobun-yogen-custom-data"); // カスタムデータをクリア
      testAndLoadGasData(url);
    } else {
      localStorage.removeItem("kobun-yogen-gas-url");
      // もしカスタムデータが他にあればそちらを使う、なければデモデータ
      const savedCustomData = localStorage.getItem("kobun-yogen-custom-data");
      if (savedCustomData) {
        try {
          kobunWords = JSON.parse(savedCustomData);
          updateDataStatus(true, `ロード成功: アップロードされた${kobunWords.length}件のデータを使用中`, "success");
          updateColumnsFromData(kobunWords);
          return;
        } catch (e) {}
      }
      kobunWords = [...DEMO_WORDS];
      updateDataStatus(true, "デモデータ（古文用言）を使用中");
      updateColumnsFromData(kobunWords);
    }
  });

  // テンプレートダウンロード
  dom.downloadTemplateBtn.addEventListener("click", downloadTemplate);
  
  // ファイルアップロードボタンの代理クリック
  dom.uploadCsvBtn.addEventListener("click", () => {
    dom.uploadCsvInput.click();
  });
  
  // ファイルアップロード時の処理
  dom.uploadCsvInput.addEventListener("change", handleFileUpload);

  // ゲーム開始
  dom.startGameBtn.addEventListener("click", startNewGame);
  
  // ゲーム中コントロール
  dom.backToSetupBtn.addEventListener("click", backToSetup);
  dom.restartGameBtn.addEventListener("click", restartGame);
  
  // モーダルコントロール
  dom.modalSetupBtn.addEventListener("click", () => {
    closeModal();
    backToSetup();
  });
  dom.modalReplayBtn.addEventListener("click", () => {
    closeModal();
    restartGame();
  });
}

// --- GAS データベース通信処理 ---
async function testAndLoadGasData(url) {
  updateDataStatus(false, "データを通信中...", "loading");
  
  try {
    const response = await fetch(url, {
      method: "GET",
      mode: "cors", // GAS WebアプリはリダイレクトされるためCORS対応
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (Array.isArray(data) && data.length > 0) {
      const normalizedData = data.map(normalizeDataItem);
      kobunWords = normalizedData;
      localStorage.setItem("kobun-yogen-gas-url", url);
      updateDataStatus(true, `接続成功: ${normalizedData.length}件の暗記データをロードしました`, "success");
      updateColumnsFromData(normalizedData);
    } else if (data.status === "error" || data.error) {
      throw new Error(data.message || data.error);
    } else {
      throw new Error("データの形式が正しくありません");
    }
  } catch (error) {
    console.error("GASデータロードエラー:", error);
    kobunWords = [...DEMO_WORDS]; // エラー時はデモデータに戻す
    updateDataStatus(true, `接続失敗（デモデータを使用中）: ${error.message}`, "error");
    updateColumnsFromData(kobunWords);
  }
}

// データベースステータス表示の更新
function updateDataStatus(isDone, text, type = "info") {
  dom.dataStatusMsg.className = "status-msg";
  
  let iconClass = "fa-database";
  let badgeClass = "info-badge";
  
  if (type === "loading") {
    iconClass = "fa-spinner fa-spin";
    badgeClass = "info-badge";
  } else if (type === "success") {
    iconClass = "fa-circle-check";
    badgeClass = "success-badge";
  } else if (type === "error") {
    iconClass = "fa-circle-exclamation";
    badgeClass = "info-badge"; // 目立ちすぎないようinfoにするが色は警告
    dom.dataStatusMsg.style.color = "#d9383a";
  } else {
    dom.dataStatusMsg.style.color = "";
  }
  
  dom.dataStatusMsg.innerHTML = `<span class="badge ${badgeClass}"><i class="fa-solid ${iconClass}"></i> ${escapeHtml(text)}</span>`;
}

// --- ゲームロジック ---

// 新規ゲーム開始
function startNewGame() {
  try {
    // 設定の読込
    gameState.playMode = document.querySelector('input[name="play-mode"]:checked').value;
    gameState.numPairs = parseInt(dom.cardPairSelect.value, 10);
    
    // 読み込んだ単語数が足りない場合は制限
    if (kobunWords.length < gameState.numPairs) {
      alert(`データが${kobunWords.length}件しかないため、最大${kobunWords.length}ペアで開始します。`);
      gameState.numPairs = kobunWords.length;
    }
    
    // 状態初期化
    gameState.scores.p1 = 0;
    gameState.scores.p2 = 0;
    gameState.turnsCount = 0;
    gameState.activePlayer = "p1";
    gameState.selectedCards = [];
    gameState.isProcessing = false;
    gameState.matchedPairs = [];
    
    // UIの切替
    dom.setupScreen.style.display = "none";
    dom.gameScreen.style.display = "block";
    
    // UIの初期設定
    dom.p1Score.textContent = "0";
    dom.p2Score.textContent = "0";
    dom.turnsCount.textContent = "0";
    
    if (gameState.playMode === "2p") {
      dom.p2ScoreCard.style.display = "flex";
      dom.p1NameDisplay.textContent = "プレイヤー1";
      dom.p2NameDisplay.textContent = "プレイヤー2";
      dom.p1ScoreCard.className = "player-score active";
      dom.p2ScoreCard.className = "player-score";
      dom.timerScoreCard.style.display = "none"; // 2人対戦では時間を競わないので非表示
      dom.turnAnnouncement.textContent = "プレイヤー1の番です。";
    } else {
      dom.p2ScoreCard.style.display = "none";
      dom.p1NameDisplay.textContent = "1人プレイ";
      dom.p1ScoreCard.className = "player-score";
      dom.timerScoreCard.style.display = "flex";
      dom.turnAnnouncement.textContent = "カードを選んでください。";
    }
    
    // モードバッジの表示
    dom.currentModeBadge.textContent = `${getColumnName(gameState.sideAColumn)} ⇔ ${getColumnName(gameState.sideBColumn)}`;
    
    // グリッドサイズクラスの適用
    dom.cardGrid.className = "card-grid";
    if (gameState.numPairs <= 6) dom.cardGrid.classList.add("grid-6-pairs");
    else if (gameState.numPairs <= 10) dom.cardGrid.classList.add("grid-10-pairs");
    else if (gameState.numPairs <= 15) dom.cardGrid.classList.add("grid-15-pairs");
    else dom.cardGrid.classList.add("grid-20-pairs");
    
    // カードの生成と表示
    generateAndRenderCards();
    
    // タイマースタート（1人プレイのみ）
    startTimer();
  } catch (error) {
    console.error("エラーが発生しました:", error);
    dom.cardGrid.innerHTML = `<div style="color:red; font-size:1.2rem; padding: 20px; text-align: center; width: 100%; grid-column: 1/-1;">エラー: ${error.message}<br><small>${error.stack}</small></div>`;
  }
}

// 設定に戻る
function backToSetup() {
  stopTimer();
  dom.gameScreen.style.display = "none";
  dom.setupScreen.style.display = "block";
}

// 最初からやり直す
function restartGame() {
  stopTimer();
  startNewGame();
}

// カードの生成とシャッフル、レンダリング
function generateAndRenderCards() {
  if (!kobunWords || kobunWords.length === 0) {
    throw new Error("暗記データ（kobunWords）が空か読み込まれていません。");
  }
  
  // 1. 全データからランダムに指定されたペア数分の用言データを抽出
  const shuffledWords = [...kobunWords].sort(() => 0.5 - Math.random());
  const selectedWords = shuffledWords.slice(0, gameState.numPairs);
  
  if (selectedWords.length === 0) {
    throw new Error("選択されたカードのペア数が0件です。");
  }
  
  // 2. ペアカードリストの作成
  const rawCards = [];
  selectedWords.forEach((wordData) => {
    // A面: カード
    rawCards.push({
      pairId: wordData.id,
      type: "sideA",
      text: getColumnValue(wordData, gameState.sideAColumn),
      data: wordData
    });
    
    // B面: 対になるカード
    rawCards.push({
      pairId: wordData.id,
      type: "sideB",
      text: getColumnValue(wordData, gameState.sideBColumn),
      data: wordData
    });
  });
  
  // 3. カードリストのシャッフル
  gameState.cards = rawCards.sort(() => 0.5 - Math.random());
  
  // 4. レンダリング
  dom.cardGrid.innerHTML = "";
  gameState.cards.forEach((card, index) => {
    const cardEl = document.createElement("div");
    cardEl.className = "card-item";
    cardEl.dataset.index = index;
    cardEl.dataset.pairId = card.pairId;
    
    // テキストの長さによってフォントサイズ調整用のクラスを追加
    const textClass = (card.text || "").length > 8 ? "card-text text-long" : "card-text";
    
    // バッジ名の定義
    const badgeLabel = card.type === "sideA" ? getColumnName(gameState.sideAColumn) : getColumnName(gameState.sideBColumn);
    const badgeClass = `card-type-badge ${card.type === "sideA" ? "badge-word" : "badge-type"}`;
    
    cardEl.innerHTML = `
      <div class="card-inner">
        <!-- 裏面：ポップ -->
        <div class="card-back">
          <div class="card-back-pattern">
            <i class="fa-solid fa-graduation-cap"></i>
          </div>
        </div>
        <!-- 表面：クリーン -->
        <div class="card-front">
          <span class="${badgeClass}">${badgeLabel}</span>
          <div class="${textClass}">${escapeHtml(card.text || "")}</div>
          <div class="card-front-footer">
            ${escapeHtml(card.data.pos || "")}
          </div>
        </div>
      </div>
    `;
    
    cardEl.addEventListener("click", () => handleCardClick(index));
    dom.cardGrid.appendChild(cardEl);
  });
}

// カードクリック時のハンドラ
function handleCardClick(index) {
  // 連打防止、あるいはすでにめくられている・マッチしているカードは無視
  if (gameState.isProcessing) return;
  if (gameState.selectedCards.includes(index)) return;
  
  const cardElement = dom.cardGrid.children[index];
  if (cardElement.classList.contains("matched") || cardElement.classList.contains("flipped")) return;
  
  // カードをめくる
  cardElement.classList.add("flipped");
  gameState.selectedCards.push(index);
  
  // 2枚選択されたら判定
  if (gameState.selectedCards.length === 2) {
    gameState.isProcessing = true;
    gameState.turnsCount++;
    dom.turnsCount.textContent = gameState.turnsCount;
    
    setTimeout(checkMatch, 800); // めくれるアニメーションが終わる頃に判定
  }
}

// ペア判定
function checkMatch() {
  const [idx1, idx2] = gameState.selectedCards;
  const cardEl1 = dom.cardGrid.children[idx1];
  const cardEl2 = dom.cardGrid.children[idx2];
  
  const c1 = gameState.cards[idx1];
  const c2 = gameState.cards[idx2];
  
  // カードの面（sideAとsideB）が異なること
  const isDifferentType = c1.type !== c2.type;
  
  // B面で選択されているカラムのデータ値が一致しているか判定
  // （例: A面が単語「あり」、B面が「活用の種類」のとき、c1.dataの活用の種類は「ラ行変格活用」、c2.dataの活用の種類も「ラ行変格活用」となり、一致する）
  const val1 = getColumnValue(c1.data, gameState.sideBColumn);
  const val2 = getColumnValue(c2.data, gameState.sideBColumn);
  const isMatch = isDifferentType && (val1 === val2);
  
  if (isMatch) {
    // マッチ成功
    cardEl1.classList.add("matched");
    cardEl2.classList.add("matched");
    
    // アニメーション効果用
    setTimeout(() => {
      cardEl1.classList.add("matched-fade");
      cardEl2.classList.add("matched-fade");
    }, 400);
    
    // スコア加算
    gameState.scores[gameState.activePlayer]++;
    updateScoresUI();
    
    // 振り返り用リストへ追加 (重複防止) - 単語カードのデータを追加
    const wordDataMatched = c1.type === "word" ? c1.data : c2.data;
    if (!gameState.matchedPairs.some(w => w.id === wordDataMatched.id)) {
      gameState.matchedPairs.push(wordDataMatched);
    }
    
    // 全て揃ったか確認
    const allMatched = Array.from(dom.cardGrid.children).every(el => 
      el.classList.contains("matched")
    );
    
    if (allMatched) {
      setTimeout(handleGameOver, 800);
    } else {
      // マッチしたときの表示更新
      if (gameState.playMode === "2p") {
        dom.turnAnnouncement.textContent = `見事！ ${getPlayerName(gameState.activePlayer)} の手番が続きます。`;
      } else {
        dom.turnAnnouncement.textContent = "正解！次のカードを選んでください。";
      }
      resetTurnSelection();
    }
  } else {
    // マッチ失敗：裏返す
    setTimeout(() => {
      cardEl1.classList.remove("flipped");
      cardEl2.classList.remove("flipped");
      
      // 手番の交代（2人プレイ時）
      if (gameState.playMode === "2p") {
        switchPlayer();
      } else {
        dom.turnAnnouncement.textContent = "残念！もう一度めくってください。";
      }
      resetTurnSelection();
    }, 600);
  }
}

// ターン終了時のステートクリア
function resetTurnSelection() {
  gameState.selectedCards = [];
  gameState.isProcessing = false;
}

// プレイヤー交代
function switchPlayer() {
  gameState.activePlayer = gameState.activePlayer === "p1" ? "p2" : "p1";
  
  if (gameState.activePlayer === "p1") {
    dom.p1ScoreCard.classList.add("active");
    dom.p2ScoreCard.classList.remove("active");
  } else {
    dom.p2ScoreCard.classList.add("active");
    dom.p1ScoreCard.classList.remove("active");
  }
  
  dom.turnAnnouncement.textContent = `${getPlayerName(gameState.activePlayer)} の手番です。`;
}

// スコアUIの更新
function updateScoresUI() {
  dom.p1Score.textContent = gameState.scores.p1;
  dom.p2Score.textContent = gameState.scores.p2;
}

// プレイヤー名取得
function getPlayerName(playerKey) {
  if (gameState.playMode === "1p") return "学習者";
  return playerKey === "p1" ? "プレイヤー1" : "プレイヤー2";
}

// --- タイマー処理 ---
function startTimer() {
  if (gameState.playMode === "2p") return; // 対戦モードはタイマーなし
  
  gameState.timerSeconds = 0;
  dom.gameTimer.textContent = "00:00";
  
  clearInterval(gameState.timerInterval);
  gameState.timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(gameState.timerInterval);
}

function updateTimer() {
  gameState.timerSeconds++;
  const mins = Math.floor(gameState.timerSeconds / 60).toString().padStart(2, "0");
  const secs = (gameState.timerSeconds % 60).toString().padStart(2, "0");
  dom.gameTimer.textContent = `${mins}:${secs}`;
}

// --- ゲームオーバー処理 ---
function handleGameOver() {
  stopTimer();
  
  // モーダルの値セット
  dom.finalTurns.textContent = gameState.turnsCount;
  
  const finalMins = Math.floor(gameState.timerSeconds / 60).toString().padStart(2, "0");
  const finalSecs = (gameState.timerSeconds % 60).toString().padStart(2, "0");
  dom.finalTime.textContent = gameState.playMode === "1p" ? `${finalMins}:${finalSecs}` : "対戦モード";
  
  // 1人・2人で表示を切り替える
  if (gameState.playMode === "2p") {
    dom.resultTitle.textContent = "合戦終了！";
    dom.finalScoreBox.style.display = "none";
    dom.victoryBanner.style.display = "block";
    
    const p1 = gameState.scores.p1;
    const p2 = gameState.scores.p2;
    
    if (p1 > p2) {
      dom.victoryMessage.textContent = `プレイヤー1の勝利！ (${p1}対${p2})`;
    } else if (p2 > p1) {
      dom.victoryMessage.textContent = `プレイヤー2の勝利！ (${p2}対${p1})`;
    } else {
      dom.victoryMessage.textContent = `引き分け！ (${p1}対${p2})`;
    }
  } else {
    dom.resultTitle.textContent = "稽古完了！";
    dom.victoryBanner.style.display = "none";
    dom.finalScoreBox.style.display = "block";
    dom.finalPairs.textContent = gameState.scores.p1;
  }
  
  // 振り返り用単語リストのレンダリング
  renderReviewTable();
  
  // モーダル表示
  dom.resultModal.style.display = "flex";
}

// 振り返りテーブルのレンダリング
function renderReviewTable() {
  const headersRow = document.getElementById("review-table-headers");
  const reviewList = document.getElementById("review-list");
  if (!headersRow || !reviewList) return;
  
  headersRow.innerHTML = "";
  reviewList.innerHTML = "";
  
  // Check if we are using the standard classical Japanese structure
  const hasStandardKeys = COLUMN_KEYS.some(c => c.key === "word") && COLUMN_KEYS.some(c => c.key === "type");
  const hasConjugations = COLUMN_KEYS.some(c => ["mizen", "renyo", "shushi", "rentai"].includes(c.key));
  
  if (hasStandardKeys) {
    // Render standard Classical Japanese headers
    headersRow.innerHTML = `
      <th>単語 (基本形)</th>
      <th>品詞 / 活用の種類</th>
      <th>代表的な意味</th>
      ${hasConjugations ? '<th>主要な活用形</th>' : ''}
    `;
    
    const sortedPairs = [...gameState.matchedPairs].sort((a, b) => a.id - b.id);
    
    sortedPairs.forEach(word => {
      const tr = document.createElement("tr");
      
      let conjSummary = "";
      if (hasConjugations) {
        const c = word.conjugations || {};
        conjSummary = `
          <td>
            未然: ${escapeHtml(c.mizen || word["未然形"] || word.mizen) || "○"}<br>
            連用: ${escapeHtml(c.renyo || word["連用形"] || word.renyo) || "○"}<br>
            終止: ${escapeHtml(c.shushi || word["終止形"] || word.shushi) || "○"}<br>
            連体: ${escapeHtml(c.rentai || word["連体形"] || word.rentai) || "○"}
          </td>
        `;
      }
      
      const wordVal = getColumnValue(word, "単語（見出し語）") || getColumnValue(word, "word");
      const posVal = getColumnValue(word, "品詞") || getColumnValue(word, "pos");
      const typeVal = getColumnValue(word, "活用の種類") || getColumnValue(word, "type");
      const meaningVal = getColumnValue(word, "意味（現代語訳）") || getColumnValue(word, "meaning");
      
      tr.innerHTML = `
        <td>${escapeHtml(wordVal)}</td>
        <td>${escapeHtml(posVal)}<br><small style="color:var(--color-text-muted)">${escapeHtml(typeVal)}</small></td>
        <td>${escapeHtml(meaningVal)}</td>
        ${conjSummary}
      `;
      reviewList.appendChild(tr);
    });
  } else {
    // Generic layout for custom CSV files!
    COLUMN_KEYS.forEach(col => {
      const th = document.createElement("th");
      th.textContent = col.name;
      headersRow.appendChild(th);
    });
    
    const sortedPairs = [...gameState.matchedPairs].sort((a, b) => a.id - b.id);
    
    sortedPairs.forEach(word => {
      const tr = document.createElement("tr");
      COLUMN_KEYS.forEach(col => {
        const td = document.createElement("td");
        td.textContent = getColumnValue(word, col.key);
        tr.appendChild(td);
      });
      reviewList.appendChild(tr);
    });
  }
}

function closeModal() {
  dom.resultModal.style.display = "none";
}

// --- テンプレートダウンロード機能 ---
function downloadTemplate() {
  const CSV_HEADERS = ["ID", "単語（見出し語）", "意味（現代語訳）", "品詞", "活用の種類", "未然形", "連用形", "終止形", "連体形", "已然形", "命令形"];
  
  // デモデータをテンプレートのサンプル行として出力する
  const csvRows = [CSV_HEADERS.join(",")];
  
  DEMO_WORDS.forEach(w => {
    const row = [
      w.id,
      escapeCsvField(w["単語（見出し語）"]),
      escapeCsvField(w["意味（現代語訳）"]),
      escapeCsvField(w["品詞"]),
      escapeCsvField(w["活用の種類"]),
      escapeCsvField(w["未然形"]),
      escapeCsvField(w["連用形"]),
      escapeCsvField(w["終止形"]),
      escapeCsvField(w["連体形"]),
      escapeCsvField(w["已然形"]),
      escapeCsvField(w["命令形"])
    ];
    csvRows.push(row.join(","));
  });
  
  const csvContent = csvRows.join("\n");
  // UTF-8 の BOM (Byte Order Mark) を追加してExcelでの文字化けを防ぐ
  const bom = new Uint8Array([0xEF, 0xBB, 0xBF]);
  const blob = new Blob([bom, csvContent], { type: "text/csv;charset=utf-8;" });
  
  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "カスタム暗記_神経衰弱_問題テンプレート.csv");
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

// CSVフィールドのエスケープ処理
function escapeCsvField(val) {
  if (val === undefined || val === null) return "";
  let stringVal = val.toString();
  // ダブルクォーテーション、カンマ、改行が含まれる場合はダブルクォーテーションで囲む
  if (stringVal.includes(",") || stringVal.includes('"') || stringVal.includes("\n") || stringVal.includes("\r")) {
    stringVal = stringVal.replace(/"/g, '""');
    return `"${stringVal}"`;
  }
  return stringVal;
}

// --- ファイルアップロード処理 ---
function handleFileUpload(e) {
  const file = e.target.files[0];
  if (!file) return;
  
  const reader = new FileReader();
  reader.onload = function(event) {
    const text = event.target.result;
    try {
      let data = [];
      if (file.name.endsWith(".json")) {
        const parsed = JSON.parse(text);
        if (!Array.isArray(parsed)) {
          throw new Error("JSONデータのルートは配列である必要があります。");
        }
        data = parsed.map((item, idx) => {
          const flatObj = {
            id: item.id || (idx + 1)
          };
          
          Object.keys(item).forEach(key => {
            if (key === "id") return;
            if (key === "conjugations" && item.conjugations && typeof item.conjugations === "object") {
              flatObj.conjugations = {};
              Object.keys(item.conjugations).forEach(cKey => {
                flatObj[cKey] = String(item.conjugations[cKey]).trim();
                flatObj.conjugations[cKey] = String(item.conjugations[cKey]).trim();
              });
            } else {
              flatObj[key] = String(item[key]).trim();
            }
          });
          
          return flatObj;
        });
      } else {
        const lines = parseCSV(text);
        if (lines.length < 2) {
          throw new Error("CSVファイルのデータ行が足りません。");
        }
        
        const rawHeaders = lines[0].map(h => h.trim());
        const idIdx = rawHeaders.findIndex(h => h.toLowerCase() === "id" || h.toLowerCase() === "ｉｄ");
        
        for (let i = 1; i < lines.length; i++) {
          const row = lines[i];
          if (row.length === 0 || (row.length === 1 && row[0].trim() === "")) continue;
          
          const wordObj = {
            id: (idIdx !== -1 && row[idIdx]) ? Number(row[idIdx]) : i
          };
          
          rawHeaders.forEach((header, colIdx) => {
            const hLower = header.toLowerCase();
            if (hLower === "id" || hLower === "ｉｄ") return;
            
            const val = row[colIdx] ? row[colIdx].trim() : "";
            const mappedKey = mapHeaderToKey(header);
            
            if (["mizen", "renyo", "shushi", "rentai", "izen", "meirei"].includes(mappedKey)) {
              if (!wordObj.conjugations) wordObj.conjugations = {};
              wordObj.conjugations[mappedKey] = val;
            }
            wordObj[mappedKey] = val;
          });
          
          const keys = Object.keys(wordObj).filter(k => k !== "id" && k !== "conjugations");
          if (keys.length > 0 && keys.some(k => wordObj[k] !== "")) {
            data.push(wordObj);
          }
        }
      }
      
      if (data.length === 0) {
        throw new Error("有効なデータが読み込めませんでした。");
      }
      
      kobunWords = data;
      localStorage.setItem("kobun-yogen-custom-data", JSON.stringify(data));
      localStorage.removeItem("kobun-yogen-gas-url");
      dom.gasUrlInput.value = "";
      
      updateDataStatus(true, `ロード成功: アップロードされた${data.length}件のデータを使用中`, "success");
      updateColumnsFromData(data);
      alert(`${data.length}件のカスタムデータを読み込みました！「組み合わせ」項目がCSVにあわせて更新されました。「稽古をはじめる」ボタンを押すとゲームが始まります。`);
      
    } catch (error) {
      console.error("ファイル読み込みエラー:", error);
      alert(`ファイルの読み込みに失敗しました:\n${error.message}`);
    }
    
    dom.uploadCsvInput.value = "";
  };
  
  reader.readAsText(file);
}

// 堅牢なCSVパーサー
function parseCSV(text) {
  const lines = [];
  let row = [""];
  let inQuotes = false;
  
  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i+1];
    
    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        row[row.length - 1] += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      row.push("");
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') {
        i++;
      }
      lines.push(row);
      row = [""];
    } else {
      row[row.length - 1] += char;
    }
  }
  if (row.length > 1 || row[0] !== "") {
    lines.push(row);
  }
  return lines;
}

// HTMLエスケープ処理 (XSS対策)
function escapeHtml(str) {
  if (str === undefined || str === null) return "";
  const stringVal = str.toString();
  return stringVal
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// --- 動的組み合わせ選択用の定義とヘルパー ---
const DEFAULT_COLUMN_KEYS = [
  { key: "単語（見出し語）", name: "単語（見出し語）" },
  { key: "意味（現代語訳）", name: "意味（現代語訳）" },
  { key: "品詞", name: "品詞" },
  { key: "活用の種類", name: "活用の種類" },
  { key: "未然形", name: "未然形" },
  { key: "連用形", name: "連用形" },
  { key: "終止形", name: "終止形" },
  { key: "連体形", name: "連体形" },
  { key: "已然形", name: "已然形" },
  { key: "命令形", name: "命令形" }
];

let COLUMN_KEYS = [...DEFAULT_COLUMN_KEYS];

// データ読み込み時のカラム正規化処理
function normalizeDataItem(item) {
  if (!item) return {};
  
  // すでに日本語キーで正規化されていればそのままコピーを返す
  if (item["単語"] !== undefined || item["意味"] !== undefined) {
    const copy = { id: item.id || 1 };
    Object.keys(item).forEach(k => {
      if (k !== "id") copy[k] = String(item[k]).trim();
    });
    return copy;
  }
  
  const normalized = { id: item.id || 1 };
  
  // 英語キーから標準の日本語ヘッダーへの対応表
  const keyMap = {
    word: "単語",
    meaning: "意味",
    pos: "品詞",
    type: "分類"
  };
  
  // 古文用言のデータと判定された場合は「活用の種類」にマッピング
  const isClassical = (item.type && item.type.includes("活用")) || item.conjugations;
  if (isClassical) {
    keyMap.type = "活用の種類";
  }
  
  // 標準キーの変換
  Object.keys(item).forEach(k => {
    if (k === "id") return;
    if (k === "conjugations") {
      if (item.conjugations && typeof item.conjugations === "object") {
        const conjMap = {
          mizen: "未然形",
          renyo: "連用形",
          shushi: "終止形",
          rentai: "連体形",
          izen: "已然形",
          meirei: "命令形"
        };
        Object.keys(item.conjugations).forEach(ck => {
          const jpKey = conjMap[ck] || ck;
          normalized[jpKey] = String(item.conjugations[ck]).trim();
        });
      }
    } else {
      const jpKey = keyMap[k] || k;
      normalized[jpKey] = String(item[k]).trim();
    }
  });
  
  return normalized;
}

// 読み込まれたデータセットから選択肢（COLUMN_KEYS）を動的に再構築する
function updateColumnsFromData(data) {
  if (!data || data.length === 0) {
    COLUMN_KEYS = [...DEFAULT_COLUMN_KEYS];
    renderColumnSelectButtons();
    return;
  }
  
  // 1番目のアイテムに含まれるすべてのキー（IDを除く）をそのままカラム項目とする
  const firstItem = data[0];
  const keys = Object.keys(firstItem).filter(k => k !== "id");
  
  COLUMN_KEYS = keys.map(k => {
    return { key: k, name: k };
  });
  
  // 選択状態のカラムが新しいリストに存在しない場合はデフォルトに戻す
  const hasA = COLUMN_KEYS.some(c => c.key === gameState.sideAColumn);
  const hasB = COLUMN_KEYS.some(c => c.key === gameState.sideBColumn);
  
  if (!hasA) {
    gameState.sideAColumn = COLUMN_KEYS[0] ? COLUMN_KEYS[0].key : "単語";
  }
  if (!hasB) {
    const meaningCol = COLUMN_KEYS.find(c => c.key === "意味" || c.key.includes("意味"));
    if (meaningCol) {
      gameState.sideBColumn = meaningCol.key;
    } else {
      gameState.sideBColumn = COLUMN_KEYS[1] ? COLUMN_KEYS[1].key : (COLUMN_KEYS[0] ? COLUMN_KEYS[0].key : "意味");
    }
  }
  
  if (gameState.sideAColumn === gameState.sideBColumn && COLUMN_KEYS.length > 1) {
    const alternative = COLUMN_KEYS.find(c => c.key !== gameState.sideAColumn);
    if (alternative) {
      gameState.sideBColumn = alternative.key;
    }
  }
  
  renderColumnSelectButtons();
}

// カラム選択ボタンの動的生成
function renderColumnSelectButtons() {
  const sideAContainer = document.getElementById("side-a-buttons");
  const sideBContainer = document.getElementById("side-b-buttons");
  
  if (!sideAContainer || !sideBContainer) return;
  
  sideAContainer.innerHTML = "";
  sideBContainer.innerHTML = "";
  
  COLUMN_KEYS.forEach(col => {
    // A面ボタン
    const btnA = document.createElement("button");
    btnA.type = "button";
    btnA.className = `column-btn ${gameState.sideAColumn === col.key ? 'active' : ''}`;
    btnA.textContent = col.name;
    btnA.addEventListener("click", () => {
      gameState.sideAColumn = col.key;
      renderColumnSelectButtons();
    });
    sideAContainer.appendChild(btnA);
    
    // B面ボタン
    const btnB = document.createElement("button");
    btnB.type = "button";
    btnB.className = `column-btn ${gameState.sideBColumn === col.key ? 'active' : ''}`;
    btnB.textContent = col.name;
    btnB.addEventListener("click", () => {
      gameState.sideBColumn = col.key;
      renderColumnSelectButtons();
    });
    sideBContainer.appendChild(btnB);
  });
}

// カラムの値を取得するヘルパー
function getColumnValue(wordData, columnKey) {
  if (!wordData) return "";
  return wordData[columnKey] !== undefined ? wordData[columnKey] : "";
}

// カラムの表示名を取得するヘルパー
function getColumnName(key) {
  const col = COLUMN_KEYS.find(c => c.key === key);
  return col ? col.name : "";
}



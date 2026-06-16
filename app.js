// ==========================================
// 古文用言 神経衰弱 - メインプログラム (app.js)
// ==========================================

// --- デモ用 既定の古文用言データ ---
const DEMO_WORDS = [
  { id: 1, word: "あり", meaning: "存在する、ある、生きている", pos: "動詞", type: "ラ行変格活用", conjugations: { mizen: "あら", renyo: "あり", shushi: "あり", rentai: "ある", izen: "あれ", meirei: "あれ" } },
  { id: 2, word: "をり", meaning: "存在する、居る、生きて生活する", pos: "動詞", type: "ラ行変格活用", conjugations: { mizen: "をら", renyo: "をり", shushi: "をり", rentai: "をる", izen: "をれ", meirei: "をれ" } },
  { id: 3, word: "はべる", meaning: "お仕えする、ございます", pos: "動詞", type: "ラ行変格活用", conjugations: { mizen: "はべら", renyo: "はべり", shushi: "はべる", rentai: "はべる", izen: "はべれ", meirei: "はべれ" } },
  { id: 4, word: "いますかり", meaning: "いらっしゃる、おいでになる", pos: "動詞", type: "ラ行変格活用", conjugations: { mizen: "いますから", renyo: "いますかり", shushi: "いますかり", rentai: "いますかる", izen: "いますかれ", meirei: "いますかれ" } },
  { id: 5, word: "おどろく", meaning: "（はっと）気づく、目を覚ます", pos: "動詞", type: "カ行四段活用", conjugations: { mizen: "おどろか", renyo: "おどろき", shushi: "おどろく", rentai: "おどろく", izen: "おどろけ", meirei: "おどろけ" } },
  { id: 6, word: "ののしる", meaning: "大声で騒ぐ、評判になる、羽振りをきかす", pos: "動詞", type: "ラ行四段活用", conjugations: { mizen: "ののしら", renyo: "ののしり", shushi: "ののしる", rentai: "ののしる", izen: "ののしれ", meirei: "ののしれ" } },
  { id: 7, word: "めづ", meaning: "愛する、褒める、心惹かれる", pos: "動詞", type: "ダ行下二段活用", conjugations: { mizen: "めで", renyo: "めで", shushi: "めづ", rentai: "むづる", izen: "むづれ", meirei: "めだよ" } },
  { id: 8, word: "おぼゆ", meaning: "（自然と）思われる、似ている、思い出す", pos: "動詞", type: "ヤ行下二段活用", conjugations: { mizen: "おぼえ", renyo: "おぼえ", shushi: "おぼゆ", rentai: "おぼゆる", izen: "おぼゆれ", meirei: "おぼえよ" } },
  { id: 9, word: "しのぶ", meaning: "我慢する、人目を避ける、懐かしむ", pos: "動詞", type: "ハ行四段活用", conjugations: { mizen: "しのば", renyo: "しのび", shushi: "しのぶ", rentai: "しのぶ", izen: "しのべ", meirei: "しのべ" } },
  { id: 10, word: "おこたる", meaning: "病気がよくなる、快復する、怠ける", pos: "動詞", type: "ラ行四段活用", conjugations: { mizen: "おこたら", renyo: "おこたり", shushi: "おこたる", rentai: "おこたる", izen: "おこたれ", meirei: "おこたれ" } },
  { id: 11, word: "あふ", meaning: "結婚する、めぐり合う", pos: "動詞", type: "ハ行四段活用", conjugations: { mizen: "あは", renyo: "あひ", shushi: "あふ", rentai: "あふ", izen: "あへ", meirei: "あへ" } },
  { id: 12, word: "うつろふ", meaning: "色あせる、散る、心変わりする", pos: "動詞", type: "ハ行四段活用", conjugations: { mizen: "うつろは", renyo: "うつろひ", shushi: "うつろふ", rentai: "うつろふ", izen: "うつろへ", meirei: "うつろへ" } },
  { id: 13, word: "うつくし", meaning: "かわいらしい、いとしい、見事だ", pos: "形容詞", type: "シク活用", conjugations: { mizen: "うつくしか", renyo: "うつくしく", shushi: "うつくし", rentai: "うつくしき", izen: "うつくしけれ", meirei: "○" } },
  { id: 14, word: "かなし", meaning: "愛おしい、かわいい、悲しい", pos: "形容詞", type: "シク活用", conjugations: { mizen: "かなしか", renyo: "かなしく", shushi: "かなし", rentai: "かなしき", izen: "かなしけれ", meirei: "○" } },
  { id: 15, word: "いみじ", meaning: "たいそう、素晴らしい、ひどい", pos: "形容詞", type: "シク活用", conjugations: { mizen: "いみじか", renyo: "いみじく", shushi: "いみじ", rentai: "いみじき", izen: "いみじけれ", meirei: "○" } },
  { id: 16, word: "をかし", meaning: "趣がある、美しい、滑稽だ", pos: "形容詞", type: "ク活用", conjugations: { mizen: "をかしか", renyo: "をかしく", shushi: "をかし", rentai: "をかしき", izen: "をかしけれ", meirei: "○" } },
  { id: 17, word: "あやし", meaning: "不思議だ、身分が低い、見苦しい", pos: "形容詞", type: "シク活用", conjugations: { mizen: "あやしか", renyo: "あやしく", shushi: "あやし", rentai: "あやしき", izen: "あやしけれ", meirei: "○" } },
  { id: 18, word: "すさまじ", meaning: "興ざめだ、殺風景だ、ひどい", pos: "形容詞", type: "シク活用", conjugations: { mizen: "すさまじか", renyo: "すさまじく", shushi: "すさまじ", rentai: "すさまじき", izen: "すさまじけれ", meirei: "○" } },
  { id: 19, word: "あてなり", meaning: "身分が高い、高貴だ、上品だ", pos: "形容動詞", type: "ナリ活用", conjugations: { mizen: "あてなら", renyo: "あてなり", shushi: "あてなり", rentai: "あてなる", izen: "あてなれ", meirei: "あてなれ" } },
  { id: 20, word: "いうなり", meaning: "優美だ、上品だ、上手だ", pos: "形容動詞", type: "ナリ活用", conjugations: { mizen: "いうなら", renyo: "いうなり", shushi: "いうなり", rentai: "いうなる", izen: "いうなれ", meirei: "いうなれ" } }
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
  sideAColumn: "word",            // A面カラムキー (デフォルト: 単語)
  sideBColumn: "type"             // B面カラムキー (デフォルト: 活用の種類)
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
        kobunWords = parsed;
        updateDataStatus(true, `ロード成功: アップロードされた${parsed.length}件のデータを使用中`, "success");
        updateColumnsFromData(parsed);
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
      updateDataStatus(true, "デモデータ（動詞・形容詞など）を使用中");
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
      kobunWords = data;
      localStorage.setItem("kobun-yogen-gas-url", url);
      updateDataStatus(true, `接続成功: ${data.length}件の古文用言データをロードしました`, "success");
      updateColumnsFromData(data);
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
      dom.p1NameDisplay.textContent = "学習者";
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
    throw new Error("用言データ（kobunWords）が空か読み込まれていません。");
  }
  
  // 1. 全データからランダムに指定されたペア数分の用言データを抽出
  const shuffledWords = [...kobunWords].sort(() => 0.5 - Math.random());
  const selectedWords = shuffledWords.slice(0, gameState.numPairs);
  
  if (selectedWords.length === 0) {
    throw new Error("選択された用言カードのペア数が0件です。");
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
        <!-- 裏面：和風 -->
        <div class="card-back">
          <div class="card-back-pattern">
            <i class="fa-solid fa-seedling"></i>
          </div>
        </div>
        <!-- 表面：和紙 -->
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
            未然: ${escapeHtml(c.mizen || word.mizen) || "○"}<br>
            連用: ${escapeHtml(c.renyo || word.renyo) || "○"}<br>
            終止: ${escapeHtml(c.shushi || word.shushi) || "○"}<br>
            連体: ${escapeHtml(c.rentai || word.rentai) || "○"}
          </td>
        `;
      }
      
      const wordVal = getColumnValue(word, "word");
      const posVal = getColumnValue(word, "pos");
      const typeVal = getColumnValue(word, "type");
      const meaningVal = getColumnValue(word, "meaning");
      
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
      escapeCsvField(w.word),
      escapeCsvField(w.meaning),
      escapeCsvField(w.pos),
      escapeCsvField(w.type),
      escapeCsvField(w.conjugations.mizen),
      escapeCsvField(w.conjugations.renyo),
      escapeCsvField(w.conjugations.shushi),
      escapeCsvField(w.conjugations.rentai),
      escapeCsvField(w.conjugations.izen),
      escapeCsvField(w.conjugations.meirei)
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
    link.setAttribute("download", "古文用言_神経衰弱_問題テンプレート.csv");
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
  { key: "word", name: "単語" },
  { key: "meaning", name: "意味" },
  { key: "pos", name: "品詞" },
  { key: "type", name: "活用の種類" },
  { key: "mizen", name: "未然形" },
  { key: "renyo", name: "連用形" },
  { key: "shushi", name: "終止形" },
  { key: "rentai", name: "連体形" },
  { key: "izen", name: "已然形" },
  { key: "meirei", name: "命令形" }
];

let COLUMN_KEYS = [...DEFAULT_COLUMN_KEYS];

// ヘッダー文字列から内部キーへのマッピング
function mapHeaderToKey(header) {
  if (!header) return "";
  const h = header.toString().trim().toLowerCase();
  if (h.includes("単語") || h.includes("見出し語") || h === "word") return "word";
  if (h.includes("意味") || h.includes("現代語訳") || h.includes("訳") || h === "meaning") return "meaning";
  if (h.includes("品詞") || h === "pos") return "pos";
  if (h.includes("活用") || h.includes("種類") || h === "type") return "type";
  if (h.includes("未然") || h === "mizen") return "mizen";
  if (h.includes("連用") || h === "renyo") return "renyo";
  if (h.includes("終止") || h === "shushi") return "shushi";
  if (h.includes("連体") || h === "rentai") return "rentai";
  if (h.includes("已然") || h === "izen") return "izen";
  if (h.includes("命令") || h === "meirei") return "meirei";
  return header.toString().trim(); // マッチしなければ元の文字列を使用
}

// ヘッダー配列を内部キー定義にマッピング
function mapHeaders(headers) {
  const mappedKeys = [];
  const columnKeys = [];
  
  headers.forEach((header, index) => {
    const hLower = header.toString().trim().toLowerCase();
    if (hLower === "id" || hLower === "ｉｄ") return;
    
    let key = mapHeaderToKey(header);
    if (mappedKeys.includes(key)) {
      key = header;
    }
    if (mappedKeys.includes(key)) {
      key = `${header}_${index}`;
    }
    
    mappedKeys.push(key);
    
    let displayName = header;
    if (key === "word" && header.includes("単語")) displayName = "単語";
    if (key === "meaning" && header.includes("意味")) displayName = "意味";
    if (key === "pos" && header.includes("品詞")) displayName = "品詞";
    if (key === "type" && header.includes("活用")) displayName = "活用の種類";
    
    columnKeys.push({ key: key, name: displayName });
  });
  
  return columnKeys;
}

// 読み込まれたデータセットから選択肢（COLUMN_KEYS）を動的に再構築する
function updateColumnsFromData(data) {
  if (!data || data.length === 0) {
    COLUMN_KEYS = [...DEFAULT_COLUMN_KEYS];
    renderColumnSelectButtons();
    return;
  }
  
  const firstItem = data[0];
  const keys = Object.keys(firstItem).filter(k => k !== "id" && k !== "conjugations");
  
  if (firstItem.conjugations && typeof firstItem.conjugations === "object") {
    Object.keys(firstItem.conjugations).forEach(k => {
      if (!keys.includes(k)) {
        keys.push(k);
      }
    });
  }
  
  const newCols = [];
  keys.forEach(k => {
    const stdKey = mapHeaderToKey(k);
    let displayName = k;
    if (stdKey === "word" && k !== "word") displayName = "単語";
    else if (stdKey === "meaning" && k !== "meaning") displayName = "意味";
    else if (stdKey === "pos" && k !== "pos") displayName = "品詞";
    else if (stdKey === "type" && k !== "type") displayName = "活用の種類";
    else if (stdKey === "mizen" && k !== "mizen") displayName = "未然形";
    else if (stdKey === "renyo" && k !== "renyo") displayName = "連用形";
    else if (stdKey === "shushi" && k !== "shushi") displayName = "終止形";
    else if (stdKey === "rentai" && k !== "rentai") displayName = "連体形";
    else if (stdKey === "izen" && k !== "izen") displayName = "已然形";
    else if (stdKey === "meirei" && k !== "meirei") displayName = "命令形";
    
    if (!newCols.some(c => c.key === k)) {
      newCols.push({ key: k, name: displayName });
    }
  });
  
  if (newCols.length > 0) {
    COLUMN_KEYS = newCols;
  } else {
    COLUMN_KEYS = [...DEFAULT_COLUMN_KEYS];
  }
  
  // 以前の選択状態が新しいカラム一覧になければリセット
  const hasA = COLUMN_KEYS.some(c => c.key === gameState.sideAColumn);
  const hasB = COLUMN_KEYS.some(c => c.key === gameState.sideBColumn);
  
  if (!hasA) {
    gameState.sideAColumn = COLUMN_KEYS[0] ? COLUMN_KEYS[0].key : "word";
  }
  if (!hasB) {
    const typeCol = COLUMN_KEYS.find(c => c.key === "type" || c.key.includes("活用"));
    if (typeCol) {
      gameState.sideBColumn = typeCol.key;
    } else {
      gameState.sideBColumn = COLUMN_KEYS[1] ? COLUMN_KEYS[1].key : (COLUMN_KEYS[0] ? COLUMN_KEYS[0].key : "type");
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
  if (wordData.conjugations && wordData.conjugations[columnKey] !== undefined) {
    return wordData.conjugations[columnKey];
  }
  return wordData[columnKey] || "";
}

// カラムの表示名を取得するヘルパー
function getColumnName(key) {
  const col = COLUMN_KEYS.find(c => c.key === key);
  return col ? col.name : "";
}



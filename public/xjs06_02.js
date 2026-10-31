const modalOpen = document.querySelectorAll('.modalOpen'); // リンク
const modal = document.querySelector('.modal'); // モーダルウィンドウ

// リンククリック時
modalOpen.forEach((e) => { // リンクは複数あるので繰り返し処理を行う
    e.addEventListener('click', () => {
        modal.style.display = "block"; // モーダルウィンドウを表示
    });
});

// モーダルウィンドウクローズ
const modalClose = document.querySelector('.modalClose');

// バツ印クリック時
modalClose.addEventListener('click', () => {
    modal.style.display = "none"; // モーダルウィンドウを非表示
});

// モーダルコンテンツ以外クリック時
modal.addEventListener('click', () => {
    modal.style.display = "none"; // モーダルウィンドウを非表示
});

const dog = document.querySelector('.modal-content-dog');
const cat = document.querySelector('.modal-content-cat');

// 犬猫 表示・非表示の切り替え
const getInfo = (type) => {
    if (type === 'dog') {
        dog.style.display = "block"; // 犬を表示
        cat.style.display = "none";  // 猫を非表示
    } else if (type === "cat") {
        dog.style.display = "none"; // 犬を非表示
        cat.style.display = "block"; // 猫を非表示
    }
}

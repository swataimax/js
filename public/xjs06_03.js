const tabs = document.querySelectorAll('.tab'); // タブ情報
const contents = document.querySelectorAll('.content'); // コンテンツ情報

tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {

        // タブからactiveを削除する
        tabs.forEach(tab => tab.classList.remove('active'));
        // コンテンツからactiveを削除する
        contents.forEach(
                        content => content.classList.remove('active'));

        // クリックしたタブをactiveにする
        tab.classList.add('active');
        // クリックしたタブに紐づくコンテンツをactiveにする
        contents[i].classList.add('active');
    });
});

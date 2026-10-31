const corporate = document.querySelectorAll('.corporate');    // 法人情報
const individual = document.querySelectorAll('.individual'); // 個人情報
const type = document.getElementsByName('type'); // 法人・個人ラジオボタン
let len = type.length;
let checkValue = "";

// 法人・個人ラジオボタン処理、初期表示
const displayItem = () => {
    // ラジオボタンの選択肢分、繰返し処理
    for (let i = 0; i < len; i++) {
        if (type.item(i).checked) { // 選択されている場合
            checkValue = type.item(i).value;
        }
    }
    // 法人・個人切り替え
    switchDisplay(checkValue);
}

// 法人・個人切り替え
const switchDisplay = (value) => {
    // ラジオボタンの選択値が「法人」の場合
    if (value === "法人") {
        // class属性の「corporate」すべてに「active」にする
        corporate.forEach((e) => { 
            // 法人の場合、「active」を付与
            e.classList.add('active');
        });
        // 個人の場合、「active」を削除
        individual.forEach((e) => {
            e.classList.remove('active');
        });
    } else {
        // 個人の場合
        corporate.forEach((e) => {
            e.classList.remove('active'); // 法人の場合、「active」を削除
        });
        individual.forEach((e) => {
            e.classList.add('active');    // 個人の場合、「active」を付与
        });
    }
}

// 電話番号のハイフン除去
const removeHyphen = (id) => {
    // 電話番号の入力値取得
    const element = document.getElementById(id).value;
    // ハイフンを空文字に置換
    document.getElementById(id).value = element.replaceAll('-', '');
}

// 業種プルダウン連動処理
const majorIndustryChange = () => {
    // 大分類プルダウンの値取得
    const majorCategory = 
                    document.getElementById('major-category').value;
    
    // 小分類プルダウン取得
    const options = document.querySelectorAll('#subcategory option');
    options.forEach((o) => {
        // 大分類で選択した値と小分類のデータセットを比較
        if (majorCategory != o.dataset.val) { // 不一致時は非表示
            o.style.display = "none";
        } else {                                           // 一致時は表示
            o.style.display = "block";
        }
    }); 

    // 初期表示時、小分類は非活性
    const subcategory = document.getElementById('subcategory');
    if (majorCategory !== "") { // 大分類が未選択の場合
        subcategory.disabled = false; // 活性化
    } 
    // 選択肢の1番目を選択している状態に
    subcategory.selectedIndex = 0;
}

// js06_04_02.html　初期表示
window.onload = () => {
    // URLを取得
    const url = new URL(window.location.href);
    // URLSearchParamsオブジェクトを取得
    const params = url.searchParams;

	// パラメータ(js06_04_01.htmlの入力値)を取得
	const type = params.get('type'); // 法人/個人
	const name = params.get('name'); // 担当者名
	const furigana = params.get('furigana'); // 担当者名(フリガナ)
	const email = params.get('email'); // メールアドレス
	const companyName = params.get('company-name'); // 会社名
	const departmentName = params.get('department-name'); // 部署名
	const zipCode = params.get('zip-code'); // 郵便番号
	const address = params.get('address'); // 住所
	const buildingName = params.get('building-name'); // 建物名
	const majorCategory = params.get('major-category'); // 業種(大分類)
	const subcategory = params.get('subcategory'); // 業種(小分類)
	const headcount = params.get('headcount'); // 社員数
	const year = params.get('year'); // 生年月日(年)
	const month = params.get('month'); // 生年月日(月)
	const day = params.get('day'); // 生年月日(日)
	const tel = params.get('tel'); // 電話番号

	// 画面の各項目に値を設定
	document.getElementById('type').innerText = type + 'のお客様';
	document.getElementById('name').innerText = name;
	document.getElementById('furigana').innerText = furigana;
	document.getElementById('email').innerText = email;
	document.getElementById('company-name').innerText =
	                                                                      companyName;
	document.getElementById('department-name').innerText =
	                                                                      departmentName;
	document.getElementById('zip-code').innerText = zipCode;
	document.getElementById('address').innerText = address;
	document.getElementById('building-name').innerText =
	                                                                      buildingName;
	document.getElementById('major-category').innerText = 
	                                                                        majorCategory;
	document.getElementById('subcategory').innerText = subcategory;
	document.getElementById('headcount').innerText = headcount;

    document.getElementById('year').innerText = year;
    document.getElementById('month').innerText = month;
    document.getElementById('day').innerText = day;
    document.getElementById('tel').innerText = tel;
    
    // 法人・個人切り替え
    switchDisplay(type);
}

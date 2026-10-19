// 課題：メンバー情報を扱う関数を実装する
// WordPressなどのCMSで取得したメンバーデータを加工する場面を想定します。

// 以下のデータを使用してください。
const members = [
  {
    id: 1,
    name: 'Tanaka',
    role: 'designer',
    active: true,
    profile: {
      city: 'Tokyo',
    },
  },
  {
    id: 2,
    name: 'Suzuki',
    role: 'engineer',
    active: true,
  },
  {
    id: 3,
    name: 'Sato',
    role: 'director',
    active: false,
    profile: {
      city: 'Osaka',
    },
  },
];

/*****************************************************
// 演習A：メンバー情報の取得
// getMemberInfo(memberId)という関数を作成してください。
*****************************************************/
// 要件：
// - find()でIDに一致するメンバーを検索する
// - 分割代入を使用して必要な情報を取得する
// - optional chainingで住所情報を安全に扱う
// - メンバーが見つからない場合はundefinedを返す
function getMemberInfo(memberId) {

  // ① find()でメンバーを検索する
  const member = members.find((member) => member.id === memberId);

  // ② 見つからなかった場合は処理を終了する
  if(!member) {
    return undefined;
  }

  // ③ 分割代入でnameとprofileを取得する
  const { name, profile } = member;

  // ④ optional chainingでcityを取得する
  const city = profile?.city;

  // ⑤ nameとcityを持つオブジェクトを返す
  return { name, city};
};

console.log(getMemberInfo(1));
// { name: 'Tanaka', city: 'Tokyo' }

console.log(getMemberInfo(2));
// { name: 'Suzuki', city: undefined }

console.log(getMemberInfo(99));
// undefined

/*****************************************************
// 演習B：メンバー情報の更新
// updateMemberRole(memberId, newRole)という関数を作成してください。
*****************************************************/
// 要件：
// - 指定したIDのメンバーのroleを変更する
// - map()とspread構文を使用する
// - 元のmembers配列と、その中の既存オブジェクトを直接変更しない
// - 更新後の新しい配列を返す



function updateMemberRole(memberId, newRole) {
  return members.map((member) => {
    if (member.id === memberId) {
      return {
        ...member,
        role: newRole
      };
    }
    return member;
  });
}
const updatedMembers = updateMemberRole(1, 'engineer');

console.log(updatedMembers[0].role);
// 'engineer'

console.log(members[0].role);
// 'designer'

console.log(updatedMembers[1].role);
// 'engineer'

/*****************************************************
// 演習C：複数IDによるメンバー検索
// getMembersByIds(...ids)という関数を作成してください。
*****************************************************/
// 要件：
// - rest構文で複数のIDを受け取る
// - filter()とincludes()を使用して、指定されたIDのメンバーを取得する
// - 該当するメンバーがいない場合は空配列を返す

function getMembersByIds(...ids) {
  return members.filter((member) => {
    return ids.includes(member.id);
  });
}

console.log(getMembersByIds(1, 3));
// TanakaとSatoのオブジェクトを含む配列

console.log(getMembersByIds(2));
// Suzukiのオブジェクトを含む配列

console.log(getMembersByIds(99));
// []

console.log(getMembersByIds());
// []


// // Q1. 配列の分割代入とオブジェクトの分割代入では、値を取得する基準がどのように異なりますか？
// 配列は順番に値を取得。オブジェクトは指定のプロパティを取得。

// // Q2. spread構文でオブジェクトをコピーする場合、なぜ元のオブジェクトを変更せずに更新できるのでしょうか？また、浅いコピーとは何ですか？
// 新しいオブジェクトに値を入れるため。浅いコピーとは、コピーしたオブジェクトの入れ子になった参照値までは複製しないコピーです。

// // Q3. spread構文とrest構文の違いを、関数呼び出しと関数定義の観点から説明してください。
// spread：値を展開する
// 関数の呼び出し時に使用します。

// rest：複数の値をまとめる
// 関数の定義時に使用します。

// // Q4. project?.client?.nameとproject?.client.nameでは、どのようなケースで動作が異なりますか？
// 一層目や二層目でundefindやnullになってもundefindを返す。一層目のみエラーなく返すか

// // Q5. 今回学んだ構文のうち、ReactのPropsやStateを扱う際に特に役立つものは何でしょうか？理由も説明してください。
// Props：親コンポーネントから子コンポーネントへ渡すデータ
// State：コンポーネントが保持する、画面の表示に関わる状態

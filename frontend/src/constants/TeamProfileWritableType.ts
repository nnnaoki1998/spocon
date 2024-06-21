/** 編集可能なチームプロフィール画面の種別 */
// NOTE:
// enum利用時にeslintのエラーが出る。
// 根本解決は以下だが、他の影響箇所があるため一時的に無効にしている。
// https://typescript-eslint.io/rules/no-shadow/#how-to-use
// eslint-disable-next-line no-shadow
export enum TeamProfileWritableType {
  Registration = 'registration', // 登録画面
  Edit = 'edit', // 編集画面
}

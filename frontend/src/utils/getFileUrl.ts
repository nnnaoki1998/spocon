export type Args = {
  file: File | null;
};

/** 指定されたファイルのURLを返す関数 */
export const getFileUrl = ({ file }: Args): Promise<string> =>
  new Promise((resolve, reject) => {
    if (!file) {
      reject(new Error('ファイルが指定されていません'));
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      if (base64 && typeof base64 === 'string') {
        resolve(base64);
      } else {
        reject(new Error('ファイルの読み込みに失敗しました'));
      }
    };
    reader.onerror = () => {
      reject(new Error('ファイルの読み込み中にエラーが発生しました'));
    };
    reader.readAsDataURL(file);
  });

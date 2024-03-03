import { Storage } from 'aws-amplify';
import React, { useState } from 'react';
import { PrivateRoute } from '../PrivateRoute';

const ImageSample: React.FC = () => {
  const [image, setImage] = useState<File>();
  const [preview, setPreview] = useState<string>('');
  const [currentImage, setCurrentImage] = useState<string>();

  const getImages = () => {
    // TODO: testxはDBから取得したパスを指定する
    Storage.get('testx')
      .then((result) => {
        setCurrentImage(result);
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  };

  const handleSelectedImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files === null || event.target.files.length === 0) return;
    const file = event.target.files[0];
    setImage(file);
    setPreview(window.URL.createObjectURL(file));
  };

  const imageUpload = (file: File | undefined) => {
    if (file === undefined) return;
    // TODO: ファイル名はuuid等の一意なものを使用する
    Storage.put('testx', file, {
      contentType: 'image/png',
    })
      .then((result) => {
        // ここでresultにS3のパスが入っているので、DBに保存する
        console.log(result); // eslint-disable-line no-console
        console.log('アップロード成功'); // eslint-disable-line no-console
      })
      .catch((error) => {
        console.log(error); // eslint-disable-line no-console
      });
  };

  console.log('ImageSample'); // eslint-disable-line no-console
  return (
    <PrivateRoute>
      <div>ImageSample</div>
      <div>
        <label htmlFor="image">
          画像アップロード
          <input
            type="file"
            accept="image/*"
            id="image"
            onChange={handleSelectedImage}
          />
        </label>
      </div>
      <div>
        {preview ? (
          <div>
            <p>選択した画像イメージ</p>
            <img src={preview} alt="preview" />
          </div>
        ) : null}
      </div>
      <button type="button" onClick={() => getImages()}>
        画像取得
      </button>
      <div>
        {currentImage ? (
          <div>
            <p>取得画像イメージ</p>
            <img src={currentImage} alt="currentImage" />
          </div>
        ) : null}
      </div>
      <button type="button" onClick={() => imageUpload(image)}>
        送信
      </button>
    </PrivateRoute>
  );
};

export { ImageSample };

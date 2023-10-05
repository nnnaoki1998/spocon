import React, { useState } from 'react';

export const Register: React.FC = () => {
  const [sport, setSport] = useState('')
  const [introduction, setIntroduction] = useState('')

  return (
    <React.Fragment>
    
      <form action="">
        <div>
          <h3>チーム名</h3>
          <label htmlFor="team_name">
            <input 
              type="text"
              placeholder="スポコン　太郎"
            />
          </label>
        </div>
        <div>
          <h3>スポーツ種別</h3>
          <label>
            <select value={sport} onChange={(s) => setSport(s.target.value)}>
              <option value="baseball">野球</option>
              <option value="basketball">バスケ</option>
              <option value="soccer">サッカー</option>
              <option value="handball">ハンドボール</option>
            </select>
          </label>
        </div>
        <div>
          <h3>主な活動場所</h3>
            <div className="placeList">
              <label htmlFor="place">
                都道府県：
                <input type="text" />
              </label>
              <label htmlFor="place">
                市区町村：
                <input type="text" />
              </label>
            </div>
        </div>
        <div>
          <h3>チーム紹介文</h3>
          <label htmlFor="text">
            <textarea 
              value={introduction}
              name="introduction"
              onChange={(i) => setIntroduction(i.target.value)}
              ></textarea>
          </label>
        </div>
        <div>
          <h3>チーム画像</h3>
          <label htmlFor="team_image">
            <input type="file" />
          </label>
        </div>
        <div>
          <input type="submit" name="登録" />
        </div>
      </form>
    </React.Fragment>
  )
}
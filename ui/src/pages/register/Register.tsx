import React from 'react';

export const Register: React.FC = () => {
  return (
    <React.Fragment>
      <form action="">
        <div>
          <label htmlFor="team_name">
            チーム名：
            <input 
              type="text"
              value="sample team"
            />
          </label>
        </div>
        <div>
          <label htmlFor="sports_type">
            スポーツ種別：
            <input type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="active_time">
            主な活動日時：
            <input type="week" />
          </label>
        </div>
        <div>
          <label htmlFor="place">
            主な活動場所：
            <input type="text" />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            チーム紹介文：
            <input type="textbox" />
          </label>
        </div>
        <div>
          <label htmlFor="team_image">
            チーム画像：
            <input type="file" />
          </label>
        </div>
        <div>
          <button type="submit">登録</button>
        </div>
      </form>
    </React.Fragment>
  )
}
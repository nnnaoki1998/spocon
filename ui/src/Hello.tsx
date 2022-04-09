import * as React from 'react';

const Hello: React.FC = () => {
  const buildGreetingText: (date: Date) => string = (date) => {
    // 0 ~ 23 の範囲なので+1
    const hours = date.getHours();
    if (hours > 5 && hours < 11) {
      return 'おはようございます！';
    } if (hours >= 11 && hours < 18) {
      return 'こんにちは！';
    }
    return 'こんばんは！';
  };

  return <h1>{buildGreetingText(new Date())}</h1>;
};

export default Hello;

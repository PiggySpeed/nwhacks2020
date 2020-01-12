import React from 'react';
import Lottie from 'react-lottie';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: require('./1378-acrobatics.json'),
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

function App() {
  return (
    <div className="App">
      <Lottie
        options={defaultOptions}
        height={500}
        width={400} />
    </div>
  );
}

export default App;

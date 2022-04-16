window.onload = () => {
  const se = document.querySelector("#demo_sound");
  document.querySelector("#demo_btn").addEventListener("click", () => {
    se.currentTime = 0;//再生が終わる前にもう一度先頭から再生させる。
    se.play();
  });
};



window.addEventListener('DOMContentLoaded', function () {
  // wait for inject.js to load the bot
  window.botpressWebChat.onEvent(
    function () {
      // 대화 자동 시작
      window.botpressWebChat.sendEvent({ type: 'trigger' });

    },
    ['LIFECYCLE.LOADED']
  );
});
let startBtn = document.getElementById('start');
let resetBtn = document.getElementById('reset');

let hour = 0, min = 0, sec = 0, count = 0, lap = 0;
let timer = false;

startBtn.addEventListener('click', () => {
  timer = true;
  stopWatch();
  $('#start').hide();
  $('#lap').show();
});

$('#lap').click(() => {
  lap++;
  $('.lap').removeClass("active");
  $('.laps').prepend(`
    <div class="lap active">
      <p><strong>Lap ${lap}</strong></p>
      <p>${String(hour).padStart(2, '0')} : ${String(min).padStart(2, '0')} : ${String(sec).padStart(2, '0')} : ${String(count).padStart(2, '0')}</p>
    </div>
  `);
});

resetBtn.addEventListener('click', () => {
  timer = false;
  hour = min = sec = count = lap = 0;
  $('#hr, #min, #sec, #count').text("00");
  $('.laps').html("");
  $('#start').show();
  $('#lap').hide();
});

function stopWatch() {
  if (timer) {
    count++;
    if (count === 100) { sec++; count = 0; }
    if (sec === 60) { min++; sec = 0; }
    if (min === 60) { hour++; min = 0; }

    $('#hr').text(String(hour).padStart(2, '0'));
    $('#min').text(String(min).padStart(2, '0'));
    $('#sec').text(String(sec).padStart(2, '0'));
    $('#count').text(String(count).padStart(2, '0'));

    setTimeout(stopWatch, 10);
  }
}

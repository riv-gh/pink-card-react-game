const ctx = new AudioContext();
const oscillator = ctx.createOscillator();

const beep = (f = 1000, d = 0.5) => { // частота в герцах, длительность в секундах
  oscillator.frequency.value = f;
  oscillator.connect(ctx.destination);
  oscillator.start();
  oscillator.stop(d);
}

export default beep
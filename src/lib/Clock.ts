export class Clock {

  private _audioContext: AudioContext;

  private _counter: number = 1;

  private _tempo: number;
  private _counterTimeValue: number;
  
  private _futureTickTime: number = 0;

  private _metronomeVolume: GainNode;
  private _metronomeOsc: OscillatorNode;

  constructor(audioContext: AudioContext, tempo: number = 120.0) {
    this._audioContext = audioContext;
    this._futureTickTime = this._audioContext.currentTime;
    this._tempo = tempo;

    this._metronomeOsc = audioContext.createOscillator();
    this._metronomeVolume = audioContext.createGain();

    const secondsPerBeat = 60.0 / this._tempo;
    this._counterTimeValue = secondsPerBeat / 4; // 16th

  }

  public start(): void {
    this._futureTickTime = this._audioContext.currentTime;
    this.scheduler();
  }

  private scheduler(): void {
    if (this._futureTickTime < this._audioContext.currentTime + 0.1) {
      this.playMetronome(this._futureTickTime, true);
      this.playTick();
    }
    window.setTimeout(this.scheduler.bind(this), 0);
  }

  private playTick(): void {
    console.log(`This is 16th note: ${this._counter}`);
    this._counter += 1;
    this._futureTickTime += this._counterTimeValue;
    if (this._counter > 16) {
      this._counter = 1;
    }
  }

  private playMetronome(time: number, playing: boolean): void {
    if (playing) {
      this._metronomeOsc = this._audioContext.createOscillator();
      this._metronomeOsc.connect(this._metronomeVolume);
      this._metronomeVolume.connect(this._audioContext.destination);
      this._metronomeOsc.frequency.value = 300;
      if (this._counter === 1) {
        this._metronomeOsc.frequency.value = 500;
      }
      this._metronomeOsc.start(time);
      this._metronomeOsc.stop(time + 0.1);
    }
  }


}
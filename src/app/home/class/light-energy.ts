import { IEnergy } from './ienergy';

export class LightEnergy implements IEnergy {
    private intensity: number;
    private form: string;

    constructor() {
        this.intensity = 5;
        this.form = 'beam';
    }

    charge(): void {
        this.intensity += 5;
        console.log(`Light energy charged. Intensity: ${this.intensity}`);
    }

    release(): void {
        console.log(`Light energy released in form of ${this.form}. Power: ${this.intensity}`);
        this.intensity = 0;
    }

    takeDamage(damage: number): void {
        this.intensity = Math.max(0, this.intensity - damage);
        console.log(`Light energy faded. Intensity: ${this.intensity}`);
    }

    specialAbility(): void {
        console.log('Light energy heals nearby allies.');
        this.intensity += 3;
    }

    evolve(): void {
        this.form = this.form === 'beam' ? 'pulse' : 'beam';
        console.log(`Light energy evolved into: ${this.form}`);
    }
}

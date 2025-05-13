import { IEnergy } from './ienergy';

export class MagneticEnergy implements IEnergy {
    private polarity: 'positive' | 'negative';
    private chargeLevel: number;

    constructor() {
        this.polarity = 'positive';
        this.chargeLevel = 0;
    }

    charge(): void {
        this.chargeLevel += 7;
        console.log(`Magnetic energy charged. Level: ${this.chargeLevel}`);
    }

    release(): void {
        console.log(`Magnetic pulse emitted. Level: ${this.chargeLevel}, Polarity: ${this.polarity}`);
        this.chargeLevel = 0;
    }

    takeDamage(damage: number): void {
        this.chargeLevel = Math.max(0, this.chargeLevel - damage);
        console.log(`Magnetic field destabilized. Level: ${this.chargeLevel}`);
    }

    specialAbility(): void {
        console.log(`Magnetic energy reverses polarity.`);
        this.polarity = this.polarity === 'positive' ? 'negative' : 'positive';
    }

    evolve(): void {
        console.log('Magnetic energy oscillates between dual states.');
        this.chargeLevel += 5;
    }
}

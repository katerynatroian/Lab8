import { BaseEnergy } from './base-energy';

export class MagneticEnergy extends BaseEnergy {
    private polarity: 'positive' | 'negative';

    constructor() {
        super();
        this.polarity = 'positive';
    }

    specialAbility(): void {
        console.log(`Магнітна енергія змінює полярність.`);
        this.polarity = this.polarity === 'positive' ? 'negative' : 'positive';
    }

    evolve(): void {
        console.log('Магнітна енергія коливається між двома станами.');
        this.power += 5;
    }
}

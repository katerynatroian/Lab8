import { BaseEnergy } from './base-energy';

export class LightEnergy extends BaseEnergy {
    private form: string;

    constructor() {
        super();
        this.power = 5;
        this.form = 'промінь';
    }

    specialAbility(): void {
        console.log('Світлова енергія лікує найближчих союзників.');
        this.power += 3;
    }

    evolve(): void {
        this.form = this.form === 'промінь' ? 'пульс' : 'промінь';
        console.log(`Світлова енергія еволюціонувала в: ${this.form}`);
    }
}

import { BaseEnergy } from './base-energy';

export class DarkEnergy extends BaseEnergy {
    private state: string;

    constructor() {
        super();
        this.state = 'нестабільна';
    }

    specialAbility(): void {
        console.log('Темна енергія поглинає джерела світла поблизу...');
        this.power += 15;
    }

    evolve(): void {
        this.state = this.state === 'нестабільна' ? 'форма порожнечі' : 'нестабільна';
        console.log(`Темна енергія еволюціонувала в: ${this.state}`);
    }
}

import { IEnergy } from './ienergy';

export abstract class BaseEnergy implements IEnergy {
    protected power: number = 0;

    abstract specialAbility(): void;
    abstract evolve(): void;

    charge(): void {
        this.power += 10;
        console.log(`${this.constructor.name} заряджено. Потужність: ${this.power}`);
    }

    release(): void {
        console.log(`${this.constructor.name} випущено з силою: ${this.power}`);
        this.power = 0;
    }

    takeDamage(damage: number): void {
        this.power = Math.max(0, this.power - damage);
        console.log(`${this.constructor.name} ослаблено. Потужність: ${this.power}`);
    }
}

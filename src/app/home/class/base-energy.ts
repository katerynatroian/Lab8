import { IEnergy } from './ienergy';

export abstract class BaseEnergy implements IEnergy {
    protected power: number = 0;

    abstract specialAbility(): void;
    abstract evolve(): void;

    charge(): void {
        this.power += 10;
    }

    release(): void {
        this.power = 0;
    }

    takeDamage(damage: number): void {
        this.power = Math.max(0, this.power - damage);
    }
}

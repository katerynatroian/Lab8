export interface IEnergy {
    charge(): void;
    release(): void;
    takeDamage(damage: number): void;
    specialAbility(): void;
    evolve(): void;
}

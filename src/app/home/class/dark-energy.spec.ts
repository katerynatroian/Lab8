import { DarkEnergy } from './dark-energy';

describe('Тестування Темної Енергії', () => {
    let energy: DarkEnergy;

    beforeEach(() => {
        energy = new DarkEnergy();
    });

    it('має правильно заряджатися', () => {
        energy.charge();
        energy['charge']();
        expect(energy['power']).toBe(20);
    });

    it('має вивільняти енергію і скидати потужність', () => {
        energy.charge();
        energy.release();
        expect(energy['power']).toBe(0);
    });

    it('має отримувати шкоду і зменшувати потужність', () => {
        energy.charge();
        energy.takeDamage(5);
        expect(energy['power']).toBe(5);
    });

    it('не має опускати потужність нижче 0', () => {
        energy.takeDamage(100);
        expect(energy['power']).toBe(0);
    });

    it('має збільшувати потужність через особливу здатність', () => {
        energy.specialAbility();
        expect(energy['power']).toBe(15);
    });

    it('має змінювати стан між "unstable" і "void form"', () => {
        energy.evolve();
        expect(energy['state']).toBe('void form');
        energy.evolve();
        expect(energy['state']).toBe('unstable');
    });
});

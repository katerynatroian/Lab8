import { LightEnergy } from './light-energy';

describe('Тестування Світлої Енергії', () => {
    let energy: LightEnergy;

    beforeEach(() => {
        energy = new LightEnergy();
    });

    it('має правильно заряджатися і збільшувати інтенсивність', () => {
        energy.charge();
        expect(energy['intensity']).toBe(10);
    });

    it('має вивільняти енергію і скидати інтенсивність', () => {
        energy.charge();
        energy.release();
        expect(energy['intensity']).toBe(0);
    });

    it('має отримувати шкоду і зменшувати інтенсивність', () => {
        energy.charge();
        energy.takeDamage(3);
        expect(energy['intensity']).toBe(7);
    });

    it('не має опускати інтенсивність нижче 0', () => {
        energy.takeDamage(100);
        expect(energy['intensity']).toBe(0);
    });

    it('має лікувати через особливу здатність', () => {
        energy.specialAbility();
        expect(energy['intensity']).toBe(8);
    });

    it('має змінювати форму між "beam" і "pulse"', () => {
        energy.evolve();
        expect(energy['form']).toBe('pulse');
        energy.evolve();
        expect(energy['form']).toBe('beam');
    });
});

import { MagneticEnergy } from './magnetic-energy';

describe('Тестування Магнітної Енергії', () => {
    let energy: MagneticEnergy;

    beforeEach(() => {
        energy = new MagneticEnergy();
    });

    it('має правильно заряджатися і збільшувати рівень заряду', () => {
        energy.charge();
        expect(energy['chargeLevel']).toBe(7);
    });

    it('має вивільняти імпульс і скидати рівень заряду', () => {
        energy.charge();
        energy.release();
        expect(energy['chargeLevel']).toBe(0);
    });

    it('має отримувати шкоду і зменшувати рівень заряду', () => {
        energy.charge();
        energy.takeDamage(3);
        expect(energy['chargeLevel']).toBe(4);
    });

    it('не має зменшувати рівень заряду нижче 0', () => {
        energy.takeDamage(100);
        expect(energy['chargeLevel']).toBe(0);
    });

    it('має змінювати полярність через особливу здатність', () => {
        expect(energy['polarity']).toBe('positive');
        energy.specialAbility();
        expect(energy['polarity']).toBe('negative');
        energy.specialAbility();
        expect(energy['polarity']).toBe('positive');
    });

    it('має еволюціонувати і збільшувати заряд', () => {
        energy.evolve();
        expect(energy['chargeLevel']).toBe(5);
    });
});

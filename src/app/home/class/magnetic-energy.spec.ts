import { MagneticEnergy } from "./magnetic-energy";

describe('MagneticEnergy', () => {
    let magneticEnergy: MagneticEnergy;

    beforeEach(() => {
        magneticEnergy = new MagneticEnergy();
    });

    test('початковий стан полярності має бути "positive"', () => {
        expect(magneticEnergy['polarity']).toBe('positive');
    });

    test('метод specialAbility має змінювати полярність', () => {
        const initialPolarity = magneticEnergy['polarity'];
        magneticEnergy.specialAbility();
        expect(magneticEnergy['polarity']).toBe(initialPolarity === 'positive' ? 'negative' : 'positive');
    });

    test('метод specialAbility має виводити правильне повідомлення', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        magneticEnergy.specialAbility();
        expect(consoleSpy).toHaveBeenCalledWith('Магнітна енергія змінює полярність.');
    });

    test('метод evolve має збільшувати потужність на 5', () => {
        const initialPower = magneticEnergy['power'];
        magneticEnergy.evolve();
        expect(magneticEnergy['power']).toBe(initialPower + 5);
    });

    test('метод evolve має виводити правильне повідомлення', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        magneticEnergy.evolve();
        expect(consoleSpy).toHaveBeenCalledWith('Магнітна енергія коливається між двома станами.');
    });
});

import { LightEnergy } from "./light-energy";

describe('LightEnergy', () => {
    let lightEnergy: LightEnergy;

    beforeEach(() => {
        lightEnergy = new LightEnergy();
    });

    test('початкова потужність має бути 5', () => {
        expect(lightEnergy['power']).toBe(5);
    });

    test('початковий стан форми має бути "промінь"', () => {
        expect(lightEnergy['form']).toBe('промінь');
    });

    test('метод specialAbility має збільшувати потужність на 3', () => {
        const initialPower = lightEnergy['power'];
        lightEnergy.specialAbility();
        expect(lightEnergy['power']).toBe(initialPower + 3);
    });

    test('метод specialAbility має виводити правильне повідомлення', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        lightEnergy.specialAbility();
        expect(consoleSpy).toHaveBeenCalledWith('Світлова енергія лікує найближчих союзників.');
    });

    test('метод evolve має змінювати стан з "промінь" на "пульс"', () => {
        lightEnergy.evolve();
        expect(lightEnergy['form']).toBe('пульс');
    });

    test('метод evolve має змінювати стан з "пульс" на "промінь"', () => {
        lightEnergy.evolve();
        lightEnergy.evolve();
        expect(lightEnergy['form']).toBe('промінь');
    });

    test('метод evolve має виводити правильне повідомлення', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        lightEnergy.evolve();
        expect(consoleSpy).toHaveBeenCalledWith('Світлова енергія еволюціонувала в: пульс');
    });
});

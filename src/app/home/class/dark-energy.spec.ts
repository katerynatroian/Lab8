import { DarkEnergy } from "./dark-energy";

describe('DarkEnergy', () => {
    let darkEnergy: DarkEnergy;

    beforeEach(() => {
        darkEnergy = new DarkEnergy();
    });

    test('початковий стан енергії має бути "нестабільна"', () => {
        expect(darkEnergy['state']).toBe('нестабільна');
    });

    test('метод specialAbility має збільшувати потужність на 15', () => {
        const initialPower = darkEnergy['power'];
        darkEnergy.specialAbility();
        expect(darkEnergy['power']).toBe(initialPower + 15);
    });

    test('метод specialAbility має виводити правильне повідомлення', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        darkEnergy.specialAbility();
        expect(consoleSpy).toHaveBeenCalledWith('Темна енергія поглинає джерела світла поблизу...');
    });

    test('метод evolve має змінювати стан з "нестабільна" на "форма порожнечі"', () => {
        darkEnergy.evolve();
        expect(darkEnergy['state']).toBe('форма порожнечі');
    });

    test('метод evolve має змінювати стан з "форма порожнечі" на "нестабільна"', () => {
        darkEnergy.evolve(); 
        darkEnergy.evolve(); 
        expect(darkEnergy['state']).toBe('нестабільна');
    });

    test('метод evolve має виводити правильне повідомлення', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        darkEnergy.evolve();
        expect(consoleSpy).toHaveBeenCalledWith('Темна енергія еволюціонувала в: форма порожнечі');
    });
});

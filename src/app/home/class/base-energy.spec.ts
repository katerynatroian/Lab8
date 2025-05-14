import { BaseEnergy } from "./base-energy";

class EnergyMock extends BaseEnergy {
    specialAbility(): void {
        console.log('Особлива здатність використана.');
    }

    evolve(): void {
        console.log('Еволюція!');
    }
}

describe('BaseEnergy', () => {
    let energy: EnergyMock;

    beforeEach(() => {
        energy = new EnergyMock();
    });

    test('початкова потужність повинна бути 0', () => {
        expect(energy['power']).toBe(0);
    });

    test('метод charge повинен збільшувати потужність на 10', () => {
        energy.charge();
        expect(energy['power']).toBe(10);
    });

    test('метод release повинен скидувати потужність до 0', () => {
        energy.charge();
        energy.release();
        expect(energy['power']).toBe(0);
    });

    test('метод takeDamage повинен зменшувати потужність на задану кількість', () => {
        energy.charge();
        energy.takeDamage(5);
        expect(energy['power']).toBe(5);
    });

    test('метод takeDamage не повинен зменшувати потужність нижче 0', () => {
        energy.takeDamage(5);
        expect(energy['power']).toBe(0);
    });

    test('метод specialAbility повинен викликати console.log з правильним повідомленням', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        energy.specialAbility();
        expect(consoleSpy).toHaveBeenCalledWith('Особлива здатність використана.');
    });

    test('метод evolve повинен викликати console.log з правильним повідомленням', () => {
        const consoleSpy = jest.spyOn(console, 'log');
        energy.evolve();
        expect(consoleSpy).toHaveBeenCalledWith('Еволюція!');
    });
});

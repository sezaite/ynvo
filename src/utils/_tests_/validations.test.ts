import { validateEmail } from "../validations";

describe('Email validator', () => {
    it('Returns true if value is correct', ()=>{
        expect(validateEmail('test@test.com')).toBeTruthy();
        expect(validateEmail('test@test.co.uk')).toBeTruthy();
        expect(validateEmail('test_test@test.co.lt')).toBeTruthy();
    });
    it('Returns false if value is incorrect', ()=>{
        expect(validateEmail('@test.com')).toBeFalsy();
        expect(validateEmail('test@t')).toBeFalsy();
        expect(validateEmail('t@t.lt')).toBeFalsy();
    });
})
import { MinLengthError } from "@/validation/errors";
import { MinLengthValidation } from "./min-length-validation"

interface SutTypes {
    sut: MinLengthValidation
}
interface SutParams {
    field: string
    minLength: number
}

const makeSut = ({ field = 'name', minLength = 0 }: SutParams): SutTypes => {
    const sut = new MinLengthValidation(field, minLength);

    return {
        sut
    }
};


describe('MinLengthValidation', () => {
    it('should return MinLengthError', () => {
        const schema = { password: 'abc123' };

        const { sut } = makeSut({ field: 'password', minLength: 7 });

        expect(sut.validate(schema)).toEqual(new MinLengthError())
    })
})
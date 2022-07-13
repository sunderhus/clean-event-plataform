import { MinLengthError } from "@/validation/errors";
import { FieldValidation } from "@/validation/protocols/field-validation";

export class MinLengthValidation implements FieldValidation {
    constructor(readonly field: string, readonly minLength: number) {

    }

    validate(schema: Record<string, any>): MinLengthError | null {
        return schema[this.field].length >= this.minLength ? null: new MinLengthError();
    }
}
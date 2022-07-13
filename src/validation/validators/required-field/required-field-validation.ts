import { FieldValidation } from "@/validation/protocols/field-validation";
import { RequiredFieldError } from "@/validation/errors";

export class RequiredFieldValidation implements FieldValidation {
    constructor(readonly field: string) { }

    validate(schema: Record<string, any>) {
        return schema[this.field] ? null : new RequiredFieldError()
    }

}
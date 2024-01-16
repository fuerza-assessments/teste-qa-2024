/* eslint-disable @typescript-eslint/no-unused-vars */
import { type FieldValues, type FormState } from 'react-hook-form'

type Props<T extends FieldValues> = {
	formState: FormState<T>
	message?: string
}

const defaultMessage = 'Are you sure to leave without saving?'

export const useLeaveConfirm = <T extends FieldValues>({ formState, message = defaultMessage }: Props<T>) => {
	const { isDirty } = formState
}

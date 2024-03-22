import { atom } from "recoil"

export const uNameAtom = atom ({
	key: 'userName',
	default: '', 
})

export const uPassAtom = atom ({
	key: 'userPass',
	default: '', 
})

export const formIsDirtyAtom = atom ({
	key: 'formIsDirty',
	default: false,
})

export const isLoggedInAtom = atom ({
	key: 'isLoggedIn',
	default: false,
})

export const isLoggingOutAtom = atom ({
	key: 'isLoggingOut',
	default: false,
})

export const isDisabledAtom = atom ({
	key: 'isDisabled',
	default: false,
})
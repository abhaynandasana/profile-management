export const profileStatus = (status: string) => {
    switch (status) {
        case 'Alive': return 'success'
        case 'Dead': return 'error'
        default: return 'default'
    }
}
export type FilterSelectData = {
    value: string,
    title: string,
    children: FilterChildren[]
}

type FilterChildren = {
    value: string,
    title: string
}
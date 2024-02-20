import {Character} from 'globalTypes/character'
import {Pagination} from 'globalTypes/pagination'

export type SearchResult = {
    results: Character[],
    info: Pagination
}
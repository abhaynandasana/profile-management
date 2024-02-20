import {FilterSelectData} from './types'
export const FilterOptions: FilterSelectData[] = [
    {
        value: 'gender',
        title: 'Gender',
        children: [
            {
                value: 'Male',
                title: 'Male',
            },
            {
                value: 'Female',
                title: 'Female',
            }
        ]
    },
    {
        value: 'status',
        title: 'Status',
        children: [
            {
                value: 'Alive',
                title: 'Alive',
            },
            {
                value: 'Dead',
                title: 'Dead',
            },
        ],
    }
];
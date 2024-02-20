import { TreeSelect, TreeSelectProps } from 'antd';

import { FilterOptions } from './data'

export type FilterSelectProps = TreeSelectProps

const FilterSelect = (props: FilterSelectProps) => {
    const { value, onChange, ...rest } = props;

    return (
        <TreeSelect
            {...rest}
            showSearch
            value={value}
            dropdownStyle={{ maxHeight: 300, overflow: 'auto' }}
            placeholder="Filter List"
            allowClear
            multiple
            treeDefaultExpandAll
            onChange={onChange}
            treeData={FilterOptions}
        />
    )
}

export default FilterSelect;
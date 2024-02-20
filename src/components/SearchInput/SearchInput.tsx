import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AutoComplete, AutoCompleteProps } from 'antd'

export type SearchInputProps = AutoCompleteProps

const SearchInput = (props: AutoCompleteProps) => {
    const navigate = useNavigate()
    const [searchOptions, setSearchOptions] = useState<{ label: string, value: string }[]>([]);

    const {
        value,
        onChange,
        ...rest
    } = props

    const onSearch = () => {
        if (value.trim() && value.length !== 0) {
            setSearchOptions(options => [...options, { label: value, value: value }]);
            navigate(`search/?q=${value.replace(/\s+/g, '-')}`)
        }else{
            navigate('/')
        }
    };

    return (

        <AutoComplete
            {...rest}
            onChange={onChange}
            options={searchOptions}
            placeholder="Enter a search value here"
            onKeyDown={(event) => {
                if (event.key === 'Enter') {
                    onSearch()
                }
            }}
        />

    )
}

export default SearchInput;


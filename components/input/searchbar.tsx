const Searchbar = (props: {
    placeholder?: string
    label?: string,
    value: string,
    onChange: (e: any) => void
}) => {
    return (
        <div>
            {props.label && <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                {props.label}
            </label>}
            <div className="mt-2">
                <input
                    type="search"
                    name="search"
                    id="searchbar"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />
            </div>
        </div>
    )
}


export default Searchbar;
const Container = ({ children, tagName = 'div' }) => {

    const Tag = tagName;

    return (
        <Tag className="container">
            {children}
        </Tag>
    )
}
export default Container;
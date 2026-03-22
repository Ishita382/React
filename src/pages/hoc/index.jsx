const withUser = (WrappedComponent) => {
    return (props) => {
        const user = {
        name: 'Ishita'
    }
    return <WrappedComponent {...props} user={user} />
}
}


const HOC = ({user}) =>  {
    return <div>{user.name}</div>
}

export default withUser(HOC);


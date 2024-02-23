const App = () => (
    <div>
        <Person
            name='Jonathan'
            age={15}
            hobbies={['skiing', 'running', 'snowboarding']}
        />
        <Person
            name='Bob'
            age={65}
            hobbies={['walking', 'watching tv', 'crosswords']}
        />
        <Person
            name='Lily'
            age={32}
            hobbies={['reading', 'running', 'climbing']}
        />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
const App = () => (
    <div>
        <Tweet
            username='jonathan'
            name='Jonathan'
            message='hello'
            date='2/2/2024'
        />
        <Tweet
            username='jonathan'
            name='Jonathan'
            message='hi'
            date='2/2/2024'
        />
        <Tweet
            username='jonathan'
            name='Jonathan'
            message='howdy'
            date='2/2/2024'
        />
    </div>
)

ReactDOM.render(<App />, document.getElementById("root"))
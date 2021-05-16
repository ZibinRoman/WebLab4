class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
    
    render() {
        return (
            <div className="clock_root container-sm"> 
                <div className="row-sm align-items-center">
                    <div className="col-sm align-self-center">
                        <h1 className="text-center user-select-none">
                            Текущее время:
                            {this.state.date.toLocaleTimeString()}
                            .
                        </h1>
                    </div>
                </div>
            </div>
        );
    }
}
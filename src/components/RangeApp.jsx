class RangeApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            id: "",
            label: "",
            min: "",
            max: "",
            step: "",
            value: 1,
            name: ""
        };
        
    }
    
    componentDidUpdate(prevProps) {
        if (this.props.value !== prevProps.value) {
            this.setState({
                value: this.props.value
            });
        }
    }
    
    componentDidMount(){
        this.setState({
            isLoaded: true,
            id: this.props.id,
            label: this.props.label,
            min: this.props.min,
            max: this.props.max,
            step: this.props.step,
            value: this.props.value,
            name: this.props.name
        });
    }
    
    render(){
        const{error, isLoaded, id, label, min, max, step, value, name} = this.state;
        if (error) {
            return <ErrorApp message={error.message}/>;
        } 
        else if (!isLoaded) {
            return <LoadingApp />;
        }
        else{
            return(
            <div className="container-sm-fluid">    
                <label 
                    for={id} 
                    className="form-label user-select-none fs-6"
                >
                    {label}
                </label>
                <input
                    id={id}
                    name={name}
                    type="range" 
                    className="form-range w-100 border border-dark border-3 rounded"
                    min={min} 
                    max={max} 
                    step={step}
                    value={value}
                    list={id}
                    onChange={this.props.handleChange}
                />
                <label 
                    for={id} 
                    className="form-label user-select-none"
                >
                    <span className="badge rounded bg-dark text-white fs-6">
                        Всего:
                    </span>
                    <span className="badge rounded-pill bg-dark text-white fs-6">
                        {`${value}`}
                    </span>
                    <i className="bi bi-person-square"></i>
                </label>
            </div>    
            );
        }
    }
}